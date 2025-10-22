const services = [
  {
    title: "Consultoria em Ciência de Dados",
    description:
      "Transforme seus dados em vantagem competitiva com modelagem estatística, visualizações e insights estratégicos.",
  },
  {
    title: "Automação e Excel Avançado / Power BI",
    description:
      "Otimização de processos, relatórios dinâmicos e dashboards interativos para tomadas de decisão eficientes.",
  },
  {
    title: "Desenvolvimento de Software",
    description:
      "Aplicações modernas e sob medida, com foco em desempenho, escalabilidade e experiência do usuário.",
  },
  {
    title: "Soluções com Inteligência Artificial",
    description:
      "Integre IA aos seus produtos e serviços, desde chatbots até modelos de predição sob medida.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F8F9FB] text-[#1D2D3D] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[#4B5060] text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
