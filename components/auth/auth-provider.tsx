"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useAuthStore } from "@/lib/store/auth-store"

// 인증이 필요한 경로 목록
const protectedPaths = [
  "/dashboard",
  "/dashboard/projects",
  "/dashboard/files",
  "/dashboard/messages",
  "/dashboard/analytics",
  "/dashboard/users",
  "/dashboard/settings",
  "/dashboard/admin",
]

// 로그인한 사용자가 접근하면 리디렉션할 경로 목록 (예: 로그인 페이지)
const authPaths = ["/login", "/register"]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // 현재 경로가 보호된 경로인지 확인
    const isProtectedPath = protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`))

    // 현재 경로가 인증 경로인지 확인 (로그인, 회원가입 등)
    const isAuthPath = authPaths.some((path) => pathname === path)

    if (isProtectedPath && !isAuthenticated) {
      // 인증되지 않은 사용자가 보호된 경로에 접근하려고 하면 로그인 페이지로 리디렉션
      router.push("/login")
    } else if (isAuthPath && isAuthenticated) {
      // 이미 인증된 사용자가 로그인 페이지 등에 접근하려고 하면 대시보드로 리디렉션
      router.push("/admin/dashboard")
    }
  }, [isAuthenticated, pathname, router])

  return <>{children}</>
}

