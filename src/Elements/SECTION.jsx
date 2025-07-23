import React from "react";

const SECTION = ({ otherStyle, children }) => {
  return (
    <section
      className={`${otherStyle} md:py-20 py-8 lg:px-20 md:px-8 px-6 flex flex-col justify-center items-center md:gap-[4.75rem] gap-8 w-full`}
    >
      {children}
    </section>
  );
};

export default SECTION;
