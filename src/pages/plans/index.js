import plansData from '../../../public/assets/plans';
import { PiArrowRightThin } from 'react-icons/pi';
import Navbar from './../../components/Navbar';
import Footer from './../../components/Footer';

export default function Plans() {
  return (
    <div className="relative">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="py-8 md:py-20"> 
        <div className="text-center md:my-12 space-y-4 p-10">
          <h1 className="text-3xl md:text-56px">Our Plans</h1>
          <p className="text-15px md:text-22px">
            Elevate your living with our cleaning subscription plan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 lg:mx-28">
          {plansData.map((plan) => (
            <div key={plan.plansName} className="mx-auto w-full border border-desaturated-teal rounded-md">
              <div className={`relative flex-1 bg-${plan.plansBgColor} rounded-md text-center`}>
                <div className="p-8">
                  {plan.planValue && (
                    <p className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2">
                      {plan.planValue}
                    </p>
                  )}
                  <h3 className="text-black text-base md:text-xl">{plan.plansName}</h3>
                  <h1 className="text-44px text-black space-y-8">
                    <span className="align-super text-sm">{plan.plansCurrency}</span>
                    {plan.plansPrice}
                  </h1>
                  <p className="text-xs text-black">{plan.plansMonth}</p>
                  <button className="text-sm md:text-lg w-full bg-black text-white rounded-full py-3 my-4 hover:bg-opacity-40">
                    {plan.plansButton}
                  </button>
                </div>
                <div className="bg-white rounded-xl w-full">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex flex-row justify-center items-center gap-2 py-4">
                      <span>
                        <PiArrowRightThin />
                      </span>
                      <p>I'm benefit</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <Footer />
    </div>
  );
}
