import React from "react";
import Nav from "../Component/Nav";
import { Hero } from "../Component/Hero";
// import WhyChooseUs from "../Elements/WhyChooseUs";
import Courses from "../Component/Courses";
import Testimonials from "../Component/Testimonials";
import Footer from "../Component/Footer";
import Partners from "../Component/partners";
import WhyChooseUs from "../Component/WhyChooseUs";
import Categories from "../Component/Categories";


const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Partners/>
      <WhyChooseUs />
      <Categories/>
      <Courses />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
