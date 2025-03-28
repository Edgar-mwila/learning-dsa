import type { Category, Topic, TopicContent } from "./types"
import { Database, SortDesc, Search, Network, Puzzle, Zap} from "lucide-react"

// Expanded Categories
export const categories: Category[] = [
  {
    id: "data-structures",
    title: "Data Structures",
    description: "Comprehensive exploration of fundamental and advanced data structures, their implementations, and use cases.",
    icon: <Database className="h-12 w-12" />,
  },
  {
    id: "sorting",
    title: "Sorting Algorithms",
    description: "In-depth analysis of sorting techniques, from basic to advanced comparison and non-comparison based methods.",
    icon: <SortDesc className="h-12 w-12" />,
  },
  {
    id: "searching",
    title: "Searching Algorithms",
    description: "Advanced search strategies for various data structures and optimization techniques.",
    icon: <Search className="h-12 w-12" />,
  },
  {
    id: "graph-algorithms",
    title: "Graph Algorithms",
    description: "Comprehensive study of graph traversal, shortest path, and network flow algorithms.",
    icon: <Network className="h-12 w-12" />,
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    description: "Explore optimization techniques for solving complex problems by breaking them down into simpler subproblems.",
    icon: <Puzzle className="h-12 w-12" />,
  },
  {
    id: "advanced-topics",
    title: "Advanced Algorithmic Techniques",
    description: "Deep dive into sophisticated problem-solving strategies and computational methods.",
    icon: <Zap className="h-12 w-12" />,
  }
]

// Expanded Topics for Each Category
const dataStructuresTopics: Topic[] = [
  {
    id: "arrays",
    title: "Arrays",
    description: "Contiguous memory locations that store items of the same type.",
    complexity: "Access: O(1)",
  },
  {
    id: "linked-lists",
    title: "Linked Lists",
    description: "Linear collection of elements where each element points to the next.",
    complexity: "Access: O(n)",
  },
  {
    id: "doubly-linked-lists",
    title: "Doubly Linked Lists",
    description: "Linked list where each node has references to both next and previous nodes.",
    complexity: "Access: O(n)",
  },
  {
    id: "stacks",
    title: "Stacks",
    description: "LIFO (Last In, First Out) data structure with push and pop operations.",
    complexity: "Access: O(1)",
  },
  {
    id: "queues",
    title: "Queues",
    description: "FIFO (First In, First Out) data structure with enqueue and dequeue operations.",
    complexity: "Access: O(1)",
  },
  {
    id: "priority-queues",
    title: "Priority Queues",
    description: "Abstract data type where elements have priority and are served accordingly.",
    complexity: "Insert/Delete: O(log n)",
  },
  {
    id: "trees",
    title: "Binary Trees",
    description: "Hierarchical data structure with a root value and at most two children.",
    complexity: "Search: O(log n) to O(n)",
  },
  {
    id: "binary-search-trees",
    title: "Binary Search Trees",
    description: "Tree-based data structure with ordering properties for efficient searching.",
    complexity: "Search: O(log n)",
  },
  {
    id: "avl-trees",
    title: "AVL Trees",
    description: "Self-balancing binary search tree maintaining height balance.",
    complexity: "Insert/Delete/Search: O(log n)",
  },
  {
    id: "red-black-trees",
    title: "Red-Black Trees",
    description: "Self-balancing binary search tree with color-based balancing mechanism.",
    complexity: "Insert/Delete/Search: O(log n)",
  },
  {
    id: "graphs",
    title: "Graphs",
    description: "Collection of nodes (vertices) and edges that connect pairs of nodes.",
    complexity: "Traversal: O(V+E)",
  },
  {
    id: "hash-tables",
    title: "Hash Tables",
    description: "Data structure that maps keys to values using a hash function.",
    complexity: "Average Access: O(1)",
  },
  {
    id: "heaps",
    title: "Heaps",
    description: "Specialized tree-based data structure that satisfies the heap property.",
    complexity: "Insert/Delete: O(log n)",
  }
]

const sortingTopics: Topic[] = [
  {
    id: "bubble-sort",
    title: "Bubble Sort",
    description: "Simple comparison-based algorithm that repeatedly steps through the list.",
    complexity: "O(n²)",
  },
  {
    id: "insertion-sort",
    title: "Insertion Sort",
    description: "Builds the sorted array one item at a time by comparisons.",
    complexity: "O(n²)",
  },
  {
    id: "selection-sort",
    title: "Selection Sort",
    description: "Divides input into sorted and unsorted regions, finding the minimum element.",
    complexity: "O(n²)",
  },
  {
    id: "merge-sort",
    title: "Merge Sort",
    description: "Divide and conquer algorithm that divides the input array into two halves.",
    complexity: "O(n log n)",
  },
  {
    id: "quick-sort",
    title: "Quick Sort",
    description: "Divide and conquer algorithm that picks a pivot element.",
    complexity: "Average: O(n log n)",
  },
  {
    id: "heap-sort",
    title: "Heap Sort",
    description: "Comparison-based sort that uses a binary heap data structure.",
    complexity: "O(n log n)",
  },
  {
    id: "radix-sort",
    title: "Radix Sort",
    description: "Non-comparative sorting algorithm that sorts integers digit by digit.",
    complexity: "O(d * (n + k))",
  },
  {
    id: "counting-sort",
    title: "Counting Sort",
    description: "Integer sorting algorithm that operates by counting the number of objects with distinct key values.",
    complexity: "O(n + k)",
  },
  {
    id: "shell-sort",
    title: "Shell Sort",
    description: "Generalization of insertion sort that allows exchange of items far apart.",
    complexity: "O(n log n) to O(n²)",
  }
]

const searchingTopics: Topic[] = [
  {
    id: "linear-search",
    title: "Linear Search",
    description: "Sequential search algorithm that starts at one end and checks every element.",
    complexity: "O(n)",
  },
  {
    id: "binary-search",
    title: "Binary Search",
    description: "Search algorithm that finds the position of a target value in a sorted array.",
    complexity: "O(log n)",
  },
  {
    id: "interpolation-search",
    title: "Interpolation Search",
    description: "Improved binary search for uniformly distributed sorted arrays.",
    complexity: "O(log log n)",
  },
  {
    id: "depth-first-search",
    title: "Depth-First Search",
    description: "Algorithm for traversing tree or graph data structures starting from the root.",
    complexity: "O(V+E)",
  },
  {
    id: "breadth-first-search",
    title: "Breadth-First Search",
    description: "Algorithm for traversing tree or graph data structures level by level.",
    complexity: "O(V+E)",
  },
  {
    id: "jump-search",
    title: "Jump Search",
    description: "Search algorithm that jumps ahead by fixed steps to find the target element.",
    complexity: "O(√n)",
  }
]

const graphAlgorithmsTopics: Topic[] = [
  {
    id: "dijkstras-algorithm",
    title: "Dijkstra's Algorithm",
    description: "Finding shortest paths between nodes in a graph with non-negative edge weights.",
    complexity: "O((V + E) log V)",
  },
  {
    id: "bellman-ford",
    title: "Bellman-Ford Algorithm",
    description: "Finding shortest paths in graphs with negative edge weights.",
    complexity: "O(VE)",
  },
  {
    id: "kruskal-algorithm",
    title: "Kruskal's Algorithm",
    description: "Minimum spanning tree algorithm for weighted, undirected graphs.",
    complexity: "O(E log E)",
  },
  {
    id: "prim-algorithm",
    title: "Prim's Algorithm",
    description: "Another minimum spanning tree algorithm for weighted, undirected graphs.",
    complexity: "O(E log V)",
  },
  {
    id: "topological-sort",
    title: "Topological Sorting",
    description: "Linearizing a directed acyclic graph (DAG).",
    complexity: "O(V + E)",
  }
]

const dynamicProgrammingTopics: Topic[] = [
  {
    id: "fibonacci-dp",
    title: "Fibonacci with Dynamic Programming",
    description: "Efficient computation of Fibonacci numbers using memoization.",
    complexity: "O(n)",
  },
  {
    id: "knapsack-problem",
    title: "0/1 Knapsack Problem",
    description: "Optimization problem of selecting items with maximum value within weight constraints.",
    complexity: "O(nW)",
  },
  {
    id: "longest-common-subsequence",
    title: "Longest Common Subsequence",
    description: "Finding the longest subsequence common to two sequences.",
    complexity: "O(mn)",
  },
  {
    id: "matrix-chain-multiplication",
    title: "Matrix Chain Multiplication",
    description: "Finding the most efficient way to multiply a chain of matrices.",
    complexity: "O(n³)",
  }
]

const advancedTopics: Topic[] = [
  {
    id: "greedy-algorithms",
    title: "Greedy Algorithms",
    description: "Algorithms that make locally optimal choices to find a global optimum.",
    complexity: "Varies by problem",
  },
  {
    id: "backtracking",
    title: "Backtracking",
    description: "Algorithmic technique for solving problems by trying partial solutions and abandoning those that cannot possibly be completed.",
    complexity: "Exponential",
  },
  {
    id: "divide-and-conquer",
    title: "Divide and Conquer",
    description: "Problem-solving method that breaks down a problem into smaller, more manageable subproblems.",
    complexity: "Often O(n log n)",
  },
  {
    id: "randomized-algorithms",
    title: "Randomized Algorithms",
    description: "Algorithms that use randomness as part of their logic to solve problems.",
    complexity: "Probabilistic",
  },
  {
    id: "approximation-algorithms",
    title: "Approximation Algorithms",
    description: "Algorithms that find near-optimal solutions for NP-hard optimization problems.",
    complexity: "Polynomial time",
  },
  {
    id: "branch-and-bound",
    title: "Branch and Bound",
    description: "Algorithm design paradigm for solving optimization problems by systematically enumerating candidate solutions.",
    complexity: "Exponential, but often more efficient than brute force",
  },
  {
    id: "monte-carlo-methods",
    title: "Monte Carlo Methods",
    description: "Computational algorithms that rely on repeated random sampling to obtain numerical results.",
    complexity: "Probabilistic",
  },
  {
    id: "genetic-algorithms",
    title: "Genetic Algorithms",
    description: "Search heuristics that mimic the process of natural selection to solve optimization problems.",
    complexity: "Varies by implementation",
  },
  {
    id: "parallel-algorithms",
    title: "Parallel Algorithms",
    description: "Algorithms designed to be executed simultaneously on multiple processors.",
    complexity: "Depends on parallelization efficiency",
  },
  {
    id: "string-matching",
    title: "Advanced String Matching",
    description: "Sophisticated algorithms for efficient text searching and pattern recognition.",
    complexity: "Varies (KMP: O(n+m), Rabin-Karp: O(n+m))",
  },
  {
    id: "compression-algorithms",
    title: "Compression Algorithms",
    description: "Techniques for reducing data size while preserving information.",
    complexity: "Varies by method",
  },
  {
    id: "machine-learning-algorithms",
    title: "Basic Machine Learning Algorithms",
    description: "Foundational algorithms for pattern recognition and predictive modeling.",
    complexity: "Varies by algorithm",
  }
]

// Sample content for a data structures topic
const arrayContent: TopicContent = {
  id: "arrays",
  title: "Arrays",
  description: "Contiguous memory locations that store items of the same type.",
  overview: `
    <p>An array is a collection of elements of the same type placed in contiguous memory locations. 
    Arrays use a zero-based index, which means the first element is at index 0.</p>
    <p>Arrays are one of the most fundamental data structures and are used in almost every program. 
    They provide fast access to elements using their index but have a fixed size in many programming languages.</p>
  `,
  characteristics: [
    {
      title: "Random Access",
      description: "Elements can be accessed directly using their index in O(1) time.",
    },
    {
      title: "Fixed Size",
      description: "In many languages, arrays have a fixed size that must be defined at creation time.",
    },
    {
      title: "Homogeneous",
      description: "All elements in an array must be of the same data type.",
    },
    {
      title: "Memory Allocation",
      description: "Elements are stored in contiguous memory locations.",
    },
  ],
  implementations: {
    cpp: `#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization
    int arr[5] = {1, 2, 3, 4, 5};
    
    // Accessing elements
    cout << "First element: " << arr[0] << endl;
    
    // Modifying elements
    arr[2] = 10;
    
    // Iterating through array
    cout << "Array elements: ";
    for(int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    
    return 0;
}`,
    java: `public class ArrayExample {
    public static void main(String[] args) {
        // Declaration and initialization
        int[] arr = {1, 2, 3, 4, 5};
        
        // Accessing elements
        System.out.println("First element: " + arr[0]);
        
        // Modifying elements
        arr[2] = 10;
        
        // Iterating through array
        System.out.print("Array elements: ");
        for(int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}`,
    python: `# Declaration and initialization
arr = [1, 2, 3, 4, 5]

# Accessing elements
print("First element:", arr[0])

# Modifying elements
arr[2] = 10

# Iterating through array
print("Array elements:", end=" ")
for element in arr:
    print(element, end=" ")

# Array operations
arr.append(6)  # Add element to end
arr.insert(1, 7)  # Insert at specific position
arr.remove(4)  # Remove first occurrence of value
popped = arr.pop()  # Remove and return last element`,
  },
  complexity: {
    time: {
      Access: "O(1)",
      Search: "O(n)",
      Insertion: "O(n)",
      Deletion: "O(n)",
    },
    space: "O(n)",
  },
  applications: [
    "Storing and accessing sequential data",
    "Implementing other data structures like stacks, queues",
    "Matrix operations in graphics and scientific computing",
    "Lookup tables and buffers",
    "Dynamic programming solutions",
  ],
  keyPoints: [
    "Arrays provide constant-time access to elements using their index",
    "Insertion and deletion operations are expensive as they require shifting elements",
    "Arrays have a fixed size in many languages (except dynamic arrays)",
    "Memory is allocated contiguously, which provides cache locality benefits",
    "Multi-dimensional arrays can represent matrices and tensors",
  ],
};

const linkedListsContent: TopicContent = {
  id: "linked-lists",
  title: "Linked Lists",
  description: "Linear collection of elements where each element points to the next.",
  overview: `
    <p>A linked list is a dynamic data structure where elements are stored in nodes, 
    with each node containing a data field and a reference (link) to the next node in the sequence.</p>
    <p>Unlike arrays, linked lists do not store elements in contiguous memory locations, 
    which allows for more flexible memory allocation and easier insertion/deletion of elements.</p>
  `,
  characteristics: [
    {
      title: "Dynamic Size",
      description: "Linked lists can grow or shrink dynamically during program execution.",
    },
    {
      title: "Non-Contiguous Memory",
      description: "Nodes can be stored anywhere in memory, connected through references.",
    },
    {
      title: "Efficient Insertion/Deletion",
      description: "Adding or removing elements does not require shifting other elements.",
    },
    {
      title: "Sequential Access",
      description: "Elements must be accessed sequentially by traversing from the head.",
    },
  ],
  implementations: {
    cpp: `#include <iostream>
struct Node {
  int data;
  Node* next;
  Node(int val) : data(val), next(nullptr) {}
};

class LinkedList {
private:
  Node* head;
public:
  LinkedList() : head(nullptr) {}
  
  void insert(int val) {
      Node* newNode = new Node(val);
      if (!head) {
          head = newNode;
          return;
      }
      Node* current = head;
      while (current->next) {
          current = current->next;
      }
      current->next = newNode;
  }
  
  void display() {
      Node* current = head;
      while (current) {
          std::cout << current->data << " ";
          current = current->next;
      }
      std::cout << std::endl;
  }
};

int main() {
  LinkedList list;
  list.insert(1);
  list.insert(2);
  list.insert(3);
  list.display();
  return 0;
}`,
    java: `class Node {
  int data;
  Node next;
  
  Node(int val) {
      data = val;
      next = null;
  }
}

class LinkedList {
  Node head;
  
  void insert(int val) {
      Node newNode = new Node(val);
      if (head == null) {
          head = newNode;
          return;
      }
      Node current = head;
      while (current.next != null) {
          current = current.next;
      }
      current.next = newNode;
  }
  
  void display() {
      Node current = head;
      while (current != null) {
          System.out.print(current.data + " ");
          current = current.next;
      }
      System.out.println();
  }
  
  public static void main(String[] args) {
      LinkedList list = new LinkedList();
      list.insert(1);
      list.insert(2);
      list.insert(3);
      list.display();
  }
}`,
    python: `class Node:
  def __init__(self, data):
      self.data = data
      self.next = None

class LinkedList:
  def __init__(self):
      self.head = None
  
  def insert(self, val):
      new_node = Node(val)
      if not self.head:
          self.head = new_node
          return
      current = self.head
      while current.next:
          current = current.next
      current.next = new_node
  
  def display(self):
      current = self.head
      while current:
          print(current.data, end=" ")
          current = current.next
      print()

# Usage
list = LinkedList()
list.insert(1)
list.insert(2)
list.insert(3)
list.display()`
  },
  complexity: {
    time: {
      Access: "O(n)",
      Search: "O(n)",
      Insertion: "O(1) at beginning, O(n) at end",
      Deletion: "O(1) at beginning, O(n) at end",
    },
    space: "O(n)",
  },
  applications: [
    "Implementing stacks and queues",
    "Polynomial manipulation",
    "Memory management in operating systems",
    "Undo functionality in software",
    "Music playlists with sequential playback",
  ],
  keyPoints: [
    "Linked lists provide dynamic memory allocation",
    "Insertion and deletion are more efficient than arrays",
    "Random access is slower compared to arrays",
    "Memory overhead due to storing additional references",
    "Different types include singly, doubly, and circular linked lists",
  ],
};



//Sample content for sort algorithms topics
const bubbleSortContent: TopicContent = {
  id: "bubble-sort",
  title: "Bubble Sort",
  description: "Simple comparison-based algorithm that repeatedly steps through the list.",
  overview: `
    <p>Bubble Sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order.</p>
    <p>It is known for its simplicity but is inefficient for large datasets due to its quadratic time complexity.</p>
  `,
  characteristics: [
    {
      title: "Comparison-Based",
      description: "Bubble sort compares adjacent elements and swaps them if needed.",
    },
    {
      title: "Stable Sort",
      description: "Bubble Sort maintains the relative order of equal elements.",
    },
    {
      title: "In-Place Algorithm",
      description: "Sorting is done using the same array without extra space.",
    },
    {
      title: "Inefficient",
      description: "Has O(n²) complexity, making it impractical for large datasets.",
    },
  ],
  implementations: {
    cpp: `void bubbleSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
      for (int j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              swap(arr[j], arr[j + 1]);
          }
      }
  }
}`,
    java: `void bubbleSort(int arr[]) {
  int n = arr.length;
  for (int i = 0; i < n-1; i++) {
      for (int j = 0; j < n-i-1; j++) {
          if (arr[j] > arr[j+1]) {
              int temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
          }
      }
  }
}`,
    python: `def bubble_sort(arr):
  n = len(arr)
  for i in range(n):
      for j in range(0, n-i-1):
          if arr[j] > arr[j+1]:
              arr[j], arr[j+1] = arr[j+1], arr[j]`
  },
  complexity: {
    time: {
      Best: "O(n)",
      Average: "O(n²)",
      Worst: "O(n²)",
    },
    space: "O(1)",
  },
  applications: [
    "Used in teaching sorting concepts due to its simplicity",
    "Can be used for small datasets",
    "Useful when the dataset is nearly sorted",
  ],
  keyPoints: [
    "Bubble Sort repeatedly swaps adjacent elements",
    "It is a stable and in-place sorting algorithm",
    "Has a poor time complexity making it inefficient for large inputs",
  ],
};

const insertionSortContent: TopicContent = {
  id: "insertion-sort",
  title: "Insertion Sort",
  description: "Builds the sorted array one item at a time by comparisons.",
  overview: `
    <p>Insertion Sort is an intuitive sorting algorithm that builds the final sorted array one item at a time.</p>
    <p>It works similar to how you might sort a hand of playing cards, inserting each new card into its correct position.</p>
  `,
  characteristics: [
    {
      title: "Adaptive",
      description: "Efficient for small or nearly sorted datasets.",
    },
    {
      title: "Stable Sort",
      description: "Maintains the relative order of equal elements.",
    },
    {
      title: "In-place Sorting",
      description: "Requires only a constant amount of additional memory space.",
    },
    {
      title: "Online Algorithm",
      description: "Can sort a list as it receives it.",
    },
  ],
  implementations: {
    cpp: `#include <iostream>
#include <vector>

void insertionSort(std::vector<int>& arr) {
  int n = arr.size();
  for (int i = 1; i < n; i++) {
      int key = arr[i];
      int j = i - 1;
      
      // Move elements of arr[0..i-1] that are greater than key
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j--;
      }
      arr[j + 1] = key;
  }
}

int main() {
  std::vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
  insertionSort(arr);
  
  std::cout << "Sorted array: ";
  for (int num : arr) {
      std::cout << num << " ";
  }
  return 0;
}`,
    java: `public class InsertionSort {
  public static void insertionSort(int[] arr) {
      int n = arr.length;
      for (int i = 1; i < n; i++) {
          int key = arr[i];
          int j = i - 1;
          
          // Move elements of arr[0..i-1] that are greater than key
          // to one position ahead of their current position
          while (j >= 0 && arr[j] > key) {
              arr[j + 1] = arr[j];
              j--;
          }
          arr[j + 1] = key;
      }
  }
  
  public static void main(String[] args) {
      int[] arr = {64, 34, 25, 12, 22, 11, 90};
      insertionSort(arr);
      
      System.out.print("Sorted array: ");
      for (int num : arr) {
          System.out.print(num + " ");
      }
  }
}`,
    python: `def insertion_sort(arr):
  for i in range(1, len(arr)):
      key = arr[i]
      j = i - 1
      
      # Move elements of arr[0..i-1] that are greater than key
      # to one position ahead of their current position
      while j >= 0 and arr[j] > key:
          arr[j + 1] = arr[j]
          j -= 1
      arr[j + 1] = key
  
  return arr

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = insertion_sort(arr)
print("Sorted array:", sorted_arr)`
  },
  complexity: {
    time: {
      Best: "O(n)",
      Average: "O(n²)",
      Worst: "O(n²)",
    },
    space: "O(1)",
  },
  applications: [
    "Small datasets",
    "Nearly sorted arrays",
    "Online sorting scenarios",
    "Embedded systems with limited memory",
    "Part of more complex algorithms like Timsort",
  ],
  keyPoints: [
    "Builds sorted array one element at a time",
    "Efficient for small or nearly sorted datasets",
    "Works by inserting each element into its correct position",
    "Minimizes the number of shifts compared to bubble sort",
    "Performs well when the input is almost sorted",
  ],
}



//Sample content for search algorithm topics

// Function to get topics by category
export function getTopicsByType(type: string): Topic[] | null {
  switch (type) {
    case "data-structures":
      return dataStructuresTopics
    case "sorting":
      return sortingTopics
    case "searching":
      return searchingTopics
    case "graph-algorithms":
      return graphAlgorithmsTopics
    case "dynamic-programming":
      return dynamicProgrammingTopics
    case "advanced-topics":
      return advancedTopics
    default:
      return null
  }
}

// Function to get content for a specific topic
export function getTopicContent(type: string, topicId: string, language: string): TopicContent | null {
  // For now, we only have content for arrays
  if (type === "data-structures" && topicId === "arrays") {
    return arrayContent
  }

  if (type === "data-structures" && topicId === "linked-lists") {
    return linkedListsContent
  }

  if (type === "sorting" && topicId === "bubble-sort") {
    return bubbleSortContent
  }

  
  // In a real application, you would fetch content from a database or API
  // This is a placeholder to show the structure
  return {
    id: topicId,
    title: getTopicTitle(type, topicId),
    description: getTopicDescription(type, topicId),
    overview: `<p>This is an overview of ${getTopicTitle(type, topicId)}. In a complete implementation, this would contain detailed explanations.</p>`,
    characteristics: [
      {
        title: "Characteristic 1",
        description: "Description of characteristic 1",
      },
      {
        title: "Characteristic 2",
        description: "Description of characteristic 2",
      },
    ],
    implementations: {
      cpp: `// C++ implementation of ${getTopicTitle(type, topicId)}`,
      java: `// Java implementation of ${getTopicTitle(type, topicId)}`,
      python: `# Python implementation of ${getTopicTitle(type, topicId)}`,
    },
    complexity: {
      time: {
        "Operation 1": "O(1)",
        "Operation 2": "O(n)",
      },
      space: "O(n)",
    },
    applications: ["Application 1", "Application 2"],
    keyPoints: [
      "Key point 1 about " + getTopicTitle(type, topicId),
      "Key point 2 about " + getTopicTitle(type, topicId),
    ],
  }
}

// Helper function to get topic title
function getTopicTitle(type: string, topicId: string): string {
  const topics = getTopicsByType(type)
  if (!topics) return "Unknown Topic"

  const topic = topics.find((t) => t.id === topicId)
  return topic ? topic.title : "Unknown Topic"
}

// Helper function to get topic description
function getTopicDescription(type: string, topicId: string): string {
  const topics = getTopicsByType(type)
  if (!topics) return ""

  const topic = topics.find((t) => t.id === topicId)
  return topic ? topic.description : ""
}

// Function to get adjacent topics for navigation
export function getAdjacentTopics(
  type: string,
  currentTopicId: string,
): { previous: Topic | null; next: Topic | null } {
  const topics = getTopicsByType(type)
  if (!topics) return { previous: null, next: null }

  const currentIndex = topics.findIndex((t) => t.id === currentTopicId)
  if (currentIndex === -1) return { previous: null, next: null }

  const previous = currentIndex > 0 ? topics[currentIndex - 1] : null
  const next = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null

  return { previous, next }
}