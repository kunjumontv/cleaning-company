import { PiDrop } from "react-icons/pi";
import { HiArrowLongUp } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { GoKey } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";

const HowItWorks = () => {
  return (
    <div className="relative">
      <h1 className="text-center text-4xl whitespace-nowrap text-white absolute top-10 left-1/2 transform -translate-x-1/2">
        How It Works
      </h1>
      <div className="w-full absolute left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row items-center justify-center mt-20 text-white">
        <div className="flex flex-col md:flex-row items-center gap-0 mt-6 md:items-start">
          <div className="flex flex-col items-center ">
            <div className="w-16 h-16 bg-yellow rounded-full flex justify-center items-center">
              <PiDrop className="text-4xl font-light text-black" />
            </div>
            <HiArrowLongUp className="text-6xl md:ml-4 rotate-180 md:rotate-90 mt-3 md:hidden" />
            <p className="text-center text-base mt-4 order-3 md:order-2">
              Choose your desired <br /> cleaning service
            </p>
          </div>
          <HiArrowLongUp className="text-6xl md:ml-4 rotate-180 md:rotate-90 hidden md:block" />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-0 mt-6 md:items-start">
          <div className="flex flex-col items-center ">
            <div className="w-16 h-16 bg-yellow rounded-full flex justify-center items-center">
              <IoShirtOutline className="text-4xl font-light text-black" />
            </div>
            <HiArrowLongUp className="text-6xl md:ml-4 rotate-180 md:rotate-90 mt-3 md:hidden" />
            <p className="text-center text-base mt-4 order-3 md:order-2">
              Use the Cleanic App for <br /> laundry pickup
            </p>
          </div>
          <HiArrowLongUp className="text-6xl md:ml-4 rotate-180 md:rotate-90 hidden md:block" />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-0 mt-6 md:items-start">
          <div className="flex flex-col items-center ">
            <div className="w-16 h-16 bg-yellow rounded-full flex justify-center items-center">
              <GoKey className="text-4xl font-light text-black" />
            </div>
            <HiArrowLongUp className="text-6xl md:ml-4 rotate-180 md:rotate-90 mt-3 md:hidden" />
            <p className="text-center text-base mt-4 order-3 md:order-2">
              Leave us the keys and <br />
              we'll take care of the rest
            </p>
          </div>
          <HiArrowLongUp className="text-6xl md:ml-4 rotate-180 md:rotate-90 hidden md:block" />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-0 mt-6 md:items-start">
          <div className="flex flex-col items-center ">
            <div className="w-16 h-16 bg-yellow rounded-full flex justify-center items-center">
              <IoHomeOutline className="text-4xl font-light text-black" />
            </div>
            <HiArrowLongUp className="text-6xl md:ml-4 rotate-180 md:rotate-90 mt-3 md:hidden" />
            <p className="text-center text-base mt-4 order-3 md:order-2">
              Welcome back to your <br /> home clean home!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
