"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function ProductFilters() {
  const [categoryOpen, setCategoryOpen] = useState(true)
  const [featuresOpen, setFeaturesOpen] = useState(true)
  const [formOpen, setFormOpen] = useState(true)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">필터</h3>
        <Button variant="ghost" size="sm" className="h-8 text-sm">
          초기화
        </Button>
      </div>

      <Separator />

      <Collapsible open={categoryOpen} onOpenChange={setCategoryOpen}>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-1">
          <h3 className="font-medium">카테고리</h3>
          <ChevronDown className={`h-4 w-4 transition-transform ${categoryOpen ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-2">
            {["비타민", "미네랄", "프로바이오틱스", "오메가", "단백질", "허브", "아미노산", "콜라겐"].map(
              (category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
                  <Label htmlFor={`category-${category}`} className="text-sm">
                    {category}
                  </Label>
                </div>
              ),
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      <Collapsible open={featuresOpen} onOpenChange={setFeaturesOpen}>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-1">
          <h3 className="font-medium">특징</h3>
          <ChevronDown className={`h-4 w-4 transition-transform ${featuresOpen ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-2">
            {["고함량", "무설탕", "글루텐 프리", "비건", "유기농", "무첨가물", "Non-GMO", "알레르기 프리"].map(
              (feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox id={`feature-${feature}`} />
                  <Label htmlFor={`feature-${feature}`} className="text-sm">
                    {feature}
                  </Label>
                </div>
              ),
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      <Collapsible open={formOpen} onOpenChange={setFormOpen}>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-1">
          <h3 className="font-medium">제형</h3>
          <ChevronDown className={`h-4 w-4 transition-transform ${formOpen ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-2">
            {["정제", "캡슐", "소프트젤", "파우더", "액상", "젤리", "구미", "스틱"].map((form) => (
              <div key={form} className="flex items-center space-x-2">
                <Checkbox id={`form-${form}`} />
                <Label htmlFor={`form-${form}`} className="text-sm">
                  {form}
                </Label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      <div className="pt-4">
        <Button className="w-full">필터 적용</Button>
      </div>
    </div>
  )
}

