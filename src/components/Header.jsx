"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#33485F]/90 backdrop-blur-sm text-white shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-1.5 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/bastion_logo.png"
            alt="Bastion Logo"
            width={100}   // 🔹 menor
            height={30}
            className="h-auto w-auto sm:w-[80px] md:w-[100px]"
            priority
          />
        </Link>

        <nav className="hidden md:flex space-x-5 text-xs font-medium tracking-wide uppercase">
          <Link href="#home" className="hover:text-[#87909F] transition-colors">
            Início
          </Link>
          <Link href="#services" className="hover:text-[#87909F] transition-colors">
            Serviços
          </Link>
          <Link href="#about" className="hover:text-[#87909F] transition-colors">
            Sobre
          </Link>
          <Link href="#contact" className="hover:text-[#87909F] transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
