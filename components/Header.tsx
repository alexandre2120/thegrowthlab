import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/app/public/logo.png"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={Logo}
                alt="The Growth Lab Logo"
                width={200}
                height={200}
                style={{ objectFit: "contain", width: 200, height: 200 }}

              />
            </Link>
          </div>
          <nav className="text-gray-800 hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link scroll href="#services">Serviços</Link>
            <Link scroll href="#process">Processo</Link>
            <Link scroll href="#portfolio">Portfólio</Link>
            <Link scroll href="#testimonials">Depoimentos</Link>
          </nav>
          <div className="flex items-center">
            <Button asChild>
              <Link href="#contact">Contate-nos</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}