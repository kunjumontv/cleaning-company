import { PiArrowRightThin } from "react-icons/pi";

const OurPlans = () => {
  return (
    <div className="bg-greenish-blue py-8 md:py-28">
      <div className="lg:mx-28 grid grid-cols-1 md:grid-cols-2 gap-4 md:items-center p-6">
          <div className="flex flex-col items-center gap-4 mx-auto my-8 px-4">
            <h1 className="text-2xl text-white text-center md:text-start md:text-44px md:leading-none">
              Our Plans & <br /> Special Discounts
            </h1>
            <p className="text-base text-white text-center md:text-start md:text-lg">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. I'm a paragraph. Click here to add your own text and edit me.
              It's easy.
            </p>
            <button className="bg-white text-greenish-blue py-4 px-8 w-4/5 md:w-2/4 rounded-full text-2xl md:text-xl md:px-12 md:py-3 whitespace-nowrap transition hover:text-white hover:bg-transparent hover:border border-white">
              Choose Your Plan
            </button>
          </div>
          <div className="mx-auto w-full">
            <div className="relative flex-1 bg-yellow rounded-md text-center ">
              <div className="p-8">
                <p className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-base px-2">
                  Base Value
                </p>
                <h3 className="text-black text-xl">The Bi-Monthly Plan</h3>
                <h1 className="text-7xl text-black space-y-8">
                  <span className="align-super text-2xl">$</span>280
                </h1>
                <p className="text-xs text-black">Every month</p>
                <button className="text-base w-full bg-black text-white rounded-full py-3 my-4">
                  Select
                </button>
              </div>

              <div className="bg-white rounded-xl w-full">
                <div className="flex flex-row justify-center items-center gap-2 py-4">
                  <span>
                    <PiArrowRightThin />
                  </span>
                  <p>I'm benefit</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 py-4">
                  <span>
                    <PiArrowRightThin />
                  </span>
                  <p>I'm benefit</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 py-4">
                  <span>
                    <PiArrowRightThin />
                  </span>
                  <p>I'm benefit</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 py-4">
                  <span>
                    <PiArrowRightThin />
                  </span>
                  <p>I'm benefit</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 py-4">
                  <span>
                    <PiArrowRightThin />
                  </span>
                  <p>I'm benefit</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default OurPlans;
