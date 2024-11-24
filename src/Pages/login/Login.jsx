import React, { useState } from "react";
import Nav from "../../Component/Nav";
import Footer from "../../Component/Footer";
import Loginimg from '../../assets/login.png'
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Google from '../../assets/google.png'
import './login.css'
import { faQ } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false)
  const handleShowPassword = () =>{
    setShowPassword(!showPassword)
  }
  
  return (
    <div className="overflow-hidden">
      <Nav />
      <section className="flex gap-10 mt-[5.2406rem] p-8">
        <div className="bg-[#f1f1f3] w-3/6 flex items-center justify-center"><img className="" src={Loginimg} alt="" /></div>
        <div className="w-3/6 px-8 pb-8">
          <div className="flex items-center justify-center gap-4 flex-col">
            <p className="text-[32px] font-[500]">Welcome to Hoistlfick!</p>
            <p className="text-[28px] mb-10">Login to account</p>
          </div>
          <form action="">
            <div className="flex flex-col gap-6">
              <div>
                <label className="text-[18px] font-Nunito font-[500]" htmlFor="">Email Address</label> <br />
                <input 
                placeholder="Enter your email"
                className="p-[.4rem] border-[1px] border-[#D0D5DD] outline-none w-full rounded-lg"
                type="text" />
              </div>
              <div className="relative">
                <label className="text-[18px] font-Nunito font-[500]" htmlFor="">Password</label> <br />
                <input 
                placeholder="Enter your email"
                className="p-[.4rem] border-[1px] border-[#D0D5DD] outline-none w-full rounded-lg"
                type={showPassword ? 'text': 'password'} />
                <span className="">
                  {showPassword ? <IoEyeOutline onClick={handleShowPassword} className="absolute right-4 bottom-2 text-[1.4rem] text-[#999DA3] cursor-pointer"/>:
                  <IoEyeOffOutline onClick={handleShowPassword} className="absolute right-4 bottom-2 text-[1.4rem] text-[#999DA3] cursor-pointer"/>
                  }
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between my-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <Link>Forget Password ?</Link>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-[#464646] rounded-lg w-full text-white py-2" type="submit">Login</button>
            </div>
          </form>
          <div className="flex items-center justify-center mt-4"><p className="with relative p-2 bg-[#F4F5F7] text-[14px] text-[#999DA3] font-Nunito">Or login with</p></div>
          <div className="flex items-center justify-center mt-4">
            <button className="text-[#4B5768] flex items-center gap-2 bg-[#E4E7EB] py-2 px-6 rounded-md">
            <img src={Google} alt="" />
            Continue with Google
            </button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
