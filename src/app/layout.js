import '../app/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'


export const metadata = {
title: 'Bastion Technologies — Inteligência em dados e imagens',
description: 'Desenvolvimento de software, ciência de dados e soluções em IA para análise de imagens e dados.',
  icons: {
    icon: "/bastion_icon.ico", // caminho dentro de /public
  },
}


export default function RootLayout({ children }){
return (
<html lang="pt-BR">
<Head />
<body>
<Header />
<main className="min-h-[70vh]">
{children}
</main>
<Footer />
</body>
</html>
)
}