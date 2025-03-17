"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export function ProjectOverview() {
  const data = [
    {
      name: "Jan",
      "In Progress": 4,
      Completed: 2,
      Planning: 1,
    },
    {
      name: "Feb",
      "In Progress": 3,
      Completed: 3,
      Planning: 2,
    },
    {
      name: "Mar",
      "In Progress": 5,
      Completed: 2,
      Planning: 3,
    },
    {
      name: "Apr",
      "In Progress": 6,
      Completed: 4,
      Planning: 2,
    },
    {
      name: "May",
      "In Progress": 4,
      Completed: 3,
      Planning: 4,
    },
    {
      name: "Jun",
      "In Progress": 5,
      Completed: 5,
      Planning: 3,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Planning" fill="#3b82f6" />
        <Bar dataKey="In Progress" fill="#eab308" />
        <Bar dataKey="Completed" fill="#22c55e" />
      </BarChart>
    </ResponsiveContainer>
  )
}

