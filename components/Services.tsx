import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Zap, Palette } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 text-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Serviços</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Globe className="w-8 h-8 mb-2" />
              <CardTitle>Hospedagem Rápida e Segura</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Mantenha seu site no ar com servidores de alta performance, garantindo disponibilidade e segurança para o seu negócio, sem dores de cabeça.
              </CardDescription>
            </CardContent>
          </Card>   
          <Card>
            <CardHeader>
              <Zap className="w-8 h-8 mb-2" />
              <CardTitle>Alto Desempenho</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Nossos sites são otimizados para oferecer velocidade e desempenho superiores, garantindo uma experiência ágil e fluida para seus visitantes.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Palette className="w-8 h-8 mb-2" />
              <CardTitle>Design Personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Criamos identidades visuais exclusivas e layouts modernos, alinhados com a essência da sua marca, para impressionar e cativar o seu público.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
