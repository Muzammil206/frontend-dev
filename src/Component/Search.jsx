import React from "react";

const Search = () => {
  return (
    <div className="search flex items-center w-max py-0.5 rounded gap-4 pl-4 bg-[#F5FAFF]">
      <i className="fa fa-search text-2xl font-[100]" aria-hidden="true"></i>
      <input
        className="h-full outline-none md:w-80 font-Roboto"
        type="text"
        placeholder="What do you want to learn"
        name=""
        id=""
      />
      <button className="text-white rounded-xl px-[1rem] py-[12px] bg-primaryBlue font-Roboto">
        Continue
      </button>
    </div>
  );
};

export default Search;
