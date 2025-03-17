"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ServiceFAQ() {
  const faqs = [
    {
      question: "최소 주문 수량(MOQ)은 어떻게 되나요?",
      answer:
        "제품 유형과 복잡성에 따라 최소 주문 수량이 다릅니다. 일반적으로 SKU당 1,000~5,000개 범위입니다. 구체적인 정보는 영업팀에 문의해 주세요.",
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
    {
      question: "해외 수출을 위한 규제 지원도 가능한가요?",
      answer:
        "네, 국내뿐만 아니라 해외 시장 진출을 위한 규제 준수 지원 서비스를 제공합니다. 각 국가별 건강기능식품 관련 규제 요구사항을 파악하고, 필요한 인증 획득을 위한 서류 준비 및 절차를 지원합니다.",
    },
    {
      question: "기존 제품의 개선이나 리포뮬레이션도 가능한가요?",
      answer:
        "네, 기존 제품의 개선이나 리포뮬레이션 서비스도 제공합니다. 최신 연구 결과와 시장 트렌드를 반영하여 제품의 효능, 안정성, 맛 등을 개선할 수 있습니다.",
    },
    {
      question: "비밀유지 계약(NDA)은 어떻게 처리되나요?",
      answer:
        "모든 프로젝트는 비밀유지 계약(NDA) 체결 후 진행됩니다. 고객의 지적 재산권과 기밀 정보를 철저히 보호하며, 프로젝트 관련 모든 정보는 엄격하게 관리됩니다.",
    },
    {
      question: "샘플 제작은 어떻게 진행되나요?",
      answer:
        "초기 상담 후 고객의 요구사항에 맞는 샘플을 제작해 드립니다. 샘플 제작 비용과 일정은 제품 복잡성에 따라 다르며, 대량 생산 계약 체결 시 샘플 제작 비용은 일부 또는 전액 환불될 수 있습니다.",
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

