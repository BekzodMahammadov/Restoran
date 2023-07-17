import React from "react";

export default ({ img }) => {
  return (
    <div>
      <div className="home_menu_card flex gap-[20px] items-center mx-auto w-[385px] mb-[30px] md:w-[690px] lg:w-[400px] xl:w-[530px]">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="w-full">
          <div className="border-b pb-[10px] flex justify-between">
            <p className="text-[20px] Nunito font-extrabold text-[#0F172B]">
              Chicken Burger
            </p>
            <p className="text-[20px] Nunito font-extrabold text-[#FEA116]">
              $ 115
            </p>
          </div>
          <div className="text-[14px] text-[#666565] pt-[10px]">
            <i>Ipsum ipsum clita erat amet dolor justo diam</i>
          </div>
        </div>
      </div>
    </div>
  );
};
