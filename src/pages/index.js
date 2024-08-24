import Image from "next/image";
import { Questrial } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export default function Home() {
  return (
    <main className={`${questrial.className}`}>
      <div className="bg-section">        
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
        <Navbar />
      </div>
      <div className="bg-white min-h-screen">
       
      </div>
    </main>
  );
}
