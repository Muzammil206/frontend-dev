import React from "react";

const CategoryCard = () => {
  return (
    <div className="shadow-md flex flex-col justify-center items-center w-[18.875rem] min-h-[23.5625rem] bg-white rounded-lg px-8 py-3 gap-8">
      <div className="h-[3.9375rem] w-[4.625rem] flex justify-center items-center bg-[#49BBBD4D]">
        <img src="/SVGs/pen.svg" alt="" />
      </div>
      <h2 className="lg:text-3xl text-2xl font-semibold">Design</h2>
      <p className="lg:text-base text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempore
        quam deserunt blanditiis quos dolorem corporis soluta, reiciendis quasi
        ducimus laboriosam quia omnis laborum perferendis repellat vitae facilis
        nemo necessitatibus.
      </p>
    </div>
  );
};

export default CategoryCard;
