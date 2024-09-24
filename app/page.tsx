import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  )
}