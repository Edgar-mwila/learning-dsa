import { Card } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"
import type { TopicContent } from "@/lib/types"

interface NotesViewProps {
  content: TopicContent
  language: string
}

export function NotesView({ content, language }: NotesViewProps) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content.overview }} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Key Characteristics</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.characteristics.map((item, index) => (
            <li key={index} className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-1">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Implementation</h2>
        <CodeBlock code={content.implementations[language]} language={language} />
      </section>

      {content.complexity && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Time & Space Complexity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-4">
              <h3 className="font-semibold text-lg mb-2">Time Complexity</h3>
              <ul className="space-y-2">
                {Object.entries(content.complexity.time).map(([operation, complexity]) => (
                  <li key={operation} className="flex justify-between">
                    <span className="text-gray-700">{operation}:</span>
                    <span className="font-mono text-purple-700">{complexity}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold text-lg mb-2">Space Complexity</h3>
              <div className="font-mono text-purple-700 text-center text-xl mt-4">{content.complexity.space}</div>
            </Card>
          </div>
        </section>
      )}

      {content.applications && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Applications</h2>
          <ul className="list-disc pl-5 space-y-2">
            {content.applications.map((app, index) => (
              <li key={index} className="text-gray-700">
                {app}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

