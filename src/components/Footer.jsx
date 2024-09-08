import Image from 'next/image';
import { MdDryCleaning } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      
        <div className="bg-yellow w-full px-8 py-12 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col justify-between md:order-1 order-1">
            <div className="flex gap-2 items-center mb-6">
              <MdDryCleaning className="md:text-2xl transition hover:scale-x-[-1]" />
              <p className="md:text-xl">The Cleanic</p>
            </div>
            <div>
              <button className="rounded-full bg-desaturated-teal w-[194px] h-[56px] text-white transition hover:text-desaturated-teal hover:bg-white hover:border border-desaturated-teal">
                Book Now
              </button>
            </div>
          </div>
          <div className="md:order-2 order-4">
            <p className="mb-4">Legal</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Refund Policy</p>
          </div>
          <div className="md:order-3 order-2">
            <p className="mb-4">Operating Hours</p>
            <p>Mon - Fri: 8am - 8pm</p>
            <p>Saturday: 9am - 7pm</p>
            <p className="mb-4">Sunday: 9am - 8pm</p>
            <p>Follow us for cleaning tips</p>
            <div className="flex gap-4 mt-2">
              <FaInstagram className="w-5 h-5" />
              <FaFacebookF className="w-5 h-5" />
              <FaYoutube className="w-5 h-5" />
              <FaTiktok className="w-5 h-5" />
            </div>
          </div>
          <div className="md:order-4 order-3">
            <p className="mb-4">Contact</p>
            <p>The Cleanic</p>
            <p>500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
          </div>
        </div>

        <div className="text-center py-4">
          <p className="text-base text-black">
            © 2035 by The Cleanic. Powered and secured by VAAK
          </p>
        </div>
    </div>
  );
};

export default Footer;
