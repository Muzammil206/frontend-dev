

import { useState } from "react"

const AvatarGroup = ({
  avatars = ["/SVGs/sampleImage.svg", "/SVGs/sampleImage.svg", "/SVGs/sampleImage.svg"],
  text = "Over 2500 students",
  gradientFrom = "from-green-400",
  gradientTo = "to-blue-500",
  maxDisplay = 3,
  size = "md",
  className = "",
}) => {
  const [imageErrors, setImageErrors] = useState({})

  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  const displayAvatars = avatars.slice(0, maxDisplay)

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <div className={`bg-white rounded-full px-4 py-3 shadow-lg border border-gray-100 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {displayAvatars.map((avatar, index) => (
            <div
              key={index}
              className={`${sizeClasses[size]} rounded-full border-2 border-white overflow-hidden bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
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
                <div
                  className={`w-full h-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white font-bold text-xs`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
              )}
            </div>
          ))}
        </div>
        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{text}</span>
      </div>
    </div>
  )
}

export default AvatarGroup
