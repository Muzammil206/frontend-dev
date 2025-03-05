import React from "react";
import SECTION from "../Elements/SECTION";
import H1 from "../Elements/H1";
import TestimonialCard from "./TestimonialCard";
import NewsLetter from "./NewsLetter";

const Testimonials = () => {
  const Testimonials = [
    {
      name: "Sandra",
      img: "/SVGs/sandra.svg",
      desc: "“From showcasing real-life experiences to leveraging the influential power of social proof, testimonials can dramatically transform how potential customers perceive your products or services”",
      occupation: "Student",
    },
    {
      name: "Sandra",
      img: "/SVGs/sandra.svg",
      desc: "“From showcasing real-life experiences to leveraging the influential power of social proof, testimonials can dramatically transform how potential customers perceive your products or services”",
      occupation: "Student",
    },
    {
      name: "Sandra",
      img: "/SVGs/sandra.svg",
      desc: "“From showcasing real-life experiences to leveraging the influential power of social proof, testimonials can dramatically transform how potential customers perceive your products or services”",
      occupation: "Student",
    },
    {
      name: "Sandra",
      img: "/SVGs/sandra.svg",
      desc: "“From showcasing real-life experiences to leveraging the influential power of social proof, testimonials can dramatically transform how potential customers perceive your products or services”",
      occupation: "Student",
    },
  ];
  return (
    <div className="bg-[#F8F8F8]">
      <SECTION>
        <H1 otherStyle={"font-Rubik text-[#486284]"}>TESTIMONIALS</H1>
        <p className="text-xl">See what users are saying about us</p>
        <div className="flex gap-12  flex-wrap items-center justify-center">
          {Testimonials.map((test, i) => (
            <TestimonialCard key={i} {...test} />
          ))}
        </div>
      </SECTION>
      <div className="p-20 pt-10 bg-white flex justify-between">
        <div className="flex">
          <img src="/SVGs/studentimg.svg" alt="" />
          <div className="flex flex-col">
            <h1 className="font-bold text-[50px]">2500+</h1>
            <p className="ml-4 text-[27px] border-t-[2px] border-t-primaryBlue">
              Students
            </p>
          </div>
        </div>
        <div className="flex">
          <img src="/SVGs/studentimg.svg" alt="" />
          <div className="flex flex-col">
            <h1 className="font-bold text-[50px]">2500+</h1>
            <p className="ml-4 text-[27px] border-t-[2px] border-t-primaryBlue">
              Students
            </p>
          </div>
        </div>
        <div className="flex">
          <img src="/SVGs/studentimg.svg" alt="" />
          <div className="flex flex-col">
            <h1 className="font-bold text-[50px]">2500+</h1>
            <p className="ml-4 text-[27px] border-t-[2px] border-t-primaryBlue">
              Students
            </p>
          </div>
        </div>
      </div>
      <SECTION otherStyle={"bg-[#E0F7CD]"}>
        <div className="grid grid-cols-2 md:gap-x-[6.25rem] gap-20 items-center">
          <div className="flex md:flex-col flex-col gap-8 items-start text-start">
            <H1>Share your expertise and inspire others</H1>
            <p className="text-[1.125rem] font-Inter font-[400]">
              Be a part of community that empowers learners, celebrates teaching
              and Transform lives through teaching. Join us today!
            </p>
            <button className="text-white rounded-xl px-[1rem] py-[12px] bg-primaryBlue font-Roboto w-max mt-2">
              Become an instructor
            </button>
          </div>
          <img src="/SVGs/Events.svg" alt="" />
        </div>
      </SECTION>
      <SECTION otherStyle={"justify-center items-center"}>
        <div
          className="w-[70%] flex justify-center items-center flex-col text-center gap-3.5
        "
        >
          <img src="/SVGs/coupon.svg" alt="" />
          <H1 otherStyle={"text-3xl"}>
            Get Exclusive Relief Payments for Your Courses
          </H1>
          <p className="text-xl">
            We believe learning should be accessible to everyone! Use special
            coupons and relief payments to get discounts on courses, workshops,
            and certifications.
          </p>
          <button className="text-white rounded-xl px-[3rem] py-[12px] bg-primaryBlue font-Roboto w-max mt-2">
            Apply for a coupon
          </button>
        </div>
      </SECTION>
      <NewsLetter />
    </div>
  );
};

export default Testimonials;
