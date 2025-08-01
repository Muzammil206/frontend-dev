const EventsSection = () => {
  return (
    <section
      className="py-16 px-6 md:px-20"
      style={{
        background: "radial-gradient(at top left, #e0e7ff 0%, #ffffff 50%)", // Subtle light blue/purple to white gradient
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="font-dm-sans text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Stay ahead with our exclusive events
            </h2>
            <p className="font-dm-sans text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Join interactive workshops, webinars, and bootcamps designed to accelerate your growth in healthcare
              impact and connect you with like minds.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="font-dm-sans border border-green-500 text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors duration-300">
                View Events
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md h-[300px] md:h-[400px] rounded-tr-[10rem] rounded-br-[3rem] rounded-tl-xl rounded-bl-xl overflow-hidden shadow-lg">
              <img
                src="/SVGs/event.png?height=400&width=500"
                alt="Exclusive Events"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
