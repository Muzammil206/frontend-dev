import React from "react";
import FooterCard from "./FooterCard";

const Footer = () => {
  const Footerdata = [
    [
      "Navigation",
      "Home",
      "Categories",
      "Brands",
      "About Us",
      "Payment Options",
    ],
    [
      "Customer SUpport",
      "Live Chat",
      "twitter",
      "Facebook",
      "Whatsapp",
      "LinkendIn",
    ],
    [
      "Legal and Compliance",
      "Privacy Policy",
      "Terms of policy",
      "Return Policy",
      "Copyright Information",
    ],
  ];
  return (
    <footer className="py-[6.25rem] lg:px-20 px-[1.25rem] border-t-[1px] border-t-black/5 bg-[#041D41] flex flex-col gap-9 text-white">
      <div className="md:flex grid grid-cols-1 gap-8 justify-between items-start">
        <div className="flex flex-col gap-[1.875rem]">
          <img src="/image/logo.svg" className="mb-1.5" alt="" />
          <div className="flex gap-4">
            <img
              className="p-2 rounded-lg bg-primaryColor w-10 h-10"
              src="/image/twitter.svg"
              alt=""
            />
            <img
              className="p-2 rounded-lg bg-primaryColor w-10 h-10"
              src="/image/linkedin.svg"
              alt=""
            />
            <img
              className="p-2 rounded-lg bg-primaryColor w-10 h-10"
              src="/image/smail.svg"
              alt=""
            />
            <img
              className="p-2 rounded-lg bg-primaryColor w-10 h-10"
              src="/image/facebook.svg"
              alt=""
            />
          </div>
          <p className="text-primaryColor font-medium"></p>
        </div>
        <div className="md:flex justify-between grid grid-cols-2 gap-y-8 md:w-[66%] w-full">
          {Footerdata.map((f) => (
            <FooterCard txt={f} />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-t-black/30 pt-8">
        <p className="text-white">©2022 Hoistflick. All rights reserved</p>
        <div className="flex md:gap-14">
          <p className="text-white">Privacy & Policy</p>
          <p className="text-white">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
