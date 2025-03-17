"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { loginApi } from "@/lib/api/auth-service"
import { useAuthStore } from "@/lib/store/auth-store"

const formSchema = z.object({
  email: z.string().email({
    message: "유효한 이메일 주소를 입력해주세요.",
  }),
  password: z.string().min(1, {
    message: "비밀번호를 입력해주세요.",
  }),
})

export default function LoginPage() {
  const router = useRouter()
  const login = useAuthStore((state) => state.login)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)

      // API 호출
      const response = await loginApi({
        email: values.email,
        password: values.password,
      })

      if (response.success && response.user) {
        // Zustand 스토어에 사용자 정보 저장
        login(response.user)

        toast({
          title: "로그인 성공",
          description: "성공적으로 로그인되었습니다.",
        })

        // 대시보드로 리디렉션
        router.push("/admin/dashboard")
      } else {
        toast({
          title: "로그인 실패",
          description: response.error || "로그인 중 오류가 발생했습니다.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "오류",
        description: "로그인 중 오류가 발생했습니다.",
        variant: "destructive",
      })
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">로그인</h1>
          <p className="text-muted-foreground">계정에 접근하기 위해 로그인 정보를 입력하세요</p>
          <p className="text-sm text-muted-foreground mt-2 p-2 bg-muted rounded-md">
            테스트 계정: test@naver.com / testpwd
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input placeholder="test@naver.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="testpwd" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "로그인 중..." : "로그인"}
            </Button>
          </form>
        </Form>
        <div className="text-center text-sm">
          <Link href="/forgot-password" className="text-primary hover:underline">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <div className="text-center text-sm">
          계정이 없으신가요?{" "}
          <Link href="/register" className="text-primary hover:underline">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  )
}

