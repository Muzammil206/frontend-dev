import React from "react"
import { SearchIcon, SlidersHorizontal, ChevronDown } from 'lucide-react'

const DashboardSearchFilter = ({ searchQuery, setSearchQuery, sortBy, setSortBy }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Search Input */}
      <div className="relative w-full md:max-w-md">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="what do you want to learn?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        />
      </div>

      {/* Filter and Sort Buttons */}
      <div className="flex gap-4 w-full md:w-auto">
        <button className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors shadow-sm">
          <SlidersHorizontal className="w-5 h-5" />
          Filter
        </button>

        <div className="relative w-full md:w-auto">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 shadow-sm"
          >
            <option value="Trending">Sort by: Trending</option>
            <option value="Newest">Sort by: Newest</option>
            <option value="Popular">Sort by: Popular</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}

export default DashboardSearchFilter
