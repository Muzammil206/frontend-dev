import React from "react";
import P from "../Elements/P";
import H1 from "../Elements/H1";
import Search from "./Search";

export const Hero = () => {
  return (
    <div className="md:px-20 px-6 bg-[#fff] flex md:flex-row flex-col-reverse md:gap-0 gap-4 justify-between items-center pb-[5rem] md:pt-[10rem] pt-[9rem]">
      <div className="md:w-[55%] flex flex-col md:gap-10">
        <H1 otherStyle={"leading-[55.75px md:text-start text-center"}>
          EMPOWER YOUR{" "}
          <span
            style={{
              background:
                "linear-gradient(88.53deg, #73A44B -3.13%, #0056D2 44.49%)",
              backgroundClip: "text",
            }}
            className="text-transparent font-bold bg-clip-text transition-all duration-300"
          >
            LEARNING
          </span>{" "}
          JOURNEY
        </H1>
        <P otherStyles={""}>
          Join thousands of learners enhancing their tech skills with our well
          detailed online courses, workshops and Innovative challenges.
        </P>

        <Search />
      </div>
      <div className="right md:w-40% flex justify-center items-center">
        <img src="/SVGs/sampleImage.svg" className="w-4/5" alt="" />
      </div>
    </div>
  );
};
