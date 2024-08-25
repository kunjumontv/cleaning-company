import React from "react";

const Banner = () => {
  return (
    <div className="text-white text-center px-12 md:text-start z-50">
      <div className="pt-12 md:pt-56 md:px-16">
        <h1 className="text-3xl font-bold md:text-6xl md:font-normal">Remarkably Cleaner.</h1> 
        <h1 className="text-3xl font-bold md:text-6xl md:font-normal">Amazingly Simpler.</h1>
      </div>
      <div className="text-center px-7 mt-4 md:text-start md:px-16">
        <p className="text-base md:text-xl md:w-[500px]">
          Providing spotless cleaning services for busy people since 2035. Always on time, always smiling.         
        </p>
      
        <button className="mt-8 px-10 py-2 rounded-full transition-all bg-subtle-yellow text-desaturated-teal hover:bg-transparent hover:text-subtle-yellow whitespace-nowrap border border-subtle-yellow md:w-[197px] md:h-[56px] ">Book Now</button>
      </div>
    </div>
  );
};

export default Banner;
