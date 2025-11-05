export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/earth.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-[#1D2D3D]/70" /> {/* camada translúcida */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bastion Technologies</h1>
        <p className="text-lg md:text-xl text-gray-300">
          Inovação em Ciência de Dados, Desenvolvimento de Software e Inteligência Artificial.
        </p>
      </div>
    </section>
  )
}
