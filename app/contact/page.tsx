"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Building, Clock, Mail, MapPin, Phone } from "lucide-react"

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactFAQ } from "@/components/contact/contact-faq"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "이름은 최소 2자 이상이어야 합니다.",
  }),
  email: z.string().email({
    message: "유효한 이메일 주소를 입력해주세요.",
  }),
  phone: z.string().min(10, {
    message: "유효한 전화번호를 입력해주세요.",
  }),
  company: z.string().optional(),
  inquiryType: z.enum(["general", "product", "partnership", "career", "other"], {
    required_error: "문의 유형을 선택해주세요.",
  }),
  subject: z.string().min(5, {
    message: "제목은 최소 5자 이상이어야 합니다.",
  }),
  message: z.string().min(10, {
    message: "메시지는 최소 10자 이상이어야 합니다.",
  }),
  contactMethod: z.enum(["email", "phone"], {
    required_error: "선호하는 연락 방법을 선택해주세요.",
  }),
  urgency: z.string().optional(),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      contactMethod: "email",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // 실제 구현에서는 여기서 API 호출을 통해 폼 데이터를 서버로 전송합니다
    console.log(values)

    // 제출 성공 시뮬레이션
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "문의가 접수되었습니다",
        description: "빠른 시일 내에 답변 드리겠습니다.",
      })
      form.reset()
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "전화",
      details: [
        { label: "대표번호", value: "02-1234-5678" },
        { label: "고객센터", value: "080-123-4567" },
      ],
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "이메일",
      details: [
        { label: "일반 문의", value: "info@healthoem.com" },
        { label: "제품 문의", value: "product@healthoem.com" },
        { label: "제휴 문의", value: "partnership@healthoem.com" },
      ],
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "주소",
      details: [
        {
          label: "본사",
          value: "서울특별시 강남구 테헤란로 123 헬스OEM빌딩 8층",
        },
        {
          label: "공장",
          value: "경기도 화성시 건강로 456 헬스OEM공장",
        },
      ],
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "업무 시간",
      details: [
        { label: "평일", value: "오전 9:00 - 오후 6:00" },
        { label: "점심 시간", value: "오후 12:00 - 오후 1:00" },
        { label: "주말 및 공휴일", value: "휴무" },
      ],
    },
  ]

  const departments = [
    {
      name: "영업팀",
      description: "제품 문의, 견적 요청, 주문 관련 문의",
      contact: "sales@healthoem.com",
      phone: "02-1234-5678 (내선 1번)",
    },
    {
      name: "기술지원팀",
      description: "제품 개발, 포뮬레이션, 기술 관련 문의",
      contact: "tech@healthoem.com",
      phone: "02-1234-5678 (내선 2번)",
    },
    {
      name: "품질관리팀",
      description: "품질 관련 문의, 인증 및 규제 관련 문의",
      contact: "quality@healthoem.com",
      phone: "02-1234-5678 (내선 3번)",
    },
    {
      name: "고객지원팀",
      description: "일반 문의, 불만 사항, 피드백",
      contact: "support@healthoem.com",
      phone: "02-1234-5678 (내선 4번)",
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">문의하기</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  건강기능식품 OEM 서비스에 관한 모든 문의사항을 남겨주세요. 빠른 시일 내에 답변 드리겠습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-8">연락처 정보</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          {info.icon}
                        </div>
                        <CardTitle>{info.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {info.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="mb-2">
                            <p className="text-sm text-muted-foreground">{detail.label}</p>
                            <p className="font-medium">{detail.value}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-4">찾아오시는 길</h3>
                  <div className="overflow-hidden rounded-lg border">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Map"
                      alt="회사 위치 지도"
                      width={600}
                      height={400}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold">본사</h4>
                    <p className="text-muted-foreground">서울특별시 강남구 테헤란로 123 헬스OEM빌딩 8층</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">지하철 2호선 강남역 3번 출구에서 도보 5분 거리</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-8">문의 양식</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>문의사항을 남겨주세요</CardTitle>
                    <CardDescription>아래 양식을 작성하시면 담당자가 빠른 시일 내에 답변 드리겠습니다.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>이름 *</FormLabel>
                                <FormControl>
                                  <Input placeholder="홍길동" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>회사명</FormLabel>
                                <FormControl>
                                  <Input placeholder="(선택사항)" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>이메일 *</FormLabel>
                                <FormControl>
                                  <Input placeholder="example@company.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>전화번호 *</FormLabel>
                                <FormControl>
                                  <Input placeholder="01012345678" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="inquiryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>문의 유형 *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="문의 유형을 선택해주세요" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="general">일반 문의</SelectItem>
                                  <SelectItem value="product">제품 문의</SelectItem>
                                  <SelectItem value="partnership">제휴 문의</SelectItem>
                                  <SelectItem value="career">채용 문의</SelectItem>
                                  <SelectItem value="other">기타</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>제목 *</FormLabel>
                              <FormControl>
                                <Input placeholder="문의 제목을 입력해주세요" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>메시지 *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="문의 내용을 자세히 입력해주세요"
                                  className="min-h-[150px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="contactMethod"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>선호하는 연락 방법 *</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="email" />
                                    </FormControl>
                                    <FormLabel className="font-normal">이메일</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="phone" />
                                    </FormControl>
                                    <FormLabel className="font-normal">전화</FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="urgency"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>긴급도</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="긴급도를 선택해주세요 (선택사항)" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="low">낮음 (7일 이내 답변)</SelectItem>
                                  <SelectItem value="medium">중간 (3일 이내 답변)</SelectItem>
                                  <SelectItem value="high">높음 (24시간 이내 답변)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>긴급한 문의의 경우 고객센터(080-123-4567)로 전화주세요.</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "제출 중..." : "문의하기"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">부서별 연락처</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  문의 내용에 따라 적합한 부서로 연락해 주세요
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {departments.map((dept, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{dept.name}</CardTitle>
                    <CardDescription>{dept.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <p>{dept.contact}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <p>{dept.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">자주 묻는 질문</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  문의하기 전에 자주 묻는 질문을 확인해 보세요
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">일반 문의</TabsTrigger>
                  <TabsTrigger value="product">제품 문의</TabsTrigger>
                  <TabsTrigger value="order">주문 및 배송</TabsTrigger>
                </TabsList>
                <div className="mt-6">
                  <ContactFAQ />
                </div>
              </Tabs>
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
                  <Link href="/services">서비스 알아보기</Link>
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

