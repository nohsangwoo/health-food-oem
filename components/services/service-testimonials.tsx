import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ServiceTestimonials() {
  const testimonials = [
    {
      quote:
        "헬스OEM과의 협업은 우리 회사의 건강기능식품 라인을 완전히 변화시켰습니다. 전문적인 포뮬레이션 개발부터 품질 관리까지 모든 과정이 완벽했습니다.",
      author: "김지영",
      role: "CEO, 비타웰 주식회사",
      avatar: "/placeholder.svg?height=40&width=40",
      logo: "/placeholder.svg?height=30&width=100&text=VitaWell",
    },
    {
      quote:
        "스타트업으로 시작했을 때 헬스OEM의 유연한 서비스가 큰 도움이 되었습니다. 소량 생산부터 시작해 점차 규모를 키울 수 있었고, 지금은 주요 건강기능식품 브랜드로 성장했습니다.",
      author: "이민준",
      role: "창업자, 뉴트리라이프",
      avatar: "/placeholder.svg?height=40&width=40",
      logo: "/placeholder.svg?height=30&width=100&text=NutriLife",
    },
    {
      quote:
        "해외 시장 진출을 위해 글로벌 규제를 준수하는 제품이 필요했는데, 헬스OEM의 전문적인 컨설팅과 인증 지원 덕분에 성공적으로 수출을 시작할 수 있었습니다.",
      author: "박서연",
      role: "해외사업부장, 퓨어헬스",
      avatar: "/placeholder.svg?height=40&width=40",
      logo: "/placeholder.svg?height=30&width=100&text=PureHealth",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="mb-4">
              <Image
                src={testimonial.logo || "/placeholder.svg"}
                alt={`${testimonial.author} 회사 로고`}
                width={100}
                height={30}
                className="h-8 object-contain"
              />
            </div>
            <p className="mb-6 text-muted-foreground italic">"{testimonial.quote}"</p>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                <AvatarFallback>{testimonial.author.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

