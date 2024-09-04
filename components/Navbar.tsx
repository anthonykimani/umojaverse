'use client'

import Image from "next/image";
import React, { useState } from "react";
import { List, XCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { useRef } from "react";
import { Logo } from "@/constants/svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollRef = useRef<HTMLDivElement | null>();

  return (
    <div className="px-3 md:px-24">
      <div className="flex justify-between items-center p-3 md:px-20 my-5 text-white">
        <Link href="/" className=" w-auto flex items-center">
          <Image src={Logo} alt="atlas-logo" className="w-auto" />
        </Link>
        <div className="block md:hidden">
          <List
            size={32}
            color="#ffffff"
            className="block lg:hidden"
            onClick={toggleMenu}
          />
        </div>
        <div
          className="absolute top-0 left-0 right-0 sm:block bg-white p-5 sm:p-0 min-w-[200px] w-[100%] min-h-[800px] h-[100%]  "
          style={showMenu ? { display: "block" } : { display: "none" }}
        >
          <XCircle
            size={32}
            color="#b8b8b8"
            weight="fill"
            onClick={toggleMenu}
          />
          <ul className="flex flex-col sm:flex-row justify-around text-base font-DM  w-auto">
            <Link
              href="/"
              onClick={() => {
                scrollRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="my-2 mx-2 w-[100%] sm:min-w-[100px]  hover:text-aqua hover:cursor-pointer hover:underline "
            >
              Home
            </Link>
            <Link
            href="/courses" className="my-2 mx-2 w-[100%] sm:min-w-[100px]  hover:text-aqua hover:cursor-pointer hover:underline ">
              Course
            </Link>
            <Link
            href="/events" className="my-2 mx-2 w-[100%] sm:min-w-[100px]  hover:text-aqua hover:cursor-pointer hover:underline ">
              Events
            </Link>
            <Link
            href="/blogs"
              className="my-2 mx-1 w-[100%] min-w-[100px]  hover:text-aqua hover:cursor-pointer hover:underline "
            >
              Blogs
            </Link>
          </ul>
        </div>

        <div className="hidden md:flex items-center">
          <ul className=" flex flex-col sm:flex-row justify-around text-base font-DM text-[#A2A2A2] w-auto">
            <Link
            href="/" className="mx-2 w-[100%]  hover:text-aqua hover:cursor-pointer hover:underline ">
              Home
            </Link>
            <Link
            href="/courses"
              className="mx-2 w-[100%]  hover:text-aqua hover:cursor-pointer hover:underline "
            >
              Courses
            </Link>
            <Link
            href="/events"
              className="mx-2 w-[100%]  hover:text-aqua hover:cursor-pointer hover:underline "
            >
              Events
            </Link>
            <Link
            href="/blogs"

              className="mx-2 w-[100%]  hover:text-aqua hover:cursor-pointer hover:underline "
            >
              Blogs
            </Link>
            <Link
            href="/about"

              className="mx-2 w-[100%]  hover:text-aqua hover:cursor-pointer hover:underline "
            >
              About
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex">
          <Link
          href="/"
            className="py-2 px-6 rounded-full  bg-gradient-to-br from-[#8BC2FF] to-[#2D55FF] font-semibold hover:bg-white hover:cursor-pointer"
          >
            Join Umojaverse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
