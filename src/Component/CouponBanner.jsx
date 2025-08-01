const CouponBanner = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto relative bg-[#669933] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Abstract Graphic */}
        <div
          className="absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60"
          style={{
            backgroundImage: `url(/placeholder.svg?height=200&width=200&query=abstract+swirling+line+graphic+white)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left",
            opacity: 0.8,
          }}
        ></div>

        {/* Left Content Section */}
        <div className="relative z-10 flex-1 text-center lg:text-left max-w-3xl lg:pr-12">
          <h2 className="font-dm-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Get Exclusive Relief Payments for Your Courses
          </h2>
          <p className="font-dm-sans text-base md:text-lg text-white mb-8 leading-relaxed">
            We believe learning should be accessible to everyone! Use special coupons and relief payments to get
            discounts on courses, workshops, and certifications.
          </p>
          <button className="font-dm-sans bg-[#050829] hover:bg-[#1a2332] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            Apply for a coupon
          </button>
        </div>

        {/* Right Image Section */}
        <div className="relative z-0 flex-shrink-0 w-full lg:w-auto h-64 lg:h-auto flex justify-center lg:justify-end">
          <img
            src="/SVGs/left.png"
            alt="Woman pointing to content"
            className="w-full absolute h-full object-contain lg:absolute lg:right-0 lg:bottom-0 lg:h-[120%] lg:w-auto transform lg:translate-x-1/4"
          />
        </div>
       
      </div>
    </section>
  )
}

export default CouponBanner
