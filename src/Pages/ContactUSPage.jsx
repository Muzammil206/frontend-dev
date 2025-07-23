import React from "react";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";
import H1 from "../Elements/H1";

const ContactUSPage = () => {
  return (
    <div>
      <Nav />
      <main className="md:px-20 px-6 bg-[#fff] flex flex-col pb-[5rem] pt-[10rem] gap-8">
        <H1 otherStyle={" m-auto"}>Contact Us</H1>
        <header className="flex flex-col gap-4 font-Inter pb-5">
          <h2 className="text-4xl font-normal">Get In Touch</h2>
          <p className="text-2xl text-[#8C94A3]">
            Drop a message for us, we will be glad to respond to you.
          </p>
        </header>
        <form
          className="flex flex-col gap-7 font-Inter pb-20"
          action=""
          method="post"
        >
          <div className="md:grid grid-cols-2 gap-7">
            <div className="flex flex-col md:text-2xl gap-2.5">
              <label htmlFor="">First Name</label>
              <input
                className="h-20 outline-none pl-7 border-[#E9EAF0] border-2"
                type="text"
                placeholder="First name..."
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col md:text-2xl gap-2.5">
              <label htmlFor="">Last Name</label>
              <input
                className="h-20 outline-none pl-7 border-[#E9EAF0] border-2"
                type="text"
                placeholder="Last name..."
                name=""
                id=""
              />
            </div>
          </div>
          <div className="flex flex-col md:text-2xl gap-2.5">
            <label htmlFor="">Email</label>
            <input
              className="h-20 outline-none pl-7 border-[#E9EAF0] border-2"
              type="text"
              placeholder="Email Address..."
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col md:text-2xl gap-2.5">
            <label htmlFor="">Subject</label>
            <input
              className="h-20 outline-none pl-7 border-[#E9EAF0] border-2"
              type="text"
              placeholder="Message Subject..."
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col md:text-2xl gap-2.5">
            <label htmlFor="">Message</label>
            <textarea
              className="h-[11.75rem] outline-none pl-7 border-[#E9EAF0] border-2"
              type="text"
              placeholder="Type your message here..."
              name=""
              id=""
            />
          </div>
          <button className="w-max mt-[3.125rem] py-5 px-10 bg-[#49BBBD] text-white text-2xl flex items-center gap-3.5 font-semibold">
            Send Message
            <i className="fa fa-paper-plane-o"></i>
          </button>
        </form>
      </main>
      <section className="md:px-20 px-6 border-t-[#48628480]/50 border-t-[1px] pt-16 pb-32 flex flex-col gap-12">
        <h2 className="text-4xl">Or Contact us on</h2>
        <div className="md:w-[45.25rem] text-xl">
          <div className="py-10 border-y-[#E9EAF0] border-y-[2px] flex items-start gap-16">
            <h3 className="text-[#49BBBD] font-medium">PHONE NUMBER</h3>
            <div className="flex flex-col gap-2.5">
              <p>091-345-342-3423</p>
              <p>091-345-342-3423</p>
            </div>
          </div>
          <div className="py-10 border-y-[#E9EAF0] border-y-[2px] flex items-start gap-16">
            <h3 className="text-[#49BBBD] font-medium">Email address</h3>
            <div className="flex flex-col gap-2.5">
              <p>help.hoistflick@gmail.com</p>
              <p>career.hoistflick@gamil.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUSPage;
