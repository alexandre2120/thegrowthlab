'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Timer } from 'lucide-react'
import Link from 'next/link'

export default function PromoComponent() {
    const initialTime = 5 * 60 // 5 minutes in seconds
    const [timeLeft, setTimeLeft] = useState<number>(initialTime)
    const [isClient, setIsClient] = useState<boolean>(false)

    useEffect(() => {
        // Confirma que estamos no cliente (navegador)
        setIsClient(true)
        
        if (typeof window !== 'undefined') {
            const savedTime = localStorage.getItem('promoTimeLeft')
            if (savedTime) {
                setTimeLeft(parseInt(savedTime))
            }
        }
    }, [])

    useEffect(() => {
        if (!isClient || timeLeft <= 0) return

        // Salva o tempo restante no localStorage
        localStorage.setItem('promoTimeLeft', timeLeft.toString())

        // Configura o timer para diminuir o tempo a cada segundo
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1)
        }, 1000)

        // Limpa o timer ao desmontar o componente
        return () => clearInterval(timer)
    }, [timeLeft, isClient])

    // Função para formatar o tempo em minutos e segundos
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    // Se o tempo acabou, não renderiza a seção
    if (timeLeft <= 0) return null

    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <Card className="w-full max-w-md mx-auto">
                <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle className="text-2xl font-bold text-center">Oferta Especial!</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                        <span className="text-4xl font-bold text-primary">30% OFF</span>
                    </div>
                    <div className="text-center">
                        <p className="text-lg">Informe o voucher:</p>
                        <Badge variant="secondary" className="text-xl px-4 py-2 mt-2">EMPRESA30</Badge>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                        <Timer className="w-5 h-5" />
                        <span className="text-lg font-semibold">{formatTime(timeLeft)}</span>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className='w-full'>
                        <Link href="https://api.whatsapp.com/send/?phone=351935602668&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0">
                            <Button className="w-full text-lg" size="lg">
                                Entrar em Contato
                            </Button>
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </section>
    )
}
