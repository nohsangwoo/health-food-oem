export function CompanyTimeline() {
  const timelineEvents = [
    {
      year: "2005",
      title: "회사 설립",
      description: "헬스OEM 설립, 건강기능식품 OEM 서비스 시작",
    },
    {
      year: "2008",
      title: "KGMP 인증 획득",
      description: "한국 식품의약품안전처로부터 KGMP(Korea Good Manufacturing Practice) 인증 획득",
    },
    {
      year: "2010",
      title: "연구개발 센터 설립",
      description: "최첨단 장비를 갖춘 R&D 센터 설립, 혁신적인 제품 개발 시작",
    },
    {
      year: "2013",
      title: "ISO 9001 인증 획득",
      description: "국제 품질 경영 시스템 표준인 ISO 9001 인증 획득",
    },
    {
      year: "2015",
      title: "생산 시설 확장",
      description: "연간 생산 능력을 두 배로 늘리기 위한 생산 시설 확장",
    },
    {
      year: "2017",
      title: "해외 시장 진출",
      description: "일본, 중국, 동남아시아 등 해외 시장으로 사업 확장",
    },
    {
      year: "2019",
      title: "유기농 인증 획득",
      description: "유기농 건강기능식품 생산을 위한 국제 유기농 인증 획득",
    },
    {
      year: "2021",
      title: "스마트 팩토리 구축",
      description: "AI와 IoT 기술을 활용한 스마트 팩토리 시스템 구축",
    },
    {
      year: "2023",
      title: "ESG 경영 도입",
      description: "환경, 사회, 지배구조를 고려한 ESG 경영 체계 도입",
    },
    {
      year: "현재",
      title: "지속적인 혁신",
      description: "건강기능식품 OEM 분야의 선두주자로서 지속적인 혁신과 성장",
    },
  ]

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border"></div>
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ${
                index === timelineEvents.length - 1 ? "animate-pulse" : ""
              }`}
            ></div>
            <div
              className={`w-5/12 rounded-lg border bg-card p-6 shadow-sm ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
            >
              <div className="mb-2 text-sm font-bold text-primary">{event.year}</div>
              <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

