import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CompanyCertifications() {
  const certifications = [
    {
      name: "KGMP",
      description: "한국 식품의약품안전처의 우수 건강기능식품 제조 및 품질관리 기준",
      image: "/placeholder.svg?height=150&width=150&text=KGMP",
      year: "2008년 획득",
    },
    {
      name: "ISO 9001",
      description: "국제 품질 경영 시스템 표준",
      image: "/placeholder.svg?height=150&width=150&text=ISO+9001",
      year: "2013년 획득",
    },
    {
      name: "ISO 22000",
      description: "식품 안전 경영 시스템 국제 표준",
      image: "/placeholder.svg?height=150&width=150&text=ISO+22000",
      year: "2015년 획득",
    },
    {
      name: "HACCP",
      description: "식품 안전 관리 인증 기준",
      image: "/placeholder.svg?height=150&width=150&text=HACCP",
      year: "2014년 획득",
    },
    {
      name: "유기농 인증",
      description: "유기농 원료 사용 및 가공 인증",
      image: "/placeholder.svg?height=150&width=150&text=Organic",
      year: "2019년 획득",
    },
    {
      name: "Non-GMO 인증",
      description: "비유전자변형 원료 사용 인증",
      image: "/placeholder.svg?height=150&width=150&text=Non-GMO",
      year: "2018년 획득",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center gap-4">
            <Image
              src={cert.image || "/placeholder.svg"}
              alt={cert.name}
              width={80}
              height={80}
              className="rounded-md"
            />
            <div>
              <CardTitle>{cert.name}</CardTitle>
              <CardDescription>{cert.year}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{cert.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

