"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryCard } from "@/components/category-card"
import { categories } from "@/lib/content"

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Choose a Category to Learn</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
              href={`/learn/${category.id}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

