import React from "react";

const CategoryCard = () => {
  return (
    <div className="shadow-md flex flex-col justify-center items-center md:w-[18.875rem] md:min-h-[23.5625rem] w-[9.5rem] min-h-[11.8125rem]  bg-white rounded-lg md:px-8 px-5 md:py-3 py-6 md:gap-8 gap-2">
      <div className="md:h-[3.9375rem] h-[31px] md:w-[4.625rem] w-[35px] flex justify-center items-center bg-[#49BBBD4D]">
        <img className="md:w-max w-4" src="/SVGs/pen.svg" alt="" />
      </div>
      <h2 className="lg:text-3xl md:text-2xl text-sm font-semibold ">Design</h2>
      <p className="lg:text-base text-[8px] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempore
        quam deserunt blanditiis quos dolorem corporis soluta, reiciendis quasi
        ducimus laboriosam quia omnis laborum perferendis repellat vitae facilis
        nemo necessitatibus.
      </p>
    </div>
  );
};

export default CategoryCard;
