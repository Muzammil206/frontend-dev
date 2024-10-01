import React from "react";
import SECTION from "../Elements/SECTION";
import H1 from "../Elements/H1";
import CoursesCard from "./CoursesCard";
import CoursesCard2 from "./CoursesCard2";
import LearnMoreBtn from "./LearnMoreBtn";

const Courses = () => {
  const whatWedo = [
    {
      img: "/SVGs/online.svg",
      txt: "Online courses",
      color: "bg-[#EFEEFF]",
    },
    {
      img: "/SVGs/workshop.svg",
      txt: "Hands-on workshops",
      color: "bg-[#FFF8E8]",
    },
    {
      img: "/SVGs/freelancing.svg",
      txt: "Freelancing",
      color: "bg-[#FFECEC]",
    },
    {
      img: "/SVGs/corporate.svg",
      txt: "Corporate taining",
      color: "bg-[#EDFFFD]",
    },
  ];
  return (
    <div>
      <SECTION>
        <H1>Featured courses</H1>
        <div className="w-full flex flex-col gap-[2.625rem]">
          <div className="btns flex justify-around">
            <button className="hover:font-bold">All</button>
            <button className="hover:font-bold">Design</button>
            <button className="hover:font-bold">Development</button>
            <button className="hover:font-bold">Data Science</button>
            <button className="hover:font-bold">Development</button>
            <button className="hover:font-bold">Personal development</button>
          </div>
          <div className="courses grid gap-[6.25rem] lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-between w-full ">
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
          </div>
        </div>
      </SECTION>
      <SECTION>
        <H1>Professional courses</H1>
        <div className="w-full flex flex-col gap-[2.625rem]">
          <div className="btns flex justify-around">
            <button className="hover:font-bold">All</button>
            <button className="hover:font-bold">Design</button>
            <button className="hover:font-bold">Development</button>
            <button className="hover:font-bold">Data Science</button>
            <button className="hover:font-bold">Development</button>
            <button className="hover:font-bold">Personal development</button>
          </div>
          <div className="courses grid gap-[6.25rem] lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-between w-full ">
            <CoursesCard2 />
            <CoursesCard2 />
            <CoursesCard2 />
          </div>
        </div>
      </SECTION>
      <SECTION otherStyle={"gap-[1rem] bg-[#F3F3F3]"}>
        <H1 otherStyle={"font-Nunito text-[#0A033C]"}>What we do</H1>
        <p className="text-neutral-500 text-2xl">
          We provide a comprehensive technological solutions tailored to solve
          your problems
        </p>
        <div className="whatwedo flex gap-[2.25rem] items-center my-8">
          {whatWedo.map((what) => (
            <div className="each w-[16.25rem] h-[6.75rem] items-center px-6 py-5 bg-white rounded-lg flex gap-5 ">
              <div
                className={`img flex justify-center items-center min-w-[3.75rem] min-h-[3.75rem] rounded-2xl ${what.color}`}
              >
                <img src={what.img} alt="" />
              </div>
              <p className="font-Nunito text-2xl font-bold">{what.txt}</p>
            </div>
          ))}
        </div>
        <LearnMoreBtn />
      </SECTION>
    </div>
  );
};

export default Courses;
