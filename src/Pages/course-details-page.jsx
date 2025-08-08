"use client"

import { useState, useEffect, useMemo } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import CourseCurriculum from "../Component/course-curriculum"
import CourseInstructor from "../Component/course-instructor"
import CourseReviews from "../Component/course-reviews"
import RelatedCoursesSection from "../Component/related-courses-section"
import { Clock, Users, Globe, Calendar, FileText, Award, Monitor, Share2, Copy, PlayCircle } from 'lucide-react'
import { useCart } from "../context/cart-context"
import { useAuth } from "../context/auth-context"
import { toast } from "react-hot-toast"
import { supabase } from "../lib/supabase" 
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const CourseDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { user, loading: authLoading } = useAuth()

  const [course, setCourse] = useState(null)
  const [relatedCourses, setRelatedCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState("Overview")

  // Helper function to handle successful enrollment in Supabase
  const handleSuccessfulEnrollment = async (transactionResponse) => {
    try {
      const { data, error } = await supabase
        .from('enrollments')
        .insert([
          {
            course_id: course.id,
            user_id: user.id,
            transaction_id: (transactionResponse.transaction_id).toLocaleString(),
            payment_status: 'paid',
            amount_paid: transactionResponse.amount,
            // currency: transactionResponse.currency,
          },
        ])
        .select();

      if (error) {
        console.error("Supabase enrollment error:", error);
        toast.error("Enrollment recorded with an issue. Please contact support.");
      } else {
        console.log("Supabase enrollment successful:", data);
        toast.success("Payment successful! You are now enrolled.");
        // Optionally navigate to a success page or dashboard
        // navigate('/dashboard/my-courses');
      }
    } catch (dbError) {
      console.error("Error inserting enrollment into Supabase:", dbError);
      toast.error("An error occurred while recording your enrollment.");
    }
  };

  const fwConfig = useMemo(() => {
    if (loading || authLoading || !course || !user || user.name === "Guest") {
      return null;
    }

    return {
      public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY ,
      tx_ref: `course_enroll_${course.id}_${Date.now()}`,
      amount: course.price,
      currency: 'NGN',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
        email: user.email || 'customer@example.com',
        phone_number: user.user_metadata?.phone_number || '07000000000',
        name: user.user_metadata?.full_name || user.email || 'Guest User',
      },
      customizations: {
        title: course.title,
        description: `Payment for ${course.title} course enrollment`,
        logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
      },
      text: 'Enroll Now',
      callback: (response) => {
        console.log("Flutterwave Response:", response);
        if (response.status === 'successful') {
          handleSuccessfulEnrollment(response); // Call the async helper function
        } else {
          toast.error("Payment failed or was cancelled. Please try again.");
        }
        closePaymentModal();
      },
      onClose: () => {
        toast.info("Payment modal closed.");
      },
    };
  }, [course, user, authLoading, loading, handleSuccessfulEnrollment]); // Add handleSuccessfulEnrollment to dependencies

  useEffect(() => {
    const fetchCourseDetails = async () => {
      setLoading(true)
      setError(null)
      try {
        const courseResponse = await fetch(`https://lms-backend-yux4.onrender.com/api/v1/courses/${id}`)
        if (!courseResponse.ok) {
          throw new Error(`HTTP error! status: ${courseResponse.status}`)
        }
        const courseApiData = await courseResponse.json()
        const courseData = courseApiData.data

        const allCoursesResponse = await fetch("https://lms-backend-yux4.onrender.com/api/v1/courses")
        if (!allCoursesResponse.ok) {
          throw new Error(`HTTP error! status: ${allCoursesResponse.status}`)
        }
        const allCoursesApiData = await allCoursesResponse.json()
        const allCoursesArray = allCoursesApiData.data

        if (courseData) {
          setCourse({
            ...courseData,
            shortDescription: courseData.summary || courseData.description,
            tags: Array.isArray(courseData.tags)
              ? courseData.tags
              : courseData.tags
                ? courseData.tags.split(",").map((tag) => tag.trim())
                : [],
            videoPreview: courseData.thumbnail_url || "/placeholder.svg?height=400&width=700",
            price: courseData.price,
            oldPrice: courseData.discounted_price,
            discount: courseData.discounted_price
              ? `${Math.round(((courseData.price - courseData.discounted_price) / courseData.price) * 100)}% OFF`
              : null,
            timeRemaining: "2 days left at this price!",
            updatedOn: new Date(courseData.updated_at || courseData.created_at).toLocaleDateString(),
            duration: `${courseData.duration} hours`,
            studentsEnrolled: "N/A",
            language: "English",
            includes: [
              { icon: Clock, text: "Lifetime access" },
              { icon: FileText, text: "Free exercises file & downloadable resources" },
              courseData.certificate_eligible && { icon: Award, text: "Shareable certificate of completion" },
              { icon: Monitor, text: "Access on mobile, tablet and TV" },
            ].filter(Boolean),
            curriculum: courseData.modules.map((module) => ({
              title: module.title,
              duration: "N/A",
            })),
            instructor: {
              name: courseData.instructor_name || "Unknown Instructor",
              title: "Lead Instructor",
              experience: "Experienced Educator",
              avatar: "/placeholder.svg?height=80&width=80",
            },
            reviews: {
              overallRating: 4.5,
              totalReviews: 0,
              breakdown: [],
              individualReviews: [],
            },
          })
          setRelatedCourses(
            allCoursesArray
              .filter((c) => c.id !== courseData.id)
              .slice(0, 4)
              .map((c) => ({
                id: c.id,
                name: c.category?.name || "Unknown",
                overlayTitle: c.title,
                courseTitle: c.title,
                description: c.description,
                level: c.level,
                time: `${c.duration} hours`,
                price: `N ${c.price.toLocaleString()}`,
                oldPrice: c.discounted_price ? `N ${c.discounted_price.toLocaleString()}` : null,
                enrolledCount: 0,
                previewImage: c.thumbnail_url,
                instructor: c.instructor_name,
                avatar: "/placeholder.svg?height=32&width=32",
                rating: 0,
              })),
          )
        } else {
          setError("Course not found.")
        }
      } catch (err) {
        console.error("Error fetching course details:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCourseDetails()
  }, [id])

  const handleAddToCart = () => {
    if (course) {
      addToCart({
        id: course.id,
        title: course.title,
        image: course.thumbnail_url,
        rating: course.reviews?.overallRating || 4.5,
        reviews: course.reviews?.totalReviews?.toLocaleString() || "N/A",
        instructor: course.instructor.name,
        price: course.price,
        oldPrice: course.oldPrice,
      })
      toast.success(`${course.title} added to cart!`)
      navigate("/cart")
    }
  }

  const renderEnrollButton = () => {
    if (loading || authLoading || !course) {
      return (
        <button
          className="font-dm-sans w-full bg-green-600 text-white py-3 rounded-lg font-medium opacity-50 cursor-not-allowed"
          disabled
        >
          Loading...
        </button>
      );
    }

    if (!user || user.name === "Guest") {
      return (
        <Link
          to="/login"
          className="font-dm-sans w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium text-center block"
        >
          Login to Enroll
        </Link>
      );
    }

    if (!fwConfig) {
      return (
        <button
          className="font-dm-sans w-full bg-green-600 text-white py-3 rounded-lg font-medium opacity-50 cursor-not-allowed"
          disabled
        >
          Initializing Payment...
        </button>
      );
    }

    return (
      <FlutterWaveButton
        {...fwConfig}
        className="font-dm-sans w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
      />
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="font-dm-sans text-lg text-gray-700">Loading course details...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="font-dm-sans text-lg text-red-500">Error: {error}</p>
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="pt-28 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-dm-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <p className="font-dm-sans text-base md:text-lg text-gray-600 mb-8 max-w-3xl">{course.shortDescription}</p>

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
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

              <div>
                {activeTab === "Overview" && (
                  <div className="font-dm-sans text-gray-700 leading-relaxed">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h3>
                    <p className="mb-4">{course.description}</p>
                    <p>This course is at a {course.level} level.</p>
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

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-28">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-dm-sans text-3xl font-bold text-gray-900">N {course.price.toFixed(2)}</span>
                  {course.oldPrice && (
                    <span className="font-dm-sans text-lg text-gray-500 line-through">
                      N {course.oldPrice.toFixed(2)}
                    </span>
                  )}
                  {course.discount && (
                    <span className="font-dm-sans text-sm font-medium text-white bg-red-500 px-2 py-1 rounded-md ml-auto">
                      {course.discount}
                    </span>
                  )}
                </div>
                <p className="font-dm-sans text-sm text-red-600 mb-6 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.timeRemaining}
                </p>

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

                <div className="flex flex-col gap-3 mb-8">
                  {renderEnrollButton()}
                  <div className="flex gap-3">
                    <button
                      onClick={handleAddToCart}
                      className="font-dm-sans flex-1 border border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-lg font-medium transition-colors"
                    >
                      Add To Cart
                    </button>
                    <button className="font-dm-sans flex-1 border border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-lg font-medium transition-colors">
                      Save
                    </button>
                  </div>
                </div>

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
      <RelatedCoursesSection courses={relatedCourses} />
      <Footer />
    </div>
  )
}

export default CourseDetailsPage
