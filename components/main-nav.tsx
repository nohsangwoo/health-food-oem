"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuthStore } from "@/lib/store/auth-store"

export function MainNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
  const { isAuthenticated, user } = useAuthStore()

  const routes = [
    {
      href: "/",
      label: "홈",
      active: pathname === "/",
    },
    {
      href: "/about",
      label: "회사소개",
      active: pathname === "/about",
    },
    {
      href: "/services",
      label: "서비스",
      active: pathname === "/services",
    },
    {
      href: "/products",
      label: "제품",
      active: pathname === "/products",
    },
    {
      href: "/membership",
      label: "멤버십",
      active: pathname === "/membership",
    },
    {
      href: "/community",
      label: "커뮤니티",
      active: pathname === "/community",
    },
    {
      href: "/contact",
      label: "문의하기",
      active: pathname === "/contact",
    },
  ]

  const handleDashboardClick = () => {
    router.push("/admin/dashboard")
  }

  return (
    <div className="flex h-16 items-center px-4 md:px-6">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="mr-4 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">메뉴 열기</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <nav className="flex flex-col gap-4 mt-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  route.active ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              {isAuthenticated ? (
                <>
                  <Button asChild variant="outline" size="sm" onClick={handleDashboardClick}>
                    <Link href="/admin/dashboard">대시보드</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/logout">로그아웃</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/login">로그인</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/register">회원가입</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl">헬스OEM</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active ? "text-primary" : "text-muted-foreground",
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <div className="ml-auto md:ml-4 flex items-center gap-2">
        {isAuthenticated ? (
          <>
            <Button asChild variant="outline" size="sm" className="hidden md:flex" onClick={handleDashboardClick}>
              <Link href="/admin/dashboard">대시보드</Link>
            </Button>
            <Button asChild size="sm" className="hidden md:flex">
              <Link href="/logout">로그아웃</Link>
            </Button>
          </>
        ) : (
          <>
            <Button asChild variant="outline" size="sm" className="hidden md:flex">
              <Link href="/login">로그인</Link>
            </Button>
            <Button asChild size="sm" className="hidden md:flex">
              <Link href="/register">회원가입</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

