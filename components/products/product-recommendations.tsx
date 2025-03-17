import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductRecommendationsProps {
  currentProductId: string
}

export function ProductRecommendations({ currentProductId }: ProductRecommendationsProps) {
  // 추천 제품 데이터 (실제로는 API에서 가져올 것입니다)
  const products = [
    {
      id: "prod-1",
      name: "고함량 비타민 C",
      category: "vitamins",
      description: "면역력 강화를 위한 고함량 비타민 C 보충제",
      image: "/placeholder.svg?height=300&width=300",
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
      image: "/placeholder.svg?height=300&width=300",
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
      image: "/placeholder.svg?height=300&width=300",
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
      image: "/placeholder.svg?height=300&width=300",
      price: "제품 문의",
      features: ["1,000mg 고함량", "EPA/DHA 700mg", "무취 코팅 처리"],
    },
  ]

  // 현재 제품을 제외한 추천 제품 필터링
  const recommendations = products.filter((product) => product.id !== currentProductId).slice(0, 3)

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recommendations.map((product) => (
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
              <Badge className={`absolute top-2 right-2 ${product.badgeColor} text-white`}>{product.badge}</Badge>
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
  )
}

