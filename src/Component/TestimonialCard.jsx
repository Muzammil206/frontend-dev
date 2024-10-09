import React from "react";

const TestimonialCard = () => {
  return (
    <div className="bg-[#D3DCE7] flex flex-col lg:w-[26.25rem] gap-9 p-6 rounded-lg">
      <header className="side flex gap-6 items-center">
          <img src="/SVGs/circ.svg" alt="" />
          <div className="title flex flex-col">
            <h2 className="font-Rubik text-[#486284] font-bold text-xl">
              Viezh Robert
            </h2>
            <p className="font-Rubik text-[#486284]">Warsaw, Poland</p>
          </div>
          <span className="flex"></span>
          <div className="rate">4.5</div>
      </header>
      <div className="font-Rubik text-[#486284]">
        “Wow... I am very happy to use this VPN, it turned out to be more than
        my expectations and so far there have been no problems. LaslesVPN always
        the best”.
      </div>
    </div>
  );
};

export default TestimonialCard;
