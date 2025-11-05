"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#E8EEF4]/95 backdrop-blur-md text-[#1D2D3D] shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-1 px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/bastion_logo.png"
            alt="Bastion Logo"
            width={80}
            height={24}
            className="h-auto w-auto sm:w-[65px] md:w-[80px]"
            priority
          />
        </Link>

        <nav className="hidden md:flex space-x-4 text-[11px] font-semibold tracking-wide uppercase">
          <Link href="#home" className="hover:text-[#4B5060] transition-colors">
            Início
          </Link>
          <Link href="#services" className="hover:text-[#4B5060] transition-colors">
            Serviços
          </Link>
          <Link href="#about" className="hover:text-[#4B5060] transition-colors">
            Sobre
          </Link>
          <Link href="#contact" className="hover:text-[#4B5060] transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
