import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentProjects() {
  const projects = [
    {
      id: "PRJ001",
      name: "Vitamin C Supplement",
      status: "In Progress",
      statusColor: "bg-yellow-500",
      client: {
        name: "VitaWell Inc.",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "VW",
      },
      dueDate: "Mar 15, 2024",
    },
    {
      id: "PRJ002",
      name: "Probiotic Formula",
      status: "Completed",
      statusColor: "bg-green-500",
      client: {
        name: "NutriLife",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "NL",
      },
      dueDate: "Feb 28, 2024",
    },
    {
      id: "PRJ003",
      name: "Omega-3 Fish Oil",
      status: "In Progress",
      statusColor: "bg-yellow-500",
      client: {
        name: "PureHealth Supplements",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "PH",
      },
      dueDate: "Apr 10, 2024",
    },
    {
      id: "PRJ004",
      name: "Multivitamin Complex",
      status: "Planning",
      statusColor: "bg-blue-500",
      client: {
        name: "Wellness Labs",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "WL",
      },
      dueDate: "May 5, 2024",
    },
    {
      id: "PRJ005",
      name: "Protein Powder",
      status: "In Progress",
      statusColor: "bg-yellow-500",
      client: {
        name: "FitLife Nutrition",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "FL",
      },
      dueDate: "Apr 22, 2024",
    },
  ]

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={project.client.avatar} alt={project.client.name} />
            <AvatarFallback>{project.client.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{project.name}</p>
            <p className="text-sm text-muted-foreground">
              {project.client.name} · Due {project.dueDate}
            </p>
          </div>
          <div className="ml-auto">
            <Badge className={`${project.statusColor} text-white`}>{project.status}</Badge>
          </div>
        </div>
      ))}
    </div>
  )
}

