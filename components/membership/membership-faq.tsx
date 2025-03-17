"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MembershipFAQ() {
  const faqs = [
    {
      question: "멤버십 가입은 어떻게 하나요?",
      answer:
        "멤버십 가입은 '문의하기' 페이지를 통해 신청하실 수 있습니다. 담당 팀이 24시간 이내에 연락드려 가입 절차를 안내해 드립니다.",
    },
    {
      question: "멤버십은 언제든지 취소할 수 있나요?",
      answer:
        "네, 월간 멤버십은 30일 전 사전 통보로 언제든지 취소할 수 있습니다. 연간 멤버십의 경우 계약 조건에 따라 다를 수 있으니 담당 계정 관리자에게 문의해 주세요.",
    },
    {
      question: "멤버십 등급을 변경할 수 있나요?",
      answer:
        "네, 언제든지 상위 등급으로 업그레이드하실 수 있습니다. 하위 등급으로의 변경은 현재 계약 기간이 종료된 후 가능합니다.",
    },
    {
      question: "멤버십 혜택은 즉시 적용되나요?",
      answer:
        "네, 멤버십 가입과 결제가 완료되면 모든 혜택을 즉시 이용하실 수 있습니다. 전담 계정 관리자가 배정되어 모든 서비스 이용을 도와드립니다.",
    },
    {
      question: "멤버십에 포함된 샘플 테스트는 어떻게 이용하나요?",
      answer:
        "멤버십 등급에 따라 매월 정해진 횟수의 샘플 테스트를 요청하실 수 있습니다. 대시보드를 통해 테스트를 요청하시면 담당 팀이 처리해 드립니다.",
    },
    {
      question: "기업 규모에 맞는 맞춤형 멤버십이 있나요?",
      answer:
        "네, 엔터프라이즈 멤버십은 기업의 규모와 요구사항에 맞게 완전히 맞춤화할 수 있습니다. 자세한 내용은 영업팀에 문의해 주세요.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

