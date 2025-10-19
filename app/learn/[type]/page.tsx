import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TopicCard } from "@/components/topic-card"
import { getTopicsByType } from "@/lib/content"
import { notFound } from "next/navigation"

export default async function CategoryPage({ params }: { params: { type: string } }) {
  const { type } = await params
  const topics = getTopicsByType(type)

  if (!topics) {
    notFound()
  }

  const categoryTitle =
    type === "data-structures" ? "Data Structures" : type === "sorting" ? "Sorting Algorithms" : type === "searching" ? "Searching Algorithms" : type === "graph-algorithms" ? "Graph Algorithms" : type === "dynamic-programming" ? "Dynamic Programming" : "Advanced topics"

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">{categoryTitle}</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Select a topic to learn through comprehensive notes or interactive visualizations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              complexity={topic.complexity}
              href={`/learn/${type}/${topic.id}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

