import React from "react";
import Heading from "../Shared/Heading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Contact = () => {
  return (
    <div id="contact" className="px-5 md:px-20 py-5 md:my-10">
      <div className="flex mx-auto justify-center">
        <Heading title="Contact with me" />
      </div>
      <div className="md:flex justify-between">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-full md:w-[45%] mb-5"
        >
          <ContactInfo />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full px-5 md:w-[45%] bg-[#f6f9fa] py-12 rounded-xl shadow-xl "
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
