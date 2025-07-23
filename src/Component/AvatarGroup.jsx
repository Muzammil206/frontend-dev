"use client"

import { useState } from "react"

const AvatarGroup = ({
  avatars = ["/SVGs/sampleImage.svg", "/SVGs/sampleImage.svg", "/SVGs/sampleImage.svg", "/SVGs/sampleImage.svg"],
  maxDisplay = 4,
  size = "md",
  className = "",
}) => {
  const [imageErrors, setImageErrors] = useState({})

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }

  const displayAvatars = avatars.slice(0, maxDisplay)
  const remainingCount = avatars.length - maxDisplay

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <div className={`flex items-center justify-start mb-8 ${className}`}>
      {/* Avatar Group - Hidden on mobile and tablet, visible on desktop */}
      <div className="hidden lg:flex -space-x-3">
        {displayAvatars.map((avatar, index) => (
          <div
            key={index}
            className={`${sizeClasses[size]} rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm hover:scale-105 transition-transform duration-200 relative`}
            style={{ zIndex: displayAvatars.length - index }}
          >
            {!imageErrors[index] ? (
              <img
                src={avatar || "/placeholder.svg"}
                alt={`User avatar ${index + 1}`}
                className="w-full h-full object-cover"
                onError={() => handleImageError(index)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                {index + 1}
              </div>
            )}
          </div>
        ))}

        {remainingCount > 0 && (
          <div
            className={`${sizeClasses[size]} rounded-full border-2 border-white bg-gray-500 flex items-center justify-center text-white text-xs font-medium shadow-sm`}
            style={{ zIndex: 0 }}
          >
            +{remainingCount}
          </div>
        )}
      </div>

      {/* Text - Always visible but responsive */}
      <span className="ml-3 text-gray-600 font-medium text-sm md:text-base">Join several other like minds</span>
    </div>
  )
}

export default AvatarGroup
