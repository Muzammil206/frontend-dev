

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom" // Import useNavigate
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import CourseCurriculum from "../Component/course-curriculum"
import CourseInstructor from "../Component/course-instructor"
import CourseReviews from "../Component/course-reviews"
import RelatedCoursesSection from "../Component/related-courses-section"
import { Clock, Users, Globe, Calendar, FileText, Award, Monitor, Share2, Copy, PlayCircle } from "lucide-react"
import { useCart } from "../context/cart-context" // Import useCart hook
import { toast } from "react-hot-toast" // Assuming react-hot-toast is installed

// Dummy data for a single course detail (replace with fetched data)
const dummyCourseDetail = {
  id: "python-programming",
  title: "Introduction To Python Programming",
  shortDescription:
    "Learn the basics of Python, a versatile programming language used in web development, data analysis, machine learning, and more. This course covers fundamental concepts and practical applications.",
  tags: ["Programming", "Data Analysis", "Beginner"],
  videoPreview: "/placeholder.svg?height=400&width=700",
  price: 32.0,
  oldPrice: 45.0,
  discount: "56% OFF",
  timeRemaining: "2 days left at this price!",
  updatedOn: "01/02/2025",
  duration: "4 weeks",
  studentsEnrolled: "6,012",
  language: "English",
  includes: [
    { icon: Clock, text: "Lifetime access" },
    { icon: FileText, text: "Free exercises file & downloadable resources" },
    { icon: Award, text: "Shareable certificate of completion" },
    { icon: Monitor, text: "Access on mobile, tablet and TV" },
  ],
  curriculum: [
    { title: "Module 1: Introduction to Python", duration: "2 hours" },
    { title: "Module 2: Data Types and Variables", duration: "3 hours" },
    { title: "Module 3: Control Flow", duration: "4 hours" },
    { title: "Module 4: Functions and Modules", duration: "3 hours" },
    { title: "Module 5: Project: Build a Simple Calculator", duration: "5 hours" },
  ],
  instructor: {
    name: "Dr. John Doe",
    title: "Lead Instructor",
    experience: "Ph.D. in Computer Science, 10+ years of experience",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  reviews: {
    overallRating: 4.8,
    totalReviews: 150,
    breakdown: [
      { stars: "5 Star", percentage: 70 },
      { stars: "4 Star", percentage: 20 },
      { stars: "3 Star", percentage: 5 },
      { stars: "2 Star", percentage: 3 },
      { stars: "1 Star", percentage: 2 },
    ],
    individualReviews: [
      {
        author: "Fatima Traore",
        timeAgo: "2 weeks ago",
        stars: 5,
        comment:
          '"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"',
        likes: 12,
        dislikes: 2,
      },
      {
        author: "Ikenna Eze",
        timeAgo: "1 month ago",
        stars: 4,
        comment:
          "The course content is well-structured and comprehensive. However, some modules could use more practical exercises.",
        likes: 8,
        dislikes: 1,
      },
    ],
  },
}

// Dummy data for related courses (reusing structure from CourseDetailPage)
const allCourses = [
  {
    id: "personal-growth-1",
    name: "Personal Development",
    overlayTitle: "Personal Growth",
    courseTitle: "The Science of Well-Being",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    level: "Intermediate",
    time: "6 months",
    price: "N 12,000",
    oldPrice: null,
    enrolledCount: 234,
    previewImage: "/placeholder.svg?height=200&width=300",
    instructor: "Jane Doe",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.7,
  },
  {
    id: "personal-growth-2",
    name: "Personal Development",
    overlayTitle: "Personal Growth",
    courseTitle: "The Science of Well-Being",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    level: "Intermediate",
    time: "6 months",
    price: "N 12,000",
    oldPrice: null,
    enrolledCount: 234,
    previewImage: "/placeholder.svg?height=200&width=300",
    instructor: "Jane Doe",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.7,
  },
  {
    id: "personal-growth-3",
    name: "Personal Development",
    overlayTitle: "Personal Growth",
    courseTitle: "The Science of Well-Being",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    level: "Intermediate",
    time: "6 months",
    price: "N 12,000",
    oldPrice: null,
    enrolledCount: 234,
    previewImage: "/placeholder.svg?height=200&width=300",
    instructor: "Jane Doe",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.7,
  },
  {
    id: "personal-growth-4",
    name: "Personal Development",
    overlayTitle: "Personal Growth",
    courseTitle: "The Science of Well-Being",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    level: "Intermediate",
    time: "6 months",
    price: "N 12,000",
    oldPrice: null,
    enrolledCount: 234,
    previewImage: "/placeholder.svg?height=200&width=300",
    instructor: "Jane Doe",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.7,
  },
]

const CourseDetailsPage = () => {
  const { id } = useParams() // Get course ID from URL
  const navigate = useNavigate() // Initialize useNavigate
  const { addToCart } = useCart() // Use the cart context
  const [course, setCourse] = useState(null)
  const [activeTab, setActiveTab] = useState("Curriculum") // Default active tab

  useEffect(() => {
    // In a real app, you'd fetch course data based on 'id'
    // For now, we'll use dummy data
    setCourse(dummyCourseDetail)
  }, [id])

  const handleAddToCart = () => {
    if (course) {
      addToCart(course)
      toast.success(`${course.title} added to cart!`)
      navigate("/cart") // Navigate to the cart page
    }
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="font-dm-sans text-lg text-gray-700">Loading course details...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav /> {/* Reusing the existing Nav component */}
      <main className="pt-28 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Course Title */}
          <h1 className="font-dm-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <p className="font-dm-sans text-base md:text-lg text-gray-600 mb-8 max-w-3xl">{course.shortDescription}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            {course.tags.map((tag, index) => (
              <span
                key={index}
                className="font-dm-sans text-sm font-medium bg-gray-200 text-gray-800 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Video and Tabs */}
            <div className="lg:col-span-2">
              {/* Video Preview */}
              <div className="relative w-full h-64 md:h-96 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-lg mb-8">
                <img
                  src={course.videoPreview || "/placeholder.svg"}
                  alt={`${course.title} preview`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                  <PlayCircle className="w-20 h-20 md:w-24 md:h-24 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
                  <span className="font-dm-sans text-lg md:text-xl mt-2">Preview The Course</span>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {["Overview", "Curriculum", "Instructor", "Reviews"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`font-dm-sans whitespace-nowrap py-4 px-1 border-b-2 text-sm font-medium ${
                        activeTab === tab
                          ? "border-blue-600 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div>
                {activeTab === "Overview" && (
                  <div className="font-dm-sans text-gray-700 leading-relaxed">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h3>
                    <p className="mb-4">
                      This comprehensive course is designed for beginners and experienced programmers alike who want to
                      master Python. You'll start with the absolute basics of programming and Python syntax, then move
                      on to more advanced topics like data structures, object-oriented programming, and working with
                      external libraries.
                    </p>
                    <p className="mb-4">
                      Through hands-on exercises and real-world projects, you'll gain practical experience that will
                      enable you to build your own applications, automate tasks, and analyze data effectively. The
                      course emphasizes best practices and problem-solving techniques, preparing you for a career in
                      software development, data science, or any field that leverages Python.
                    </p>
                    <p>
                      By the end of this course, you will have a strong foundation in Python programming and be able to
                      confidently tackle complex coding challenges.
                    </p>
                  </div>
                )}
                {activeTab === "Curriculum" && <CourseCurriculum modules={course.curriculum} />}
                {activeTab === "Instructor" && <CourseInstructor instructor={course.instructor} />}
                {activeTab === "Reviews" && (
                  <CourseReviews
                    rating={course.reviews.overallRating}
                    totalReviews={course.reviews.totalReviews}
                    breakdown={course.reviews.breakdown}
                    reviews={course.reviews.individualReviews}
                  />
                )}
              </div>
            </div>

            {/* Right Column: Price Card and Includes */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-28">
                {/* Price and Discount */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-dm-sans text-3xl font-bold text-gray-900">${course.price.toFixed(2)}</span>
                  <span className="font-dm-sans text-lg text-gray-500 line-through">${course.oldPrice.toFixed(2)}</span>
                  <span className="font-dm-sans text-sm font-medium text-white bg-red-500 px-2 py-1 rounded-md ml-auto">
                    {course.discount}
                  </span>
                </div>
                <p className="font-dm-sans text-sm text-red-600 mb-6 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.timeRemaining}
                </p>

                {/* Course Stats */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="font-dm-sans text-sm text-gray-600 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" /> Updated on
                    </span>
                    <span className="font-dm-sans text-sm font-medium text-gray-800">{course.updatedOn}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-dm-sans text-sm text-gray-600 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" /> Duration
                    </span>
                    <span className="font-dm-sans text-sm font-medium text-gray-800">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-dm-sans text-sm text-gray-600 flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" /> Students Enrolled
                    </span>
                    <span className="font-dm-sans text-sm font-medium text-gray-800">{course.studentsEnrolled}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-dm-sans text-sm text-gray-600 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-500" /> Language
                    </span>
                    <span className="font-dm-sans text-sm font-medium text-gray-800">{course.language}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 mb-8">
                  <button className="font-dm-sans w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors">
                    Enroll Now
                  </button>
                  <div className="flex gap-3">
                    <button
                      onClick={handleAddToCart} // Add onClick handler
                      className="font-dm-sans flex-1 border border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-lg font-medium transition-colors"
                    >
                      Add To Cart
                    </button>
                    <button className="font-dm-sans flex-1 border border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-lg font-medium transition-colors">
                      Save
                    </button>
                  </div>
                </div>

                {/* Course Includes */}
                <div className="mb-8">
                  <h4 className="font-dm-sans text-lg font-bold text-gray-900 mb-4">This course includes:</h4>
                  <div className="space-y-3">
                    {course.includes.map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-gray-600" />
                          <span className="font-dm-sans text-sm text-gray-700">{item.text}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Share This Course */}
                <div>
                  <h4 className="font-dm-sans text-lg font-bold text-gray-900 mb-4">Share this course:</h4>
                  <div className="flex gap-3">
                    <button className="font-dm-sans flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-lg font-medium transition-colors">
                      <Copy className="w-4 h-4" />
                      Copy link
                    </button>
                    <button className="font-dm-sans w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Related Courses Section */}
      <RelatedCoursesSection courses={allCourses} /> {/* Pass allCourses as related courses */}
      <Footer />
    </div>
  )
}

export default CourseDetailsPage
