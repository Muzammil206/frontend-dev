// removed 'use client' directive

import { useState } from "react"

const PriceInfo = ({ course }) => {
  const [isInCart, setIsInCart] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  if (!course) return null

  // Calculate discount percentage
  const discountPercentage =
    course.originalPrice > course.price
      ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
      : 0

  // Calculate days left (you can make this dynamic based on course data)
  const daysLeft = 2 // This could come from course data

  // Format duration (convert from course.time to hours:minutes format)
  const formatDuration = (timeString) => {
    // This is a simple conversion - you might want to make this more sophisticated
    if (timeString.includes("months")) {
      const months = Number.parseInt(timeString)
      return `${months * 30}hours:00mins` // Rough estimate
    }
    return timeString
  }

  // Handle add to cart
  const handleAddToCart = () => {
    setIsInCart(!isInCart)
    // Add your cart logic here
    console.log(isInCart ? "Removed from cart" : "Added to cart", course.id)
  }

  // Handle save course
  const handleSaveCourse = () => {
    setIsSaved(!isSaved)
    // Add your save logic here
    console.log(isSaved ? "Removed from saved" : "Saved course", course.id)
  }

  // Handle enroll now
  const handleEnrollNow = () => {
    // Add your enrollment logic here
    console.log("Enrolling in course", course.id)
  }

  // Handle copy link
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error("Failed to copy link:", err)
    }
  }

  // Handle social sharing
  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(course.title)

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      whatsapp: `https://wa.me/?text=${title} ${url}`,
    }

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400")
    }
  }

  return (
    <div className="relative priceInfo bg-white font-Inter flex flex-col md:w-[26.5rem] w-[333px] border-[1px] border-[#E9EAF0] p-6 shadow-sm h-max rounded-2xl">
      <header className="border-b-[#E9EAF0] border-b-[1px] flex flex-col gap-3 pb-6">
        <div className="w-full flex gap-2 items-center">
          {course.free ? (
            <h2 className="text-green-600 md:text-2xl text-xl font-bold">Free</h2>
          ) : (
            <>
              <h2 className="text-primaryColor md:text-2xl text-xl">${course.price}</h2>
              {course.originalPrice > course.price && (
                <>
                  <p className="text-[#8C94A3] line-through md:text-base text-xs">${course.originalPrice}</p>
                  <span className="flex-1"></span>
                  <p className="bg-primaryBlue text-white rounded-lg px-3 py-2 md:text-sm text-xs">
                    {discountPercentage}% off
                  </p>
                </>
              )}
            </>
          )}
        </div>
        {!course.free && discountPercentage > 0 && (
          <div className="flex items-center gap-2 md:text-sm text-xs text-red-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>{daysLeft} days left at this price!</p>
          </div>
        )}
      </header>

      <div className="flex flex-col gap-4 border-b-[#E9EAF0] border-b-[1px] lg:p-6 p-0 py-3 text-[#1D2026] text-sm">
        <div className="each flex justify-center items-center gap-2 md:text-sm text-xs">
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l6-6m0 0l6 6m-6-6v12"
            />
          </svg>
          <p>Updated on</p>
          <span className="flex-1"></span>
          <p className="text-[#6E7485]">{new Date(course.date).toLocaleDateString()}</p>
        </div>

        <div className="each flex justify-center items-center gap-2 md:text-sm text-xs">
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>Duration</p>
          <span className="flex-1"></span>
          <p className="text-[#6E7485]">{course.time}</p>
        </div>

        <div className="each flex justify-center items-center gap-2 md:text-sm text-xs">
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
          <p>Students Enrolled</p>
          <span className="flex-1"></span>
          <p className="text-[#6E7485]">{course.students.toLocaleString()}</p>
        </div>

        <div className="each flex justify-center items-center gap-2 md:text-sm text-xs">
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>
          <p>Language</p>
          <span className="flex-1"></span>
          <p className="text-[#6E7485]">English</p>
        </div>

        <div className="each flex justify-center items-center gap-2 md:text-sm text-xs">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <p>Rating</p>
          <span className="flex-1"></span>
          <p className="text-[#6E7485]">{course.rating} ⭐</p>
        </div>

        <div className="each flex justify-center items-center gap-2 md:text-sm text-xs">
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <p>Instructor</p>
          <span className="flex-1"></span>
          <p className="text-[#6E7485]">{course.instructor}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-b-[#E9EAF0] border-b-[1px] pt-4">
        <div className="flex md:gap-6 gap-3">
          <button
            onClick={handleAddToCart}
            className={`md:text-base text-sm w-full rounded-xl px-[1rem] py-[12px] font-Roboto border-[1px] transition-colors ${
              isInCart
                ? "bg-primaryBlue text-white border-primaryBlue"
                : "text-primaryBlue bg-white border-primaryBlue hover:bg-blue-50"
            }`}
          >
            {isInCart ? "In Cart" : "Add To Cart"}
          </button>
          <button
            onClick={handleSaveCourse}
            className={`md:text-base text-sm w-full rounded-xl px-[1rem] py-[12px] font-Roboto border-[1px] transition-colors ${
              isSaved
                ? "bg-green-500 text-white border-green-500"
                : "text-primaryBlue bg-white border-primaryBlue hover:bg-blue-50"
            }`}
          >
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
        <button
          onClick={handleEnrollNow}
          className="text-white rounded-xl px-[1rem] py-[12px] bg-primaryBlue hover:bg-blue-700 font-Roboto transition-colors"
        >
          {course.free ? "Enroll for Free" : "Enroll Now"}
        </button>
      </div>

      <div className="flex flex-col gap-3 border-b-[#E9EAF0] border-b-[1px] py-6 text-[#4E5566] lg:text-sm text-xs">
        <h1 className="text-base font-medium">This course includes:</h1>
        <div className="each flex items-center gap-3">
          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p>Lifetime access</p>
        </div>
        <div className="each flex items-center gap-3">
          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p>Free exercises file & downloadable resources</p>
        </div>
        <div className="each flex items-center gap-3">
          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <p>Shareable certificate of completion</p>
        </div>
        <div className="each flex items-center gap-3">
          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <p>Access on mobile, tablet and TV</p>
        </div>
        <div className="each flex items-center gap-3">
          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
            />
          </svg>
          <p>100% online course</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-[#4E5566] lg:text-sm text-xs py-6">
        <h1 className="text-base font-medium">Share this course:</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className={`bg-[#F5F7FA] hover:bg-gray-200 lg:px-5 px-3 py-3.5 copy flex justify-center items-center gap-1 rounded transition-colors ${
              copySuccess ? "bg-green-100 text-green-700" : ""
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <p>{copySuccess ? "Copied!" : "Copy link"}</p>
          </button>
          <button
            onClick={() => handleShare("facebook")}
            className="bg-[#F5F7FA] hover:bg-blue-100 p-3.5 flex justify-center items-center rounded transition-colors"
          >
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button
            onClick={() => handleShare("twitter")}
            className="bg-[#F5F7FA] hover:bg-blue-100 p-3.5 flex justify-center items-center rounded transition-colors"
          >
            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </button>
          <button
            onClick={() => handleShare("whatsapp")}
            className="bg-[#F5F7FA] hover:bg-green-100 p-3.5 flex justify-center items-center rounded transition-colors"
          >
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164a4.923 4.923 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PriceInfo
