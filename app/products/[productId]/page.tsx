"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import { ArrowLeft, Check, Download, FileText, Share } from "lucide-react"

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ProductRecommendations } from "@/components/products/product-recommendations"

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.productId as string
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // 제품 데이터 (실제로는 API에서 가져올 것입니다)
  const products = [
    {
      id: "prod-1",
      name: "고함량 비타민 C",
      category: "vitamins",
      description: "면역력 강화를 위한 고함량 비타민 C 보충제",
      longDescription:
        "헬스OEM의 고함량 비타민 C는 하루 권장량의 1,000%를 제공하는 프리미엄 보충제입니다. 로즈힙 추출물과 함께 배합되어 생체이용률을 높였으며, 서방형 제형으로 비타민 C를 장시간 지속적으로 공급합니다. 면역 기능 강화, 항산화 작용, 콜라겐 생성 촉진에 도움을 줍니다.",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600&text=Detail+1",
        "/placeholder.svg?height=600&width=600&text=Detail+2",
        "/placeholder.svg?height=600&width=600&text=Detail+3",
      ],
      price: "제품 문의",
      features: ["1,000mg 고함량", "로즈힙 추출물 함유", "서방형 제형"],
      specifications: [
        { name: "주요 성분", value: "비타민 C(아스코르브산) 1,000mg, 로즈힙 추출물 50mg" },
        { name: "제형", value: "타임릴리즈 정제" },
        { name: "섭취량", value: "1일 1회, 1회 1정" },
        { name: "용량", value: "60정 (60일분)" },
        { name: "알레르기 정보", value: "글루텐 프리, 유제품 무첨가" },
        { name: "제조", value: "KGMP 인증 시설" },
      ],
      benefits: [
        {
          title: "면역력 강화",
          description: "비타민 C는 면역 세포의 생성과 기능을 지원하여 면역 체계를 강화합니다.",
        },
        {
          title: "항산화 작용",
          description: "강력한 항산화 작용으로 유해한 자유 라디칼로부터 세포를 보호합니다.",
        },
        {
          title: "콜라겐 생성",
          description: "피부, 연골, 힘줄의 주요 구성 요소인 콜라겐 생성에 필수적입니다.",
        },
        {
          title: "철분 흡수 촉진",
          description: "비헴철의 흡수를 향상시켜 철분 영양 상태를 개선합니다.",
        },
      ],
      badge: "인기",
      badgeColor: "bg-orange-500",
      documents: [
        { name: "제품 규격서", type: "PDF", size: "1.2 MB" },
        { name: "성분 분석표", type: "PDF", size: "0.8 MB" },
        { name: "품질 인증서", type: "PDF", size: "1.5 MB" },
      ],
    },
    {
      id: "prod-2",
      name: "종합 비타민 미네랄",
      category: "vitamins",
      description: "일일 필수 영양소를 모두 담은 종합 비타민 미네랄",
      longDescription:
        "헬스OEM의 종합 비타민 미네랄은 13종의 비타민과 9종의 미네랄을 최적의 비율로 배합한 프리미엄 종합 영양제입니다. 현대인의 불균형한 식습관을 보완하고 일상 활력을 되찾아주는 데 도움을 줍니다. 항산화 성분이 함유되어 있어 노화 방지에도 효과적입니다.",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600&text=Detail+1",
        "/placeholder.svg?height=600&width=600&text=Detail+2",
      ],
      price: "제품 문의",
      features: ["13종 비타민", "9종 미네랄", "항산화 성분 함유"],
      specifications: [
        {
          name: "주요 성분",
          value:
            "비타민 A, B1, B2, B3, B5, B6, B7, B9, B12, C, D, E, K, 칼슘, 마그네슘, 아연, 철, 구리, 망간, 셀레늄, 크롬, 몰리브덴",
        },
        { name: "제형", value: "정제" },
        { name: "섭취량", value: "1일 1회, 1회 1정" },
        { name: "용량", value: "90정 (90일분)" },
        { name: "알레르기 정보", value: "글루텐 프리, 대두 함유" },
        { name: "제조", value: "KGMP 인증 시설" },
      ],
      benefits: [
        {
          title: "영양소 결핍 예방",
          description: "현대인의 불균형한 식습관으로 인한 영양소 결핍을 예방합니다.",
        },
        {
          title: "에너지 대사 지원",
          description: "B 비타민 복합체가 체내 에너지 생성 과정을 지원합니다.",
        },
        {
          title: "면역 체계 강화",
          description: "비타민 C, D, 아연 등이 면역 체계를 강화합니다.",
        },
        {
          title: "뼈 건강 유지",
          description: "칼슘, 마그네슘, 비타민 D, K가 뼈 건강을 유지하는 데 도움을 줍니다.",
        },
      ],
      badge: "베스트셀러",
      badgeColor: "bg-blue-500",
      documents: [
        { name: "제품 규격서", type: "PDF", size: "1.4 MB" },
        { name: "성분 분석표", type: "PDF", size: "1.0 MB" },
        { name: "품질 인증서", type: "PDF", size: "1.5 MB" },
      ],
    },
    {
      id: "prod-3",
      name: "프로바이오틱스 100억",
      category: "probiotics",
      description: "장 건강을 위한 고함량 프로바이오틱스",
      longDescription:
        "헬스OEM의 프로바이오틱스 100억은 17종의 유익균을 함유한 고함량 프로바이오틱스 제품입니다. 특허받은 캡슐 기술로 위산에 파괴되지 않고 장까지 도달하여 효과적으로 작용합니다. 프리바이오틱스를 함께 함유하여 유익균의 성장을 촉진하고 장내 환경을 개선합니다.",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600&text=Detail+1",
        "/placeholder.svg?height=600&width=600&text=Detail+2",
      ],
      price: "제품 문의",
      features: ["100억 CFU", "17종 유산균", "프리바이오틱스 함유"],
      specifications: [
        {
          name: "주요 성분",
          value:
            "락토바실러스 애시도필러스, 비피도박테리움 비피덤, 락토바실러스 람노서스 등 17종 유산균 (100억 CFU), 프락토올리고당 200mg",
        },
        { name: "제형", value: "장용성 캡슐" },
        { name: "섭취량", value: "1일 1회, 1회 1캡슐" },
        { name: "용량", value: "30캡슐 (30일분)" },
        { name: "알레르기 정보", value: "글루텐 프리, 유제품 함유" },
        { name: "제조", value: "KGMP 인증 시설" },
        { name: "보관", value: "냉장 보관 권장" },
      ],
      benefits: [
        {
          title: "장 건강 개선",
          description: "유익균 증식을 통해 장내 환경을 개선하고 소화 기능을 향상시킵니다.",
        },
        {
          title: "면역력 강화",
          description: "장내 면역 세포의 70%가 위치한 장 건강을 개선하여 전체 면역력을 강화합니다.",
        },
        {
          title: "유해균 억제",
          description: "유익균이 유해균의 성장을 억제하여 장내 균형을 유지합니다.",
        },
        {
          title: "영양소 흡수 촉진",
          description: "건강한 장내 환경은 영양소 흡수를 촉진합니다.",
        },
      ],
      badge: "신제품",
      badgeColor: "bg-green-500",
      documents: [
        { name: "제품 규격서", type: "PDF", size: "1.3 MB" },
        { name: "성분 분석표", type: "PDF", size: "0.9 MB" },
        { name: "품질 인증서", type: "PDF", size: "1.5 MB" },
        { name: "임상 연구 결과", type: "PDF", size: "2.1 MB" },
      ],
    },
  ]

  const product = products.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                제품 목록으로 돌아가기
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* 제품 이미지 */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={product.images[activeImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex gap-2 overflow-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative min-w-[80px] overflow-hidden rounded-md border ${
                      activeImageIndex === index ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} 이미지 ${index + 1}`}
                      width={80}
                      height={80}
                      className="aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* 제품 정보 */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold">{product.name}</h1>
                  {product.badge && <Badge className={`${product.badgeColor} text-white`}>{product.badge}</Badge>}
                </div>
                <p className="mt-2 text-lg text-muted-foreground">{product.description}</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">주요 특징</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">{product.price}</p>
                    <p className="text-sm text-muted-foreground">맞춤형 제품 개발 및 가격 상담 가능</p>
                  </div>
                  <div className="flex gap-2">
                    <Button>문의하기</Button>
                    <Button variant="outline">
                      <Share className="mr-2 h-4 w-4" />
                      공유하기
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full grid grid-cols-4">
                <TabsTrigger value="description">제품 설명</TabsTrigger>
                <TabsTrigger value="specifications">제품 사양</TabsTrigger>
                <TabsTrigger value="benefits">효능 및 효과</TabsTrigger>
                <TabsTrigger value="documents">제품 문서</TabsTrigger>
              </TabsList>
              <div className="mt-6 rounded-lg border p-6">
                <TabsContent value="description" className="space-y-4">
                  <h2 className="text-2xl font-bold">제품 설명</h2>
                  <p className="text-muted-foreground">{product.longDescription}</p>
                </TabsContent>
                <TabsContent value="specifications" className="space-y-4">
                  <h2 className="text-2xl font-bold">제품 사양</h2>
                  <div className="rounded-lg border">
                    <div className="grid grid-cols-1 divide-y">
                      {product.specifications.map((spec, index) => (
                        <div key={index} className="grid grid-cols-3 p-4">
                          <div className="font-medium">{spec.name}</div>
                          <div className="col-span-2">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="benefits" className="space-y-4">
                  <h2 className="text-2xl font-bold">효능 및 효과</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {product.benefits.map((benefit, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle>{benefit.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{benefit.description}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="documents" className="space-y-4">
                  <h2 className="text-2xl font-bold">제품 문서</h2>
                  <div className="space-y-4">
                    {product.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {doc.type} • {doc.size}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          다운로드
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold">추천 제품</h2>
            <ProductRecommendations currentProductId={product.id} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

