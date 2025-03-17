"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { logoutApi } from "@/lib/api/auth-service"
import { useAuthStore } from "@/lib/store/auth-store"
import { toast } from "@/hooks/use-toast"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  BarChart,
  Home,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Users,
  FileEdit,
  ShieldAlert,
  Menu,
} from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuthStore()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // 반응형 처리
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  // 현재 경로가 특정 경로와 일치하는지 확인하는 함수
  const isPathActive = (path: string) => {
    if (path === "/admin/dashboard") {
      return pathname === "/admin" || pathname === "/admin/dashboard"
    }
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  // 관리자 메뉴 라우트
  const adminRoutes = [
    {
      href: "/admin/dashboard",
      label: "관리자 대시보드",
      icon: <LayoutDashboard className="h-5 w-5" />,
      active: isPathActive("/admin/dashboard"),
    },
    {
      href: "/admin/content",
      label: "컨텐츠 관리",
      icon: <FileEdit className="h-5 w-5" />,
      active: isPathActive("/admin/content"),
    },
    {
      href: "/admin/content-updates",
      label: "컨텐츠 업데이트",
      icon: <FileEdit className="h-5 w-5" />,
      active: isPathActive("/admin/content-updates"),
    },
    {
      href: "/admin/users",
      label: "사용자 관리",
      icon: <Users className="h-5 w-5" />,
      active: isPathActive("/admin/users"),
    },
    {
      href: "/admin/messages",
      label: "메시지 관리",
      icon: <MessageSquare className="h-5 w-5" />,
      active: isPathActive("/admin/messages"),
    },
    {
      href: "/admin/analytics",
      label: "분석",
      icon: <BarChart className="h-5 w-5" />,
      active: isPathActive("/admin/analytics"),
    },
    {
      href: "/admin/settings",
      label: "설정",
      icon: <Settings className="h-5 w-5" />,
      active: isPathActive("/admin/settings"),
    },
  ]

  const footerRoutes = [
    {
      href: "/member/dashboard",
      label: "멤버 대시보드",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      href: "/",
      label: "웹사이트로 돌아가기",
      icon: <Home className="h-5 w-5" />,
    },
  ]

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true)

      // API 호출
      const response = await logoutApi()

      if (response.success) {
        // Zustand 스토어에서 사용자 정보 제거
        logout()

        toast({
          title: "로그아웃 성공",
          description: "성공적으로 로그아웃되었습니다.",
        })

        // 홈페이지로 리디렉션
        router.push("/")
      }
    } catch (error) {
      toast({
        title: "오류",
        description: "로그아웃 중 오류가 발생했습니다.",
        variant: "destructive",
      })
      console.error(error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  // 사이드바 메뉴 아이템 컴포넌트
  const SidebarItem = ({ route, onClick }: { route: any; onClick?: () => void }) => (
    <Link
      href={route.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
        route.active ? "bg-accent text-accent-foreground" : "text-muted-foreground",
      )}
    >
      {route.icon}
      <span>{route.label}</span>
    </Link>
  )

  // 사이드바 컨텐츠
  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* 헤더 */}
      <div className="border-b px-4 py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl">헬스OEM</span>
          </Link>
          <Badge variant="outline" className="ml-2 bg-primary/10 text-primary border-primary/20">
            관리자
          </Badge>
        </div>
      </div>

      {/* 메인 메뉴 */}
      <div className="flex-1 overflow-auto py-4">
        <div className="px-4 mb-4">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">관리자 메뉴</h2>
          <div className="space-y-1">
            {adminRoutes.map((route) => (
              <SidebarItem key={route.href} route={route} onClick={isMobile ? () => setIsOpen(false) : undefined} />
            ))}
          </div>
        </div>
      </div>

      {/* 푸터 메뉴 */}
      <div className="border-t px-4 py-4">
        <div className="space-y-1">
          {footerRoutes.map((route) => (
            <SidebarItem key={route.href} route={route} onClick={isMobile ? () => setIsOpen(false) : undefined} />
          ))}
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-accent"
          >
            <LogOut className="h-5 w-5" />
            <span>{isLoggingOut ? "로그아웃 중..." : "로그아웃"}</span>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen">
      {/* 데스크톱 사이드바 */}
      <aside className="hidden lg:block w-64 border-r bg-background">
        <SidebarContent />
      </aside>

      {/* 모바일 사이드바 */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* 메인 콘텐츠 */}
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
          {isMobile && (
            <SheetTrigger asChild onClick={() => setIsOpen(true)}>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
          )}
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm">
              <ShieldAlert className="mr-2 h-4 w-4 text-primary" />
              <span>관리자: {user?.name || "관리자"}</span>
            </Button>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

