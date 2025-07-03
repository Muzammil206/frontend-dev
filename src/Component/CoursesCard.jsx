import React from "react";
import { Link } from "react-router-dom";

const CoursesCard = ({ free, name, title, level, time, date, img }) => {
  return (
    <div className="md:min-w-[22.0625rem] md:w-[22rem] min-w-[11.665rem] w-full flex flex-col border-[#D9D9D9] border-2 rounded-lg">
      <div className="top flex justify-end items-start md:p-6 p-5 bg-[#F1F3F7] h-[12.5rem]">
        <p className="free text-sm font-extrabold p-1 px-3 rounded flex justify-center items-center bg-white shadow-sm">
          {free? "Free" : "Premium"}
        </p>
      </div>
      <div className="md:px-8 px-4 md:py-6 py-4 flex flex-col md:gap-6 gap-2.5">
        <div className="title flex gap-2 items-center">
          <img
            src={img}
            className="md:w-8 md:h-8 w-5 h-5  bg-[#A0B5FF] rounded-full"
          />
            {name}
        </div>
        <h2 className="font-Lexend font-semibold md:text-xl text-[9px]">
          {title}
        </h2>
        <p className="font-Lexend md:text-base text-[9px]">{level}</p>

        <p className="time font-Lexend md:text-base text-[9px]">
          <i className="mr-1 fa fa-clock-o" aria-hidden="true"></i> {time}
        </p>
        <div className="date flex justify-between items-center">
          <p className="font-Lexend md:text-base text-[9px]">{date}</p>
          <Link
            to="/course_details"
            className="md:w-10 md:h-10 w-6 h-6 rounded-lg bg-primaryBlue flex justify-center items-center"
          >
            <i className="text-white fa fa-arrow-right md:text-base text-xs font-[100]" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
