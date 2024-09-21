import { Universe } from "@/constants/svg";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <main className="flex flex-col justify-around sm:justify-start items-center text-center bg-hero-bg bg-no-repeat bg-center bg-cover overflow-hidden px-3 md:px-24">
      <h1 className="bg-gradient-to-b from-[#ffffff] to-[#ffffff70] bg-clip-text text-transparent text-4xl md:text-[50px] lg:text-[60px] font-clashDisplay font-semibold flex flex-col justify-around leading-[40px] lg:leading-[70px] mt-[100px]">
        Platform for tech builders in Web3, Blockchain, Metaverse, and AI
      </h1>
      <span className="text-[#5F5F7D] text-base md:text-lg font-DM my-[50px] w-full md:w-[900px]">
        At X we believe in the transformative power of blockchain technology and
        its ability to shape the future. Our mission is to introduce noobs to
        the world of blockchain, providing education and resources that extend
        beyond Bitcoin.
      </span>
      <button className="py-2 px-6  rounded-full  bg-gradient-to-br from-[#8BC2FF] to-[#2D55FF] font-semibold hover:bg-white hover:cursor-pointer">
        Join Umojaverse
      </button>
      <Image src={Universe} alt="" className=""/>
    </main>
  );
};

export default HeroSection;
