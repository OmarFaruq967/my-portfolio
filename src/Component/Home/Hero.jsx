import React from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import Avatar from "../../../public/Images/Hero-Image/profile-pic-2.webp";
import background from "../../../public/Images/Hero-Image/background-2.jpg";
import resume from "../../../public/Resume/Omar-Faruq-Resume.pdf";

const Hero = () => {
  return (
    <div id="Home"
      className="grid grid-flow-row-dense md:grid-cols-2 md:h-[100vh] px-5 md:px-10"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full  flex flex-col justify-center pr-10 ">
        <h2 className="mt-24 font-semibold text-xl md:mt-10 mb-5 text-white">
          Welcome to the right places
        </h2>
        <h2 className="text-3xl my-3 font-bold md:text-5xl text-white">
          Hello there I'm
        </h2>
        <TypeAnimation
          className="text-3xl font-bold md:text-5xl mb-5 text-white"
          preRenderFirstString={true}
          sequence={[
            1000,
            "MD. Omar Faruq",
            1000,
            "MARN Web Developer",
            1000,
            "Font End Developer",
            1000,
            "Website Developer",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
        />
        <p className="my-5 font-normal text-lg text-white">
          Building a successful product is a challenge. I am highly energetic in
          user experience design, interfaces, web designer, and web development.
        </p>
        <div>
          <a href={resume} download="Omar-Faruq-Resume.pdf">
            <button className="btn btn-outline btn-warning my-5 mb-10">
              Download Resume
            </button>
          </a>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="w-[80%] flex mx-auto items-center justify-end md:w-full my-20 "
      >
        <img
          className="md:w-[65%] rounded-full ring-8 ring-[#f9970e] ring-offset-2 shadow-2xl"
          src={Avatar}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
