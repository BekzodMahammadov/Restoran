import { HiMailOpen } from "react-icons/hi";
import React from "react";
import Loader from "../../components/Loader";

export default () => {
  return (
    <div>
      <Loader />
      <div className="contact_page bg_img">
        <div className="text-[#fff] font-extrabold Nunito text-[58px] text-center">
          Contact Us
        </div>
        <div className="flex justify-center gap-[5px]">
          <p className="text-[16px] uppercase Nunito font-medium cursor-pointer text-[#FEA116]">
            Home /
          </p>
          <p className="text-[16px] uppercase Nunito font-medium cursor-pointer text-[#FEA116]">
            Pages /
          </p>
          <p className="text-[16px] uppercase Nunito font-medium cursor-pointer text-[#Fff]">
            Contact{" "}
          </p>
        </div>
      </div>
      <div className="text-[22px] text-[#FEA116] Pacifico text-center mt-[100px]">
        Contact Us
      </div>
      <div className="text-[38px] Nunito text-[#0F172B] font-extrabold text-center">
        Contact For Any Query
      </div>
      <div className="mt-[50px] contact_column md:flex md:justify-between px-[20px] md:px-[40px] lg:px-[80px] xl:px-[110px]">
        <div>
          <p className="text-[#FEA116] Pacifico text-[22px]">Booking</p>
          <p className="text-[#666565] flex items-center text-[17px] gap-[7px]">
            <p className="text-[#FEA116] Pacifico text-[20px]">
              <HiMailOpen />
            </p>
            book@example.com
          </p>
        </div>
        <div>
          <p className="text-[#FEA116] Pacifico text-[22px]">General</p>
          <p className="text-[#666565] flex items-center text-[17px] gap-[7px]">
            <p className="text-[#FEA116] Pacifico text-[20px]">
              <HiMailOpen />
            </p>
            book@example.com
          </p>
        </div>
        <div>
          <p className="text-[#FEA116] Pacifico text-[22px]">Technical</p>
          <p className="text-[#666565] flex items-center text-[17px] gap-[7px]">
            <p className="text-[#FEA116] Pacifico text-[20px]">
              <HiMailOpen />
            </p>
            book@example.com
          </p>
        </div>
      </div>
      <div className="contact_cont my-[50px] md:flex md:justify-between gap-[20px] px-[20px] md:px-[40px] lg:px-[80px] xl:px-[110px]">
        <div>
          <iframe
            className="w-[385px] lg:w-[450px] xl:w-[600px] h-[390px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1842.475107765901!2d71.26597944612756!3d40.37405635801177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1688899124235!5m2!1sru!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col gap-[20px] mt-[20px] md:mt-[0px]">
          <div className="flex justify-between gap-[15px]">
            <input
              type="text"
              className="w-full h-[58px] py-[12] px-[16px] border"
              placeholder="Your Name"
              name=""
              id=""
            />
            <input
              type="text"
              className="w-full h-[58px] py-[12] px-[16px] border"
              placeholder="Your Name"
              name=""
              id=""
            />
          </div>
          <div className="">
            <input
              type="text"
              className="w-full h-[58px] py-[12] px-[16px] border"
              placeholder="Subject"
              name=""
              id=""
            />
          </div>
          <div>
            <textarea
              name=""
              placeholder="Message"
              className="w-full h-[150px] py-[12px] px-[16px] border"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button className="w-full rounded-sm bg-[#FEA116] uppercase text-[#fff] text-[16px] h-[58px]">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
