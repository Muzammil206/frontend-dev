import React from "react";
import { Hero } from "../Component/Hero";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";
import { AboutCard } from "../Component/AboutCard";

const AboutPage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <section className="py-20 lg:px-20 md:px-8 px-6 flex flex-col justify-start items-start gap-[4.75rem] w-full">
        <div>
          <h1 className="font-Vietnam font-medium text-4xl">Our Goal</h1>
          <p className="text-[#59595A] pt-4">
            At Hoistflick, our aim is to empower African students and
            professionals with the skills needed to thrive in the digital age
            through interactive online courses, Hands-on workshops and
            community- driven intiatives
          </p>
        </div>
        <div className="flex items-center gap-6">
          <AboutCard
            title={"Provide Practical Skills"}
            txt={
              "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field."
            }
          />
          <AboutCard
            title={"Foster Creative Problem-Solving"}
            txt={
              "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation."
            }
          />
        </div>
        <div className="bg-[#DDE0E4] px-[3.875rem] py-2 rounded-lg flex justify-between items-center md:flex-row flex-col">
          <div className=" py-[4.5rem] bg-[url(/SVGs/aboutbg.svg)] bg-no-repeat bg-contain bg-right flex flex-col gap-5">
            <h1 className="text-4xl font-Vietnam font-semibold">
              Together, let's shape the future of digital innovation
            </h1>
            <p className="font-Vietnam text-[#4C4C4D]">
              Join us on this exciting learning journey and unlock your
              potential in design and development.
            </p>
          </div>
          <button className="px-5 py-3.5 h-[3.125rem] w-[7.5625rem] font-semibold font-Vietnam bg-[#1D1D1D] rounded-lg text-white">
            Join Now
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
