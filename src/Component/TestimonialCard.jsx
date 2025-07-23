const TestimonialCard = ({ desc, name, occupation, img }) => {
  return (
    <div className="testimonial-card border-[#D9D9D9] border-[1px] flex flex-col w-full gap-4 md:gap-6 p-4 md:p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 mx-auto">
      <p className="desc font-Poppins font-semibold text-gray-700 leading-relaxed text-sm md:text-base">{desc}</p>
      <div className="flex items-center gap-3">
        <img
          src={img || "/placeholder.svg?height=40&width=40"}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover bg-gray-100 flex-shrink-0"
          alt={name}
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-[#757575] font-medium text-sm md:text-base truncate">{name}</h3>
          <span className="text-[#B3B3B3] text-xs md:text-sm">{occupation}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
