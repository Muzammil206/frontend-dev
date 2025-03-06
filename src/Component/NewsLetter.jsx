import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#000] flex flex-col gap-8 md:py-[5rem] py-10 md:px-20 px-6  justify-center items-center">
      <h1 className="md:text-4xl text-base font-medium font-Lato md:w-2/3 text-center text-white">
        Join our Newsletter for latest informations and updates
      </h1>
      <div className="md:bg-white rounded-2xl md:w-[48.2275rem] w-full md:h-20 flex md:flex-row flex-col justify-center items-center md:px-8 md:gap-0 gap-3">
        <input
          type="text"
          className="w-full md:h-full h-11 md:rounded-none rounded-lg md:Pl-0 pl-2 outline-none md:text-2xl text-sm "
          placeholder="Enter your email"
          name=""
          id=""
        />
        <button className="bg-primaryBlue px-[4.1875rem] md:py-4 py-2.5 md:text-2xl text-sm text-white font-Lato font-medium rounded-2xl">
          Subscribe{" "}
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
