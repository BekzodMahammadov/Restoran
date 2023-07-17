import React from "react";
import Header from "../../components/HomePage/Header";
import Begin from "../../components/HomePage/Begin";
import AboutUs from "../../components/HomePage/AboutUs";
import FoodMenu from "../../components/HomePage/FoodMenu";
import Booking from "../../components/HomePage/Booking";
import OurTeam from "../../components/HomePage/OurTeam";
import Testimonial from "../../components/HomePage/Testimonial";
import Loader from "../../components/Loader";

export default () => {
  return (
    <div>
      <Loader />
      <Header />
      <Begin />
      <AboutUs />
      <FoodMenu />
      <Booking />
      <OurTeam />
      <Testimonial />
    </div>
  );
};
