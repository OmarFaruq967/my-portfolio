import React from "react";

const SkillItem = ({title, image}) => {
  return (
    <div>
      <div className="my-5 mx-5 relative w-32 h-24">
        <div className="border-2 border-[#f9970e] shadow-xl rounded-lg w-32 h-24">
        <img className="flex mx-auto mt-4 h-[40px] " src={image} alt="" />
        <div className="absolute bottom-2 left-0 right-0">
        <h1 className="text-base font-bold text-center mt-2">{title} </h1>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
