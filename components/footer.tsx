import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">헬스OEM</h3>
            <p className="text-sm text-muted-foreground">건강기능식품 OEM 솔루션을 위한 신뢰할 수 있는 파트너.</p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">페이스북</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">트위터</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">인스타그램</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">링크드인</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">회사</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                회사 소개
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                서비스
              </Link>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-primary">
                제품
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                문의하기
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">리소스</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                블로그
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                자주 묻는 질문
              </Link>
              <Link href="/community" className="text-sm text-muted-foreground hover:text-primary">
                커뮤니티
              </Link>
              <Link href="/support" className="text-sm text-muted-foreground hover:text-primary">
                고객지원
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">법적 정보</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                개인정보 처리방침
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                이용약관
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">
                쿠키 정책
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} 헬스OEM. 모든 권리 보유.
        </div>
      </div>
    </footer>
  )
}

