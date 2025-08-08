"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Home, BookOpen, Play, FileText, CheckCircle } from 'lucide-react'
import { useAuth } from "../context/auth-context"

const StudyPage = () => {
  const { courseId, lessonId } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  
  const [course, setCourse] = useState(null)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [expandedSections, setExpandedSections] = useState(["getting-started"])
  const [completedLessons, setCompletedLessons] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("Description")

  // Mock course data - replace with API call
  const mockCourse = {
    id: courseId,
    title: "React.js Complete Course",
    instructor: "Thomas Wayne",
    modules: [
      {
        id: "week-1",
        title: "Week 1",
        lessons: []
      },
      {
        id: "getting-started",
        title: "Getting Started",
        lessons: [
          {
            id: "welcome",
            title: "Welcome to the course",
            type: "text",
            icon: BookOpen,
            content: {
              title: "Welcome to the course",
              text: `Hi ! I am Thomas Wayne, your React.js instructor for this course. Let me tell you this, I am super happy to help you understand the core basics and advance topics of React.

In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand React in-depth. This will be a 4 hour course divided in 8 chapters and 36 lessons that includes articles, video lessons as well as assignments to help you test yourself.

Lets start now with out getting any further late, lets dive in.`
            }
          },
          {
            id: "what-is-react",
            title: "What is React Js ?",
            type: "video",
            icon: Play,
            videoUrl: "https://www.youtube.com/watch?v=dGcsHMXbSOA"
          },
          {
            id: "why-react",
            title: "Why \"React\" but not \"JavaScript\"?",
            type: "video", 
            icon: Play,
            videoUrl: "https://www.youtube.com/watch?v=dGcsHMXbSOA"
          },
          {
            id: "setting-up",
            title: "Setting up Environment",
            type: "text",
            icon: FileText,
            content: {
              title: "Setting up Environment",
              text: "In this lesson, we'll learn how to set up your development environment for React development..."
            }
          }
        ]
      },
      {
        id: "javascript-refresher",
        title: "Javascript refresher",
        lessons: [
          {
            id: "js-basics",
            title: "JavaScript Basics Review",
            type: "video",
            icon: Play,
            videoUrl: "https://www.youtube.com/watch?v=dGcsHMXbSOA"
          }
        ]
      },
      {
        id: "react-basics",
        title: "React Basics & Working with Components",
        lessons: [
          {
            id: "components-intro",
            title: "Introduction to Components",
            type: "video",
            icon: Play,
            videoUrl: "https://www.youtube.com/watch?v=dGcsHMXbSOA"
          }
        ]
      },
      {
        id: "react-states",
        title: "React States & Working with events",
        lessons: []
      },
      {
        id: "rendering-lists",
        title: "Rendering listings",
        lessons: []
      },
      {
        id: "styling-components",
        title: "Styling React Components",
        lessons: []
      },
      {
        id: "debugging",
        title: "Debugging React Apps",
        lessons: []
      },
      {
        id: "practice-project",
        title: "Practice : A complete project",
        lessons: []
      },
      {
        id: "assessment",
        title: "Assessment",
        lessons: []
      }
    ]
  }

  useEffect(() => {
    // Simulate API call
    setCourse(mockCourse)
    
    // Find current lesson
    if (lessonId) {
      const lesson = findLessonById(mockCourse, lessonId)
      setCurrentLesson(lesson)
    } else {
      // Default to first lesson
      const firstLesson = mockCourse.modules
        .find(module => module.lessons.length > 0)?.lessons[0]
      setCurrentLesson(firstLesson)
    }
    
    setLoading(false)
  }, [courseId, lessonId])

  const findLessonById = (course, lessonId) => {
    for (const module of course.modules) {
      const lesson = module.lessons.find(l => l.id === lessonId)
      if (lesson) return lesson
    }
    return null
  }

  const getAllLessons = () => {
    return course?.modules.flatMap(module => module.lessons) || []
  }

  const getCurrentLessonIndex = () => {
    const allLessons = getAllLessons()
    return allLessons.findIndex(lesson => lesson.id === currentLesson?.id)
  }

  const navigateToLesson = (direction) => {
    const allLessons = getAllLessons()
    const currentIndex = getCurrentLessonIndex()
    
    if (direction === 'prev' && currentIndex > 0) {
      const prevLesson = allLessons[currentIndex - 1]
      setCurrentLesson(prevLesson)
      navigate(`/study/${courseId}/${prevLesson.id}`)
    } else if (direction === 'next' && currentIndex < allLessons.length - 1) {
      const nextLesson = allLessons[currentIndex + 1]
      setCurrentLesson(nextLesson)
      navigate(`/study/${courseId}/${nextLesson.id}`)
    }
  }

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const markAsComplete = () => {
    if (currentLesson && !completedLessons.includes(currentLesson.id)) {
      setCompletedLessons(prev => [...prev, currentLesson.id])
      // Here you would also save to backend/database
    }
  }

  const extractYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url?.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  const renderVideoPlayer = () => {
    if (!currentLesson || currentLesson.type !== 'video' || !currentLesson.videoUrl) {
      return (
        <div className="aspect-video w-full bg-gray-900 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-400">
            <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No video available for this lesson</p>
          </div>
        </div>
      )
    }

    const videoId = extractYouTubeId(currentLesson.videoUrl)
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
            <Play className="w-16 h-16 opacity-50" />
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
              {currentLesson?.content?.title || currentLesson?.title || "Welcome to the course"}
            </h2>
            <div className="font-dm-sans text-gray-700 leading-relaxed whitespace-pre-line">
              {currentLesson?.content?.text || currentLesson?.title || "Course content will be displayed here."}
            </div>
          </div>
        )
      case "Lectures Notes":
        return (
          <div className="p-6">
            <h3 className="font-dm-sans text-xl font-bold text-gray-900 mb-4">Lecture Notes</h3>
            <p className="font-dm-sans text-gray-600">No notes available for this lesson yet.</p>
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
        <p className="font-dm-sans text-lg text-gray-700">Loading course...</p>
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
            <h3 className="font-dm-sans text-lg font-bold text-blue-600 mb-2">Week 1</h3>
          </div>

          {/* Course Modules */}
          <div className="flex-1 overflow-y-auto">
            {course?.modules.map((module) => (
              <div key={module.id} className="border-b border-gray-100">
                <button
                  onClick={() => toggleSection(module.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-dm-sans font-medium text-gray-900">{module.title}</span>
                  {module.lessons.length > 0 && (
                    expandedSections.includes(module.id) ? 
                      <ChevronUp className="w-4 h-4 text-gray-500" /> : 
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
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
                            isCurrent ? 'bg-blue-50 border-r-2 border-blue-600' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <IconComponent className={`w-4 h-4 ${
                              lesson.type === 'video' ? 'text-blue-600' : 'text-gray-600'
                            }`} />
                            <span className={`font-dm-sans text-sm ${
                              isCurrent ? 'text-blue-600 font-medium' : 'text-gray-700'
                            }`}>
                              {lesson.title}
                            </span>
                          </div>
                          {isCompleted && (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          )}
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
                onClick={() => navigate('/my-courses')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-dm-sans text-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                Go Home
              </button>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigateToLesson('prev')}
                  disabled={!canGoPrev}
                  className={`px-4 py-2 rounded-lg font-dm-sans text-sm font-medium ${
                    canGoPrev 
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                      : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Prev
                </button>
                
                <button
                  onClick={() => navigateToLesson('next')}
                  disabled={!canGoNext}
                  className={`px-4 py-2 rounded-lg font-dm-sans text-sm font-medium ${
                    canGoNext 
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                      : 'bg-gray-50 text-gray-400 cursor-not-allowed'
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
            <div className="p-6">
              {renderVideoPlayer()}
            </div>
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
            <div className="min-h-[300px]">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudyPage
