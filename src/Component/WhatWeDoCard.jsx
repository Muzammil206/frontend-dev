import React from "react";

const WhatWeDoCard = ({ img, txt, color, desc }) => {
  return (
    <div className="px-6 md:py-5 py-2.5 bg-white md:w-[29.125rem] w-[10.3125rem] md:h-[17.0625rem] h-[101px] flex flex-col md:gap-6 gap-2">
      <div className="each bg-white rounded-lg flex md:gap-5 gap-1 items-center ">
        <div
          className={`img flex justify-center items-center md:w-[3.75rem] w-5 md:h-[3.75rem] h-5 rounded-2xl md:p-0 p-1.5 ${color}`}
        >
          <img src={img} alt="" />
        </div>
        <p className="font-Nunito md:text-2xl text-[8.6px] font-bold">{txt}</p>
      </div>
      <p className="desc font-Nunito md:text-xl text-[6.6px] ">{desc}</p>
    </div>
  );
};

export default WhatWeDoCard;
