import { PiDrop } from "react-icons/pi";
import { HiArrowLongDown } from "react-icons/hi2";



const HowItWorks = () => {
  return (
    <div className="w-full absolute left-1/2 transform -translate-x-1/2 flex-row items-center justify-center mt-10 text-white p-10">
          <h1 className="text-center text-4xl whitespace-nowrap	">How It Works</h1>
        <div className="flex flex-column items-center gap-2 ">
              <div className="w-16 h-16 bg-yellow rounded-full flex justify-center items-center ">
                  <PiDrop className="text-4xl font-light"/>
              </div> 
                  <div><HiArrowLongDown className="text-6xl" /></div>
                <div className="text-center text-2xl"><p>Choose your desired <br/> cleaning service</p></div>
        </div>
    </div>
  )
}

export default HowItWorks