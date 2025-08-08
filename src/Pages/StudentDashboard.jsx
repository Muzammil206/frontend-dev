"use client"

import React, { useState } from "react"
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
import { useAuth } from "../context/auth-context"
import DashboardHeroBanner from "../Component/dashboard-hero-banner"
import DashboardStats from "../Component/dashboard-stats"
import DashboardSearchFilter from "../Component/dashboard-search-filter"
import MyCourseCard from "../Component/my-course-card"
import CourseCard from "../Component/CourseCard" // Reusing existing CourseCard
import { ChevronLeft, ChevronRight, UserCircle } from 'lucide-react' // Import Lucide icons

const StudentDashboard = () => {
  const { user, loading: authLoading } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("Trending")

  // Dummy data for "My courses"
  const myCourses = [
    {
      id: "my-course-1",
      title: "Typography in web design: Enhancing UI/UX web apps",
      category: "Design",
      duration: "3 months",
      rating: 4.7,
      currentLesson: 7,
      totalLessons: 12,
      progress: 58, // (7/12) * 100
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "my-course-2",
      title: "Advanced JavaScript for Modern Web Development",
      category: "Development",
      duration: "6 months",
      rating: 4.9,
      currentLesson: 3,
      totalLessons: 10,
      progress: 30,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "my-course-3",
      title: "Data Science Fundamentals with Python",
      category: "Data Science",
      duration: "4 months",
      rating: 4.5,
      currentLesson: 1,
      totalLessons: 8,
      progress: 12,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "my-course-4",
      title: "Introduction to Digital Health Technologies",
      category: "Healthcare",
      duration: "2 months",
      rating: 4.8,
      currentLesson: 5,
      totalLessons: 6,
      progress: 83,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  // Dummy data for "Recommended for you" and "You may like to view"
  // Reusing the structure from CourseCard
  const recommendedCourses = [
    {
      id: "rec-1",
      name: "Web Development",
      overlayTitle: "WEB Development",
      courseTitle: "Web Development for Everybody - Specialization",
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      level: "Intermediate",
      time: "6 months",
      price: "N 7,000",
      oldPrice: null,
      enrolledCount: 342,
      previewImage: "/placeholder.svg?height=200&width=300",
      instructor: "Jane Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      rating: 4.7,
    },
    {
      id: "rec-2",
      name: "Web Development",
      overlayTitle: "WEB Development",
      courseTitle: "Web Development for Everybody - Specialization",
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      level: "Intermediate",
      time: "6 months",
      price: "N 7,000",
      oldPrice: null,
      enrolledCount: 342,
      previewImage: "/placeholder.svg?height=200&width=300",
      instructor: "Jane Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      rating: 4.7,
    },
    {
      id: "rec-3",
      name: "Web Development",
      overlayTitle: "WEB Development",
      courseTitle: "Web Development for Everybody - Specialization",
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      level: "Intermediate",
      time: "6 months",
      price: "N 7,000",
      oldPrice: null,
      enrolledCount: 342,
      previewImage: "/placeholder.svg?height=200&width=300",
      instructor: "Jane Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      rating: 4.7,
    },
    {
      id: "rec-4",
      name: "Web Development",
      overlayTitle: "WEB Development",
      courseTitle: "Web Development for Everybody - Specialization",
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      level: "Intermediate",
      time: "6 months",
      price: "N 7,000",
      oldPrice: null,
      enrolledCount: 342,
      previewImage: "/placeholder.svg?height=200&width=300",
      instructor: "Jane Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      rating: 4.7,
    },
  ]

  const youMayLikeCourses = [
    {
      id: "like-1",
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
      id: "like-2",
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
      id: "like-3",
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
      id: "like-4",
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

  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || "Learner"

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="pt-28 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Back Section */}
          <div className="flex items-center gap-3 mb-8">
            {authLoading ? (
              <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
            ) : (
              <UserCircle className="w-12 h-12 text-gray-600" />
            )}
            <h1 className="font-dm-sans text-3xl font-bold text-gray-900">
              Hello {userName}! Welcome Back. 👋
            </h1>
          </div>

          {/* Hero Banner */}
          <div className="mb-12">
            <DashboardHeroBanner />
          </div>

          {/* Stats Section */}
          <div className="mb-12">
            <DashboardStats />
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
              <Link to="/courses" className="font-dm-sans text-blue-600 hover:underline font-medium">
                See all
              </Link>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {myCourses.map((course) => (
                <MyCourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>

          {/* Recommended for you Section */}
          <section className="mb-16">
            <header className="flex justify-between items-center mb-8">
              <h2 className="font-dm-sans text-3xl font-bold text-gray-900">Recommended for you</h2>
              <Link to="/my-courses" className="font-dm-sans text-blue-600 hover:underline font-medium">
                See all
              </Link>
            </header>
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
          </section>

          {/* You may like to view Section */}
          <section className="mb-16">
            <header className="flex justify-between items-center mb-8">
              <h2 className="font-dm-sans text-3xl font-bold text-gray-900">You may like to view</h2>
              <Link className="font-dm-sans text-blue-600 hover:underline font-medium" to="/courses">
                See all
              </Link>
            </header>
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
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default StudentDashboard
