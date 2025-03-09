import React, { useState } from "react";
import Nav from "../Component/Nav";
import H1 from "../Elements/H1";
import CoursesCard from "../Component/CoursesCard";
import SECTION from "../Elements/SECTION";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";

const CoursesPage = () => {
  const [activebtn, setActivebtn] = useState(0);
  const Btns = [
    "All",
    "Design",
    "Development",
    "Data Sceince",
    "Personal Development",
  ];
  const ModulesData = [
    {
      numb: "01",
      title: "Introduction to UI/UX Design",
    },
    {
      numb: "02",
      title: "User Research and Personas",
    },
    {
      numb: "03",
      title: "Wireframing and Prototyping",
    },
    {
      numb: "04",
      title: "Visual Design and Branding",
    },
    {
      numb: "05",
      title: "Usability Testing and Iteration",
    },
  ];
  return (
    <div>
      <Nav />
      <main className="md:my-[5.2406rem] my-10 px-10 pt-16">
        <header className="flex md:justify-between items-end gap-4 md:items-center mb-8 relative">
          <div className="searchfilter flex gap-6 justify-center md:pt-0 pt-[4rem] md:items-center md:flex-row flex-col-reverse">
            <div className="filter h-12 border-[1px] border-[E9EAF0] rounded-lg flex px-6 gap-6 justify-center items-center w-max">
              <img src="/SVGs/filter.svg" className="md:w-6 md:h-6" alt="" />
              <p className="font-Poppins font-semibold">Filter</p>
            </div>
            <div className="border-[1px] md:relative absolute w-full top-0 rounded-lg border-[#E9EAF0] h-[48px] md:w-[457px] p-2 flex gap-4">
              <i
                className="fa fa-search text-2xl font-[100]"
                aria-hidden="true"
              ></i>

              <input
                type="text"
                placeholder="Search"
                className="outline-none border-none w-full"
              />
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-[14px] text-[#4E5566] mr-4 md:block hidden">
              Sort by:
            </span>
            <select
              name=""
              id=""
              className="outline-none border-[1px] border-[#E9EAF0] h-[48px] w-[200px] p-2 rounded-lg"
            >
              <option value="">Trending</option>
              <option value="">Educating</option>
            </select>
          </div>
        </header>

        <SECTION>
          <div className="w-full flex flex-col gap-[2.625rem]">
            <div className="btns md:flex hidden justify-around">
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

            <div className="courses gap-4 flex flex-wrap justify-center w-full">
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
            </div>
          </div>
        </SECTION>

        <section className="md:px-20 ">
          <div className="flex md:flex-row flex-col items-center justify-between">
            <H1>Most viewed courses</H1>
            <Link className="text-[20px] md:block hidden text-primaryBlue hover:underline">
              See all
            </Link>
          </div>
          <div className="mt-6 border-[1px] md:border-[#D9D9D9] border-none md:p-10 bg-[#FFFDFD]">
            <div className="flex md:flex-row flex-col items-center justify-between gap-14">
              <div className="md:w-3/6">
                <video
                  className="w-full shadow-lg m-auto h-[30rem] rounded-lg"
                  controls
                >
                  <source src="..Videos/video1.mp4" type="video/mp4" />
                </video>
                <div className="flex items-center justify-between mt-6">
                  <span className="flex items-center gap-1">
                    <p className="bg-white border-[1px] border-[#F1F1F3] rounded-md px-2 p-1">
                      6 Weeks
                    </p>
                    <p className="bg-white border-[1px] border-[#F1F1F3] rounded-md px-2 p-1">
                      Intermidiate
                    </p>
                  </span>
                  <p>5k views</p>
                </div>
              </div>
              <div className="md:w-3/6 flex flex-col gap-4">
                <H1>UI/UX Design</H1>
                <p className="md:text-base text-sm">
                  Become a master of UI design and UX enhancement by learning
                  the essential skills of design principles, wireframing,
                  prototypng, and usability testing to create seamless and
                  engaging interactions
                </p>
                <Link
                  className="text-white rounded-xl px-[1.5rem] py-[12px] bg-primaryBlue font-Roboto w-max"
                  to="/course_details"
                >
                  View Course
                </Link>
              </div>
            </div>

            <section className="border-[1px] border-[#D9D9D9] rounded-lg md:block hidden">
              <header className="Modules py-5 px-6  border-b-[1px] border-b-[#D9D9D9] text-[18px] font-semibold font-Vietnam">
                Modules
              </header>
              <div className="px-10 py-6 flex w-full justify-start">
                {ModulesData.map((mod, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-4 w-[11.5rem] border-r-[#F1F1F3] border-r-[1px] px-8"
                  >
                    <h1 className="font-bold text-[40px]">{mod.numb}</h1>
                    <p>{mod.title}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
