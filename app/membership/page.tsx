import Link from "next/link"
import { Check } from "lucide-react"

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MembershipFAQ } from "@/components/membership/membership-faq"
import { MembershipBenefits } from "@/components/membership/membership-benefits"
import { MembershipFeatures } from "@/components/membership/membership-features"

export default function MembershipPage() {
  const membershipPlans = {
    monthly: [
      {
        name: "스타터",
        description: "소규모 브랜드를 위한 기본 멤버십",
        price: "₩250,000",
        duration: "월",
        features: [
          "기본 포뮬레이션 컨설팅",
          "월 1회 샘플 테스트",
          "기본 품질 보증 서비스",
          "이메일 지원",
          "온라인 리소스 접근",
          "작업 현황 대시보드",
        ],
        cta: "스타터 시작하기",
        popular: false,
      },
      {
        name: "프로페셔널",
        description: "성장하는 브랜드를 위한 고급 멤버십",
        price: "₩500,000",
        duration: "월",
        features: [
          "맞춤형 포뮬레이션 개발",
          "월 3회 샘플 테스트",
          "고급 품질 보증 서비스",
          "우선 생산 일정",
          "전담 계정 관리자",
          "24/7 전화 및 이메일 지원",
          "온라인 리소스 접근",
          "작업 현황 대시보드",
          "전용 자료실 액세스",
        ],
        cta: "프로페셔널 시작하기",
        popular: true,
      },
      {
        name: "엔터프라이즈",
        description: "대규모 브랜드를 위한 프리미엄 멤버십",
        price: "₩1,000,000",
        duration: "월",
        features: [
          "완전 맞춤형 포뮬레이션",
          "무제한 샘플 테스트",
          "프리미엄 품질 보증",
          "최우선 생산 일정",
          "전담 계정 관리팀",
          "24/7 VIP 지원",
          "온라인 리소스 접근",
          "분기별 시장 분석 보고서",
          "연간 전략 컨설팅",
          "작업 현황 대시보드",
          "전용 자료실 액세스",
          "실시간 작업 모니터링",
        ],
        cta: "엔터프라이즈 문의하기",
        popular: false,
      },
    ],
    annual: [
      {
        name: "스타터",
        description: "소규모 브랜드를 위한 기본 멤버십",
        price: "₩2,400,000",
        duration: "년",
        discount: "20% 할인",
        features: [
          "기본 포뮬레이션 컨설팅",
          "월 1회 샘플 테스트",
          "기본 품질 보증 서비스",
          "이메일 지원",
          "온라인 리소스 접근",
          "작업 현황 대시보드",
        ],
        cta: "스타터 시작하기",
        popular: false,
      },
      {
        name: "프로페셔널",
        description: "성장하는 브랜드를 위한 고급 멤버십",
        price: "₩4,800,000",
        duration: "년",
        discount: "20% 할인",
        features: [
          "맞춤형 포뮬레이션 개발",
          "월 3회 샘플 테스트",
          "고급 품질 보증 서비스",
          "우선 생산 일정",
          "전담 계정 관리자",
          "24/7 전화 및 이메일 지원",
          "온라인 리소스 접근",
          "작업 현황 대시보드",
          "전용 자료실 액세스",
        ],
        cta: "프로페셔널 시작하기",
        popular: true,
      },
      {
        name: "엔터프라이즈",
        description: "대규모 브랜드를 위한 프리미엄 멤버십",
        price: "₩9,600,000",
        duration: "년",
        discount: "20% 할인",
        features: [
          "완전 맞춤형 포뮬레이션",
          "무제한 샘플 테스트",
          "프리미엄 품질 보증",
          "최우선 생산 일정",
          "전담 계정 관리팀",
          "24/7 VIP 지원",
          "온라인 리소스 접근",
          "분기별 시장 분석 보고서",
          "연간 전략 컨설팅",
          "작업 현황 대시보드",
          "전용 자료실 액세스",
          "실시간 작업 모니터링",
        ],
        cta: "엔터프라이즈 문의하기",
        popular: false,
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">멤버십 프로그램</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  헬스OEM의 멤버십에 가입하여 프리미엄 서비스와 혜택을 누리세요
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <MembershipFeatures />

            <div className="mx-auto max-w-5xl space-y-8 mt-16">
              <MembershipBenefits />
            </div>

            <div className="mx-auto max-w-5xl space-y-8 mt-16">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">멤버십 플랜</h2>
                <p className="text-muted-foreground">귀사의 요구에 맞는 멤버십 플랜을 선택하세요</p>
              </div>

              <Tabs defaultValue="monthly" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="monthly">월간 결제</TabsTrigger>
                    <TabsTrigger value="annual">연간 결제</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="monthly">
                  <div className="grid gap-6 md:grid-cols-3">
                    {membershipPlans.monthly.map((plan) => (
                      <Card
                        key={plan.name}
                        className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 right-0 -mt-2 -mr-2">
                            <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                              인기
                            </span>
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{plan.name}</CardTitle>
                          <CardDescription>{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <div className="mb-4">
                            <span className="text-3xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground">/{plan.duration}</span>
                          </div>
                          <ul className="space-y-2 text-sm">
                            {plan.features.map((feature) => (
                              <li key={feature} className="flex items-center">
                                <Check className="mr-2 h-4 w-4 text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className={`w-full ${plan.popular ? "" : "variant-outline"}`}
                            variant={plan.popular ? "default" : "outline"}
                          >
                            {plan.cta}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="annual">
                  <div className="grid gap-6 md:grid-cols-3">
                    {membershipPlans.annual.map((plan) => (
                      <Card
                        key={plan.name}
                        className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 right-0 -mt-2 -mr-2">
                            <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                              인기
                            </span>
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{plan.name}</CardTitle>
                          <CardDescription>{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <div className="mb-4">
                            <span className="text-3xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground">/{plan.duration}</span>
                            {plan.discount && (
                              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                {plan.discount}
                              </span>
                            )}
                          </div>
                          <ul className="space-y-2 text-sm">
                            {plan.features.map((feature) => (
                              <li key={feature} className="flex items-center">
                                <Check className="mr-2 h-4 w-4 text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className={`w-full ${plan.popular ? "" : "variant-outline"}`}
                            variant={plan.popular ? "default" : "outline"}
                          >
                            {plan.cta}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">자주 묻는 질문</h2>
                <p className="text-muted-foreground">멤버십에 대한 궁금증을 해결해 드립니다</p>
              </div>
              <MembershipFAQ />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">지금 바로 시작하세요</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  헬스OEM 멤버십에 가입하여 건강기능식품 개발의 새로운 차원을 경험하세요
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">문의하기</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">서비스 알아보기</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

