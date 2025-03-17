import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/lib/store/auth-store"

export function MembershipFeatures() {
  const { isAuthenticated } = useAuthStore()

  return (
    <div className="mx-auto max-w-5xl mb-16">
      <div className="text-center space-y-2 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter">멤버십 전용 기능</h2>
        <p className="text-muted-foreground">멤버십 회원만을 위한 특별한 기능을 제공합니다</p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* 작업 프로세스 현황 대시보드 */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src="/placeholder.svg?height=300&width=500"
              width={500}
              height={300}
              alt="작업 프로세스 현황 대시보드"
              className="object-cover w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold">작업 프로세스 현황 대시보드</h3>
            <p className="mt-2 text-muted-foreground">
              의뢰한 모든 작업의 진행 상황을 실시간으로 확인하세요. 각 단계별 진행 상태, 예상 완료일, 담당자 정보를
              한눈에 파악할 수 있습니다.
            </p>
            <div className="mt-4">
              {isAuthenticated ? (
                <Button asChild>
                  <Link href="/member/dashboard">대시보드 바로가기</Link>
                </Button>
              ) : (
                <Button asChild>
                  <Link href="/login?redirect=/member/dashboard">로그인하여 이용하기</Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* 자료실 */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src="/placeholder.svg?height=300&width=500"
              width={500}
              height={300}
              alt="멤버십 자료실"
              className="object-cover w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold">멤버십 자료실</h3>
            <p className="mt-2 text-muted-foreground">
              프로젝트 관련 문서, 연구 자료, 시장 분석 보고서 등 다양한 자료를 안전하게 보관하고 공유할 수 있는
              공간입니다. 언제 어디서나 필요한 자료에 접근하세요.
            </p>
            <div className="mt-4">
              {isAuthenticated ? (
                <Button asChild>
                  <Link href="/member/resources">자료실 바로가기</Link>
                </Button>
              ) : (
                <Button asChild>
                  <Link href="/login?redirect=/member/resources">로그인하여 이용하기</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

