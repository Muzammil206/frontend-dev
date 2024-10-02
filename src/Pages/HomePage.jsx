import React from "react";
import Nav from "../Component/Nav";
import { Hero } from "../Component/Hero";
import WhyChooseUs from "../Elements/WhyChooseUs";
import Courses from "../Component/Courses";
import Testimonials from "../Component/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <WhyChooseUs />
      <Courses />
      <Testimonials />
    </div>
  );
};

export default HomePage;
