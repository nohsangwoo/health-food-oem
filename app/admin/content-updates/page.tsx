"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, Edit, Eye, Filter, MoreHorizontal, Plus, Search, Trash, Clock } from "lucide-react"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
  scheduleDate: z.string().optional(),
  isRecurring: z.boolean().default(false),
  recurringInterval: z.string().optional(),
})

export default function ContentUpdatesPage() {
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
      isRecurring: false,
    },
  })

  // 정기 컨텐츠 업데이트 목록
  const contentUpdates = [
    {
      id: "update-1",
      title: "주간 건강 정보 업데이트",
      category: "건강 정보",
      author: "컨텐츠팀",
      nextUpdate: "2024-06-20",
      status: "Scheduled",
      isRecurring: true,
      interval: "Weekly",
    },
    {
      id: "update-2",
      title: "월간 시장 동향 보고서",
      category: "시장 분석",
      author: "마케팅팀",
      nextUpdate: "2024-07-01",
      status: "Scheduled",
      isRecurring: true,
      interval: "Monthly",
    },
    {
      id: "update-3",
      title: "신제품 출시 안내",
      category: "제품 소식",
      author: "제품팀",
      nextUpdate: "2024-06-25",
      status: "Draft",
      isRecurring: false,
      interval: null,
    },
    {
      id: "update-4",
      title: "분기별 규제 업데이트",
      category: "규제 정보",
      author: "법무팀",
      nextUpdate: "2024-07-15",
      status: "Scheduled",
      isRecurring: true,
      interval: "Quarterly",
    },
    {
      id: "update-5",
      title: "연간 트렌드 예측",
      category: "시장 분석",
      author: "마케팅팀",
      nextUpdate: "2024-12-15",
      status: "Draft",
      isRecurring: true,
      interval: "Yearly",
    },
  ]

  // 최근 게시된 업데이트 목록
  const recentUpdates = [
    {
      id: "recent-1",
      title: "주간 건강 정보: 여름철 수분 섭취의 중요성",
      category: "건강 정보",
      author: "컨텐츠팀",
      publishedDate: "2024-06-13",
      views: 245,
    },
    {
      id: "recent-2",
      title: "월간 시장 동향: 6월 건강기능식품 시장 분석",
      category: "시장 분석",
      author: "마케팅팀",
      publishedDate: "2024-06-01",
      views: 412,
    },
    {
      id: "recent-3",
      title: "주간 건강 정보: 장 건강을 위한 식이섬유",
      category: "건강 정보",
      author: "컨텐츠팀",
      publishedDate: "2024-06-06",
      views: 198,
    },
    {
      id: "recent-4",
      title: "분기별 규제 업데이트: 2024년 2분기",
      category: "규제 정보",
      author: "법무팀",
      publishedDate: "2024-04-15",
      views: 356,
    },
  ]

  const filteredUpdates = contentUpdates.filter(
    (update) =>
      update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      update.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      update.author.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  function onSubmit(values: z.infer<typeof formSchema>) {
    // 실제 구현에서는 API 호출을 통해 컨텐츠를 저장합니다
    console.log(values)

    // 성공 메시지 표시
    toast({
      title: isEditing ? "컨텐츠 업데이트가 수정되었습니다" : "새 컨텐츠 업데이트가 생성되었습니다",
      description: isEditing ? "변경사항이 저장되었습니다." : "컨텐츠 업데이트가 성공적으로 등록되었습니다.",
    })

    // 폼 초기화 및 다이얼로그 닫기
    form.reset()
    setIsDialogOpen(false)
    setIsEditing(false)
    setCurrentContentId(null)
  }

  const handleEdit = (contentId: string) => {
    // 실제 구현에서는 API 호출을 통해 컨텐츠 정보를 가져옵니다
    const contentToEdit = contentUpdates.find((content) => content.id === contentId)

    if (contentToEdit) {
      form.reset({
        title: contentToEdit.title,
        category: contentToEdit.category.toLowerCase().replace(/\s+/g, "-"),
        isRecurring: contentToEdit.isRecurring,
        recurringInterval: contentToEdit.interval?.toLowerCase(),
        scheduleDate: contentToEdit.nextUpdate,
        content: "이 컨텐츠 업데이트의 상세 내용입니다. 실제 구현에서는 API를 통해 가져옵니다.",
      })

      setIsEditing(true)
      setCurrentContentId(contentId)
      setIsDialogOpen(true)
    }
  }

  const handleDelete = (contentId: string) => {
    // 실제 구현에서는 API 호출을 통해 컨텐츠를 삭제합니다
    console.log("Deleting content update:", contentId)

    // 성공 메시지 표시
    toast({
      title: "컨텐츠 업데이트가 삭제되었습니다",
      description: "선택한 컨텐츠 업데이트가 성공적으로 삭제되었습니다.",
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
        <h1 className="text-3xl font-bold tracking-tight">컨텐츠 업데이트 관리</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setIsEditing(false)
                form.reset({
                  title: "",
                  content: "",
                  isRecurring: false,
                })
              }}
            >
              <Plus className="mr-2 h-4 w-4" />새 컨텐츠 업데이트 생성
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>{isEditing ? "컨텐츠 업데이트 수정" : "새 컨텐츠 업데이트 생성"}</DialogTitle>
              <DialogDescription>
                {isEditing
                  ? "기존 컨텐츠 업데이트를 수정합니다. 수정 후 저장 버튼을 클릭하세요."
                  : "정기적으로 업데이트될 컨텐츠를 생성합니다."}
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
                        <Input placeholder="컨텐츠 업데이트 제목을 입력하세요" {...field} />
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
                            <SelectItem value="health-info">건강 정보</SelectItem>
                            <SelectItem value="market-analysis">시장 분석</SelectItem>
                            <SelectItem value="product-news">제품 소식</SelectItem>
                            <SelectItem value="regulatory-info">규제 정보</SelectItem>
                            <SelectItem value="industry-news">업계 소식</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="scheduleDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>예정일 *</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="isRecurring"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>정기 업데이트</FormLabel>
                          <FormDescription>정기적으로 반복되는 컨텐츠 업데이트</FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />

                  {form.watch("isRecurring") && (
                    <FormField
                      control={form.control}
                      name="recurringInterval"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>반복 주기</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="반복 주기 선택" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="weekly">주간</SelectItem>
                              <SelectItem value="biweekly">격주</SelectItem>
                              <SelectItem value="monthly">월간</SelectItem>
                              <SelectItem value="quarterly">분기별</SelectItem>
                              <SelectItem value="yearly">연간</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>내용 *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="컨텐츠 업데이트 내용을 입력하세요"
                          className="min-h-[300px]"
                          {...field}
                        />
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
                  <Button type="submit">{isEditing ? "저장" : "생성하기"}</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">예정된 업데이트</TabsTrigger>
          <TabsTrigger value="recent">최근 게시된 업데이트</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>예정된 컨텐츠 업데이트</CardTitle>
              <CardDescription>정기적으로 업데이트되는 컨텐츠를 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="컨텐츠 업데이트 검색..."
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
                      <TableHead>담당자</TableHead>
                      <TableHead>다음 업데이트</TableHead>
                      <TableHead>반복</TableHead>
                      <TableHead className="text-right">작업</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUpdates.map((update) => (
                      <TableRow key={update.id}>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              update.status === "Scheduled"
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : "bg-yellow-50 text-yellow-700 border-yellow-200"
                            }
                          >
                            {update.status === "Scheduled" ? "예정됨" : "초안"}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">{update.title}</TableCell>
                        <TableCell>{update.category}</TableCell>
                        <TableCell>{update.author}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            {update.nextUpdate}
                          </div>
                        </TableCell>
                        <TableCell>
                          {update.isRecurring ? (
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              {update.interval}
                            </div>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </TableCell>
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
                              <DropdownMenuItem onClick={() => handleView(update.id)}>
                                <Eye className="mr-2 h-4 w-4" />
                                보기
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleEdit(update.id)}>
                                <Edit className="mr-2 h-4 w-4" />
                                수정
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(update.id)}>
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
              <div className="text-sm text-muted-foreground">총 {filteredUpdates.length}개의 컨텐츠 업데이트</div>
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
        </TabsContent>

        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle>최근 게시된 업데이트</CardTitle>
              <CardDescription>최근에 게시된 컨텐츠 업데이트 목록입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>제목</TableHead>
                      <TableHead>카테고리</TableHead>
                      <TableHead>담당자</TableHead>
                      <TableHead>게시일</TableHead>
                      <TableHead>조회수</TableHead>
                      <TableHead className="text-right">작업</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUpdates.map((update) => (
                      <TableRow key={update.id}>
                        <TableCell className="font-medium">{update.title}</TableCell>
                        <TableCell>{update.category}</TableCell>
                        <TableCell>{update.author}</TableCell>
                        <TableCell>{update.publishedDate}</TableCell>
                        <TableCell>{update.views}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" onClick={() => handleView(update.id)}>
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
        </TabsContent>
      </Tabs>
    </div>
  )
}

