import React from "react"

const DashboardStats = () => {
  const stats = [
    {
      number: "05",
      label: "Enrolled Courses",
      bgColor: "bg-green-100",
      textColor: "text-green-700",
      pattern: "/placeholder.svg?height=100&width=100",
    },
    {
      number: "01",
      label: "Certificates",
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
      pattern: "/placeholder.svg?height=100&width=100",
    },
    {
      number: "27",
      label: "Videos watched",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      pattern: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`relative ${stat.bgColor} rounded-lg p-6 flex flex-col items-center justify-center text-center overflow-hidden`}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(${stat.pattern})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="relative z-10">
            <h3 className={`font-dm-sans text-5xl font-bold ${stat.textColor} mb-2`}>{stat.number}</h3>
            <p className={`font-dm-sans text-lg font-medium ${stat.textColor}`}>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashboardStats
