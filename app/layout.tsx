import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Growth Lab',
  description: 'Criamos sites rápidos e eficientes para empresas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className='scroll-smooth'>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics/>
        <SpeedInsights/>
        <WhatsAppButton phoneNumber="351935602668" />
      </body>
    </html>
  )
}