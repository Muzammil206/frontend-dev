import React from "react";

const FooterCard = ({ txt }) => {
  return (
    <div className="flex flex-col gap-5">
      {txt.map((t, i) => (
        <p
          key={i}
          className={`text-white ${
            i === 0
              ? "border-b-[1.5px] border-[#99A4B5] mb-[0.9375rem] pb-2.5"
              : ""
          } w-max font-semibold`}
        >
          {t}
        </p>
      ))}
    </div>
  );
};

export default FooterCard;
