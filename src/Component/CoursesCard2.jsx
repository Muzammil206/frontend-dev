import React from "react";

const CoursesCard2 = ({ free, name, title, level, time, date, link }) => {
  return (
    <div className="md:w-[22.0625rem] w-[18rem] flex flex-col shadow-lg bg-white rounded-lg">
      <div className="px-6 pt-4 flex flex-col gap-6">
        <div className="top flex justify-center items-center rounded-lg shadow-sm bg-[#D9D9D9] h-[12.5rem]">
          <img src="/SVGs/picture.svg" alt="" />
        </div>
        <div className="design flex gap-6 items-center w-full">
          <img src="/SVGs/design.svg" alt="" />
          <p className="font-Poppins">Design</p>
          <span className="flex-grow-1"></span>
          <p className="time font-Poppins">
            <i className="mr-1 fa fa-clock-o" aria-hidden="true"></i>3 Months
          </p>
        </div>
      </div>
      <div className="px-8 py-6 flex flex-col gap-6">
        <h2 className="font-Poppins font-semibold text-xl">
          introduction to Product design
        </h2>
        <p className="font-Poppins text-black/70">
          Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod
          tempor
        </p>

        <div className="flex justify-between items-center">
          <div className="date flex gap-4 items-center">
            <button className="p-2 px-3 shadow-lg font-Inter font-semibold text-[#490A54] border-[1px] border-black/30 text-3xl bg-white rounded-full flex justify-center items-center">
              A
            </button>
            <p className="font-Poppins">Lina</p>
          </div>
          <h1 className="font-Poppins font-bold text-2xl text-[#49BBBD]">
            $80
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard2;
