import React from "react";
import Nav from "../Component/Nav";
import { Hero } from "../Component/Hero";
// import WhyChooseUs from "../Elements/WhyChooseUs";
import PopularCourses from "../Component/Courses";
import WhatWeDo from "../Component/WhatWeDo";
import InstructorCTA from "../Component/InstructorCTA";
import EventsSection from "../Component/EventsSection";
import Testimonials from "../Component/Testimonials";
import Footer from "../Component/Footer";
import Partners from "../Component/partners";
import WhyChooseUs from "../Component/WhyChooseUs";
import Categories from "../Component/Categories";
import StatsSection from "../Component/StatsSection";
import CouponBanner from "../Component/CouponBanner";


const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Partners/>
      <WhyChooseUs />
      <Categories/>
      <PopularCourses />
      <WhatWeDo />
      <InstructorCTA />
      <EventsSection />
      <StatsSection />
      <Testimonials />
      <CouponBanner />
      <Footer />
    </div>
  );
};

export default HomePage;
