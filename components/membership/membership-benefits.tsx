import { Beaker, Award, Clock, Users, Shield, Headphones } from "lucide-react"

export function MembershipBenefits() {
  const benefits = [
    {
      icon: <Beaker className="h-10 w-10" />,
      title: "우선 제품 개발",
      description: "멤버십 회원은 제품 개발 및 포뮬레이션에 우선권을 가집니다.",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "독점 혜택",
      description: "멤버십 등급에 따른 특별 할인 및 독점 서비스를 제공합니다.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "빠른 생산 일정",
      description: "멤버십 회원은 생산 일정에서 우선순위를 받습니다.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "전담 지원팀",
      description: "전문 계정 관리자가 귀사의 모든 요구 사항을 지원합니다.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "품질 보증",
      description: "강화된 품질 관리 및 테스트 서비스를 제공합니다.",
    },
    {
      icon: <Headphones className="h-10 w-10" />,
      title: "24/7 지원",
      description: "언제든지 전문가의 도움을 받을 수 있는 지원 시스템을 제공합니다.",
    },
  ]

  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center space-y-2 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter">멤버십 혜택</h2>
        <p className="text-muted-foreground">헬스OEM 멤버십에 가입하면 다음과 같은 혜택을 누릴 수 있습니다</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="text-primary">{benefit.icon}</div>
            <h3 className="text-xl font-bold">{benefit.title}</h3>
            <p className="text-center text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

