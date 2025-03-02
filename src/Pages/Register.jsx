import React, { useState } from 'react'
import Nav from '../Component/Nav'
import { Link } from 'react-router-dom'
import './login/login.css'
import Loginimg from '../assets/login.png'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Google from '../assets/google.png'

const Register = () => {
    const [ showPassword, setShowPassword ] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

  return (
    <div>
        <Nav />
        <section className="flex justify-center flex-wrap md:flex-nowrap gap-10 mt-[5.2406rem] pt-8 sm:p-8">
        <div className="w-3/6 hidden md:flex items-center justify-center"><img className="" src={Loginimg} alt="" /></div>
        <div className="w-full sm:w-5/6 md:w-3/6 px-8 pb-8">
          <div className="flex items-center justify-center gap-4 flex-col">
            <p className="text-[20px] sm:text-[32px] font-[500] text-center">Welcome to Hoistlfick!</p>
            <p className="text-[20px] sm:text-[28px] mb-10">Create an account</p>
          </div>
          <form action="">
            <div className="flex flex-col gap-6">
              <div>
                <label className="text-[18px] font-Nunito font-[500]" htmlFor="">Name</label> <br />
                <input 
                placeholder="Enter your full name"
                className="h-[48px] p-4 border-[1px] border-[#D0D5DD] outline-none w-full rounded-lg"
                type="text" />
              </div>
              <div>
                <label className="text-[18px] font-Nunito font-[500]" htmlFor="">Email Address</label> <br />
                <input 
                placeholder="Enter your email"
                className="h-[48px] p-4 border-[1px] border-[#D0D5DD] outline-none w-full rounded-lg"
                type="text" />
              </div>
              <div className='relative'>
                <label className="text-[18px] font-Nunito font-[500]" htmlFor="">Password</label> <br />
                <input 
                placeholder="Enter your email"
                className="h-[48px] p-4 border-[1px] border-[#D0D5DD] outline-none w-full rounded-lg"
                type={showPassword ? 'text' : 'password'} />
                <span>{showPassword ? <IoEyeOutline onClick={handleShowPassword} className='absolute bottom-2 right-4 text-[1.4rem] text-[#999DA3] cursor-pointer'/>:
                    <IoEyeOffOutline onClick={handleShowPassword} className='absolute bottom-2 right-4 text-[1.4rem] text-[#999DA3] cursor-pointer'/>
                }</span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full my-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span className='text-[9px] sm:text-[12px]'>Remember me</span>
              </div>
              <Link 
              to='/forgetpassword'
              className='text-[9px] sm:text-[12px]' >Forget Password ?</Link>
            </div>
            <p className='text-[13px] text-[#191D23] mb-4'>By continuing, you agree to our <span className='text-[#F2B33D]'>terms of service</span>.</p>
            <div className="flex items-center justify-center">
              <button className="bg-[#0056D2] h-[48px] rounded-lg w-full text-white py-2" type="submit">Sign up</button>
            </div>
          </form>
          <div className="flex items-center justify-center mt-4"><p className="with relative p-2 bg-[#F4F5F7] text-[14px] text-[#999DA3] font-Nunito">Or login with</p></div>
          <div className="flex items-center justify-center mt-2">
            <button className="text-[#4B5768] flex items-center gap-2 bg-[#E4E7EB] py-2 px-6 rounded-md">
            <img src={Google} alt="" />
            Continue with Google
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
