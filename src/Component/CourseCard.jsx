
import { useState } from "react"
import AvatarGroup from "./AvatarGroup" // Import AvatarGroup

const CourseCard = ({
  name,
  overlayTitle,
  courseTitle,
  description,
  level,
  time,
  price,
  oldPrice,
  enrolledCount,
  previewImage,
  instructor,
  avatar,
  rating,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
      {/* Course Preview Media */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {/* Preview Image */}
        {!imageError ? (
          <img
            src={previewImage || "/placeholder.svg?height=300&width=400&text=Course+Preview"}
            alt={courseTitle}
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

        {/* Overlay Title */}
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
          <h2 className="font-dm-sans text-3xl md:text-4xl font-bold text-white leading-tight">{overlayTitle}</h2>
        </div>

        {/* Enrolled Badge */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <AvatarGroup
            avatars={[
              "/placeholder.svg?height=32&width=32",
              "/placeholder.svg?height=32&width=32",
              "/placeholder.svg?height=32&width=32",
            ]}
            text={`+ ${enrolledCount} Enrolled`}
            size="sm"
            className="bg-white/90 backdrop-blur-sm border-none shadow-md"
          />
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4 md:p-6">
        {/* Instructor & Rating */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <img
              src={avatar || "/placeholder.svg?height=32&width=32"}
              alt={instructor}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="font-dm-sans text-sm font-medium text-gray-700 truncate">{instructor}</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="font-dm-sans text-sm font-medium text-gray-700">{rating}</span>
          </div>
        </div>

        {/* Course Title */}
        <h3 className="font-dm-sans font-bold text-lg text-gray-900 mb-2 line-clamp-2 leading-tight">{courseTitle}</h3>

        {/* Course Description */}
        <p className="font-dm-sans text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>

        {/* Course Details */}
        <div className="flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-dm-sans text-sm text-gray-600 font-medium">{time}</span>
        </div>

        {/* Price and Enroll Button */}
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-2">
            <span className="font-dm-sans text-lg font-bold text-green-600">{price}</span>
            {oldPrice && <span className="font-dm-sans text-sm text-gray-500 line-through">{oldPrice}</span>}
          </div>
          <button className="font-dm-sans bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
