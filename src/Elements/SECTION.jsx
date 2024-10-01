import React from "react";

const SECTION = ({ otherStyle, children }) => {
  return (
    <section
      className={`${otherStyle} py-20 lg:px-20 md:px-8 px-6 flex flex-col justify-center items-center gap-[4.75rem] w-full`}
    >
      {children}
    </section>
  );
};

export default SECTION;
