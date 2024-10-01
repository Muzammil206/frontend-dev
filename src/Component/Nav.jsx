import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="lg:px-20 md:px-8 px-6 flex fixed w-screen top-0 justify-between lg:h-[5.2406rem] md:h-[4.75rem] bg-[#EFEFEF] border-b-[#48628429] border-b-[1px]">
      <div className="logo flex items-center gap-2 font-bold">
        <img
          className="w-[3.625rem] h-[3.1875rem]"
          src="/SVGs/logo.svg"
          alt=""
        />
        <p className="text-[#1D1D1D] text-[1.625rem] font-Jakarta">
          HoistFlick
        </p>
      </div>
      <div className="flex gap-8 items-center">
        <p className="p-[1rem] hover:font-bold text-titleColor hover:text-textHover">
          Home
        </p>
        <p className="p-[1rem] hover:font-bold text-titleColor hover:text-textHover">
          Solutions
        </p>
        <p className="p-[1rem] hover:font-bold text-titleColor hover:text-textHover">
          Courses
        </p>
        <p className="p-[1rem] hover:font-bold text-titleColor hover:text-textHover">
          About Us
        </p>
        <p className="p-[1rem] hover:font-bold text-titleColor hover:text-textHover">
          Contact Us
        </p>
      </div>

      <div className="right flex items-center gap-8">
        <Link
          to="/login"
          className="border-[#486284] border-[1px] px-[1rem] py-[0.5rem] rounded-[5px] "
        >
          Login
        </Link>
        <button className="px-[1rem] py-[0.5rem] rounded-[5px] bg-[#486284] text-white flex justify-center items-center">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Nav;
