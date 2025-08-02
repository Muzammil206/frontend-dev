
import { useState, useMemo } from "react"
import CourseHeader from "../Component/CourseHeader" 
import CourseCard from "../Component/CourseCard" 
import MostViewedCoursesSection from "../Component/MostViewedCoursesSection" 
import Footer from "../Component/Footer" 
import { Search, ChevronDown } from "lucide-react" 

// Dummy data for allCourses (replace with your actual data source)
const allCourses = [
  {
    id: 1,
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
    courseType: "Professional",
    subcategory: "Graphic Design",
    students: 1500,
    date: "2023-01-15",
    tags: ["design", "graphic", "ui/ux"],
  },
  {
    id: 2,
    name: "Development",
    overlayTitle: "Web Development",
    courseTitle: "Web Development for Everybody - Specialization",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    level: "Advanced",
    time: "6 months",
    price: "N 7,000",
    oldPrice: null,
    enrolledCount: 342,
    previewImage: "/placeholder.svg?height=200&width=300",
    instructor: "John Smith",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.5,
    courseType: "Professional",
    subcategory: "Web development",
    students: 2500,
    date: "2023-02-20",
    tags: ["development", "web", "frontend"],
  },
  {
    id: 3,
    name: "Data Science",
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
    instructor: "Emily White",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.8,
    courseType: "Professional",
    subcategory: "Data Analysis",
    students: 1800,
    date: "2023-03-10",
    tags: ["data science", "ai", "machine learning"],
  },
  {
    id: 4,
    name: "Personal Development",
    overlayTitle: "Personal Growth",
    courseTitle: "The Science of Well-Being",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    level: "Intermediate",
    time: "6 months",
    price: "N 12,000",
    oldPrice: null,
    enrolledCount: 234,
    previewImage: "/placeholder.svg?height=200&width=300",
    instructor: "David Lee",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.6,
    courseType: "Monthly crash course",
    subcategory: "Productivity",
    students: 1200,
    date: "2023-04-01",
    tags: ["personal development", "well-being"],
  },
  {
    id: 5,
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
    courseType: "Professional",
    subcategory: "Healthcare Operations",
    students: 900,
    date: "2023-05-05",
    tags: ["healthcare", "management"],
  },
  {
    id: 6,
    name: "Development",
    overlayTitle: "Mobile App Development",
    courseTitle: "React Native Mobile App Development",
    description: "Build cross-platform mobile applications using React Native.",
    level: "Intermediate",
    time: "4 months",
    price: "N 8,500",
    oldPrice: null,
    enrolledCount: 180,
    previewImage: "/placeholder.svg?height=200&width=300",
    instructor: "Sarah Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.7,
    courseType: "Monthly crash course",
    subcategory: "Mobile Development",
    students: 1100,
    date: "2023-06-10",
    tags: ["development", "mobile", "react native"],
  },
  {
    id: 7,
    name: "Design",
    overlayTitle: "Web Design Fundamentals",
    courseTitle: "Responsive Web Design with HTML & CSS",
    description: "Learn to create beautiful and responsive websites from scratch.",
    level: "Beginner",
    time: "3 months",
    price: "N 4,000",
    oldPrice: null,
    enrolledCount: 90,
    previewImage: "/placeholder.svg?height=200&width=300",
    instructor: "Alex Green",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.4,
    courseType: "Hourly crash course",
    subcategory: "Web Design",
    students: 700,
    date: "2023-07-01",
    tags: ["design", "web", "frontend"],
  },
  {
    id: 8,
    name: "Data Science",
    overlayTitle: "Machine Learning Basics",
    courseTitle: "Introduction to Machine Learning with Python",
    description: "Get started with machine learning concepts and algorithms using Python.",
    level: "Beginner",
    time: "5 months",
    price: "N 10,000",
    oldPrice: null,
    enrolledCount: 210,
    previewImage: "/placeholder.svg?height=200&width=300",
    instructor: "Dr. Lena Khan",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.9,
    courseType: "Professional",
    subcategory: "Machine Learning",
    students: 1900,
    date: "2023-08-15",
    tags: ["data science", "ai", "python"],
  },
]

const CourseDetailPage = () => {
  // Filter states
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All Programme") // Changed default to match new design
  const [sortBy, setSortBy] = useState("Trending")
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [showFilterModal, setShowFilterModal] = useState(false) // For mobile advanced filters
  const [currentPage, setCurrentPage] = useState(1)
  const [coursesPerPage] = useState(8)

  // Advanced filter states
  const [selectedCourseTypes, setSelectedCourseTypes] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSubcategories, setSelectedSubcategories] = useState([])
  const [selectedRatings, setSelectedRatings] = useState([])
  const [expandedCategories, setExpandedCategories] = useState(["Development"]) // Default expanded

  // Filter options
  const filterCategories = [
    "All Programme",
    "Design",
    "Development",
    "Data Science",
    "Personal Development",
    "Healthcare",
  ]
  const suggestions = ["user interface", "user experience", "web design", "interface", "app"]

  // Advanced filter options
  const courseTypes = ["Professional", "Monthly crash course", "Hourly crash course"]
  const categories = [
    {
      name: "Development",
      icon: "💻",
      subcategories: [
        { name: "Web development", count: 574 },
        { name: "Software Development", count: 1345 },
        { name: "Mobile Development", count: 317 },
        { name: "No-Code Development", count: 37 },
      ],
    },
    {
      name: "Design",
      icon: "🎨",
      subcategories: [
        { name: "UI/UX Design", count: 423 },
        { name: "Web Design", count: 289 },
        { name: "Graphic Design", count: 156 },
      ],
    },
    {
      name: "Data Science",
      icon: "📊",
      subcategories: [
        { name: "Data Analysis", count: 234 },
        { name: "Machine Learning", count: 189 },
        { name: "Statistics", count: 98 },
      ],
    },
    {
      name: "Personal Development",
      icon: "🚀",
      subcategories: [
        { name: "Leadership", count: 167 },
        { name: "Communication", count: 134 },
        { name: "Productivity", count: 89 },
      ],
    },
    {
      name: "Healthcare",
      icon: "🏥",
      subcategories: [
        { name: "Healthcare Management", count: 120 },
        { name: "Digital Health", count: 75 },
      ],
    },
  ]
  const ratings = [
    { label: "5 Star", value: 5, count: 1345 },
    { label: "4 Star & up", value: 4, count: 1345 },
    { label: "3 Star & up", value: 3, count: 1567 },
    { label: "2 Star & up", value: 2, count: 1789 },
  ]

  // Filter logic - switches between simple and advanced
  const filteredCourses = useMemo(() => {
    let filtered = allCourses

    // Search filter (always active)
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (course) =>
          course.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (course.tags && course.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))),
      )
    }

    if (showAdvancedFilters) {
      // Advanced filtering logic
      if (selectedCourseTypes.length > 0) {
        filtered = filtered.filter((course) => selectedCourseTypes.includes(course.courseType))
      }
      if (selectedCategories.length > 0) {
        filtered = filtered.filter((course) => selectedCategories.includes(course.name))
      }
      if (selectedSubcategories.length > 0) {
        filtered = filtered.filter((course) => selectedSubcategories.includes(course.subcategory))
      }
      if (selectedRatings.length > 0) {
        const minRating = Math.min(...selectedRatings)
        filtered = filtered.filter((course) => course.rating >= minRating)
      }
    } else {
      // Simple filtering logic (original)
      if (activeFilter !== "All Programme") {
        filtered = filtered.filter((course) => course.name.toLowerCase() === activeFilter.toLowerCase())
      }
    }

    // Sort courses
    switch (sortBy) {
      case "Newest":
        filtered = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date))
        break
      case "Popular":
        filtered = [...filtered].sort((a, b) => b.students - a.students)
        break
      case "Trending":
      default:
        filtered = [...filtered].sort((a, b) => b.rating - a.rating)
        break
    }
    return filtered
  }, [
    searchQuery,
    activeFilter,
    sortBy,
    showAdvancedFilters,
    selectedCourseTypes,
    selectedCategories,
    selectedSubcategories,
    selectedRatings,
  ])

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage)
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)

  // Helper functions for advanced filters
  const toggleCourseType = (type) => {
    setSelectedCourseTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }
  const toggleSubcategory = (subcategory) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory) ? prev.filter((s) => s !== subcategory) : [...prev, subcategory],
    )
  }
  const toggleRating = (rating) => {
    setSelectedRatings((prev) => (prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]))
  }
  const toggleCategoryExpansion = (categoryName) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName) ? prev.filter((c) => c !== categoryName) : [...prev, categoryName],
    )
  }

  const getActiveFiltersCount = () => {
    if (!showAdvancedFilters) {
      return activeFilter !== "All Programme" ? 1 : 0
    }
    return (
      selectedCourseTypes.length + selectedCategories.length + selectedSubcategories.length + selectedRatings.length
    )
  }

  const clearAllFilters = () => {
    if (showAdvancedFilters) {
      setSelectedCourseTypes([])
      setSelectedCategories([])
      setSelectedSubcategories([])
      setSelectedRatings([])
    } else {
      setActiveFilter("All Programme")
    }
    setSearchQuery("")
  }

  const handleFilterClick = () => {
    setShowAdvancedFilters(!showAdvancedFilters)
    if (!showAdvancedFilters) {
      // When switching to advanced filters, reset simple filters
      setActiveFilter("All Programme")
    } else {
      // When switching back to simple filters, reset advanced filters
      setSelectedCourseTypes([])
      setSelectedCategories([])
      setSelectedSubcategories([])
      setSelectedRatings([])
    }
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion)
  }

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i)
        }
        pageNumbers.push("...")
        pageNumbers.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1)
        pageNumbers.push("...")
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i)
        }
      } else {
        pageNumbers.push(1)
        pageNumbers.push("...")
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i)
        }
        pageNumbers.push("...")
        pageNumbers.push(totalPages)
      }
    }
    return pageNumbers
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filterCategories={filterCategories}
        handleFilterClick={handleFilterClick}
        getActiveFiltersCount={getActiveFiltersCount}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Advanced Filter Sidebar (Desktop) */}
          {showAdvancedFilters && (
            <div className="hidden md:block w-80 bg-white rounded-lg shadow-sm h-fit sticky top-4">
              <div className="p-6">
                {/* Search Input */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="UI/UX Design"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* Suggestions */}
                <div className="mb-6">
                  <div className="flex gap-2 flex-wrap">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-2 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs rounded transition-colors cursor-pointer"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Course Type Filter */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">COURSE TYPE</h3>
                    {/* <ChevronUp className="h-4 w-4 text-gray-400" /> */}
                  </div>
                  <div className="space-y-2">
                    {courseTypes.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCourseTypes.includes(type)}
                          onChange={() => toggleCourseType(type)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Category Filter */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">CATEGORY</h3>
                    {/* <ChevronUp className="h-4 w-4 text-gray-400" /> */}
                  </div>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.name}>
                        <div className="flex items-center justify-between">
                          <label className="flex items-center flex-1">
                            <span className="text-blue-600 mr-2">{category.icon}</span>
                            <span className="text-sm text-gray-700">{category.name}</span>
                          </label>
                          <button
                            onClick={() => toggleCategoryExpansion(category.name)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <ChevronDown
                              className={`h-4 w-4 text-gray-400 transition-transform ${
                                expandedCategories.includes(category.name) ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>
                        {expandedCategories.includes(category.name) && (
                          <div className="ml-6 mt-2 space-y-2">
                            {category.subcategories.map((sub) => (
                              <label key={sub.name} className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <input
                                    type="checkbox"
                                    checked={selectedSubcategories.includes(sub.name)}
                                    onChange={() => toggleSubcategory(sub.name)}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                  />
                                  <span className="ml-2 text-sm text-gray-600">{sub.name}</span>
                                </div>
                                <span className="text-xs text-gray-400">{sub.count}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Rating Filter */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">RATING</h3>
                    {/* <ChevronUp className="h-4 w-4 text-gray-400" /> */}
                  </div>
                  <div className="space-y-2">
                    {ratings.map((rating) => (
                      <label key={rating.value} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedRatings.includes(rating.value)}
                            onChange={() => toggleRating(rating.value)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <div className="ml-2 flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`h-4 w-4 ${i < rating.value ? "text-yellow-400" : "text-gray-300"}`}
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                              ))}
                            </div>
                            <span className="ml-1 text-sm text-gray-700">{rating.label}</span>
                          </div>
                        </div>
                        <span className="text-xs text-gray-400">{rating.count}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Clear Filters */}
                {getActiveFiltersCount() > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="w-full px-4 py-2 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-300 rounded-md transition-colors"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Course Results Area */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="text-sm text-gray-600 mb-6">
              {filteredCourses.length.toLocaleString()} results found{searchQuery && ` for "${searchQuery}"`}
              {filteredCourses.length > 0 && (
                <span className="ml-2">
                  (Showing {indexOfFirstCourse + 1}-{Math.min(indexOfLastCourse, filteredCourses.length)} of{" "}
                  {filteredCourses.length})
                </span>
              )}
            </div>

            {/* Course Grid */}
            {currentCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {currentCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 text-6xl mb-4">
                  <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse our categories.</p>
                <button
                  onClick={clearAllFilters}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                {getPageNumbers().map((pageNumber, index) => (
                  <button
                    key={index}
                    onClick={() => typeof pageNumber === "number" && handlePageChange(pageNumber)}
                    disabled={pageNumber === "..."}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pageNumber === currentPage
                        ? "bg-blue-600 text-white"
                        : pageNumber === "..."
                          ? "bg-white text-gray-400 cursor-default"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Advanced Mobile Filter Modal */}
      {showAdvancedFilters && showFilterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end md:hidden">
          <div className="bg-white w-full max-h-[90vh] overflow-y-auto rounded-t-lg">
            <div className="sticky top-0 bg-white border-b px-4 py-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Advanced Filters</h3>
              <button onClick={() => setShowFilterModal(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 space-y-6">
              {/* Mobile Course Type Filter */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">COURSE TYPE</h3>
                  {/* <ChevronUp className="h-4 w-4 text-gray-400" /> */}
                </div>
                <div className="space-y-3">
                  {courseTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCourseTypes.includes(type)}
                        onChange={() => toggleCourseType(type)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Mobile Category Filter */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">CATEGORY</h3>
                  {/* <ChevronUp className="h-4 w-4 text-gray-400" /> */}
                </div>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.name}>
                      <div className="flex items-center justify-between">
                        <label className="flex items-center flex-1">
                          <span className="text-blue-600 mr-2">{category.icon}</span>
                          <span className="text-sm text-gray-700">{category.name}</span>
                        </label>
                        <button
                          onClick={() => toggleCategoryExpansion(category.name)}
                          className="p-2 hover:bg-gray-100 rounded"
                        >
                          <ChevronDown
                            className={`h-4 w-4 text-gray-400 transition-transform ${
                              expandedCategories.includes(category.name) ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      {expandedCategories.includes(category.name) && (
                        <div className="ml-6 mt-3 space-y-3">
                          {category.subcategories.map((sub) => (
                            <label key={sub.name} className="flex items-center justify-between">
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedSubcategories.includes(sub.name)}
                                  onChange={() => toggleSubcategory(sub.name)}
                                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="ml-3 text-sm text-gray-600">{sub.name}</span>
                              </div>
                              <span className="text-xs text-gray-400">{sub.count}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* Mobile Rating Filter */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">RATING</h3>
                  {/* <ChevronUp className="h-4 w-4 text-gray-400" /> */}
                </div>
                <div className="space-y-3">
                  {ratings.map((rating) => (
                    <label key={rating.value} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedRatings.includes(rating.value)}
                          onChange={() => toggleRating(rating.value)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="ml-3 flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`h-4 w-4 ${i < rating.value ? "text-yellow-400" : "text-gray-300"}`}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-700">{rating.label}</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">{rating.count}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 bg-white border-t px-4 py-4 flex gap-3">
              <button
                onClick={clearAllFilters}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
              >
                Clear all
              </button>
              <button
                onClick={() => setShowFilterModal(false)}
                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Apply filters
              </button>
            </div>
          </div>
        </div>
      )}

      <MostViewedCoursesSection />
      <Footer />
    </div>
  )
}

export default CourseDetailPage
