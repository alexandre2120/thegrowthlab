import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-black text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p>&copy; 2023 The Growth Lab. Todos os direitos reservados.</p>
          </div>
          <nav className="flex gap-4">
            <Link href="#" className="hover:text-white">Termos</Link>
            <Link href="#" className="hover:text-white">Privacidade</Link>
            <Link href="#" className="hover:text-white">Contato</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}