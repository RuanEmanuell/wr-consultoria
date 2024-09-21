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
        if(window.scrollY > 64){
          setNavbarHeight(0)
        } else {
          setNavbarHeight(64);
        }
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
              className="w-16 h-16 my-auto"
              alt="Logo"
              width={10000}
              height={10000}
            />
            <div className="m-auto w-1/2 max-w-xl hidden md:flex justify-between px-4">
              <button className="hover:border-2 rounded hover:bg-gray-100 w-1/3 h-12 transition-all ease-in-out">
                <a className="font-semibold text-[#81a64e] text-lg" href="#screen-1">
                  Serviços
                </a>
              </button>
              <button className="hover:border-2 rounded hover:bg-gray-100 w-1/3 h-12 transition-all ease-in-out">
                <a className="font-semibold text-[#81a64e] text-lg" href="#screen-2">
                  Sobre nós
                </a>
              </button>
              <button className="hover:border-2 rounded hover:bg-gray-100 w-1/3 h-12 transition-all ease-in-out">
                <a className="font-semibold text-[#81a64e] text-lg" href="#screen-3">
                  Contato
                </a>
              </button>
            </div>
            <div className="flex md:hidden my-auto mx-4 w-8 h-6 flex-col" onClick={() => setMobileMenuVisible(true)}>
              <section className="bg-[#81a64e] h-1/3 w-full"></section>
              <section className="bg-[#81a64e] h-1/3 w-full my-1"></section>
              <section className="bg-[#81a64e] h-1/3 w-full"></section>
            </div>
          </section>
        </nav>
        <main className="h-fit">
          <div className="h-fit w-full bg-[#81a64e]" id="screen-0">
            <div className="max-w-10xl mx-auto">
              <h1 className="text-center text-white text-5xl md:text-7xl font-bold pt-10">WR Consultoria</h1>
              <div className="flex flex-col 2xl:grid 2xl:grid-cols-2">
                <div className="max-w-5xl mx-auto">
                  <Image
                    src="/logo.png"
                    className="w-48 md:w-96 mt-4 mx-auto"
                    alt="Logo"
                    width={10000}
                    height={10000}
                  />
                  <h2 className="text-center text-white text-2xl md:text-3xl font-bold py-2 mx-10">Somos uma empresa dedicada a trazer inovação e eficiência para o seu negócio. Nossa missão é ajudar empresas a alcançarem o máximo de produtividade, bem-estar e desempenho com soluções personalizadas e focadas nos resultados. Melhore os resultados da sua empresa agora, de onde você estiver. </h2>
                </div>
                <Image
                  src="/smartphone.png"
                  className="w-144 mt-4 mx-auto"
                  alt="Logo"
                  width={10000}
                  height={10000}
                />
              </div>
            </div>
          </div>
          <div className="h-fit w-full" id="screen-1">
            <h1 className="text-center text-5xl md:text-7xl font-bold py-10">Serviços</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 pb-20">
              <section className="border-2 rounded min-h-80 p-4 m-2 flex flex-col align-center">
                <h4 className="font-semibold text-xl lg:text-3xl text-center">📊</h4>
                <h4 className="font-semibold text-xl lg:text-3xl text-center mb-4">Gestão eficiente</h4>
                <p className="my-auto text-center">Solucionamos desafios de gestão com estratégias inovadoras para otimizar processos, economizar tempo e aumentar a produtividade. Nossos especialistas trabalham junto com sua equipe para garantir uma gestão integrada e eficiente, visando resultados de alto impacto.</p>
              </section>
              <section className="border-2 rounded min-h-80 p-4 m-2 flex flex-col align-center">
                <h4 className="font-semibold text-xl lg:text-3xl text-center">🏥</h4>
                <h4 className="font-semibold text-xl lg:text-3xl text-center mb-4">Saúde Corporativa</h4>
                <p className="my-auto text-center">Oferecemos programas exclusivos de bem-estar corporativo, focados na saúde física e mental dos colaboradores. Sabemos que empresas mais saudáveis são mais produtivas e engajadas, e por isso criamos ações que promovem a melhoria do ambiente de trabalho e a qualidade de vida.</p>
              </section>
              <section className="border-2 rounded min-h-80 p-4 m-2 flex flex-col align-center">
                <h4 className="font-semibold text-xl lg:text-3xl text-center">🧠</h4>
                <h4 className="font-semibold text-xl lg:text-3xl text-center mb-4">Neurociência nos Negócios</h4>
                <p className="my-auto text-center">Aplicamos técnicas neurocientíficas para melhorar a performance empresarial. Com base em estudos de comportamento humano e processos cognitivos, ajudamos empresas a tomarem decisões mais assertivas, potencializando a eficiência e gerando resultados mais expressivos.</p>
              </section>
            </div>
          </div>
          <div className="h-screen w-full bg-[#81a64e]" id="screen-2">
          <h1 className="text-center text-white text-5xl md:text-7xl font-bold pt-10">Sobre nós</h1>
          </div>
          <div className="h-screen w-full" id="screen-3"></div>
        </main>
      </div>
      {mobileMenuVisible &&
        <div className="w-screen h-screen bg-black bg-opacity-40 absolute top-0 flex justify-end" id="mobile-menu">
          <div className="bg-[#81a64e] w-1/3 min-w-48 max-w-72 h-full flex flex-col">
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
              className="w-32 h-32 p-4 absolute bottom-0 right-0"
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
