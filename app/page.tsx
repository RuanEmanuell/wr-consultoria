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

  function scrollToEnd() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  return (
    <div className="h-fit">
      <div className="flex flex-col">
        <nav
          className="w-full h-16 bg-[#81a64e]" id="navbar">
          <section className="bg-white flex flex-row justify-between w-full fixed top-0 left-0 h-16 z-50">
            <Image
              src="/logo-default.png"
              className="w-8 h-8 my-auto mx-4"
              alt="Logo"
              width={10000}
              height={10000}
            />
            <div className="m-auto w-3/4 max-w-2xl hidden lg:flex justify-between px-4 cursor-pointer">
              <a className="hover:border-2 rounded hover:bg-gray-100 w-full h-12 transition-all ease-in-out flex justify-center items-center" href="#screen-1">
                <p className="font-semibold text-[#81a64e] text-lg">
                  Serviços
                </p>
              </a>
              <a className="hover:border-2 rounded hover:bg-gray-100 w-full h-12 transition-all ease-in-out flex justify-center items-center" href="#screen-2">
                <p className="font-semibold text-[#81a64e] text-lg">
                  Sobre nós
                </p>
              </a>
              <a className="hover:border-2 rounded hover:bg-gray-100 w-full h-12 transition-all ease-in-out flex justify-center items-center" href="#screen-3">
                <p className="font-semibold text-[#81a64e] text-lg">
                  Contato
                </p>
              </a>
              <a className="hover:border-2 rounded hover:bg-gray-100 w-full h-12 transition-all ease-in-out flex justify-center items-center" onClick={() => { scrollToEnd() }}>
                <p className="font-semibold text-[#81a64e] text-lg">
                  Parcerias
                </p>
              </a>
            </div>
            <div className="flex lg:hidden my-auto mx-4 w-8 h-6 flex-col cursor-pointer" onClick={() => setMobileMenuVisible(true)}>
              <section className="bg-[#81a64e] h-1/3 w-full"></section>
              <section className="bg-[#81a64e] h-1/3 w-full my-1"></section>
              <section className="bg-[#81a64e] h-1/3 w-full"></section>
            </div>
          </section>
        </nav>
        <main className="h-fit">
          <div className="h-fit w-full bg-[#81a64e]" id="screen-0">
            <div className="max-w-9xl mx-auto">
              <h1 className="text-center text-white text-5xl md:text-6xl xl:text-7xl font-bold py-10">WR Consultoria</h1>
              <div className="flex flex-col lg:grid lg:grid-cols-2">
                <div className="max-w-5xl mx-auto">
                  <Image
                    src="/logo.png"
                    className="w-36 xl:w-48 my-8 mx-auto"
                    alt="Logo"
                    width={10000}
                    height={10000}
                  />
                  <h2 className="text-center text-white text-lg lg:text-xl xl:text-2xl font-bold py-2 mx-10">Desempenho empresarial é humano antes de ser operacional.
                    A WR Consultoria atua de forma integrada: gestão, liderança, saúde emocional e neurociência aplicada para transformar comportamento, fortalecer cultura e sustentar resultados reais.</h2>
                                    <h2 className="text-center text-white text-lg lg:text-xl xl:text-2xl font-bold py-2 mx-10">Se a sua empresa está crescendo, mas a sua equipe não acompanha… se os conflitos aumentam e a produtividade oscila… o problema não é esforço.</h2>
                  <a className="bg-white rounded-full w-3/4 md:w-96 h-32 mx-auto mt-4 bg-[#81a64e] flex justify-center items-center cursor-pointer text-2xl xl:text-3xl text-[#81a64e] font-bold text-center  hover:bg-gray-600 hover:text-white transition-all" href="https://wa.me/551533185825?text=Quero%20saber%20mais%20sobre%20como%20a%20WR%20Consultoria%20pode%20me%20ajudar!" target="_blank">
                    <h4 className="mx-auto px-5">Agende já sua reunião e conheça a WR</h4>
                  </a>
                </div>
                <Image
                  src="/smartphone.png"
                  className="w-128 md:w-144 mx-auto"
                  alt="Foto de um mão segurando um celular"
                  width={10000}
                  height={10000}
                />
              </div>
            </div>
          </div>
          <div className="h-fit w-full bg-gradient-to-b from-gray-50 to-white" id="screen-1">
            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-center text-4xl md:text-5xl lg:text-7xl font-bold py-16 text-[#81a64e]">Serviços</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20">
                <section className="bg-white border-l-4 border-[#81a64e] rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center mb-6">
                    <h4 className="text-4xl md:text-5xl mr-3">🎤</h4>
                    <h4 className="font-bold text-2xl md:text-3xl text-[#81a64e]">Palestras</h4>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-base">Nossas palestras vão além da inspiração. Elas provocam reflexão, alinham mentalidade e entregam conteúdo prático, aplicável desde o primeiro dia.</p>
                  <div className="bg-[#81a64e] bg-opacity-10 rounded-lg p-4 mb-6">
                    <p className="font-bold text-[#81a64e] mb-3 text-center text-base md:text-base">O que entregamos:</p>
                    <ul className="space-y-2 text-gray-700 text-sm md:text-sm">
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Visão estratégica de negócios</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Tendências, comportamento e performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Conteúdo conectado à realidade da empresa</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Engajamento, clareza e direcionamento</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-[#81a64e] font-semibold text-sm md:text-sm text-center">👉 Ideal para eventos, convenções, encontros de liderança e times que precisam de alinhamento e energia para avançar.</p>
                </section>

                <section className="bg-white border-l-4 border-[#81a64e] rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center mb-6">
                    <h4 className="text-4xl md:text-5xl mr-3">🤝</h4>
                    <h4 className="font-bold text-2xl md:text-3xl text-[#81a64e]">Mentoria</h4>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-base">A mentoria é um espaço seguro e estratégico para quem precisa pensar melhor para decidir melhor.</p>
                  <div className="bg-[#81a64e] bg-opacity-10 rounded-lg p-4 mb-6">
                    <p className="font-bold text-[#81a64e] mb-3 text-center text-base md:text-base">O que entregamos:</p>
                    <ul className="space-y-2 text-gray-700 text-sm md:text-sm">
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Acompanhamento próximo e personalizado</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Clareza de prioridades e tomada de decisão</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Desenvolvimento de líderes e executivos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Visão externa, prática e experiente</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-[#81a64e] font-semibold text-sm md:text-sm text-center">👉 Ideal para empresários e líderes que querem acelerar resultados sem caminhar sozinhos.</p>
                </section>

                <section className="bg-white border-l-4 border-[#81a64e] rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center mb-6">
                    <h4 className="text-4xl md:text-5xl mr-3">🧩</h4>
                    <h4 className="font-bold text-2xl md:text-3xl text-[#81a64e]">Consultoria</h4>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-base">Aqui entramos fundo no negócio. A consultoria da WR é prática, estruturada e orientada à execução.</p>
                  <div className="bg-[#81a64e] bg-opacity-10 rounded-lg p-4 mb-6">
                    <p className="font-bold text-[#81a64e] mb-3 text-center text-base md:text-base">O que entregamos:</p>
                    <ul className="space-y-2 text-gray-700 text-sm md:text-sm">
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Diagnóstico claro do cenário atual</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Estruturação de processos e indicadores</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Planos de ação objetivos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Foco em eficiência, performance e crescimento sustentável</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-[#81a64e] font-semibold text-sm md:text-sm text-center">👉 Ideal para empresas que precisam organizar, escalar ou corrigir rotas com método e consistência.</p>
                </section>

                <section className="bg-white border-l-4 border-[#81a64e] rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center mb-6">
                    <h4 className="text-4xl md:text-5xl mr-3">🧠</h4>
                    <h4 className="font-bold text-2xl md:text-3xl text-[#81a64e]">Conselho</h4>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-base">O conselho é pensado para empresas que já cresceram e agora precisam de visão estratégica, governança e decisões maduras.</p>
                  <div className="bg-[#81a64e] bg-opacity-10 rounded-lg p-4 mb-6">
                    <p className="font-bold text-[#81a64e] mb-3 text-center text-base md:text-base">O que entregamos:</p>
                    <ul className="space-y-2 text-gray-700 text-sm md:text-sm">
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Apoio estratégico recorrente à liderança</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Análise crítica e imparcial das decisões</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Visão de médio e longo prazo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-[#81a64e] mr-2">•</span>
                        <span>Preparação para crescimento, expansão ou movimentos estratégicos</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-[#81a64e] font-semibold text-sm md:text-sm text-center">👉 Ideal para empresários que querem evoluir o negócio com mais segurança, visão e responsabilidade.</p>
                </section>
              </div>
            </div>
          </div>
          <div className="h-fit w-full bg-[#81a64e] pb-4 xl:pb-10" id="screen-2">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-center text-white text-4xl md:text-5xl lg:text-7xl font-bold py-10 md:mb-6">Sobre nós</h1>
              <div className="flex flex-col mb-6 lg:mb-0">
                <div className="mx-auto">
                  <h2 className="text-center text-white text-lg lg:text-xl xl:text-2xl font-bold py-5 lg:py-10 mx-10 lg:mx-auto lg:w-4/5">Washington e Raquel Alencar são cofundadores da WR Consultoria, referência em desenvolvimento organizacional e de pessoas. Especialistas em performance e produtividade, lideram soluções personalizadas que transformam empresas por meio de pessoas bem capacitadas, atuando como parceiros estratégicos para elevar resultados e fortalecer ambientes de trabalho eficientes e colaborativos.</h2>
                </div>
              </div>
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 mb-6 lg:mb-0">
                <div className="mx-auto">
                  <h2 className="text-center text-white text-lg lg:text-xl xl:text-2xl font-bold py-5 lg:py-10 mx-10 lg:mx-auto lg:w-4/5 mt-24 lg:mt-0">Raquel Alencar atua como consultora e palestrante em diversas áreas da neurociência, com foco em gestão, neurobranding, neuromarketing e saúde corporativa. Além de desenvolver estratégias para otimizar processos e fortalecer marcas, Raquel oferece treinamento em mindfulness e inteligência emocional, promovendo o bem-estar e a saúde mental dos colaboradores. Sua abordagem combina ciência e práticas inovadoras para impulsionar a eficiência organizacional e o desenvolvimento humano nas empresas.</h2>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col rounded w-4/5 h-72 sm:w-96 lg:h-full lg:w-11/12 my-auto mx-auto relative">
                    <Image
                      src="/raquel.jpeg"
                      className="w-full h-full mx-auto object-cover"
                      alt="Foto da Raquel Alencar"
                      width={10000}
                      height={10000}
                    />
                    <section className="flex flex-col bg-white w-full xl:w-full mx-auto pb-2">
                      <figcaption className="text-center font-semibold text-2xl mt-2">Raquel Alencar</figcaption>
                      <figcaption className="text-center text-gray-500 font-semibold text-lg mx-2">Especialista em Neurociência do Desenvolvimento Humano</figcaption>
                    </section>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:grid lg:grid-cols-2 mb-10">
                <div className="flex flex-col">
                  <div className="flex flex-col rounded w-4/5 h-72 sm:w-96 lg:h-full lg:w-11/12 my-auto mx-auto relative">
                    <Image
                      src="/washington.jpeg"
                      className="w-full h-full mx-auto object-cover"
                      alt="Foto do Washington Alencar"
                      width={10000}
                      height={10000}
                    />
                    <section className="flex flex-col bg-white w-full xl:w-full mx-auto pb-2">
                      <figcaption className="text-center font-semibold text-2xl mt-2">
                        Washington Alencar
                      </figcaption>
                      <figcaption className="text-center text-gray-500 font-semibold text-lg mx-2">
                        Mestre em Educação | Especialista em Gestão de Pessoas e Liderança
                      </figcaption>
                    </section>
                  </div>
                </div>
                <div className="mx-auto">
                  <h2 className="text-center text-white text-lg lg:text-xl xl:text-2xl font-bold py-5 lg:py-10 mx-10 lg:mx-auto lg:w-4/5 mt-24 lg:mt-0">Washington Alencar atua como consultor e palestrante com mais de 15 anos de experiência liderando equipes e conduzindo treinamentos. Mestre em Educação, é Especialista em gestão de pessoas, liderança e alta performance. Sua trajetória é marcada por um compromisso contínuo com o desenvolvimento humano e organizacional. Washington capacita profissionais para alcançar seu máximo potencial, e entre suas experiências, destaca-se o curso &quot;Space Experience&quot; na NASA, focado em estratégias disruptivas e aprendizagem ativa.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="h-fit w-full pb-20" id="screen-3">
            <h1 className="text-center text-4xl md:text-5xl lg:text-7xl font-bold py-10">Contato</h1>
            <h2 className="text-center text-base md:text-2xl lg:text-4xl font-semiboold py-4">Você pode nos encontrar por aqui:</h2>
            <section className="max-w-9xl flex flex-col mx-auto">
              <a className="border-4 border-[#81a64e] rounded w-4/5 md:w-128 h-32 mx-auto mt-4 bg-[#81a64e] flex items-center cursor-pointer hover:bg-gray-600 transition-all" href="https://wa.me/551533185825?text=Quero%20saber%20mais%20sobre%20como%20a%20WR%20Consultoria%20pode%20me%20ajudar!" target="_blank">
                <Image
                  src="/whatsapp.png"
                  className="w-16 h-16 ml-4"
                  alt="Whatsapp"
                  width={10000}
                  height={10000}
                />
                <div className="text-white font-semibold text-2xl xl:text-3xl mx-auto flex flex-col items-center">
                  <h4>WhatsApp</h4>
                  <p className="text-xl xl:text-2xl">+55 (15) 3318-5825</p>
                </div>
              </a>
              <a className="border-4 border-[#81a64e] rounded w-4/5 md:w-128 h-32 mx-auto mt-4 flex items-center cursor-pointer hover:bg-gray-600 transition-all" href="https://www.instagram.com/wr.consultoriaegestao/" target="_blank">
                <Image
                  src="/instagram.png"
                  className="w-16 h-16 ml-4"
                  alt="Instagram"
                  width={10000}
                  height={10000}
                />
                <div className="text-[#81a64e] font-semibold text-2xl xl:text-3xl mx-auto flex flex-col items-center">
                  <h4>Instagram</h4>
                  <p className="text-xl xl:text-2xl">@wr.consultoriaegestao</p>
                </div>
              </a>
              <a className="border-4 border-[#81a64e] rounded w-4/5 md:w-128 h-32 mx-auto mt-4 bg-[#81a64e] flex items-center cursor-pointer hover:bg-gray-600 transition-all" href="mailto:wr.c.saude@gmail.com.br?subject=Saber%20mais%20sobre%20a%20WR%20Consultoria%20&body=Quero%20saber%20mais%20sobre%20como%20a%20WR%20Consultoria%20pode%20me%20ajudar!" target="_blank">
                <Image
                  src="/email.png"
                  className="w-16 h-12 ml-4"
                  alt="Email"
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
          <div className="h-fit w-full bg-[#81a64e]" id="screen-4">
            <div className="max-w-9xl mx-auto pb-10">
              <h1 className="text-center text-white text-4xl md:text-5xl xl:text-7xl font-bold py-10 mx-2">Algumas empresas parceiras</h1>
              <section className="grid grid-cols-3 mx-auto max-w-5xl">
                <div className="w-36 h-24 md:w-48 md:h-32 mx-auto flex justify-center items-center">
                  <Image
                    src="/educacao-adventista.png"
                    className="w-2/3 h-full"
                    alt="Logo da Educação Adventista"
                    width={10000}
                    height={10000}
                  />
                </div>
                <div className="w-36 h-24 md:w-48 md:h-32 mx-auto flex justify-center items-center">
                  <Image
                    src="/international-school.png"
                    className="w-2/3 h-full"
                    alt="Logo da International School"
                    width={10000}
                    height={10000}
                  />
                </div>
                <div className="w-36 h-24 md:w-48 md:h-32 mx-auto flex justify-center items-center">
                  <Image
                    src="/viaje-brazil.png"
                    className="w-2/3 h-full"
                    alt="Logo da Viaje Brazil"
                    width={10000}
                    height={10000}
                  />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
      {mobileMenuVisible &&
        <div className="w-screen h-screen bg-black bg-opacity-40 absolute top-0 flex justify-end" id="mobile-menu">
          <div className="bg-[#81a64e] w-1/3 min-w-48 max-w-72 h-full flex flex-col cursor-pointer">
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
            <div className="border-b-2 w-full h-16 flex justify-center align-center" onClick={() => { setMobileMenuVisible(false); scrollToEnd() }}>
              <a className="font-semibold text-white text-xl m-auto">
                Parcerias
              </a>
            </div>
            <Image
              src="/logo.png"
              className="w-24 h-24 m-4 absolute bottom-2 right-0"
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
