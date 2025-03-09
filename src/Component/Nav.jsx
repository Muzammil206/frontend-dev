import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const [hamBurger, setHamBurger] = useState(false);

  return (
    <nav className="lg:px-20 px-6 flex fixed left-0 w-full top-0 justify-between lg:h-[5.2406rem] h-[4.75rem] bg-[#EFEFEF] border-b-[#48628429] border-b-[1px] z-10">
      <div className="logo flex items-center gap-2 font-bold">
        <img className="" src="/SVGs/logo.svg" alt="" />
      </div>
      <div
        className={`${
          hamBurger ? "top-0 right-0" : "top-0 md:-right-0 -right-[70vw]"
        } flex bg-[#EFEFEF] md:w-max w-[70vw] md:relative fixed md:h-full h-screen md:flex-row flex-col md:pt-0 pt-28 gap-8 items-center`}
      >
        <Link
          onClick={() => setHamBurger(!hamBurger)}
          to="/"
          className="p-[1rem] hover:font-bold text-titleColor hover:text-textHover"
        >
          Home
        </Link>
        <Link
          onClick={() => setHamBurger(!hamBurger)}
          to={"/courses"}
          className="p-[1rem] hover:font-bold text-titleColor hover:text-textHover"
        >
          Courses
        </Link>
        <Link
          onClick={() => setHamBurger(!hamBurger)}
          to="/programs"
          className="p-[1rem] hover:font-bold text-titleColor hover:text-textHover"
        >
          Programs
        </Link>
        <Link
          onClick={() => setHamBurger(!hamBurger)}
          to="/resources"
          className="p-[1rem] hover:font-bold text-titleColor hover:text-textHover"
        >
          Resources
        </Link>
        <Link
          onClick={() => setHamBurger(!hamBurger)}
          to={"/about"}
          className="p-[1rem] hover:font-bold text-titleColor hover:text-textHover"
        >
          About Us
        </Link>
        <Link
          onClick={() => setHamBurger(!hamBurger)}
          to={"/contact-us"}
          className="p-[1rem] hover:font-bold text-titleColor hover:text-textHover"
        >
          Contact Us
        </Link>
        <div className="right md:hidden flex flex-col gap-8">
          <Link
            onClick={() => setHamBurger(!hamBurger)}
            to="/login"
            className="border-[#486284] border-[1px] px-[1rem] py-[0.5rem] rounded-[5px] "
          >
            Login
          </Link>
          <Link
            onClick={() => setHamBurger(!hamBurger)}
            to={"/register"}
            className="px-[1rem] py-[0.5rem] rounded-[5px] bg-[#486284] text-white flex justify-center items-center"
          >
            Register
          </Link>
        </div>
      </div>

      <div className="right md:flex hidden items-center gap-8">
        <Link
          to="/login"
          className="border-[#486284] border-[1px] px-[1rem] py-[0.5rem] rounded-[5px] "
        >
          Login
        </Link>
        <Link
          to={"/register"}
          className="px-[1rem] py-[0.5rem] rounded-[5px] bg-[#486284] text-white flex justify-center items-center"
        >
          Register
        </Link>
      </div>

      <button
        onClick={() => setHamBurger(!hamBurger)}
        className={`${hamBurger ? "ActiveBurger" : ""} hamburger `}
      >
        <div className="bg-black border-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
      </button>
      <div
        onClick={() => setHamBurger(!hamBurger)}
        className={`overlay w-[30vw] h-screen md:hidden bg-black/5 backdrop-blur-[10px]  fixed ${
          hamBurger ? "left-0 top-0" : "left-[100vw]"
        } `}
      ></div>
    </nav>
  );
};

export default Nav;
