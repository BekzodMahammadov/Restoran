import React from "react";
import Img from "../../../assets/img/hero.png";

export default () => {
  return (
    <div>
      <div className="header lg:flex lg:justify-between lg:items-center w-full h-auto py-[150px] px-[20px] md:px-[40px] lg:px-[80px] xl:px-[110px]">
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="flex flex-col items-center lg:items-start"
        >
          <div className="text-[60px] text-center lg:text-left text-[#fff] font-extrabold Nunito">
            Enjoy Our
            <br />
            Delicious Mea
          </div>
          <div className="text-[#fff] text-[16px] w-[385px] text-center lg:text-left font-medium lg:w-[450px] ">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </div>
          <div className="mt-[30px] ">
            <button className="font-medium rounded text-[#fff] uppercase w-[213px] h-[58px] bg-[#FEA116]">
              Book a table
            </button>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="700">
          <img
            className="img-fluid w-[360px] md:w-[650px] lg:w-[480px] xl:w-[520px]"
            src={Img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
