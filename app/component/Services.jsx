import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image"; 

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What i offers</h4>
      <h2 className="text-center text-5xl font-ovo ">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Throughout my career, I have had the privilege of collaborating with 
        prestigious organizations, contributing to their success and growth.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description , link}, index) => (
          <div key={index} className="border border-gray-400 rounded-lg px-8 py-8 hover:bg-lighthover hover:translate-y-1 duration-500">
            <Image src={icon} alt='' className="w-8 mb-3" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a className=" flex items-center text-sm mt-5" href={link}>Read more &nbsp;<Image src={assets.right_arrow} alt="" className="w-4" /></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
