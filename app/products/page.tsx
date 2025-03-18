import Link from "next/link"
import Image from "next/image"
import { Filter, Search } from "lucide-react"

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductFilters } from "@/components/products/product-filters"

export default function ProductsPage() {
  const categories = [
    { id: "all", name: "전체 제품" },
    { id: "vitamins", name: "비타민" },
    { id: "minerals", name: "미네랄" },
    { id: "probiotics", name: "프로바이오틱스" },
    { id: "omega", name: "오메가" },
    { id: "protein", name: "단백질" },
    { id: "herbal", name: "허브" },
  ]

  const products = [
    {
      id: "prod-1",
      name: "고함량 비타민 C",
      category: "vitamins",
      description: "면역력 강화를 위한 고함량 비타민 C 보충제",
      image: "/products/1.webp?height=300&width=300",
      price: "제품 문의",
      features: ["1,000mg 고함량", "로즈힙 추출물 함유", "서방형 제형"],
      badge: "인기",
      badgeColor: "bg-orange-500",
    },
    {
      id: "prod-2",
      name: "종합 비타민 미네랄",
      category: "vitamins",
      description: "일일 필수 영양소를 모두 담은 종합 비타민 미네랄",
      image: "/products/2.webp?height=300&width=300",
      price: "제품 문의",
      features: ["13종 비타민", "9종 미네랄", "항산화 성분 함유"],
      badge: "베스트셀러",
      badgeColor: "bg-blue-500",
    },
    {
      id: "prod-3",
      name: "프로바이오틱스 100억",
      category: "probiotics",
      description: "장 건강을 위한 고함량 프로바이오틱스",
      image: "/products/3.webp?height=300&width=300",
      price: "제품 문의",
      features: ["100억 CFU", "17종 유산균", "프리바이오틱스 함유"],
      badge: "신제품",
      badgeColor: "bg-green-500",
    },
    {
      id: "prod-4",
      name: "오메가-3 1,000mg",
      category: "omega",
      description: "EPA와 DHA가 풍부한 고순도 오메가-3",
      image: "/products/4.webp?height=300&width=300",
      price: "제품 문의",
      features: ["1,000mg 고함량", "EPA/DHA 700mg", "무취 코팅 처리"],
    },
    {
      id: "prod-5",
      name: "식물성 단백질 파우더",
      category: "protein",
      description: "완두, 현미, 대두 단백질의 조합으로 만든 식물성 단백질",
      image: "/products/5.webp?height=300&width=300",
      price: "제품 문의",
      features: ["20g 단백질", "9종 필수 아미노산", "무설탕"],
    },
    {
      id: "prod-6",
      name: "마그네슘 비스글리시네이트",
      category: "minerals",
      description: "흡수율이 높은 킬레이트 마그네슘",
      image: "/products/6.webp?height=300&width=300",
      price: "제품 문의",
      features: ["200mg 고함량", "비스글리시네이트 형태", "고흡수율"],
    },
    {
      id: "prod-7",
      name: "밀크씨슬 실리마린",
      category: "herbal",
      description: "간 건강을 위한 밀크씨슬 추출물",
      image: "/products/7.webp?height=300&width=300",
      price: "제품 문의",
      features: ["80% 실리마린", "NAC 함유", "항산화 작용"],
    },
    {
      id: "prod-8",
      name: "아연 피콜리네이트",
      category: "minerals",
      description: "면역력 강화를 위한 고흡수 아연",
      image: "/products/8.webp?height=300&width=300",
      price: "제품 문의",
      features: ["50mg 고함량", "피콜리네이트 형태", "구리 함유"],
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">제품 소개</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  헬스OEM의 다양한 건강기능식품 제품을 확인하세요
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="제품 검색..." className="pl-8" />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="hidden md:flex">
                    <Filter className="mr-2 h-4 w-4" />
                    필터
                  </Button>
                  <Button variant="outline" size="sm" className="md:hidden">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 lg:w-1/5">
                  <ProductFilters />
                </div>

                <div className="md:w-3/4 lg:w-4/5">
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="mb-8 w-full h-auto flex flex-wrap">
                      {categories.map((category) => (
                        <TabsTrigger key={category.id} value={category.id} className="flex-grow">
                          {category.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {categories.map((category) => (
                      <TabsContent key={category.id} value={category.id} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {products
                            .filter((product) => category.id === "all" || product.category === category.id)
                            .map((product) => (
                              <Card key={product.id} className="overflow-hidden">
                                <div className="relative">
                                  <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="w-full object-cover aspect-square"
                                  />
                                  {product.badge && (
                                    <Badge className={`absolute top-2 right-2 ${product.badgeColor} text-white`}>
                                      {product.badge}
                                    </Badge>
                                  )}
                                </div>
                                <CardHeader className="p-4">
                                  <CardTitle className="text-lg">{product.name}</CardTitle>
                                  <CardDescription>{product.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="p-4 pt-0">
                                  <ul className="space-y-1 text-sm">
                                    {product.features.map((feature, index) => (
                                      <li key={index} className="flex items-center">
                                        <span className="mr-2 text-primary">•</span>
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </CardContent>
                                <CardFooter className="p-4 flex justify-between items-center">
                                  <p className="font-medium">{product.price}</p>
                                  <Button asChild size="sm">
                                    <Link href={`/products/${product.id}`}>상세 보기</Link>
                                  </Button>
                                </CardFooter>
                              </Card>
                            ))}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">맞춤형 제품 개발</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  귀사의 요구에 맞는 맞춤형 건강기능식품을 개발해 드립니다
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

