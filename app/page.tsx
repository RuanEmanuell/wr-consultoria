"use client";

import Image from "next/image";
import "./globals.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [navbarHeight, setNavbarHeight] = useState<number>(64);
  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setTimeout(() => {
        window.scrollY > 64 ? setNavbarHeight(0) : setNavbarHeight(64);
      }, 200);
    });
  }, []);

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
          className="w-full h-16" id="navbar">
          <section className="bg-white flex flex-row justify-between transition-all ease-in-out duration-500 w-full fixed" style={{ height: `${navbarHeight}px`, opacity: navbarHeight == 0 ? "0" : "1" }}>
            <Image
              src="/logo-default.png"
              className="w-24 h-16 p-4"
              alt="Logo"
              width={10000}
              height={10000}
            />
            <div className="m-auto w-1/2 max-w-xl hidden md:flex justify-between px-4">
              <button className="hover:border-2 rounded hover:bg-gray-100 w-1/3 h-12 transition-all ease-in-out">
                <a className="font-semibold text-[#003366] text-lg" href="#screen-1">
                  Serviços
                </a>
              </button>
              <button className="hover:border-2 rounded hover:bg-gray-100 w-1/3 h-12 transition-all ease-in-out">
              <a className="font-semibold text-[#003366] text-lg" href="#screen-2">
                Sobre nós
              </a>
              </button>
              <button className="hover:border-2 rounded hover:bg-gray-100 w-1/3 h-12 transition-all ease-in-out">
              <a className="font-semibold text-[#003366] text-lg" href="#screen-3">
                Contato
              </a>
              </button>
            </div>
            <div className="flex md:hidden my-auto mx-4 w-8 h-6 flex-col" onClick={() => setMobileMenuVisible(true)}>
              <section className="bg-[#003366] h-1/3 w-full"></section>
              <section className="bg-[#003366] h-1/3 w-full my-1"></section>
              <section className="bg-[#003366] h-1/3 w-full"></section>
            </div>
          </section>
        </nav>
        <main className="h-fit">
          <div className="h-screen w-full bg-[#003366]" id="screen-0">
            <h1 className="text-center text-white text-5xl font-bold pt-16">Lorem ipsum dolor sit amet</h1>
            <Image
              src="/logo.png"
              className="w-96 mt-4 mx-auto"
              alt="Logo"
              width={10000}
              height={10000}
            />
            <h2 className="text-center text-white text-3xl font-bold pt-16 mx-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu eros urna. Maecenas dapibus elementum suscipit. Aenean eget pulvinar ex. Donec maximus vestibulum tristique. Nam nisl nibh, scelerisque ut dui vitae, scelerisque euismod lacus. Sed pretium quam viverra velit semper rhoncus. Duis blandit, erat a mollis luctus, risus enim tincidunt dolor, vitae mollis orci neque sed ligula. Aenean lacus mi, sagittis sed massa eget, ornare malesuada nunc. Vivamus consequat diam tincidunt libero consectetur ultrices. Maecenas blandit dui ac lectus congue molestie. </h2>
          </div>
          <div className="h-screen w-full" id="screen-1"></div>
          <div className="h-screen w-full bg-[#003366]" id="screen-2"></div>
          <div className="h-screen w-full" id="screen-3"></div>
        </main>
      </div>
      {mobileMenuVisible &&
        <div className="w-screen h-screen bg-black bg-opacity-40 absolute top-0 flex justify-end" id="mobile-menu">
          <div className="bg-[#003366] w-1/3 min-w-48 max-w-72 h-full flex flex-col">
            <div className="border-y-2 w-full h-16 flex justify-center align-center" onClick={() => setMobileMenuVisible(false)}>
              <a className="font-semibold text-white text-xl m-auto" href="#screen-1">
                Serviços
              </a>
            </div>
            <div className="border-b-2 w-full h-16 flex justify-center align-center" onClick={() => setMobileMenuVisible(false)}>
              <a className="font-semibold text-white text-xl m-auto" href="#screen-2">
                Sobre nós
              </a>
            </div>
            <div className="border-b-2 w-full h-16 flex justify-center align-center" onClick={() => setMobileMenuVisible(false)}>
              <a className="font-semibold text-white text-xl m-auto" href="#screen-3">
                Contato
              </a>
            </div>
            <Image
              src="/logo.png"
              className="w-24 h-16 p-4 absolute bottom-0 right-0"
              alt="Logo"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      }
    </div>
  );
}
