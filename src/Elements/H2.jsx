import React from "react";

const H2 = ({ otherStyles, children }) => {
  return (
    <h2 className={`text-5xl text-black font-medium ${otherStyles}`}>{children}</h2>
  );
};

export default H2;