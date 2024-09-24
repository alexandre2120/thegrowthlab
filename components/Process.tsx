export default function Process() {
  return (
    <section id="process" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Nosso Processo</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">1</div>
            <h3 className="text-xl font-bold mb-2">Consulta</h3>
            <p className="text-gray-500 dark:text-gray-400">Entendemos suas necessidades e objetivos.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">2</div>
            <h3 className="text-xl font-bold mb-2">Design</h3>
            <p className="text-gray-500 dark:text-gray-400">Criamos um design personalizado para sua marca.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">3</div>
            <h3 className="text-xl font-bold mb-2">Desenvolvimento</h3>
            <p className="text-gray-500 dark:text-gray-400">Construímos seu site com as melhores tecnologias.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">4</div>
            <h3 className="text-xl font-bold mb-2">Lançamento</h3>
            <p className="text-gray-500 dark:text-gray-400">Seu site vai ao ar, pronto para crescer seu negócio.</p>
          </div>
        </div>
      </div>
    </section>
  )
}