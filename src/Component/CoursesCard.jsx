import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const CoursesCard = ({
  id,
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
  price,
  originalPrice,
  rating,
  students,
  description,
  tags,
  onCourseClick, // New prop for handling clicks
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handlePlayVideo = (e) => {
    e.stopPropagation() // Prevent card click when playing video
    if (hasVideo && previewVideo) {
      setIsVideoPlaying(true)
    }
  }

  const handleVideoEnd = () => {
    setIsVideoPlaying(false)
  }

  const handleCardClick = () => {
    if (onCourseClick) {
      onCourseClick(id)
    }
  }

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
      onClick={handleCardClick}
    >
      <div className="relative h-48 bg-gray-100 overflow-hidden group">
        <div className="absolute top-3 right-3 z-20">
          <span
            className={`px-2 py-1 text-xs font-medium rounded ${
              free ? "bg-white text-gray-800" : "bg-blue-600 text-white"
            } shadow-sm`}
          >
            {free ? "Free" : "Paid"}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 z-20">
          <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded font-medium shadow-sm">{level}</span>
        </div>

        {isVideoPlaying && hasVideo && previewVideo ? (
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            onEnded={handleVideoEnd}
            onPause={() => setIsVideoPlaying(false)}
            onClick={(e) => e.stopPropagation()} // Prevent card click when interacting with video
          >
            <source src={previewVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <>
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
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-4xl opacity-50">📚</div>
              </div>
            )}

            {!imageLoaded && !imageError && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}

            {hasVideo && previewVideo && imageLoaded && (
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <button
                  onClick={handlePlayVideo}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transform hover:scale-110 transition-transform"
                >
                  <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <img
            src={avatar || "/placeholder.svg?height=24&width=24"}
            alt={instructor}
            className="w-6 h-6 rounded-full bg-blue-100 object-cover"
          />
          <span className="text-sm font-medium text-gray-700 flex-1 truncate">{instructor}</span>
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm font-medium text-gray-900">{rating}</span>
          </div>
        </div>

        <h3 className="font-semibold text-base text-gray-900 mb-2 line-clamp-2 leading-tight">{title}</h3>

        {/* Course Category */}
        <div className="text-sm text-gray-600 mb-2">{name}</div>

        {/* Course Duration */}
        <div className="flex items-center gap-1 mb-3 text-sm text-gray-600">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{time}</span>
        </div>

        <div className="flex items-center justify-between">
          {free ? (
            <span className="text-lg font-bold text-gray-900">$0</span>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">${price}</span>
              {originalPrice > price && <span className="text-sm text-gray-500 line-through">${originalPrice}</span>}
            </div>
          )}

          {/* Circular Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation() // Prevent card click
              handleCardClick() // Navigate to course detail
            }}
            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-[7.46px] flex items-center justify-center transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoursesCard;
