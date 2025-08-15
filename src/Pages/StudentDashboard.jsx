"use client"

import { useState, useEffect } from "react"
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
import { useAuth } from "../context/auth-context"
import DashboardHeroBanner from "../Component/dashboard-hero-banner"
import DashboardStats from "../Component/dashboard-stats"
import DashboardSearchFilter from "../Component/dashboard-search-filter"
import MyCourseCard from "../Component/my-course-card"
import CourseCard from "../Component/CourseCard" // Reusing existing CourseCard
import { ChevronLeft, ChevronRight, UserCircle } from "lucide-react" // Import Lucide icons
import { supabase } from "../lib/supabase"
import { toast } from "react-hot-toast"

const StudentDashboard = () => {
  const { user, loading: authLoading } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("Trending")

  // State for enrolled courses
  const [enrolledCourses, setEnrolledCourses] = useState([])
  const [recommendedCourses, setRecommendedCourses] = useState([])
  const [youMayLikeCourses, setYouMayLikeCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch enrolled courses from Supabase and get course details from API
  const fetchEnrolledCourses = async () => {
    if (!user?.id) return

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
        toast.error("Failed to load enrolled courses")
        return
      }

      if (!enrollments || enrollments.length === 0) {
        setEnrolledCourses([])
        return
      }

      // Fetch course details for each enrollment
      const courseDetailsPromises = enrollments.map(async (enrollment) => {
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
              rating: 4.8, // Default rating
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
    }
  }

  // Fetch recommended courses from API (excluding enrolled courses)
  const fetchRecommendedCourses = async () => {
    try {
      const response = await fetch("https://lms-backend-yux4.onrender.com/api/v1/courses")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()

      // Get enrolled course IDs to exclude them
      const enrolledCourseIds = enrolledCourses.map((course) => course.id)
      const availableCourses = data.data.filter((course) => !enrolledCourseIds.includes(course.id))

      // Shuffle and take first 4 for recommended
      const shuffled = availableCourses.sort(() => 0.5 - Math.random())
      const recommended = shuffled.slice(0, 4).map((course) => ({
        id: course.id,
        name: course.category?.name || "Unknown",
        overlayTitle: course.title,
        courseTitle: course.title,
        description: course.description,
        level: course.level,
        time: `${course.duration} hours`,
        price: `N ${course.price.toLocaleString()}`,
        oldPrice: course.discounted_price ? `N ${course.discounted_price.toLocaleString()}` : null,
        enrolledCount: Math.floor(Math.random() * 500) + 100, // Random enrolled count
        previewImage: course.thumbnail_url,
        instructor: course.instructor_name,
        avatar: "/placeholder.svg?height=32&width=32",
        rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3-5
      }))

      // Take next 4 for "You may like"
      const youMayLike = shuffled.slice(4, 8).map((course) => ({
        id: course.id,
        name: course.category?.name || "Unknown",
        overlayTitle: course.title,
        courseTitle: course.title,
        description: course.description,
        level: course.level,
        time: `${course.duration} hours`,
        price: `N ${course.price.toLocaleString()}`,
        oldPrice: course.discounted_price ? `N ${course.discounted_price.toLocaleString()}` : null,
        enrolledCount: Math.floor(Math.random() * 500) + 100,
        previewImage: course.thumbnail_url,
        instructor: course.instructor_name,
        avatar: "/placeholder.svg?height=32&width=32",
        rating: (Math.random() * 2 + 3).toFixed(1),
      }))

      setRecommendedCourses(recommended)
      setYouMayLikeCourses(youMayLike)
    } catch (err) {
      console.error("Error fetching recommended courses:", err)
      // Don't show error for recommendations, just use empty arrays
    }
  }

  // Load data when user is available
  useEffect(() => {
    const loadDashboardData = async () => {
      if (user && user.id && !authLoading) {
        setLoading(true)
        setError(null)

        try {
          await fetchEnrolledCourses()
        } catch (err) {
          console.error("Error loading dashboard data:", err)
          setError("Failed to load dashboard data")
        } finally {
          setLoading(false)
        }
      }
    }

    loadDashboardData()
  }, [user, authLoading])

  // Fetch recommended courses after enrolled courses are loaded
  useEffect(() => {
    if (enrolledCourses.length >= 0) {
      // Fetch even if no enrolled courses
      fetchRecommendedCourses()
    }
  }, [enrolledCourses])

  const userName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Learner"

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
                <p className="font-dm-sans text-gray-600">Loading your dashboard...</p>
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
                  onClick={() => window.location.reload()}
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
          {/* Welcome Back Section */}
          <div className="flex items-center gap-3 mb-8">
            <UserCircle className="w-12 h-12 text-gray-600" />
            <h1 className="font-dm-sans text-3xl font-bold text-gray-900">Hello {userName}! Welcome Back. 👋</h1>
          </div>

          {/* Hero Banner */}
          <div className="mb-12">
            <DashboardHeroBanner />
          </div>

          {/* Stats Section */}
          <div className="mb-12">
            <DashboardStats enrolledCount={enrolledCourses.length} />
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <DashboardSearchFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>

          {/* My Courses Section */}
          <section className="mb-16">
            <header className="flex justify-between items-center mb-8">
              <h2 className="font-dm-sans text-3xl font-bold text-gray-900">My courses</h2>
              <Link to="/my-courses" className="font-dm-sans text-blue-600 hover:underline font-medium">
                See all
              </Link>
            </header>

            {enrolledCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {enrolledCourses.slice(0, 4).map((course) => (
                  <MyCourseCard key={course.id} {...course} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No enrolled courses yet</h3>
                <p className="text-gray-600 mb-6">Start learning by enrolling in your first course!</p>
                <Link
                  to="/courses"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Browse Courses
                </Link>
              </div>
            )}
          </section>

          {/* Recommended for you Section */}
          <section className="mb-16">
            <header className="flex justify-between items-center mb-8">
              <h2 className="font-dm-sans text-3xl font-bold text-gray-900">Recommended for you</h2>
              <Link to="/courses" className="font-dm-sans text-blue-600 hover:underline font-medium">
                See all
              </Link>
            </header>

            {recommendedCourses.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {recommendedCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
                {/* Pagination for Recommended */}
                <div className="flex gap-4 justify-end mt-8">
                  <button className="flex justify-center items-center rounded-md bg-[#49BBBD]/70 w-10 h-10 text-white">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="flex justify-center items-center rounded-md bg-[#49BBBD] w-10 h-10 text-white">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
                <p className="font-dm-sans text-gray-600">Loading recommended courses...</p>
              </div>
            )}
          </section>

          {/* You may like to view Section */}
          <section className="mb-16">
            <header className="flex justify-between items-center mb-8">
              <h2 className="font-dm-sans text-3xl font-bold text-gray-900">You may like to view</h2>
              <Link className="font-dm-sans text-blue-600 hover:underline font-medium" to="/courses">
                See all
              </Link>
            </header>

            {youMayLikeCourses.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {youMayLikeCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
                {/* Pagination for You May Like */}
                <div className="flex gap-4 justify-end mt-8">
                  <button className="flex justify-center items-center rounded-md bg-[#49BBBD]/70 w-10 h-10 text-white">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="flex justify-center items-center rounded-md bg-[#49BBBD] w-10 h-10 text-white">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
                <p className="font-dm-sans text-gray-600">Loading more courses...</p>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default StudentDashboard
