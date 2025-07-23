import React from "react";

const H1 = ({ otherStyle, children }) => {
  return (
    <h1 className={`md:text-5xl text-2xl text-titleColor font-extrabold ${otherStyle}`}>
      {children}
    </h1>
  );
};

export default H1;
