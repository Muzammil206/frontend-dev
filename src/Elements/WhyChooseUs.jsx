import React from "react";
import SECTION from "./SECTION";
import H2 from "./H2";
import CategoryCard from "../Component/CategoryCard";
import LearnMoreBtn from "../Component/LearnMoreBtn";

const WhyChooseUs = () => {
  return (
    <div className="">
      {/* <SECTION otherStyle={""}>
        <H2 otherStyles={"font-medium text-black"}>Why choose us</H2>
        <div className="bg-[url(/SVGs/shape.svg)] bg-repeat bg-primaryBlue rounded-lg lg:w-[80%]">
          <div className="py-[3.5625rem] px-8 grid grid-cols-3 gap-6 bg-black/20 backdrop-blur-sm">
            <div className="flex md:gap-6 rounded-[0.6875rem]">
              <div className="p-5 bg-[#FFEACC] rounded-lg h-[4.0625rem]">
                <img className="" src="/SVGs/book.svg" alt="book icon" />
              </div>
              <div className="flex flex-col gap-10 lg:w-[17.8125rem] md:w-[14.6875rem]">
                <h1 className="text-2xl font-Roboto font-bold text-white">
                  Interactive learning
                </h1>
                <p className="font-Roboto text-white text-xs">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </p>
              </div>
            </div>

            <div className="flex md:gap-6 rounded-[0.6875rem]">
              <div className="p-5 bg-[#FFEACC] rounded-lg h-[4.0625rem]">
                <img className="" src="/SVGs/book.svg" alt="book icon" />
              </div>
              <div className="flex flex-col gap-10 lg:w-[17.8125rem] md:w-[14.6875rem]">
                <h1 className="text-2xl font-Roboto font-bold text-white">
                  Interactive learning
                </h1>
                <p className="font-Roboto text-white text-xs">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </p>
              </div>
            </div>

            <div className="flex md:gap-6 rounded-[0.6875rem]">
              <div className="p-5 bg-[#FFEACC] rounded-lg h-[4.0625rem]">
                <img className="" src="/SVGs/book.svg" alt="book icon" />
              </div>
              <div className="flex flex-col gap-10 lg:w-[17.8125rem] md:w-[14.6875rem]">
                <h1 className="text-2xl font-Roboto font-bold text-white">
                  Interactive learning
                </h1>
                <p className="font-Roboto text-white text-xs">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SECTION> */}

      <SECTION otherStyle={"bg-[#252641]"}>
        <H2 otherStyles={"font-medium text-white"}>Category</H2>
        <div className="flex md:gap-[2.8125rem] gap-6 flex-wrap justify-center items-center">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
        <LearnMoreBtn />
      </SECTION>
    </div>
  );
};

export default WhyChooseUs;
