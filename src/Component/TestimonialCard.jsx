const TestimonialCard = ({ name, img, desc, occupation }) => {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
      {/* Quote */}
      <p className="font-dm-sans text-base md:text-lg text-gray-600 mb-6 leading-relaxed">{desc}</p>

      {/* Author Info */}
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={img || "/placeholder.svg?height=48&width=48"}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-dm-sans text-lg font-bold text-gray-900">{name}</h3>
          <p className="font-dm-sans text-sm text-gray-500">{occupation}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
