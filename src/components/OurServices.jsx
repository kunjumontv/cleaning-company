import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <div className="mt-16 md:py-20 bg-greenish-blue text-white">
      <h2 className="text-2xl text-center pt-10 md:text-5xl">
        For Anything You Need
      </h2>
      <p className="text-lg text-center md:text-2xl">Our stellar services</p>
      <div className="flex flex-col gap-4 mt-8 md:flex-row md:justify-center md:mt-10 md:gap-6 md:px-6 lg:px-28">
        <div className="relative flex flex-1">
          <Image
            src="/images/floor3.webp"
            alt="floor"
            width={300}
            height={200}  
            sizes="(max-width: 768px) 100vw, (min-width: 1536px) 50vw, 350px"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
          <span className="absolute bottom-4 text-3xl text-white ml-8 antialiased">
            Move In/Move Out
          </span>
        </div>
        <div className="relative flex flex-1">
          <Image
            src="/images/sofa.webp"
            alt="sofa"
            width={300}
            height={200}  
            sizes="(max-width: 768px) 100vw, (min-width: 1536px) 50vw, 350px"
            className="w-full h-auto rounded-md hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
          <span className="absolute bottom-4 text-3xl text-white ml-8 antialiased">
            Laundry
          </span>
        </div>
        <div className="relative flex flex-1">
          <Image
            src="/images/floor.webp"
            alt="floor"
            width={300}
            height={200}  
            sizes="(max-width: 768px) 100vw, (min-width: 1536px) 50vw, 350px"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
          <span className="absolute bottom-4 text-3xl text-white ml-8 antialiased">
            Deep Cleaning
          </span>
        </div>
      </div>
      <div className="text-center my-10 pb-10 md:pb-0 transition-all">
        <button className="md:text-lg bg-white text-greenish-blue px-16 py-5 md:px-14 md:py-4 rounded-full transition-all hover:bg-transparent hover:text-white hover:border hover:border-white">
          See All Services
        </button>
      </div>
    </div>
  );
};

export default OurServices;
