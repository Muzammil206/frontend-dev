"use client"

import { useState, useMemo } from "react"

const Courses = () => {
  const whatWedo = [
    {
      img: "/SVGs/online.svg",
      txt: "Online courses",
      color: "bg-[#EFEEFF]",
      desc: `Access a wide range of expertly crafted courses designed to help you learn new skills, advance your career, and achieve your goals at your own pace.`,
    },
    {
      img: "/SVGs/workshop.svg",
      txt: "Hands-on workshops",
      color: "bg-[#FFF8E8]",
      desc: `Engage in interactive, practical workshops led by industry professionals, designed to equip you with real-world skills and hands-on experience.`,
    },
    {
      img: "/SVGs/freelancing.svg",
      txt: "Freelancing",
      color: "bg-[#FFECEC]",
      desc: `Learn how to build a successful freelancing career with in-demand skills, expert guidance, and resources to connect you with global job opportunities.`,
    },
    {
      img: "/SVGs/corporate.svg",
      txt: "Corporate training",
      color: "bg-[#EDFFFD]",
      desc: `Empower your team with customized training programs tailored to enhance productivity, efficiency, and industry-specific expertise.`,
    },
  ]

  const allCourses = [
    {
      free: true,
      name: "Design",
      title: "Typography in web design: Enhancing UI/UX web apps",
      level: "Intermediate",
      time: "6 months",
      date: "Jan 24, 2024",
      previewImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      previewVideo: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      hasVideo: true,
      instructor: "Juanita Bell",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      free: true,
      name: "Development",
      title: "Responsive design: Cross-device experience",
      level: "Expert",
      time: "3 months",
      date: "Jan 23, 2024",
      previewImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      previewVideo: null,
      hasVideo: false,
      instructor: "Ted Hawkins",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      free: true,
      name: "Design",
      title: "Advanced UI/UX Design Principles",
      level: "Intermediate",
      time: "12 months",
      date: "Jan 04, 2024",
      previewImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      previewVideo: "https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_1mb.mp4",
      hasVideo: true,
      instructor: "Juanita Bell",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      free: false,
      name: "Data Science",
      title: "Machine Learning Fundamentals",
      level: "Beginner",
      time: "8 months",
      date: "Feb 15, 2024",
      previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      previewVideo: null,
      hasVideo: false,
      instructor: "Sarah Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      free: true,
      name: "Development",
      title: "Full Stack JavaScript Development",
      level: "Advanced",
      time: "10 months",
      date: "Mar 10, 2024",
      previewImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
      previewVideo: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      hasVideo: true,
      instructor: "Mike Chen",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      free: false,
      name: "Personal Development",
      title: "Leadership and Communication Skills",
      level: "Intermediate",
      time: "4 months",
      date: "Apr 05, 2024",
      previewImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      previewVideo: null,
      hasVideo: false,
      instructor: "Emma Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const [activeBtn, setActiveBtn] = useState(0)
  const [selectedCourseType, setSelectedCourseType] = useState("Professional courses")

  const filterBtns = ["All", "Design", "Development", "Data Science", "Personal Development"]

  const courseTypes = ["Professional courses", "Monthly crash course", "Hourly crash course"]

  // Filter courses based on selected category
  const filteredCourses = useMemo(() => {
    if (activeBtn === 0) {
      // Show all courses when "All" is selected
      return allCourses
    }

    const selectedCategory = filterBtns[activeBtn]
    return allCourses.filter((course) => course.name.toLowerCase() === selectedCategory.toLowerCase())
  }, [activeBtn, allCourses])

  return (
    <div className="w-full">
      {/* Featured Courses Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Featured courses</h1>

          <div className="w-full flex flex-col gap-10">
            {/* Desktop Filter Buttons */}
            <div className="hidden md:flex justify-center gap-8">
              {filterBtns.map((btn, i) => (
                <button
                  onClick={() => setActiveBtn(i)}
                  key={i}
                  className={`text-lg font-medium transition-all duration-300 ${
                    activeBtn === i
                      ? "px-6 py-2 rounded-lg bg-blue-50 text-blue-600 shadow-sm border border-blue-200"
                      : "px-6 py-2 text-gray-600 hover:text-blue-600 hover:font-semibold"
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* Mobile Dropdown */}
            <div className="md:hidden">
              <select
                value={selectedCourseType}
                onChange={(e) => setSelectedCourseType(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 bg-white focus:outline-none focus:border-blue-500"
              >
                {courseTypes.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Active Filter Indicator */}
            <div className="text-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-blue-600">{filteredCourses.length}</span> courses
                {activeBtn !== 0 && (
                  <span className="ml-1">
                    in <span className="font-semibold text-blue-600">{filterBtns[activeBtn]}</span>
                  </span>
                )}
              </p>
            </div>

            {/* Courses Grid - Desktop & Mobile Sliding */}
            <div className="w-full">
              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course, index) => <CourseCard key={`${course.name}-${index}`} {...course} />)
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500 text-lg">No courses found in this category.</p>
                    <button
                      onClick={() => setActiveBtn(0)}
                      className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View all courses
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Sliding */}
              <div className="md:hidden">
                {filteredCourses.length > 0 ? (
                  <>
                    <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory px-1">
                      {filteredCourses.map((course, index) => (
                        <div key={`mobile-${course.name}-${index}`} className="flex-shrink-0 w-72 snap-start">
                          <CourseCard {...course} />
                        </div>
                      ))}
                    </div>

                    {/* Mobile Scroll Indicator Dots */}
                    <div className="flex justify-center mt-4 gap-2">
                      {filteredCourses.map((_, index) => (
                        <div
                          key={`dot-${index}`}
                          className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-200"
                        ></div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No courses found in this category.</p>
                    <button
                      onClick={() => setActiveBtn(0)}
                      className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View all courses
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* See More Button */}
            {filteredCourses.length > 0 && (
              <div className="text-center mt-8">
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">See more...</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section
        className="py-16 px-6 md:px-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/SVGs/whatwedobg.svg)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0A033C]">What we do</h1>
          <p className="text-gray-600 text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto">
            We provide comprehensive technological solutions tailored to solve your problems
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whatWedo.map((item, i) => (
              <WhatWeDoCard key={i} {...item} />
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src="/SVGs/Events.svg" alt="Events" className="w-full h-auto shadow-lg rounded-lg" />
            </div>
            <div className="order-1 md:order-2 text-center md:text-right">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Stay ahead with our exclusive events
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join interactive workshops, webinars, and bootcamps designed to accelerate your growth and connect you
                with industry experts
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                View Events
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const CourseCard = ({
  free,
  name,
  title,
  level,
  time,
  date,
  previewImage,
  previewVideo,
  hasVideo,
  instructor,
  avatar,
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handlePlayVideo = () => {
    if (hasVideo && previewVideo) {
      setIsVideoPlaying(true)
    }
  }

  const handleVideoEnd = () => {
    setIsVideoPlaying(false)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full">
      {/* Course Preview Media */}
      <div className="relative h-44 md:h-48 bg-gray-100 overflow-hidden group">
        {/* Free/Premium Badge */}
        <div className="absolute top-3 right-3 z-20">
          <span className="bg-white text-gray-800 text-xs md:text-sm font-bold px-2 py-1 md:px-3 md:py-1 rounded-full shadow-sm">
            {free ? "Free" : "Premium"}
          </span>
        </div>

        {/* Video Player */}
        {isVideoPlaying && hasVideo && previewVideo ? (
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            onEnded={handleVideoEnd}
            onPause={() => setIsVideoPlaying(false)}
          >
            <source src={previewVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <>
            {/* Preview Image */}
            {!imageError ? (
              <img
                src={previewImage || "/placeholder.svg?height=300&width=400&text=Course+Preview"}
                alt={title}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true)
                  setImageLoaded(true)
                }}
              />
            ) : (
              // Fallback when image fails to load
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-3xl md:text-4xl opacity-50">
                  <i className="fa fa-graduation-cap"></i>
                </div>
              </div>
            )}

            {/* Loading Skeleton */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="text-gray-400">
                  <i className="fa fa-image text-xl md:text-2xl"></i>
                </div>
              </div>
            )}

            {/* Video Play Button Overlay */}
            {hasVideo && previewVideo && imageLoaded && (
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <button
                  onClick={handlePlayVideo}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 md:p-4 transform hover:scale-110 transition-transform"
                >
                  <i className="fa fa-play text-blue-600 text-lg md:text-xl ml-0.5"></i>
                </button>
              </div>
            )}

            {/* Video Indicator Badge */}
            {hasVideo && (
              <div className="absolute bottom-3 left-3">
                <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <i className="fa fa-play text-xs"></i>
                  Preview
                </span>
              </div>
            )}
          </>
        )}
      </div>

      {/* Course Content */}
      <div className="p-4 md:p-6">
        {/* Instructor */}
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <img
            src={avatar || "/placeholder.svg?height=32&width=32"}
            alt={instructor}
            className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 object-cover"
          />
          <span className="text-xs md:text-sm font-medium text-gray-700 truncate">{instructor}</span>
        </div>

        {/* Course Title */}
        <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-2 md:mb-3 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Course Details */}
        <div className="space-y-1 md:space-y-2 mb-3 md:mb-4">
          <p className="text-xs md:text-sm text-gray-600 font-medium">{level}</p>
          <p className="text-xs md:text-sm text-gray-600 flex items-center gap-1">
            <i className="fa fa-clock-o text-gray-400 text-xs"></i>
            {time}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <span className="text-xs md:text-sm text-gray-500">{date}</span>
          <button className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors group">
            <i className="fa fa-arrow-right text-white text-xs md:text-sm group-hover:translate-x-0.5 transition-transform"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

const WhatWeDoCard = ({ img, txt, color, desc }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center mb-4`}>
        <img src={img || "/placeholder.svg"} alt={txt} className="w-8 h-8" />
      </div>
      <h3 className="font-semibold text-xl text-gray-900 mb-3">{txt}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

export default Courses
