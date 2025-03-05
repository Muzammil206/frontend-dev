import React from "react";

const WhatWeDoCard = ({ img, txt, color, desc }) => {
  return (
    <div className="md:px-6 md:py-5 bg-white md:w-[29.125rem] md:h-[17.0625rem] flex flex-col gap-6">
      <div className="each bg-white rounded-lg flex gap-5 items-center ">
        <div
          className={`img flex justify-center items-center w-[3.75rem] h-[3.75rem] rounded-2xl ${color}`}
        >
          <img src={img} alt="" />
        </div>
        <p className="font-Nunito text-2xl font-bold">{txt}</p>
      </div>
      <p className="desc font-Nunito text-xl">{desc}</p>
    </div>
  );
};

export default WhatWeDoCard;
