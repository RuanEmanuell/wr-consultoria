import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="bg-[#003366] w-full h-16 flex flex-row justify-between">
        <Image src="/logo.png" className="w-24 h-16 p-4" alt="" width={1000} height={1000}/>
        <div className="m-auto w-1/4 hidden md:flex justify-between px-4">
           <a className="font-medium text-white">Teste</a>
           <a className="font-medium text-white">Teste</a>
           <a className="font-medium text-white">Teste</a>
        </div>
        <div className="flex md:hidden my-auto mx-4 w-8 h-6 flex-col">
          <section className="bg-white h-1/3 w-full"></section>
          <section className="bg-white h-1/3 w-full my-1"></section>
          <section className="bg-white h-1/3 w-full"></section>
        </div>
      </div>
    </div>
  );
}
