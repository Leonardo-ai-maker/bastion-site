"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]); // zoom leve no scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]); // texto desaparece suave

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.video
        style={{ scale }}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/earth.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D2D3D]/80 via-[#1D2D3D]/40 to-[#1D2D3D]/90" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white drop-shadow-lg">
          Bastion Technologies
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Inovação em Ciência de Dados, Desenvolvimento de Software e Inteligência Artificial.
        </p>
      </motion.div>
    </section>
  );
}
