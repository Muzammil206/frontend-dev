import React from 'react'
import Nav from '../Component/Nav'
import Loginimg from '../assets/login.png'
import { Link } from 'react-router-dom'


const Forgetpassword = () => {
  return (
    <div className='h-screen overflow-hidden'>
      <Nav />
      <section className='flex items-center gap-10 mt-[5.2406rem] p-8 h-full'>
        <div className="bg-[#f1f1f3] w-3/6 flex items-center justify-center h-full"><img className="" src={Loginimg} alt="" /></div>
        <div className="w-3/6 px-8 pb-8">
          <div className="flex items-center justify-center gap-4 flex-col">
            <p className="text-[32px] font-[500]">Forgot Password?</p>
            <p className="text-[18px] mb-10 text-center">Enter your email address to get the <br /> password reset link.</p>
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
              <div className="flex items-center justify-center">
                <button className="bg-[#464646] rounded-lg w-full text-white py-2" type="submit">Password Reset</button>
              </div>
              <p className='text-center'><Link to='/login'>Back to login</Link></p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Forgetpassword
