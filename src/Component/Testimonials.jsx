import React from "react";
import SECTION from "../Elements/SECTION";
import H1 from "../Elements/H1";
import TestimonialCard from "./TestimonialCard";
import NewsLetter from "./NewsLetter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

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
  const settings = {
    dots: true, // enables dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // enables partial next slide visibility
    centerPadding: "10%", // adjust this for the partial slide effect
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "portfolio-carousel",
  };
  return (
    <div className="bg-[#F8F8F8]">
      <SECTION>
        <H1 otherStyle={"font-Rubik text-[#486284]"}>TESTIMONIALS</H1>
        <p className="text-xl">See what users are saying about us</p>
        <div className="flex md:gap-12 gap-3  flex-wrap items-center justify-center">
          {Testimonials.map((test, i) => (
            <TestimonialCard key={i} {...test} />
          ))}
        </div>
        {/* <div className="flex flex-col gap-[4.1875rem] h-[35rem] justify-start">
          <Slider {...settings}>
            {Testimonials.map((test, i) => (
              <TestimonialCard key={i} {...test} />
            ))}
          </Slider>
        </div> */}
      </SECTION>
      <div className="md:p-20 p-10 pt-10 bg-white flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-0 gap-5">
        <div className="flex">
          <img
            className="md:w-max md:h-max h-[38px] w-[50px]"
            src="/SVGs/studentimg.svg"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="font-bold md:text-[50px] text-[23px]">2500+</h1>
            <p className="md:ml-4 ml-2 pt-1 md:text-[27px] text-sm border-t-[2px] border-t-primaryBlue">
              Students
            </p>
          </div>
        </div>
        <div className="flex">
          <img
            className="md:w-max md:h-max h-[38px] w-[50px]"
            src="/SVGs/studentimg.svg"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="font-bold md:text-[50px] text-[23px]">2500+</h1>
            <p className="md:ml-4 ml-2 pt-1 md:text-[27px] text-sm border-t-[2px] border-t-primaryBlue">
              Students
            </p>
          </div>
        </div>
        <div className="flex">
          <img
            className="md:w-max md:h-max h-[38px] w-[50px]"
            src="/SVGs/studentimg.svg"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="font-bold md:text-[50px] text-[23px]">2500+</h1>
            <p className="md:ml-4 ml-2 pt-1 md:text-[27px] text-sm border-t-[2px] border-t-primaryBlue">
              Students
            </p>
          </div>
        </div>
      </div>
      <SECTION otherStyle={"bg-[#E0F7CD]"}>
        <div className="md:grid grid-cols-2 flex flex-col-reverse md:gap-x-[6.25rem] md:gap-20 gap-5 items-center ">
          <div className="flex md:flex-col flex-col md:gap-8 gap-3 items-start text-start">
            <H1 otherStyle={"md:text-start text-center"}>
              Share your expertise and inspire others
            </H1>
            <p className="md:text-[1.125rem] text-[#1A202C] md:text-start text-center font-Inter font-[400]">
              Be a part of community that empowers learners, celebrates teaching
              and Transform lives through teaching. Join us today!
            </p>
            <button className="text-white rounded-xl px-[1rem] py-[12px] bg-primaryBlue font-Roboto w-max md:m-0 m-auto md:mt-2 mt-4">
              Become an instructor
            </button>
          </div>
          <img src="/SVGs/Events.svg" alt="" />
        </div>
      </SECTION>
      <SECTION otherStyle={"justify-center items-center"}>
        <div
          className="md:w-[70%] flex justify-center items-center flex-col text-center md:gap-3.5 gap-2
        "
        >
          <img src="/SVGs/coupon.svg" alt="" />
          <H1 otherStyle={"text-base"}>
            Get Exclusive Relief Payments for Your Courses
          </H1>
          <p className="md:text-xl text-[9px]">
            We believe learning should be accessible to everyone! Use special
            coupons and relief payments to get discounts on courses, workshops,
            and certifications.
          </p>
          <button className="text-white rounded-xl md:px-[3rem] px-6 md:text-base text-sm py-[12px] bg-primaryBlue font-Roboto w-max mt-2">
            Apply for a coupon
          </button>
        </div>
      </SECTION>
      <NewsLetter />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="forward md:w-[65px] md:h-[65px] h-[25px] w-[25px] bg-primaryYellow rounded-full flex justify-center items-center absolute md:right-[-45px] md:bottom-[-145px] right-[-5px] bottom-[-90px] transform -translate-y-1/2"
      onClick={onClick}
    >
      <i className="text-white md:text-2xl text-xs font-bold fa fa-chevron-right"></i>
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="backward md:w-[65px] md:h-[65px] w-[25px] h-[25px] bg-primaryYellow rounded-full flex justify-center items-center absolute md:left-[-45px] left-[-5px] md:bottom-[-145px] bottom-[-90px] transform -translate-y-1/2"
      onClick={onClick}
    >
      <i className="text-white md:text-2xl text-xs font-bold fa fa-chevron-left"></i>
    </button>
  );
};

export default Testimonials;
