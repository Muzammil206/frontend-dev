"use client"

import { useState } from "react"
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import { useAuth } from "../context/auth-context"
import { MoreVertical, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import MyCourseCard from "../Component/my-course-card"

const MyCoursesPage = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const coursesPerPage = 12

  // Mock data for ongoing courses - following your existing data structure
  const allCourses = [
    {
      id: 1,
      title: "Typography in web design: Enhancing UI/UX web apps",
      category: "Design",
      duration: "3 months",
      rating: 4.8,
      currentLesson: 7,
      totalLessons: 12,
      progress: 58,
      image: "/placeholder.svg?height=200&width=300",
      isFavorite: true,
    },
    {
      id: 2,
      title: "Typography in web design: Enhancing UI/UX web apps",
      category: "Design", 
      duration: "3 months",
      rating: 4.8,
      currentLesson: 7,
      totalLessons: 12,
      progress: 58,
      image: "/placeholder.svg?height=200&width=300",
      isFavorite: false,
    },
    {
      id: 3,
      title: "Typography in web design: Enhancing UI/UX web apps",
      category: "Design",
      duration: "3 months", 
      rating: 4.8,
      currentLesson: 7,
      totalLessons: 12,
      progress: 58,
      image: "/placeholder.svg?height=200&width=300",
      isFavorite: true,
    },
    {
      id: 4,
      title: "Typography in web design: Enhancing UI/UX web apps",
      category: "Design",
      duration: "3 months",
      rating: 4.8,
      currentLesson: 7,
      totalLessons: 12,
      progress: 58,
      image: "/placeholder.svg?height=200&width=300",
      isFavorite: false,
    },
    {
      id: 5,
      title: "Typography in web design: Enhancing UI/UX web apps",
      category: "Design",
      duration: "3 months",
      rating: 4.8,
      currentLesson: 7,
      totalLessons: 12,
      progress: 58,
      image: "/placeholder.svg?height=200&width=300",
      isFavorite: false,
    },
    {
      id: 6,
      title: "Typography in web design: Enhancing UI/UX web apps",
      category: "Design",
      duration: "3 months",
      rating: 4.8,
      currentLesson: 7,
      totalLessons: 12,
      progress: 58,
      image: "/placeholder.svg?height=200&width=300",
      isFavorite: true,
    },
    {
      id: 7,
      title: "Typography in web design: Enhancing UI/UX web apps",
      category: "Design",
      duration: "3 months",
      rating: 4.8,
      currentLesson: 7,
      totalLessons: 12,
      progress: 58,
      image: "/placeholder.svg?height=200&width=300",
      isFavorite: false,
    },
    {
      id: 8,
      title: "Typography in web design: Enhancing UI/UX web apps",
      category: "Design",
      duration: "3 months",
      rating: 4.8,
      currentLesson: 7,
      totalLessons: 12,
      progress: 58,
      image: "/placeholder.svg?height=200&width=300",
      isFavorite: false,
    },
    {
      id: 9,
      title: "Typography in web design: Enhancing UI/UX web apps",
      category: "Design",
      duration: "3 months",
      rating: 4.8,
      currentLesson: 7,
      totalLessons: 12,
      progress: 58,
      image: "/placeholder.svg?height=200&width=300",
      isFavorite: true,
    },
    {
      id: 10,
      title: "Typography in web design: Enhancing UI/UX web apps",
      category: "Design",
      duration: "3 months",
      rating: 4.8,
      currentLesson: 7,
      totalLessons: 12,
      progress: 58,
      image: "/placeholder.svg?height=200&width=300",
      isFavorite: false,
    },
    {
      id: 11,
      title: "Typography in web design: Enhancing UI/UX web apps",
      category: "Design",
      duration: "3 months",
      rating: 4.8,
      currentLesson: 7,
      totalLessons: 12,
      progress: 58,
      image: "/placeholder.svg?height=200&width=300",
      isFavorite: false,
    },
    {
      id: 12,
      title: "Typography in web design: Enhancing UI/UX web apps",
      category: "Design",
      duration: "3 months",
      rating: 4.8,
      currentLesson: 7,
      totalLessons: 12,
      progress: 58,
      image: "/placeholder.svg?height=200&width=300",
      isFavorite: true,
    },
  ]

  // Filter courses based on active tab
  const filteredCourses = () => {
    switch (activeTab) {
      case "Favourites":
        return allCourses.filter(course => course.isFavorite)
      case "Archived":
        return [] // No archived courses for now
      default:
        return allCourses
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="pt-28 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header with User Info */}
          

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
          <h1 className="font-dm-sans text-3xl font-bold text-gray-900 mb-8">Ongoing Courses</h1>

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
                {activeTab === "Favourites" ? "No favourite courses yet" : 
                 activeTab === "Archived" ? "No archived courses" : "No courses found"}
              </h3>
              <p className="text-gray-600 mb-6">
                {activeTab === "Favourites" ? "Mark courses as favourites to see them here." :
                 activeTab === "Archived" ? "Archived courses will appear here." : "Start learning to see your courses here."}
              </p>
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
