import React from "react";

const TestimonialCard = ({ desc, name, occupaction, img }) => {
  return (
    <div className="border-[#D9D9D9] border-[1px] flex flex-col lg:w-[36.5625rem] gap-6 p-6 rounded-lg bg-[#F8F8F8]">
      <p className="desc font-Poppins font-semibold">{desc}</p>
      <div className="flex items-center gap-3">
        <img src={img} className="w-10 h-10 rounded-full" alt="" />
        <h1 className="text-[#757575]">
          {name}
          <br />
          <span className="text-[#B3B3B3]">{occupaction}</span>
        </h1>
      </div>
    </div>
  );
};

export default TestimonialCard;
