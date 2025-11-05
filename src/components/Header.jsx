"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#1D2D3D] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        <div className="flex items-center">
          <div className="p-[4px] rounded-md bg-white">
            <Image
              src="/bastion_logo.png"
              alt="Bastion Logo"
              width={70}
              height={70}
              className="h-auto w-auto rounded-sm"
              priority
            />
          </div>
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
