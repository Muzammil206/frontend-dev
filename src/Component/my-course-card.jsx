import React from "react"
import { Link } from "react-router-dom"
import { Star, MoreVertical } from 'lucide-react'

const MyCourseCard = ({
  id,
  title,
  category,
  duration,
  rating,
  currentLesson,
  totalLessons,
  progress,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      {/* Course Image */}
      <div className="relative h-40 bg-gray-100 overflow-hidden">
        <img
          src={image || "/placeholder.svg?height=200&width=300&query=course+image"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Course Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Header with duration, rating, and options */}
        <div className="flex justify-between items-center mb-2">
          <span className="font-dm-sans text-sm text-gray-600">{duration}</span>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-dm-sans text-sm font-medium text-gray-700">{rating}</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>

        {/* Course Title and Category */}
        <h3 className="font-dm-sans font-bold text-lg text-gray-900 mb-1 line-clamp-2 leading-tight">
          {title}
        </h3>
        <p className="font-dm-sans text-sm text-gray-600 mb-4">{category}</p>

        {/* Progress Bar */}
        <div className="mb-4 mt-auto">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="font-dm-sans text-xs text-gray-600 mt-2">
            Lesson {currentLesson} of {totalLessons}
          </p>
        </div>

        {/* Continue Learning Button */}
        <Link
          to={`/study/${id}`}
          className="font-dm-sans bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium text-center transition-colors"
        >
          Continue learning
        </Link>
      </div>
    </div>
  )
}

export default MyCourseCard
