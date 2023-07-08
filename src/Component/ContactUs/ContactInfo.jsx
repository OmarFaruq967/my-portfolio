import React from "react";
import {
  FaEnvelopeOpenText,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaPhoneSquareAlt,
  FaWhatsapp,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <div>
        <h2 className=" text-4xl font-extrabold">
          Have unique needs or need a quote or consultation?
        </h2>
        <p className="text-base font-semibold my-5">
          Whether you need to schedule a regular consultation service or quote
          for your website. our support rep is available to assist you in
          choosing the best package for you
        </p>
      </div>
      <h2 className="text-2xl font-extrabold mb-5">Contact me</h2>
      <div className=" md:flex gap-8">
        <div className="h-[130px] mb-5 md:w-[250px] bg-[#F6F9FA] px-4 py-4 rounded-lg shadow-lg border-b-2 border-[#F9970E] hover:shadow-none">
          <div className=" ">
            <span className=" w-10 h-10 bg-[#F9970E] hover:bg-black rounded-lg flex items-center justify-center">
              <FaPhoneSquareAlt className="text-white text-xl" />
            </span>
            <h2 className="text-lg font-extrabold mt-1">Phone</h2>
          </div>
          <h2 className="text-base font-semibold mt-1">+880 1840 030303</h2>
        </div>
        <div className="h-[130px] bg-[#F6F9FA] px-4 py-4 rounded-lg shadow-lg border-b-2 border-[#F9970E] hover:shadow-none">
          <div className=" ">
            <span className=" w-10 h-10 bg-[#F9970E] hover:bg-black rounded-lg flex items-center justify-center">
              <FaEnvelopeOpenText className="text-white text-xl" />
            </span>
            <h2 className="text-lg font-extrabold mt-1">Email</h2>
          </div>
          <h2 className="text-base font-semibold mt-1">
            omar.faruq9748@gmail.com
          </h2>
        </div>
      </div>
      
      
    </div>
  );
};

export default ContactInfo;
