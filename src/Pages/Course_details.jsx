import React from "react";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";
import H1 from "../Elements/H1";
import PriceInfo from "../Component/PriceInfo";
import CoursesCard2 from "../Component/CoursesCard2";
import { Link } from "react-router-dom";

const Course_details = () => {
  return (
    <div>
      <Nav />
      <section className="px-20 bg-[#F4F4F4] flex  flex-col justify-center items-center pb-[5rem] pt-[10rem] gap-16">
        <H1>Introduction to Ui/Ux Design</H1>
        <div className="relative w-max pt-[4rem]">
          <video
            className=" shadow-lg w-4/5 m-auto h-[42.75rem] rounded-lg"
            controls
          >
            <source src="..Videos/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <PriceInfo />
      </section>

      <section className="px-20 bg-[#F4F4F4] flex  flex-col pb-[5rem] pt-[10rem]">
        <div className="px-20 py-24 shadow-lg rounded-3xl bg-[#FDFAFA] flex flex-col gap-11">
          <header className="flex flex-col gap-7 ">
            <h1 className="text-[#156060] text-3xl font-bold">Description</h1>
            <p className="text-[#59595A] font-Vietnam">
              Welcome to our UI/UX Design course! This comprehensive program
              will equip you with the knowledge and skills to create exceptional
              user interfaces (UI) and enhance user experiences (UX). Dive into
              the world of design thinking, wireframing, prototyping, and
              usability testing. Below is an overview of the curriculum
            </p>
          </header>
          <div className="Lessons flex flex-col gap-6">
            <h1 className="text-[#156060] text-3xl font-bold">Lessons</h1>
            <aside className="pl-10 flex flex-col gap-11">
              <div className="each flex flex-col gap-5">
                <div className="text-xl flex gap-6 font-body">
                  <h1 className="text-black">Lesson 1:</h1>
                  <p className="text-[#156060]">
                    Understanding UI/UX design principles
                  </p>
                </div>
                <p className="text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  quos beatae harum esse consequuntur, iste, voluptatum minima
                  incidunt laboriosam quaerat saepe labore quasi temporibus
                  nostrum numquam nobis non velit molestias.
                </p>
              </div>
              <div className="each flex flex-col gap-5">
                <div className="text-xl flex gap-6 font-body">
                  <h1 className="text-black">Lesson 2:</h1>
                  <p className="text-[#156060]">
                    Understanding UI/UX design principles
                  </p>
                </div>
                <p className="text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  quos beatae harum esse consequuntur, iste, voluptatum minima
                  incidunt laboriosam quaerat saepe labore quasi temporibus
                  nostrum numquam nobis non velit molestias.
                </p>
              </div>
              <div className="each flex flex-col gap-5">
                <div className="text-xl flex gap-6 font-body">
                  <h1 className="text-black">Lesson 2:</h1>
                  <p className="text-[#156060]">
                    Understanding UI/UX design principles
                  </p>
                </div>
                <p className="text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  quos beatae harum esse consequuntur, iste, voluptatum minima
                  incidunt laboriosam quaerat saepe labore quasi temporibus
                  nostrum numquam nobis non velit molestias.
                </p>
              </div>
              <button className="text-white bg-black font-bold text-4xl mt-10 w-max px-14 py-5 m-auto">
                Buy Now
              </button>
            </aside>
          </div>
        </div>
      </section>
      <section className="lg:px-20 px-6 bg-[#F4F4F4] flex flex-col gap-16 pb-[5rem] pt-[10rem]">
        <header className="font-Poppins flex justify-between items-center">
          <h1 className="font-medium text-3xl">Related courses</h1>
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
      </section>
      <Footer />
    </div>
  );
};

export default Course_details;
