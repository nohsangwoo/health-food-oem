"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Download, File, FileText, Filter, Folder, Image, MoreHorizontal, Plus, Search, Upload } from "lucide-react"

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useAuthStore } from "@/lib/store/auth-store"

export default function MemberResourcesPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuthStore()
  const [searchQuery, setSearchQuery] = useState("")

  // 로그인 상태 확인
  if (!isAuthenticated) {
    router.push("/login?redirect=/member/resources")
    return null
  }

  const categories = [
    { id: "all", name: "전체 파일" },
    { id: "documents", name: "문서" },
    { id: "reports", name: "보고서" },
    { id: "formulations", name: "포뮬레이션" },
    { id: "designs", name: "디자인" },
    { id: "shared", name: "공유 받은 파일" },
  ]

  const files = [
    {
      id: "file-1",
      name: "비타민 C 제품 사양서.pdf",
      type: "PDF",
      category: "documents",
      size: "2.4 MB",
      modified: "2024-03-15",
      project: "비타민 C 보충제",
      shared: true,
      icon: <FileText className="h-4 w-4 text-blue-500" />,
    },
    {
      id: "file-2",
      name: "프로바이오틱스 포뮬라 분석.xlsx",
      type: "Excel",
      category: "reports",
      size: "1.8 MB",
      modified: "2024-03-12",
      project: "프로바이오틱스 포뮬라",
      shared: true,
      icon: <FileText className="h-4 w-4 text-green-500" />,
    },
    {
      id: "file-3",
      name: "오메가-3 제품 라벨.png",
      type: "Image",
      category: "designs",
      size: "3.2 MB",
      modified: "2024-03-10",
      project: "오메가-3 피쉬 오일",
      shared: false,
      icon: <Image className="h-4 w-4 text-purple-500" />,
    },
    {
      id: "file-4",
      name: "멀티비타민 포뮬레이션.docx",
      type: "Word",
      category: "formulations",
      size: "1.2 MB",
      modified: "2024-03-08",
      project: "멀티비타민 복합체",
      shared: true,
      icon: <FileText className="h-4 w-4 text-blue-500" />,
    },
    {
      id: "file-5",
      name: "단백질 파우더 테스트 결과.pdf",
      type: "PDF",
      category: "reports",
      size: "4.5 MB",
      modified: "2024-03-05",
      project: "단백질 파우더",
      shared: false,
      icon: <FileText className="h-4 w-4 text-blue-500" />,
    },
    {
      id: "file-6",
      name: "포장 디자인 초안.ai",
      type: "Illustrator",
      category: "designs",
      size: "8.7 MB",
      modified: "2024-03-03",
      project: "비타민 C 보충제",
      shared: true,
      icon: <File className="h-4 w-4 text-orange-500" />,
    },
    {
      id: "file-7",
      name: "마케팅 자료.zip",
      type: "Archive",
      category: "documents",
      size: "15.2 MB",
      modified: "2024-02-28",
      project: "프로바이오틱스 포뮬라",
      shared: true,
      icon: <File className="h-4 w-4 text-gray-500" />,
    },
  ]

  const folders = [
    {
      id: "folder-1",
      name: "비타민 C 보충제",
      type: "Folder",
      items: 12,
      modified: "2024-03-15",
      icon: <Folder className="h-4 w-4 text-blue-500" />,
    },
    {
      id: "folder-2",
      name: "프로바이오틱스 포뮬라",
      type: "Folder",
      items: 8,
      modified: "2024-03-12",
      icon: <Folder className="h-4 w-4 text-blue-500" />,
    },
    {
      id: "folder-3",
      name: "오메가-3 피쉬 오일",
      type: "Folder",
      items: 5,
      modified: "2024-03-10",
      icon: <Folder className="h-4 w-4 text-blue-500" />,
    },
  ]

  const filteredFiles = files.filter(
    (file) =>
      file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.project.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredFolders = folders.filter((folder) => folder.name.toLowerCase().includes(searchQuery.toLowerCase()))

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
                <h1 className="text-3xl font-bold tracking-tight">자료실</h1>
                <p className="text-muted-foreground">프로젝트 관련 문서와 자료를 관리하세요</p>
              </div>
              <div className="flex items-center gap-2">
                <Button asChild variant="outline">
                  <Link href="/member/dashboard">대시보드 바로가기</Link>
                </Button>
                <Button>
                  <Upload className="mr-2 h-4 w-4" />
                  파일 업로드
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Tabs defaultValue="all" className="space-y-4">
                <div className="flex justify-between items-center">
                  <TabsList>
                    {categories.map((category) => (
                      <TabsTrigger key={category.id} value={category.id}>
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-4 w-4" />새 폴더
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="파일 검색..."
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

                {categories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="space-y-4">
                    {filteredFolders.length > 0 && (
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle>폴더</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredFolders.map((folder) => (
                              <Card key={folder.id} className="cursor-pointer hover:bg-muted/50">
                                <CardContent className="p-4">
                                  <div className="flex items-center gap-3">
                                    {folder.icon}
                                    <div className="flex-1 min-w-0">
                                      <p className="font-medium truncate">{folder.name}</p>
                                      <p className="text-sm text-muted-foreground">
                                        {folder.items}개 항목 • {new Date(folder.modified).toLocaleDateString("ko-KR")}
                                      </p>
                                    </div>
                                    <Button variant="ghost" size="icon">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle>파일</CardTitle>
                        <CardDescription>
                          {category.id === "all"
                            ? "모든 파일"
                            : category.id === "shared"
                              ? "공유 받은 파일"
                              : `${category.name} 카테고리의 파일`}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-md border">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>이름</TableHead>
                                <TableHead>프로젝트</TableHead>
                                <TableHead>유형</TableHead>
                                <TableHead>크기</TableHead>
                                <TableHead>수정일</TableHead>
                                <TableHead>상태</TableHead>
                                <TableHead className="text-right">작업</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {filteredFiles
                                .filter(
                                  (file) =>
                                    category.id === "all" ||
                                    (category.id === "shared" && file.shared) ||
                                    file.category === category.id,
                                )
                                .map((file) => (
                                  <TableRow key={file.id}>
                                    <TableCell className="font-medium">
                                      <div className="flex items-center gap-2">
                                        {file.icon}
                                        {file.name}
                                      </div>
                                    </TableCell>
                                    <TableCell>{file.project}</TableCell>
                                    <TableCell>{file.type}</TableCell>
                                    <TableCell>{file.size}</TableCell>
                                    <TableCell>{new Date(file.modified).toLocaleDateString("ko-KR")}</TableCell>
                                    <TableCell>
                                      {file.shared ? (
                                        <Badge
                                          variant="outline"
                                          className="bg-green-50 text-green-700 border-green-200"
                                        >
                                          공유됨
                                        </Badge>
                                      ) : (
                                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                          개인
                                        </Badge>
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
                                          <DropdownMenuItem>
                                            <Download className="mr-2 h-4 w-4" />
                                            다운로드
                                          </DropdownMenuItem>
                                          <DropdownMenuItem>
                                            <span>공유</span>
                                          </DropdownMenuItem>
                                          <DropdownMenuSeparator />
                                          <DropdownMenuItem className="text-red-600">
                                            <span>삭제</span>
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
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

