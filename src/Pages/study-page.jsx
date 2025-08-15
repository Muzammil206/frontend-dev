

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronDown, ChevronUp, BookOpen, Play, FileText, CheckCircle } from "lucide-react"
import { useAuth } from "../context/auth-context"

const StudyPage = () => {
  const { courseId, lessonId } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()

  const [course, setCourse] = useState(null)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [expandedSections, setExpandedSections] = useState([])
  const [completedLessons, setCompletedLessons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState("Description")

  // Fetch course details from API
  useEffect(() => {
    const fetchCourseDetails = async () => {
      if (!courseId) return

      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`https://lms-backend-yux4.onrender.com/api/v1/courses/${courseId}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const courseData = await response.json()

        if (courseData.success && courseData.data) {
          const courseInfo = courseData.data

          // Transform the course data to match our study page structure
          const transformedCourse = {
            id: courseInfo.id,
            title: courseInfo.title,
            instructor: courseInfo.instructor_name || "Unknown Instructor",
            modules: courseInfo.modules.map((module, moduleIndex) => ({
              id: module.id,
              title: module.title,
              description: module.description,
              position: module.position,
              lessons: module.contents
                ? module.contents.map((content, contentIndex) => ({
                    id: content.id,
                    title: content.title,
                    type: content.content_type, // 'video', 'text', 'quiz', 'assignment'
                    icon:
                      content.content_type === "video"
                        ? Play
                        : content.content_type === "quiz"
                          ? FileText
                          : content.content_type === "assignment"
                            ? FileText
                            : BookOpen,
                    videoUrl: content.video_url || content.video?.video_url,
                    description: content.description,
                    duration: content.duration || content.video?.duration,
                    transcript: content.transcript || content.video?.transcript,
                    thumbnailUrl: content.thumbnail_url || content.video?.thumbnail_url,
                    position: content.position,
                    content: {
                      title: content.title,
                      text: content.description || "Content will be displayed here.",
                      videoUrl: content.video_url || content.video?.video_url,
                      quiz: content.quiz,
                      assignment: content.assignment,
                    },
                  }))
                : [],
            })),
          }

          setCourse(transformedCourse)

          // Auto-expand first module
          if (transformedCourse.modules.length > 0) {
            setExpandedSections([transformedCourse.modules[0].id])
          }

          // Find current lesson or set to first lesson
          if (lessonId) {
            const lesson = findLessonById(transformedCourse, lessonId)
            setCurrentLesson(lesson)
          } else {
            // Default to first lesson
            const firstLesson = transformedCourse.modules.find((module) => module.lessons.length > 0)?.lessons[0]
            if (firstLesson) {
              setCurrentLesson(firstLesson)
              navigate(`/study/${courseId}/${firstLesson.id}`, { replace: true })
            }
          }
        } else {
          setError("Course not found or invalid response")
        }
      } catch (err) {
        console.error("Error fetching course details:", err)
        setError(`Failed to load course: ${err.message}`)
      } finally {
        setLoading(false)
      }
    }

    fetchCourseDetails()
  }, [courseId, lessonId, navigate])

  const findLessonById = (course, lessonId) => {
    for (const module of course.modules) {
      const lesson = module.lessons.find((l) => l.id === lessonId)
      if (lesson) return lesson
    }
    return null
  }

  const getAllLessons = () => {
    return course?.modules.flatMap((module) => module.lessons) || []
  }

  const getCurrentLessonIndex = () => {
    const allLessons = getAllLessons()
    return allLessons.findIndex((lesson) => lesson.id === currentLesson?.id)
  }

  const navigateToLesson = (direction) => {
    const allLessons = getAllLessons()
    const currentIndex = getCurrentLessonIndex()

    if (direction === "prev" && currentIndex > 0) {
      const prevLesson = allLessons[currentIndex - 1]
      setCurrentLesson(prevLesson)
      navigate(`/study/${courseId}/${prevLesson.id}`)
    } else if (direction === "next" && currentIndex < allLessons.length - 1) {
      const nextLesson = allLessons[currentIndex + 1]
      setCurrentLesson(nextLesson)
      navigate(`/study/${courseId}/${nextLesson.id}`)
    }
  }

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  const markAsComplete = () => {
    if (currentLesson && !completedLessons.includes(currentLesson.id)) {
      setCompletedLessons((prev) => [...prev, currentLesson.id])
      // Here you would also save to backend/database
      console.log(`Marked lesson ${currentLesson.id} as complete`)
    }
  }

  const extractYouTubeId = (url) => {
    if (!url) return null
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const renderVideoPlayer = () => {
    if (!currentLesson || currentLesson.type !== "video" || !currentLesson.content?.videoUrl) {
      return (
        <div className="aspect-video w-full bg-gray-900 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-400">
            <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No video available for this lesson</p>
          </div>
        </div>
      )
    }

    const videoId = extractYouTubeId(currentLesson.content.videoUrl)
    return (
      <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden">
        {videoId ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={currentLesson.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Video player will load here</p>
              <p className="text-sm opacity-75 mt-2">URL: {currentLesson.content.videoUrl}</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <div className="p-6">
            <h2 className="font-dm-sans text-2xl font-bold text-gray-900 mb-6">
              {currentLesson?.content?.title || currentLesson?.title || "Lesson Content"}
            </h2>
            <div className="font-dm-sans text-gray-700 leading-relaxed whitespace-pre-line">
              {currentLesson?.content?.text || currentLesson?.description || "Lesson content will be displayed here."}
            </div>
            {currentLesson?.duration && (
              <div className="mt-4 text-sm text-gray-600">
                <strong>Duration:</strong> {currentLesson.duration}
              </div>
            )}
          </div>
        )
      case "Lectures Notes":
        return (
          <div className="p-6">
            <h3 className="font-dm-sans text-xl font-bold text-gray-900 mb-4">Lecture Notes</h3>
            {currentLesson?.transcript ? (
              <div className="font-dm-sans text-gray-700 leading-relaxed whitespace-pre-line">
                {currentLesson.transcript}
              </div>
            ) : (
              <p className="font-dm-sans text-gray-600">No notes available for this lesson yet.</p>
            )}
          </div>
        )
      case "Resources":
        return (
          <div className="p-6">
            <h3 className="font-dm-sans text-xl font-bold text-gray-900 mb-4">Resources</h3>
            <p className="font-dm-sans text-gray-600">No additional resources available for this lesson.</p>
          </div>
        )
      case "Comments":
        return (
          <div className="p-6">
            <h3 className="font-dm-sans text-xl font-bold text-gray-900 mb-4">Comments</h3>
            <p className="font-dm-sans text-gray-600">No comments yet. Be the first to comment!</p>
          </div>
        )
      case "Mark as complete":
        return (
          <div className="p-6 text-center">
            <h3 className="font-dm-sans text-xl font-bold text-gray-900 mb-4">Mark Lesson as Complete</h3>
            <p className="font-dm-sans text-gray-600 mb-6">
              Once you've finished this lesson, mark it as complete to track your progress.
            </p>
            <button
              onClick={markAsComplete}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-dm-sans font-medium hover:bg-green-700"
            >
              Mark as Complete
            </button>
          </div>
        )
      default:
        return null
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mb-4"></div>
          <p className="font-dm-sans text-lg text-gray-700">Loading course...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="font-dm-sans text-lg text-red-500 mb-4">{error}</p>
          <button
            onClick={() => navigate("/my-courses")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Back to My Courses
          </button>
        </div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="font-dm-sans text-lg text-gray-700">Course not found.</p>
      </div>
    )
  }

  const currentIndex = getCurrentLessonIndex()
  const allLessons = getAllLessons()
  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < allLessons.length - 1

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 min-h-screen flex flex-col">
          {/* Course Header */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="font-dm-sans text-lg font-bold text-blue-600 mb-2">{course.title}</h3>
            <p className="font-dm-sans text-sm text-gray-600">by {course.instructor}</p>
          </div>

          {/* Course Modules */}
          <div className="flex-1 overflow-y-auto">
            {course.modules.map((module) => (
              <div key={module.id} className="border-b border-gray-100">
                <button
                  onClick={() => toggleSection(module.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-dm-sans font-medium text-gray-900">{module.title}</span>
                  {module.lessons.length > 0 &&
                    (expandedSections.includes(module.id) ? (
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    ))}
                </button>

                {expandedSections.includes(module.id) && (
                  <div className="pb-2">
                    {module.lessons.map((lesson) => {
                      const IconComponent = lesson.icon
                      const isCompleted = completedLessons.includes(lesson.id)
                      const isCurrent = currentLesson?.id === lesson.id

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => {
                            setCurrentLesson(lesson)
                            navigate(`/study/${courseId}/${lesson.id}`)
                          }}
                          className={`w-full px-6 py-3 text-left flex items-center gap-3 hover:bg-gray-50 ${
                            isCurrent ? "bg-blue-50 border-r-2 border-blue-600" : ""
                          }`}
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <IconComponent
                              className={`w-4 h-4 ${lesson.type === "video" ? "text-blue-600" : "text-gray-600"}`}
                            />
                            <span
                              className={`font-dm-sans text-sm ${
                                isCurrent ? "text-blue-600 font-medium" : "text-gray-700"
                              }`}
                            >
                              {lesson.title}
                            </span>
                          </div>
                          {isCompleted && <CheckCircle className="w-4 h-4 text-green-600" />}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate("/my-courses")}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-dm-sans text-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                Go Home
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigateToLesson("prev")}
                  disabled={!canGoPrev}
                  className={`px-4 py-2 rounded-lg font-dm-sans text-sm font-medium ${
                    canGoPrev
                      ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      : "bg-gray-50 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Prev
                </button>

                <button
                  onClick={() => navigateToLesson("next")}
                  disabled={!canGoNext}
                  className={`px-4 py-2 rounded-lg font-dm-sans text-sm font-medium ${
                    canGoNext
                      ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      : "bg-gray-50 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>

                <button
                  onClick={markAsComplete}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg font-dm-sans text-sm font-medium hover:bg-green-700"
                >
                  Mark as Complete
                </button>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="flex-1 bg-gray-100">
            <div className="p-6">{renderVideoPlayer()}</div>
          </div>

          {/* Tabs and Content Section */}
          <div className="bg-white border-t border-gray-200">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex px-6">
                {["Description", "Lectures Notes", "Resources", "Comments", "Mark as complete"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`font-dm-sans py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-orange-500 text-orange-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudyPage
