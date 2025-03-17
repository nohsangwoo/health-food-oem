"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Edit, Eye, Filter, MoreHorizontal, Pin, Plus, Search, Trash } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  title: z.string().min(5, {
    message: "제목은 최소 5자 이상이어야 합니다.",
  }),
  content: z.string().min(10, {
    message: "내용은 최소 10자 이상이어야 합니다.",
  }),
  category: z.string({
    required_error: "카테고리를 선택해주세요.",
  }),
  isPinned: z.boolean().default(false),
})

export default function AdminContentPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currentContentId, setCurrentContentId] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      isPinned: false,
    },
  })

  // 관리자 컨텐츠 목록
  const adminContents = [
    {
      id: "admin-1",
      title: "[공지] 건강기능식품 OEM 서비스 가격 정책 변경 안내",
      category: "공지사항",
      author: "관리자",
      publishedDate: "2024-06-15",
      status: "Published",
      isPinned: true,
    },
    {
      id: "admin-2",
      title: "[중요] 2024년 하반기 신제품 출시 일정 안내",
      category: "제품 소식",
      author: "제품팀",
      publishedDate: "2024-06-10",
      status: "Published",
      isPinned: true,
    },
    {
      id: "admin-3",
      title: "건강기능식품 원료 시장 동향 보고서",
      category: "시장 분석",
      author: "마케팅팀",
      publishedDate: "2024-06-05",
      status: "Published",
      isPinned: false,
    },
    {
      id: "admin-4",
      title: "여름철 건강기능식품 보관 방법 안내",
      category: "건강 정보",
      author: "품질관리팀",
      publishedDate: "2024-06-01",
      status: "Draft",
      isPinned: false,
    },
    {
      id: "admin-5",
      title: "신규 포장 디자인 서비스 출시 예정",
      category: "서비스 안내",
      author: "디자인팀",
      publishedDate: "2024-05-25",
      status: "Draft",
      isPinned: false,
    },
  ]

  const filteredContents = adminContents.filter(
    (content) =>
      content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.author.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  function onSubmit(values: z.infer<typeof formSchema>) {
    // 실제 구현에서는 API 호출을 통해 컨텐츠를 저장합니다
    console.log(values)

    // 성공 메시지 표시
    toast({
      title: isEditing ? "컨텐츠가 수정되었습니다" : "새 컨텐츠가 생성되었습니다",
      description: isEditing ? "변경사항이 저장되었습니다." : "컨텐츠가 성공적으로 등록되었습니다.",
    })

    // 폼 초기화 및 다이얼로그 닫기
    form.reset()
    setIsDialogOpen(false)
    setIsEditing(false)
    setCurrentContentId(null)
  }

  const handleEdit = (contentId: string) => {
    // 실제 구현에서는 API 호출을 통해 컨텐츠 정보를 가져옵니다
    const contentToEdit = adminContents.find((content) => content.id === contentId)

    if (contentToEdit) {
      form.reset({
        title: contentToEdit.title,
        category: contentToEdit.category.toLowerCase().replace(/\s+/g, "-"),
        isPinned: contentToEdit.isPinned,
        content: "이 컨텐츠의 상세 내용입니다. 실제 구현에서는 API를 통해 가져옵니다.",
      })

      setIsEditing(true)
      setCurrentContentId(contentId)
      setIsDialogOpen(true)
    }
  }

  const handleDelete = (contentId: string) => {
    // 실제 구현에서는 API 호출을 통해 컨텐츠를 삭제합니다
    console.log("Deleting content:", contentId)

    // 성공 메시지 표시
    toast({
      title: "컨텐츠가 삭제되었습니다",
      description: "선택한 컨텐츠가 성공적으로 삭제되었습니다.",
    })
  }

  const handleView = (contentId: string) => {
    // 커뮤니티 페이지의 해당 컨텐츠로 이동
    router.push(`/community/discussion/${contentId}`)
  }

  const handleDialogClose = () => {
    form.reset()
    setIsEditing(false)
    setCurrentContentId(null)
    setIsDialogOpen(false)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">컨텐츠 관리</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setIsEditing(false)
                form.reset({
                  title: "",
                  content: "",
                  isPinned: false,
                })
              }}
            >
              <Plus className="mr-2 h-4 w-4" />새 컨텐츠 작성
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>{isEditing ? "컨텐츠 수정" : "새 컨텐츠 작성"}</DialogTitle>
              <DialogDescription>
                {isEditing
                  ? "기존 컨텐츠를 수정합니다. 수정 후 저장 버튼을 클릭하세요."
                  : "커뮤니티에 게시할 새 컨텐츠를 작성합니다."}
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>제목 *</FormLabel>
                      <FormControl>
                        <Input placeholder="컨텐츠 제목을 입력하세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>카테고리 *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="카테고리 선택" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="notice">공지사항</SelectItem>
                            <SelectItem value="product-news">제품 소식</SelectItem>
                            <SelectItem value="market-analysis">시장 분석</SelectItem>
                            <SelectItem value="health-info">건강 정보</SelectItem>
                            <SelectItem value="service-info">서비스 안내</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="isPinned"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-end space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>상단 고정</FormLabel>
                          <FormDescription>중요 공지는 커뮤니티 페이지 상단에 고정됩니다</FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>내용 *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="컨텐츠 내용을 입력하세요" className="min-h-[300px]" {...field} />
                      </FormControl>
                      <FormDescription>마크다운 형식을 지원합니다. (## 제목, * 목록 등)</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button type="button" variant="outline" onClick={handleDialogClose}>
                    취소
                  </Button>
                  <Button type="submit">{isEditing ? "저장" : "게시하기"}</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>컨텐츠 목록</CardTitle>
          <CardDescription>커뮤니티에 게시된 관리자 컨텐츠를 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="컨텐츠 검색..."
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

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>상태</TableHead>
                  <TableHead>제목</TableHead>
                  <TableHead>카테고리</TableHead>
                  <TableHead>작성자</TableHead>
                  <TableHead>게시일</TableHead>
                  <TableHead>고정</TableHead>
                  <TableHead className="text-right">작업</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContents.map((content) => (
                  <TableRow key={content.id}>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          content.status === "Published"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : "bg-yellow-50 text-yellow-700 border-yellow-200"
                        }
                      >
                        {content.status === "Published" ? "게시됨" : "초안"}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{content.title}</TableCell>
                    <TableCell>{content.category}</TableCell>
                    <TableCell>{content.author}</TableCell>
                    <TableCell>{content.publishedDate}</TableCell>
                    <TableCell>{content.isPinned && <Pin className="h-4 w-4 text-primary" />}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">작업</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>작업</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleView(content.id)}>
                            <Eye className="mr-2 h-4 w-4" />
                            보기
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEdit(content.id)}>
                            <Edit className="mr-2 h-4 w-4" />
                            수정
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(content.id)}>
                            <Trash className="mr-2 h-4 w-4" />
                            삭제
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm text-muted-foreground">총 {filteredContents.length}개의 컨텐츠</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              이전
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm" disabled>
              다음
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

