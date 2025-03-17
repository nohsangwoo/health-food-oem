import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Pin } from "lucide-react"

export default function CommunityPage() {
  // 관리자 공지사항 및 중요 컨텐츠
  const adminAnnouncements = [
    {
      id: "admin-1",
      title: "[공지] 건강기능식품 OEM 서비스 가격 정책 변경 안내",
      author: {
        name: "관리자",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "관",
        isAdmin: true,
      },
      category: "공지사항",
      replies: 0,
      views: 542,
      lastActivity: "1일 전",
      isPinned: true,
    },
    {
      id: "admin-2",
      title: "[중요] 2024년 하반기 신제품 출시 일정 안내",
      author: {
        name: "제품팀",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "제",
        isAdmin: true,
      },
      category: "제품 소식",
      replies: 5,
      views: 328,
      lastActivity: "3일 전",
      isPinned: true,
    },
  ]

  // 일반 사용자 토론
  const discussions = [
    {
      id: "disc-1",
      title: "비타민 포뮬레이션 최적화 방법에 대한 질문",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SJ",
        isAdmin: false,
      },
      category: "포뮬레이션",
      replies: 12,
      views: 245,
      lastActivity: "2시간 전",
      isPinned: false,
    },
    {
      id: "disc-2",
      title: "신규 건강기능식품 규제 준수 방법",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
        isAdmin: false,
      },
      category: "규제",
      replies: 8,
      views: 189,
      lastActivity: "5시간 전",
      isPinned: false,
    },
    {
      id: "disc-3",
      title: "건강기능식품 지속가능한 포장 옵션",
      author: {
        name: "Emma Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ER",
        isAdmin: false,
      },
      category: "포장",
      replies: 15,
      views: 302,
      lastActivity: "1일 전",
      isPinned: false,
    },
    {
      id: "disc-4",
      title: "프로바이오틱스 제품 품질 관리 방법",
      author: {
        name: "David Kim",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "DK",
        isAdmin: false,
      },
      category: "품질 관리",
      replies: 7,
      views: 156,
      lastActivity: "2일 전",
      isPinned: false,
    },
    {
      id: "disc-5",
      title: "2024년 기능성 식품 원료 트렌드",
      author: {
        name: "Lisa Wang",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "LW",
        isAdmin: false,
      },
      category: "시장 트렌드",
      replies: 21,
      views: 412,
      lastActivity: "3일 전",
      isPinned: false,
    },
  ]

  const faqs = [
    {
      question: "헬스OEM은 어떤 서비스를 제공하나요?",
      answer:
        "헬스OEM은 건강기능식품 OEM 솔루션을 제공하는 회사로, 포뮬레이션 개발, 제조, 포장, 규제 준수 지원 등 종합적인 서비스를 제공합니다. 브랜드의 요구사항에 맞춘 맞춤형 건강기능식품을 개발해 드립니다.",
    },
    {
      question: "최소 주문 수량(MOQ)은 얼마인가요?",
      answer:
        "최소 주문 수량은 제품 유형과 복잡성에 따라 다릅니다. 일반적으로 SKU당 1,000~5,000개 범위입니다. 구체적인 정보는 영업팀에 문의해 주세요.",
    },
    {
      question: "제품 개발 기간은 얼마나 걸리나요?",
      answer:
        "제품 복잡성에 따라 다르지만, 일반적으로 2~6개월이 소요됩니다. 이 기간에는 포뮬레이션 개발, 안정성 테스트, 포장 디자인, 규제 승인 등이 포함됩니다. 초기 상담 시 자세한 일정을 안내해 드립니다.",
    },
    {
      question: "포장 디자인 서비스도 제공하나요?",
      answer:
        "네, OEM 솔루션의 일환으로 포괄적인 포장 디자인 서비스를 제공합니다. 디자인팀이 고객의 브랜드 아이덴티티에 맞는 포장을 디자인하며, 규제 요구사항을 준수하도록 합니다.",
    },
    {
      question: "어떤 품질 인증을 보유하고 있나요?",
      answer:
        "헬스OEM은 엄격한 품질 기준을 유지하며 KGMP, ISO 22000, HACCP, 유기농 인증 등을 보유하고 있습니다. 시설은 정기적인 감사를 통해 국제 품질 기준 준수를 확인받습니다.",
    },
  ]

  // 모든 게시글 (관리자 공지 + 일반 토론)
  const allPosts = [...adminAnnouncements, ...discussions]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">커뮤니티 & 지원</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  건강기능식품 전문가 커뮤니티에 참여하고 필요한 지원을 받으세요
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#discussions">토론 참여하기</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#faq">FAQ 보기</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="discussions" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="discussions" className="space-y-8">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="discussions">토론</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                <Button>새 토론 시작하기</Button>
              </div>

              <TabsContent value="discussions" className="space-y-4">
                {/* 관리자 공지사항 섹션 */}
                {adminAnnouncements.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">공지사항</h2>
                    <div className="space-y-4">
                      {adminAnnouncements.map((announcement) => (
                        <Card key={announcement.id} className="border-primary/20 bg-primary/5">
                          <CardHeader className="flex flex-row items-start justify-between space-y-0">
                            <div className="flex items-start gap-2">
                              <Pin className="h-5 w-5 text-primary mt-1" />
                              <div>
                                <CardTitle className="text-xl">
                                  <Link href={`/community/discussion/${announcement.id}`} className="hover:underline">
                                    {announcement.title}
                                  </Link>
                                </CardTitle>
                                <CardDescription className="flex items-center gap-2 mt-1">
                                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                    {announcement.category}
                                  </Badge>
                                  <span>• {announcement.replies} 답변</span>
                                  <span>• {announcement.views} 조회</span>
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardFooter className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8 border-2 border-primary">
                                <AvatarImage src={announcement.author.avatar} alt={announcement.author.name} />
                                <AvatarFallback>{announcement.author.initials}</AvatarFallback>
                              </Avatar>
                              <div>
                                <span className="text-sm font-medium flex items-center gap-1">
                                  {announcement.author.name}
                                  <Badge
                                    variant="outline"
                                    className="ml-1 text-xs bg-primary/10 text-primary border-primary/20"
                                  >
                                    관리자
                                  </Badge>
                                </span>
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              마지막 활동: {announcement.lastActivity}
                            </span>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* 일반 토론 섹션 */}
                <h2 className="text-xl font-bold mb-4">최근 토론</h2>
                <div className="space-y-4">
                  {discussions.map((discussion) => (
                    <Card key={discussion.id}>
                      <CardHeader className="flex flex-row items-start justify-between space-y-0">
                        <div>
                          <CardTitle className="text-xl">
                            <Link href={`/community/discussion/${discussion.id}`} className="hover:underline">
                              {discussion.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{discussion.category}</Badge>
                            <span>• {discussion.replies} 답변</span>
                            <span>• {discussion.views} 조회</span>
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                            <AvatarFallback>{discussion.author.initials}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{discussion.author.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">마지막 활동: {discussion.lastActivity}</span>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button variant="outline">더 보기</Button>
                </div>
              </TabsContent>

              <TabsContent value="faq" id="faq" className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

