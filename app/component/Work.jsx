import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo leading-6">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in frontend development.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Overlay */}
            <div className="bg-white w-11/12 rounded-lg absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-5 flex items-center justify-between transition-all duration-300 group-hover:bottom-7">
              
              {/* Text */}
              <div>
                <h2 className="text-black font-semibold text-sm">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-xs mt-1">
                  {project.description}
                </p>
              </div>

              {/* Icon */}
              <div className="border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] transition group-hover:bg-lime-300">
                <Image
                  src={assets.send_icon}
                  alt="View project"
                  className="w-4"
                />
              </div>

            </div>
          </div>
        ))}
      </div>
      <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lighthover duration-500"> 
        Show more <Image src={assets.right_arrow_bold} alt="" className="w-4"/>
      </a>
    </div>
  );
};

export default Work;
