"use client";
import Image from "next/image";
import logo from "@/public/icon.png";
import MainNav from "../skeleton/main-nav";
import { useEffect, useRef, useState } from "react";
import { quicksand } from "@/app/fonts";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  // let lastScrollY = 0;
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`fixed z-10 top-0 flex flex-row w-full items-center   justify-between  px-2 py-3 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }  flex justify-between items-center w-full bg-background-yellow dark:bg-black border-b border-gray-200 dark:border-gray-800`}>
      <div className="flex items-center">
        <Image
          src={logo}
          alt="The Chrome Green Club Logo"
          width={50}
          height={50}
        />
        <h1 className={`md:text-2xl text-lg font-bold ${quicksand.className}`}>
          The Chrome Green Club
        </h1>
      </div>
      <MainNav className="hidden md:block" />
    </header>
  );
};

export default Header;
