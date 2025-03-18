import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Beaker,
  Box,
  CheckCircle,
  ClipboardCheck,
  FlaskRoundIcon as Flask,
  Microscope,
  Truck,
} from "lucide-react"

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServiceProcess } from "@/components/services/service-process"
import { ServiceFAQ } from "@/components/services/service-faq"
import { ServiceTestimonials } from "@/components/services/service-testimonials"

export default function ServicesPage() {
  const services = [
    {
      icon: <Beaker className="h-10 w-10" />,
      title: "제품 개발 및 포뮬레이션",
      description:
        "고객의 요구사항에 맞는 맞춤형 건강기능식품을 개발합니다. 최신 연구와 트렌드를 반영한 혁신적인 포뮬레이션을 제공합니다.",
      features: [
        "맞춤형 포뮬레이션 개발",
        "기존 제품 개선",
        "트렌드 및 시장 분석",
        "원료 선정 및 소싱",
        "효능 및 안정성 테스트",
      ],
    },
    {
      icon: <Flask className="h-10 w-10" />,
      title: "생산 및 제조",
      description:
        "KGMP 인증 시설에서 엄격한 품질 관리 하에 제품을 생산합니다. 소량 생산부터 대량 생산까지 다양한 규모의 제조 서비스를 제공합니다.",
      features: [
        "KGMP 인증 시설",
        "소량 및 대량 생산",
        "다양한 제형 생산 (정제, 캡슐, 파우더, 액상 등)",
        "엄격한 품질 관리",
        "효율적인 생산 일정 관리",
      ],
    },
    {
      icon: <Box className="h-10 w-10" />,
      title: "포장 및 디자인",
      description:
        "브랜드 아이덴티티를 반영한 맞춤형 포장 디자인을 제공합니다. 다양한 포장 옵션과 친환경 포장 솔루션을 제안합니다.",
      features: [
        "맞춤형 포장 디자인",
        "라벨 디자인 및 인쇄",
        "다양한 포장 옵션",
        "친환경 포장 솔루션",
        "규제 준수 라벨링",
      ],
    },
    {
      icon: <Microscope className="h-10 w-10" />,
      title: "품질 관리 및 테스트",
      description:
        "원료부터 완제품까지 철저한 품질 검사를 실시합니다. 미생물 검사, 중금속 검사, 영양 성분 분석 등 다양한 테스트를 제공합니다.",
      features: ["원료 품질 검사", "미생물 및 오염물질 검사", "영양 성분 분석", "안정성 테스트", "유통기한 설정"],
    },
    {
      icon: <ClipboardCheck className="h-10 w-10" />,
      title: "규제 및 인증 지원",
      description:
        "국내외 건강기능식품 관련 규제 준수를 위한 컨설팅을 제공합니다. 인증 획득을 위한 서류 준비 및 절차를 지원합니다.",
      features: [
        "식약처 인허가 지원",
        "건강기능식품 인증 지원",
        "해외 수출을 위한 규제 준수",
        "인증 서류 준비",
        "규제 변경 사항 모니터링",
      ],
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "물류 및 유통",
      description:
        "완제품의 안전한 보관 및 배송을 위한 물류 서비스를 제공합니다. 국내외 유통 네트워크를 활용한 효율적인 유통 시스템을 구축합니다.",
      features: [
        "온도 및 습도 관리 보관",
        "국내외 배송 서비스",
        "재고 관리 시스템",
        "유통기한 관리",
        "실시간 배송 추적",
      ],
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
                    건강기능식품 OEM 서비스
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    아이디어 구상부터 완제품 생산까지, 건강기능식품 개발의 모든 단계를 지원하는 원스톱 OEM 솔루션을
                    제공합니다.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/contact">문의하기</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/products">제품 보기</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/products/13.webp?height=550&width=550"
                  width={550}
                  height={550}
                  alt="서비스 이미지"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">서비스 소개</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  헬스OEM은 건강기능식품 개발 및 생산의 모든 단계를 지원하는 종합적인 OEM 서비스를 제공합니다
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="mb-2 text-primary">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="w-full">
                      <Link href="/contact" className="flex items-center justify-center">
                        자세히 알아보기
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">서비스 프로세스</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  아이디어 구상부터 완제품 출시까지의 과정을 안내합니다
                </p>
              </div>
            </div>
            <ServiceProcess />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">맞춤형 솔루션</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  다양한 요구사항에 맞는 맞춤형 OEM 솔루션을 제공합니다
                </p>
              </div>
            </div>
            <Tabs defaultValue="startups" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="startups">스타트업</TabsTrigger>
                <TabsTrigger value="growing">성장 기업</TabsTrigger>
                <TabsTrigger value="enterprise">대기업</TabsTrigger>
              </TabsList>
              <TabsContent value="startups" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="스타트업 솔루션"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">스타트업을 위한 솔루션</h3>
                    <p className="text-muted-foreground">
                      제한된 예산으로 시작하는 스타트업을 위한 맞춤형 솔루션을 제공합니다. 소량 생산부터 시작하여
                      비즈니스 성장에 따라 확장할 수 있는 유연한 서비스를 제공합니다.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>소량 생산 옵션</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>비용 효율적인 포뮬레이션</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>시장 진입 전략 컨설팅</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>단계적 확장 계획</span>
                      </li>
                    </ul>
                    <Button asChild className="w-fit">
                      <Link href="/contact">문의하기</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="growing" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="성장 기업 솔루션"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">성장 기업을 위한 솔루션</h3>
                    <p className="text-muted-foreground">
                      사업 확장 단계에 있는 기업을 위한 맞춤형 솔루션을 제공합니다. 제품 라인 확대, 생산량 증가, 품질
                      향상을 위한 종합적인 서비스를 제공합니다.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>제품 라인 확장 전략</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>중간 규모 생산 최적화</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>품질 관리 시스템 강화</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>시장 확대를 위한 인증 지원</span>
                      </li>
                    </ul>
                    <Button asChild className="w-fit">
                      <Link href="/contact">문의하기</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="enterprise" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="대기업 솔루션"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">대기업을 위한 솔루션</h3>
                    <p className="text-muted-foreground">
                      대규모 생산과 글로벌 시장 진출을 목표로 하는 대기업을 위한 맞춤형 솔루션을 제공합니다. 최첨단
                      기술과 글로벌 표준을 적용한 프리미엄 서비스를 제공합니다.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>대량 생산 시스템</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>글로벌 규제 준수</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>첨단 R&D 협력</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>글로벌 공급망 관리</span>
                      </li>
                    </ul>
                    <Button asChild className="w-fit">
                      <Link href="/contact">문의하기</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">고객 후기</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  헬스OEM 서비스를 이용한 고객들의 생생한 후기를 확인하세요
                </p>
              </div>
            </div>
            <ServiceTestimonials />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">자주 묻는 질문</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  OEM 서비스에 대한 궁금증을 해결해 드립니다
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl">
              <ServiceFAQ />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">지금 바로 시작하세요</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  헬스OEM과 함께 건강기능식품 개발의 새로운 여정을 시작하세요
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">문의하기</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/products">제품 보기</Link>
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

