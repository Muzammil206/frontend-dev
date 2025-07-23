import React from "react";

const Browse = () => {
  return (
    <div className="lg:px-20 px-6 my-10 flex justify-between items-center">
      <aside className="flex items-center gap-4">
        <select
          name=""
          id=""
          className="md:w-[12.5rem] h-[3rem] border-[#E9EAF0] border-[1px] pl-[1.125rem]"
        >
          <option value="">Browse</option>
          <option value="">Name</option>
          <option value="">Group</option>
        </select>
        <div className="md:w-[26.5rem] h-[3rem] border-[#E9EAF0] border-[1px] pl-[1.125rem] flex gap-[0.75rem] items-center">
          <img src="/SVGs/search.svg" className="w-6 h-6" alt="" />
          <input
            placeholder="Search your courses here"
            className="w-full h-full outline-none border-none"
            type="text"
          />
        </div>
      </aside>
      <aside className="flex items-center gap-6">
        <i className="fa fa-bell-o" aria-hidden="true"></i>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </aside>
    </div>
  );
};

export default Browse;
