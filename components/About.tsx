import { aboutSource } from "@/helpers/aboutSource";
import Image from "next/image";
import React from "react";
import classNames from "classnames";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col items-center font-DM px-3 md:px-24 my-10">
      <div className="">
        <h2 className="text-white text-center text-5xl xsm:text-[40px] font-bold my-10 ">
          What We Do
        </h2>
        <h4 className="text-[#596780ab] text-center text-base">
          At Umojaverse we believe in the transformative power of blockchain
          technology and its ability to shape the future. Our mission is to
          introduce noobs to the world of blockchain, providing education and
          resources that extend beyond Bitcoin.
        </h4>
      </div>
      {aboutSource.map((element, index) => (
        <div key={index}>
          <div
            className={classNames(
              "flex flex-col items-center justify-around my-10",
              {
                "md:flex-row": element.layoutDirection,
                "md:flex-row-reverse": !element.layoutDirection,
              }
            )}
          >
            <Image
              src={element.img}
              alt="nexus-logo"
              className="w-full md:w-[50%]"
            />
            <article className="text-white flex flex-col justify-around md:justify-center h-[500px] px-[10px] lg:px-[50px] md:w-[50%]">
              <h1 className="text-5xl lg:text-6xl font-semibold md:my-[20px]">
                {element.title}
              </h1>
              <h2 className="md:my-[20px]">{element.description}</h2>
              <Link href={element.link} className=" py-2 px-6 w-max rounded-full  bg-gradient-to-br from-[#8BC2FF] to-[#2D55FF] font-semibold hover:bg-white hover:cursor-pointer text-center">
                {element.action}
              </Link>
            </article>
          </div>
          {element.overview}
        </div>
      ))}
    </section>
  );
};

export default About;
