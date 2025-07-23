

import { useState } from "react"

const MostViewedCourses = () => {
  const [expandedWeeks, setExpandedWeeks] = useState({})

  const toggleWeek = (courseId, weekNumber) => {
    const key = `${courseId}-${weekNumber}`
    setExpandedWeeks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const courses = [
    {
      id: 1,
      title: "UI/UX Design",
      description:
        "Become a master of UI design and UX enhancement by learning the essential skills of design principles, wireframing, prototyping, and usability testing to create seamless and engaging user experiences.",
      image: "SVGs/preview.svg?height=200&width=300",
      duration: "6 Weeks",
      level: "Beginner",
      views: "5k views",
      weeks: [
        {
          number: 1,
          title: "Introduction to UI/UX Design",
          content: "Learn the fundamentals of design thinking and user-centered design principles.",
        },
        {
          number: 2,
          title: "User Research and Personas",
          content: "Understand your users through research methods and create detailed personas.",
        },
        {
          number: 3,
          title: "Wireframing and Prototyping",
          content: "Create low-fidelity wireframes and interactive prototypes.",
        },
        {
          number: 4,
          title: "Visual Design and Branding",
          content: "Apply visual design principles and maintain brand consistency.",
        },
        {
          number: 5,
          title: "Usability Testing",
          content: "Test your designs with real users and iterate based on feedback.",
        },
        {
          number: 6,
          title: "Portfolio Development",
          content: "Create a professional portfolio showcasing your design work.",
        },
      ],
      modules: [
        { number: "01", title: "Introduction to UI/", subtitle: "UX Design" },
        { number: "02", title: "User Research", subtitle: "and Personas" },
        { number: "03", title: "Wireframing and", subtitle: "Prototyping" },
        { number: "04", title: "Visual Design and", subtitle: "Branding" },
        { number: "05", title: "Usability Testing", subtitle: "and Iteration" },
      ],
    },
    {
      id: 2,
      title: "Web development",
      description:
        "Master the building blocks of web design from HTML and CSS to responsive design principles and unlock the ability to craft stunning, user-centric websites that captivate and engage users.",
        image: "SVGs/preview.svg?height=200&width=300",
      duration: "8 Weeks",
      level: "Beginner",
      views: "3.2k views",
      weeks: [
        { number: 1, title: "HTML Fundamentals", content: "Learn the structure and semantics of HTML documents." },
        { number: 2, title: "CSS Styling", content: "Master styling techniques and layout methods." },
        { number: 3, title: "JavaScript Basics", content: "Add interactivity with JavaScript fundamentals." },
        { number: 4, title: "Responsive Design", content: "Create websites that work on all devices." },
        { number: 5, title: "Modern Frameworks", content: "Introduction to React and modern development tools." },
        { number: 6, title: "Web APIs", content: "Work with external APIs and data integration." },
        { number: 7, title: "Performance Optimization", content: "Optimize websites for speed and user experience." },
        { number: 8, title: "Deployment", content: "Deploy your websites to production environments." },
      ],
      modules: [
        { number: "01", title: "HTML", subtitle: "Fundamentals" },
        { number: "02", title: "CSS Styling", subtitle: "and Layout" },
        { number: "03", title: "JavaScript", subtitle: "Basics" },
        { number: "04", title: "Responsive", subtitle: "Design" },
        { number: "05", title: "Modern", subtitle: "Frameworks" },
      ],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Most viewed courses</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium">See all</button>
      </div>

      {/* Course Cards */}
      <div className="space-y-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Course Image */}
                <div className="lg:w-1/3">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 lg:h-40 object-cover rounded-lg"
                  />
                </div>

                {/* Course Content */}
                <div className="lg:w-2/3">
                  <div className="block lg:hidden mb-4">
                    {/* Mobile: Course Meta below image */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span>{course.duration}</span>
                      <span>{course.level}</span>
                      <span>{course.views}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>

                  {/* Desktop: Course Meta */}
                  <div className="hidden lg:flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                    <span>{course.views}</span>
                  </div>

                  {/* Mobile: Weekly Breakdown */}
                  <div className="block lg:hidden mb-4">
                    <div className="space-y-2">
                      {course.weeks.map((week) => {
                        const isExpanded = expandedWeeks[`${course.id}-${week.number}`]
                        return (
                          <div key={week.number} className="border-b border-gray-100 pb-2">
                            <button
                              onClick={() => toggleWeek(course.id, week.number)}
                              className="flex items-center justify-between w-full text-left py-2"
                            >
                              <span className="font-medium text-gray-900">Week {week.number}</span>
                              <svg
                                className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {isExpanded && (
                              <div className="pb-2 text-sm text-gray-600">
                                <div className="font-medium mb-1">{week.title}</div>
                                <div>{week.content}</div>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* View Course Button */}
                  <button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                    View Course
                  </button>
                </div>
              </div>

              {/* Desktop: Modules Section */}
              <div className="hidden lg:block mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Modules</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {course.modules.map((module) => (
                    <div key={module.number} className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{module.number}</div>
                      <div className="text-sm text-gray-600">
                        <div>{module.title}</div>
                        <div>{module.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MostViewedCourses
