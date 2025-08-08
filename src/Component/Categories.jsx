"use client"

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase" // Import your Supabase client

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      setError(null)
      try {
        const { data, error } = await supabase.from("course_categories").select("*")
        if (error) {
          throw error
        }
        setCategories(data)
        console.log("Fetched categories:", data) // Log fetched categories for debugging
      } catch (err) {
        console.error("Error fetching categories:", err.message)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  if (loading) {
    return (
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-dm-sans text-lg text-gray-600">Loading course categories...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-dm-sans text-lg text-red-500">Error loading categories: {error}</p>
          <p className="font-dm-sans text-sm text-gray-600">
            Please ensure your Supabase project is configured and the 'course_categories' table exists.
          </p>
        </div>
      </section>
    )
  }

  if (categories.length === 0) {
    return (
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-dm-sans text-lg text-gray-600">No course categories found.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-dm-sans text-4xl md:text-5xl font-bold text-gray-900 inline-block relative pb-2">
            Course Categories
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
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id} // Use category.id as key
              className="bg-white rounded-2xl p-6 md:p-8 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center ${
                    index === 0
                      ? "bg-blue-100"
                      : index === 1
                        ? "bg-purple-100"
                        : index === 2
                          ? "bg-yellow-100"
                          : "bg-purple-100"
                  }`}
                >
                  {/* Using a placeholder as icon is not in Supabase data */}
                  <img
                    src={"/placeholder.svg?height=48&width=48&query=category+icon"}
                    alt={`${category.name} icon`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              {/* Title */}
              <h3 className="font-dm-sans text-xl md:text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
              {/* Description */}
              <p className="font-dm-sans text-sm md:text-base font-medium text-gray-600 leading-relaxed mb-4">
                {category.description}
              </p>
              {/* More Button */}
              <button className="font-dm-sans border border-green-500 text-green-500 px-5 py-2 rounded-full font-medium text-sm hover:bg-green-50 hover:text-green-600 transition-colors duration-300">
                more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
