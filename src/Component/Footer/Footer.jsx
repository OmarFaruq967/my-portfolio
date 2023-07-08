import React from "react";
import {
  FaEnvelopeOpenText,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaPhoneSquareAlt,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../../../public/Images/Logo/Logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center pt-10 pb-5 bg-[#F6F9FA] text-primary-content">
        <div>
          <img className="w-[200px]" src={logo} alt="" />
          <p className="font-bold text-[#3F3F3D]">
            Omar Faruq Portfolio. <br />
            Providing reliable tech since 2021
          </p>
        </div>

        {/* Social media link */}
        <div className=" grid grid-flow-col gap-4 -mt-4 ">
          <div>
            <a href="https://www.facebook.com/Rone.BTSC">
              <span className="w-10 h-10 bg-[#0370ac] rounded-full flex items-center justify-center transform transition-transform duration-300 hover:animate-bounce  ">
                <FaFacebook className="text-white text-xl hover:animate-spin duration-300" />
              </span>
            </a>
          </div>
          <div>
            <a href="https://wa.me/1517089748">
              <span className=" w-10 h-10 bg-[#24cc63] hover:bg-black rounded-full flex items-center justify-center transform transition-transform duration-300 hover:animate-bounce">
                <FaWhatsapp className="text-white text-xl hover:animate-spin duration-300" />
              </span>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/md-rone/">
              <span className=" w-10 h-10 bg-[#0370ac] hover:bg-black rounded-full flex items-center justify-center transform transition-transform duration-300  hover:animate-bounce">
                <FaLinkedinIn className="text-white text-xl hover:animate-spin duration-300" />
              </span>
            </a>
          </div>
          <div>
            <a href="https://github.com/OmarFaruq967">
              <span className=" w-10 h-10 bg-[#171415] hover:bg-black rounded-full flex items-center justify-center transform transition-transform duration-300 hover:animate-bounce">
                <FaGithub className="text-white text-xl hover:animate-spin duration-300 " />
              </span>
            </a>
          </div>
        </div>
        <p className="text-[#3F3F3D] font-semibold mt-2">
          Copyright © 2023 - All right reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
