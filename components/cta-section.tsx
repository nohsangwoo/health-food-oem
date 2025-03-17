import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              다음 건강 제품을 개발할 준비가 되셨나요?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              저희의 종합적인 OEM 솔루션으로 건강기능식품 컨셉을 현실로 만들어보세요
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">시작하기</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">더 알아보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

