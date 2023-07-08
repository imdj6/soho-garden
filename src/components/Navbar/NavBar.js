"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "../Container.js";
import Logo from "./Logo.js";
import UserMenu from "./UserMenu.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" w-full bg-black shadow-sm">
      <div className="py-4 sticky top-0 z-10 bg-black px-2 ">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <UserMenu />
          </div>
        </Container>
      </div>
      <div className="relative font-[poppins]">
        <img
          src="/assets/Hero.JPG"
          className="h-[70vh] w-[100vw]  object-cover md:h-[70vh] md:w-full md:object-cover "
          alt="heroimage"
        />
        <div className="mt-100 absolute bottom-24 mx-9">
          <div className="text-white text-2xl md:text-7xl font-bold tracking-widest font-[poppins]">
            <span className="text-[#CF211A] font-bold text-3xl md:text-7xl">
              BEST
            </span>{" "}
            CAFE
          </div>
          <div className="text-2xl md:text-7xl text-white font-bold tracking-widest mt-2">
            IN RISHIKESH
          </div>
          <div className="flex space-x-10">
            <div className="mt-10">
              {/* <Button
                active
                buttonText="GET A QUOTE"
                icon={BsChatLeftQuoteFill}
              /> */}
            </div>
            <div className="mt-10">
              {/* <Button buttonText="CONTACT SELLER" icon={MdContactPhone} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
