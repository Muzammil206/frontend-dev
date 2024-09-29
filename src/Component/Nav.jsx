import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-around">
      <div className="logo flex items-center">
        <img src="/SVGs/logo.svg" alt="" />
        <p className="text-[#1D1D1D]">HoistFlick</p>
      </div>
      <div className="flex gap-8 items-center">
        <p>Home</p>
        <p>Solutions</p>
        <p>Courses</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>

      <div className="right flex items-center gap-8">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Nav;
