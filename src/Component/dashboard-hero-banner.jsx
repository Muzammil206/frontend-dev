import React from "react"
import { Link } from "react-router-dom"

const DashboardHeroBanner = () => {
  return (
    <div className="relative bg-[#050829] rounded-2xl p-8 md:p-12 lg:p-16 overflow-hidden">
      {/* Abstract shapes for background */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(/placeholder.svg?height=200&width=400&query=abstract+blue+geometric+shapes)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-full h-full"
        style={{
          backgroundImage: `url(/placeholder.svg?height=200&width=400&query=abstract+dark+blue+geometric+shapes)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
          transform: "rotate(180deg)",
        }}
      ></div>

      <div className="relative z-10 max-w-2xl text-white">
        <h2 className="font-dm-sans text-3xl md:text-4xl font-bold mb-4">Good to have you back!</h2>
        <p className="font-dm-sans text-base md:text-lg text-gray-300 mb-8">
          Get back on track and achieve your goals
        </p>
        <Link
          to="/courses"
          className="font-dm-sans bg-white text-[#050829] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Continue learning
        </Link>
      </div>
    </div>
  )
}

export default DashboardHeroBanner
