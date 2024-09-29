import React from "react";

const P = ({ otherStyles, children }) => {
  return (
    <p className={` ${otherStyles} text-[#1A202C] font-medium text-base`}>
      {children}
    </p>
  );
};

export default P;
