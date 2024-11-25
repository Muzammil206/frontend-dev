import React from "react";
import { Link } from "react-router-dom";

const CoursesCard = ({ free, name, title, level, time, date, link }) => {
  return (
    <div className="md:w-[22.0625rem] w-[18rem] flex flex-col border-[#D9D9D9] border-2 rounded-lg">
      <div className="top flex justify-end items-start md:p-6 p-5 bg-[#F1F3F7] h-[12.5rem]">
        <p className="free text-sm font-extrabold p-1 px-3 rounded flex justify-center items-center bg-white shadow-sm">
          Free
        </p>
      </div>
      <div className="px-8 py-6 flex flex-col gap-6">
        <div className="title flex gap-2 items-center">
          <p className="w-8 h-8 bg-[#A0B5FF] rounded-full"></p>
          <h3 className="font-semibold text-sm font-Lexend">
            Claire Robertson
          </h3>
        </div>
        <h2 className="font-Lexend font-semibold text-xl">
          User-Centric web design: Strategies for better UI/UX
        </h2>
        <p className="font-Lexend">Beginner</p>

        <p className="time font-Lexend">
          <i className="mr-1 fa fa-clock-o" aria-hidden="true"></i> 3 hours, 32
          minutes
        </p>
        <div className="date flex justify-between items-center">
          <p className="font-Lexend">Jan 18, 2024</p>
          <Link to="/course_details" className="w-10 h-10 rounded-lg bg-[#464646] flex justify-center items-center">
            <i className="text-white fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
