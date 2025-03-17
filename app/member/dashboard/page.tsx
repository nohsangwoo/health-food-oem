"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Activity, ArrowRight, Clock, Filter, MoreHorizontal, Plus, Search } from "lucide-react"

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuthStore } from "@/lib/store/auth-store"

export default function MemberDashboardPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuthStore()
  const [searchQuery, setSearchQuery] = useState("")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // 클라이언트 측에서만 인증 상태 확인
    if (!isAuthenticated) {
      router.push("/login?redirect=/member/dashboard")
    }
  }, [isAuthenticated, router])

  // 서버 사이드 렌더링 중에는 아무것도 반환하지 않음
  if (!isClient) {
    return null
  }

  const projects = [
    {
      id: "PRJ001",
      name: "비타민 C 보충제",
      description: "고함량 비타민 C 보충제 개발",
      status: "진행 중",
      statusColor: "bg-yellow-500",
      progress: 65,
      stage: "포뮬레이션 개발",
      startDate: "2024-01-15",
      dueDate: "2024-03-15",
      manager: "김지원",
      lastUpdate: "2024-03-01",
    },
    {
      id: "PRJ002",
      name: "프로바이오틱스 포뮬라",
      description: "소화 건강을 위한 고급 프로바이오틱스 포뮬라",
      status: "완료",
      statusColor: "bg-green-500",
      progress: 100,
      stage: "완료",
      startDate: "2023-12-10",
      dueDate: "2024-02-28",
      manager: "이민준",
      lastUpdate: "2024-02-28",
    },
    {
      id: "PRJ003",
      name: "오메가-3 피쉬 오일",
      description: "고품질 오메가-3 피쉬 오일 보충제",
      status: "진행 중",
      statusColor: "bg-yellow-500",
      progress: 40,
      stage: "품질 테스트",
      startDate: "2024-02-01",
      dueDate: "2024-04-10",
      manager: "박서연",
      lastUpdate: "2024-03-05",
    },
    {
      id: "PRJ004",
      name: "멀티비타민 복합체",
      description: "일일 사용을 위한 종합 멀티비타민 포뮬라",
      status: "계획 중",
      statusColor: "bg-blue-500",
      progress: 15,
      stage: "초기 기획",
      startDate: "2024-03-01",
      dueDate: "2024-05-05",
      manager: "최준호",
      lastUpdate: "2024-03-10",
    },
  ]

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.status.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const upcomingMilestones = [
    {
      id: "MS001",
      project: "비타민 C 보충제",
      name: "안정성 테스트 완료",
      dueDate: "2024-03-20",
      status: "예정",
    },
    {
      id: "MS002",
      project: "오메가-3 피쉬 오일",
      name: "품질 테스트 완료",
      dueDate: "2024-03-25",
      status: "예정",
    },
    {
      id: "MS003",
      project: "멀티비타민 복합체",
      name: "포뮬레이션 계획 승인",
      dueDate: "2024-03-15",
      status: "지연",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <MainNav />
      </header>
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">멤버 대시보드</h1>
                <p className="text-muted-foreground">의뢰한 작업의 진행 상황을 확인하세요</p>
              </div>
              <div className="flex items-center gap-2">
                <Button asChild variant="outline">
                  <Link href="/member/resources">
                    자료실 바로가기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />새 프로젝트 요청
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">총 프로젝트</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{projects.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">진행 중인 프로젝트</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{projects.filter((p) => p.status === "진행 중").length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">다가오는 마일스톤</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{upcomingMilestones.length}</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="projects" className="space-y-4">
              <TabsList>
                <TabsTrigger value="projects">프로젝트</TabsTrigger>
                <TabsTrigger value="milestones">다가오는 마일스톤</TabsTrigger>
              </TabsList>

              <TabsContent value="projects" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>내 프로젝트</CardTitle>
                    <CardDescription>의뢰한 모든 프로젝트의 진행 상황을 확인하세요</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative w-full max-w-sm">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="프로젝트 검색..."
                          className="pl-8"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                        <span className="sr-only">필터</span>
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {filteredProjects.map((project) => (
                        <Card key={project.id}>
                          <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle>{project.name}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                              </div>
                              <Badge className={`${project.statusColor} text-white`}>{project.status}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="space-y-4">
                              <div>
                                <div className="flex items-center justify-between text-sm mb-1">
                                  <span>진행률: {project.progress}%</span>
                                  <span>현재 단계: {project.stage}</span>
                                </div>
                                <Progress value={project.progress} className="h-2" />
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="text-muted-foreground">시작일</p>
                                  <p>{new Date(project.startDate).toLocaleDateString("ko-KR")}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">예상 완료일</p>
                                  <p>{new Date(project.dueDate).toLocaleDateString("ko-KR")}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">담당자</p>
                                  <p>{project.manager}</p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">마지막 업데이트</p>
                                  <p>{new Date(project.lastUpdate).toLocaleDateString("ko-KR")}</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button variant="outline" size="sm">
                              상세 보기
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">메뉴 열기</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>작업</DropdownMenuLabel>
                                <DropdownMenuItem>피드백 보내기</DropdownMenuItem>
                                <DropdownMenuItem>문서 요청</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>담당자에게 연락</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="milestones" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>다가오는 마일스톤</CardTitle>
                    <CardDescription>프로젝트의 중요한 마일스톤을 확인하세요</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingMilestones.map((milestone) => (
                        <div key={milestone.id} className="flex items-center justify-between border-b pb-4">
                          <div>
                            <p className="font-medium">{milestone.name}</p>
                            <p className="text-sm text-muted-foreground">프로젝트: {milestone.project}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-sm font-medium">
                                {new Date(milestone.dueDate).toLocaleDateString("ko-KR")}
                              </p>
                              <Badge
                                variant="outline"
                                className={
                                  milestone.status === "지연"
                                    ? "bg-red-50 text-red-700 border-red-200"
                                    : "bg-blue-50 text-blue-700 border-blue-200"
                                }
                              >
                                {milestone.status}
                              </Badge>
                            </div>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

