const Categories = () => {
    const categories = [
      {
        icon: "/SVGs/design.png",
        title: "Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        icon: "/SVGs/dev.png",
        title: "Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        icon: "/SVGs/data.svg",
        title: "Data science",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        icon: "/SVGs/design.png",
        title: "Personal Dev",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ]
  
    return (
      <section className="py-16 px-6 md:px-20" style={{ backgroundColor: "#252641" }}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">Categories</h2>
            </div>
          </div>
  
          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-lg md:rounded-xl flex items-center justify-center">
                    <img
                      src={category.icon || "/placeholder.svg?height=32&width=32&text=Icon"}
                      alt={`${category.title} icon`}
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                  </div>
                </div>
  
                {/* Title */}
                <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">{category.title}</h3>
  
                {/* Description */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
  
          {/* Learn More Button */}
          <div className="text-center">
            <button className="bg-white border border-blue-500 hover:bg-blue-600 text-blue-500  px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-colors duration-300">
              Learn more
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  export default Categories
  