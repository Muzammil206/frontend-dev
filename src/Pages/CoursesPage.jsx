
import { useState, useMemo } from "react"
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import  MostViewedCourses  from "../Component/MostView"
import CoursesCard from "../Component/CoursesCard"
import CourseCard from "../Component/coursecd"
import allCourses from "../Component/data"


const CourseDetailPage = () => {
  

  // Filter states
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")
  const [sortBy, setSortBy] = useState("Trending")
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false) 

  const [showFilterModal, setShowFilterModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [coursesPerPage] = useState(8)

  // Advanced filter states (only used when advanced filters are active)
  const [selectedCourseTypes, setSelectedCourseTypes] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSubcategories, setSelectedSubcategories] = useState([])
  const [selectedRatings, setSelectedRatings] = useState([])
  const [expandedCategories, setExpandedCategories] = useState(["Development"])

  // Simple filter options (original)
  const filterCategories = ["All", "Design", "Development", "Data Science", "Personal Development"]
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
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
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
      if (activeFilter !== "All") {
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
      return activeFilter !== "All" ? 1 : 0
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
      setActiveFilter("All")
    }
    setSearchQuery("")
  }

  const handleFilterClick = () => {
    setShowAdvancedFilters(!showAdvancedFilters)
    if (!showAdvancedFilters) {
      // When switching to advanced filters, reset simple filters
      setActiveFilter("All")
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
      <Nav />

      <div className="min-h-screen bg-gray-50 md:px-8 md:py-12 mt-10">
        {/* Mobile Layout */}
        <div className="md:hidden bg-white">
          {/* Mobile Search Bar */}
          <div className="px-4 pt-6 pb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="UI/UX Design"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-gray-50"
              />
            </div>
          </div>

          {/* Mobile Filter and Sort Row */}
          <div className="px-4 pb-4">
            <div className="flex items-center gap-3">
              {/* Filter Button with Badge */}
              <button
                onClick={() => {
                  if (showAdvancedFilters) {
                    setShowFilterModal(true)
                  } else {
                    handleFilterClick()
                  }
                }}
                className="relative flex items-center gap-2 px-4 py-2.5 border border-blue-500 rounded-lg text-sm font-medium text-blue-600 bg-white hover:bg-blue-50 flex-1"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
                Filter
                {getActiveFiltersCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {getActiveFiltersCount()}
                  </span>
                )}
              </button>

              {/* Sort Dropdown */}
              <div className="relative flex-1">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white appearance-none"
                >
                  <option value="Trending">Sort by</option>
                  <option value="Newest">Newest</option>
                  <option value="Popular">Popular</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Category Dropdown (only show when advanced filters are OFF) */}
          {!showAdvancedFilters && (
            <div className="px-4 pb-4">
              <div className="relative">
                <select
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base font-medium bg-white appearance-none"
                >
                  {filterCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Course Display (when advanced filters are OFF) */}
          {!showAdvancedFilters && (
            <div className="px-4 pb-6">
              {/* Results Count */}
              <div className="text-sm text-gray-600 mb-4">
                {filteredCourses.length.toLocaleString()} results found
                {searchQuery && ` for "${searchQuery}"`}
              </div>

              {/* Course Grid */}
              {currentCourses.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    {currentCourses.map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))}
                  </div>

                  {/* Mobile Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center space-x-2 mt-6">
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
                </>
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
            </div>
          )}
        </div>

        {/* Desktop Layout */}
        <div className={`${showAdvancedFilters ? "hidden md:flex gap-8" : "hidden md:block"} max-w-7xl mx-auto`}>
          {/* Advanced Filter Sidebar (only show when advanced filters are ON) */}
          {showAdvancedFilters && (
            <div className="w-80 bg-white rounded-lg shadow-sm h-fit sticky top-4">
              <div className="p-6">
                {/* Filter Header */}
                <div className="flex items-center gap-2 mb-6">
                  <button
                    onClick={handleFilterClick}
                    className="flex items-center gap-2 px-3 py-1.5 border border-blue-500 rounded text-sm font-medium text-blue-600 bg-white"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                    Filter
                    {getActiveFiltersCount() > 0 && (
                      <span className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                        {getActiveFiltersCount()}
                      </span>
                    )}
                  </button>
                </div>

                {/* Search Input */}
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
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
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
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
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
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
                            <svg
                              className={`h-4 w-4 text-gray-400 transition-transform ${
                                expandedCategories.includes(category.name) ? "rotate-180" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
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
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
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

          {/* Main Content */}
          <div className="flex-1">
            {/* Simple Desktop Layout (only show when advanced filters are OFF) */}
            {!showAdvancedFilters && (
              <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-6">
                  {/* Search and Filter Row */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Filter Button */}
                    <button
                      onClick={handleFilterClick}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
                        />
                      </svg>
                      Filter
                    </button>

                    {/* Search Input */}
                    <div className="flex-1 max-w-md relative">
                      <input
                        type="text"
                        placeholder="UI/UX Design"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Sort by:</span>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="Trending">Trending</option>
                        <option value="Newest">Newest</option>
                        <option value="Popular">Popular</option>
                      </select>
                    </div>
                  </div>

                  {/* Suggestions */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-sm text-gray-600">Suggestion:</span>
                    <div className="flex gap-2 flex-wrap">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs rounded-full transition-colors cursor-pointer"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Results Count */}
                  <div className="text-sm text-gray-600 mb-6">
                    {filteredCourses.length.toLocaleString()} results found
                    {searchQuery && ` for "${searchQuery}"`}
                    {filteredCourses.length > 0 && (
                      <span className="ml-2">
                        (Showing {indexOfFirstCourse + 1}-{Math.min(indexOfLastCourse, filteredCourses.length)} of{" "}
                        {filteredCourses.length})
                      </span>
                    )}
                  </div>

                  {/* Category Tabs */}
                  <div className="flex gap-6 border-b overflow-x-auto">
                    {filterCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                          activeFilter === category
                            ? "border-blue-500 text-blue-600"
                            : "border-transparent text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Advanced Category Tabs (only show when advanced filters are ON) */}
            {showAdvancedFilters && (
              <div className="bg-white rounded-lg shadow-sm mb-6">
                <div className="flex gap-8 px-6 py-4 border-b overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => toggleCategory(category.name)}
                      className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                        selectedCategories.includes(category.name)
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            <div
              className={`${showAdvancedFilters ? "bg-white rounded-lg shadow-sm p-6" : "max-w-7xl mx-auto px-6 py-8"}`}
            >
              {showAdvancedFilters && (
                <div className="text-sm text-gray-600 mb-6">
                  {filteredCourses.length.toLocaleString()} results found
                  {searchQuery && ` for "${searchQuery}"`}
                </div>
              )}

              {currentCourses.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {currentCourses.map((course) => (
                      <CoursesCard key={course.id} {...course} />
                    ))}
                  </div>

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
                </>
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
            </div>
          </div>
        </div>

        {/* Advanced Mobile Filter Modal */}
        {showAdvancedFilters && showFilterModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
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
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
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
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
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
                            <svg
                              className={`h-4 w-4 text-gray-400 transition-transform ${
                                expandedCategories.includes(category.name) ? "rotate-180" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
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
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
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

        
      </div>
      <MostViewedCourses />
      <Footer />
    </div>
  )
}



  
  export default CourseDetailPage