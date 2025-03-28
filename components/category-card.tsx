import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

export function CategoryCard({ title, description, icon, href }: CategoryCardProps) {
  return (
    <Link href={href} className="block transition-transform hover:scale-105">
      <Card className="h-full border-2 hover:border-purple-400 transition-colors">
        <CardHeader className="pb-2">
          <div className="mb-4 text-purple-700">{icon}</div>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}

