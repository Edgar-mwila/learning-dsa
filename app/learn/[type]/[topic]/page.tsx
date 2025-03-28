"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContentSelector } from "@/components/content-selector"
import { NotesView } from "@/components/notes-view"
import { VisualView } from "@/components/visual-view"
import { LanguageSelector } from "@/components/language-selector"
import { getTopicContent } from "@/lib/content"
import { useParams } from "next/navigation"
import { TopicNavigation } from "@/components/topic-navigation"

type Language = "cpp" | "java" | "python"
type ViewMode = "notes" | "visual"

export default function LearnPage() {
  const params = useParams()
  const type = params.type as string
  const topic = params.topic as string

  const [language, setLanguage] = useState<Language>("python")
  const [viewMode, setViewMode] = useState<ViewMode>("notes")

  const content = getTopicContent(type, topic, language)

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Topic not found</h1>
          <p className="mt-4 text-gray-600">The requested topic could not be found.</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{content.title}</h1>
            <p className="text-gray-600 mt-2">{content.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
            <LanguageSelector language={language} onChange={(lang) => setLanguage(lang as Language)} />
            <ContentSelector viewMode={viewMode} onChange={(mode) => setViewMode(mode as ViewMode)} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {viewMode === "notes" ? (
            <NotesView content={content} language={language} />
          ) : (
            <VisualView content={content} language={language} />
          )}
        </div>

        <TopicNavigation type={type} currentTopic={topic} />
      </div>
      <Footer />
    </div>
  )
}

