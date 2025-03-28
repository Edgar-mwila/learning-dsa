import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TopicCardProps {
  title: string
  description: string
  complexity?: string
  href: string
}

export function TopicCard({ title, description, complexity, href }: TopicCardProps) {
  return (
    <Link href={href} className="block transition-transform hover:scale-105">
      <Card className="h-full border-2 hover:border-purple-400 transition-colors">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
        {complexity && (
          <CardFooter>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              {complexity}
            </Badge>
          </CardFooter>
        )}
      </Card>
    </Link>
  )
}

