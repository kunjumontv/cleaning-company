import Image from 'next/image';
import { Questrial } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import ContactForm from '@/components/ContactForm';
import ClientReviews from '@/components/ClientReviews';
import OurServices from '@/components/OurServices';
import FeaturedIn from '@/components/FeaturedIn';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import HowItWorks from '@/components/HowItWorks';
import OurPlans from './../components/OurPlans';
import WhyChoose from './../components/WhyChoose';
import Footer from './../components/Footer';

const questrial = Questrial({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

export default function Home() {
  return (
    <main className={`${questrial.className}`}>
      <div className="bg-section">
        <Navbar />
        <div className="absolute inset-0 bg-black bg-opacity-80 -z-10"></div>
        <Banner />
      </div>
      <div className="bg-white min-h-screen md:min-h-[60vh]">
        <ContactForm />
      </div>
      <ClientReviews />
      <OurServices />
      <FeaturedIn />
      <BeforeAfterSlider />
      <div className="bg-howitworks">
        <HowItWorks />
      </div>
      <OurPlans />
      <WhyChoose />
      <div>
        <Image
          src="/images/white-shelf.webp"
          width={1440}
          height={300}
          className="h-[250px]"
        />
      </div>
      <Footer />
    </main>
  );
}
