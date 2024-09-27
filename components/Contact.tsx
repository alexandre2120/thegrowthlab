import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className=" text-gray-800 text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Entre em Contato</h2>
        <form className="max-w-md mx-auto space-y-4">
          <Input placeholder="Seu Nome" />
          <Input type="email" placeholder="Seu Email" />
          <Textarea placeholder="Nome da sua empresa" />
          <Textarea placeholder="Sua Mensagem" />
          <Button type="submit" className="w-full">Enviar Mensagem</Button>
        </form>
      </div>
    </section>
  )
}