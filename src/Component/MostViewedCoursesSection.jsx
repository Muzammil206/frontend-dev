

import { PlayCircle } from "lucide-react"
import { Link } from "react-router-dom"

const MostViewedCoursesSection = () => {
  const mostViewedCoursesData = [
    {
      id: 1,
      title: "UI/UX Design",
      description:
        "Become a master of UI design and UX enhancement by learning the essential skills of design principles, wireframing, prototyping, and usability testing to create seamless and engaging interactions",
      weeks: 6,
      type: "Monthly crash course",
      modules: [
        { number: "01", title: "Introduction to UI/UX Design" },
        { number: "02", title: "User Research and Personas" },
        { number: "03", title: "Wireframing and Prototyping" },
        { number: "04", title: "Visual Design and Branding" },
        { number: "05", title: "Usability Testing and Iteration" },
      ],
      views: "5k",
      previewImage: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Master web development from front-end to back-end, building responsive and dynamic applications with modern frameworks and tools.",
      weeks: 8,
      type: "Professional course",
      modules: [
        { number: "01", title: "HTML & CSS Fundamentals" },
        { number: "02", title: "JavaScript Basics" },
        { number: "03", title: "React.js Framework" },
        { number: "04", title: "Node.js & Express" },
        { number: "05", title: "Database Integration" },
      ],
      views: "7k",
      previewImage: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-dm-sans text-3xl md:text-4xl font-bold text-gray-900">Most viewed courses</h2>
          <Link to="/courses" className="font-dm-sans text-blue-600 hover:underline font-medium">
            See all
          </Link>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mostViewedCoursesData.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-60 bg-gray-200 flex items-center justify-center">
                <img
                  src={course.previewImage || "/placeholder.svg"}
                  alt={`${course.title} preview`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-dm-sans text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="font-dm-sans text-sm text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-dm-sans text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                    {course.weeks} Weeks
                  </span>
                  <span className="font-dm-sans text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                    {course.type}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2 text-center mb-6">
                  {course.modules.map((module) => (
                    <div key={module.number} className="flex flex-col items-center">
                      <span className="font-dm-sans text-lg font-bold text-gray-900">{module.number}</span>
                      <span className="font-dm-sans text-xs text-gray-600 leading-tight">{module.title}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button className="font-dm-sans bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    View Course
                  </button>
                  <span className="font-dm-sans text-sm text-gray-600">{course.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MostViewedCoursesSection
