

import { Search, SlidersHorizontal, ChevronDown } from "lucide-react"
import Nav from "../Component/Nav" // Reusing the existing Nav component

const CourseHeader = ({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  activeFilter,
  setActiveFilter,
  filterCategories,
  handleFilterClick,
  getActiveFiltersCount,
}) => {
  return (
    <div className="bg-[#050829] text-white pt-28 pb-16 px-6 md:px-20">
      <Nav bg="#D7D7D7" />
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-dm-sans text-4xl md:text-5xl font-bold mb-4">All Courses</h1>
        <p className="font-dm-sans text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
          Learn practical, in-demand skills at your own pace with expert-led lessons designed for the future of
          healthcare.
        </p>

        {/* Search, Filter, and Sort Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="what do you want to learn?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={handleFilterClick}
            className="relative flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filter
            {getActiveFiltersCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {getActiveFiltersCount()}
              </span>
            )}
          </button>

          <div className="relative w-full md:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-5 py-3 rounded-lg bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
            >
              <option value="Trending">Sort by: Trending</option>
              <option value="Newest">Sort by: Newest</option>
              <option value="Popular">Sort by: Popular</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`font-dm-sans text-sm md:text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap
              ${
                activeFilter === category
                  ? "bg-green-600 text-white shadow-sm"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseHeader
