import React from "react";
import Begin from "../../components/HomePage/Begin";
import Loader from "../../components/Loader";

export default () => {
  return (
    <div>
      <Loader />
      <div className="service_page bg_img">
        <div className="text-[#fff] font-extrabold Nunito text-[58px] text-center">
          Services
        </div>
        <div className="flex justify-center gap-[5px]">
          <p className="text-[16px] uppercase Nunito font-medium cursor-pointer text-[#FEA116]">
            Home /
          </p>
          <p className="text-[16px] uppercase Nunito font-medium cursor-pointer text-[#FEA116]">
            Pages /
          </p>
          <p className="text-[16px] uppercase Nunito font-medium cursor-pointer text-[#Fff]">
            Service
          </p>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="text-[22px] text-[#FEA116] Pacifico text-center">
          Our Services
        </div>
        <div className="text-[38px] text-[#0F172B] Nunito text-center font-extrabold">
          Explore Our Services
        </div>
      </div>
      <div>
        <Begin />
      </div>
      <div className="mt-[-200px]">
        <Begin />
      </div>
    </div>
  );
};
