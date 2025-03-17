import { Beaker, ShieldCheck, Microscope, Truck, Award, Leaf } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Beaker className="h-10 w-10" />,
      title: "고급 포뮬레이션",
      description: "최적의 건강 효과를 위한 과학적 연구에 기반한 최첨단 포뮬레이션",
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "품질 보증",
      description: "모든 제품의 안전성과 효능을 보장하는 엄격한 품질 관리 프로세스",
    },
    {
      icon: <Microscope className="h-10 w-10" />,
      title: "R&D 우수성",
      description: "전담 연구개발팀을 통한 지속적인 혁신",
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "효율적인 생산",
      description: "제품의 적시 납품을 위한 최첨단 제조 시설",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "인증된 표준",
      description: "국제 품질 표준 및 인증 준수",
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "지속 가능한 관행",
      description: "환경을 고려한 생산 방법 및 원료 조달",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">핵심 역량</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              주요 브랜드들이 건강기능식품 제조를 위해 저희를 선택하는 이유를 확인하세요
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="text-primary">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

