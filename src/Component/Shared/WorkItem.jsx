import React from "react";

const WorkItem = ({ title, description, image, GitHub, LiveWebsite }) => {
  return (
    <div className="shadow-xl hover:shadow-none relative rounded-lg drop-shadow-xl
    border-2 border-[#ffffff00] border-opacity-0 hover:drop-shadow-none hover:border-2 hover:border-[#F9970E] hover:border-opacity-25 transition-all duration-300 ">
      <div className="relative max-w-full h-72 overflow-hidden rounded-lg">
        <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
          <img
            className="flex mx-auto w-full object-cover object-top rounded-lg "
            src={image}
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="mt-5 text-xl font-bold text-center">{title} </h1>
      </div>
      <div>
        <p className="mt-5 mb-20 text-sm font-medium text-justify px-5">
          {description}
        </p>
      </div>

      <div className="">
        <div className="flex justify-between px-5 py-5 absolute bottom-0 left-0 right-0">
          {GitHub && (
            <a
              href={GitHub}
              className="btn btn-sm capitalize bg-[#F9970E] hover:text-white hover:bg-[#3f3f3d]"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {LiveWebsite && (
            <a
              href={LiveWebsite}
              className="btn btn-sm capitalize bg-[#F9970E] hover:text-white hover:bg-[#3f3f3d]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
