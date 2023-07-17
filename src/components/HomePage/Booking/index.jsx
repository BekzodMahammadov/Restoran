import { BiPlay } from "react-icons/bi";
import React from "react";

export default () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="home_booking md:flex w-full h-auto py-[40px] "
      >
        <div className="booking_item1">
          <a
            href="https://www.youtube.com/embed/DWRcNpR6Kdc"
            className="btn-play"
          >
            <span></span>
          </a>
        </div>
        <div className="booking_item2 p-[50px]">
          <div data-aos="fade-up" data-aos-duration="700">
            <div className="text-[22px] text-[#FEA116] Pacifico">
              Reservation
            </div>
            <div className="text-[38px] text-[#fff] Nunito font-extrabold">
              Book A Table Online
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="home_booking gap-[15px]  md:flex md:justify-between">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-[#fff] h-[58px] py-[16px] rounded-sm px-[12px] w-full "
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#fff] h-[58px] py-[16px] rounded-sm px-[12px] w-full "
                />
              </div>
              <div className="home_booking gap-[15px]  md:flex md:justify-between">
                <input
                  type="date"
                  placeholder="Date & Time"
                  className="bg-[#fff] h-[58px] py-[16px] rounded-sm px-[12px] w-full "
                />
                <select
                  name=""
                  className="bg-[#fff] h-[58px] py-[16px] rounded-sm px-[12px] w-full "
                  id=""
                >
                  <option value="">People 1</option>
                  <option value="">People 2</option>
                  <option value="">People 3</option>
                </select>
              </div>
              <div>
                <textarea
                  name=""
                  className="bg-[#fff] h-[100px] py-[16px] rounded-sm px-[12px] w-full"
                  placeholder="Special Request"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <button className="text-[#fff] w-full h-[58px] uppercase text-[16px] bg-[#FEA116] rounded-sm">
                  book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
