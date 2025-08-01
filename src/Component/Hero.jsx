import P from "../Elements/P"
import H1 from "../Elements/H1"
import Search from "./Search"
import FloatingBadge from "./FloatingBadge" // Renamed and updated component

export const Hero = () => {
  return (
    <div className="md:px-20 px-6 bg-[#fff] flex md:flex-row flex-col-reverse md:gap-8 gap-6 justify-between items-center pb-[5rem] md:pt-[10rem] pt-[9rem] min-h-screen md:min-h-0">
      {/* Left Content Section */}
      <div className="md:w-[55%] w-full flex flex-col md:gap-10 gap-6 md:items-start items-center">
        {/* Decorative Element */}
        <div className="relative w-full">
          <svg className="absolute -top-4 -left-4 w-16 h-16 text-pink-200" viewBox="0 0 100 100" fill="currentColor">
            <path d="M20,20 Q20,5 35,5 Q50,5 50,20 Q50,35 35,35 Q20,35 20,20 Z" />
          </svg>
        </div>

        <H1 otherStyle={"leading-[55.75px] md:text-start text-center max-w-full"}>
          LEARN TECH FOR{" "}
          <span
            style={{
              background: "linear-gradient(88.53deg, #73A44B -3.13%, #0056D2 44.49%)",
              backgroundClip: "text",
            }}
            className="text-transparent font-bold bg-clip-text transition-all duration-300"
          >
            HEALTHCARE
          </span>
        </H1>

        <P otherStyles={"md:text-start text-center max-w-lg"}>
          Join thousands of learners enhancing their technology skills for African healthcare with our well detailed
          online courses, workshops and innovative challenges.
        </P>

        <div className="w-full md:w-auto">
          <Search />
        </div>

        {/* Partner Logos */}
      
      </div>

      {/* Right Image Section */}
      <div className="md:w-[40%] w-full flex justify-center items-center relative p-8 rounded-[3rem] bg-gradient-to-br from-white via-green-50 to-blue-50">
        {/* Geometric Background */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {/* Diamond Shapes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 border-4 border-green-400 rotate-45 rounded-3xl opacity-40"></div>
            <div className="absolute w-80 h-80 border-4 border-blue-500 rotate-45 rounded-3xl opacity-40 translate-x-4 translate-y-4"></div>
          </div>

          {/* Main Image Container */}
          <div className="relative z-20 w-80 h-full rounded-3xl overflow-hidden">
            {/* Desktop Image - Hidden on mobile and tablet */}
            <img
              src="/SVGs/side.png"
              className="hidden lg:block w-full h-full object-cover"
              alt="Learning platform illustration for desktop"
              onError={(e) => {
                e.target.src = "/placeholder.svg?height=400&width=400"
              }}
            />
            {/* Mobile/Tablet Image - Hidden on desktop */}
            <img
              src="/SVGs/side.png"
              className="block lg:hidden w-full h-full object-cover"
              alt="Learning platform illustration for mobile"
              onError={(e) => {
                e.target.src = "/placeholder.svg?height=400&width=400"
              }}
            />
          </div>

          {/* Floating Social Proof Badge - Top Right */}
          <FloatingBadge
            className="absolute -top-6 -right-6 md:-right-12 z-30" // Adjusted positioning
            text="Over 2500 students"
            gradientFrom="from-green-400"
            gradientTo="to-blue-500"
            avatars={[
              "SVGs/sampleImage.svg?height=32&width=32",
              "SVGs/sampleImage.svg?height=32&width=32",
              "SVGs/sampleImage.svg?height=32&width=32",
            ]}
          />

          {/* Floating Social Proof Badge - Bottom Left */}
          <FloatingBadge
            className="absolute -bottom-4 -left-4 md:-left-8 z-30"
            text="Join several other like minds"
            gradientFrom="from-purple-400"
            gradientTo="to-pink-500"
            avatars={[
              "SVGs/sampleImage.svg?height=32&width=32",
              "SVGs/sampleImage.svg?height=32&width=32",
              "SVGs/sampleImage.svg?height=32&width=32",
            ]}
          />
        </div>
      </div>
    </div>
  )
}
