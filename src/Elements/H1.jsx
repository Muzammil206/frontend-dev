import React from "react";

const H1 = ({ otherStyle, children }) => {
  return (
    <h1 className={`${otherStyle} text-5xl text-titleColor font-extrabold`}>
      {children}
    </h1>
  );
};

export default H1;
