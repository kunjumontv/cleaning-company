import Image from "next/image";
import React from "react";

const FeaturedIn = () => {
  return (
    <div className="bg-yellow mt-20 py-12 md:py-8 flex flex-col items-center lg:mx-28">
      <h1 className="text-center mb-6 text-44px">Featured In</h1>
      <div className="flex flex-wrap justify-center md:flex-row md:space-x-8 items-center md:gap-8">
        <Image width={150} height={50} src="/images/latch.webp" alt="Latch" className="h-auto w-24 md:w-auto "/>
        <Image
          width={150}
          height={50}
          src="/images/stellamaris.webp"
          alt="Stellamaris"
          className="h-auto w-24 md:w-auto"
        />
        <Image
          width={150}
          height={50}
          src="/images/gasparyan.webp"
          alt="Gasparyan"
          className="h-auto w-24 md:w-auto"
        />
        <Image width={150} height={50} src="/images/volve.webp" alt="Volve" className="h-auto w-24 md:w-auto" />
        <Image width={150} height={50} src="/images/foreva.webp" alt="Foreva" className="h-auto w-24 md:w-auto" />
      </div>
    </div>
  );
};

export default FeaturedIn;
