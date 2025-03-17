"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { logoutApi } from "@/lib/api/auth-service"
import { useAuthStore } from "@/lib/store/auth-store"
import { toast } from "@/hooks/use-toast"

export default function LogoutPage() {
  const router = useRouter()
  const logout = useAuthStore((state) => state.logout)

  useEffect(() => {
    const performLogout = async () => {
      try {
        // API 호출
        const response = await logoutApi()

        if (response.success) {
          // Zustand 스토어에서 사용자 정보 제거
          logout()

          toast({
            title: "로그아웃 성공",
            description: "성공적으로 로그아웃되었습니다.",
          })
        }
      } catch (error) {
        console.error("로그아웃 중 오류 발생:", error)
      } finally {
        // 홈페이지로 리디렉션
        router.push("/")
      }
    }

    performLogout()
  }, [logout, router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">로그아웃 중...</h1>
        <p className="text-muted-foreground">잠시만 기다려주세요.</p>
      </div>
    </div>
  )
}

