import React from "react";

const H1 = ({ otherStyle, children }) => {
  return (
    <h1 className={`text-5xl text-titleColor font-extrabold ${otherStyle}`}>
      {children}
    </h1>
  );
};

export default H1;
