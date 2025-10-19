"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-purple-700">AlgoViz</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/learn" className="text-gray-700 hover:text-purple-700 transition-colors">
              <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
                Get Started
              </Button>
            </Link>            
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/learn"
              className="block text-gray-700 hover:text-purple-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button
                variant="outline"
                className="w-full border-purple-700 text-purple-700 hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

