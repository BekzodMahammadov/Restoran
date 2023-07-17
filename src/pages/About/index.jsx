import React from "react";
import AboutUs from "../../components/HomePage/AboutUs";
import OurTeam from "../../components/HomePage/OurTeam";
import Loader from "../../components/Loader";

export default () => {
  return (
    <div>
      <Loader />
      <div className="about_page bg_img">
        <div className="text-[#fff] font-extrabold Nunito text-[58px] text-center">
          About Us
        </div>
        <div className="flex justify-center gap-[5px]">
          <p className="text-[16px] uppercase Nunito font-medium cursor-pointer text-[#FEA116]">
            Home /
          </p>
          <p className="text-[16px] uppercase Nunito font-medium cursor-pointer text-[#FEA116]">
            Pages /
          </p>
          <p className="text-[16px] uppercase Nunito font-medium cursor-pointer text-[#Fff]">
            About
          </p>
        </div>
      </div>
      <div className="py-[40px]">
        <AboutUs />
      </div>
      <div>
        <OurTeam />
      </div>
    </div>
  );
};
