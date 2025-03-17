"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  MailOpen,
  Trash2,
  Star,
  MessageSquare,
  AlertCircle,
  HelpCircle,
  CheckCircle,
  Clock,
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
import { Checkbox } from "@/components/ui/checkbox"

// 메시지 타입 정의
type MessageCategory = "inquiry" | "support" | "feedback" | "partnership" | "other"
type MessageStatus = "new" | "read" | "replied" | "resolved" | "pending"

interface Message {
  id: string
  subject: string
  sender: {
    name: string
    email: string
  }
  category: MessageCategory
  status: MessageStatus
  isStarred: boolean
  receivedAt: string
  preview: string
}

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedMessages, setSelectedMessages] = useState<string[]>([])

  // 샘플 메시지 데이터
  const messages: Message[] = [
    {
      id: "msg-001",
      subject: "건강기능식품 OEM 서비스 문의",
      sender: {
        name: "김민수",
        email: "minsu.kim@example.com",
      },
      category: "inquiry",
      status: "new",
      isStarred: false,
      receivedAt: "2024-06-15 09:45",
      preview:
        "안녕하세요, 귀사의 건강기능식품 OEM 서비스에 관심이 있어 문의드립니다. 프로바이오틱스 제품 개발을 고려 중인데...",
    },
    {
      id: "msg-002",
      subject: "제품 품질 관련 피드백",
      sender: {
        name: "이지은",
        email: "jieun.lee@example.com",
      },
      category: "feedback",
      status: "read",
      isStarred: true,
      receivedAt: "2024-06-14 16:30",
      preview:
        "귀사의 콜라겐 제품을 사용해 보았습니다. 전반적으로 만족스러웠으나 몇 가지 개선점을 제안드리고 싶어 연락드립니다...",
    },
    {
      id: "msg-003",
      subject: "비타민 제품 대량 주문 문의",
      sender: {
        name: "박준호",
        email: "junho.park@example.com",
      },
      category: "partnership",
      status: "replied",
      isStarred: false,
      receivedAt: "2024-06-13 11:20",
      preview:
        "안녕하세요, 저희는 건강식품 유통업체입니다. 귀사의 비타민 제품을 대량으로 주문하고 싶어 연락드립니다. 가격 및 납기일에 대해...",
    },
    {
      id: "msg-004",
      subject: "제품 사용 후 부작용 문의",
      sender: {
        name: "최서연",
        email: "seoyeon.choi@example.com",
      },
      category: "support",
      status: "pending",
      isStarred: true,
      receivedAt: "2024-06-12 14:15",
      preview:
        "귀사의 다이어트 보조제를 복용한 후 경미한 소화 불량 증상이 있어 문의드립니다. 이런 증상이 일반적인지, 어떻게 대처해야 할지...",
    },
    {
      id: "msg-005",
      subject: "제품 성분 정보 요청",
      sender: {
        name: "정다은",
        email: "daeun.jung@example.com",
      },
      category: "inquiry",
      status: "resolved",
      isStarred: false,
      receivedAt: "2024-06-11 10:30",
      preview:
        "귀사의 오메가3 제품에 대한 상세 성분 정보를 알고 싶습니다. 특히 원산지와 추출 방법, 그리고 첨가물 목록을 확인하고 싶어...",
    },
    {
      id: "msg-006",
      subject: "마케팅 협업 제안",
      sender: {
        name: "강현우",
        email: "hyunwoo.kang@example.com",
      },
      category: "partnership",
      status: "new",
      isStarred: false,
      receivedAt: "2024-06-10 09:10",
      preview:
        "안녕하세요, 저희는 건강 관련 콘텐츠를 제작하는 마케팅 에이전시입니다. 귀사 제품을 활용한 콘텐츠 협업을 제안드리고 싶어...",
    },
    {
      id: "msg-007",
      subject: "결제 오류 문의",
      sender: {
        name: "윤지민",
        email: "jimin.yoon@example.com",
      },
      category: "support",
      status: "read",
      isStarred: false,
      receivedAt: "2024-06-09 18:45",
      preview:
        "온라인 스토어에서 제품 구매 시 결제 오류가 발생했습니다. 주문번호는 ORD-20240609-1234이며, 카드 결제 시 오류 메시지가...",
    },
    {
      id: "msg-008",
      subject: "제품 추천 요청",
      sender: {
        name: "송태현",
        email: "taehyun.song@example.com",
      },
      category: "inquiry",
      status: "replied",
      isStarred: true,
      receivedAt: "2024-06-08 13:25",
      preview:
        "면역력 강화에 도움이 되는 제품을 추천받고 싶습니다. 현재 40대 남성으로, 사무직 종사자이며 가끔 피로감을 느끼는 편입니다...",
    },
    {
      id: "msg-009",
      subject: "제품 배송 지연 문의",
      sender: {
        name: "임수진",
        email: "sujin.lim@example.com",
      },
      category: "support",
      status: "pending",
      isStarred: false,
      receivedAt: "2024-06-07 16:40",
      preview:
        "주문한 제품(주문번호: ORD-20240605-5678)의 배송이 예상보다 지연되고 있습니다. 현재 배송 상태와 예상 도착일을 알고 싶어...",
    },
    {
      id: "msg-010",
      subject: "제품 개발 제안",
      sender: {
        name: "한지훈",
        email: "jihoon.han@example.com",
      },
      category: "other",
      status: "new",
      isStarred: true,
      receivedAt: "2024-06-06 08:55",
      preview:
        "새로운 건강기능식품 아이디어를 제안드리고 싶습니다. 최근 연구 결과에 따르면 특정 허브 추출물이 수면의 질 향상에 도움이 된다고 하는데...",
    },
  ]

  // 필터링된 메시지 목록
  const filteredMessages = messages.filter((message) => {
    // 검색어 필터링
    const matchesSearch =
      message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.sender.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.sender.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.preview.toLowerCase().includes(searchQuery.toLowerCase())

    // 카테고리 필터링
    const matchesCategory = categoryFilter === "all" || message.category === categoryFilter

    // 상태 필터링
    const matchesStatus = statusFilter === "all" || message.status === statusFilter

    return matchesSearch && matchesCategory && matchesStatus
  })

  // 카테고리에 따른 배지 렌더링
  const renderCategoryBadge = (category: MessageCategory) => {
    switch (category) {
      case "inquiry":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200">
            <HelpCircle className="mr-1 h-3 w-3" /> 문의
          </Badge>
        )
      case "support":
        return (
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 border-orange-200">
            <AlertCircle className="mr-1 h-3 w-3" /> 고객지원
          </Badge>
        )
      case "feedback":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200">
            <MessageSquare className="mr-1 h-3 w-3" /> 피드백
          </Badge>
        )
      case "partnership":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 border-purple-200">파트너십</Badge>
      case "other":
        return <Badge variant="outline">기타</Badge>
      default:
        return <Badge variant="outline">{category}</Badge>
    }
  }

  // 상태에 따른 배지 렌더링
  const renderStatusBadge = (status: MessageStatus) => {
    switch (status) {
      case "new":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-red-200">새 메시지</Badge>
      case "read":
        return (
          <Badge variant="outline" className="text-muted-foreground">
            읽음
          </Badge>
        )
      case "replied":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200">답변됨</Badge>
      case "resolved":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200">
            <CheckCircle className="mr-1 h-3 w-3" /> 해결됨
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-yellow-200">
            <Clock className="mr-1 h-3 w-3" /> 대기중
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // 체크박스 전체 선택/해제 처리
  const handleSelectAll = () => {
    if (selectedMessages.length === filteredMessages.length) {
      setSelectedMessages([])
    } else {
      setSelectedMessages(filteredMessages.map((message) => message.id))
    }
  }

  // 개별 체크박스 선택/해제 처리
  const handleSelectMessage = (messageId: string) => {
    if (selectedMessages.includes(messageId)) {
      setSelectedMessages(selectedMessages.filter((id) => id !== messageId))
    } else {
      setSelectedMessages([...selectedMessages, messageId])
    }
  }

  // 별표 토글 처리
  const toggleStar = (messageId: string) => {
    // 실제 구현에서는 API 호출 등을 통해 서버에 상태 변경을 요청
    console.log(`Toggle star for message: ${messageId}`)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">메시지 관리</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <MailOpen className="mr-2 h-4 w-4" />
            읽음으로 표시
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            삭제
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="제목, 이름, 내용 검색..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="카테고리 필터" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">모든 카테고리</SelectItem>
              <SelectItem value="inquiry">문의</SelectItem>
              <SelectItem value="support">고객지원</SelectItem>
              <SelectItem value="feedback">피드백</SelectItem>
              <SelectItem value="partnership">파트너십</SelectItem>
              <SelectItem value="other">기타</SelectItem>
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="상태 필터" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">모든 상태</SelectItem>
              <SelectItem value="new">새 메시지</SelectItem>
              <SelectItem value="read">읽음</SelectItem>
              <SelectItem value="replied">답변됨</SelectItem>
              <SelectItem value="resolved">해결됨</SelectItem>
              <SelectItem value="pending">대기중</SelectItem>
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
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedMessages.length === filteredMessages.length && filteredMessages.length > 0}
                  onCheckedChange={handleSelectAll}
                  aria-label="전체 선택"
                />
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>제목</TableHead>
              <TableHead>보낸 사람</TableHead>
              <TableHead>카테고리</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>수신 시간</TableHead>
              <TableHead className="text-right">작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMessages.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  검색 결과가 없습니다.
                </TableCell>
              </TableRow>
            ) : (
              filteredMessages.map((message) => (
                <TableRow key={message.id} className={message.status === "new" ? "font-medium bg-muted/30" : ""}>
                  <TableCell>
                    <Checkbox
                      checked={selectedMessages.includes(message.id)}
                      onCheckedChange={() => handleSelectMessage(message.id)}
                      aria-label={`${message.subject} 선택`}
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => toggleStar(message.id)} className="h-8 w-8">
                      <Star
                        className={`h-4 w-4 ${message.isStarred ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                      />
                      <span className="sr-only">별표 표시</span>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{message.subject}</div>
                    <div className="text-sm text-muted-foreground truncate max-w-md">{message.preview}</div>
                  </TableCell>
                  <TableCell>
                    <div>{message.sender.name}</div>
                    <div className="text-sm text-muted-foreground">{message.sender.email}</div>
                  </TableCell>
                  <TableCell>{renderCategoryBadge(message.category)}</TableCell>
                  <TableCell>{renderStatusBadge(message.status)}</TableCell>
                  <TableCell>{message.receivedAt}</TableCell>
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
                          <Eye className="mr-2 h-4 w-4" />
                          <span>보기</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MailOpen className="mr-2 h-4 w-4" />
                          <span>읽음으로 표시</span>
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

