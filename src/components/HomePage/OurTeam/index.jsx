import React from "react";
import Img1 from "../../../assets/img/team-1.jpg";
import Img2 from "../../../assets/img/team-2.jpg";
import Img3 from "../../../assets/img/team-3.jpg";
import Img4 from "../../../assets/img/team-4.jpg";
import Card from "./Card";

const data = [
  {
    data: 1,
    img: Img1,
    duration: "400",
  },

  {
    data: 2,
    img: Img2,
    duration: "700",
  },
  {
    data: 3,
    img: Img3,
    duration: "1000",
  },
  {
    data: 4,
    img: Img4,
    duration: "1300",
  },
];

export default () => {
  return (
    <div>
      <div className="home_our_team py-[50px] ">
        <div data-aos="fade-up" data-aos-duration="700">
          <div className="text-[22px] text-[#FEA116] text-center Pacifico">
            Team Members
          </div>
          <div className="text-[38px] text-[#0F172B] Nunito text-center font-extrabold">
            Our Master Chefs
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="our_team_cont mt-[50px] gap-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[20px] md:px-[40px] lg:px-[80px] xl:px-[110px]"
        >
          {data.map((item) => (
            <Card key={item.id} duration={item.duration} img={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
};
