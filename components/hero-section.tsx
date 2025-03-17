import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                건강식품 OEM의 신뢰할 수 있는 파트너
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                최첨단 기술과 품질 보증으로 건강기능식품을 위한 종합적인 OEM 솔루션을 제공합니다.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/services">서비스 알아보기</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">문의하기</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="히어로 이미지"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

