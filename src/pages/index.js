import Image from "next/image";
import { Questrial } from "next/font/google";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import ClientReviews from "@/components/ClientReviews";
import OurServices from "@/components/OurServices";
import FeaturedIn from "@/components/FeaturedIn";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
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
    </main>
  );
}
