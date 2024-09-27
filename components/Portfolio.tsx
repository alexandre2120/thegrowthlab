import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface SiteProps {
  name: string;
  imageUrl: string;
  linkUrl: string
}

const sites: SiteProps[] = [
  { name: "Padaria Dona Maria", imageUrl: "https://i.imgur.com/ZhVHKgY.png", linkUrl: "https://padariadonamaria.vercel.app/" },
  { name: "Integraninja", imageUrl: "https://i.imgur.com/Br3idqP.png", linkUrl: "https://novosite-integraninja.vercel.app/" },
  { name: "Ginásio Growth", imageUrl: "https://i.imgur.com/DaiDiJE.png", linkUrl: "https://ginasio-growth.vercel.app/" }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 text-black bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Nosso Portfólio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((site, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{site.name}</CardTitle>
                  <div>
                    <Link href={site.linkUrl} target="_blank">
                      <Button>Acessar</Button>
                    </Link>
                  </div>
                </div>

              </CardHeader>
              <CardContent className="p-0">
                <Image
                  src={site.imageUrl}
                  alt={`Captura de tela de ${site.name}`}
                  width={600}
                  height={400}
                  layout="responsive"
                  className="object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}