import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">AlgoViz</h3>
            <p className="text-gray-400">
              An interactive platform for learning data structures and algorithms in multiple programming languages.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/learn/data-structures" className="text-gray-400 hover:text-white transition-colors">
                  Data Structures
                </Link>
              </li>
              <li>
                <Link href="/learn/sorting" className="text-gray-400 hover:text-white transition-colors">
                  Sorting Algorithms
                </Link>
              </li>
              <li>
                <Link href="/learn/searching" className="text-gray-400 hover:text-white transition-colors">
                  Searching Algorithms
                </Link>
              </li>
              <li>
                <Link href="/learn/graph-algorithms" className="text-gray-400 hover:text-white transition-colors">
                  Graph Algorithms
                </Link>
              </li>
              <li>
                <Link href="/learn/dynamic-programming" className="text-gray-400 hover:text-white transition-colors">
                  Dynamic Programming
                </Link>
              </li>
              <li>
                <Link href="/learn/advanced-topics" className="text-gray-400 hover:text-white transition-colors">
                  Advanced Topics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cheat Sheets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Interview Prep
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AlgoViz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

