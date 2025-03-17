import type { User } from "@/lib/store/auth-store"

// 모킹된 사용자 데이터
const mockUsers = [
  {
    id: "1",
    email: "test@naver.com",
    password: "testpwd",
    name: "테스트 사용자",
    role: "admin",
  },
]

interface LoginCredentials {
  email: string
  password: string
}

interface LoginResponse {
  success: boolean
  user?: User
  error?: string
}

// 로그인 API 모킹
export async function loginApi(credentials: LoginCredentials): Promise<LoginResponse> {
  // 실제 API 호출을 시뮬레이션하기 위한 지연
  await new Promise((resolve) => setTimeout(resolve, 500))

  const user = mockUsers.find((u) => u.email === credentials.email && u.password === credentials.password)

  if (user) {
    // 비밀번호는 클라이언트로 반환하지 않음
    const { password, ...userWithoutPassword } = user
    return {
      success: true,
      user: userWithoutPassword as User,
    }
  }

  return {
    success: false,
    error: "이메일 또는 비밀번호가 올바르지 않습니다.",
  }
}

// 로그아웃 API 모킹
export async function logoutApi(): Promise<{ success: boolean }> {
  // 실제 API 호출을 시뮬레이션하기 위한 지연
  await new Promise((resolve) => setTimeout(resolve, 300))

  return {
    success: true,
  }
}

