export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#1D2D3D] text-white flex flex-col items-center justify-center text-center py-24 px-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Transforme dados em decisões com a <span className="text-[#87909F]">Bastion</span>
      </h1>
      <p className="text-[#87909F] max-w-2xl text-lg md:text-xl">
        Consultoria e desenvolvimento em Ciência de Dados, Inteligência Artificial e soluções digitais personalizadas.
      </p>
      <a
        href="#contact"
        className="mt-8 bg-white text-[#1D2D3D] px-6 py-3 rounded-xl font-semibold hover:bg-[#87909F] hover:text-white transition"
      >
        Fale Conosco
      </a>
    </section>
  );
}
