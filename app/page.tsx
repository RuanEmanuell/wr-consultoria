"use client"

import Image from "next/image";
import "./globals.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [navBarHeight, setNavbarHeight] = useState<number>(64);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 0){
        setNavbarHeight(0);
      } else {
        setNavbarHeight(64);
      }
    });
  }, []);
  
  return (
    <div className="h-fit">
      <nav className="bg-[#003366] w-full h-16 flex flex-row justify-between transition-all ease-in-out duration-500" style={{height: navBarHeight}}>
        <Image src="/logo.png" className="w-24 h-16 p-4" alt="" width={1000} height={1000} />
        <div className="m-auto w-1/4 hidden md:flex justify-between px-4">
          <a className="font-semibold text-white">Teste</a>
          <a className="font-semibold text-white">Teste</a>
          <a className="font-semibold text-white">Teste</a>
        </div>
        <div className="flex md:hidden my-auto mx-4 w-8 h-6 flex-col">
          <section className="bg-white h-1/3 w-full"></section>
          <section className="bg-white h-1/3 w-full my-1"></section>
          <section className="bg-white h-1/3 w-full"></section>
        </div>
      </nav>
      <main className="h-fit">
        <div className="h-screen w-full screen-0">
        </div>
        <div className="h-screen w-full bg-[#003366] screen-1">
        </div>
      </main>
    </div>
  );
}
