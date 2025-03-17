"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/lib/store/auth-store"

export default function AuthRedirect() {
  const router = useRouter()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin/dashboard")
    } else {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">리디렉션 중...</h1>
        <p className="text-muted-foreground">잠시만 기다려주세요.</p>
      </div>
    </div>
  )
}

