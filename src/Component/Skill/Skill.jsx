import React from "react";
import Heading from "../Shared/Heading";
import SkillImage from "./SkillImage";
import SkillItem from "../Shared/SkillItem";
import html from "../../../public/Images/Skill-logo/Html.png";
import css from "../../../public/Images/Skill-logo/Css.png";
import js from "../../../public/Images/Skill-logo/JavaScript.png";
import bs from "../../../public/Images/Skill-logo/Bootstrap.png";
import tailwind from "../../../public/Images/Skill-logo/Tailwind.png";
import express from "../../../public/Images/Skill-logo/Express.png";
import firebase from "../../../public/Images/Skill-logo/Firebase.png";
import GitBash from "../../../public/Images/Skill-logo/GitBash.png";
import github from "../../../public/Images/Skill-logo/Github.png";
import MongoDB from "../../../public/Images/Skill-logo/MongoDB.png";
import netlify from "../../../public/Images/Skill-logo/Netlify.png";
import NodeJS from "../../../public/Images/Skill-logo/NodeJS.png";
import react from "../../../public/Images/Skill-logo/React.png";
import VsCode from "../../../public/Images/Skill-logo/VsCode.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Skill = () => {
  return (
    <div className="mx-5 md:mx-10">
      <div className="flex mx-auto justify-center ">
        <Heading title={"My Skills"} />
      </div>
      <div className="grid md:grid-cols-2">
        <div className="">
          <SkillImage />
        </div>
        <div
          // data-aos="flip-left"
          // data-aos-easing="ease-out-cubic"
          // data-aos-duration="2000"
          className="grid grid-cols-2 md:grid-cols-4  "
        >
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={html} title="HTML" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={css} title="CSS" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={js} title="Java Script" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={bs} title="Bootstrap" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={tailwind} title="Tailwind" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={firebase} title="Firebase" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={express} title="Express JS" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={GitBash} title="GitBash" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={github} title="GitHub" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={MongoDB} title="MongoDB" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={netlify} title="Netlify" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={NodeJS} title="Node JS" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={react} title="React" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SkillItem image={VsCode} title="VS Code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
