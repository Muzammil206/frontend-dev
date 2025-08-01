import { MessageSquare } from "lucide-react"

const InstructorCTA = () => {
  return (
    <section
      className="py-16 px-6 md:px-20 bg-gray-100"
      style={{
        backgroundImage: `url(/SVGs/whatwedobg.svg?height=200&width=1000&query=light+green+organic+pattern)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto bg-[#050829] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Content Section */}
        <div className="flex-1 text-center lg:text-left max-w-3xl">
          <h2 className="font-dm-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Share Your Expertise And Inspire Others
          </h2>
          <p className="font-dm-sans font-normal text-[16px] leading-[32px] text-gray-300 mb-8">
            Join us in empowering the next generation of healthcare talent across Africa by teaching cutting edge skills
            in Data Science, AI, Software, AR/VR, Digital Health, Hardware, Design, Biomedics and Soft Skills that
            transform patient care and inspire innovative changes in the healthcare industry.
          </p>
          <button className="font-dm-sans border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#050829] transition-colors duration-300">
            Become an instructor
          </button>
        </div>

        {/* Right Glowing Icon */}
        <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 relative flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(5,8,41,0) 70%)",
              filter: "blur(20px)",
            }}
          ></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#050829] border border-blue-500 flex items-center justify-center shadow-lg">
            {/* <MessageSquare className="w-16 h-16 md:w-20 md:h-20 text-white" /> */}
            <img
              src="/SVGs/4.svg"
              alt="Instructor Icon"
              className="w-40 h-40 md:w-50 md:h-50 object-contain"
              onError={(e) => {
                e.target.src = "/SVGS/4.svg?height=100&width=100&text=Instructor+Icon"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstructorCTA
