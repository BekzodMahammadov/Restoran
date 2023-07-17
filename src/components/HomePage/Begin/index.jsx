import { BiSupport } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import React from "react";
import { FaUserTie } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import Card from "./Card";

const data = [
  {
    id: 1,
    icon: <FaUserTie />,
    title: "Master Chefs",
    duration: "400",
  },
  {
    id: 2,
    icon: <TbToolsKitchen2 />,
    title: "Quality Food",
    duration: "700",
  },
  {
    id: 3,
    icon: <SlBasket />,
    title: "Online Order",
    duration: "1000",
  },
  {
    id: 4,
    icon: <BiSupport />,
    title: "24/7 Service",
    duration: "1300",
  },
];

export default () => {
  return (
    <div>
      <div className="home_begin py-[100px] px-[20px] md:px-[40px] lg:px-[80px] xl:px-[110px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <Card
            key={item.id}
            icon={item.icon}
            duration={item.duration}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};
