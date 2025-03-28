import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Master <span className="text-purple-700">Data Structures</span> &{" "}
          <span className="text-purple-700">Algorithms</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Learn through comprehensive notes and interactive visualizations. Switch between C++, Java, and Python to
          master the concepts in your preferred language.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-6 text-lg">
            <Link href="/learn">Start Learning</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-purple-700 text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg"
          >
            <Link href="/learn/data-structures">Explore Data Structures</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

