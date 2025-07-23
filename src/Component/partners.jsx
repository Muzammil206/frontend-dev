const Partners = () => {
    const partners = [
      {
        name: "Notion",
        logo: "/SVGs/Notion.svg",
        alt: "Notion logo",
      },
      {
        name: "Notion",
        logo: "/SVGs/Notion.svg",
        alt: "Notion logo",
      },
      {
        name: "Notion",
        logo: "/SVGs/Notion.svg",
        alt: "Notion logo",
      },
      {
        name: "Notion",
        logo: "/SVGs/Notion.svg",
        alt: "Notion logo",
      },
    ]
  
    return (
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12">
            Some of our trusted partners
          </h2>
  
          {/* Partners Row - Side by side on all devices */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 md:gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                {/* Logo Icon */}
                <img
                  src={partner.logo || "/placeholder.svg?height=40&width=40&text=Logo"}
                  alt={partner.alt}
                  className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 object-contain flex-shrink-0"
                />
  
                {/* Partner Name Text */}
                <span className="text-gray-700 font-semibold text-base md:text-xl lg:text-2xl whitespace-nowrap tracking-wide">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Partners
  