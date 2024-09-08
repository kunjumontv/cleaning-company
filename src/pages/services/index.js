
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './../../components/Navbar';
import Footer from './../../components/Footer';
import { servicesData } from '../../../public/assets/plans';

 function Services() {
  

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="py-8 md:pt-20 ">
        <div className="text-center md:my-12 space-y-4 pt-10">
          <h1 className="text-3xl md:text-56px">Our Services</h1>
          <p className="text-15px md:text-22px">
            What can we clean for your today
          </p>
        </div>
      </div>
      <div>
        {servicesData.map((item) => (
          <div
            key={item.id}
            className="grid grid-col-1 md:grid-cols-12 py-10 mx-auto border-t border-b border-gray-300 lg:mx-28"
          >
            <div className="col-span-2">
              <Image
                src={`/images/${item.serviceImage}`}
                width={300}
                height={200}
                alt={item.serviceType}
                className="mx-auto"
              />
            </div>
            <div className="px-6 space-y-4 col-span-6">
              <p className="text-lg md:text-2xl">{item.serviceType}</p>
              <p className="text-sm text-justify md:text-lg">
                {item.serviceBrief}
              </p>
              <p className="underline text-sm md:text-lg">
                <Link href={`/services/${item.id}`}>Read More</Link>
              </p>
            </div>
            <div className="col-span-2">
              <span className="text-sm md:text-base">{item.servicePrice}</span>
            </div>
            <div className="col-span-2">
              <button className="w-5/6 md:text-base mx-auto bg-desaturated-teal text-white rounded-full px-8 py-3 md:px-4 md:py-2 hover:bg-transparent hover:border border-desaturated-teal hover:text-desaturated-teal">
                Book a Cleaner
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Services