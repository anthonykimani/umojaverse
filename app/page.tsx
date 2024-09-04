

import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-around from-[#34128B] from-10% via-50% to-[#0A0510] min-h-[1000px] bg-star-bg">
      <Navbar />
      <HeroSection />
      <About />
      <Footer />
    </main>
  );
}
