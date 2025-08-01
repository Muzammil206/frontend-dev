const WhyChooseUs = () => {
  const features = [
    {
      icon: "/SVGs/first.png?height=64&width=64",
      title: "Interactive learning",
      description:
        "Experience learning hands-on technology skills designed to engage and empower you to achieve your full potential.",
    },
    {
      icon: "/SVGs/middle.png?height=64&width=64",
      title: "Expert Educators",
      description:
        "Our educators are thought leaders in technology and seasoned experts in healthcare dedicated to help you achieve your goals.",
    },
    {
      icon: "/SVGs/last.png?height=64&width=64",
      title: "Creative Solutions",
      description:
        "Design and build innovative solutions that leverage technology to enhance health care delivery and patient care.",
    },
  ]

  return (
    <section className="py-16 px-6 md:px-20 bg-[#050829]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
      

        {/* Desktop Layout - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 flex items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#3a4252] flex items-center justify-center">
                <img
                  src={feature.icon || "/placeholder.svg"}
                  alt={`${feature.title} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Content */}
              <div>
                {/* Title */}
                <h3 className="font-dm-sans text-[28px] font-bold leading-[28px] text-white mb-4">{feature.title}</h3>
                {/* Description */}
                <p className="font-dm-sans text-[15px] font-medium leading-[24px] text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
