import { LayoutGrid, Square, Users, BookOpen } from "lucide-react"

const WhatWeDo = () => {
  const whatWeDoItems = [
    {
      icon: LayoutGrid, // Lucide icon component
      title: "Online Courses",
      description:
        "Access a wide range of expertly crafted courses designed to help you learn new skills, advance your career, and achieve your goals at your own pace.",
    },
    {
      icon: Square, // Lucide icon component
      title: "Hands-on Workshops",
      description:
        "Engage in interactive, practical workshops led by industry professionals, designed to equip you with real-world skills and hands-on experience to solve African landscape health problems.",
    },
    {
      icon: Users, // Lucide icon component
      title: "Corporate Trainings",
      description:
        "Our corporate training programs are designed to meet the specific needs of healthcare organisation, to enhance capacity building solutions for teams",
    },
    {
      icon: BookOpen, // Lucide icon component
      title: "Project Building",
      description:
        "Develop and implement healthcare projects with in-demand skills, expert guidance, and resources to connect you with global opportunities.",
    },
  ]

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-dm-sans text-4xl md:text-5xl font-bold text-gray-900 inline-block relative pb-2">
            What We Do
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Section */}
          <div className="flex justify-center lg:justify-end">
            {/* Green background shape */}
            <div className="relative w-full max-w-md h-[400px] md:h-[500px] bg-[#669933] rounded-tr-[10rem] rounded-br-[3rem] rounded-tl-xxxl rounded-bl-xl overflow-hidden flex items-center justify-center lg:-ml-12 " >
              <img
                src="/SVGs/woman.png"
                alt="Woman learning with laptop"
                className="absolute inset-0 w-[400px] h-[400px] object-cover object-center"
              />
            </div>
          </div>
          

          {/* Right Features List */}
          <div className="flex flex-col gap-6">
            <div className="inline-block px-4 py-2 border border-red-300 text-black rounded-full font-dm-sans text-sm font-medium text-center lg:text-left">
              Comprehensive Technological Solutions
            </div>
            {whatWeDoItems.map((item, index) => {
              const IconComponent = item.icon // Get the Lucide icon component
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <IconComponent className="w-6 h-6 text-blue-600" /> {/* Render Lucide icon */}
                  </div>
                  <div>
                    <h3 className="font-dm-sans text-lg font-bold text-[#050829] mb-1">{item.title}</h3>
                    <p className="font-dm-sans text-[12px] leading-[12px] tracking-[0.01em] text-[#696984]">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
         
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
