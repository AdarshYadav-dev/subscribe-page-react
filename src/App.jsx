import React from "react";
import "./index.css";
import Send from "./assets/images/Send.png";
import MailIcon from "./assets/images/mail-icon.png";
import CallIcon from "./assets/images/call-icon.png";
import FacebookIcon from "./assets/images/facebook-icon.png";
import XIcon from "./assets/images/x-logo.png";
import InstaIcon from "./assets/images/insta-logo.png";
import LinkedinIcon from "./assets/images/linkedin-logo.png";
import BrandLogo from "./assets/images/brand-logo.png";

function App() {
  return (
    <div className="font-sans">
      {/* Top Section */}
      <div className="main-container max-w-[1500px] m-auto w-[90%] mt-40 md:mt-60">
        <div className="top-container flex flex-col px-8 py-12 sm:px-20 sm:py-16 bg-blue-600 rounded-2xl justify-center items-center mb-2 relative md:top-[251px] gap-5 text-center">
          <span className="font-medium text-[16px] text-white">
            Get Notified About Project
          </span>
          <span className="font-semibold text-[28px] md:text-[42px] text-white tracking-tight">
            Subscribe Now
          </span>
          <div className="top-container-child p-3 sm:p-5 w-full sm:min-w-[413px] flex gap-2 bg-white rounded-[12px] items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full focus:outline-none px-2 text-gray-800"
            />
            <img src={Send} alt="send-icon" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-container bg-black text-white pt-60 md:pt-[300px]">
        <div className="bottom-content flex flex-col md:flex-row justify-around items-center gap-10 md:gap-0 px-5 py-10">
          <div className="bottom-content-left max-w-[700px] text-center md:text-left">
            <p className="font-bold text-[36px] md:text-[72px] leading-[120%] tracking-tight">
              Let’s join Magebyte, your best partner
            </p>
          </div>

          <div className="bottom-content-right flex flex-col gap-3 justify-center items-center md:items-start">
            <div className="flex items-center gap-3">
              <img src={MailIcon} alt="mail-icon" className="w-5 h-5" />
              <p>info@magebyte.com</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={CallIcon} alt="phone-icon" className="w-5 h-5" />
              <p>+91 8527259168</p>
            </div>
          </div>
        </div>

        {/* Footer Top */}
        <div className="bottom-content-bottom flex flex-col md:flex-row justify-between items-center border-b-4 border-[#7E8492] py-10 px-5 md:px-20 max-w-[1500px] m-auto w-[90%] gap-10">
          <img src={BrandLogo} alt="brand-logo" className="w-32 md:w-auto" />

          <div className="content-view-text flex flex-wrap gap-5 text-center md:text-left">
            <p>Overview</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Careers</p>
            <p>Help</p>
          </div>

          <div className="content-view-icon flex gap-5 justify-center">
            <img src={FacebookIcon} alt="facebook-icon" className="w-6 h-6" />
            <img src={XIcon} alt="x-icon" className="w-6 h-6" />
            <img src={InstaIcon} alt="insta-logo" className="w-6 h-6" />
            <img src={LinkedinIcon} alt="linkedin-logo" className="w-6 h-6" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-10 text-center md:text-left">
          <div className="bottom-footer flex flex-col md:flex-row justify-around gap-5 text-sm md:text-base">
            <p>© Copyright 2025, All Rights Reserved by Magebyte</p>
            <div className="bottom-footer-right flex gap-5 justify-center">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
