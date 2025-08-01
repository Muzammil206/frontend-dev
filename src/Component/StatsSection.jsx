import { Users, Download } from "lucide-react"

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "2500+",
      label: "Students",
      bgColor: "bg-[#EFEEFF]", // Light purple
      iconColor: "text-purple-600",
    },
    {
      icon: Download,
      number: "502",
      label: "Courses",
      bgColor: "bg-[#FFF8E8]", // Light yellow
      iconColor: "text-yellow-600",
    },
    {
      icon: Users,
      number: "30",
      label: "Partners",
      bgColor: "bg-[#EDFFFD]", // Light green
      iconColor: "text-teal-600",
    },
  ]

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="flex items-center gap-4 text-center sm:text-left">
                <div className={`flex-shrink-0 w-20 h-20 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                  <IconComponent className={`w-10 h-10 ${stat.iconColor}`} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-dm-sans text-4xl md:text-5xl font-bold text-gray-900 leading-none mb-1">
                    {stat.number}
                  </div>
                  <div className="font-dm-sans text-base md:text-lg text-gray-600">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
