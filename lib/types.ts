import type React from "react"
export interface Characteristic {
  title: string
  description: string
}

export interface Complexity {
  time: Record<string, string>
  space: string
}

export interface TopicContent {
  id: string
  title: string
  description: string
  overview: string
  characteristics: Characteristic[]
  implementations: Record<string, string>
  complexity?: Complexity
  applications?: string[]
  keyPoints: string[]
}

export interface Topic {
  id: string
  title: string
  description: string
  complexity?: string
}

export interface Category {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export interface Visualization {
  totalSteps: number
  drawStep: (ctx: CanvasRenderingContext2D, step: number, width: number, height: number) => void
  getStepDescription: (step: number) => string
}

