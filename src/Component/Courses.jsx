

import { useState, useMemo, useEffect } from "react"
import CourseCard from "./CourseCard" // Ensure CourseCard is imported
import { Link } from "react-router-dom" // Import Link for navigation

const PopularCourses = () => {
  const [activeBtn, setActiveBtn] = useState(0)
  const [courses, setCourses] = useState([]) // State to store fetched courses
  const [loading, setLoading] = useState(true) // Loading state
  const [error, setError] = useState(null) // Error state

  const filterBtns = ["All Programme", "Design", "Development", "Data Science", "Personal Development", "Healthcare"]

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
        setCourses(data.data) // Correctly set courses to the 'data' array from the API response
      } catch (err) {
        console.error("Error fetching courses:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCourses()
  }, []) // Empty dependency array means this runs once on mount

  // Filter courses based on selected category
  const filteredCourses = useMemo(() => {
    if (activeBtn === 0) {
      return courses
    }
    const selectedCategoryName = filterBtns[activeBtn]
    return courses.filter((course) => {
      if (!course.category || !course.category.name) {
        return false
      }
      const courseCategoryName = course.category.name.toLowerCase()
      const filterCategoryName = selectedCategoryName.toLowerCase()
      return courseCategoryName.includes(filterCategoryName)
    })
  }, [activeBtn, courses]) // Depend on activeBtn and fetched courses

  // Limit to display only the first 4 courses
  const coursesToDisplay = filteredCourses.slice(0, 4)

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="font-dm-sans text-4xl md:text-5xl font-bold text-gray-900 inline-block relative pb-2">
            Popular Courses
            <svg
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
              width="150"
              height="10"
              viewBox="0 0 150 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 5C25 15 125 0 145 5" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {filterBtns.map((btn, i) => (
            <button
              key={i}
              onClick={() => setActiveBtn(i)}
              className={`font-dm-sans text-sm md:text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap
              ${
                activeBtn === i
                  ? "bg-green-600 text-white shadow-sm"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:text-gray-800"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="font-dm-sans text-gray-500 text-lg">Loading courses...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="font-dm-sans text-red-500 text-lg">Error loading courses: {error}</p>
            <p className="font-dm-sans text-gray-500 text-sm">
              Please check your network connection or the API endpoint.
            </p>
          </div>
        ) : coursesToDisplay.length > 0 ? ( // Use coursesToDisplay here
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coursesToDisplay.map(
              (
                course, // Map over coursesToDisplay
              ) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  name={course.category?.name || "Unknown"}
                  overlayTitle={course.title}
                  courseTitle={course.title}
                  description={course.description}
                  level={course.level}
                  time={`${course.duration} hours`}
                  price={`N ${course.price.toLocaleString()}`}
                  oldPrice={course.discounted_price ? `N ${course.discounted_price.toLocaleString()}` : null}
                  enrolledCount={0} // Not available in API, using dummy
                  previewImage={course.thumbnail_url}
                  instructor={course.instructor_name}
                  avatar={"/placeholder.svg?height=32&width=32"} // Not available in API, using placeholder
                  rating={0} // Not available in API, using dummy
                />
              ),
            )}
          </div>
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="font-dm-sans text-gray-500 text-lg">No courses found in this category.</p>
            <button
              onClick={() => setActiveBtn(0)}
              className="mt-4 font-dm-sans text-blue-600 hover:text-blue-700 font-medium"
            >
              View all courses
            </button>
          </div>
        )}

        {/* View All Courses Button */}
        {filteredCourses.length > 4 && ( // Only show if there are more than 4 courses
          <div className="text-center mt-12">
            <Link
              to="/courses" // Link to the main course page
              className="font-dm-sans bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View All Courses
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default PopularCourses
