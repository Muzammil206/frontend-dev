import React from "react";
import Nav from "../Component/Nav";
import Browse from "../Component/Browse";
import CoursesCard2 from "../Component/CoursesCard2";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
const StudentDashboard = () => {
  return (
    <div className="pt-[6rem]">
      <Nav />
      <Browse />
      <section className="lg:px-20 bg-[#F4F4F4] px-6 flex flex-col  pb-[5rem] pt-[10rem] gap-[3.4375rem]">
        <h1 className="font-medium font-Poppins text-3xl">
          Hello Amirat! Welcome Back.
        </h1>
        <div className="flex justify-between w-full">
          <CoursesCard2 />
          <CoursesCard2 />
          <CoursesCard2 />
        </div>
      </section>
      <section className="lg:px-20 px-6 bg-white flex flex-col gap-16 pb-[5rem] pt-[10rem]">
        <header className="font-Poppins flex justify-between items-center">
          <h1 className="font-medium font-Poppins text-3xl">
            Recommended for you
          </h1>
          <Link className="text-xl font-bold text-[#49BBBD]" to="/courses">
            {" "}
            See all
          </Link>
        </header>
        <div className="courses grid gap-[6.25rem] lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-between w-full ">
          <CoursesCard2 />
          <CoursesCard2 />
          <CoursesCard2 />
        </div>
        <div className="btn flex gap-4 justify-end">
          <button className="flex justify-center items-center rounded-md bg-[#49BBBD]/70 w-[3.125rem] h-[3.125rem] text-white">
            <i className="block fa fa-chevron-left"></i>
          </button>
          <button className="flex justify-center items-center rounded-md bg-[#49BBBD] w-[3.125rem] h-[3.125rem] text-white">
            <i className="block fa fa-chevron-right"></i>
          </button>
        </div>
      </section>

      <section className="lg:px-20 px-6 bg-[#F4F4F4] flex flex-col gap-16 pb-[5rem] pt-[10rem]">
        <header className="font-Poppins flex justify-between items-center">
          <h1 className="font-medium font-Poppins text-3xl">
            You may like to view
          </h1>
          <Link className="text-xl font-bold text-[#49BBBD]" to="/courses">
            {" "}
            See all
          </Link>
        </header>
        <div className="courses grid gap-[6.25rem] lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-between w-full ">
          <CoursesCard2 />
          <CoursesCard2 />
          <CoursesCard2 />
        </div>
        <div className="btn flex gap-4 justify-end">
          <button className="flex justify-center items-center rounded-md bg-[#49BBBD]/70 w-[3.125rem] h-[3.125rem] text-white">
            <i className="block fa fa-chevron-left"></i>
          </button>
          <button className="flex justify-center items-center rounded-md bg-[#49BBBD] w-[3.125rem] h-[3.125rem] text-white">
            <i className="block fa fa-chevron-right"></i>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
