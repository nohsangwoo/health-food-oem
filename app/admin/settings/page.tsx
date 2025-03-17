"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Save,
  Upload,
  Shield,
  Bell,
  Lock,
  Database,
  Key,
  Globe,
  RefreshCw,
  Trash2,
  Info,
  AlertTriangle,
  Download,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/hooks/use-toast"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// 일반 설정 폼 스키마
const generalSettingsSchema = z.object({
  siteName: z.string().min(2, {
    message: "사이트 이름은 최소 2자 이상이어야 합니다.",
  }),
  siteDescription: z.string().min(10, {
    message: "사이트 설명은 최소 10자 이상이어야 합니다.",
  }),
  contactEmail: z.string().email({
    message: "유효한 이메일 주소를 입력해주세요.",
  }),
  contactPhone: z.string().min(10, {
    message: "유효한 전화번호를 입력해주세요.",
  }),
  logoUrl: z.string().optional(),
  faviconUrl: z.string().optional(),
  mainColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: "유효한 HEX 색상 코드를 입력해주세요.",
  }),
  secondaryColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: "유효한 HEX 색상 코드를 입력해주세요.",
  }),
  language: z.string(),
  timezone: z.string(),
})

// 알림 설정 폼 스키마
const notificationSettingsSchema = z.object({
  emailNotifications: z.boolean(),
  newUserNotification: z.boolean(),
  newMessageNotification: z.boolean(),
  systemAlerts: z.boolean(),
  marketingEmails: z.boolean(),
  emailSender: z.string().email({
    message: "유효한 이메일 주소를 입력해주세요.",
  }),
  emailFooter: z.string(),
})

// 보안 설정 폼 스키마
const securitySettingsSchema = z.object({
  twoFactorAuth: z.boolean(),
  passwordPolicy: z.string(),
  sessionTimeout: z.string(),
  loginAttempts: z.string(),
  ipRestriction: z.boolean(),
  allowedIps: z.string().optional(),
})

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")

  // 일반 설정 폼
  const generalForm = useForm<z.infer<typeof generalSettingsSchema>>({
    resolver: zodResolver(generalSettingsSchema),
    defaultValues: {
      siteName: "헬스OEM",
      siteDescription: "건강기능식품 OEM 서비스를 제공하는 전문 기업입니다.",
      contactEmail: "contact@healthoem.com",
      contactPhone: "02-1234-5678",
      logoUrl: "/logo.png",
      faviconUrl: "/favicon.ico",
      mainColor: "#4f46e5",
      secondaryColor: "#10b981",
      language: "ko",
      timezone: "Asia/Seoul",
    },
  })

  // 알림 설정 폼
  const notificationForm = useForm<z.infer<typeof notificationSettingsSchema>>({
    resolver: zodResolver(notificationSettingsSchema),
    defaultValues: {
      emailNotifications: true,
      newUserNotification: true,
      newMessageNotification: true,
      systemAlerts: true,
      marketingEmails: false,
      emailSender: "noreply@healthoem.com",
      emailFooter: "© 2024 헬스OEM. 모든 권리 보유.",
    },
  })

  // 보안 설정 폼
  const securityForm = useForm<z.infer<typeof securitySettingsSchema>>({
    resolver: zodResolver(securitySettingsSchema),
    defaultValues: {
      twoFactorAuth: false,
      passwordPolicy: "strong",
      sessionTimeout: "30",
      loginAttempts: "5",
      ipRestriction: false,
      allowedIps: "",
    },
  })

  // API 키 목록
  const apiKeys = [
    {
      id: "api-key-1",
      name: "웹사이트 통합",
      key: "sk_live_51Abcd1234Efgh5678Ijkl9012",
      created: "2024-01-15",
      lastUsed: "2024-06-15",
      status: "active",
    },
    {
      id: "api-key-2",
      name: "모바일 앱 통합",
      key: "sk_live_51Mnop3456Qrst7890Uvwx1234",
      created: "2024-02-20",
      lastUsed: "2024-06-14",
      status: "active",
    },
    {
      id: "api-key-3",
      name: "테스트 환경",
      key: "sk_test_51Yzab5678Cdef9012Ghij3456",
      created: "2024-03-10",
      lastUsed: "2024-05-28",
      status: "inactive",
    },
  ]

  // 통합 서비스 목록
  const integrations = [
    {
      id: "int-1",
      name: "Google Analytics",
      description: "웹사이트 트래픽 및 사용자 행동 분석",
      status: "connected",
      lastSync: "2024-06-15 09:45",
    },
    {
      id: "int-2",
      name: "Mailchimp",
      description: "이메일 마케팅 및 뉴스레터 관리",
      status: "connected",
      lastSync: "2024-06-14 16:30",
    },
    {
      id: "int-3",
      name: "Slack",
      description: "팀 커뮤니케이션 및 알림",
      status: "disconnected",
      lastSync: "2024-05-28 11:20",
    },
    {
      id: "int-4",
      name: "PayPal",
      description: "결제 처리 및 관리",
      status: "connected",
      lastSync: "2024-06-12 14:15",
    },
  ]

  // 폼 제출 핸들러
  const onSubmitGeneral = (data: z.infer<typeof generalSettingsSchema>) => {
    console.log("일반 설정 저장:", data)
    toast({
      title: "설정이 저장되었습니다",
      description: "일반 설정이 성공적으로 업데이트되었습니다.",
    })
  }

  const onSubmitNotification = (data: z.infer<typeof notificationSettingsSchema>) => {
    console.log("알림 설정 저장:", data)
    toast({
      title: "설정이 저장되었습니다",
      description: "알림 설정이 성공적으로 업데이트되었습니다.",
    })
  }

  const onSubmitSecurity = (data: z.infer<typeof securitySettingsSchema>) => {
    console.log("보안 설정 저장:", data)
    toast({
      title: "설정이 저장되었습니다",
      description: "보안 설정이 성공적으로 업데이트되었습니다.",
    })
  }

  // 백업 생성 핸들러
  const handleCreateBackup = () => {
    toast({
      title: "백업이 시작되었습니다",
      description: "백업 프로세스가 백그라운드에서 실행 중입니다. 완료되면 알림을 받게 됩니다.",
    })
  }

  // 백업 복원 핸들러
  const handleRestoreBackup = () => {
    toast({
      title: "복원이 시작되었습니다",
      description: "복원 프로세스가 백그라운드에서 실행 중입니다. 완료되면 알림을 받게 됩니다.",
    })
  }

  // API 키 생성 핸들러
  const handleCreateApiKey = () => {
    toast({
      title: "API 키가 생성되었습니다",
      description: "새 API 키가 성공적으로 생성되었습니다.",
    })
  }

  // API 키 삭제 핸들러
  const handleDeleteApiKey = (keyId: string) => {
    toast({
      title: "API 키가 삭제되었습니다",
      description: "선택한 API 키가 성공적으로 삭제되었습니다.",
    })
  }

  // 통합 연결/연결 해제 핸들러
  const handleToggleIntegration = (integrationId: string, currentStatus: string) => {
    const newStatus = currentStatus === "connected" ? "disconnected" : "connected"
    toast({
      title: `통합이 ${newStatus === "connected" ? "연결" : "연결 해제"}되었습니다`,
      description: `선택한 통합이 성공적으로 ${newStatus === "connected" ? "연결" : "연결 해제"}되었습니다.`,
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">설정</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">일반</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">사용자 권한</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">알림</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span className="hidden sm:inline">보안</span>
          </TabsTrigger>
          <TabsTrigger value="backup" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span className="hidden sm:inline">백업</span>
          </TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center gap-2">
            <Key className="h-4 w-4" />
            <span className="hidden sm:inline">통합</span>
          </TabsTrigger>
        </TabsList>

        {/* 일반 설정 */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>일반 설정</CardTitle>
              <CardDescription>웹사이트의 기본 정보 및 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...generalForm}>
                <form onSubmit={generalForm.handleSubmit(onSubmitGeneral)} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={generalForm.control}
                      name="siteName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>사이트 이름</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>웹사이트 제목으로 표시됩니다.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={generalForm.control}
                      name="contactEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>연락처 이메일</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>문의 및 연락을 위한 이메일 주소입니다.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={generalForm.control}
                    name="siteDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>사이트 설명</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={3} />
                        </FormControl>
                        <FormDescription>검색 엔진 및 메타 설명에 사용됩니다.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={generalForm.control}
                      name="contactPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>연락처 전화번호</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={generalForm.control}
                      name="language"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>기본 언어</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="언어 선택" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ko">한국어</SelectItem>
                              <SelectItem value="en">영어</SelectItem>
                              <SelectItem value="ja">일본어</SelectItem>
                              <SelectItem value="zh">중국어</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Separator />

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-4 text-lg font-medium">로고 및 파비콘</h3>
                      <div className="space-y-4">
                        <FormField
                          control={generalForm.control}
                          name="logoUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>로고 URL</FormLabel>
                              <div className="flex items-center gap-2">
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <Button type="button" variant="outline" size="icon">
                                  <Upload className="h-4 w-4" />
                                </Button>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={generalForm.control}
                          name="faviconUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>파비콘 URL</FormLabel>
                              <div className="flex items-center gap-2">
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <Button type="button" variant="outline" size="icon">
                                  <Upload className="h-4 w-4" />
                                </Button>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-4 text-lg font-medium">색상 설정</h3>
                      <div className="space-y-4">
                        <FormField
                          control={generalForm.control}
                          name="mainColor"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>주 색상</FormLabel>
                              <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-md border" style={{ backgroundColor: field.value }} />
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                              </div>
                              <FormDescription>버튼, 링크 등의 주요 색상입니다.</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={generalForm.control}
                          name="secondaryColor"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>보조 색상</FormLabel>
                              <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-md border" style={{ backgroundColor: field.value }} />
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                              </div>
                              <FormDescription>강조 요소 및 보조 색상입니다.</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">
                      <Save className="mr-2 h-4 w-4" />
                      설정 저장
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 사용자 권한 설정 */}
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>사용자 권한 설정</CardTitle>
              <CardDescription>사용자 역할 및 권한을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">역할 관리</h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>역할</TableHead>
                        <TableHead>설명</TableHead>
                        <TableHead>사용자 수</TableHead>
                        <TableHead className="text-right">작업</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">관리자</TableCell>
                        <TableCell>모든 기능에 대한 전체 접근 권한</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            편집
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">편집자</TableCell>
                        <TableCell>컨텐츠 관리 및 편집 권한</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            편집
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">회원</TableCell>
                        <TableCell>기본 회원 권한</TableCell>
                        <TableCell>128</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            편집
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">게스트</TableCell>
                        <TableCell>제한된 읽기 전용 접근</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            편집
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="flex justify-end">
                  <Button>새 역할 추가</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">권한 설정</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">컨텐츠 관리</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">컨텐츠 생성</p>
                            <p className="text-sm text-muted-foreground">새 컨텐츠 작성 권한</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <Select defaultValue="admin-editor">
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="역할 선택" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="admin">관리자만</SelectItem>
                                <SelectItem value="admin-editor">관리자 및 편집자</SelectItem>
                                <SelectItem value="all-members">모든 회원</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">컨텐츠 편집</p>
                            <p className="text-sm text-muted-foreground">기존 컨텐츠 수정 권한</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <Select defaultValue="admin-editor">
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="역할 선택" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="admin">관리자만</SelectItem>
                                <SelectItem value="admin-editor">관리자 및 편집자</SelectItem>
                                <SelectItem value="all-members">모든 회원</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">컨텐츠 삭제</p>
                            <p className="text-sm text-muted-foreground">컨텐츠 삭제 권한</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <Select defaultValue="admin">
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="역할 선택" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="admin">관리자만</SelectItem>
                                <SelectItem value="admin-editor">관리자 및 편집자</SelectItem>
                                <SelectItem value="all-members">모든 회원</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">사용자 관리</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">사용자 추가</p>
                            <p className="text-sm text-muted-foreground">새 사용자 추가 권한</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <Select defaultValue="admin">
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="역할 선택" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="admin">관리자만</SelectItem>
                                <SelectItem value="admin-editor">관리자 및 편집자</SelectItem>
                                <SelectItem value="all-members">모든 회원</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">사용자 편집</p>
                            <p className="text-sm text-muted-foreground">사용자 정보 수정 권한</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <Select defaultValue="admin">
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="역할 선택" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="admin">관리자만</SelectItem>
                                <SelectItem value="admin-editor">관리자 및 편집자</SelectItem>
                                <SelectItem value="all-members">모든 회원</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">사용자 삭제</p>
                            <p className="text-sm text-muted-foreground">사용자 계정 삭제 권한</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <Select defaultValue="admin">
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="역할 선택" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="admin">관리자만</SelectItem>
                                <SelectItem value="admin-editor">관리자 및 편집자</SelectItem>
                                <SelectItem value="all-members">모든 회원</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  권한 설정 저장
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 알림 설정 */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>알림 설정</CardTitle>
              <CardDescription>이메일 및 시스템 알림 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...notificationForm}>
                <form onSubmit={notificationForm.handleSubmit(onSubmitNotification)} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">이메일 알림</h3>

                    <FormField
                      control={notificationForm.control}
                      name="emailNotifications"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">이메일 알림 활성화</FormLabel>
                            <FormDescription>모든 이메일 알림을 활성화 또는 비활성화합니다.</FormDescription>
                          </div>
                          <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        control={notificationForm.control}
                        name="newUserNotification"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel>새 사용자 등록 알림</FormLabel>
                              <FormDescription>새 사용자가 등록할 때 알림을 받습니다.</FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                disabled={!notificationForm.watch("emailNotifications")}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={notificationForm.control}
                        name="newMessageNotification"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel>새 메시지 알림</FormLabel>
                              <FormDescription>새 메시지가 도착할 때 알림을 받습니다.</FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                disabled={!notificationForm.watch("emailNotifications")}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={notificationForm.control}
                        name="systemAlerts"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel>시스템 알림</FormLabel>
                              <FormDescription>중요한 시스템 이벤트에 대한 알림을 받습니다.</FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                disabled={!notificationForm.watch("emailNotifications")}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={notificationForm.control}
                        name="marketingEmails"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel>마케팅 이메일</FormLabel>
                              <FormDescription>마케팅 및 프로모션 이메일을 받습니다.</FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                disabled={!notificationForm.watch("emailNotifications")}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">이메일 설정</h3>

                    <FormField
                      control={notificationForm.control}
                      name="emailSender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>발신자 이메일</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>알림 이메일의 발신자 주소입니다.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={notificationForm.control}
                      name="emailFooter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>이메일 푸터</FormLabel>
                          <FormControl>
                            <Textarea {...field} rows={3} />
                          </FormControl>
                          <FormDescription>모든 이메일 하단에 표시될 텍스트입니다.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">
                      <Save className="mr-2 h-4 w-4" />
                      설정 저장
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 보안 설정 */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>보안 설정</CardTitle>
              <CardDescription>계정 및 시스템 보안 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...securityForm}>
                <form onSubmit={securityForm.handleSubmit(onSubmitSecurity)} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">인증 설정</h3>

                    <FormField
                      control={securityForm.control}
                      name="twoFactorAuth"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">2단계 인증</FormLabel>
                            <FormDescription>관리자 계정에 2단계 인증을 필수로 설정합니다.</FormDescription>
                          </div>
                          <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={securityForm.control}
                      name="passwordPolicy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>비밀번호 정책</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="비밀번호 정책 선택" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="basic">기본 (최소 8자)</SelectItem>
                              <SelectItem value="medium">중간 (최소 10자, 숫자 포함)</SelectItem>
                              <SelectItem value="strong">강력 (최소 12자, 숫자, 특수문자 포함)</SelectItem>
                              <SelectItem value="very-strong">
                                매우 강력 (최소 14자, 대소문자, 숫자, 특수문자 포함)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>사용자 비밀번호 요구사항을 설정합니다.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={securityForm.control}
                      name="sessionTimeout"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>세션 타임아웃 (분)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="시간 선택" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="15">15분</SelectItem>
                              <SelectItem value="30">30분</SelectItem>
                              <SelectItem value="60">1시간</SelectItem>
                              <SelectItem value="120">2시간</SelectItem>
                              <SelectItem value="240">4시간</SelectItem>
                              <SelectItem value="480">8시간</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>비활성 상태 후 자동 로그아웃 시간입니다.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={securityForm.control}
                      name="loginAttempts"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>최대 로그인 시도 횟수</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="횟수 선택" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="3">3회</SelectItem>
                              <SelectItem value="5">5회</SelectItem>
                              <SelectItem value="10">10회</SelectItem>
                              <SelectItem value="unlimited">제한 없음</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>실패 후 계정이 잠깁니다.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">IP 제한</h3>

                    <FormField
                      control={securityForm.control}
                      name="ipRestriction"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">IP 제한 활성화</FormLabel>
                            <FormDescription>
                              특정 IP 주소에서만 관리자 페이지에 접근할 수 있도록 제한합니다.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {securityForm.watch("ipRestriction") && (
                      <FormField
                        control={securityForm.control}
                        name="allowedIps"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>허용된 IP 주소</FormLabel>
                            <FormControl>
                              <Textarea {...field} rows={3} placeholder="각 IP를 새 줄에 입력하세요. 예: 192.168.1.1" />
                            </FormControl>
                            <FormDescription>
                              각 IP 주소를 새 줄에 입력하세요. CIDR 표기법도 지원합니다 (예: 192.168.1.0/24).
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>

                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>주의</AlertTitle>
                    <AlertDescription>
                      IP 제한을 활성화하면 지정된 IP 주소에서만 관리자 페이지에 접근할 수 있습니다. 현재 IP 주소가
                      목록에 포함되어 있는지 확인하세요.
                    </AlertDescription>
                  </Alert>

                  <div className="flex justify-end">
                    <Button type="submit">
                      <Save className="mr-2 h-4 w-4" />
                      설정 저장
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 백업 설정 */}
        <TabsContent value="backup">
          <Card>
            <CardHeader>
              <CardTitle>백업 및 복원</CardTitle>
              <CardDescription>데이터 백업 및 복원 설정을 관리합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">수동 백업</h3>
                <p className="text-sm text-muted-foreground">현재 데이터베이스 및 파일의 전체 백업을 생성합니다.</p>
                <div className="flex items-center gap-4">
                  <Button onClick={handleCreateBackup}>
                    <Database className="mr-2 h-4 w-4" />
                    백업 생성
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    최신 백업 다운로드
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">자동 백업 설정</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">자동 백업 활성화</p>
                        <p className="text-sm text-muted-foreground">정기적인 자동 백업을 활성화합니다.</p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>

                    <div>
                      <label className="text-sm font-medium">백업 주기</label>
                      <Select defaultValue="daily">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="주기 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">매시간</SelectItem>
                          <SelectItem value="daily">매일</SelectItem>
                          <SelectItem value="weekly">매주</SelectItem>
                          <SelectItem value="monthly">매월</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="mt-1 text-xs text-muted-foreground">백업이 자동으로 생성되는 주기입니다.</p>
                    </div>

                    <div>
                      <label className="text-sm font-medium">보관 기간</label>
                      <Select defaultValue="30">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="기간 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7">7일</SelectItem>
                          <SelectItem value="14">14일</SelectItem>
                          <SelectItem value="30">30일</SelectItem>
                          <SelectItem value="90">90일</SelectItem>
                          <SelectItem value="365">1년</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="mt-1 text-xs text-muted-foreground">
                        백업 파일이 자동으로 삭제되기 전까지의 기간입니다.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">백업 위치</label>
                      <Select defaultValue="local">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="위치 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="local">로컬 서버</SelectItem>
                          <SelectItem value="cloud">클라우드 스토리지</SelectItem>
                          <SelectItem value="both">로컬 및 클라우드</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="mt-1 text-xs text-muted-foreground">백업 파일이 저장될 위치입니다.</p>
                    </div>

                    <div>
                      <label className="text-sm font-medium">백업 알림</label>
                      <Select defaultValue="errors">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="알림 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">모든 백업</SelectItem>
                          <SelectItem value="errors">오류 발생 시에만</SelectItem>
                          <SelectItem value="none">알림 없음</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="mt-1 text-xs text-muted-foreground">
                        백업 완료 또는 오류 시 알림을 받을지 설정합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">백업 복원</h3>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>복원 주의사항</AlertTitle>
                  <AlertDescription>
                    백업 복원 시 현재 데이터가 모두 삭제되고 백업 시점의 데이터로 대체됩니다. 이 작업은 되돌릴 수 없으니
                    신중하게 진행하세요.
                  </AlertDescription>
                </Alert>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>백업 이름</TableHead>
                        <TableHead>생성 일시</TableHead>
                        <TableHead>크기</TableHead>
                        <TableHead>유형</TableHead>
                        <TableHead className="text-right">작업</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">backup-20240615-0930.zip</TableCell>
                        <TableCell>2024-06-15 09:30</TableCell>
                        <TableCell>256 MB</TableCell>
                        <TableCell>전체 백업</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" onClick={handleRestoreBackup}>
                            복원
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">backup-20240614-0930.zip</TableCell>
                        <TableCell>2024-06-14 09:30</TableCell>
                        <TableCell>254 MB</TableCell>
                        <TableCell>전체 백업</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" onClick={handleRestoreBackup}>
                            복원
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">backup-20240613-0930.zip</TableCell>
                        <TableCell>2024-06-13 09:30</TableCell>
                        <TableCell>252 MB</TableCell>
                        <TableCell>전체 백업</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" onClick={handleRestoreBackup}>
                            복원
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="flex items-center gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        백업 파일 업로드
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>백업 파일 업로드</DialogTitle>
                        <DialogDescription>
                          복원할 백업 파일을 선택하세요. 업로드된 파일은 검증 후 복원 가능한 목록에 추가됩니다.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="backup-file">백업 파일</Label>
                          <Input id="backup-file" type="file" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="button" variant="outline">
                          취소
                        </Button>
                        <Button type="button">업로드</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  설정 저장
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 통합 설정 */}
        <TabsContent value="integrations">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>API 키 관리</CardTitle>
                <CardDescription>외부 서비스 연동을 위한 API 키를 관리합니다.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>이름</TableHead>
                        <TableHead>생성일</TableHead>
                        <TableHead>상태</TableHead>
                        <TableHead className="text-right">작업</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {apiKeys.map((key) => (
                        <TableRow key={key.id}>
                          <TableCell className="font-medium">{key.name}</TableCell>
                          <TableCell>{key.created}</TableCell>
                          <TableCell>
                            <Badge variant={key.status === "active" ? "default" : "secondary"}>
                              {key.status === "active" ? "활성" : "비활성"}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon" onClick={() => handleDeleteApiKey(key.id)}>
                              <Trash2 className="h-4 w-4 text-destructive" />
                              <span className="sr-only">삭제</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex justify-end">
                  <Button onClick={handleCreateApiKey}>새 API 키 생성</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>외부 서비스 통합</CardTitle>
                <CardDescription>외부 서비스와의 연동을 관리합니다.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {integrations.map((integration) => (
                    <div key={integration.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="space-y-1">
                        <h4 className="font-medium">{integration.name}</h4>
                        <p className="text-sm text-muted-foreground">{integration.description}</p>
                        {integration.status === "connected" && (
                          <p className="text-xs text-muted-foreground">마지막 동기화: {integration.lastSync}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={integration.status === "connected" ? "default" : "outline"}>
                          {integration.status === "connected" ? "연결됨" : "연결 안됨"}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleToggleIntegration(integration.id, integration.status)}
                        >
                          {integration.status === "connected" ? "연결 해제" : "연결"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    모든 통합 동기화
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

