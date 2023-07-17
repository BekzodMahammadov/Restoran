import { BsQuote } from "react-icons/bs";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import Img1 from "../../../assets/img/testimonial-1.jpg";
import Img2 from "../../../assets/img/testimonial-2.jpg";
import Img3 from "../../../assets/img/testimonial-3.jpg";
import Img4 from "../../../assets/img/testimonial-4.jpg";

const data = [
  {
    id: 1,
    img: Img1,
  },
  {
    id: 2,
    img: Img2,
  },
  {
    id: 3,
    img: Img3,
  },
  {
    id: 4,
    img: Img4,
  },
  {
    id: 5,
    img: Img1,
  },
  {
    id: 6,
    img: Img2,
  },
  {
    id: 7,
    img: Img3,
  },
  {
    id: 8,
    img: Img4,
  },
];

export default () => {
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="700" className="testimonials">
        <div className="text-center text-[22px] text-[#FEA116] Pacifico">
          Testimonial
        </div>
        <div className="text-center text-[38px] text-[#0F172B] Nunito font-extrabold">
          Our Clients Say!!!
        </div>
        <div className="px-[20px] md:px-[40px] lg:px-[80px] xl:px-[110px] py-[50px] ">
          <Swiper
            pagination={true}
            autoplay={true}
            loop={true}
            slideNextClass="carousel"
            modules={[Pagination]}
            className="mySwiper h-[370px] flex justify-between"
            breakpoints={{
              425: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex justify-center div1">
                  <div className="w-[385px] div2 md:w-[320px] lg:w-[280px] xl:w-[356px] border h-auto p-[25px]">
                    <div className="text-[60px] div3 text-[#FEA116] testimonial_qoute">
                      <BsQuote className="icon" />
                    </div>
                    <div className="text-[16px] div4 text-[#666565] testimonial_text">
                      Dolor et eos labore, stet justo sed est sed. Diam sed sed
                      dolor stet amet eirmod eos labore diam
                    </div>
                    <div className="flex div5 items-center gap-[20px] mt-[15px] ">
                      <div>
                        <img
                          src={item.img}
                          className="w-[60px] rounded-full"
                          alt=""
                        />
                      </div>
                      <div className="div5_1">
                        <p className="text-[#0F172B] div5_2  text-[20px] Nunito font-extrabold">
                          Client Name
                        </p>
                        <p className="text-[14px] div5_2 text-[#666565]">
                          Profession
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
