"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Play, Pause, SkipBack, SkipForward, RefreshCw } from "lucide-react"
import { CodeBlock } from "@/components/code-block"
import type { TopicContent } from "@/lib/types"
import { getVisualization } from "@/lib/visualizations"

interface VisualViewProps {
  content: TopicContent
  language: string
}

export function VisualView({ content, language }: VisualViewProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [speed, setSpeed] = useState(1)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  const visualization = getVisualization(content.id)
  const totalSteps = visualization?.totalSteps || 0

  useEffect(() => {
    if (!canvasRef.current || !visualization) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw current step
    visualization.drawStep(ctx, currentStep, canvas.width, canvas.height)
  }, [currentStep, visualization])

  useEffect(() => {
    if (isPlaying) {
      let lastTime = 0
      const animate = (time: number) => {
        if (time - lastTime > 1000 / speed) {
          if (currentStep < totalSteps - 1) {
            setCurrentStep((prev) => prev + 1)
          } else {
            setIsPlaying(false)
          }
          lastTime = time
        }
        animationRef.current = requestAnimationFrame(animate)
      }

      animationRef.current = requestAnimationFrame(animate)
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, currentStep, totalSteps, speed])

  const handlePlayPause = () => {
    if (currentStep >= totalSteps - 1 && !isPlaying) {
      setCurrentStep(0)
      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  const handleReset = () => {
    setIsPlaying(false)
    setCurrentStep(0)
  }

  const handleStepForward = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleStepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Interactive Visualization</h2>
        <Card className="p-4 bg-white">
          <div className="aspect-video relative bg-gray-100 rounded-md overflow-hidden mb-4">
            <canvas ref={canvasRef} width={800} height={450} className="w-full h-full" />
            {!visualization && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Visualization not available for this topic
              </div>
            )}
          </div>

          {visualization && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Step {currentStep + 1} of {totalSteps}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Speed:</span>
                  <Slider
                    value={[speed]}
                    min={0.5}
                    max={3}
                    step={0.5}
                    onValueChange={(value) => setSpeed(value[0])}
                    className="w-24"
                  />
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" onClick={handleReset}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleStepBackward} disabled={currentStep === 0}>
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button variant="default" className="bg-purple-700 hover:bg-purple-800" onClick={handlePlayPause}>
                  {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                  {isPlaying ? "Pause" : "Play"}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleStepForward}
                  disabled={currentStep === totalSteps - 1}
                >
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-700">{visualization.getStepDescription(currentStep)}</p>
              </div>
            </div>
          )}
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Code Implementation</h2>
        <CodeBlock code={content.implementations[language]} language={language} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Key Points</h2>
        <ul className="list-disc pl-5 space-y-2">
          {content.keyPoints.map((point, index) => (
            <li key={index} className="text-gray-700">
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

