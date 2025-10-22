export default function Footer() {
  return (
    <footer className="bg-[#1D2D3D] text-[#87909F] py-6 text-center text-sm">
      <p>
        © {new Date().getFullYear()} Bastion. Todos os direitos reservados.  
      </p>
      <p className="mt-2 text-[#4B5060]">
        Desenvolvido com tecnologia e inovação.
      </p>
    </footer>
  );
}
