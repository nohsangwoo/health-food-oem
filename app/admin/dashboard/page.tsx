"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, FileEdit, Users, MessageSquare, BarChart, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // 최근 활동 데이터
  const recentActivities = [
    {
      id: "act-1",
      type: "content",
      action: "published",
      title: "2024년 하반기 신제품 출시 일정 안내",
      user: "제품팀",
      timestamp: "2024-06-15 14:30",
    },
    {
      id: "act-2",
      type: "user",
      action: "registered",
      title: "신규 회원 가입: 김민수",
      user: "시스템",
      timestamp: "2024-06-15 13:22",
    },
    {
      id: "act-3",
      type: "content",
      action: "updated",
      title: "건강기능식품 OEM 서비스 가격 정책 변경 안내",
      user: "관리자",
      timestamp: "2024-06-15 11:45",
    },
    {
      id: "act-4",
      type: "message",
      action: "received",
      title: "신규 문의: 프로바이오틱스 제품 개발 관련",
      user: "고객지원팀",
      timestamp: "2024-06-15 10:18",
    },
    {
      id: "act-5",
      type: "content",
      action: "draft",
      title: "여름철 건강기능식품 보관 방법 안내",
      user: "품질관리팀",
      timestamp: "2024-06-15 09:30",
    },
  ]

  // 관리자 메뉴 데이터
  const adminMenus = [
    {
      title: "컨텐츠 관리",
      description: "커뮤니티 컨텐츠 및 공지사항 관리",
      icon: <FileEdit className="h-10 w-10 text-primary" />,
      link: "/admin/content",
      count: 15,
    },
    {
      title: "사용자 관리",
      description: "회원 계정 및 권한 관리",
      icon: <Users className="h-10 w-10 text-primary" />,
      link: "/admin/users",
      count: 248,
    },
    {
      title: "메시지 관리",
      description: "문의 및 메시지 관리",
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      link: "/admin/messages",
      count: 12,
    },
    {
      title: "분석",
      description: "사이트 통계 및 분석 데이터",
      icon: <BarChart className="h-10 w-10 text-primary" />,
      link: "/admin/analytics",
      count: null,
    },
    {
      title: "컨텐츠 업데이트",
      description: "정기 컨텐츠 업데이트 관리",
      icon: <FileEdit className="h-10 w-10 text-primary" />,
      link: "/admin/content-updates",
      count: 8,
    },
    {
      title: "설정",
      description: "관리자 설정 및 환경설정",
      icon: <Settings className="h-10 w-10 text-primary" />,
      link: "/admin/settings",
      count: null,
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">관리자 대시보드</h1>
        {/* 새 컨텐츠 작성 버튼 제거 */}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 회원수</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-muted-foreground">+12명 (지난 달 대비)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">컨텐츠 수</CardTitle>
            <FileEdit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">+3개 (지난 달 대비)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">미답변 문의</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">-2개 (지난 주 대비)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">오늘 방문자</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">+22% (지난 주 대비)</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {adminMenus.map((menu, index) => (
          <Card key={index} className="hover:bg-muted/50 transition-colors">
            <Link href={menu.link} className="block h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  {menu.icon}
                  {menu.count !== null && (
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {menu.count}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-4">{menu.title}</CardTitle>
                <CardDescription>{menu.description}</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>최근 활동</CardTitle>
          <CardDescription>관리자 및 시스템 활동 내역</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>활동</TableHead>
                  <TableHead>사용자</TableHead>
                  <TableHead>시간</TableHead>
                  <TableHead className="text-right">작업</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {activity.type === "content" && <FileEdit className="h-4 w-4 text-blue-500" />}
                        {activity.type === "user" && <Users className="h-4 w-4 text-green-500" />}
                        {activity.type === "message" && <MessageSquare className="h-4 w-4 text-orange-500" />}
                        <div>
                          <div className="font-medium">{activity.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {activity.action === "published" && "게시됨"}
                            {activity.action === "updated" && "수정됨"}
                            {activity.action === "draft" && "초안 저장됨"}
                            {activity.action === "registered" && "등록됨"}
                            {activity.action === "received" && "수신됨"}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{activity.user}</TableCell>
                    <TableCell>{activity.timestamp}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">보기</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

