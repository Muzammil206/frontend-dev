import React from "react";

export const AboutCard = ({ title, txt }) => {
  return (
    <div className="bg-[#DDE0E4] w-1/2 h-[19.5625rem] rounded-lg shadow-sm p-10 flex flex-col gap-6">
      <img
        src="/SVGs/about.svg"
        className="w-[3.2237rem] h-[3.2237rem] "
        alt=""
      />
      <div className="flex flex-col gap-3">
        <h2 className="font-Vietnam font-medium text-xl">{title}</h2>
        <p className="font-Vietnam font-normal">{txt}</p>
      </div>
    </div>
  );
};
