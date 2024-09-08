import { useRouter } from 'next/router';
import Navbar from './../../components/Navbar';
import Footer from './../../components/Footer';
import { servicesData } from '../../../public/assets/plans';

 function ServiceDetails() {
  const router = useRouter();
  

  const { id } = router.query;

  const service = servicesData.find((item) => item.id === parseInt(id));

 

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      

      {/* Main Content */}
      
          <div className="md:mt-24 py-8 md:pt-20 lg:mx-64">
              <h1 className="md:text-40px">{service.serviceType}</h1>
              <p className="mt-4 text-base">{service.serviceBrief}</p>
             <div className="my-8 flex flex-col gap-5">
             <p className="md:text-base">{`${service.serviceDuration} ${service.servicePrice}`}</p>
              <button className="w-36 md:text-base bg-desaturated-teal text-white rounded-full px-8 py-3 md:px-4 md:py-2 hover:bg-transparent hover:border border-desaturated-teal hover:text-desaturated-teal">
                Book Now
              </button>
             </div>
              <div className="border-t border-b border-gray-300 py-8">
              <h3 className="mb-4">Service Description</h3>
              <p>{service.serviceDescription}</p>
              </div>
              <div className="border-b border-gray-300 py-8">
                <h3 className="mb-4">Contact Details</h3>
                <p>San Francisco, CA 94158</p>
                <p>123-456-7890</p>
                <p>info@mysite.com</p>
              </div>

              
     </div>
      <Footer />
     </div>
    </div>
  );
}

export default ServiceDetails