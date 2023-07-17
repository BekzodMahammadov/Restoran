import React from "react";
import Img1 from "../../../assets/img/about-1.jpg";
import Img2 from "../../../assets/img/about-2.jpg";
import Img3 from "../../../assets/img/about-3.jpg";
import Img4 from "../../../assets/img/about-4.jpg";
import { TbToolsKitchen2 } from "react-icons/tb";
import Counter from "./Counter";

export default () => {
  return (
    <div>
      <div className="home_about w-full py-[40px] lg:flex lg:justify-between lg:gap-[20px] px-[20px] md:px-[40px] lg:px-[80px] xl:px-[110px]">
        <div className="home_about_item  gap-[15px]">
          <div className="grid grid-cols-2  gap-[15px]">
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              className="flex justify-end"
            >
              <img
                src={Img1}
                className="w-[180px] md:w-[340px] lg:w-[214px] xl:w-[260px]"
                alt=""
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="700"
              className="flex items-end justify-start "
            >
              <img
                src={Img2}
                className="w-[135px] h-[135px] md:h-[255px] md:w-[255px] lg:h-[160px] lg:w-[160px] xl:h-[194px] xl:w-[194px]"
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[15px] mt-[15px]">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="flex justify-end items-start"
            >
              <img
                src={Img3}
                className="w-[135px] h-[135px] md:h-[255px] md:w-[255px] lg:h-[160px] lg:w-[160px] xl:h-[194px] xl:w-[194px]"
                alt=""
              />
            </div>
            <div data-aos="zoom-in" data-aos-duration="1300" className="">
              <img
                src={Img4}
                className="w-[180px] md:w-[340px] lg:w-[214px] xl:w-[260px]"
                alt=""
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className="home_about_item">
          <div className="text-[22px]  text-[#FEA116] Pacifico ">About Us</div>
          <div className="flex items-center font-extrabold text-[33px]  lg:text-[38px] text-[#0F172B] Nunito">
            Welcome to
            <p className="text-[#FEA116]">
              <TbToolsKitchen2 />
            </p>
            Restoran
          </div>
          <div className="text-[#666565] text-[16px] mt-[20px] w-[385px] md:w-[650px] lg:w-[420px] xl:w-[500px]">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
            sit.
          </div>
          <div className="text-[#666565] text-[16px] mt-[20px] w-[385px] md:w-[650px] lg:w-[420px] xl:w-[500px]">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
            sit.
          </div>
          <div className="flex gap-[10px] mt-[20px]">
            <div className="border-s-[5px] border-[#FEA116] flex px-[14px] items-center gap-[20px]">
              <div className="text-[44px] text-[#FEA116] font-bold">
                <Counter number={15} />
              </div>
              <div>
                <p className="text-[16px] text-[#666565]">Years of</p>
                <p className="uppercase font-bold text-[#0F172B] text-[16px]">
                  Experience
                </p>
              </div>
            </div>
            <div className="border-s-[5px] border-[#FEA116] flex px-[14px] items-center gap-[20px]">
              <div className="text-[44px] text-[#FEA116] font-bold">
                <Counter number={50} />
              </div>
              <div>
                <p className="text-[16px] text-[#666565]">Popular</p>
                <p className="uppercase font-bold text-[#0F172B] text-[16px]">
                  MASTER CHEFS
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <button className="text-[16px] uppercase font-medium text-[#fff] w-[192px] h-[58px] bg-[#FEA116]">
              read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
