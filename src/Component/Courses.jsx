import React, { useState } from "react";
import SECTION from "../Elements/SECTION";
import H1 from "../Elements/H1";
import CoursesCard from "./CoursesCard";
import CoursesCard2 from "./CoursesCard2";
import LearnMoreBtn from "./LearnMoreBtn";
import WhatWeDoCard from "./WhatWeDoCard";

const Courses = () => {
  const whatWedo = [
    {
      img: "/SVGs/online.svg",
      txt: "Online courses",
      color: "bg-[#EFEEFF]",
      desc: `Access a wide range of expertly crafted courses designed to help you learn new skills, advance your career, and achieve your goals at your own pace.`,
    },
    {
      img: "/SVGs/workshop.svg",
      txt: "Hands-on workshops",
      color: "bg-[#FFF8E8]",
      desc: `Engage in interactive, practical workshops led by industry
        professionals, designed to equip you with real-world skills and hands-on
        experience.`,
    },
    {
      img: "/SVGs/freelancing.svg",
      txt: "Freelancing",
      color: "bg-[#FFECEC]",
      desc: `Learn how to build a successful freelancing career with in-demand skills, expert guidance, and resources to connect you with global job opportunities.`,
    },
    {
      img: "/SVGs/corporate.svg",
      txt: "Corporate taining",
      color: "bg-[#EDFFFD]",
      desc: `Empower your team with customized training programs tailored to enhance productivity, efficiency, and industry-specific expertise.`,
    },
  ];
  const [activebtn, setActivebtn] = useState(0);
  const Btns = [
    "All",
    "Design",
    "Development",
    "Data Sceince",
    "Personal Development",
  ];
  return (
    <div>
      <SECTION>
        <H1>Featured courses</H1>
        <div className="w-full flex flex-col gap-[2.625rem]">
          <div className="btns flex justify-around">
            {Btns.map((btn, i) => (
              <button
                onClick={() => setActivebtn(i)}
                key={i}
                className={`text-[1.125rem] ${
                  activebtn == i
                    ? "px-4 py-1.5 rounded-lg shadow-sm shadow-black/40"
                    : "px-4 py-1.5"
                } hover:font-bold`}
              >
                {btn}
              </button>
            ))}
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

      <div className="bg-[url(/SVGs/whatwedobg.svg)] bg-center bg-cover bg-no-repeat">
        <SECTION otherStyle={"gap-[1rem] bg-transparent"}>
          <H1 otherStyle={"font-Nunito text-[#0A033C]"}>What we do</H1>
          <p className="text-neutral-500 text-2xl">
            We provide a comprehensive technological solutions tailored to solve
            your problems
          </p>
          <div className="whatwedo flex gap-10 flex-wrap justify-center items-center my-8">
            {whatWedo.map((what, i) => (
              <WhatWeDoCard key={i} {...what} />
            ))}
          </div>
          <LearnMoreBtn />
        </SECTION>
      </div>

      <SECTION>
        <div className="grid grid-cols-2 md:gap-x-[6.25rem] gap-20 items-center">
          <img src="/SVGs/Events.svg" alt="" />
          <div className="flex md:flex-col flex-col gap-8 items-end text-end">
            <H1>Stay ahead with our exclusive events</H1>
            <p className="text-[1.125rem] font-Inter font-[400]">
              Join interactive workshops, webinars, and bootcamps designed to
              accelerate your growth and connect you with industry experts
            </p>
            <button className="text-white rounded-xl px-[1rem] py-[12px] bg-primaryBlue font-Roboto w-max mt-2">
              View Events
            </button>
          </div>
        </div>
      </SECTION>
    </div>
  );
};

export default Courses;
