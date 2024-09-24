import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import MacImage from "@/app/public/macbook.png"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              SUA EMPRESA NO DIGITAL
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              The Growth Lab transforma suas ideias em sites incríveis. Rápido, eficiente e personalizado para o seu negócio.
            </p>
          </div>
          <Image src={MacImage} width={500} height={500} alt="Macbook"/>
          <div className="space-x-4">
            <Button asChild>
              <Link href="#contact">Comece Agora</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#services">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}