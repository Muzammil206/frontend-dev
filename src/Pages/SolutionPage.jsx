import React from "react";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";
import { Hero } from "../Component/Hero";
import H1 from "../Elements/H1";
import SolutionComponent from "../Component/SolutionComponent";
import NewsLetter from "../Component/NewsLetter";

const SolutionPage = () => {
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
      <main className="flex flex-col pb-40 pt-20 bg-white gap-32">
        <H1 otherStyle={"w-max m-auto"}>What we do</H1>
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

export default SolutionPage;
