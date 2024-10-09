import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#555555] flex flex-col gap-8 py-[5rem] justify-center items-center">
      <h1 className="text-4xl font-medium font-Lato w-2/3 text-center text-white">
        Join our Newsletter for latest informations and updates
      </h1>
      <div className="bg-white rounded-2xl md:w-[48.2275rem] h-20 flex justify-center items-center md:px-8 px-6">
        <input type="text" className="w-full h-full outline-none text-2xl" placeholder="Enter your email" name="" id="" />
        <button className="bg-[#555555] px-[4.1875rem] py-4 text-2xl text-white font-Lato font-medium rounded-2xl">Subscribe </button>
      </div>
    </div>
  );
};

export default NewsLetter;
