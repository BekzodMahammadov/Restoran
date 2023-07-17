import React from "react";

export default ({ title, icon, duration }) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration={duration}
        className="home_begin_card p-[24px] mx-auto bg-[#fff] mb-[30px]  w-[385px] md:w-[336px] lg:w-[210px] xl:w-[270px]"
      >
        <div className="text-[46px] text-[#FEA116] begin_card_icon">{icon}</div>
        <div className="text-[#0F172B] text-[20px] font-extrabold Nunito mt-[10px] begin_card_title">
          {title}
        </div>
        <div className="text-[16px] text-[#666565] mt-[10px] begin_card_text ">
          Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
        </div>
      </div>
    </div>
  );
};
