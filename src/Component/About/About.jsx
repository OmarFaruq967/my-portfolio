import React from "react";
import Heading from "../Shared/Heading";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

const About = () => {
  return (
    <div id="About-us" className="px-5 md:px-20 py-5 md:my-10">
      {/* Heading */}
      <div className="flex mx-auto justify-center ">
        <Heading title={"Who I am ?"} />
      </div>
      {/* About us */}
      <div className="grid grid-flow-row-dense md:grid-cols-2">
        {/* About us right side */}
        <div className="flex gap-16 justify-center mb-8 md:justify-start md:gap-36">
          <AboutLeft />
          <AboutRight />
        </div>
        {/* About us left side */}
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <p className="text-base font-medium text-justify">
            I'm Omar Faruq, a professional React.js developer with over 4 years
            of experience. My primary goal is to satisfy my clients and
            contribute to the growth of their projects. I have a strong
            background in developing interactive and dynamic web applications
            using React.
            <br /> <br />
            I can work on your provided design or create one from scratch.
            React.js, with its component-based architecture, allows me to build
            reusable and maintainable code, making it easier to scale and update
            your application as needed.
            <br /> <br />
            If you choose to work with me, I assure you that the final product
            will align with your requirements and provide an exceptional user
            experience. Let's collaborate to create outstanding React.js
            applications that will elevate your project to new heights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
