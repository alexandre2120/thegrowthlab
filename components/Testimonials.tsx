import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">O Que Nossos Clientes Dizem</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>João Silva</CardTitle>
            </CardHeader>
            <CardContent>
              "The Growth Lab transformou completamente nosso site. Agora temos mais clientes do que nunca!"
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Maria Santos</CardTitle>
            </CardHeader>
            <CardContent>
              "Profissionais excepcionais. Entregaram nosso projeto antes do prazo e superaram nossas expectativas."
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Carlos Oliveira</CardTitle>
            </CardHeader>
            <CardContent>
              "O melhor investimento que fizemos para nossa empresa. Recomendo The Growth Lab a todos!"
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}