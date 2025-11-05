"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#3A4C60] via-[#1D2D3D] to-[#1D2D3D] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        <div className="flex items-center space-x-3">
          <div className="p-[3px] rounded-md bg-gradient-to-r from-[#87909F] to-transparent">
            <Image
              src="/bastion_logo.png"
              alt="Bastion Logo"
              width={80}
              height={80}
              className="h-auto w-auto rounded-sm"
              priority
            />
          </div>
          <span className="text-lg font-semibold tracking-wide">Bastion</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm uppercase">
          <Link href="#home" className="hover:text-[#87909F] transition">Início</Link>
          <Link href="#services" className="hover:text-[#87909F] transition">Serviços</Link>
          <Link href="#about" className="hover:text-[#87909F] transition">Sobre</Link>
          <Link href="#contact" className="hover:text-[#87909F] transition">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
