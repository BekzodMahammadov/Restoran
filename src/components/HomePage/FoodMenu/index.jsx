import { TbToolsKitchen2 } from "react-icons/tb";
import { FaHamburger } from "react-icons/fa";
import { RiCupFill } from "react-icons/ri";
import React, { useState } from "react";

import img1 from "../../../assets/img/menu-1.jpg";
import img2 from "../../../assets/img/menu-2.jpg";
import img3 from "../../../assets/img/menu-3.jpg";
import img4 from "../../../assets/img/menu-4.jpg";
import img5 from "../../../assets/img/menu-5.jpg";
import img6 from "../../../assets/img/menu-6.jpg";
import img7 from "../../../assets/img/menu-7.jpg";
import img8 from "../../../assets/img/menu-8.jpg";
import Card from "./Card";

const data = [
  {
    id: 1,
    img: img1,
    category: "Breakfast",
  },
  {
    id: 2,
    img: img2,
    category: "Launch",
  },
  {
    id: 3,
    img: img3,
    category: "Dinner",
  },
  {
    id: 4,
    img: img4,
    category: "Dinner",
  },
  {
    id: 5,
    img: img5,
    category: "Dinner",
  },
  {
    id: 6,
    img: img6,
    category: "Breakfast",
  },
  {
    id: 7,
    img: img7,
    category: "Launch",
  },
  {
    id: 8,
    img: img8,
    category: "Breakfast",
  },
];

export default () => {
  const [category, setCategory] = useState("Breakfast");
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="home_food_menu py-[80px]"
      >
        <div className="text-[22px] text-[#FEA116] Pacifico text-center">
          Food Menu
        </div>
        <div className="text-center text-[38px] Nunito text-[#0F172B] font-extrabold">
          Most Popular Items
        </div>
        <div className="home_menu_btn flex gap-[20px] justify-center items-center mt-[30px]">
          <div
            onClick={() => {
              setCategory("Breakfast");
            }}
            className="flex items-center gap-[8px] cursor-pointer"
          >
            <div className="text-[36px] text-[#FEA116]">
              <RiCupFill />
            </div>
            <div>
              <p className="text-[14px] text-[#666565]">Popular</p>
              <p className="text-[16px] text-[#0F172B]  Nunito font-extrabold">
                Breakfast
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              setCategory("Launch");
            }}
            className="flex items-center gap-[8px] cursor-pointer"
          >
            <div className="text-[36px] text-[#FEA116]">
              <FaHamburger />
            </div>
            <div>
              <p className="text-[14px] text-[#666565]">Special</p>
              <p className="text-[16px] text-[#0F172B]  Nunito font-extrabold">
                Launch
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              setCategory("Dinner");
            }}
            className="flex items-center gap-[8px] cursor-pointer"
          >
            <div className="text-[36px] text-[#FEA116]">
              <TbToolsKitchen2 />
            </div>
            <div>
              <p className="text-[14px] text-[#666565]">Lovely</p>
              <p className="text-[16px] text-[#0F172B]  Nunito font-extrabold">
                Dinner
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="home_menu_cont mt-[40px] grid grid-cols-1 lg:grid-cols-2 px-[20px] md:px-[40px] lg:px-[80px] xl:px-[70px]"
        >
          {data
            .filter((item) => {
              if (category == "Breakfast") {
                return data;
              }
              {
                return item.category == category;
              }
            })
            .map((item) => (
              <Card key={item.id} img={item.img} />
            ))}
        </div>
      </div>
    </div>
  );
};
