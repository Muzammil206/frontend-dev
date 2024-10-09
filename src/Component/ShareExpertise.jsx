import React from "react";
import P from "../Elements/P";
import H1 from "../Elements/H1";
import SECTION from "../Elements/SECTION";
import TeamFile from "./TeamFile";
import NewsLetter from "./NewsLetter";

const ShareExpertise = () => {
  return (
    <div className="bg-white pb-20">
      <div className="px-20 bg-[#F4F4F4] flex md:flex-row flex-col justify-between items-center pb-[5rem] pt-[10rem]">
        <div className="w-[55%] flex flex-col gap-10">
          <H1 otherStyle={"leading-[55.75px"}>
            Share your expertise and inspire others
          </H1>
          <P otherStyles={""}>
            Be a part of community that empowers learners, celebrates teaching
            and Transform lives through teaching. Join us today!
          </P>
          <button className="w-max px-8 h-[2.75rem] flex justify-center items-center text-black bg-white shadow-lg border-black/30 border-[1px] rounded">
            Become an Insttructor
          </button>
        </div>
        <div className="right w-40% flex justify-center items-center">
          <img src="/SVGs/sampleImage.svg" className="w-4/5" alt="" />
        </div>
      </div>
      <SECTION>
        <H1>Meet our Team</H1>
        <div className="pt-20 flex justify-between w-full gap-8">
          <TeamFile />
          <TeamFile />
          <TeamFile />
        </div>
      </SECTION>
      <NewsLetter />
    </div>
  );
};

export default ShareExpertise;
