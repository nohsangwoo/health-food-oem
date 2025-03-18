import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "헬스OEM과의 협업은 우리 제품 라인을 변화시켰습니다. 포뮬레이션과 품질 관리에 대한 그들의 전문성은 업계에서 타의 추종을 불허합니다.",
      author: "김지영",
      role: "CEO, 비타웰 주식회사",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "헬스OEM 팀은 일관되게 예산 내에서 정시에 우수한 제품을 제공합니다. 그들의 세심한 주의가 그들을 차별화합니다.",
      author: "이민준",
      role: "제품 이사, 뉴트리라이프",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "컨셉에서 판매까지, 헬스OEM은 우리의 성공에 없어서는 안 될 파트너였습니다. 그들의 혁신적인 접근 방식은 우리가 트렌드를 앞서 나가는 데 도움이 되었습니다.",
      author: "박서연",
      role: "창립자, 퓨어헬스 보충제",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">고객 후기</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              건강기능식품 제조를 저희에 믿고 맡긴 브랜드들의 이야기를 들어보세요
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      width={40}
                      height={40}
                      alt={`${testimonial.author} 아바타`}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

