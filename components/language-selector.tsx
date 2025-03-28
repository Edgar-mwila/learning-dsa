"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LanguageSelectorProps {
  language: string
  onChange: (language: string) => void
}

export function LanguageSelector({ language, onChange }: LanguageSelectorProps) {
  return (
    <div className="flex items-center">
      <span className="mr-2 text-sm font-medium text-gray-700">Language:</span>
      <Select value={language} onValueChange={onChange}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="cpp">C++</SelectItem>
          <SelectItem value="java">Java</SelectItem>
          <SelectItem value="python">Python</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

