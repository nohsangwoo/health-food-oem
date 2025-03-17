"use client"

import type React from "react"

import { useState } from "react"
import {
  BarChart3,
  LineChart,
  PieChart,
  Download,
  Calendar,
  Users,
  ShoppingCart,
  TrendingUp,
  Eye,
  MessageSquare,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState("30days")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">분석</h1>
          <p className="text-muted-foreground">사이트 트래픽 및 사용자 활동 분석</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="기간 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">최근 7일</SelectItem>
              <SelectItem value="30days">최근 30일</SelectItem>
              <SelectItem value="90days">최근 90일</SelectItem>
              <SelectItem value="year">올해</SelectItem>
              <SelectItem value="custom">사용자 지정</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            날짜 선택
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            내보내기
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 방문자</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,543</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+12.5%</span>
              <span className="ml-1">지난 기간 대비</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">페이지뷰</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,678</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+8.2%</span>
              <span className="ml-1">지난 기간 대비</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">전환율</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
              <span className="text-red-500 font-medium">-0.4%</span>
              <span className="ml-1">지난 기간 대비</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">평균 체류 시간</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2분 45초</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+15.3%</span>
              <span className="ml-1">지난 기간 대비</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">개요</TabsTrigger>
          <TabsTrigger value="traffic">트래픽</TabsTrigger>
          <TabsTrigger value="engagement">참여도</TabsTrigger>
          <TabsTrigger value="conversion">전환</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>방문자 추이</CardTitle>
                <CardDescription>일별 방문자 및 페이지뷰 추이</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <LineChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">방문자 추이 차트</span>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>트래픽 소스</CardTitle>
                <CardDescription>방문자 유입 경로 분석</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">트래픽 소스 차트</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>인기 페이지</CardTitle>
                <CardDescription>가장 많이 방문한 페이지</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { page: "홈페이지", views: 12345, path: "/" },
                    { page: "제품 목록", views: 8765, path: "/products" },
                    { page: "건강기능식품 OEM 서비스", views: 6543, path: "/services" },
                    { page: "회사 소개", views: 4321, path: "/about" },
                    { page: "멤버십 혜택", views: 3210, path: "/membership" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{item.page}</p>
                        <p className="text-xs text-muted-foreground">{item.path}</p>
                      </div>
                      <div className="font-medium">{item.views.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>디바이스 분포</CardTitle>
                <CardDescription>방문자 디바이스 유형</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">디바이스 분포 차트</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>활동 요약</CardTitle>
                <CardDescription>사이트 내 주요 활동</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { label: "제품 조회", icon: <Eye className="h-4 w-4" />, value: 8765, change: "+12.3%" },
                    { label: "문의 접수", icon: <MessageSquare className="h-4 w-4" />, value: 432, change: "+5.7%" },
                    { label: "컨텐츠 조회", icon: <FileText className="h-4 w-4" />, value: 2345, change: "+8.1%" },
                    { label: "회원 가입", icon: <Users className="h-4 w-4" />, value: 187, change: "+3.2%" },
                    { label: "제품 구매", icon: <ShoppingCart className="h-4 w-4" />, value: 543, change: "+15.4%" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-2 h-8 w-8 flex items-center justify-center rounded-full bg-muted">
                        {item.icon}
                      </div>
                      <div className="space-y-1 flex-1">
                        <p className="text-sm font-medium leading-none">{item.label}</p>
                        <div className="flex items-center text-xs">
                          <span>{item.value.toLocaleString()}</span>
                          <span className="ml-2 text-green-500">{item.change}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>트래픽 분석</CardTitle>
              <CardDescription>트래픽 소스 및 유입 경로 상세 분석</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                <BarChart3 className="h-16 w-16 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">트래픽 분석 차트</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="engagement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>사용자 참여도</CardTitle>
              <CardDescription>페이지별 체류 시간 및 상호작용 분석</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                <LineChart className="h-16 w-16 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">사용자 참여도 차트</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="conversion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>전환율 분석</CardTitle>
              <CardDescription>목표 달성 및 전환 경로 분석</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                <PieChart className="h-16 w-16 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">전환율 분석 차트</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// 시계 아이콘 컴포넌트
function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

