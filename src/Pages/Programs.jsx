import React from "react";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";
import { Hero } from "../Component/Hero";
import H1 from "../Elements/H1";
import SolutionComponent from "../Component/SolutionComponent";
import NewsLetter from "../Component/NewsLetter";
import Whatwedovid from '../assets/whatwedovid.png'
import { Link } from "react-router-dom";

const Programs = () => {
  // bg-[#F1F1F3]
  const SolutionArr = [
    {
      defaultOrder: true,
      background: "bg-[#fff]",
      txt: "Learn from anywhere, at any time and unlock new opportunities with our flexible and affordable online courses. From beginner-friendly to advanced specialized skills, our courses cover a wide range of in-demand tech skills. Explore our courses today!",
      title: "Online courses",
    },
    {
      defaultOrder: false,
      background: "bg-[#F1F1F3]",
      txt: "Need a helping hand on your project? Our freelance services have got you covered from product design to web development, our skilled professionals delivers high quality results. Get in touch with us today and let’s bring your ideas to life!",
      title: "Freelance service",
    },
    {
      defaultOrder: true,
      background: "bg-[#fff]",
      txt: "Transform your workforce with our tailored training programs. We help organizations develop the skills, knowledge and mindset needed to thrive in today’s fast-paced business landscape. Let’’s work together to elevate your team’s perfomance and drive your business to success. ",
      title: "Corporate trainings",
    },
    {
      defaultOrder: false,
      background: "bg-[#F1F1F3]",
      txt: "Learn by doing with our interactive, Hands-on workshops! Our live training sessions are designed to get you immersed in the skills you need. with expert guidance and real- world exercises, you will gain practical experience. Join us today at Hoistflick!",
      title: "Hands-on Workshop",
    },
  ];
  return (
    <div>
      <Nav />
      <Hero />
      <main className="flex flex-col bg-white gap-32 mt-12">
        <H1 otherStyle={"w-max m-auto"}>What we do</H1>
        <div className="bg-[#EBFFDB] flex flex-col items-center justify-center p-20">
          <div className="w-full"><img className="w-full" src={Whatwedovid} alt="" /></div>
          <div className={`col-span-3 flex gap-2.5 md:gap-4 mt-14 flex-wrap md:flex-nowrap`}>
            <div className="w-full md:w-3/6 leading-[55px]">
              <i className="text-[16px] md:text-[19px]">“I learned so much from this workshop! The interactive sessions were a game-changer.”</i>
              <p className="font-[600] text-[20px]">- Sarah Smith</p>
            </div>
            <div className="w-full md:w-4/6">
              <h1 className="font-Roboto font-semibold text-4xl text-primaryColor">Events</h1>
              <p className="text-[17px] sm:text-[20px] lg:text-[22px] font-Inter leading-[50px] font-normal mb-10">
              Join interactive workshops, webinars, and bootcamps designed to accelerate your growth and connect you with industry experts. We create impactful learning experiences for all skill levels.
              </p>
              <Link className="bg-transparent px-10 py-5 rounded-md font-Inter text-[22px] text-[#0056D2] border-[1px] border-[#0056D2] w-max">
                View Events
              </Link>
            </div>
          </div>
        </div>
        <div>
          {SolutionArr.map((solution, i) => (
            <SolutionComponent key={i} {...solution} />
          ))}
        </div>
        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
