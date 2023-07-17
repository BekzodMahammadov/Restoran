import { FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";
import React from "react";

export default () => {
  return (
    <div>
      <div
        data-aos="fade"
        className="footer w-full h-auto bg-[#0F172B] pt-[100px]  "
      >
        <div className="footer_top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[20px] md:px-[40px] lg:px-[80px] xl:px-[110px]">
          <div className="footer_item flex flex-col gap-[20px] w-full mb-[30px]">
            <div className="text-[22px] text-[#FEA116] Pacifico">Company</div>
            <div>
              <a
                href="#"
                className="flex items-center Nunito font-medium footer_link gap-[5px] text-[#fff]"
              >
                <AiOutlineRight /> About Us
              </a>
              <a
                href="#"
                className="flex items-center Nunito font-medium footer_link gap-[5px] text-[#fff]"
              >
                <AiOutlineRight /> Contact Us
              </a>
              <a
                href="#"
                className="flex items-center Nunito font-medium footer_link gap-[5px] text-[#fff]"
              >
                <AiOutlineRight /> Reservation
              </a>
              <a
                href="#"
                className="flex items-center Nunito font-medium footer_link gap-[5px] text-[#fff]"
              >
                <AiOutlineRight /> Privacy Policy
              </a>
              <a
                href="#"
                className="flex items-center Nunito font-medium footer_link gap-[5px] text-[#fff]"
              >
                <AiOutlineRight /> Terms & Condition
              </a>
            </div>
          </div>
          <div className="footer_item flex flex-col gap-[20px] w-full mb-[30px]">
            <div className="text-[22px] text-[#FEA116] Pacifico">Contact</div>
            <div className="flex flex-col gap-[7px]">
              <p className="flex items-center gap-[8px] text-[#fff] Nunito font-medium">
                <GoLocation />
                123 Street, New York, USA
              </p>
              <p className="flex items-center gap-[8px] text-[#fff] Nunito font-medium">
                <IoMdCall /> +012 345 67890
              </p>
              <p className="flex items-center gap-[8px] text-[#fff] Nunito font-medium">
                <GrMail /> info@example.com
              </p>
              <div className="flex gap-[5px]">
                <a href="#" className="footer_brand_link">
                  <BsTwitter />
                </a>
                <a href="#" className="footer_brand_link">
                  <CgFacebook />
                </a>
                <a href="#" className="footer_brand_link">
                  <AiFillYoutube />
                </a>
                <a href="#" className="footer_brand_link">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <div className="footer_item flex flex-col gap-[20px] w-full mb-[30px]">
            <div className="text-[#FEA116] Pacifico text-[22px]">Opening</div>
            <div className="flex flex-col gap-[7px]">
              <p className="text-[18px] Nunito font-medium text-[#fff]">
                Monday - Saturday
              </p>
              <p className="text-[16px] Nunito  text-[#fff]">09AM - 09PM</p>
              <p className="text-[18px] Nunito font-medium text-[#fff]">
                Sunday
              </p>
              <p className="text-[16px] Nunito  text-[#fff]">10AM - 08PM</p>
            </div>
          </div>
          <div className="footer_item flex flex-col gap-[20px] w-full mb-[30px]">
            <div className="text-[#FEA116] Pacifico text-[22px] ">
              Newslatter
            </div>
            <div className="text-[#fff] Nunito fond-medium flex flex-col gap-[10px]">
              <p>
                Dolor amet sit justo amet elitr <br /> clita ipsum elitr est.
              </p>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full py-[12px] px-[16px] bg-[#fff] border border-[#FEA116]"
                  name=""
                  id=""
                />
                <button className="uppercase rounded-sm text-[#fff] w-[85px] h-[42px] bg-[#FEA116] ml-[-90px]">
                  signup
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom home_booking border-t border-[#272F41] flex py-[40px] justify-between px-[20px] md:px-[40px] lg:px-[80px] xl:px-[110px]">
          <div className="text-[#fff] text-center md:text-left Nunito font-medium">
            © Your Site Name, All Right Reserved. Designed <br /> By HTML Codex
            <br />
            Distributed By ThemeWagon
          </div>
          <div className="text-[#fff] mt-[20px] md:mt-0 Nunito font-medium flex justify-center gap-[10px]">
            <a href="#">Home</a>
            <a href="#">Cookies</a>
            <a href="#">Help</a>
            <a href="#">FAQs</a>
          </div>
        </div>
      </div>
    </div>
  );
};
