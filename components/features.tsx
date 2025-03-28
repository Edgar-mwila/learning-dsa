import { Code, BookOpen, Play, RefreshCw } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-purple-700" />,
      title: "Comprehensive Notes",
      description: "Detailed explanations of concepts, time complexity, and implementation details.",
    },
    {
      icon: <Play className="h-10 w-10 text-purple-700" />,
      title: "Interactive Visualizations",
      description: "Step through algorithms and see how data structures work in real-time.",
    },
    {
      icon: <Code className="h-10 w-10 text-purple-700" />,
      title: "Multi-language Support",
      description: "Learn in C++, Java, or Python - switch between languages anytime.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-purple-700" />,
      title: "Practice & Reinforce",
      description: "Solidify your understanding through visual and textual learning approaches.",
    },
  ]

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">How AlgoViz Helps You Learn</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

