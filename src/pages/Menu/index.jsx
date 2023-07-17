import React from "react";
import FoodMenu from "../../components/HomePage/FoodMenu";
import Loader from "../../components/Loader";

export default () => {
  return (
    <div>
      <Loader />
      <div className="service_page bg_img">
        <div className="text-[#fff] font-extrabold Nunito text-[58px] text-center">
          Food Menu
        </div>
        <div className="flex justify-center gap-[5px]">
          <p className="text-[16px] uppercase Nunito font-medium cursor-pointer text-[#FEA116]">
            Home /
          </p>
          <p className="text-[16px] uppercase Nunito font-medium cursor-pointer text-[#FEA116]">
            Pages /
          </p>
          <p className="text-[16px] uppercase Nunito font-medium cursor-pointer text-[#Fff]">
            Menu
          </p>
        </div>
      </div>
      <div className="">
        <FoodMenu />
      </div>
    </div>
  );
};
