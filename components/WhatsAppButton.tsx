import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import WhatsAppIcon from '@/app/public/whatsapp.png'

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export default function WhatsAppButton({ phoneNumber, message = "Olá! Gostaria de saber mais sobre seus serviços." }: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <Button asChild className="bg-green-500 hover:bg-green-600 text-white rounded-full fixed bottom-4 right-4 p-4 shadow-lg z-50">
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp">
        <Image src={WhatsAppIcon} width={20} height={20} alt="WhatsApp"/>
      </Link> 
    </Button>
  )
}