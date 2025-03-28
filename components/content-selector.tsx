"use client"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ContentSelectorProps {
  viewMode: string
  onChange: (viewMode: string) => void
}

export function ContentSelector({ viewMode, onChange }: ContentSelectorProps) {
  return (
    <Tabs value={viewMode} onValueChange={onChange} className="w-[200px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="notes">Notes</TabsTrigger>
        <TabsTrigger value="visual">Visual</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

