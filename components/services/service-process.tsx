import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServiceProcess() {
  const processSteps = [
    {
      step: "01",
      title: "초기 상담",
      description:
        "고객의 요구사항, 목표, 예산, 일정 등을 파악하는 초기 미팅을 진행합니다. 이 단계에서 프로젝트의 범위와 방향성을 설정합니다.",
    },
    {
      step: "02",
      title: "제품 기획 및 컨셉 개발",
      description:
        "시장 조사와 트렌드 분석을 바탕으로 제품 컨셉을 개발합니다. 타겟 고객, 포지셔닝, 차별화 전략 등을 포함한 제품 기획을 수립합니다.",
    },
    {
      step: "03",
      title: "포뮬레이션 개발",
      description:
        "R&D 팀이 고객의 요구사항에 맞는 포뮬레이션을 개발합니다. 원료 선정, 배합 비율 설정, 시제품 제작 등의 과정을 거칩니다.",
    },
    {
      step: "04",
      title: "시제품 테스트 및 평가",
      description:
        "개발된 시제품에 대한 다양한 테스트를 진행합니다. 안정성, 효능, 관능 평가 등을 통해 제품의 품질을 검증합니다.",
    },
    {
      step: "05",
      title: "포장 디자인 및 개발",
      description:
        "브랜드 아이덴티티를 반영한 포장 디자인을 개발합니다. 라벨 디자인, 포장 재질 선정, 규제 준수 사항 등을 고려합니다.",
    },
    {
      step: "06",
      title: "생산 및 품질 관리",
      description:
        "KGMP 인증 시설에서 엄격한 품질 관리 하에 제품을 생산합니다. 원료 입고부터 완제품 출하까지 모든 단계에서 품질을 관리합니다.",
    },
    {
      step: "07",
      title: "인증 및 규제 준수",
      description:
        "국내외 건강기능식품 관련 규제 준수를 위한 인증 획득을 지원합니다. 필요한 서류 준비 및 인증 절차를 대행합니다.",
    },
    {
      step: "08",
      title: "출하 및 사후 관리",
      description:
        "완제품 출하 후에도 지속적인 품질 모니터링과 고객 지원을 제공합니다. 제품 개선 및 신제품 개발을 위한 피드백을 수집합니다.",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step, index) => (
        <Card key={index} className="relative overflow-hidden">
          <div className="absolute -right-4 -top-4 text-9xl font-bold text-muted-foreground opacity-10">
            {step.step}
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                {step.step}
              </span>
              {step.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{step.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

