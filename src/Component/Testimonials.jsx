import React from "react";
import SECTION from "../Elements/SECTION";
import H1 from "../Elements/H1";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div>
      <SECTION>
        <H1 otherStyle={"font-Rubik text-[#486284]"}>TESTIMONIALS</H1>
        <p className="text-xl">See what users are saying about us</p>
        <div className="flex bg-[#D3DCE7]">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </SECTION>
    </div>
  );
};

export default Testimonials;
