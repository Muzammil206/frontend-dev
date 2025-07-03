import React from "react";
import FooterCard from "./FooterCard";
import { Link } from "react-router-dom";
import H1 from "../Elements/H1";


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
    <div>
      <footer className="py-[6.25rem] lg:px-20 px-[1.25rem] border-t-[1px] border-t-black/5 bg-[#041D41] md:flex hidden flex-col gap-9 text-white">
        <div className="md:flex grid grid-cols-1 gap-8 justify-between items-start">
          <div className="flex flex-col gap-5 justify-start">
            <img src="/SVGs/awibi.svg" className="mb-1.5 w-24 h-24" alt="awibi-logo" />

            <p className="w-3/4">
              Our vision is to empower African students and professionals with
              the right skills to thrive in this digital age .
            </p>
            <div className="flex flex-col gap-[1.875rem]">
              
              <div className="flex gap-5">
                <img className="w-12 h-12" src="/SVGs/facebook.svg" alt="" />
                <img className="w-12 h-12" src="/SVGs/x.svg" alt="" />
                <img className="w-12 h-12" src="/SVGs/insta.svg" alt="" />
                <img className="w-12 h-12" src="/SVGs/insta.svg" alt="" />
              </div>
            </div>
            <p className="text-primaryColor font-medium"></p>
          </div>
          <div className="md:flex justify-between grid grid-cols-2 gap-y-8 md:w-[66%] w-full">
            {Footerdata.map((f, i) => (
              <FooterCard key={i} txt={f} />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center border-t-[1px] border-t-black/30 pt-8">
          <p className="text-white">©2025 Hoistflick. All rights reserved</p>
          <div className="flex md:gap-14">
            <p className="text-white">Privacy & Policy</p>
            <p className="text-white">Terms & Condition</p>
          </div>
        </div>
      </footer>

      <footer className="px-6 py-10 md:hidden bg-[#041D41] flex flex-col gap-8">
        <div className="flex flex-col gap-7 text-base justify-center items-center text-white">
          <Link>Products</Link>
          <Link>About us</Link>
          <Link>Resources</Link>
          <Link>Contact us</Link>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <img className="w-9 h-9" src="/SVGs/facebook.svg" alt="" />
          <img className="w-9 h-9" src="/SVGs/x.svg" alt="" />
          <img className="w-9 h-9" src="/SVGs/insta.svg" alt="" />
          <img className="w-9 h-9" src="/SVGs/insta.svg" alt="" />
        </div>

        <div className="text-white text-center flex flex-col gap-2">
          <p>©2025 Awibi Institute. All rights reserved</p>
          <p>Privacy & Terms</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
