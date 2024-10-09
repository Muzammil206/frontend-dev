import React from "react";
import Nav from "../Component/Nav";
import { Hero } from "../Component/Hero";
import WhyChooseUs from "../Elements/WhyChooseUs";
import Courses from "../Component/Courses";
import Testimonials from "../Component/Testimonials";
import ShareExpertise from "../Component/ShareExpertise";
import Footer from "../Component/Footer";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <WhyChooseUs />
      <Courses />
      <Testimonials />
      <ShareExpertise />
      <Footer />
    </div>
  );
};

export default HomePage;
