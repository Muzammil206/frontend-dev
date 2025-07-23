import P from "../Elements/P"
import H1 from "../Elements/H1"
import Search from "./Search"
import AvatarGroup from "./AvatarGroup"



export const Hero = () => {
  const sampleAvatars = ["/SVGs/avatar1.png", "/SVGs/avatar2.png", "/SVGs/avatar3.png"]

  return (
    <div className="md:px-20 px-6 bg-[#fff] flex md:flex-row flex-col-reverse md:gap-8 gap-6 justify-between items-center pb-[5rem] md:pt-[10rem] pt-[9rem] min-h-screen md:min-h-0">
      {/* Left Content Section */}
      <div className="md:w-[55%] w-full flex flex-col md:gap-10 gap-6 md:items-start items-center">
        <H1 otherStyle={"leading-[55.75px] md:text-start text-center max-w-full"}>
          EMPOWER YOUR{" "}
          <span
            style={{
              background: "linear-gradient(88.53deg, #73A44B -3.13%, #0056D2 44.49%)",
              backgroundClip: "text",
            }}
            className="text-transparent font-bold bg-clip-text transition-all duration-300"
          >
            LEARNING
          </span>{" "}
          JOURNEY
        </H1>

        <P otherStyles={"md:text-start text-center max-w-lg"}>
          Join thousands of learners enhancing their tech skills with our well detailed online courses, workshops and
          Innovative challenges.
        </P>

        <div className="w-full md:w-auto">
          <AvatarGroup avatars={sampleAvatars} />
        </div>

        <div className="w-full md:w-auto">
          <Search />
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-[40%] w-full flex justify-center items-center">
        {/* Desktop Image - Hidden on mobile and tablet */}
        <img
          src="/SVGs/sampleImage.svg"
          className="hidden lg:block w-4/5 max-w-md object-contain"
          alt="Learning platform illustration for desktop"
        />

        {/* Mobile/Tablet Image - Hidden on desktop */}
        <img
          src="/SVGs/mobile-hero-image.svg"
          className="block lg:hidden w-4/5 max-w-sm object-contain"
          alt="Learning platform illustration for mobile"
        />
      </div>
      
    </div>
  )
}
