"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#1D2D3D]/90 backdrop-blur-md text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/bastion_logo.png"
            alt="Bastion Logo"
            width={160}   // ⬅️ aumente o tamanho da logo
            height={20}
            className="h-auto w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm tracking-wide uppercase">
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
