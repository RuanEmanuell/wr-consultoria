"use client";

import Image from "next/image";
import "./globals.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);

  useEffect(() => {
    if (mobileMenuVisible) {
      document.querySelector("body")!.style.overflow = "hidden";
    } else {
      document.querySelector("body")!.style.overflow = "auto";
    }
  }, [mobileMenuVisible]);

  return (
    <div className="h-fit">
      <div className="flex flex-col">
        <nav
          className="bg-[#003366] w-full flex flex-row justify-between transition-all ease-in-out duration-500">
          <Image
            src="/logo.png"
            className="w-24 h-16 p-4"
            alt="Logo"
            width={1000}
            height={1000}
          />
          <div className="m-auto w-1/2 max-w-xl hidden md:flex justify-between px-4">
            <a className="font-semibold text-white" href="#screen-1">
              Serviços
            </a>
            <a className="font-semibold text-white" href="#screen-2">
              Sobre nós
            </a>
            <a className="font-semibold text-white" href="#screen-3">
              Contato
            </a>
          </div>
          <div className="flex md:hidden my-auto mx-4 w-8 h-6 flex-col" onClick={() => setMobileMenuVisible(true)}>
            <section className="bg-white h-1/3 w-full"></section>
            <section className="bg-white h-1/3 w-full my-1"></section>
            <section className="bg-white h-1/3 w-full"></section>
          </div>
        </nav>
        <main className="h-fit">
          <div className="h-screen w-full" id="screen-0">
            <p>a</p>
          </div>
          <div className="h-screen w-full bg-[#003366]" id="screen-1"></div>
          <div className="h-screen w-full" id="screen-2"></div>
          <div className="h-screen w-full bg-[#003366]" id="screen-3"></div>
        </main>
      </div>
      {mobileMenuVisible &&
        <div className="w-screen h-screen bg-black bg-opacity-40 absolute top-0" id="mobile-menu" onClick={() => setMobileMenuVisible(false)}>

        </div>
      }
    </div>
  );
}
