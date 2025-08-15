"use client"

import { useState, useEffect } from "react"
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import { useAuth } from "../context/auth-context"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MyCourseCard from "../Component/my-course-card"
import { supabase } from "../lib/supabase"
import { Link } from "react-router-dom"

const MyCoursesPage = () => {
  const { user, loading: authLoading } = useAuth()
  const [activeTab, setActiveTab] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [enrolledCourses, setEnrolledCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const coursesPerPage = 12

  // Fetch enrolled courses from Supabase and get course details from API
  const fetchEnrolledCourses = async () => {
    if (!user?.id) return

    setLoading(true)
    setError(null)

    try {
      // First, get enrollments from Supabase
      const { data: enrollments, error } = await supabase
        .from("enrollments")
        .select("*")
        .eq("user_id", user.id)
        .eq("payment_status", "paid")
        .order("enrolled_at", { ascending: false })

      if (error) {
        console.error("Error fetching enrollments:", error)
        setError("Failed to load enrolled courses")
        return
      }

      if (!enrollments || enrollments.length === 0) {
        setEnrolledCourses([])
        return
      }

      // Fetch course details for each enrollment
      const courseDetailsPromises = enrollments.map(async (enrollment, index) => {
        try {
          const response = await fetch(`https://lms-backend-yux4.onrender.com/api/v1/courses/${enrollment.course_id}`)
          if (!response.ok) {
            console.error(`Failed to fetch course ${enrollment.course_id}`)
            return null
          }
          const courseData = await response.json()

          if (courseData.success && courseData.data) {
            const course = courseData.data

            // Calculate total lessons from all modules and contents
            const totalLessons = course.modules.reduce((total, module) => {
              return total + (module.contents ? module.contents.length : 0)
            }, 0)

            // For demo purposes, generate some progress data
            const currentLesson = Math.floor(Math.random() * totalLessons) + 1
            const progress = Math.floor((currentLesson / totalLessons) * 100)

            return {
              id: course.id,
              title: course.title,
              category: course.category?.name || "Course",
              duration: `${course.duration} hours`,
              rating: 4.8,
              currentLesson: currentLesson,
              totalLessons: totalLessons,
              progress: progress,
              image: course.thumbnail_url || "/placeholder.svg?height=200&width=300",
              instructor: course.instructor_name || "Unknown Instructor",
              enrollmentDate: enrollment.enrolled_at,
              completed: enrollment.completed,
              level: course.level,
              price: course.price,
              // Store enrollment info for reference
              enrollmentId: enrollment.id,
              transactionId: enrollment.transaction_id,
              amountPaid: enrollment.amount_paid,
              isFavorite: index % 3 === 0, // Make every 3rd course a favorite for demo
            }
          }
          return null
        } catch (err) {
          console.error(`Error fetching course details for ${enrollment.course_id}:`, err)
          return null
        }
      })

      const courseDetails = await Promise.all(courseDetailsPromises)
      const validCourses = courseDetails.filter((course) => course !== null)

      setEnrolledCourses(validCourses)
    } catch (err) {
      console.error("Error in fetchEnrolledCourses:", err)
      setError("Failed to load enrolled courses")
    } finally {
      setLoading(false)
    }
  }

  // Load enrolled courses when user is available
  useEffect(() => {
    if (user && user.id && !authLoading) {
      fetchEnrolledCourses()
    }
  }, [user, authLoading])

  // Filter courses based on active tab
  const filteredCourses = () => {
    switch (activeTab) {
      case "Favourites":
        return enrolledCourses.filter((course) => course.isFavorite)
      case "Archived":
        return enrolledCourses.filter((course) => course.completed)
      default:
        return enrolledCourses
    }
  }

  const courses = filteredCourses()
  const totalPages = Math.ceil(courses.length / coursesPerPage)
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const getPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i)
        }
        pageNumbers.push("...")
        pageNumbers.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1)
        pageNumbers.push("...")
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i)
        }
      } else {
        pageNumbers.push(1)
        pageNumbers.push("...")
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i)
        }
        pageNumbers.push("...")
        pageNumbers.push(totalPages)
      }
    }
    return pageNumbers
  }

  // Show loading state
  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Nav />
        <main className="pt-28 pb-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mb-4"></div>
                <p className="font-dm-sans text-gray-600">Loading your courses...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Nav />
        <main className="pt-28 pb-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <p className="font-dm-sans text-red-500 text-lg mb-4">{error}</p>
                <button
                  onClick={fetchEnrolledCourses}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="pt-28 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header with User Info */}
          {/* <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-dm-sans text-xl font-bold leading-tight text-gray-900">Awibi</span>
                <span className="font-dm-sans text-sm text-gray-600 leading-tight">Institute</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-dm-sans text-lg font-medium text-gray-900">
                {user?.user_metadata?.full_name || user?.email || "Student"}
              </span>
            </div>
          </div> */}

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {["All", "Favourites", "Archived"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab)
                    setCurrentPage(1) // Reset to first page when changing tabs
                  }}
                  className={`font-dm-sans whitespace-nowrap py-4 px-1 border-b-2 text-sm font-medium ${
                    activeTab === tab
                      ? "border-green-600 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Section Title */}
          <h1 className="font-dm-sans text-3xl font-bold text-gray-900 mb-8">
            {activeTab === "All"
              ? "Ongoing Courses"
              : activeTab === "Favourites"
                ? "Favourite Courses"
                : "Archived Courses"}
          </h1>

          {/* Course Grid */}
          {currentCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {currentCourses.map((course) => (
                <MyCourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  category={course.category}
                  duration={course.duration}
                  rating={course.rating}
                  currentLesson={course.currentLesson}
                  totalLessons={course.totalLessons}
                  progress={course.progress}
                  image={course.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">
                <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {activeTab === "Favourites"
                  ? "No favourite courses yet"
                  : activeTab === "Archived"
                    ? "No archived courses"
                    : "No enrolled courses found"}
              </h3>
              <p className="text-gray-600 mb-6">
                {activeTab === "Favourites"
                  ? "Mark courses as favourites to see them here."
                  : activeTab === "Archived"
                    ? "Completed courses will appear here."
                    : "Start learning by enrolling in courses."}
              </p>
              {activeTab === "All" && (
                <Link
                  to="/courses"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Browse Courses
                </Link>
              )}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              {getPageNumbers().map((pageNumber, index) => (
                <button
                  key={index}
                  onClick={() => typeof pageNumber === "number" && handlePageChange(pageNumber)}
                  disabled={pageNumber === "..."}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pageNumber === currentPage
                      ? "bg-green-600 text-white"
                      : pageNumber === "..."
                        ? "bg-white text-gray-400 cursor-default"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MyCoursesPage
