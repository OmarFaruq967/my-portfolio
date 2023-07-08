import React from "react";
import { Player} from "@lottiefiles/react-lottie-player";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const SkillImage = () => {
  return (
    <div 
    data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     className="">
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_zxau6gfz.json"
        className=" md:w-[500px]"
        // style={{ height: "500px", width: "500px"  }}
      > 
      </Player>
    </div>
  );
};

export default SkillImage;
