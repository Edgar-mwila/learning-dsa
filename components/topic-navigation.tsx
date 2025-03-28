import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getAdjacentTopics } from "@/lib/content"

interface TopicNavigationProps {
  type: string
  currentTopic: string
}

export function TopicNavigation({ type, currentTopic }: TopicNavigationProps) {
  const { previous, next } = getAdjacentTopics(type, currentTopic)

  return (
    <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
      <div>
        {previous && (
          <Button asChild variant="outline" className="flex items-center">
            <Link href={`/learn/${type}/${previous.id}`}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline mr-2">Previous:</span>
              {previous.title}
            </Link>
          </Button>
        )}
      </div>
      <div>
        {next && (
          <Button asChild variant="outline" className="flex items-center">
            <Link href={`/learn/${type}/${next.id}`}>
              <span className="hidden sm:inline mr-2">Next:</span>
              {next.title}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}

