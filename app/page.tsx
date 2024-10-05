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
        if (window.scrollY > 64) {
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
          className="w-full h-16 bg-[#81a64e]" id="navbar">
          <section className="bg-white flex flex-row justify-between transition-all ease-in-out duration-500 w-full fixed" style={{ height: `${navbarHeight}px`, opacity: navbarHeight == 0 ? "0" : "1" }}>
            <Image
              src="/logo-default.png"
              className="w-8 h-8 my-auto mx-4"
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
            <div className="max-w-9xl mx-auto">
              <h1 className="text-center text-white text-5xl xl:text-7xl font-bold py-10">WR Consultoria</h1>
              <div className="flex flex-col xl:grid xl:grid-cols-2">
                <div className="max-w-5xl mx-auto">
                  <Image
                    src="/logo.png"
                    className="w-48 md:w-64 my-8 mx-auto"
                    alt="Logo"
                    width={10000}
                    height={10000}
                  />
                  <h2 className="text-center text-white text-2xl 2xl:text-3xl font-bold py-2 mx-10">Somos uma empresa dedicada a trazer inovação e eficiência para o seu negócio. Nossa missão é ajudar empresas a alcançarem o máximo de produtividade, bem-estar e desempenho com soluções personalizadas e focadas nos resultados. Melhore os resultados da sua empresa agora, de onde você estiver. </h2>
                </div>
                <Image
                  src="/smartphone.png"
                  className="w-128 xl:w-144 mt-4 mx-auto"
                  alt="Logo"
                  width={10000}
                  height={10000}
                />
              </div>
            </div>
          </div>
          <div className="h-fit w-full" id="screen-1">
            <h1 className="text-center text-5xl md:text-7xl font-bold py-10">Serviços</h1>
            <div className="grid grid-cols-2 xl:grid-cols-4 pb-20 mx-2 md:mx-10 2xl:mx-auto max-w-9xl mx-auto">
              <section className="border-2 rounded min-h-80 p-4 m-2 flex flex-col align-center">
                <h4 className="font-semibold text-xl lg:text-3xl text-center">📊</h4>
                <h4 className="font-semibold text-xl lg:text-3xl text-center mb-4">Gestão eficiente</h4>
                <p className="my-auto text-center">Solucionamos desafios de gestão com estratégias inovadoras para otimizar processos, economizar tempo e aumentar a produtividade para garantir uma gestão integrada e eficiente.</p>
              </section>
              <section className="border-2 rounded min-h-80 p-4 m-2 flex flex-col align-center">
                <h4 className="font-semibold text-xl lg:text-3xl text-center">🏥</h4>
                <h4 className="font-semibold text-xl lg:text-3xl text-center mb-4">Saúde Corporativa</h4>
                <p className="my-auto text-center">Oferecemos programas exclusivos de bem-estar corporativo, focados na saúde física e mental dos colaboradores, pois empresas mais saudáveis são mais produtivas e engajadas.</p>
              </section>
              <section className="border-2 rounded min-h-80 p-4 m-2 flex flex-col align-center">
                <h4 className="font-semibold text-xl lg:text-3xl text-center">🧠</h4>
                <h4 className="font-semibold text-xl lg:text-3xl text-center mb-4">Neurociência nos Negócios</h4>
                <p className="my-auto text-center">Aplicamos técnicas neurocientíficas para melhorar a performance empresarial. Com base em estudos de comportamento humano e processos cognitivos, ajudamos empresas a tomarem decisões mais assertivas.</p>
              </section>
              <section className="border-2 rounded min-h-80 p-4 m-2 flex flex-col align-center">
                <h4 className="font-semibold text-xl lg:text-3xl text-center">🤝</h4>
                <h4 className="font-semibold text-xl lg:text-3xl text-center mb-4">Relacionamento com Clientes</h4>
                <p className="my-auto text-center">Aprimoramos a comunicação e o atendimento ao cliente, garantindo experiências positivas e fidelização. Acreditamos que um bom relacionamento é a chave para o sucesso duradouro nos negócios.</p>
              </section>
            </div>
          </div>
          <div className="h-fit w-full bg-[#81a64e] pb-10" id="screen-2">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-center text-white text-5xl md:text-7xl font-bold py-10 mb-6">Sobre nós</h1>
              <div className="flex flex-col xl:grid xl:grid-cols-2 mb-6 xl:mb-16">
                <div className="flex flex-col">
                  <div className="flex flex-col rounded w-96 h-72 xl:w-3/4 xl:h-full xl:max-w-144 my-auto mx-auto relative">
                    <Image
                      src="/raquel.jpeg"
                      className="w-full h-full mx-auto object-cover"
                      alt="Logo"
                      width={10000}
                      height={10000}
                    />
                    <section className="flex flex-col bg-white w-96 xl:w-full mx-auto pb-2">
                      <figcaption className="text-center font-semibold text-2xl mt-2">Raquel Alencar</figcaption>
                      <figcaption className="text-center text-gray-500 font-semibold text-lg mx-2">Especialista em Neurociência do Desenvolvimento Humano</figcaption>
                    </section>
                  </div>
                </div>
                <div className="mx-auto">
                  <h2 className="text-center text-white text-xl xl:text-2xl font-bold py-5 xl:py-10 mx-10 xl:w-4/5 mt-24 xl:mt-0">Raquel Alencar atua como consultora e palestrante em diversas áreas da neurociência, com foco em gestão, neurobranding, neuromarketing e saúde corporativa. Além de desenvolver estratégias para otimizar processos e fortalecer marcas, Raquel oferece treinamento em mindfulness e inteligência emocional, promovendo o bem-estar e a saúde mental dos colaboradores. Sua abordagem combina ciência e práticas inovadoras para impulsionar a eficiência organizacional e o desenvolvimento humano nas empresas.</h2>
                </div>
              </div>
              <div className="flex flex-col-reverse xl:grid xl:grid-cols-2 mb-6 xl:mb-0">
                <div className="mx-auto">
                  <h2 className="text-center text-white text-xl xl:text-2xl font-bold py-5 xl:py-10 mx-10 xl:w-4/5 mt-20 xl:mt-0">
                    Washington Alencar atua como consultor e palestrante com mais de 12 anos de experiência liderando equipes e conduzindo treinamentos. Especialista em gestão de pessoas, liderança e alta performance, sua trajetória é marcada por um compromisso contínuo com o desenvolvimento humano e organizacional. Washington capacita profissionais para alcançar seu máximo potencial, e entre suas experiências, destaca-se o curso “Space Experience” na NASA, focado em estratégias disruptivas e aprendizagem ativa.
                  </h2>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col rounded w-96 h-72 xl:w-3/4 xl:h-full xl:max-w-144 my-auto mx-auto relative">
                    <Image
                      src="/washington.jpeg"
                      className="w-full h-full mx-auto object-cover"
                      alt="Logo"
                      width={10000}
                      height={10000}
                    />
                    <section className="flex flex-col bg-white w-96 xl:w-full mx-auto pb-2">
                      <figcaption className="text-center font-semibold text-2xl mt-2">
                        Washington Alencar
                      </figcaption>
                      <figcaption className="text-center text-gray-500 font-semibold text-lg mx-2">
                        Mestre em Educação | Especialista em Gestão de Pessoas e Liderança
                      </figcaption>
                    </section>
                  </div>
                </div>
              </div>
              <div className="flex flex-col xl:grid xl:grid-cols-2 mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <div className="flex flex-col rounded w-96 h-128 xl:w-3/4 xl:h-4/5 xl:max-w-144 my-auto mx-auto">
                    <Image
                      src="/washington_e_raquel.jpeg"
                      className="w-full h-full mx-auto object-cover border-4 rounded"
                      alt="Logo"
                      width={10000}
                      height={10000}
                    />
                  </div>
                </div>
                <div className="mx-auto flex items-center justify-center">
                  <h2 className="text-center text-white text-xl xl:text-2xl font-bold py-5 mx-10 xl:w-4/5">
                    Washington Alencar e Raquel Alencar são os cofundadores da WR Consultoria, uma empresa renomada na área de desenvolvimento organizacional e de pessoas. Com vasta experiência e conhecimento, eles se destacam como especialistas em transformar a performance e a produtividade das empresas através de pessoas bem capacitadas.
                    A WR Consultoria, sob a liderança de Washington e Raquel, oferece soluções personalizadas que atendem às necessidades específicas de cada cliente. Eles são parceiros estratégicos para qualquer empresa que busca elevar seu nível de desempenho, promovendo um ambiente de trabalho mais eficiente e colaborativo.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="h-fit w-full pb-20" id="screen-4">
            <h1 className="text-center text-5xl md:text-7xl font-bold py-10">Contato</h1>
            <h2 className="text-center text-2xl md:text-4xl font-semiboold py-4">Você pode nos encontrar por aqui:</h2>
            <section className="max-w-9xl flex flex-col">
              <a className="border-4 border-[#81a64e] rounded w-112 xl:w-128 h-32 mx-auto mt-4 bg-[#81a64e] flex items-center cursor-pointer hover:bg-gray-600 transition-all" href="https://wa.me/551533185825?text=Quero%20saber%20mais%20sobre%20como%20a%20WR%20Consultoria%20pode%20me%20ajudar!">
                <Image
                  src="/whatsapp.png"
                  className="w-16 h-16 ml-4"
                  alt="Logo"
                  width={10000}
                  height={10000}
                />
                <div className="text-white font-semibold text-2xl xl:text-3xl mx-auto flex flex-col items-center">
                  <h4>WhatsApp</h4>
                  <p className="text-xl xl:text-2xl">+55 (15) 3318-5825</p>
                </div>
              </a>
              <a className="border-4 border-[#81a64e] rounded w-112 xl:w-128 h-32 mx-auto mt-4 flex items-center cursor-pointer hover:bg-gray-600 transition-all" href="https://www.instagram.com/wr.consultoriaegestao/">
                <Image
                  src="/instagram.png"
                  className="w-16 h-16 ml-4"
                  alt="Logo"
                  width={10000}
                  height={10000}
                />
                <div className="text-[#81a64e] font-semibold text-2xl xl:text-3xl mx-auto flex flex-col items-center">
                  <h4>Instagram</h4>
                  <p className="text-xl xl:text-2xl">@wr.consultoriaegestao</p>
                </div>
              </a>
              <a className="border-4 border-[#81a64e] rounded w-112 xl:w-128 h-32 mx-auto mt-4 bg-[#81a64e] flex items-center cursor-pointer hover:bg-gray-600 transition-all" href="mailto:wr.c.saude@gmail.com.br?subject=Saber%20mais%20sobre%20a%20WR%20Consultoria%20&body=Quero%20saber%20mais%20sobre%20como%20a%20WR%20Consultoria%20pode%20me%20ajudar!">
                <Image
                  src="/email.png"
                  className="w-16 h-12 ml-4"
                  alt="Logo"
                  width={10000}
                  height={10000}
                />
                <div className="text-white font-semibold text-2xl xl:text-3xl mx-auto flex flex-col items-center">
                  <h4>E-mail</h4>
                  <p className="text-xl xl:text-2xl">wr.c.saude@gmail.com</p>
                </div>
              </a>
            </section>
          </div>

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
              className="w-32 h-32 m-4 absolute bottom-0 right-0"
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
