import React from "react";

const SolutionComponent = ({ title, txt, defaultOrder, background }) => {
  return (
    <section
      className={`${background} lg:px-20 px-6 md:grid grid-cols-5 md:gap-[8.125rem] flex flex-col py-[9.375rem]`}
    >
      <div
        className={`${
          defaultOrder ? "" : "order-2"
        } col-span-3 flex flex-col gap-2.5
        `}
      >
        <h1 className="font-Roboto font-semibold text-4xl text-primaryColor">
          {title}
        </h1>
        <p className="text-[22px] font-Inter leading-[4.375rem] font-normal">
          {txt}
        </p>
        <button className="bg-white px-10 py-5 font-Inter text-2xl text-black border-[1px] border-black w-max mt-5">
          Explore
        </button>
      </div>
      <div className="col-span-2">
        <img className="" src="/SVGs/sampleImage.svg" alt="" />
      </div>
    </section>
  );
};

export default SolutionComponent;
