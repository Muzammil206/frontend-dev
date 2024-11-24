import React from "react";
import P from "../Elements/P";
import H1 from "../Elements/H1";

export const Hero = () => {
  return (
    <div className="md:px-20 px-6 bg-[#F4F4F4] flex md:flex-row flex-col justify-between items-center pb-[5rem] pt-[10rem]">
      <div className="w-[55%] flex flex-col gap-10">
        <H1 otherStyle={"leading-[55.75px"}>EMPOWER YOUR LEARNING JOURNEY</H1>
        <P otherStyles={""}>
          Join thousands of learners enhancing their tech skills with our well
          detailed online courses, workshops and Innovative challenges.
        </P>

        <div className="search flex items-center  border-black border-[1px] w-max py-0.5 rounded-full gap-4 pl-4">
          <i className="fa fa-search text-2xl" aria-hidden="true"></i>
          <input
            className="text-xl h-14 outline-none md:w-80 bg-[#F4F4F4]"
            type="text"
            placeholder="What do you want to learn"
            name=""
            id=""
          />
          <button className="text-white rounded-full px-[2rem] py-[1rem] bg-titleColor text-[1.5625rem]">
            Continue
          </button>
        </div>
      </div>
      <div className="right w-40% flex justify-center items-center">
        <img src="/SVGs/sampleImage.svg" className="w-4/5" alt="" />
      </div>
    </div>
  );
};
