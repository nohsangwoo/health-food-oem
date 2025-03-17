"use client"

import { useState } from "react"
import {
  Search,
  UserPlus,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  XCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// 사용자 타입 정의
type UserRole = "admin" | "member" | "premium" | "basic"
type UserStatus = "active" | "inactive" | "pending" | "suspended"

interface User {
  id: string
  name: string
  email: string
  role: UserRole
  status: UserStatus
  joinDate: string
  lastLogin: string
}

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  // 샘플 사용자 데이터
  const users: User[] = [
    {
      id: "user-001",
      name: "김민수",
      email: "minsu.kim@example.com",
      role: "admin",
      status: "active",
      joinDate: "2023-01-15",
      lastLogin: "2024-06-15 09:45",
    },
    {
      id: "user-002",
      name: "이지은",
      email: "jieun.lee@example.com",
      role: "premium",
      status: "active",
      joinDate: "2023-02-20",
      lastLogin: "2024-06-14 16:30",
    },
    {
      id: "user-003",
      name: "박준호",
      email: "junho.park@example.com",
      role: "member",
      status: "inactive",
      joinDate: "2023-03-10",
      lastLogin: "2024-05-28 11:20",
    },
    {
      id: "user-004",
      name: "최서연",
      email: "seoyeon.choi@example.com",
      role: "basic",
      status: "pending",
      joinDate: "2023-04-05",
      lastLogin: "2024-06-01 14:15",
    },
    {
      id: "user-005",
      name: "정다은",
      email: "daeun.jung@example.com",
      role: "premium",
      status: "active",
      joinDate: "2023-05-12",
      lastLogin: "2024-06-15 10:30",
    },
    {
      id: "user-006",
      name: "강현우",
      email: "hyunwoo.kang@example.com",
      role: "member",
      status: "suspended",
      joinDate: "2023-06-18",
      lastLogin: "2024-04-20 09:10",
    },
    {
      id: "user-007",
      name: "윤지민",
      email: "jimin.yoon@example.com",
      role: "basic",
      status: "active",
      joinDate: "2023-07-22",
      lastLogin: "2024-06-14 18:45",
    },
    {
      id: "user-008",
      name: "송태현",
      email: "taehyun.song@example.com",
      role: "member",
      status: "active",
      joinDate: "2023-08-30",
      lastLogin: "2024-06-13 13:25",
    },
    {
      id: "user-009",
      name: "임수진",
      email: "sujin.lim@example.com",
      role: "premium",
      status: "inactive",
      joinDate: "2023-09-14",
      lastLogin: "2024-05-25 16:40",
    },
    {
      id: "user-010",
      name: "한지훈",
      email: "jihoon.han@example.com",
      role: "admin",
      status: "active",
      joinDate: "2023-10-05",
      lastLogin: "2024-06-15 08:55",
    },
  ]

  // 필터링된 사용자 목록
  const filteredUsers = users.filter((user) => {
    // 검색어 필터링
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())

    // 역할 필터링
    const matchesRole = roleFilter === "all" || user.role === roleFilter

    // 상태 필터링
    const matchesStatus = statusFilter === "all" || user.status === statusFilter

    return matchesSearch && matchesRole && matchesStatus
  })

  // 역할에 따른 배지 렌더링
  const renderRoleBadge = (role: UserRole) => {
    switch (role) {
      case "admin":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-red-200">
            <ShieldAlert className="mr-1 h-3 w-3" /> 관리자
          </Badge>
        )
      case "premium":
        return (
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 border-purple-200">
            <ShieldCheck className="mr-1 h-3 w-3" /> 프리미엄
          </Badge>
        )
      case "member":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200">
            <Shield className="mr-1 h-3 w-3" /> 회원
          </Badge>
        )
      case "basic":
        return <Badge variant="outline">기본</Badge>
      default:
        return <Badge variant="outline">{role}</Badge>
    }
  }

  // 상태에 따른 배지 렌더링
  const renderStatusBadge = (status: UserStatus) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200">
            <CheckCircle2 className="mr-1 h-3 w-3" /> 활성
          </Badge>
        )
      case "inactive":
        return (
          <Badge variant="outline" className="text-muted-foreground">
            비활성
          </Badge>
        )
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-yellow-200">대기중</Badge>
      case "suspended":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-red-200">
            <XCircle className="mr-1 h-3 w-3" /> 정지됨
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">사용자 관리</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />새 사용자 추가
        </Button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="이름 또는 이메일로 검색..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="역할 필터" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">모든 역할</SelectItem>
              <SelectItem value="admin">관리자</SelectItem>
              <SelectItem value="premium">프리미엄</SelectItem>
              <SelectItem value="member">회원</SelectItem>
              <SelectItem value="basic">기본</SelectItem>
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="상태 필터" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">모든 상태</SelectItem>
              <SelectItem value="active">활성</SelectItem>
              <SelectItem value="inactive">비활성</SelectItem>
              <SelectItem value="pending">대기중</SelectItem>
              <SelectItem value="suspended">정지됨</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>가입일</TableHead>
              <TableHead>최근 로그인</TableHead>
              <TableHead className="text-right">작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  검색 결과가 없습니다.
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{renderRoleBadge(user.role)}</TableCell>
                  <TableCell>{renderStatusBadge(user.status)}</TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">메뉴 열기</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>작업</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>편집</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Shield className="mr-2 h-4 w-4" />
                          <span>권한 변경</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>삭제</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

