"use client"

import { useState } from "react"
import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MessageSquare, ThumbsUp, Share, Flag, Pin } from "lucide-react"

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

export default function DiscussionDetailPage() {
  const params = useParams()
  const discussionId = params.id as string
  const [replyText, setReplyText] = useState("")

  // 관리자 공지사항 및 중요 컨텐츠
  const adminAnnouncements = [
    {
      id: "admin-1",
      title: "[공지] 건강기능식품 OEM 서비스 가격 정책 변경 안내",
      content: `안녕하세요, 헬스OEM 관리자입니다.

2024년 7월 1일부터 적용되는 건강기능식품 OEM 서비스 가격 정책 변경에 대해 안내드립니다.

## 주요 변경 사항
1. 소량 생산(1,000~3,000개) 기본 요금 5% 인상
2. 대량 생산(10,000개 이상) 할인율 2% 추가 적용
3. 포장 디자인 서비스 기본 패키지 옵션 추가

자세한 내용은 영업팀에 문의해 주시기 바랍니다.
감사합니다.`,
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
      createdAt: "2024-06-15T09:30:00Z",
      isPinned: true,
      replies: [],
    },
    {
      id: "admin-2",
      title: "[중요] 2024년 하반기 신제품 출시 일정 안내",
      content: `안녕하세요, 헬스OEM 제품팀입니다.

2024년 하반기에 출시 예정인 신제품 라인업과 일정을 안내드립니다.

## 7월 출시 예정
- 고함량 비타민 D3+K2 복합 제품
- 식물성 단백질 파우더 (바닐라, 초콜릿 맛)

## 8월 출시 예정
- 프리미엄 프로바이오틱스 (500억 CFU)
- 수면 개선 복합 포뮬라

## 9월 출시 예정
- 관절 건강 특화 포뮬라
- 면역 강화 복합 영양제

각 제품에 대한 상세 정보는 출시 2주 전에 공개될 예정입니다.
문의사항은 제품팀(product@healthoem.com)으로 연락주세요.`,
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
      createdAt: "2024-06-10T14:20:00Z",
      isPinned: true,
      replies: [
        {
          id: "reply-1",
          content: "프로바이오틱스 제품의 구체적인 균주 정보도 공개될 예정인가요?",
          author: {
            name: "Michael Chen",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "MC",
            isAdmin: false,
          },
          createdAt: "2024-06-10T16:45:00Z",
          likes: 3,
        },
        {
          id: "reply-2",
          content:
            "네, 출시 2주 전에 모든 제품의 상세 성분 정보가 공개될 예정입니다. 프로바이오틱스 제품의 경우 17종의 균주 정보와 함량이 포함됩니다.",
          author: {
            name: "제품팀",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "제",
            isAdmin: true,
          },
          createdAt: "2024-06-11T09:15:00Z",
          likes: 5,
        },
      ],
    },
  ]

  // 일반 사용자 토론
  const discussions = [
    {
      id: "disc-1",
      title: "비타민 포뮬레이션 최적화 방법에 대한 질문",
      content: `안녕하세요, 비타민 복합 제품을 개발 중인데 안정성과 생체이용률을 최적화하는 방법에 대해 조언을 구합니다.

특히 비타민 C와 B군 비타민을 함께 포뮬레이션할 때 주의해야 할 점이 있을까요? 
또한 미네랄과 함께 배합할 때 흡수율을 높이기 위한 팁이 있으면 공유해주세요.

현재 타임릴리즈 기술을 고려하고 있는데, 이에 대한 경험이나 의견도 환영합니다.`,
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
      createdAt: "2024-06-15T08:30:00Z",
      isPinned: false,
      replies: [
        {
          id: "reply-1",
          content:
            "비타민 C와 B군을 함께 포뮬레이션할 때는 pH 관리가 중요합니다. 비타민 C는 산성 환경에서 안정적인데, 이는 일부 B군 비타민의 안정성에 영향을 줄 수 있습니다. 버퍼링 에이전트를 사용하는 것이 도움이 될 수 있습니다.",
          author: {
            name: "David Kim",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "DK",
            isAdmin: false,
          },
          createdAt: "2024-06-15T09:45:00Z",
          likes: 8,
        },
        {
          id: "reply-2",
          content:
            "타임릴리즈 기술은 비타민 C에 특히 효과적입니다. 우리 회사에서는 HPMC 기반 매트릭스를 사용하여 좋은 결과를 얻었습니다. 미네랄 흡수율 향상을 위해서는 킬레이트 형태(비스글리시네이트 등)를 고려해보세요.",
          author: {
            name: "Lisa Wang",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "LW",
            isAdmin: false,
          },
          createdAt: "2024-06-15T10:20:00Z",
          likes: 5,
        },
      ],
    },
    {
      id: "disc-2",
      title: "신규 건강기능식품 규제 준수 방법",
      content: `최근 개정된 건강기능식품 표시 광고 규정에 대해 논의하고 싶습니다.

특히 기능성 원료의 함량 표시 방법과 인체적용시험 결과 표현에 대한 제한사항이 변경되었는데,
이에 대한 실무적인 대응 방법을 공유해주실 수 있을까요?

해외 수출을 위한 라벨링 시 국내 규정과 수출국 규정이 상충할 때 어떻게 해결하시나요?`,
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
      createdAt: "2024-06-14T15:30:00Z",
      isPinned: false,
      replies: [],
    },
    {
      id: "disc-3",
      title: "건강기능식품 지속가능한 포장 옵션",
      content: `환경 친화적인 건강기능식품 포장 솔루션에 대해 논의하고 싶습니다.

현재 저희 브랜드는 지속가능성을 핵심 가치로 삼고 있어 플라스틱 사용을 최소화하려고 합니다.
그러나 건강기능식품의 특성상 습기, 산소, 빛으로부터 제품을 보호해야 하는 요구사항이 있습니다.

재생 가능한 소재나 생분해성 소재를 사용하면서도 제품 안정성을 유지할 수 있는 포장 솔루션에 대한
경험이나 추천을 공유해주시면 감사하겠습니다.`,
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
      createdAt: "2024-06-13T11:20:00Z",
      isPinned: false,
      replies: [],
    },
    {
      id: "disc-4",
      title: "프로바이오틱스 제품 품질 관리 방법",
      content: `프로바이오틱스 제품의 품질 관리, 특히 유통기한 동안 생균수 유지에 관한 경험을 공유해주세요.

현재 개발 중인 프로바이오틱스 제품의 안정성 테스트에서 6개월 후 생균수가 초기 대비 30% 정도
감소하는 문제가 있습니다. 이를 개선하기 위한 방법을 찾고 있습니다.

특히 다음 사항에 대한 조언을 구합니다:
1. 효과적인 미생물 안정화 기술
2. 포장 솔루션 (산소 차단, 습기 관리)
3. 권장 보관 조건
4. 품질 테스트 프로토콜`,
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
      createdAt: "2024-06-12T09:45:00Z",
      isPinned: false,
      replies: [],
    },
    {
      id: "disc-5",
      title: "2024년 기능성 식품 원료 트렌드",
      content: `2024년 건강기능식품 시장에서 주목받고 있는 원료 트렌드에 대해 논의하고 싶습니다.

최근 소비자 조사에 따르면 면역 강화, 수면 개선, 스트레스 관리 관련 제품에 대한 수요가 증가하고 있습니다.
이러한 트렌드에 맞춰 주목받고 있는 신규 원료나 기존 원료의 새로운 활용법에 대한 정보를 공유해주세요.

특히 임상적 효능이 입증된 원료나 혁신적인 추출 기술이 적용된 원료에 관심이 있습니다.`,
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
      createdAt: "2024-06-11T14:30:00Z",
      isPinned: false,
      replies: [],
    },
  ]

  // 모든 게시글 (관리자 공지 + 일반 토론)
  const allPosts = [...adminAnnouncements, ...discussions]

  // ID로 게시글 찾기
  const discussion = allPosts.find((post) => post.id === discussionId)

  if (!discussion) {
    notFound()
  }

  // 날짜 포맷팅 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleSubmitReply = () => {
    if (!replyText.trim()) return

    // 실제 구현에서는 API 호출을 통해 답변을 저장합니다
    console.log("Reply submitted:", replyText)

    // 폼 초기화
    setReplyText("")

    // 성공 메시지 표시 (실제 구현에서는 toast 등을 사용)
    alert("답변이 등록되었습니다.")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link href="/community">
                <ArrowLeft className="mr-2 h-4 w-4" />
                커뮤니티로 돌아가기
              </Link>
            </Button>
          </div>

          <Card className={discussion.isPinned ? "border-primary/20 bg-primary/5" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {discussion.isPinned && <Pin className="h-5 w-5 text-primary" />}
                  <CardTitle className="text-2xl">{discussion.title}</CardTitle>
                </div>
                <Badge
                  variant="outline"
                  className={discussion.isPinned ? "bg-primary/10 text-primary border-primary/20" : ""}
                >
                  {discussion.category}
                </Badge>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Avatar className={`h-10 w-10 ${discussion.author.isAdmin ? "border-2 border-primary" : ""}`}>
                  <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                  <AvatarFallback>{discussion.author.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center">
                    <span className="font-medium">{discussion.author.name}</span>
                    {discussion.author.isAdmin && (
                      <Badge variant="outline" className="ml-2 text-xs bg-primary/10 text-primary border-primary/20">
                        관리자
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(discussion.createdAt)} • 조회 {discussion.views}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {discussion.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-4">
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>좋아요</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Share className="h-4 w-4" />
                  <span>공유</span>
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                <Flag className="h-4 w-4" />
                <span>신고</span>
              </Button>
            </CardFooter>
          </Card>

          {/* 답변 섹션 */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              답변 ({discussion.replies.length})
            </h2>

            {discussion.replies.length > 0 ? (
              <div className="space-y-4">
                {discussion.replies.map((reply) => (
                  <Card key={reply.id}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Avatar className={`h-8 w-8 ${reply.author.isAdmin ? "border-2 border-primary" : ""}`}>
                          <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
                          <AvatarFallback>{reply.author.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <span className="font-medium">{reply.author.name}</span>
                            {reply.author.isAdmin && (
                              <Badge
                                variant="outline"
                                className="ml-2 text-xs bg-primary/10 text-primary border-primary/20"
                              >
                                관리자
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">{formatDate(reply.createdAt)}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{reply.content}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t p-3">
                      <Button variant="ghost" size="sm" className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{reply.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                        <Flag className="h-4 w-4" />
                        <span>신고</span>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-6 text-center text-muted-foreground">
                <p>아직 답변이 없습니다. 첫 번째 답변을 작성해보세요!</p>
              </Card>
            )}

            {/* 답변 작성 폼 */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">답변 작성</h3>
              <Textarea
                placeholder="답변을 작성해주세요..."
                className="min-h-[150px] mb-3"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <Button onClick={handleSubmitReply}>답변 등록</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

