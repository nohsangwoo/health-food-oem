import Image from "next/image"
import Link from "next/link"
import { Award, Beaker, Building, Clock, Globe, ShieldCheck, Users } from "lucide-react"

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompanyTimeline } from "@/components/about/company-timeline"
import { CompanyCertifications } from "@/components/about/company-certifications"

export default function AboutPage() {
  const coreValues = [
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "품질 우선",
      description: "모든 제품과 서비스에서 최고의 품질을 추구합니다.",
    },
    {
      icon: <Beaker className="h-10 w-10" />,
      title: "혁신",
      description: "지속적인 연구와 개발을 통해 혁신적인 솔루션을 제공합니다.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "고객 중심",
      description: "고객의 요구와 기대를 넘어서는 서비스를 제공합니다.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "지속가능성",
      description: "환경과 사회에 대한 책임을 다하는 지속가능한 비즈니스를 추구합니다.",
    },
  ]

  const facilities = [
    {
      title: "연구개발 센터",
      description: "최첨단 장비를 갖춘 R&D 센터에서 혁신적인 제품을 개발합니다.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "생산 시설",
      description: "KGMP 인증을 받은 최신 생산 시설에서 엄격한 품질 관리 하에 제품을 생산합니다.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "품질 관리 연구소",
      description: "첨단 분석 장비를 갖춘 연구소에서 원료부터 완제품까지 철저한 품질 검사를 실시합니다.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const leadership = [
    {
      name: "김지원",
      position: "대표이사",
      bio: "20년 이상의 건강기능식품 산업 경험을 가진 전문가로, 헬스OEM의 비전과 전략을 이끌고 있습니다.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "이민준",
      position: "연구소장",
      bio: "식품공학 박사로 건강기능식품 포뮬레이션 개발 분야에서 다수의 특허를 보유하고 있습니다.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "박서연",
      position: "생산본부장",
      bio: "제약 및 건강기능식품 생산 분야에서 15년 이상의 경력을 가진 생산 및 품질 관리 전문가입니다.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "최준호",
      position: "마케팅 이사",
      bio: "건강기능식품 브랜딩 및 마케팅 전략 수립에 전문성을 가지고 있으며, 글로벌 시장 진출을 주도하고 있습니다.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    건강식품 OEM의 선두주자
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    헬스OEM은 2005년 설립 이래 최고 품질의 건강기능식품을 개발하고 생산하는 OEM 전문 기업입니다. 고객의
                    비전을 현실로 만들기 위해 연구, 개발, 생산, 포장까지 원스톱 솔루션을 제공합니다.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="회사 건물 이미지"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">우리의 미션과 비전</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  건강한 삶을 위한 혁신적인 솔루션을 제공하여 더 나은 세상을 만들어 갑니다
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>미션</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    최고 품질의 건강기능식품을 개발하고 생산하여 사람들의 건강과 웰빙을 증진시키는 데 기여합니다. 과학적
                    연구와 혁신을 통해 고객의 비전을 현실로 만들고, 지속가능한 방식으로 가치를 창출합니다.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>비전</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    건강기능식품 OEM 분야의 글로벌 리더가 되어 혁신적인 제품과 서비스를 통해 전 세계 사람들의 건강한
                    삶에 기여합니다. 지속적인 연구개발과 품질 향상을 통해 산업 표준을 새롭게 정의하고 이끌어 갑니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">핵심 가치</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  헬스OEM의 모든 활동과 의사결정을 이끄는 핵심 가치입니다
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              {coreValues.map((value, index) => (
                <Card key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="text-primary">{value.icon}</div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-center text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">회사 연혁</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  헬스OEM의 성장 과정과 주요 이정표
                </p>
              </div>
            </div>
            <CompanyTimeline />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">시설 및 인프라</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  최첨단 시설에서 최고 품질의 제품을 생산합니다
                </p>
              </div>
            </div>
            <Tabs defaultValue="facilities" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="facilities">연구개발 센터</TabsTrigger>
                <TabsTrigger value="production">생산 시설</TabsTrigger>
                <TabsTrigger value="lab">품질 관리 연구소</TabsTrigger>
              </TabsList>
              {facilities.map((facility, index) => (
                <TabsContent key={index} value={["facilities", "production", "lab"][index]} className="mt-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <Image
                        src={facility.image || "/placeholder.svg"}
                        alt={facility.title}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold">{facility.title}</h3>
                      <p className="text-muted-foreground">{facility.description}</p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Building className="mr-2 h-5 w-5 text-primary" />
                          <span>최첨단 시설 및 장비</span>
                        </li>
                        <li className="flex items-center">
                          <Award className="mr-2 h-5 w-5 text-primary" />
                          <span>국제 표준 인증</span>
                        </li>
                        <li className="flex items-center">
                          <Clock className="mr-2 h-5 w-5 text-primary" />
                          <span>24시간 운영 시스템</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">인증 및 품질 표준</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  헬스OEM은 국내외 다양한 인증을 획득하여 품질과 안전성을 보장합니다
                </p>
              </div>
            </div>
            <CompanyCertifications />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">리더십 팀</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  헬스OEM을 이끄는 전문가들을 소개합니다
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {leadership.map((leader, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{leader.name}</CardTitle>
                    <CardDescription>{leader.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{leader.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">함께 일해보세요</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  헬스OEM과 함께 건강기능식품 산업의 미래를 만들어 가세요
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

