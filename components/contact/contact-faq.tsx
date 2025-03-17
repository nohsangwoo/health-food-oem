"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ContactFAQ() {
  const faqs = [
    {
      question: "문의 후 답변은 얼마나 걸리나요?",
      answer:
        "일반적으로 문의 접수 후 24시간 이내에 답변을 드리고 있습니다. 복잡한 문의 사항이나 주말, 공휴일에는 다소 시간이 걸릴 수 있습니다. 긴급한 문의의 경우 고객센터(080-123-4567)로 전화주시면 빠른 답변을 받으실 수 있습니다.",
    },
    {
      question: "견적 요청은 어떻게 하나요?",
      answer:
        "견적 요청은 문의 양식에서 '제품 문의'를 선택하시고 필요한 제품 정보와 수량 등을 자세히 기재해 주시면 됩니다. 또는 영업팀(sales@healthoem.com)으로 직접 이메일을 보내셔도 됩니다. 최대한 자세한 정보를 제공해 주시면 더 정확한 견적을 받으실 수 있습니다.",
    },
    {
      question: "샘플 요청은 가능한가요?",
      answer:
        "네, 샘플 요청이 가능합니다. 문의 양식에서 '제품 문의'를 선택하시고 샘플 요청임을 명시해 주세요. 샘플 비용과 배송비는 제품에 따라 다를 수 있으며, 일부 경우에는 무료로 제공될 수 있습니다. 자세한 내용은 영업팀에서 안내해 드립니다.",
    },
    {
      question: "회사 방문은 어떻게 예약하나요?",
      answer:
        "회사 방문은 최소 3일 전에 예약이 필요합니다. 문의 양식에서 '일반 문의'를 선택하시고 방문 희망 일시와 목적을 기재해 주세요. 담당자가 확인 후 방문 가능 여부를 알려드립니다. 공장 견학의 경우 보안상의 이유로 사전 승인이 필요하며, 일부 구역은 방문이 제한될 수 있습니다.",
    },
    {
      question: "제품 개발 의뢰는 어떻게 하나요?",
      answer:
        "제품 개발 의뢰는 문의 양식에서 '제품 문의'를 선택하시고 원하시는 제품의 컨셉, 타겟 고객, 주요 성분, 제형 등을 자세히 기재해 주세요. 초기 상담 후 더 자세한 논의를 위한 미팅이 진행됩니다. 기밀 유지를 위해 NDA(비밀유지계약) 체결 후 구체적인 개발 프로세스가 시작됩니다.",
    },
    {
      question: "해외에서도 문의할 수 있나요?",
      answer:
        "네, 해외에서도 문의 가능합니다. 영어, 일본어, 중국어로 문의하실 수 있으며, 해당 언어로 답변을 받으실 수 있습니다. 국제 전화의 경우 +82-2-1234-5678로 연락주시면 됩니다. 시차로 인해 답변이 다소 지연될 수 있는 점 양해 부탁드립니다.",
    },
    {
      question: "채용 관련 문의는 어디로 해야 하나요?",
      answer:
        "채용 관련 문의는 문의 양식에서 '채용 문의'를 선택하시거나, 인사팀(hr@healthoem.com)으로 직접 이메일을 보내실 수 있습니다. 현재 진행 중인 채용 공고는 회사 홈페이지의 '채용 정보' 페이지에서 확인하실 수 있습니다.",
    },
    {
      question: "불만 사항이나 개선 제안은 어디로 해야 하나요?",
      answer:
        "불만 사항이나 개선 제안은 문의 양식에서 '일반 문의'를 선택하시거나, 고객지원팀(support@healthoem.com)으로 직접 이메일을 보내실 수 있습니다. 모든 피드백은 서비스 개선에 소중하게 활용됩니다. 심각한 품질 이슈의 경우 품질관리팀(quality@healthoem.com)으로 연락주시면 신속하게 처리해 드립니다.",
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

