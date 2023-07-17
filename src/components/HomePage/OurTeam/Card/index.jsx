import { BsTwitter, BsInstagram } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import React from "react";

export default ({ img, duration }) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration={duration}
        className="our_team_card w-full mx-auto py-[30px]  bg-[#fff]"
      >
        <div className="flex justify-center">
          <div className="overflow-hidden w-[330px] md:w-[288px] lg:w-[168px] xl:w-[200px] rounded-full flex justify-center">
            <img src={img} className=" w-full" alt="" />
          </div>
        </div>
        <div className="text-[20px] mt-[20px] Nunito text-[#0F172B] font-extrabold text-center">
          Full Name
        </div>
        <div className="text-[16px] text-[#666565] text-center">
          Designation
        </div>
        <div className="flex justify-center gap-[15px] mt-[20px]">
          <a href="#" className="our_team_btn">
            <CgFacebook />
          </a>
          <a href="#" className="our_team_btn">
            <BsTwitter />
          </a>
          <a href="#" className="our_team_btn">
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};
