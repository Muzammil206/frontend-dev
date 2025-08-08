"use client"

import { useState, useEffect } from "react"
import { PlayCircle } from "lucide-react"
import { Link } from "react-router-dom"

const MostViewedCoursesSection = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch("https://lms-backend-yux4.onrender.com/api/v1/courses")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        // Assuming data.data contains the array of courses
        // For "Most Viewed", we'll just take the first 2 courses from the API response
        // as there's no direct 'views' metric in the current API structure to sort by.
        setCourses(data.data.slice(0, 2))
      } catch (err) {
        console.error("Error fetching most viewed courses:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCourses()
  }, [])

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-dm-sans text-3xl md:text-4xl font-bold text-gray-900">Most viewed courses</h2>
          <Link to="/courses" className="font-dm-sans text-blue-600 hover:underline font-medium">
            See all
          </Link>
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="font-dm-sans text-gray-500 text-lg">Loading most viewed courses...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="font-dm-sans text-red-500 text-lg">Error loading courses: {error}</p>
            <p className="font-dm-sans text-gray-500 text-sm">
              Please check your network connection or the API endpoint.
            </p>
          </div>
        ) : courses.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-60 bg-gray-200 flex items-center justify-center">
                  <img
                    src={course.thumbnail_url || "/placeholder.svg?height=300&width=500"}
                    alt={`${course.title} preview`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-dm-sans text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="font-dm-sans text-sm text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-dm-sans text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                      {course.duration} hours {/* Assuming duration is in hours */}
                    </span>
                    <span className="font-dm-sans text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                      {course.course_type} {/* Assuming course_type from API */}
                    </span>
                  </div>
                  {/* Dummy modules as they are not in the current API response */}
                  <div className="grid grid-cols-5 gap-2 text-center mb-6">
                    {[
                      { number: "01", title: "Intro" },
                      { number: "02", title: "Concepts" },
                      { number: "03", title: "Practice" },
                      { number: "04", title: "Advanced" },
                      { number: "05", title: "Project" },
                    ].map((module) => (
                      <div key={module.number} className="flex flex-col items-center">
                        <span className="font-dm-sans text-lg font-bold text-gray-900">{module.number}</span>
                        <span className="font-dm-sans text-xs text-gray-600 leading-tight">{module.title}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/courses/${course.id}`}
                      className="font-dm-sans bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      View Course
                    </Link>
                    <span className="font-dm-sans text-sm text-gray-600">N/A views</span> {/* Views not in API */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="font-dm-sans text-gray-500 text-lg">No most viewed courses found.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default MostViewedCoursesSection
