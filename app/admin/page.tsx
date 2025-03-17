import { redirect } from "next/navigation"

export default function AdminPage() {
  // 기본 admin 페이지에 접속하면 dashboard로 리디렉션
  redirect("/admin/dashboard")
}

