
import { useState, useMemo } from "react"
import CourseCard from "./CourseCard" // Import the new CourseCard

const PopularCourses = () => {
  const [activeBtn, setActiveBtn] = useState(0)

  const filterBtns = ["All Programme", "Design", "Development", "Data Science", "Personal Development", "Healthcare"]

  const allCourses = [
    {
      name: "Design",
      overlayTitle: "Graphic Design Mastery Course",
      courseTitle: "Graphic Design Mastery - Course",
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      level: "Intermediate",
      time: "6 months",
      price: "N 900",
      oldPrice: "N 3,500",
      enrolledCount: 40,
      previewImage: "/placeholder.svg?height=200&width=300",
      instructor: "Jane Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      rating: 4.7,
    },
    {
      name: "Development",
      overlayTitle: "Data Science Professional Certificate",
      courseTitle: "Data Science Professional Certificate",
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      level: "Expert",
      time: "6 months",
      price: "N 678",
      oldPrice: "N 500",
      enrolledCount: 11,
      previewImage: "/placeholder.svg?height=200&width=300",
      instructor: "Jane Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      rating: 4.7,
    },
    {
      name: "Personal Development",
      overlayTitle: "Personal Growth",
      courseTitle: "The Science of Well-Being",
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      level: "Intermediate",
      time: "6 months",
      price: "N 12,000",
      oldPrice: null, // No old price shown in image
      enrolledCount: 234,
      previewImage: "/placeholder.svg?height=200&width=300",
      instructor: "Jane Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      rating: 4.7,
    },
    {
      name: "Development",
      overlayTitle: "Web Development",
      courseTitle: "Web Development for Everybody - Specialization",
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      level: "Advanced",
      time: "6 months",
      price: "N 7,000",
      oldPrice: null, // No old price shown in image
      enrolledCount: 342,
      previewImage: "/placeholder.svg?height=200&width=300",
      instructor: "Jane Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      rating: 4.7,
    },
    {
      name: "Healthcare",
      overlayTitle: "Healthcare Management",
      courseTitle: "Healthcare Management Fundamentals",
      description: "Learn the essentials of managing healthcare systems and operations.",
      level: "Beginner",
      time: "8 months",
      price: "$567",
      oldPrice: "$700",
      enrolledCount: 120,
      previewImage: "/placeholder.svg?height=200&width=300",
      instructor: "Dr. Emily White",
      avatar: "/placeholder.svg?height=32&width=32",
      rating: 4.5,
    },
  ]

  // Filter courses based on selected category
  const filteredCourses = useMemo(() => {
    if (activeBtn === 0) {
      // Show all courses when "All Programme" is selected
      return allCourses
    }
    const selectedCategory = filterBtns[activeBtn]
    return allCourses.filter((course) => course.name.toLowerCase() === selectedCategory.toLowerCase())
  }, [activeBtn, allCourses])

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="font-dm-sans text-4xl md:text-5xl font-bold text-gray-900 inline-block relative pb-2">
            Popular Courses
            <svg
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
              width="150"
              height="10"
              viewBox="0 0 150 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 5C25 15 125 0 145 5" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {filterBtns.map((btn, i) => (
            <button
              key={i}
              onClick={() => setActiveBtn(i)}
              className={`font-dm-sans text-sm md:text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap
              ${
                activeBtn === i
                  ? "bg-green-600 text-white shadow-sm"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:text-gray-800"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-full overflow-x-hidden">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => <CourseCard key={index} {...course} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="font-dm-sans text-gray-500 text-lg">No courses found in this category.</p>
              <button
                onClick={() => setActiveBtn(0)}
                className="mt-4 font-dm-sans text-blue-600 hover:text-blue-700 font-medium"
              >
                View all courses
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PopularCourses
