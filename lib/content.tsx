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

const doublyLinkedListContent: TopicContent = {
  id: "doubly-linked-lists",
  title: "Doubly Linked Lists",
  description: "Linked list where each node has references to both next and previous nodes.",
  overview: `
    <p>A doubly linked list is a type of linked list where each node contains a data field and two references (links): 
    one to the next node and one to the previous node in the sequence.</p>
    <p>This bidirectional linking provides more flexibility in list traversal and manipulation 
    compared to singly linked lists, though it requires more memory per node.</p>
  `,
  characteristics: [
    {
      title: "Bidirectional Traversal",
      description: "Can traverse the list in both forward and backward directions.",
    },
    {
      title: "Dynamic Size",
      description: "Can grow or shrink during program execution.",
    },
    {
      title: "Extra Memory",
      description: "Requires additional memory for previous node reference.",
    },
    {
      title: "Efficient Delete",
      description: "Deletion is more efficient as previous node is directly accessible.",
    },
  ],
  implementations: {
    cpp: `struct Node {
    int data;
    Node* next;
    Node* prev;
    Node(int val) : data(val), next(nullptr), prev(nullptr) {}
};

class DoublyLinkedList {
    Node* head;
    Node* tail;
public:
    DoublyLinkedList() : head(nullptr), tail(nullptr) {}
    
    void insert(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            newNode->prev = tail;
            tail = newNode;
        }
    }
    
    void display() {
        Node* current = head;
        while (current) {
            std::cout << current->data << " ";
            current = current->next;
        }
        std::cout << std::endl;
    }
};`,
    java: `class Node {
    int data;
    Node next;
    Node prev;
    
    Node(int val) {
        data = val;
        next = prev = null;
    }
}

class DoublyLinkedList {
    Node head;
    Node tail;
    
    void insert(int val) {
        Node newNode = new Node(val);
        if (head == null) {
            head = tail = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
    }
    
    void display() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }
}`,
    python: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    
    def insert(self, val):
        new_node = Node(val)
        if not self.head:
            self.head = self.tail = new_node
        else:
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node
    
    def display(self):
        current = self.head
        while current:
            print(current.data, end=" ")
            current = current.next
        print()`
  },
  complexity: {
    time: {
      Access: "O(n)",
      Search: "O(n)",
      Insertion: "O(1)",
      Deletion: "O(1)",
    },
    space: "O(n)",
  },
  applications: [
    "Browser's forward/backward navigation",
    "Undo/Redo operations in software",
    "Music player's next/previous functionality",
    "Text editors",
    "LRU Cache implementation",
  ],
  keyPoints: [
    "Nodes can be traversed in both directions",
    "Requires more memory than singly linked lists",
    "Simplifies deletion operations",
    "Useful for applications requiring backward traversal",
    "Can quickly access both ends of the list",
  ],
};

const stackContent: TopicContent = {
  id: "stacks",
  title: "Stacks",
  description: "LIFO (Last In, First Out) data structure with push and pop operations.",
  overview: `
    <p>A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. 
    Elements can only be added or removed from the top of the stack.</p>
    <p>Think of it like a stack of plates - you can only add or remove plates from the top. 
    Common operations include push (add), pop (remove), and peek (view top element).</p>
  `,
  characteristics: [
    {
      title: "LIFO Principle",
      description: "Last element added is the first one to be removed.",
    },
    {
      title: "Restricted Access",
      description: "Elements can only be accessed from the top.",
    },
    {
      title: "Simple Implementation",
      description: "Can be implemented using arrays or linked lists.",
    },
    {
      title: "Fixed or Dynamic",
      description: "Can have fixed size (array) or dynamic size (linked list).",
    },
  ],
  implementations: {
    cpp: `class Stack {
    private:
        vector<int> items;
        
    public:
        void push(int item) {
            items.push_back(item);
        }
        
        int pop() {
            if (isEmpty()) throw runtime_error("Stack is empty");
            int top = items.back();
            items.pop_back();
            return top;
        }
        
        int peek() {
            if (isEmpty()) throw runtime_error("Stack is empty");
            return items.back();
        }
        
        bool isEmpty() {
            return items.empty();
        }
};`,
    java: `class Stack {
    private ArrayList<Integer> items = new ArrayList<>();
    
    public void push(int item) {
        items.add(item);
    }
    
    public int pop() {
        if (isEmpty()) throw new EmptyStackException();
        return items.remove(items.size() - 1);
    }
    
    public int peek() {
        if (isEmpty()) throw new EmptyStackException();
        return items.get(items.size() - 1);
    }
    
    public boolean isEmpty() {
        return items.isEmpty();
    }
}`,
    python: `class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self.items.pop()
    
    def peek(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self.items[-1]
    
    def is_empty(self):
        return len(self.items) == 0`
  },
  complexity: {
    time: {
      Push: "O(1)",
      Pop: "O(1)",
      Peek: "O(1)",
      Search: "O(n)",
    },
    space: "O(n)",
  },
  applications: [
    "Function call stack in programming languages",
    "Expression evaluation and syntax parsing",
    "Undo mechanisms in text editors",
    "Browser history navigation",
    "Backtracking algorithms",
  ],
  keyPoints: [
    "Follows LIFO (Last-In-First-Out) principle",
    "Basic operations are push and pop",
    "Can be implemented using arrays or linked lists",
    "Useful for tracking state in recursive algorithms",
    "Common in compiler and parser implementations",
  ],
};

const queueContent: TopicContent = {
  id: "queues",
  title: "Queues",
  description: "FIFO (First In, First Out) data structure with enqueue and dequeue operations.",
  overview: `
    <p>A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. 
    Elements are added at the rear and removed from the front of the queue.</p>
    <p>Think of it like a line of people waiting - the first person to join the line is the first person to be served. 
    Common operations include enqueue (add) and dequeue (remove).</p>
  `,
  characteristics: [
    {
      title: "FIFO Principle",
      description: "First element added is the first one to be removed.",
    },
    {
      title: "Two Ends",
      description: "Elements are added at rear and removed from front.",
    },
    {
      title: "Linear Structure",
      description: "Elements are processed in sequential order.",
    },
    {
      title: "Dynamic Size",
      description: "Can grow and shrink as needed.",
    },
  ],
  implementations: {
    cpp: `#include <queue>
class Queue {
    private:
        queue<int> items;
    
    public:
        void enqueue(int item) {
            items.push(item);
        }
        
        int dequeue() {
            if (isEmpty()) throw runtime_error("Queue is empty");
            int front = items.front();
            items.pop();
            return front;
        }
        
        int peek() {
            if (isEmpty()) throw runtime_error("Queue is empty");
            return items.front();
        }
        
        bool isEmpty() {
            return items.empty();
        }
};`,
    java: `class Queue {
    private LinkedList<Integer> items = new LinkedList<>();
    
    public void enqueue(int item) {
        items.addLast(item);
    }
    
    public int dequeue() {
        if (isEmpty()) throw new NoSuchElementException();
        return items.removeFirst();
    }
    
    public int peek() {
        if (isEmpty()) throw new NoSuchElementException();
        return items.getFirst();
    }
    
    public boolean isEmpty() {
        return items.isEmpty();
    }
}`,
    python: `from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if self.is_empty():
            raise Exception("Queue is empty")
        return self.items.popleft()
    
    def peek(self):
        if self.is_empty():
            raise Exception("Queue is empty")
        return self.items[0]
    
    def is_empty(self):
        return len(self.items) == 0`
  },
  complexity: {
    time: {
      Enqueue: "O(1)",
      Dequeue: "O(1)",
      Peek: "O(1)",
      Search: "O(n)",
    },
    space: "O(n)",
  },
  applications: [
    "Process scheduling in operating systems",
    "Print job scheduling",
    "Breadth-first search in graphs",
    "Message buffers and task scheduling",
    "Handling asynchronous data transfers",
  ],
  keyPoints: [
    "Follows FIFO (First-In-First-Out) principle",
    "Basic operations are enqueue and dequeue",
    "Can be implemented using arrays or linked lists",
    "Useful for scheduling and buffering",
    "Common in BFS algorithms and resource management",
  ],
};

const priorityQueueContent: TopicContent = {
  id: "priority-queues",
  title: "Priority Queues",
  description: "Abstract data type where elements have priority and are served accordingly.",
  overview: `
    <p>A priority queue is an abstract data type similar to a regular queue but where elements have priorities associated with them. 
    Elements with higher priority are served before elements with lower priority.</p>
    <p>It is typically implemented using a heap data structure, most commonly a binary heap, 
    which provides efficient insertion and extraction of the highest/lowest priority element.</p>
  `,
  characteristics: [
    {
      title: "Priority-Based",
      description: "Elements are dequeued based on priority rather than insertion order.",
    },
    {
      title: "Heap Implementation",
      description: "Typically implemented using a binary heap for efficiency.",
    },
    {
      title: "Dynamic Structure",
      description: "Can grow and shrink as needed.",
    },
    {
      title: "Partially Ordered",
      description: "Only the highest/lowest priority element is guaranteed to be in correct position.",
    },
  ],
  implementations: {
    cpp: `#include <queue>
class PriorityQueue {
    private:
        priority_queue<int> items;
    
    public:
        void insert(int item) {
            items.push(item);
        }
        
        int extractMax() {
            if (isEmpty()) throw runtime_error("Queue is empty");
            int top = items.top();
            items.pop();
            return top;
        }
        
        int peek() {
            if (isEmpty()) throw runtime_error("Queue is empty");
            return items.top();
        }
        
        bool isEmpty() {
            return items.empty();
        }
};`,
    java: `import java.util.PriorityQueue;
class CustomPriorityQueue {
    private PriorityQueue<Integer> items = new PriorityQueue<>((a, b) -> b - a);
    
    public void insert(int item) {
        items.offer(item);
    }
    
    public int extractMax() {
        if (isEmpty()) throw new NoSuchElementException();
        return items.poll();
    }
    
    public int peek() {
        if (isEmpty()) throw new NoSuchElementException();
        return items.peek();
    }
    
    public boolean isEmpty() {
        return items.isEmpty();
    }
}`,
    python: `import heapq

class PriorityQueue:
    def __init__(self):
        self.items = []
    
    def insert(self, item):
        heapq.heappush(self.items, -item)  # Negative for max heap
    
    def extract_max(self):
        if self.is_empty():
            raise Exception("Queue is empty")
        return -heapq.heappop(self.items)
    
    def peek(self):
        if self.is_empty():
            raise Exception("Queue is empty")
        return -self.items[0]
    
    def is_empty(self):
        return len(self.items) == 0`
  },
  complexity: {
    time: {
      Insert: "O(log n)",
      ExtractMax: "O(log n)",
      Peek: "O(1)",
      Search: "O(n)",
    },
    space: "O(n)",
  },
  applications: [
    "Task scheduling in operating systems",
    "Dijkstra's shortest path algorithm",
    "Event-driven simulation",
    "Huffman coding",
    "Load balancing and job scheduling",
  ],
  keyPoints: [
    "Elements are served based on priority, not insertion order",
    "Typically implemented using a binary heap",
    "Efficient for maintaining a sorted sequence with frequent updates",
    "Useful in algorithms requiring frequent access to max/min elements",
    "Supports both max-priority and min-priority implementations",
  ],
};

const binarySearchTreeContent: TopicContent = {
  id: "binary-search-trees",
  title: "Binary Search Trees",
  description: "Tree-based data structure with ordering properties for efficient searching.",
  overview: `
    <p>A Binary Search Tree (BST) is a binary tree data structure where each node has at most two children, 
    and for each node, all elements in the left subtree are less than the node's value, 
    and all elements in the right subtree are greater than the node's value.</p>
    <p>This ordering property makes BSTs efficient for searching, insertion, and deletion operations.</p>
  `,
  characteristics: [
    {
      title: "Ordered Structure",
      description: "Left subtree contains smaller values, right subtree contains larger values.",
    },
    {
      title: "Binary Property",
      description: "Each node has at most two children.",
    },
    {
      title: "Search Efficiency",
      description: "Enables binary search-like operations with O(log n) complexity when balanced.",
    },
    {
      title: "Dynamic Operations",
      description: "Supports efficient insertion and deletion operations.",
    },
  ],
  implementations: {
    cpp: `class Node {
public:
    int data;
    Node* left;
    Node* right;
    
    Node(int value) : data(value), left(nullptr), right(nullptr) {}
};

class BST {
private:
    Node* root;
    
    Node* insert(Node* node, int value) {
        if (node == nullptr) return new Node(value);
        
        if (value < node->data)
            node->left = insert(node->left, value);
        else if (value > node->data)
            node->right = insert(node->right, value);
            
        return node;
    }
    
    Node* search(Node* node, int value) {
        if (node == nullptr || node->data == value)
            return node;
            
        if (value < node->data)
            return search(node->left, value);
        return search(node->right, value);
    }
    
public:
    BST() : root(nullptr) {}
    
    void insert(int value) {
        root = insert(root, value);
    }
    
    bool search(int value) {
        return search(root, value) != nullptr;
    }
};`,
    java: `class Node {
    int data;
    Node left, right;
    
    Node(int value) {
        data = value;
        left = right = null;
    }
}

class BST {
    Node root;
    
    BST() {
        root = null;
    }
    
    private Node insert(Node node, int value) {
        if (node == null)
            return new Node(value);
            
        if (value < node.data)
            node.left = insert(node.left, value);
        else if (value > node.data)
            node.right = insert(node.right, value);
            
        return node;
    }
    
    private Node search(Node node, int value) {
        if (node == null || node.data == value)
            return node;
            
        if (value < node.data)
            return search(node.left, value);
        return search(node.right, value);
    }
    
    public void insert(int value) {
        root = insert(root, value);
    }
    
    public boolean search(int value) {
        return search(root, value) != null;
    }
}`,
    python: `class Node:
    def __init__(self, value):
        self.data = value
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None
    
    def _insert(self, node, value):
        if node is None:
            return Node(value)
        
        if value < node.data:
            node.left = self._insert(node.left, value)
        elif value > node.data:
            node.right = self._insert(node.right, value)
        
        return node
    
    def _search(self, node, value):
        if node is None or node.data == value:
            return node
        
        if value < node.data:
            return self._search(node.left, value)
        return self._search(node.right, value)
    
    def insert(self, value):
        self.root = self._insert(self.root, value)
    
    def search(self, value):
        return self._search(self.root, value) is not None`
  },
  complexity: {
    time: {
      Search: "O(h) where h is height",
      Insert: "O(h)",
      Delete: "O(h)",
      "Worst Case": "O(n) if unbalanced",
    },
    space: "O(n)",
  },
  applications: [
    "Database indexing",
    "File system organization",
    "Symbol tables in compilers",
    "Priority queues implementation",
    "Expression evaluation",
  ],
  keyPoints: [
    "Maintains ordered data for efficient searching",
    "Performance depends on tree balance",
    "Can degenerate to a linked list in worst case",
    "Forms the basis for self-balancing trees",
    "Supports range queries efficiently",
  ],
};

const avlTreeContent: TopicContent = {
  id: "avl-trees",
  title: "AVL Trees",
  description: "Self-balancing binary search tree with height balance property.",
  overview: `
    <p>An AVL tree is a self-balancing binary search tree where the heights of the two child subtrees 
    of any node differ by at most one. If at any time they differ by more than one, rebalancing is done 
    to restore this property.</p>
    <p>Named after inventors Adelson-Velsky and Landis, AVL trees maintain O(log n) height 
    through rotations after insertions and deletions.</p>
  `,
  characteristics: [
    {
      title: "Balance Factor",
      description: "Difference between heights of left and right subtrees is at most 1.",
    },
    {
      title: "Self-Balancing",
      description: "Automatically maintains balance through rotations.",
    },
    {
      title: "Height Property",
      description: "Height is always O(log n) where n is number of nodes.",
    },
    {
      title: "BST Property",
      description: "Maintains binary search tree properties while balancing.",
    },
  ],
  implementations: {
    cpp: `class Node {
public:
    int data, height;
    Node *left, *right;
    
    Node(int value) : data(value), height(1), left(nullptr), right(nullptr) {}
};

class AVLTree {
private:
    Node* root;
    
    int height(Node* node) {
        return node ? node->height : 0;
    }
    
    int getBalance(Node* node) {
        return node ? height(node->left) - height(node->right) : 0;
    }
    
    Node* rightRotate(Node* y) {
        Node* x = y->left;
        Node* T2 = x->right;
        
        x->right = y;
        y->left = T2;
        
        y->height = max(height(y->left), height(y->right)) + 1;
        x->height = max(height(x->left), height(x->right)) + 1;
        
        return x;
    }
    
    Node* leftRotate(Node* x) {
        Node* y = x->right;
        Node* T2 = y->left;
        
        y->left = x;
        x->right = T2;
        
        x->height = max(height(x->left), height(x->right)) + 1;
        y->height = max(height(y->left), height(y->right)) + 1;
        
        return y;
    }
    
    Node* insert(Node* node, int value) {
        if (!node) return new Node(value);
        
        if (value < node->data)
            node->left = insert(node->left, value);
        else if (value > node->data)
            node->right = insert(node->right, value);
        else
            return node;
        
        node->height = max(height(node->left), height(node->right)) + 1;
        
        int balance = getBalance(node);
        
        // Left Left Case
        if (balance > 1 && value < node->left->data)
            return rightRotate(node);
        
        // Right Right Case
        if (balance < -1 && value > node->right->data)
            return leftRotate(node);
        
        // Left Right Case
        if (balance > 1 && value > node->left->data) {
            node->left = leftRotate(node->left);
            return rightRotate(node);
        }
        
        // Right Left Case
        if (balance < -1 && value < node->right->data) {
            node->right = rightRotate(node->right);
            return leftRotate(node);
        }
        
        return node;
    }
    
public:
    AVLTree() : root(nullptr) {}
    
    void insert(int value) {
        root = insert(root, value);
    }
};`,
    java: `class Node {
    int data, height;
    Node left, right;
    
    Node(int value) {
        data = value;
        height = 1;
        left = right = null;
    }
}

class AVLTree {
    Node root;
    
    int height(Node node) {
        return node == null ? 0 : node.height;
    }
    
    int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }
    
    Node rightRotate(Node y) {
        Node x = y.left;
        Node T2 = x.right;
        
        x.right = y;
        y.left = T2;
        
        y.height = Math.max(height(y.left), height(y.right)) + 1;
        x.height = Math.max(height(x.left), height(x.right)) + 1;
        
        return x;
    }
    
    Node leftRotate(Node x) {
        Node y = x.right;
        Node T2 = y.left;
        
        y.left = x;
        x.right = T2;
        
        x.height = Math.max(height(x.left), height(x.right)) + 1;
        y.height = Math.max(height(y.left), height(y.right)) + 1;
        
        return y;
    }
    
    Node insert(Node node, int value) {
        if (node == null) return new Node(value);
        
        if (value < node.data)
            node.left = insert(node.left, value);
        else if (value > node.data)
            node.right = insert(node.right, value);
        else
            return node;
            
        node.height = Math.max(height(node.left), height(node.right)) + 1;
        
        int balance = getBalance(node);
        
        // Left Left Case
        if (balance > 1 && value < node.left.data)
            return rightRotate(node);
            
        // Right Right Case
        if (balance < -1 && value > node.right.data)
            return leftRotate(node);
            
        // Left Right Case
        if (balance > 1 && value > node.left.data) {
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }
        
        // Right Left Case
        if (balance < -1 && value < node.right.data) {
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }
        
        return node;
    }
    
    public void insert(int value) {
        root = insert(root, value);
    }
}`,
    python: `class Node:
    def __init__(self, value):
        self.data = value
        self.height = 1
        self.left = None
        self.right = None

class AVLTree:
    def __init__(self):
        self.root = None
    
    def height(self, node):
        return node.height if node else 0
    
    def get_balance(self, node):
        return self.height(node.left) - self.height(node.right) if node else 0
    
    def right_rotate(self, y):
        x = y.left
        T2 = x.right
        
        x.right = y
        y.left = T2
        
        y.height = max(self.height(y.left), self.height(y.right)) + 1
        x.height = max(self.height(x.left), self.height(x.right)) + 1
        
        return x
    
    def left_rotate(self, x):
        y = x.right
        T2 = y.left
        
        y.left = x
        x.right = T2
        
        x.height = max(self.height(x.left), self.height(x.right)) + 1
        y.height = max(self.height(y.left), self.height(y.right)) + 1
        
        return y
    
    def _insert(self, node, value):
        if not node:
            return Node(value)
        
        if value < node.data:
            node.left = self._insert(node.left, value)
        elif value > node.data:
            node.right = self._insert(node.right, value)
        else:
            return node
        
        node.height = max(self.height(node.left), self.height(node.right)) + 1
        
        balance = self.get_balance(node)
        
        # Left Left Case
        if balance > 1 and value < node.left.data:
            return self.right_rotate(node)
        
        # Right Right Case
        if balance < -1 and value > node.right.data:
            return self.left_rotate(node)
        
        # Left Right Case
        if balance > 1 and value > node.left.data:
            node.left = self.left_rotate(node.left)
            return self.right_rotate(node)
        
        # Right Left Case
        if balance < -1 and value < node.right.data:
            node.right = self.right_rotate(node.right)
            return self.left_rotate(node)
        
        return node
    
    def insert(self, value):
        self.root = self._insert(self.root, value)`
  },
  complexity: {
    time: {
      Search: "O(log n)",
      Insert: "O(log n)",
      Delete: "O(log n)",
      "Rotation": "O(1)",
    },
    space: "O(n)",
  },
  applications: [
    "Database indexing requiring guaranteed performance",
    "Memory management",
    "File system organization",
    "Network routing tables",
    "Statistical data storage",
  ],
  keyPoints: [
    "Maintains strict balance factor of -1, 0, or 1",
    "Guarantees O(log n) height through rotations",
    "More strictly balanced than Red-Black trees",
    "Faster lookups than Red-Black trees",
    "Higher maintenance cost for insertions and deletions",
  ],
};

const redBlackTreeContent: TopicContent = {
  id: "red-black-trees",
  title: "Red-Black Trees",
  description: "Self-balancing binary search tree with color-based balancing mechanism.",
  overview: `
    <p>A Red-Black tree is a type of self-balancing binary search tree where each node has an extra color 
    attribute (either red or black). Through a set of rules regarding these colors, the tree maintains 
    a roughly balanced structure.</p>
    <p>While not as strictly balanced as AVL trees, Red-Black trees provide good worst-case guarantees 
    for insertion and deletion while requiring less rotation operations.</p>
  `,
  characteristics: [
    {
      title: "Color Property",
      description: "Each node is either red or black.",
    },
    {
      title: "Root Property",
      description: "The root is always black.",
    },
    {
      title: "Red Property",
      description: "Red nodes cannot have red children.",
    },
    {
      title: "Black Height",
      description: "All paths from root to leaves have the same number of black nodes.",
    },
  ],
  implementations: {
    cpp: `enum Color { RED, BLACK };

class Node {
public:
    int data;
    Color color;
    Node *left, *right, *parent;
    
    Node(int value) {
        data = value;
        color = RED;
        left = right = parent = nullptr;
    }
};

class RedBlackTree {
private:
    Node* root;
    
    void leftRotate(Node* x) {
        Node* y = x->right;
        x->right = y->left;
        
        if (y->left != nullptr)
            y->left->parent = x;
            
        y->parent = x->parent;
        
        if (x->parent == nullptr)
            root = y;
        else if (x == x->parent->left)
            x->parent->left = y;
        else
            x->parent->right = y;
            
        y->left = x;
        x->parent = y;
    }
    
    void rightRotate(Node* y) {
        Node* x = y->left;
        y->left = x->right;
        
        if (x->right != nullptr)
            x->right->parent = y;
            
        x->parent = y->parent;
        
        if (y->parent == nullptr)
            root = x;
        else if (y == y->parent->right)
            y->parent->right = x;
        else
            y->parent->left = x;
            
        x->right = y;
        y->parent = x;
    }
    
    void fixInsert(Node* k) {
        Node* u;
        while (k->parent != nullptr && k->parent->color == RED) {
            if (k->parent == k->parent->parent->right) {
                u = k->parent->parent->left;
                if (u != nullptr && u->color == RED) {
                    u->color = BLACK;
                    k->parent->color = BLACK;
                    k->parent->parent->color = RED;
                    k = k->parent->parent;
                } else {
                    if (k == k->parent->left) {
                        k = k->parent;
                        rightRotate(k);
                    }
                    k->parent->color = BLACK;
                    k->parent->parent->color = RED;
                    leftRotate(k->parent->parent);
                }
            } else {
                u = k->parent->parent->right;
                if (u != nullptr && u->color == RED) {
                    u->color = BLACK;
                    k->parent->color = BLACK;
                    k->parent->parent->color = RED;
                    k = k->parent->parent;
                } else {
                    if (k == k->parent->right) {
                        k = k->parent;
                        leftRotate(k);
                    }
                    k->parent->color = BLACK;
                    k->parent->parent->color = RED;
                    rightRotate(k->parent->parent);
                }
            }
            if (k == root) break;
        }
        root->color = BLACK;
    }
    
public:
    RedBlackTree() : root(nullptr) {}
    
    void insert(int value) {
        Node* node = new Node(value);
        Node* y = nullptr;
        Node* x = root;
        
        while (x != nullptr) {
            y = x;
            if (node->data < x->data)
                x = x->left;
            else
                x = x->right;
        }
        
        node->parent = y;
        if (y == nullptr)
            root = node;
        else if (node->data < y->data)
            y->left = node;
        else
            y->right = node;
            
        fixInsert(node);
    }
};`,
    java: `enum Color { RED, BLACK }

class Node {
    int data;
    Color color;
    Node left, right, parent;
    
    Node(int value) {
        data = value;
        color = Color.RED;
        left = right = parent = null;
    }
}

class RedBlackTree {
    private Node root;
    
    private void leftRotate(Node x) {
        Node y = x.right;
        x.right = y.left;
        
        if (y.left != null)
            y.left.parent = x;
            
        y.parent = x.parent;
        
        if (x.parent == null)
            root = y;
        else if (x == x.parent.left)
            x.parent.left = y;
        else
            x.parent.right = y;
            
        y.left = x;
        x.parent = y;
    }
    
    private void rightRotate(Node y) {
        Node x = y.left;
        y.left = x.right;
        
        if (x.right != null)
            x.right.parent = y;
            
        x.parent = y.parent;
        
        if (y.parent == null)
            root = x;
        else if (y == y.parent.right)
            y.parent.right = x;
        else
            y.parent.left = x;
            
        x.right = y;
        y.parent = x;
    }
    
    private void fixInsert(Node k) {
        Node u;
        while (k.parent != null && k.parent.color == Color.RED) {
            if (k.parent == k.parent.parent.right) {
                u = k.parent.parent.left;
                if (u != null && u.color == Color.RED) {
                    u.color = Color.BLACK;
                    k.parent.color = Color.BLACK;
                    k.parent.parent.color = Color.RED;
                    k = k.parent.parent;
                } else {
                    if (k == k.parent.left) {
                        k = k.parent;
                        rightRotate(k);
                    }
                    k.parent.color = Color.BLACK;
                    k.parent.parent.color = Color.RED;
                    leftRotate(k.parent.parent);
                }
            } else {
                u = k.parent.parent.right;
                if (u != null && u.color == Color.RED) {
                    u.color = Color.BLACK;
                    k.parent.color = Color.BLACK;
                    k.parent.parent.color = Color.RED;
                    k = k.parent.parent;
                } else {
                    if (k == k.parent.right) {
                        k = k.parent;
                        leftRotate(k);
                    }
                    k.parent.color = Color.BLACK;
                    k.parent.parent.color = Color.RED;
                    rightRotate(k.parent.parent);
                }
            }
            if (k == root) break;
        }
        root.color = Color.BLACK;
    }
    
    public void insert(int value) {
        Node node = new Node(value);
        Node y = null;
        Node x = root;
        
        while (x != null) {
            y = x;
            if (node.data < x.data)
                x = x.left;
            else
                x = x.right;
        }
        
        node.parent = y;
        if (y == null)
            root = node;
        else if (node.data < y.data)
            y.left = node;
        else
            y.right = node;
            
        fixInsert(node);
    }
}`,
    python: `class Color:
    RED = 0
    BLACK = 1

class Node:
    def __init__(self, value):
        self.data = value
        self.color = Color.RED
        self.left = None
        self.right = None
        self.parent = None

class RedBlackTree:
    def __init__(self):
        self.root = None
    
    def left_rotate(self, x):
        y = x.right
        x.right = y.left
        
        if y.left:
            y.left.parent = x
            
        y.parent = x.parent
        
        if not x.parent:
            self.root = y
        elif x == x.parent.left:
            x.parent.left = y
        else:
            x.parent.right = y
            
        y.left = x
        x.parent = y
    
    def right_rotate(self, y):
        x = y.left
        y.left = x.right
        
        if x.right:
            x.right.parent = y
            
        x.parent = y.parent
        
        if not y.parent:
            self.root = x
        elif y == y.parent.right:
            y.parent.right = x
        else:
            y.parent.left = x
            
        x.right = y
        y.parent = x
    
    def fix_insert(self, k):
        while k.parent and k.parent.color == Color.RED:
            if k.parent == k.parent.parent.right:
                u = k.parent.parent.left
                if u and u.color == Color.RED:
                    u.color = Color.BLACK
                    k.parent.color = Color.BLACK
                    k.parent.parent.color = Color.RED
                    k = k.parent.parent
                else:
                    if k == k.parent.left:
                        k = k.parent
                        self.right_rotate(k)
                    k.parent.color = Color.BLACK
                    k.parent.parent.color = Color.RED
                    self.left_rotate(k.parent.parent)
            else:
                u = k.parent.parent.right
                if u and u.color == Color.RED:
                    u.color = Color.BLACK
                    k.parent.color = Color.BLACK
                    k.parent.parent.color = Color.RED
                    k = k.parent.parent
                else:
                    if k == k.parent.right:
                        k = k.parent
                        self.left_rotate(k)
                    k.parent.color = Color.BLACK
                    k.parent.parent.color = Color.RED
                    self.right_rotate(k.parent.parent)
            
            if k == self.root:
                break
        self.root.color = Color.BLACK
    
    def insert(self, value):
        node = Node(value)
        y = None
        x = self.root
        
        while x:
            y = x
            if node.data < x.data:
                x = x.left
            else:
                x = x.right
        
        node.parent = y
        if not y:
            self.root = node
        elif node.data < y.data:
            y.left = node
        else:
            y.right = node
        
        self.fix_insert(node)`
  },
  complexity: {
    time: {
      Search: "O(log n)",
      Insert: "O(log n)",
      Delete: "O(log n)",
      "Color Fixing": "O(1) rotations per operation",
    },
    space: "O(n)",
  },
  applications: [
    "Java TreeMap implementation",
    "Linux kernel scheduling",
    "Database engine storage",
    "Computational geometry data structures",
    "Process scheduling",
  ],
  keyPoints: [
    "Guarantees O(log n) height through color properties",
    "Less rigid balancing than AVL trees",
    "Fewer rotations needed during insertion and deletion",
    "Used in many practical systems and libraries",
    "Complex implementation but excellent performance",
  ],
};

const graphsContent: TopicContent = {
  id: "graphs",
  title: "Graphs",
  description: "Collection of nodes (vertices) and edges that connect pairs of nodes.",
  overview: `
    <p>A graph is a non-linear data structure consisting of vertices (nodes) and edges that connect these vertices. 
    Graphs can be directed or undirected, weighted or unweighted, and can represent many real-world relationships.</p>
    <p>Graphs are fundamental in computer science and are used to model networks, relationships, and paths in various applications.</p>
  `,
  characteristics: [
    {
      title: "Vertex-Edge Structure",
      description: "Consists of vertices (nodes) connected by edges.",
    },
    {
      title: "Direction",
      description: "Can be directed (one-way) or undirected (two-way) connections.",
    },
    {
      title: "Weight",
      description: "Edges can have weights representing costs or distances.",
    },
    {
      title: "Connectivity",
      description: "Can be connected, disconnected, or have cycles.",
    },
  ],
  implementations: {
    cpp: `class Graph {
    unordered_map<int, vector<pair<int, int>>> adj;
public:
    void addEdge(int u, int v, int weight) {
        adj[u].push_back({v, weight});
        adj[v].push_back({u, weight}); // For undirected graph
    }
    
    void DFS(int start) {
        unordered_set<int> visited;
        DFSUtil(start, visited);
    }
    
private:
    void DFSUtil(int v, unordered_set<int>& visited) {
        visited.insert(v);
        cout << v << " ";
        
        for(auto& neighbor : adj[v]) {
            if(visited.find(neighbor.first) == visited.end()) {
                DFSUtil(neighbor.first, visited);
            }
        }
    }
};`,
    java: `class Graph {
    private Map<Integer, List<Edge>> adj;
    
    class Edge {
        int dest, weight;
        Edge(int dest, int weight) {
            this.dest = dest;
            this.weight = weight;
        }
    }
    
    public Graph() {
        adj = new HashMap<>();
    }
    
    public void addEdge(int src, int dest, int weight) {
        adj.computeIfAbsent(src, k -> new ArrayList<>())
           .add(new Edge(dest, weight));
        adj.computeIfAbsent(dest, k -> new ArrayList<>())
           .add(new Edge(src, weight)); // For undirected graph
    }
    
    public void DFS(int start) {
        Set<Integer> visited = new HashSet<>();
        DFSUtil(start, visited);
    }
    
    private void DFSUtil(int v, Set<Integer> visited) {
        visited.add(v);
        System.out.print(v + " ");
        
        for(Edge e : adj.getOrDefault(v, new ArrayList<>())) {
            if(!visited.contains(e.dest)) {
                DFSUtil(e.dest, visited);
            }
        }
    }
}`,
    python: `class Graph:
    def __init__(self):
        self.adj = {}
    
    def add_edge(self, u, v, weight):
        if u not in self.adj:
            self.adj[u] = []
        if v not in self.adj:
            self.adj[v] = []
        self.adj[u].append((v, weight))
        self.adj[v].append((u, weight))  # For undirected graph
    
    def dfs(self, start):
        visited = set()
        
        def dfs_util(v):
            visited.add(v)
            print(v, end=" ")
            
            for neighbor, _ in self.adj.get(v, []):
                if neighbor not in visited:
                    dfs_util(neighbor)
        
        dfs_util(start)`
  },
  complexity: {
    time: {
      "DFS/BFS": "O(V + E)",
      "Add Edge": "O(1)",
      "Remove Edge": "O(E)",
      "Find Path": "O(V + E)",
    },
    space: "O(V + E)",
  },
  applications: [
    "Social networks",
    "Road networks and maps",
    "Computer networks",
    "Recommendation systems",
    "Circuit design",
  ],
  keyPoints: [
    "Can represent complex relationships and networks",
    "Multiple representation methods (adjacency list/matrix)",
    "Supports both directed and undirected edges",
    "Foundation for many important algorithms",
    "Essential for network analysis and pathfinding",
  ],
};

const hashTablesContent: TopicContent = {
  id: "hash-tables",
  title: "Hash Tables",
  description: "Data structure that maps keys to values using a hash function.",
  overview: `
    <p>A hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values. 
    It uses a hash function to compute an index into an array of buckets or slots.</p>
    <p>Hash tables provide efficient insertion, deletion, and lookup operations, with average case time complexity of O(1).</p>
  `,
  characteristics: [
    {
      title: "Hash Function",
      description: "Converts keys into array indices.",
    },
    {
      title: "Collision Resolution",
      description: "Handles multiple keys mapping to same index.",
    },
    {
      title: "Load Factor",
      description: "Ratio of filled slots to total slots.",
    },
    {
      title: "Dynamic Resizing",
      description: "Grows or shrinks based on load factor.",
    },
  ],
  implementations: {
    cpp: `class HashTable {
    static const int TABLE_SIZE = 10;
    list<pair<string, int>> table[TABLE_SIZE];
    
public:
    int hash(string key) {
        int hash = 0;
        for(char c : key)
            hash = (hash + c) % TABLE_SIZE;
        return hash;
    }
    
    void insert(string key, int value) {
        int index = hash(key);
        for(auto& item : table[index]) {
            if(item.first == key) {
                item.second = value;
                return;
            }
        }
        table[index].push_back({key, value});
    }
    
    bool get(string key, int& value) {
        int index = hash(key);
        for(auto& item : table[index]) {
            if(item.first == key) {
                value = item.second;
                return true;
            }
        }
        return false;
    }
    
    void remove(string key) {
        int index = hash(key);
        table[index].remove_if(
            [key](auto& item) { return item.first == key; }
        );
    }
};`,
    java: `class HashTable<K, V> {
    private static final int TABLE_SIZE = 10;
    private List<Entry<K, V>>[] table;
    
    private class Entry<K, V> {
        K key;
        V value;
        Entry(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
    
    @SuppressWarnings("unchecked")
    public HashTable() {
        table = new LinkedList[TABLE_SIZE];
        for(int i = 0; i < TABLE_SIZE; i++) {
            table[i] = new LinkedList<>();
        }
    }
    
    private int hash(K key) {
        return Math.abs(key.hashCode() % TABLE_SIZE);
    }
    
    public void put(K key, V value) {
        int index = hash(key);
        for(Entry<K, V> entry : table[index]) {
            if(entry.key.equals(key)) {
                entry.value = value;
                return;
            }
        }
        table[index].add(new Entry<>(key, value));
    }
    
    public V get(K key) {
        int index = hash(key);
        for(Entry<K, V> entry : table[index]) {
            if(entry.key.equals(key)) {
                return entry.value;
            }
        }
        return null;
    }
    
    public void remove(K key) {
        int index = hash(key);
        table[index].removeIf(entry -> entry.key.equals(key));
    }
}`,
    python: `class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(self.size)]
    
    def hash(self, key):
        return sum(ord(c) for c in str(key)) % self.size
    
    def insert(self, key, value):
        index = self.hash(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                self.table[index][i] = (key, value)
                return
        self.table[index].append((key, value))
    
    def get(self, key):
        index = self.hash(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        raise KeyError(key)
    
    def remove(self, key):
        index = self.hash(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                del self.table[index][i]
                return
        raise KeyError(key)`
  },
  complexity: {
    time: {
      "Insert": "O(1) average",
      "Delete": "O(1) average",
      "Search": "O(1) average",
      "Worst Case": "O(n)",
    },
    space: "O(n)",
  },
  applications: [
    "Database indexing",
    "Symbol tables in compilers",
    "Caches",
    "Unique value filtering",
    "Dictionary implementations",
  ],
  keyPoints: [
    "Provides constant-time access on average",
    "Requires good hash function to minimize collisions",
    "Load factor affects performance",
    "Collision resolution is crucial for efficiency",
    "Common implementation for dictionary/map data structures",
  ],
};

const heapsContent: TopicContent = {
  id: "heaps",
  title: "Heaps",
  description: "Specialized tree-based data structure that satisfies the heap property.",
  overview: `
    <p>A heap is a specialized tree-based data structure that satisfies the heap property. 
    In a max-heap, for any given node I, the value of I is greater than or equal to the values of its children. 
    In a min-heap, the value of I is less than or equal to the values of its children.</p>
    <p>Heaps are commonly implemented as arrays, where for any given index i, its children are at indices 2i+1 and 2i+2.</p>
  `,
  characteristics: [
    {
      title: "Heap Property",
      description: "Parent-child relationship maintains specific ordering.",
    },
    {
      title: "Complete Tree",
      description: "All levels except possibly the last are completely filled.",
    },
    {
      title: "Array Implementation",
      description: "Can be efficiently implemented using arrays.",
    },
    {
      title: "Types",
      description: "Can be min-heap or max-heap based on requirements.",
    },
  ],
  implementations: {
    cpp: `class MaxHeap {
    vector<int> heap;
    
    int parent(int i) { return (i - 1) / 2; }
    int leftChild(int i) { return 2 * i + 1; }
    int rightChild(int i) { return 2 * i + 2; }
    
public:
    void insert(int key) {
        heap.push_back(key);
        int i = heap.size() - 1;
        
        while(i > 0 && heap[parent(i)] < heap[i]) {
            swap(heap[i], heap[parent(i)]);
            i = parent(i);
        }
    }
    
    int extractMax() {
        if(heap.empty()) throw runtime_error("Heap is empty");
        
        int max = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        
        heapify(0);
        return max;
    }
    
private:
    void heapify(int i) {
        int largest = i;
        int left = leftChild(i);
        int right = rightChild(i);
        
        if(left < heap.size() && heap[left] > heap[largest])
            largest = left;
        
        if(right < heap.size() && heap[right] > heap[largest])
            largest = right;
        
        if(largest != i) {
            swap(heap[i], heap[largest]);
            heapify(largest);
        }
    }
};`,
    java: `class MaxHeap {
    private List<Integer> heap;
    
    public MaxHeap() {
        heap = new ArrayList<>();
    }
    
    private int parent(int i) { return (i - 1) / 2; }
    private int leftChild(int i) { return 2 * i + 1; }
    private int rightChild(int i) { return 2 * i + 2; }
    
    public void insert(int key) {
        heap.add(key);
        int i = heap.size() - 1;
        
        while(i > 0 && heap.get(parent(i)) < heap.get(i)) {
            Collections.swap(heap, i, parent(i));
            i = parent(i);
        }
    }
    
    public int extractMax() {
        if(heap.isEmpty())
            throw new IllegalStateException("Heap is empty");
        
        int max = heap.get(0);
        heap.set(0, heap.get(heap.size() - 1));
        heap.remove(heap.size() - 1);
        
        heapify(0);
        return max;
    }
    
    private void heapify(int i) {
        int largest = i;
        int left = leftChild(i);
        int right = rightChild(i);
        
        if(left < heap.size() && heap.get(left) > heap.get(largest))
            largest = left;
        
        if(right < heap.size() && heap.get(right) > heap.get(largest))
            largest = right;
        
        if(largest != i) {
            Collections.swap(heap, i, largest);
            heapify(largest);
        }
    }
}`,
    python: `class MaxHeap:
    def __init__(self):
        self.heap = []
    
    def parent(self, i):
        return (i - 1) // 2
    
    def left_child(self, i):
        return 2 * i + 1
    
    def right_child(self, i):
        return 2 * i + 2
    
    def insert(self, key):
        self.heap.append(key)
        i = len(self.heap) - 1
        
        while i > 0 and self.heap[self.parent(i)] < self.heap[i]:
            self.heap[i], self.heap[self.parent(i)] = \
                self.heap[self.parent(i)], self.heap[i]
            i = self.parent(i)
    
    def extract_max(self):
        if not self.heap:
            raise IndexError("Heap is empty")
        
        max_val = self.heap[0]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        
        self._heapify(0)
        return max_val
    
    def _heapify(self, i):
        largest = i
        left = self.left_child(i)
        right = self.right_child(i)
        
        if left < len(self.heap) and self.heap[left] > self.heap[largest]:
            largest = left
        
        if right < len(self.heap) and self.heap[right] > self.heap[largest]:
            largest = right
        
        if largest != i:
            self.heap[i], self.heap[largest] = self.heap[largest], self.heap[i]
            self._heapify(largest)`
  },
  complexity: {
    time: {
      "Insert": "O(log n)",
      "Extract Max/Min": "O(log n)",
      "Get Max/Min": "O(1)",
      "Build Heap": "O(n)",
    },
    space: "O(n)",
  },
  applications: [
    "Priority queues",
    "Heap sort implementation",
    "Graph algorithms (Dijkstra's, Prim's)",
    "Memory management",
    "Task scheduling",
  ],
  keyPoints: [
    "Maintains heap property for efficient access to max/min element",
    "Complete binary tree structure",
    "Efficient array-based implementation",
    "Used in priority queue implementations",
    "Foundation for heap sort algorithm",
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

const selectionSortContent: TopicContent = {
  id: "selection-sort",
  title: "Selection Sort",
  description: "Divides input into sorted and unsorted regions, finding the minimum element.",
  overview: `
    <p>Selection Sort is a simple comparison-based sorting algorithm that divides the input array into a sorted and unsorted region.</p>
    <p>The algorithm repeatedly finds the minimum element from the unsorted region and places it at the beginning of the sorted region.</p>
  `,
  characteristics: [
    {
      title: "In-Place",
      description: "Sorts array by only using a constant amount of extra space.",
    },
    {
      title: "Simple Implementation",
      description: "Straightforward algorithm with minimal complexity.",
    },
    {
      title: "Unstable Sort",
      description: "Does not preserve relative ordering of equal elements.",
    },
    {
      title: "Comparison-Based",
      description: "Uses element comparisons to determine order.",
    },
  ],
  implementations: {
    cpp: `void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n-1; i++) {
        int minIdx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        swap(arr[minIdx], arr[i]);
    }
}`,
    java: `void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        int minIdx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}`,
    python: `def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`
  },
  complexity: {
    time: {
      Best: "O(n²)",
      Average: "O(n²)",
      Worst: "O(n²)",
    },
    space: "O(1)",
  },
  applications: [
    "Small arrays where simplicity is preferred",
    "When memory is constrained",
    "Educational purposes",
    "When number of writes needs to be minimized",
  ],
  keyPoints: [
    "Always performs O(n²) comparisons even if array is sorted",
    "Makes the minimum possible number of swaps (O(n))",
    "Simple to implement but inefficient for large datasets",
    "Not suitable for large datasets",
    "Performs well on small arrays",
  ],
};

const mergeSortContent: TopicContent = {
  id: "merge-sort",
  title: "Merge Sort",
  description: "Divide and conquer algorithm that divides the input array into two halves.",
  overview: `
    <p>Merge Sort is an efficient, stable sorting algorithm that uses a divide-and-conquer strategy to sort an array.</p>
    <p>It works by dividing the array into two halves, recursively sorting them, and then merging the sorted halves back together.</p>
  `,
  characteristics: [
    {
      title: "Divide and Conquer",
      description: "Breaks problem into smaller subproblems.",
    },
    {
      title: "Stable Sort",
      description: "Maintains relative order of equal elements.",
    },
    {
      title: "Recursive",
      description: "Uses recursion to solve subproblems.",
    },
    {
      title: "Not In-Place",
      description: "Requires additional space proportional to input size.",
    },
  ],
  implementations: {
    cpp: `void merge(vector<int>& arr, int l, int m, int r) {
    vector<int> left(arr.begin() + l, arr.begin() + m + 1);
    vector<int> right(arr.begin() + m + 1, arr.begin() + r + 1);
    
    int i = 0, j = 0, k = l;
    while (i < left.size() && j < right.size()) {
        if (left[i] <= right[j])
            arr[k++] = left[i++];
        else
            arr[k++] = right[j++];
    }
    
    while (i < left.size())
        arr[k++] = left[i++];
    while (j < right.size())
        arr[k++] = right[j++];
}

void mergeSort(vector<int>& arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
    java: `void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    
    int L[] = new int[n1];
    int R[] = new int[n2];
    
    for (int i = 0; i < n1; ++i)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; ++j)
        R[j] = arr[m + 1 + j];
        
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j])
            arr[k++] = L[i++];
        else
            arr[k++] = R[j++];
    }
    
    while (i < n1)
        arr[k++] = L[i++];
    while (j < n2)
        arr[k++] = R[j++];
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`,
    python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
        
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result`
  },
  complexity: {
    time: {
      Best: "O(n log n)",
      Average: "O(n log n)",
      Worst: "O(n log n)",
    },
    space: "O(n)",
  },
  applications: [
    "External sorting",
    "Sorting linked lists",
    "When stable sorting is needed",
    "Parallel processing applications",
    "Large datasets where stable sorting is required",
  ],
  keyPoints: [
    "Guaranteed O(n log n) time complexity",
    "Stable sorting algorithm",
    "Requires extra space",
    "Can be parallelized effectively",
    "Good for sorting linked lists",
  ],
};

const quickSortContent: TopicContent = {
  id: "quick-sort",
  title: "Quick Sort",
  description: "Divide and conquer algorithm that picks a pivot element.",
  overview: `
    <p>Quick Sort is an efficient, in-place sorting algorithm that uses a divide-and-conquer strategy.</p>
    <p>It works by selecting a 'pivot' element and partitioning the array around it, such that smaller elements are on the left and larger elements are on the right.</p>
  `,
  characteristics: [
    {
      title: "In-Place",
      description: "Requires only a small auxiliary stack.",
    },
    {
      title: "Unstable",
      description: "Does not preserve relative ordering of equal elements.",
    },
    {
      title: "Partition-Based",
      description: "Uses partitioning around pivot elements.",
    },
    {
      title: "Recursive",
      description: "Uses recursion to sort subarrays.",
    },
  ],
  implementations: {
    cpp: `int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
    java: `int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    
    return i + 1;
}

void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
    python: `def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`
  },
  complexity: {
    time: {
      Best: "O(n log n)",
      Average: "O(n log n)",
      Worst: "O(n²)",
    },
    space: "O(log n)",
  },
  applications: [
    "General purpose sorting",
    "Systems with virtual memory",
    "When average case performance is important",
    "Internal sorting",
    "When in-place sorting is needed",
  ],
  keyPoints: [
    "Usually the fastest in practice",
    "In-place sorting algorithm",
    "Unstable sort",
    "Pivot selection affects performance",
    "Good cache performance",
  ],
};

const heapSortContent: TopicContent = {
  id: "heap-sort",
  title: "Heap Sort",
  description: "Comparison-based sort that uses a binary heap data structure.",
  overview: `
    <p>Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. 
    It works by first building a max-heap from the array and then repeatedly extracting the maximum element.</p>
    <p>The algorithm maintains the heap property while extracting elements to produce a sorted array.</p>
  `,
  characteristics: [
    {
      title: "In-Place",
      description: "Sorts array using only a constant amount of extra space.",
    },
    {
      title: "Unstable",
      description: "Does not preserve relative ordering of equal elements.",
    },
    {
      title: "Binary Heap Based",
      description: "Uses a binary heap data structure for sorting.",
    },
    {
      title: "Selection-Based",
      description: "Based on selecting the maximum element repeatedly.",
    },
  ],
  implementations: {
    cpp: `void heapify(vector<int>& arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
        largest = left;

    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void heapSort(vector<int>& arr) {
    int n = arr.size();

    // Build max heap
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // Extract elements from heap one by one
    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}`,
    java: `static void heapify(int[] arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest])
        largest = left;

    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest != i) {
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        heapify(arr, n, largest);
    }
}

static void heapSort(int[] arr) {
    int n = arr.length;

    // Build max heap
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // Extract elements from heap one by one
    for (int i = n-1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}`,
    python: `def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)

    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Extract elements from heap one by one
    for i in range(n-1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)`
  },
  complexity: {
    time: {
      Best: "O(n log n)",
      Average: "O(n log n)",
      Worst: "O(n log n)",
    },
    space: "O(1)",
  },
  applications: [
    "Priority queue implementation",
    "Systems with memory constraints",
    "When stable sort is not required",
    "External sorting",
    "K-way merging",
  ],
  keyPoints: [
    "Guaranteed O(n log n) time complexity",
    "In-place sorting algorithm",
    "Not stable",
    "Uses heap data structure",
    "Efficient for large datasets",
  ],
};

const radixSortContent: TopicContent = {
  id: "radix-sort",
  title: "Radix Sort",
  description: "Non-comparative sorting algorithm that sorts integers by processing each digit position.",
  overview: `
    <p>Radix Sort is a non-comparative integer sorting algorithm that sorts numbers by processing each digit position, 
    starting from the least significant digit to the most significant digit.</p>
    <p>It uses counting sort as a subroutine to sort elements based on their digits at different positions.</p>
  `,
  characteristics: [
    {
      title: "Non-Comparative",
      description: "Does not use comparisons between elements to sort.",
    },
    {
      title: "Stable",
      description: "Maintains relative order of equal elements.",
    },
    {
      title: "Digit-by-Digit",
      description: "Processes each digit position separately.",
    },
    {
      title: "Linear Time",
      description: "Can achieve linear time complexity for fixed-length integers.",
    },
  ],
  implementations: {
    cpp: `void countingSort(vector<int>& arr, int exp) {
    vector<int> output(arr.size());
    vector<int> count(10, 0);

    // Store count of occurrences
    for(int i = 0; i < arr.size(); i++)
        count[(arr[i]/exp)%10]++;

    // Change count[i] to contain actual position
    for(int i = 1; i < 10; i++)
        count[i] += count[i-1];

    // Build output array
    for(int i = arr.size()-1; i >= 0; i--) {
        output[count[(arr[i]/exp)%10]-1] = arr[i];
        count[(arr[i]/exp)%10]--;
    }

    // Copy output array to arr
    for(int i = 0; i < arr.size(); i++)
        arr[i] = output[i];
}

void radixSort(vector<int>& arr) {
    int max = *max_element(arr.begin(), arr.end());

    // Do counting sort for every digit
    for(int exp = 1; max/exp > 0; exp *= 10)
        countingSort(arr, exp);
}`,
    java: `static void countingSort(int[] arr, int exp) {
    int n = arr.length;
    int[] output = new int[n];
    int[] count = new int[10];
    Arrays.fill(count, 0);

    // Store count of occurrences
    for (int i = 0; i < n; i++)
        count[(arr[i]/exp)%10]++;

    // Change count[i] to contain actual position
    for (int i = 1; i < 10; i++)
        count[i] += count[i - 1];

    // Build output array
    for (int i = n - 1; i >= 0; i--) {
        output[count[(arr[i]/exp)%10] - 1] = arr[i];
        count[(arr[i]/exp)%10]--;
    }

    // Copy output array to arr
    for (int i = 0; i < n; i++)
        arr[i] = output[i];
}

static void radixSort(int[] arr) {
    int max = Arrays.stream(arr).max().getAsInt();

    // Do counting sort for every digit
    for (int exp = 1; max/exp > 0; exp *= 10)
        countingSort(arr, exp);
}`,
    python: `def counting_sort(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    # Store count of occurrences
    for i in range(n):
        index = arr[i] // exp
        count[index % 10] += 1

    # Change count[i] to contain actual position
    for i in range(1, 10):
        count[i] += count[i - 1]

    # Build output array
    i = n - 1
    while i >= 0:
        index = arr[i] // exp
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1

    # Copy output array to arr
    for i in range(n):
        arr[i] = output[i]

def radix_sort(arr):
    max_num = max(arr)

    # Do counting sort for every digit
    exp = 1
    while max_num // exp > 0:
        counting_sort(arr, exp)
        exp *= 10`
  },
  complexity: {
    time: {
      Best: "O(nk)",
      Average: "O(nk)",
      Worst: "O(nk)",
    },
    space: "O(n + k)",
  },
  applications: [
    "Integer sorting",
    "String sorting",
    "Card sorting machines",
    "Network routing tables",
    "Sorting large integers or strings",
  ],
  keyPoints: [
    "Non-comparative sorting algorithm",
    "Stable sorting algorithm",
    "Efficient for integers or strings",
    "Time complexity depends on number of digits",
    "Uses counting sort as a subroutine",
  ],
};

const countingSortContent: TopicContent = {
  id: "counting-sort",
  title: "Counting Sort",
  description: "Integer sorting algorithm that operates by counting the number of objects with distinct key values.",
  overview: `
    <p>Counting Sort is a non-comparative sorting algorithm that works by counting the number of objects having distinct key values, 
    and using arithmetic to determine the positions of each key value in the output sequence.</p>
    <p>It is particularly efficient when the range of input values is not significantly larger than the number of objects to be sorted.</p>
  `,
  characteristics: [
    {
      title: "Non-Comparative",
      description: "Does not use comparisons between elements to sort.",
    },
    {
      title: "Stable",
      description: "Maintains relative order of equal elements.",
    },
    {
      title: "Linear Time",
      description: "Achieves O(n) time complexity when input range is O(n).",
    },
    {
      title: "Range Dependent",
      description: "Efficiency depends on the range of input values.",
    },
  ],
  implementations: {
    cpp: `void countingSort(vector<int>& arr) {
    int max = *max_element(arr.begin(), arr.end());
    int min = *min_element(arr.begin(), arr.end());
    int range = max - min + 1;
    
    vector<int> count(range), output(arr.size());
    
    // Store count of each element
    for(int i = 0; i < arr.size(); i++)
        count[arr[i] - min]++;
        
    // Modify count array to contain actual positions
    for(int i = 1; i < count.size(); i++)
        count[i] += count[i-1];
        
    // Build output array
    for(int i = arr.size()-1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    
    // Copy output array to arr
    for(int i = 0; i < arr.size(); i++)
        arr[i] = output[i];
}`,
    java: `void countingSort(int[] arr) {
    int max = Arrays.stream(arr).max().getAsInt();
    int min = Arrays.stream(arr).min().getAsInt();
    int range = max - min + 1;
    
    int[] count = new int[range];
    int[] output = new int[arr.length];
    
    // Store count of each element
    for (int i = 0; i < arr.length; i++)
        count[arr[i] - min]++;
        
    // Modify count array to contain actual positions
    for (int i = 1; i < count.length; i++)
        count[i] += count[i - 1];
        
    // Build output array
    for (int i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
    
    // Copy output array to arr
    for (int i = 0; i < arr.length; i++)
        arr[i] = output[i];
}`,
    python: `def counting_sort(arr):
    if not arr:
        return arr
        
    max_val = max(arr)
    min_val = min(arr)
    range_val = max_val - min_val + 1
    
    count = [0] * range_val
    output = [0] * len(arr)
    
    # Store count of each element
    for i in arr:
        count[i - min_val] += 1
    
    # Modify count array to contain actual positions
    for i in range(1, len(count)):
        count[i] += count[i-1]
    
    # Build output array
    for i in range(len(arr)-1, -1, -1):
        output[count[arr[i] - min_val] - 1] = arr[i]
        count[arr[i] - min_val] -= 1
    
    # Copy output array to arr
    for i in range(len(arr)):
        arr[i] = output[i]`
  },
  complexity: {
    time: {
      Best: "O(n + k)",
      Average: "O(n + k)",
      Worst: "O(n + k)",
    },
    space: "O(n + k)",
  },
  applications: [
    "Sorting integers with known range",
    "Sorting strings by character",
    "As a subroutine in radix sort",
    "When stability is required",
    "Counting frequencies of elements",
  ],
  keyPoints: [
    "Linear time complexity when range is O(n)",
    "Stable sorting algorithm",
    "Not suitable when range is much larger than n",
    "Uses counting as the main operation",
    "Requires extra space proportional to range",
  ],
};

const shellSortContent: TopicContent = {
  id: "shell-sort",
  title: "Shell Sort",
  description: "Generalization of insertion sort that allows exchange of items far apart.",
  overview: `
    <p>Shell Sort is an optimization of insertion sort that allows the exchange of items that are far apart. 
    The algorithm works by first sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared.</p>
    <p>It starts with a large gap and reduces it in each iteration until the gap becomes 1, effectively becoming insertion sort.</p>
  `,
  characteristics: [
    {
      title: "Gap Sequence",
      description: "Uses decreasing gap sequence for comparisons.",
    },
    {
      title: "In-Place",
      description: "Sorts array without using extra space.",
    },
    {
      title: "Unstable",
      description: "Does not preserve relative ordering of equal elements.",
    },
    {
      title: "Adaptive",
      description: "Performance improves for partially sorted arrays.",
    },
  ],
  implementations: {
    cpp: `void shellSort(vector<int>& arr) {
    int n = arr.size();
    
    // Start with a big gap, then reduce the gap
    for (int gap = n/2; gap > 0; gap /= 2) {
        // Do a gapped insertion sort
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            
            // Shift earlier gap-sorted elements up
            // until the correct location for arr[i] is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                arr[j] = arr[j - gap];
            
            arr[j] = temp;
        }
    }
}`,
    java: `void shellSort(int[] arr) {
    int n = arr.length;
    
    // Start with a big gap, then reduce the gap
    for (int gap = n/2; gap > 0; gap /= 2) {
        // Do a gapped insertion sort
        for (int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;
            
            // Shift earlier gap-sorted elements up
            // until the correct location for arr[i] is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                arr[j] = arr[j - gap];
            
            arr[j] = temp;
        }
    }
}`,
    python: `def shell_sort(arr):
    n = len(arr)
    gap = n // 2
    
    # Start with a big gap, then reduce the gap
    while gap > 0:
        # Do a gapped insertion sort
        for i in range(gap, n):
            temp = arr[i]
            j = i
            
            # Shift earlier gap-sorted elements up
            # until the correct location for arr[i] is found
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
            
            arr[j] = temp
        gap //= 2`
  },
  complexity: {
    time: {
      Best: "O(n log n)",
      Average: "O(n log n) to O(n^2)",
      Worst: "O(n^2)",
    },
    space: "O(1)",
  },
  applications: [
    "When insertion sort is too slow",
    "When space is a constraint",
    "Sorting medium-sized arrays",
    "As a practical alternative to quicksort in some cases",
    "When simplicity of implementation is desired",
  ],
  keyPoints: [
    "Improvement over insertion sort",
    "Performance depends on gap sequence choice",
    "In-place sorting algorithm",
    "Adaptive sorting algorithm",
    "Good for medium-sized arrays",
  ],
};


//Sample content for search algorithm topics
const linearSearchContent: TopicContent = {
  id: "linear-search",
  title: "Linear Search",
  description: "Sequential search algorithm that starts at one end and checks every element.",
  overview: `
    <p>Linear Search is the simplest searching algorithm that sequentially checks each element in a list until a match is found or the whole list has been searched.</p>
    <p>While not efficient for large datasets, it is easy to implement and works on both sorted and unsorted arrays.</p>
  `,
  characteristics: [
    {
      title: "Sequential Access",
      description: "Checks elements one by one from start to end.",
    },
    {
      title: "Unordered Data",
      description: "Works on both sorted and unsorted arrays.",
    },
    {
      title: "Simple Implementation",
      description: "Straightforward to implement and understand.",
    },
    {
      title: "Memory Efficient",
      description: "Uses constant extra space.",
    },
  ],
  implementations: {
    cpp: `int linearSearch(vector<int>& arr, int target) {
    for(int i = 0; i < arr.size(); i++) {
        if(arr[i] == target)
            return i;
    }
    return -1;
}`,
    java: `static int linearSearch(int[] arr, int target) {
    for(int i = 0; i < arr.length; i++) {
        if(arr[i] == target)
            return i;
    }
    return -1;
}`,
    python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`
  },
  complexity: {
    time: {
      Best: "O(1)",
      Average: "O(n)",
      Worst: "O(n)",
    },
    space: "O(1)",
  },
  applications: [
    "Small datasets",
    "Searching in unsorted arrays",
    "When simplicity is preferred",
    "Real-time searching",
    "One-time searches where setup cost matters",
  ],
  keyPoints: [
    "Simplest search algorithm",
    "Works on unsorted arrays",
    "No preprocessing required",
    "Inefficient for large datasets",
    "Best for small arrays or infrequent searches",
  ],
};

const binarySearchContent: TopicContent = {
  id: "binary-search",
  title: "Binary Search",
  description: "Search algorithm that finds the position of a target value in a sorted array.",
  overview: `
    <p>Binary Search is an efficient algorithm for searching a sorted array by repeatedly dividing the search interval in half. 
    It works by comparing the target value with the middle element of the array.</p>
    <p>If the target value is less than the middle element, then search continues on the lower half. 
    Otherwise, the search continues on the upper half.</p>
  `,
  characteristics: [
    {
      title: "Requires Sorted Data",
      description: "Only works on sorted arrays.",
    },
    {
      title: "Divide and Conquer",
      description: "Repeatedly divides search space in half.",
    },
    {
      title: "Random Access",
      description: "Requires constant-time access to any array element.",
    },
    {
      title: "Efficient",
      description: "Logarithmic time complexity makes it very efficient for large datasets.",
    },
  ],
  implementations: {
    cpp: `int binarySearch(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while(left <= right) {
        int mid = left + (right - left) / 2;
        
        if(arr[mid] == target)
            return mid;
            
        if(arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    
    return -1;
}`,
    java: `static int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    
    while(left <= right) {
        int mid = left + (right - left) / 2;
        
        if(arr[mid] == target)
            return mid;
            
        if(arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    
    return -1;
}`,
    python: `def binary_search(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`
  },
  complexity: {
    time: {
      Best: "O(1)",
      Average: "O(log n)",
      Worst: "O(log n)",
    },
    space: "O(1)",
  },
  applications: [
    "Searching in large sorted datasets",
    "Database indexing",
    "Finding insert positions in sorted arrays",
    "System level applications",
    "Computational geometry",
  ],
  keyPoints: [
    "Requires sorted array",
    "Very efficient for large datasets",
    "Logarithmic time complexity",
    "Used in many system-level applications",
    "Foundation for more complex search algorithms",
  ],
};

const interpolationSearchContent: TopicContent = {
  id: "interpolation-search",
  title: "Interpolation Search",
  description: "Improved binary search for uniformly distributed sorted arrays.",
  overview: `
    <p>Interpolation Search is an improvement over binary search for uniformly distributed sorted arrays. 
    Instead of always checking the middle element, it makes a position estimate based on the target value.</p>
    <p>The position is calculated using a formula that takes into account the distribution of values.</p>
  `,
  characteristics: [
    {
      title: "Distribution Dependent",
      description: "Works best on uniformly distributed data.",
    },
    {
      title: "Requires Sorted Data",
      description: "Only works on sorted arrays.",
    },
    {
      title: "Position Estimation",
      description: "Uses value-based position estimation.",
    },
    {
      title: "Adaptive Probing",
      description: "Probe position changes based on target value.",
    },
  ],
  implementations: {
    cpp: `int interpolationSearch(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while(left <= right && target >= arr[left] && target <= arr[right]) {
        if(left == right) {
            if(arr[left] == target) return left;
            return -1;
        }
        
        // Probe position formula
        int pos = left + ((target - arr[left]) * (right - left)) /
                       (arr[right] - arr[left]);
        
        if(arr[pos] == target)
            return pos;
            
        if(arr[pos] < target)
            left = pos + 1;
        else
            right = pos - 1;
    }
    
    return -1;
}`,
    java: `static int interpolationSearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    
    while(left <= right && target >= arr[left] && target <= arr[right]) {
        if(left == right) {
            if(arr[left] == target) return left;
            return -1;
        }
        
        // Probe position formula
        int pos = left + ((target - arr[left]) * (right - left)) /
                       (arr[right] - arr[left]);
        
        if(arr[pos] == target)
            return pos;
            
        if(arr[pos] < target)
            left = pos + 1;
        else
            right = pos - 1;
    }
    
    return -1;
}`,
    python: `def interpolation_search(arr, target):
    left = 0
    right = len(arr) - 1
    
    while (left <= right and 
           target >= arr[left] and 
           target <= arr[right]):
        if left == right:
            if arr[left] == target:
                return left
            return -1
        
        # Probe position formula
        pos = left + ((target - arr[left]) * (right - left)) // \
                    (arr[right] - arr[left])
        
        if arr[pos] == target:
            return pos
        
        if arr[pos] < target:
            left = pos + 1
        else:
            right = pos - 1
    
    return -1`
  },
  complexity: {
    time: {
      Best: "O(1)",
      Average: "O(log(log n))",
      Worst: "O(n)",
    },
    space: "O(1)",
  },
  applications: [
    "Searching in uniformly distributed datasets",
    "Phone directories",
    "Dictionaries",
    "Numeric arrays with uniform distribution",
    "System level searching",
  ],
  keyPoints: [
    "More efficient than binary search for uniform distribution",
    "Requires sorted and uniformly distributed data",
    "Uses value-based position estimation",
    "Can degrade to linear search in worst case",
    "Good for large, uniformly distributed datasets",
  ],
};

const depthFirstSearchContent: TopicContent = {
  id: "depth-first-search",
  title: "Depth-First Search",
  description: "Algorithm for traversing tree or graph data structures starting from the root.",
  overview: `
    <p>Depth-First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. 
    It starts at a root node and explores as far as possible along each branch before backtracking.</p>
    <p>DFS uses a stack (either explicitly or through recursion) to remember where to return when backtracking.</p>
  `,
  characteristics: [
    {
      title: "Stack-Based",
      description: "Uses stack data structure for backtracking.",
    },
    {
      title: "Memory Efficient",
      description: "Uses less memory for deep graphs.",
    },
    {
      title: "Complete Search",
      description: "Visits all nodes in the graph.",
    },
    {
      title: "Branch Exploration",
      description: "Explores branches to their full depth first.",
    },
  ],
  implementations: {
    cpp: `class Graph {
    unordered_map<int, vector<int>> adj;
public:
    void addEdge(int v, int w) {
        adj[v].push_back(w);
    }
    
    void DFS(int start) {
        unordered_set<int> visited;
        DFSUtil(start, visited);
    }
    
private:
    void DFSUtil(int v, unordered_set<int>& visited) {
        visited.insert(v);
        cout << v << " ";
        
        for(int neighbor : adj[v]) {
            if(visited.find(neighbor) == visited.end())
                DFSUtil(neighbor, visited);
        }
    }
};`,
    java: `class Graph {
    private Map<Integer, List<Integer>> adj;
    
    public Graph() {
        adj = new HashMap<>();
    }
    
    public void addEdge(int v, int w) {
        adj.computeIfAbsent(v, k -> new ArrayList<>()).add(w);
    }
    
    public void DFS(int start) {
        Set<Integer> visited = new HashSet<>();
        DFSUtil(start, visited);
    }
    
    private void DFSUtil(int v, Set<Integer> visited) {
        visited.add(v);
        System.out.print(v + " ");
        
        for(int neighbor : adj.getOrDefault(v, new ArrayList<>())) {
            if(!visited.contains(neighbor))
                DFSUtil(neighbor, visited);
        }
    }
}`,
    python: `class Graph:
    def __init__(self):
        self.adj = {}
    
    def add_edge(self, v, w):
        if v not in self.adj:
            self.adj[v] = []
        self.adj[v].append(w)
    
    def dfs(self, start):
        visited = set()
        
        def dfs_util(v):
            visited.add(v)
            print(v, end=" ")
            
            for neighbor in self.adj.get(v, []):
                if neighbor not in visited:
                    dfs_util(neighbor)
        
        dfs_util(start)`
  },
  complexity: {
    time: {
      "Traversal": "O(V + E)",
      "Space": "O(V)",
    },
    space: "O(V)",
  },
  applications: [
    "Topological sorting",
    "Solving mazes",
    "Path finding problems",
    "Game trees (Minimax)",
    "Cycle detection in graphs",
  ],
  keyPoints: [
    "Uses stack data structure",
    "Memory efficient for deep graphs",
    "Complete graph traversal",
    "Basis for many graph algorithms",
    "Can be implemented recursively or iteratively",
  ],
};

const breadthFirstSearchContent: TopicContent = {
  id: "breadth-first-search",
  title: "Breadth-First Search",
  description: "Algorithm for traversing tree or graph data structures level by level.",
  overview: `
    <p>Breadth-First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. 
    It starts at a root node and explores all nodes at the present depth before moving on to nodes at the next depth level.</p>
    <p>BFS uses a queue to keep track of nodes to visit and ensures level-by-level traversal.</p>
  `,
  characteristics: [
    {
      title: "Queue-Based",
      description: "Uses queue data structure for level order traversal.",
    },
    {
      title: "Level Order",
      description: "Visits all nodes at current level before next level.",
    },
    {
      title: "Shortest Path",
      description: "Finds shortest path in unweighted graphs.",
    },
    {
      title: "Complete Search",
      description: "Visits all nodes in the graph.",
    },
  ],
  implementations: {
    cpp: `class Graph {
    unordered_map<int, vector<int>> adj;
public:
    void addEdge(int v, int w) {
        adj[v].push_back(w);
    }
    
    void BFS(int start) {
        unordered_set<int> visited;
        queue<int> q;
        
        visited.insert(start);
        q.push(start);
        
        while(!q.empty()) {
            int v = q.front();
            q.pop();
            cout << v << " ";
            
            for(int neighbor : adj[v]) {
                if(visited.find(neighbor) == visited.end()) {
                    visited.insert(neighbor);
                    q.push(neighbor);
                }
            }
        }
    }
};`,
    java: `class Graph {
    private Map<Integer, List<Integer>> adj;
    
    public Graph() {
        adj = new HashMap<>();
    }
    
    public void addEdge(int v, int w) {
        adj.computeIfAbsent(v, k -> new ArrayList<>()).add(w);
    }
    
    public void BFS(int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        
        visited.add(start);
        queue.offer(start);
        
        while(!queue.isEmpty()) {
            int v = queue.poll();
            System.out.print(v + " ");
            
            for(int neighbor : adj.getOrDefault(v, new ArrayList<>())) {
                if(!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.offer(neighbor);
                }
            }
        }
    }
}`,
    python: `from collections import deque

class Graph:
    def __init__(self):
        self.adj = {}
    
    def add_edge(self, v, w):
        if v not in self.adj:
            self.adj[v] = []
        self.adj[v].append(w)
    
    def bfs(self, start):
        visited = set()
        queue = deque([start])
        visited.add(start)
        
        while queue:
            v = queue.popleft()
            print(v, end=" ")
            
            for neighbor in self.adj.get(v, []):
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)`
  },
  complexity: {
    time: {
      "Traversal": "O(V + E)",
      "Space": "O(V)",
    },
    space: "O(V)",
  },
  applications: [
    "Shortest path in unweighted graphs",
    "Level order traversal",
    "Web crawlers",
    "Social networking",
    "GPS navigation systems",
  ],
  keyPoints: [
    "Uses queue data structure",
    "Visits nodes level by level",
    "Finds shortest path in unweighted graphs",
    "Memory intensive for wide graphs",
    "Optimal for searching nearby nodes",
  ],
};

const jumpSearchContent: TopicContent = {
  id: "jump-search",
  title: "Jump Search",
  description: "Search algorithm that jumps ahead by fixed steps to find the target element.",
  overview: `
    <p>Jump Search is a searching algorithm designed for sorted arrays. It works by skipping a fixed number of elements 
    and then performing a linear search.</p>
    <p>The optimal jump size is √n, where n is the length of the array. This makes it an efficient algorithm for medium-sized arrays.</p>
  `,
  characteristics: [
    {
      title: "Requires Sorted Data",
      description: "Only works on sorted arrays.",
    },
    {
      title: "Fixed Jump Size",
      description: "Uses fixed-size jumps (typically √n).",
    },
    {
      title: "Two-Phase Search",
      description: "Jump phase followed by linear search.",
    },
    {
      title: "Better than Linear",
      description: "More efficient than linear search for large arrays.",
    },
  ],
  implementations: {
    cpp: `int jumpSearch(vector<int>& arr, int target) {
    int n = arr.size();
    int step = sqrt(n);
    
    // Finding the block where element is present (if it exists)
    int prev = 0;
    while(arr[min(step, n)-1] < target) {
        prev = step;
        step += sqrt(n);
        if(prev >= n)
            return -1;
    }
    
    // Linear search for target in block beginning with prev
    while(arr[prev] < target) {
        prev++;
        if(prev == min(step, n))
            return -1;
    }
    
    if(arr[prev] == target)
        return prev;
        
    return -1;
}`,
    java: `static int jumpSearch(int[] arr, int target) {
    int n = arr.length;
    int step = (int)Math.floor(Math.sqrt(n));
    
    // Finding the block where element is present (if it exists)
    int prev = 0;
    while(arr[Math.min(step, n)-1] < target) {
        prev = step;
        step += (int)Math.floor(Math.sqrt(n));
        if(prev >= n)
            return -1;
    }
    
    // Linear search for target in block beginning with prev
    while(arr[prev] < target) {
        prev++;
        if(prev == Math.min(step, n))
            return -1;
    }
    
    if(arr[prev] == target)
        return prev;
        
    return -1;
}`,
    python: `def jump_search(arr, target):
    n = len(arr)
    step = int(n ** 0.5)
    
    # Finding the block where element is present (if it exists)
    prev = 0
    while arr[min(step, n) - 1] < target:
        prev = step
        step += int(n ** 0.5)
        if prev >= n:
            return -1
    
    # Linear search for target in block beginning with prev
    while arr[prev] < target:
        prev += 1
        if prev == min(step, n):
            return -1
    
    if arr[prev] == target:
        return prev
    
    return -1`
  },
  complexity: {
    time: {
      Best: "O(1)",
      Average: "O(√n)",
      Worst: "O(√n)",
    },
    space: "O(1)",
  },
  applications: [
    "Medium-sized sorted arrays",
    "When binary search is overkill",
    "Memory-efficient searching",
    "When data is sorted and uniformly distributed",
    "Alternative to binary search for smaller datasets",
  ],
  keyPoints: [
    "Works only on sorted arrays",
    "Optimal jump size is √n",
    "Combines jumping and linear search",
    "More efficient than linear search",
    "Less efficient than binary search for large datasets",
  ],
};


//Sample content for graph algorithms
const dijkstrasContent: TopicContent = {
  id: "dijkstras-algorithm",
  title: "Dijkstra's Algorithm",
  description: "Finding shortest paths between nodes in a graph with non-negative edge weights.",
  overview: `
    <p>Dijkstra's Algorithm is a graph search algorithm that solves the single-source shortest path problem 
    for a graph with non-negative edge weights, producing a shortest-path tree.</p>
    <p>It maintains a set of unvisited nodes and continuously selects the unvisited node with the smallest tentative distance, 
    marks it as visited, and updates the tentative distances to all unvisited neighbors.</p>
  `,
  characteristics: [
    {
      title: "Greedy Algorithm",
      description: "Always selects the node with minimum distance.",
    },
    {
      title: "Non-negative Weights",
      description: "Only works with non-negative edge weights.",
    },
    {
      title: "Single Source",
      description: "Finds shortest paths from a single source to all vertices.",
    },
    {
      title: "Priority Queue",
      description: "Uses priority queue for efficient node selection.",
    },
  ],
  implementations: {
    cpp: `class Graph {
    int V;
    vector<vector<pair<int, int>>> adj;
public:
    Graph(int v) : V(v) {
        adj.resize(V);
    }
    
    void addEdge(int u, int v, int w) {
        adj[u].push_back({v, w});
        adj[v].push_back({u, w});
    }
    
    vector<int> dijkstra(int src) {
        vector<int> dist(V, INT_MAX);
        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
        
        dist[src] = 0;
        pq.push({0, src});
        
        while(!pq.empty()) {
            int u = pq.top().second;
            pq.pop();
            
            for(auto& [v, weight] : adj[u]) {
                if(dist[v] > dist[u] + weight) {
                    dist[v] = dist[u] + weight;
                    pq.push({dist[v], v});
                }
            }
        }
        return dist;
    }
};`,
    java: `class Graph {
    private int V;
    private List<List<Node>> adj;
    
    class Node implements Comparable<Node> {
        int vertex, weight;
        Node(int v, int w) {
            vertex = v;
            weight = w;
        }
        public int compareTo(Node other) {
            return Integer.compare(weight, other.weight);
        }
    }
    
    public Graph(int v) {
        V = v;
        adj = new ArrayList<>();
        for(int i = 0; i < V; i++)
            adj.add(new ArrayList<>());
    }
    
    public void addEdge(int u, int v, int w) {
        adj.get(u).add(new Node(v, w));
        adj.get(v).add(new Node(u, w));
    }
    
    public int[] dijkstra(int src) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        PriorityQueue<Node> pq = new PriorityQueue<>();
        
        dist[src] = 0;
        pq.add(new Node(src, 0));
        
        while(!pq.isEmpty()) {
            int u = pq.poll().vertex;
            
            for(Node node : adj.get(u)) {
                if(dist[node.vertex] > dist[u] + node.weight) {
                    dist[node.vertex] = dist[u] + node.weight;
                    pq.add(new Node(node.vertex, dist[node.vertex]));
                }
            }
        }
        return dist;
    }
}`,
    python: `from heapq import heappush, heappop

class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.adj = [[] for _ in range(vertices)]
    
    def add_edge(self, u, v, w):
        self.adj[u].append((v, w))
        self.adj[v].append((u, w))
    
    def dijkstra(self, src):
        dist = [float('inf')] * self.V
        dist[src] = 0
        pq = [(0, src)]
        
        while pq:
            d, u = heappop(pq)
            
            if d > dist[u]:
                continue
            
            for v, weight in self.adj[u]:
                if dist[v] > dist[u] + weight:
                    dist[v] = dist[u] + weight
                    heappush(pq, (dist[v], v))
        
        return dist`
  },
  complexity: {
    time: {
      "With Binary Heap": "O((V + E) log V)",
      "With Fibonacci Heap": "O(E + V log V)",
      "Without Priority Queue": "O(V²)",
    },
    space: "O(V)",
  },
  applications: [
    "GPS and navigation systems",
    "Network routing protocols",
    "Social networks",
    "Flight scheduling",
    "Games with pathfinding",
  ],
  keyPoints: [
    "Only works with non-negative edge weights",
    "Finds shortest path from source to all vertices",
    "Uses greedy approach",
    "Can be optimized with different priority queue implementations",
    "Forms basis for many routing algorithms",
  ],
};

const bellmanFordContent: TopicContent = {
  id: "bellman-ford",
  title: "Bellman-Ford Algorithm",
  description: "Finding shortest paths in graphs with negative edge weights.",
  overview: `
    <p>The Bellman-Ford algorithm is a single-source shortest path algorithm that can handle graphs with negative edge weights. 
    It can also detect negative weight cycles in the graph.</p>
    <p>The algorithm repeatedly relaxes all edges V-1 times, where V is the number of vertices. A final pass is done to check for negative cycles.</p>
  `,
  characteristics: [
    {
      title: "Negative Weights",
      description: "Can handle negative edge weights.",
    },
    {
      title: "Cycle Detection",
      description: "Can detect negative weight cycles.",
    },
    {
      title: "Edge Relaxation",
      description: "Repeatedly relaxes all edges.",
    },
    {
      title: "Dynamic Programming",
      description: "Uses dynamic programming approach.",
    },
  ],
  implementations: {
    cpp: `class Graph {
    struct Edge {
        int src, dest, weight;
    };
    
    int V, E;
    vector<Edge> edges;
    
public:
    Graph(int v, int e) : V(v), E(e) {}
    
    void addEdge(int src, int dest, int weight) {
        edges.push_back({src, dest, weight});
    }
    
    vector<int> bellmanFord(int src) {
        vector<int> dist(V, INT_MAX);
        dist[src] = 0;
        
        // Relax all edges V-1 times
        for(int i = 1; i < V; i++) {
            for(const Edge& edge : edges) {
                if(dist[edge.src] != INT_MAX && 
                   dist[edge.dest] > dist[edge.src] + edge.weight) {
                    dist[edge.dest] = dist[edge.src] + edge.weight;
                }
            }
        }
        
        // Check for negative weight cycles
        for(const Edge& edge : edges) {
            if(dist[edge.src] != INT_MAX && 
               dist[edge.dest] > dist[edge.src] + edge.weight) {
                cout << "Graph contains negative weight cycle";
                return vector<int>();
            }
        }
        
        return dist;
    }
};`,
    java: `class Graph {
    class Edge {
        int src, dest, weight;
        Edge(int s, int d, int w) {
            src = s;
            dest = d;
            weight = w;
        }
    }
    
    private int V, E;
    private List<Edge> edges;
    
    public Graph(int v, int e) {
        V = v;
        E = e;
        edges = new ArrayList<>();
    }
    
    public void addEdge(int src, int dest, int weight) {
        edges.add(new Edge(src, dest, weight));
    }
    
    public int[] bellmanFord(int src) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        
        // Relax all edges V-1 times
        for(int i = 1; i < V; i++) {
            for(Edge edge : edges) {
                if(dist[edge.src] != Integer.MAX_VALUE && 
                   dist[edge.dest] > dist[edge.src] + edge.weight) {
                    dist[edge.dest] = dist[edge.src] + edge.weight;
                }
            }
        }
        
        // Check for negative weight cycles
        for(Edge edge : edges) {
            if(dist[edge.src] != Integer.MAX_VALUE && 
               dist[edge.dest] > dist[edge.src] + edge.weight) {
                System.out.println("Graph contains negative weight cycle");
                return new int[0];
            }
        }
        
        return dist;
    }
}`,
    python: `class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.edges = []
    
    def add_edge(self, src, dest, weight):
        self.edges.append((src, dest, weight))
    
    def bellman_ford(self, src):
        dist = [float('inf')] * self.V
        dist[src] = 0
        
        # Relax all edges V-1 times
        for _ in range(self.V - 1):
            for src, dest, weight in self.edges:
                if dist[src] != float('inf') and dist[src] + weight < dist[dest]:
                    dist[dest] = dist[src] + weight
        
        # Check for negative weight cycles
        for src, dest, weight in self.edges:
            if dist[src] != float('inf') and dist[src] + weight < dist[dest]:
                print("Graph contains negative weight cycle")
                return []
        
        return dist`
  },
  complexity: {
    time: {
      "Best": "O(VE)",
      "Average": "O(VE)",
      "Worst": "O(VE)",
    },
    space: "O(V)",
  },
  applications: [
    "Network routing protocols",
    "Currency exchange calculations",
    "Arbitrage detection",
    "Traffic routing with congestion",
    "Systems with negative feedback loops",
  ],
  keyPoints: [
    "Can handle negative edge weights",
    "Detects negative weight cycles",
    "Slower than Dijkstra's for non-negative weights",
    "Uses simpler implementation than Dijkstra's",
    "Important in networking and economics applications",
  ],
};

const kruskalContent: TopicContent = {
  id: "kruskal-algorithm",
  title: "Kruskal's Algorithm",
  description: "Minimum spanning tree algorithm for weighted, undirected graphs.",
  overview: `
    <p>Kruskal's Algorithm finds a minimum spanning tree in a weighted, undirected graph. 
    It works by continuously selecting the smallest weight edge that doesn't create a cycle.</p>
    <p>The algorithm uses a disjoint set data structure to efficiently detect cycles.</p>
  `,
  characteristics: [
    {
      title: "Greedy Approach",
      description: "Always selects the minimum weight edge.",
    },
    {
      title: "Union-Find",
      description: "Uses disjoint set data structure.",
    },
    {
      title: "Edge-Based",
      description: "Processes edges in sorted order.",
    },
    {
      title: "Cycle Prevention",
      description: "Avoids creating cycles in the tree.",
    },
  ],
  implementations: {
    cpp: `class DisjointSet {
    vector<int> parent, rank;
public:
    DisjointSet(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for(int i = 0; i < n; i++)
            parent[i] = i;
    }
    
    int find(int x) {
        if(parent[x] != x)
            parent[x] = find(parent[x]);
        return parent[x];
    }
    
    void unite(int x, int y) {
        int px = find(x), py = find(y);
        if(px == py) return;
        
        if(rank[px] < rank[py])
            parent[px] = py;
        else if(rank[px] > rank[py])
            parent[py] = px;
        else {
            parent[py] = px;
            rank[px]++;
        }
    }
};

class Graph {
    struct Edge {
        int src, dest, weight;
        bool operator<(const Edge& other) const {
            return weight < other.weight;
        }
    };
    
    int V;
    vector<Edge> edges;
    
public:
    Graph(int v) : V(v) {}
    
    void addEdge(int src, int dest, int weight) {
        edges.push_back({src, dest, weight});
    }
    
    vector<Edge> kruskalMST() {
        vector<Edge> result;
        sort(edges.begin(), edges.end());
        DisjointSet ds(V);
        
        for(const Edge& edge : edges) {
            if(ds.find(edge.src) != ds.find(edge.dest)) {
                result.push_back(edge);
                ds.unite(edge.src, edge.dest);
            }
        }
        
        return result;
    }
};`,
    java: `class DisjointSet {
    private int[] parent, rank;
    
    public DisjointSet(int n) {
        parent = new int[n];
        rank = new int[n];
        for(int i = 0; i < n; i++)
            parent[i] = i;
    }
    
    public int find(int x) {
        if(parent[x] != x)
            parent[x] = find(parent[x]);
        return parent[x];
    }
    
    public void union(int x, int y) {
        int px = find(x), py = find(y);
        if(px == py) return;
        
        if(rank[px] < rank[py])
            parent[px] = py;
        else if(rank[px] > rank[py])
            parent[py] = px;
        else {
            parent[py] = px;
            rank[px]++;
        }
    }
}

class Graph {
    class Edge implements Comparable<Edge> {
        int src, dest, weight;
        
        Edge(int s, int d, int w) {
            src = s;
            dest = d;
            weight = w;
        }
        
        public int compareTo(Edge other) {
            return Integer.compare(weight, other.weight);
        }
    }
    
    private int V;
    private List<Edge> edges;
    
    public Graph(int v) {
        V = v;
        edges = new ArrayList<>();
    }
    
    public void addEdge(int src, int dest, int weight) {
        edges.add(new Edge(src, dest, weight));
    }
    
    public List<Edge> kruskalMST() {
        List<Edge> result = new ArrayList<>();
        Collections.sort(edges);
        DisjointSet ds = new DisjointSet(V);
        
        for(Edge edge : edges) {
            if(ds.find(edge.src) != ds.find(edge.dest)) {
                result.add(edge);
                ds.union(edge.src, edge.dest);
            }
        }
        
        return result;
    }
}`,
    python: `class DisjointSet:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return
        
        if self.rank[px] < self.rank[py]:
            self.parent[px] = py
        elif self.rank[px] > self.rank[py]:
            self.parent[py] = px
        else:
            self.parent[py] = px
            self.rank[px] += 1

class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.edges = []
    
    def add_edge(self, src, dest, weight):
        self.edges.append((src, dest, weight))
    
    def kruskal_mst(self):
        result = []
        self.edges.sort(key=lambda x: x[2])
        ds = DisjointSet(self.V)
        
        for src, dest, weight in self.edges:
            if ds.find(src) != ds.find(dest):
                result.append((src, dest, weight))
                ds.union(src, dest)
        
        return result`
  },
  complexity: {
    time: {
      "Sorting": "O(E log E)",
      "Union-Find Operations": "O(E α(V))",
      "Overall": "O(E log E)",
    },
    space: "O(V + E)",
  },
  applications: [
    "Network design",
    "Circuit design",
    "Water supply networks",
    "TV cable networks",
    "Computer network routing",
  ],
  keyPoints: [
    "Finds minimum spanning tree",
    "Uses union-find data structure",
    "Processes edges in sorted order",
    "Works well for sparse graphs",
    "Simple to implement but requires sorting",
  ],
};

const primContent: TopicContent = {
  id: "prim-algorithm",
  title: "Prim's Algorithm",
  description: "Another minimum spanning tree algorithm for weighted, undirected graphs.",
  overview: `
    <p>Prim's Algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. 
    It starts from an arbitrary vertex and grows the spanning tree edge by edge.</p>
    <p>The algorithm maintains a set of vertices already included in the MST and continuously selects the minimum weight edge 
    that connects a vertex in the set to a vertex outside the set.</p>
  `,
  characteristics: [
    {
      title: "Greedy Approach",
      description: "Always selects the lowest weight edge that connects to unvisited vertices.",
    },
    {
      title: "Priority Queue",
      description: "Uses priority queue for efficient minimum edge selection.",
    },
    {
      title: "Connected Components",
      description: "Works only on connected graphs.",
    },
    {
      title: "Growing Tree",
      description: "Grows the MST from a single vertex.",
    },
  ],
  implementations: {
    cpp: `class Graph {
    int V;
    vector<vector<pair<int, int>>> adj;
public:
    Graph(int v) : V(v) {
        adj.resize(V);
    }
    
    void addEdge(int u, int v, int w) {
        adj[u].push_back({v, w});
        adj[v].push_back({u, w});
    }
    
    vector<pair<int, int>> primMST() {
        vector<bool> visited(V, false);
        vector<pair<int, int>> result;
        priority_queue<tuple<int, int, int>, 
                      vector<tuple<int, int, int>>, 
                      greater<>> pq;
        
        // Start from vertex 0
        pq.push({0, 0, -1}); // weight, vertex, parent
        
        while(!pq.empty()) {
            auto [weight, u, parent] = pq.top();
            pq.pop();
            
            if(visited[u]) continue;
            visited[u] = true;
            
            if(parent != -1)
                result.push_back({parent, u});
            
            for(auto& [v, w] : adj[u]) {
                if(!visited[v])
                    pq.push({w, v, u});
            }
        }
        
        return result;
    }
};`,
    java: `class Graph {
    private int V;
    private List<List<Node>> adj;
    
    class Node {
        int vertex, weight;
        Node(int v, int w) {
            vertex = v;
            weight = w;
        }
    }
    
    public Graph(int v) {
        V = v;
        adj = new ArrayList<>();
        for(int i = 0; i < V; i++)
            adj.add(new ArrayList<>());
    }
    
    public void addEdge(int u, int v, int w) {
        adj.get(u).add(new Node(v, w));
        adj.get(v).add(new Node(u, w));
    }
    
    public List<int[]> primMST() {
        boolean[] visited = new boolean[V];
        List<int[]> result = new ArrayList<>();
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        
        // Start from vertex 0
        pq.offer(new int[]{0, 0, -1}); // weight, vertex, parent
        
        while(!pq.isEmpty()) {
            int[] curr = pq.poll();
            int weight = curr[0], u = curr[1], parent = curr[2];
            
            if(visited[u]) continue;
            visited[u] = true;
            
            if(parent != -1)
                result.add(new int[]{parent, u});
            
            for(Node node : adj.get(u)) {
                if(!visited[node.vertex])
                    pq.offer(new int[]{node.weight, node.vertex, u});
            }
        }
        
        return result;
    }
}`,
    python: `from heapq import heappush, heappop

class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.adj = [[] for _ in range(vertices)]
    
    def add_edge(self, u, v, w):
        self.adj[u].append((v, w))
        self.adj[v].append((u, w))
    
    def prim_mst(self):
        visited = [False] * self.V
        result = []
        pq = [(0, 0, -1)]  # weight, vertex, parent
        
        while pq:
            weight, u, parent = heappop(pq)
            
            if visited[u]:
                continue
                
            visited[u] = True
            if parent != -1:
                result.append((parent, u))
            
            for v, w in self.adj[u]:
                if not visited[v]:
                    heappush(pq, (w, v, u))
        
        return result`
  },
  complexity: {
    time: {
      "With Binary Heap": "O((V + E) log V)",
      "With Fibonacci Heap": "O(E + V log V)",
      "With Array": "O(V²)",
    },
    space: "O(V)",
  },
  applications: [
    "Network design",
    "Power and water distribution networks",
    "Circuit design optimization",
    "Cluster analysis",
    "Transportation networks",
  ],
  keyPoints: [
    "Finds minimum spanning tree",
    "Works only on connected, undirected graphs",
    "More efficient than Kruskal's for dense graphs",
    "Uses priority queue for efficiency",
    "Grows tree from a single source",
  ],
};

const topologicalSortContent: TopicContent = {
  id: "topological-sort",
  title: "Topological Sorting",
  description: "Linearizing a directed acyclic graph (DAG).",
  overview: `
    <p>Topological Sort is an algorithm for ordering the vertices of a directed acyclic graph (DAG) such that for every directed edge (u,v), 
    vertex u comes before v in the ordering.</p>
    <p>It has important applications in scheduling tasks with dependencies, build systems, and data processing pipelines.</p>
  `,
  characteristics: [
    {
      title: "DAG Requirement",
      description: "Only works on directed acyclic graphs.",
    },
    {
      title: "Multiple Solutions",
      description: "May have multiple valid orderings.",
    },
    {
      title: "Dependency Resolution",
      description: "Resolves dependencies between vertices.",
    },
    {
      title: "Cycle Detection",
      description: "Can detect cycles in the graph.",
    },
  ],
  implementations: {
    cpp: `class Graph {
    int V;
    vector<vector<int>> adj;
public:
    Graph(int v) : V(v) {
        adj.resize(V);
    }
    
    void addEdge(int u, int v) {
        adj[u].push_back(v);
    }
    
    vector<int> topologicalSort() {
        vector<int> inDegree(V, 0);
        vector<int> result;
        queue<int> q;
        
        // Calculate in-degree for each vertex
        for(int u = 0; u < V; u++) {
            for(int v : adj[u]) {
                inDegree[v]++;
            }
        }
        
        // Add vertices with 0 in-degree to queue
        for(int u = 0; u < V; u++) {
            if(inDegree[u] == 0) {
                q.push(u);
            }
        }
        
        while(!q.empty()) {
            int u = q.front();
            q.pop();
            result.push_back(u);
            
            for(int v :\ adj[u]) 
                inDegree[v]--;
                if(inDegree[v] == 0) {
                    q.push(v);
                }
            }
        }
        
        // Check if graph has a cycle
        if(result.size() != V) {
            return vector<int>(); // Graph has a cycle
        }
        
        return result;
    }
};`,
    java: `class Graph {
    private int V;
    private List<List<Integer>> adj;
    
    public Graph(int v) {
        V = v;
        adj = new ArrayList<>();
        for(int i = 0; i < V; i++)
            adj.add(new ArrayList<>());
    }
    
    public void addEdge(int u, int v) {
        adj.get(u).add(v);
    }
    
    public List<Integer> topologicalSort() {
        int[] inDegree = new int[V];
        List<Integer> result = new ArrayList<>();
        Queue<Integer> q = new LinkedList<>();
        
        // Calculate in-degree for each vertex
        for(int u = 0; u < V; u++) {
            for(int v : adj.get(u)) {
                inDegree[v]++;
            }
        }
        
        // Add vertices with 0 in-degree to queue
        for(int u = 0; u < V; u++) {
            if(inDegree[u] == 0) {
                q.offer(u);
            }
        }
        
        while(!q.isEmpty()) {
            int u = q.poll();
            result.add(u);
            
            for(int v : adj.get(u)) {
                inDegree[v]--;
                if(inDegree[v] == 0) {
                    q.offer(v);
                }
            }
        }
        
        // Check if graph has a cycle
        if(result.size() != V) {
            return new ArrayList<>(); // Graph has a cycle
        }
        
        return result;
    }
}`,
    python: `from collections import deque

class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.adj = [[] for _ in range(vertices)]
    
    def add_edge(self, u, v):
        self.adj[u].append(v)
    
    def topological_sort(self):
        in_degree = [0] * self.V
        result = []
        
        # Calculate in-degree for each vertex
        for u in range(self.V):
            for v in self.adj[u]:
                in_degree[v] += 1
        
        # Create queue and add vertices with 0 in-degree
        queue = deque()
        for u in range(self.V):
            if in_degree[u] == 0:
                queue.append(u)
        
        while queue:
            u = queue.popleft()
            result.append(u)
            
            for v in self.adj[u]:
                in_degree[v] -= 1
                if in_degree[v] == 0:
                    queue.append(v)
        
        # Check if graph has a cycle
        if len(result) != self.V:
            return []  # Graph has a cycle
        
        return result`
  },
  complexity: {
    time: {
      "Best": "O(V + E)",
      "Average": "O(V + E)",
      "Worst": "O(V + E)",
    },
    space: "O(V)",
  },
  applications: [
    "Task scheduling",
    "Build systems",
    "Course prerequisites",
    "Data processing pipelines",
    "Package dependency resolution",
  ],
  keyPoints: [
    "Only works on directed acyclic graphs (DAGs)",
    "Can detect cycles in the graph",
    "Multiple valid orderings may exist",
    "Used in dependency resolution",
    "Important in project scheduling",
  ],
};


// Sample content for dynamic programming topics
const fibonacciDPContent: TopicContent = {
  id: "fibonacci-dp",
  title: "Fibonacci with Dynamic Programming",
  description: "Efficient computation of Fibonacci numbers using memoization.",
  overview: `
    <p>Dynamic Programming approach to calculating Fibonacci numbers avoids the exponential complexity of naive recursive solutions 
    by storing previously calculated results in a table (memoization).</p>
    <p>This transforms an exponential time algorithm into a linear time solution by eliminating redundant calculations.</p>
  `,
  characteristics: [
    {
      title: "Memoization",
      description: "Stores previously calculated values to avoid redundant computation.",
    },
    {
      title: "Bottom-up Approach",
      description: "Builds solution by calculating smaller subproblems first.",
    },
    {
      title: "Space Optimization",
      description: "Can be implemented using only O(1) extra space.",
    },
    {
      title: "Linear Time",
      description: "Achieves O(n) time complexity through dynamic programming.",
    },
  ],
  implementations: {
    cpp: `// Memoization (Top-down) approach
int fib(int n, vector<int>& memo) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}

// Bottom-up approach
int fibDP(int n) {
    if (n <= 1) return n;
    int prev = 0, curr = 1;
    for(int i = 2; i <= n; i++) {
        int next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}`,
    java: `// Memoization (Top-down) approach
static int fib(int n, int[] memo) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}

// Bottom-up approach
static int fibDP(int n) {
    if (n <= 1) return n;
    int prev = 0, curr = 1;
    for(int i = 2; i <= n; i++) {
        int next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}`,
    python: `# Memoization (Top-down) approach
def fib_memo(n, memo=None):
    if memo is None:
        memo = {}
    if n <= 1:
        return n
    if n not in memo:
        memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

# Bottom-up approach
def fib_dp(n):
    if n <= 1:
        return n
    prev, curr = 0, 1
    for i in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr`
  },
  complexity: {
    time: {
      "Memoization": "O(n)",
      "Bottom-up": "O(n)",
      "Space-optimized": "O(n)",
    },
    space: `{
      "Memoization": "O(n)",
      "Bottom-up": "O(1)",
    }`,
  },
  applications: [
    "Number theory",
    "Financial modeling",
    "Natural growth patterns",
    "Population growth modeling",
    "Introduction to dynamic programming",
  ],
  keyPoints: [
    "Eliminates redundant calculations through memoization",
    "Can be implemented iteratively or recursively",
    "Space can be optimized to O(1)",
    "Serves as a basic example of dynamic programming",
    "Demonstrates the power of storing subproblem solutions",
  ],
};

const knapsackContent: TopicContent = {
  id: "knapsack-problem",
  title: "0/1 Knapsack Problem",
  description: "Optimization problem of selecting items with maximum value within weight constraints.",
  overview: `
    <p>The 0/1 Knapsack problem is a classical optimization problem where we need to select items with maximum total value 
    while keeping the total weight under a given limit. Each item can either be selected (1) or not selected (0).</p>
    <p>It is solved using dynamic programming by building a table of optimal solutions for smaller subproblems.</p>
  `,
  characteristics: [
    {
      title: "Binary Choice",
      description: "Each item can either be taken or left (0/1 property).",
    },
    {
      title: "Optimal Substructure",
      description: "Optimal solution contains optimal solutions to subproblems.",
    },
    {
      title: "Weight Constraint",
      description: "Total weight must not exceed knapsack capacity.",
    },
    {
      title: "Value Optimization",
      description: "Aims to maximize total value within weight constraint.",
    },
  ],
  implementations: {
    cpp: `int knapsack(vector<int>& values, vector<int>& weights, int W) {
    int n = values.size();
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));
    
    for(int i = 1; i <= n; i++) {
        for(int w = 0; w <= W; w++) {
            if(weights[i-1] <= w) {
                dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], 
                              dp[i-1][w]);
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    return dp[n][W];
}`,
    java: `static int knapsack(int[] values, int[] weights, int W) {
    int n = values.length;
    int[][] dp = new int[n + 1][W + 1];
    
    for(int i = 1; i <= n; i++) {
        for(int w = 0; w <= W; w++) {
            if(weights[i-1] <= w) {
                dp[i][w] = Math.max(values[i-1] + dp[i-1][w-weights[i-1]], 
                                  dp[i-1][w]);
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    return dp[n][W];
}`,
    python: `def knapsack(values, weights, W):
    n = len(values)
    dp = [[0 for _ in range(W + 1)] for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(W + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], 
                              dp[i-1][w])
            else:
                dp[i][w] = dp[i-1][w]
    
    return dp[n][W]`
  },
  complexity: {
    time: {"": "O(nW)"},
    space: "O(nW)",
  },
  applications: [
    "Resource allocation",
    "Portfolio optimization",
    "Cargo loading",
    "Investment decisions",
    "Budget constrained selections",
  ],
  keyPoints: [
    "Classical dynamic programming problem",
    "Requires consideration of all possible combinations",
    "Can be optimized for space complexity",
    "Has variations like fractional knapsack",
    "Important in optimization problems",
  ],
};

const lcsContent: TopicContent = {
  id: "longest-common-subsequence",
  title: "Longest Common Subsequence",
  description: "Finding the longest subsequence common to two sequences.",
  overview: `
    <p>The Longest Common Subsequence (LCS) problem finds the longest sequence of characters that appear in order 
    (not necessarily consecutively) in both input strings.</p>
    <p>It is solved using dynamic programming by building a table of LCS lengths for all prefixes of both strings.</p>
  `,
  characteristics: [
    {
      title: "Subsequence vs Substring",
      description: "Characters need not be consecutive but must be in order.",
    },
    {
      title: "Multiple Solutions",
      description: "May have multiple valid longest common subsequences.",
    },
    {
      title: "Dynamic Programming",
      description: "Uses table to store lengths of LCS for all prefixes.",
    },
    {
      title: "String Comparison",
      description: "Compares characters from both strings systematically.",
    },
  ],
  implementations: {
    cpp: `string lcs(string X, string Y) {
    int m = X.length(), n = Y.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    
    // Fill dp table
    for(int i = 1; i <= m; i++) {
        for(int j = 1; j <= n; j++) {
            if(X[i-1] == Y[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    // Construct the LCS
    string lcs = "";
    int i = m, j = n;
    while(i > 0 && j > 0) {
        if(X[i-1] == Y[j-1]) {
            lcs = X[i-1] + lcs;
            i--; j--;
        } else if(dp[i-1][j] > dp[i][j-1]) {
            i--;
        } else {
            j--;
        }
    }
    return lcs;
}`,
    java: `static String lcs(String X, String Y) {
    int m = X.length(), n = Y.length();
    int[][] dp = new int[m + 1][n + 1];
    
    // Fill dp table
    for(int i = 1; i <= m; i++) {
        for(int j = 1; j <= n; j++) {
            if(X.charAt(i-1) == Y.charAt(j-1)) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    // Construct the LCS
    StringBuilder lcs = new StringBuilder();
    int i = m, j = n;
    while(i > 0 && j > 0) {
        if(X.charAt(i-1) == Y.charAt(j-1)) {
            lcs.insert(0, X.charAt(i-1));
            i--; j--;
        } else if(dp[i-1][j] > dp[i][j-1]) {
            i--;
        } else {
            j--;
        }
    }
    return lcs.toString();
}`,
    python: `def lcs(X, Y):
    m, n = len(X), len(Y)
    dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
    
    # Fill dp table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if X[i-1] == Y[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    # Construct the LCS
    lcs = []
    i, j = m, n
    while i > 0 and j > 0:
        if X[i-1] == Y[j-1]:
            lcs.append(X[i-1])
            i -= 1
            j -= 1
        elif dp[i-1][j] > dp[i][j-1]:
            i -= 1
        else:
            j -= 1
    
    return ''.join(reversed(lcs))`
  },
  complexity: {
    time: { "": "O(mn)"},
    space: "O(mn)",
  },
  applications: [
    "DNA sequence analysis",
    "File difference comparison",
    "Version control systems",
    "Speech recognition",
    "Text similarity measurement",
  ],
  keyPoints: [
    "Used in biological sequence comparison",
    "Foundation for diff tools",
    "Can be optimized for space",
    "Has variations like longest common substring",
    "Important in string algorithms",
  ],
};

const matrixChainContent: TopicContent = {
  id: "matrix-chain-multiplication",
  title: "Matrix Chain Multiplication",
  description: "Finding the most efficient way to multiply a chain of matrices.",
  overview: `
    <p>Matrix Chain Multiplication determines the optimal way to parenthesize a sequence of matrix multiplications 
    to minimize the total number of scalar multiplications.</p>
    <p>It uses dynamic programming to evaluate all possible ways of parenthesizing the matrix chain and finds the minimum cost.</p>
  `,
  characteristics: [
    {
      title: "Optimal Substructure",
      description: "Problem can be broken down into smaller subproblems.",
    },
    {
      title: "Parenthesization",
      description: "Finds optimal way to place parentheses in matrix chain.",
    },
    {
      title: "Cost Calculation",
      description: "Minimizes number of scalar multiplications.",
    },
    {
      title: "Bottom-up Approach",
      description: "Builds solution by solving smaller chains first.",
    },
  ],
  implementations: {
    cpp: `pair<int, string> matrixChainOrder(vector<int>& dims) {
    int n = dims.size() - 1;
    vector<vector<int>> dp(n, vector<int>(n, INT_MAX));
    vector<vector<int>> split(n, vector<int>(n));
    
    // Initialize diagonal
    for(int i = 0; i < n; i++)
        dp[i][i] = 0;
    
    // Fill table
    for(int len = 2; len <= n; len++) {
        for(int i = 0; i < n - len + 1; i++) {
            int j = i + len - 1;
            for(int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k+1][j] + 
                          dims[i] * dims[k+1] * dims[j+1];
                if(cost < dp[i][j]) {
                    dp[i][j] = cost;
                    split[i][j] = k;
                }
            }
        }
    }
    
    // Construct parenthesization
    function<string(int,int)> printParenthesis = [&](int i, int j) {
        if(i == j) return "M" + to_string(i+1);
        return "(" + printParenthesis(i, split[i][j]) + 
               printParenthesis(split[i][j]+1, j) + ")";
    };
    
    return {dp[0][n-1], printParenthesis(0, n-1)};
}`,
    java: `static class Result {
    int cost;
    String parenthesization;
    Result(int c, String p) {
        cost = c;
        parenthesization = p;
    }
}

static Result matrixChainOrder(int[] dims) {
    int n = dims.length - 1;
    int[][] dp = new int[n][n];
    int[][] split = new int[n][n];
    
    // Initialize diagonal
    for(int i = 0; i < n; i++)
        dp[i][i] = 0;
    
    // Fill table
    for(int len = 2; len <= n; len++) {
        for(int i = 0; i < n - len + 1; i++) {
            int j = i + len - 1;
            dp[i][j] = Integer.MAX_VALUE;
            for(int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k+1][j] + 
                          dims[i] * dims[k+1] * dims[j+1];
                if(cost < dp[i][j]) {
                    dp[i][j] = cost;
                    split[i][j] = k;
                }
            }
        }
    }
    
    String parenthesization = printParenthesis(split, 0, n-1);
    return new Result(dp[0][n-1], parenthesization);
}

static String printParenthesis(int[][] split, int i, int j) {
    if(i == j) return "M" + (i+1);
    return "(" + printParenthesis(split, i, split[i][j]) + 
           printParenthesis(split, split[i][j]+1, j) + ")";
}`,
    python: `def matrix_chain_order(dims):
    n = len(dims) - 1
    dp = [[float('inf')] * n for _ in range(n)]
    split = [[0] * n for _ in range(n)]
    
    # Initialize diagonal
    for i in range(n):
        dp[i][i] = 0
    
    # Fill table
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            for k in range(i, j):
                cost = (dp[i][k] + dp[k+1][j] + 
                       dims[i] * dims[k+1] * dims[j+1])
                if cost < dp[i][j]:
                    dp[i][j] = cost
                    split[i][j] = k
    
    def print_parenthesis(i, j):
        if i == j:
            return f"M{i+1}"
        return (f"({print_parenthesis(i, split[i][j])}" +
                f"{print_parenthesis(split[i][j]+1, j)})")
    
    return dp[0][n-1], print_parenthesis(0, n-1)`
  },
  complexity: {
    time: {"":"O(n³)"},
    space: "O(n²)",
  },
  applications: [
    "Matrix computations",
    "Scientific computing",
    "Computer graphics transformations",
    "Neural network layer operations",
    "Optimization problems",
  ],
  keyPoints: [
    "Minimizes number of scalar multiplications",
    "Uses dynamic programming approach",
    "Requires careful parenthesization",
    "Important in computational efficiency",
    "Has applications in parallel computing",
  ],
};


//Sample content for advanced topics
const greedyAlgorithmsContent: TopicContent = {
  id: "greedy-algorithms",
  title: "Greedy Algorithms",
  description: "Algorithms that make locally optimal choices to find a global optimum.",
  overview: `
    <p>Greedy algorithms follow a problem-solving heuristic where they make the best possible choice at each step 
    with the hope that these local choices lead to a globally optimal solution.</p>
    <p>They are commonly used in optimization problems and work best when a problem exhibits the greedy-choice property 
    and optimal substructure.</p>
  `,
  characteristics: [
    { title: "Greedy Choice Property", description: "Making a locally optimal choice at each step leads to the globally optimal solution." },
    { title: "Optimal Substructure", description: "A problem has optimal substructure if an optimal solution to the problem contains optimal solutions to subproblems." },
    { title: "Fast and Efficient", description: "Greedy algorithms generally have lower time complexity compared to exhaustive approaches." }
  ],
  implementations: {
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
struct Item { int value, weight; };
bool compare(Item a, Item b) { return (double)a.value / a.weight > (double)b.value / a.weight; }
double knapsack(vector<Item>& items, int capacity) {
    sort(items.begin(), items.end(), compare);
    double maxValue = 0.0;
    for (auto& item : items) {
        if (capacity >= item.weight) { maxValue += item.value; capacity -= item.weight; }
        else { maxValue += item.value * ((double)capacity / item.weight); break; }
    }
    return maxValue;
}`,
    python: `def knapsack(items, capacity):
    items.sort(key=lambda x: x[0]/x[1], reverse=True)
    maxValue = 0.0
    for value, weight in items:
        if capacity >= weight:
            maxValue += value
            capacity -= weight
        else:
            maxValue += value * (capacity / weight)
            break
    return maxValue` ,
    java: `import java.util.Arrays;
import java.util.Comparator;
import random
import numpy as np
class Item { int value, weight; }
class Knapsack {
    static double knapsack(Item[] items, int capacity) {
        Arrays.sort(items, Comparator.comparingDouble(i -> -(double) i.value / i.weight));
        double maxValue = 0.0;
        for (Item item : items) {
            if (capacity >= item.weight) { maxValue += item.value; capacity -= item.weight; }
            else { maxValue += item.value * ((double) capacity / item.weight); break; }
        }
        return maxValue;
    }
}`
  },
  complexity: {
    time: { "Sorting (if required)": "O(n log n)", "Selection in each step": "O(1) or O(n)" },
    space: "O(1) (typically in-place)"
  },
  applications: [
    "Huffman coding (data compression)",
    "Dijkstra’s algorithm (shortest path in a graph)",
    "Prim’s algorithm (Minimum Spanning Tree)",
    "Activity selection problem",
    "Fractional knapsack problem"
  ],
  keyPoints: [
    "Greedy algorithms are efficient but do not always guarantee an optimal solution.",
    "They work well when problems exhibit the greedy-choice property and optimal substructure.",
    "Sorting is often a prerequisite in many greedy problems.",
    "Commonly used in optimization problems like scheduling, graph algorithms, and resource allocation."
  ]
};

const backtrackingContent: TopicContent = {
  id: "backtracking",
  title: "Backtracking",
  description: "Algorithmic technique for solving problems by trying partial solutions and abandoning those that cannot possibly be completed.",
  overview: `
    <p>Backtracking is a systematic way of trying out different sequences of decisions until the correct solution is found. 
    It abandons a path as soon as it determines that the path will not yield a valid solution.</p>
    <p>This method is often used in constraint satisfaction problems such as the N-Queens problem, Sudoku, and solving mazes.</p>
  `,
  characteristics: [
    { title: "Recursive Approach", description: "Backtracking is often implemented using recursion to explore all possible solutions." },
    { title: "Pruning", description: "Unpromising paths are abandoned early to reduce computation time." },
    { title: "Exponential Time Complexity", description: "Worst-case scenarios can lead to exponential time complexity, but pruning can improve efficiency." }
  ],
  implementations: {
    cpp: `#include <iostream>
using namespace std;
#define N 4
bool isSafe(int board[N][N], int row, int col) {
    for (int i = 0; i < col; i++)
        if (board[row][i]) return false;
    for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j]) return false;
    for (int i = row, j = col; i < N && j >= 0; i++, j--)
        if (board[i][j]) return false;
    return true;
}`,
    python: `def solve_n_queens(board, col):
    if col >= len(board): return True
    for i in range(len(board)):
        if is_safe(board, i, col):
            board[i][col] = 1
            if solve_n_queens(board, col + 1): return True
            board[i][col] = 0
    return False` ,
    java: `class NQueens {
    static boolean solveNQueens(int board[][], int col) {
        if (col >= board.length) return true;
        for (int i = 0; i < board.length; i++) {
            if (isSafe(board, i, col)) {
                board[i][col] = 1;
                if (solveNQueens(board, col + 1)) return true;
                board[i][col] = 0;
            }
        }
        return false;
    }
}`
  },
  complexity: {
    time: { "Worst Case": "O(n!)" },
    space: "O(n) for recursion depth"
  },
  applications: [
    "Solving puzzles like Sudoku and N-Queens",
    "Graph coloring problems",
    "Maze solving",
    "Subset sum problem",
    "Word segmentation"
  ],
  keyPoints: [
    "Backtracking systematically explores possible solutions.",
    "Pruning helps improve efficiency by eliminating impossible choices early.",
    "Commonly used in constraint satisfaction problems and puzzles.",
    "Recursion is a natural fit for implementing backtracking algorithms."
  ]
};

const divideAndConquerContent: TopicContent = {
  id: "divide-and-conquer",
  title: "Divide and Conquer",
  description: "Problem-solving method that breaks down a problem into smaller, more manageable subproblems.",
  overview: `
    <p>Divide and Conquer is a fundamental algorithm design paradigm that works by breaking down a problem into smaller subproblems, 
    solving the subproblems, and then combining these solutions to create a solution to the original problem.</p>
    <p>This technique is the foundation for many efficient algorithms including merge sort, quick sort, and binary search.</p>
  `,
  characteristics: [
    {
      title: "Divide",
      description: "Break the problem into smaller subproblems.",
    },
    {
      title: "Conquer",
      description: "Recursively solve the subproblems.",
    },
    {
      title: "Combine",
      description: "Merge the solutions of subproblems into a solution for the original problem.",
    },
    {
      title: "Recursion",
      description: "Uses recursive approach to solve subproblems.",
    },
  ],
  implementations: {
    cpp: `// Merge Sort implementation using Divide and Conquer
void merge(vector<int>& arr, int left, int mid, int right) {
    vector<int> temp(right - left + 1);
    int i = left, j = mid + 1, k = 0;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j])
            temp[k++] = arr[i++];
        else
            temp[k++] = arr[j++];
    }
    
    while (i <= mid)
        temp[k++] = arr[i++];
        
    while (j <= right)
        temp[k++] = arr[j++];
        
    for (i = left, k = 0; i <= right; i++, k++)
        arr[i] = temp[k];
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}`,
    java: `// Binary Search implementation using Divide and Conquer
static int binarySearch(int[] arr, int left, int right, int target) {
    if (right >= left) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target)
            return mid;
            
        if (arr[mid] > target)
            return binarySearch(arr, left, mid - 1, target);
            
        return binarySearch(arr, mid + 1, right, target);
    }
    return -1;
}`,
    python: `# Quick Sort implementation using Divide and Conquer
def quick_sort(arr, low, high):
    if low < high:
        pivot_index = partition(arr, low, high)
        quick_sort(arr, low, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`
  },
  complexity: {
    time: {
      "Merge Sort": "O(n log n)",
      "Quick Sort": "O(n log n) average",
      "Binary Search": "O(log n)",
    },
    space: "O(n) to O(log n) depending on implementation",
  },
  applications: [
    "Sorting algorithms (Merge Sort, Quick Sort)",
    "Searching algorithms (Binary Search)",
    "Fast Fourier Transform (FFT)",
    "Matrix multiplication (Strassen's algorithm)",
    "Closest pair of points problem",
  ],
  keyPoints: [
    "Efficiently solves problems by breaking them into smaller subproblems",
    "Often leads to efficient logarithmic time complexities",
    "Commonly implemented using recursion",
    "Forms the basis for many important algorithms",
    "Well-suited for parallel processing",
  ],
};

const randomizedAlgorithmsContent: TopicContent = {
  id: "randomized-algorithms",
  title: "Randomized Algorithms",
  description: "Algorithms that use randomness as part of their logic to solve problems.",
  overview: `
    <p>Randomized algorithms incorporate random choices into their logic to achieve good performance in expectation. 
    These algorithms often provide simpler and more efficient solutions compared to deterministic approaches.</p>
    <p>They are particularly useful when dealing with large datasets or when approximate solutions are acceptable.</p>
  `,
  characteristics: [
    {
      title: "Randomness",
      description: "Uses random choices as part of the algorithm.",
    },
    {
      title: "Probability",
      description: "Results are guaranteed with high probability.",
    },
    {
      title: "Efficiency",
      description: "Often simpler and faster than deterministic alternatives.",
    },
    {
      title: "Trade-offs",
      description: "Balances accuracy with performance.",
    },
  ],
  implementations: {
    cpp: `// Randomized Quick Sort implementation
int randomPartition(vector<int>& arr, int low, int high) {
    srand(time(0));
    int random = low + rand() % (high - low);
    swap(arr[random], arr[high]);
    
    int pivot = arr[high];
    int i = low - 1;
    
    for(int j = low; j < high; j++) {
        if(arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void randomizedQuickSort(vector<int>& arr, int low, int high) {
    if(low < high) {
        int pi = randomPartition(arr, low, high);
        randomizedQuickSort(arr, low, pi - 1);
        randomizedQuickSort(arr, pi + 1, high);
    }
}`,
    java: `// Monte Carlo Pi Estimation
static double estimatePi(int points) {
    Random rand = new Random();
    int insideCircle = 0;
    
    for(int i = 0; i < points; i++) {
        double x = rand.nextDouble();
        double y = rand.nextDouble();
        
        if(x*x + y*y <= 1)
            insideCircle++;
    }
    
    return 4.0 * insideCircle / points;
}`,
    python: `# Randomized Selection Algorithm

def randomized_select(arr, left, right, k):
    if left == right:
        return arr[left]
    
    pivot_idx = random.randint(left, right)
    pivot_idx = partition(arr, left, right, pivot_idx)
    
    if k == pivot_idx:
        return arr[k]
    elif k < pivot_idx:
        return randomized_select(arr, left, pivot_idx - 1, k)
    else:
        return randomized_select(arr, pivot_idx + 1, right, k)

def partition(arr, left, right, pivot_idx):
    pivot_value = arr[pivot_idx]
    arr[pivot_idx], arr[right] = arr[right], arr[pivot_idx]
    store_idx = left
    
    for i in range(left, right):
        if arr[i] < pivot_value:
            arr[store_idx], arr[i] = arr[i], arr[store_idx]
            store_idx += 1
            
    arr[right], arr[store_idx] = arr[store_idx], arr[right]
    return store_idx`
  },
  complexity: {
    time: {
      "Expected": "Varies by algorithm",
      "Randomized Quicksort": "O(n log n) expected",
      "Monte Carlo": "Depends on desired accuracy",
    },
    space: "Typically O(1) to O(log n)",
  },
  applications: [
    "Quick Sort with random pivot",
    "Monte Carlo algorithms",
    "Randomized selection",
    "Load balancing",
    "Cryptographic algorithms",
  ],
  keyPoints: [
    "Provides probabilistic guarantees rather than deterministic ones",
    "Often simpler to implement than deterministic alternatives",
    "Can achieve better average-case performance",
    "Useful in parallel and distributed computing",
    "Important in cryptography and security applications",
  ],
};

const approximationAlgorithmsContent: TopicContent = {
  id: "approximation-algorithms",
  title: "Approximation Algorithms",
  description: "Algorithms that find near-optimal solutions for NP-hard optimization problems.",
  overview: `
    <p>Approximation algorithms are used to find approximate solutions to optimization problems 
    that are too complex to solve exactly in polynomial time. They provide solutions that are 
    guaranteed to be within a certain factor of the optimal solution.</p>
    <p>These algorithms are particularly useful for NP-hard problems where finding exact solutions 
    is computationally infeasible for large inputs.</p>
  `,
  characteristics: [
    {
      title: "Approximation Ratio",
      description: "Guaranteed bound on solution quality compared to optimal.",
    },
    {
      title: "Polynomial Time",
      description: "Runs efficiently even for large inputs.",
    },
    {
      title: "Trade-off",
      description: "Balances solution quality with computational efficiency.",
    },
    {
      title: "Theoretical Guarantees",
      description: "Provides provable bounds on solution quality.",
    },
  ],
  implementations: {
    cpp: `// Vertex Cover Approximation
class Graph {
    int V;
    vector<vector<int>> adj;
public:
    Graph(int v) : V(v) {
        adj.resize(V);
    }
    
    void addEdge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    
    vector<int> approximateVertexCover() {
        vector<bool> visited(V, false);
        vector<int> cover;
        
        for(int u = 0; u < V; u++) {
            if(!visited[u]) {
                for(int v : adj[u]) {
                    if(!visited[v]) {
                        visited[u] = visited[v] = true;
                        cover.push_back(u);
                        cover.push_back(v);
                        break;
                    }
                }
            }
        }
        return cover;
    }
};`,
    java: `// Traveling Salesman Problem Approximation
class TSPApproximation {
    private int V;
    private int[][] graph;
    
    public TSPApproximation(int v) {
        V = v;
        graph = new int[V][V];
    }
    
    public List<Integer> approximateTSP() {
        // Minimum Spanning Tree based approximation
        List<Integer> tour = new ArrayList<>();
        boolean[] visited = new boolean[V];
        tour.add(0);
        visited[0] = true;
        
        for(int i = 1; i < V; i++) {
            int next = findNearest(tour.get(tour.size()-1), visited);
            tour.add(next);
            visited[next] = true;
        }
        tour.add(0); // Return to start
        return tour;
    }
    
    private int findNearest(int current, boolean[] visited) {
        int nearest = -1;
        int minDist = Integer.MAX_VALUE;
        
        for(int i = 0; i < V; i++) {
            if(!visited[i] && graph[current][i] < minDist) {
                minDist = graph[current][i];
                nearest = i;
            }
        }
        return nearest;
    }
}`,
    python: `# Set Cover Approximation
def greedy_set_cover(universe, subsets):
    elements = set(universe)
    covered = set()
    cover = []
    
    while covered != elements:
        subset = max(subsets, key=lambda s: len(set(s) - covered))
        cover.append(subset)
        covered.update(subset)
    
    return cover

# Example usage
universe = set(range(1, 11))
subsets = [
    [1, 2, 3, 8],
    [1, 2, 3, 4, 8],
    [1, 2, 3, 4],
    [2, 3, 4, 5, 7, 8],
    [4, 5, 6, 7],
    [5, 6, 7, 8, 9, 10]
]
approximated_cover = greedy_set_cover(universe, subsets)`
  },
  complexity: {
    time: {
      "Vertex Cover": "O(V + E)",
      "TSP Approximation": "O(V²)",
      "Set Cover": "O(n * m)",
    },
    space: "Varies by problem",
  },
  applications: [
    "Traveling Salesman Problem",
    "Vertex Cover",
    "Set Cover",
    "Bin Packing",
    "Facility Location",
  ],
  keyPoints: [
    "Provides guaranteed approximation ratios",
    "Runs in polynomial time",
    "Useful for NP-hard optimization problems",
    "Often uses greedy strategies",
    "Trade-offs between solution quality and runtime",
  ],
};

const branchBoundContent: TopicContent = {
  id: "branch-and-bound",
  title: "Branch and Bound",
  description: "Algorithmic technique for solving optimization problems by systematically exploring the search space.",
  overview: `
    <p>Branch and Bound is a systematic algorithm design paradigm that divides the problem into smaller subproblems, 
    solves each subproblem individually, and combines the solutions to find the optimal solution.</p>
    <p>It is commonly used in combinatorial optimization problems like the Traveling Salesman Problem and the 0/1 Knapsack Problem.</p>
  `,
  characteristics: [
    { title: "Optimization Technique", description: "Branch and Bound aims to find the optimal solution by exploring the search space efficiently." },
    { title: "Pruning", description: "Subproblems that are guaranteed to be worse than the current best solution are eliminated." },
    { title: "Exponential Complexity", description: "Worst-case scenarios can lead to exponential time complexity, but pruning improves efficiency." }
  ],
  implementations: {
    cpp: `// Branch and Bound solution for 0/1 Knapsack
struct Item { 
    int value, weight;
    double ratio;
    Item(int v, int w) : value(v), weight(w), ratio((double)v/w) {}
};

class KnapsackBB {
    vector<Item> items;
    int capacity;
    int maxValue;
    
public:
    KnapsackBB(vector<Item>& i, int c) : items(i), capacity(c), maxValue(0) {
        sort(items.begin(), items.end(), 
             [](Item& a, Item& b) { return a.ratio > b.ratio; });
    }
    
    void solve() {
        knapsack(0, 0, 0);
    }
    
private:
    void knapsack(int index, int value, int weight) {
        if (weight <= capacity && value > maxValue)
            maxValue = value;
        
        if (index >= items.size() || weight >= capacity)
            return;
            
        // Calculate bound
        double bound = value;
        int k = index;
        int w = weight;
        while (k < items.size() && w + items[k].weight <= capacity) {
            bound += items[k].value;
            w += items[k].weight;
            k++;
        }
        if (k < items.size())
            bound += (capacity - w) * items[k].ratio;
            
        if (bound > maxValue) {
            // Include current item
            knapsack(index + 1, value + items[index].value, 
                    weight + items[index].weight);
            // Exclude current item
            knapsack(index + 1, value, weight);
        }
    }
};`,
    java: `class Item {
    int value, weight;
    double ratio;
    Item(int v, int w) {
        value = v;
        weight = w;
        ratio = (double)v/w;
    }
}

class KnapsackBB {
    private Item[] items;
    private int capacity;
    private int maxValue;
    
    public KnapsackBB(Item[] items, int capacity) {
        this.items = items;
        this.capacity = capacity;
        this.maxValue = 0;
        Arrays.sort(items, (a, b) -> Double.compare(b.ratio, a.ratio));
    }
    
    public void solve() {
        knapsack(0, 0, 0);
    }
    
    private void knapsack(int index, int value, int weight) {
        if (weight <= capacity && value > maxValue)
            maxValue = value;
            
        if (index >= items.length || weight >= capacity)
            return;
            
        // Calculate bound
        double bound = value;
        int k = index;
        int w = weight;
        while (k < items.length && w + items[k].weight <= capacity) {
            bound += items[k].value;
            w += items[k].weight;
            k++;
        }
        if (k < items.length())
            bound += (capacity - w) * items[k].ratio;
            
        if (bound > maxValue) {
            // Include current item
            knapsack(index + 1, value + items[index].value,
                    weight + items[index].weight);
            // Exclude current item
            knapsack(index + 1, value, weight);
        }
    }
}`,
    python: `class Item:
    def __init__(self, value, weight):
        self.value = value
        self.weight = weight
        self.ratio = value / weight

class KnapsackBB:
    def __init__(self, items, capacity):
        self.items = sorted(items, key=lambda x: x.ratio, reverse=True)
        self.capacity = capacity
        self.max_value = 0
    
    def solve(self):
        self._knapsack(0, 0, 0)
        return self.max_value
    
    def _knapsack(self, index, value, weight):
        if weight <= self.capacity and value > self.max_value:
            self.max_value = value
        
        if index >= len(self.items) or weight >= self.capacity:
            return
        
        # Calculate bound
        bound = value
        k = index
        w = weight
        while k < len(self.items) and w + self.items[k].weight <= self.capacity:
            bound += self.items[k].value
            w += self.items[k].weight
            k += 1
        if k < len(self.items):
            bound += (self.capacity - w) * self.items[k].ratio
        
        if bound > self.max_value:
            # Include current item
            self._knapsack(index + 1, value + self.items[index].value,
                          weight + self.items[index].weight)
            # Exclude current item
            self._knapsack(index + 1, value, weight)`
  },
  complexity: {
    time: { 
      "Worst Case": "O(2^n)",
      "Best Case": "O(n log n)",
      "Average Case": "O(2^n) but much better in practice due to pruning"
    },
    space: "O(n) for recursion depth"
  },
  applications: [
    "0/1 Knapsack Problem",
    "Traveling Salesman Problem",
    "Job Assignment Problem",
    "Resource Allocation",
    "Production Planning"
  ],
  keyPoints: [
    "Combines branching (splitting problem into subproblems) with bounding (pruning unpromising branches)",
    "More efficient than brute force due to pruning",
    "Uses upper/lower bounds to eliminate subproblems",
    "Particularly useful for optimization problems",
    "Can be implemented with different search strategies (DFS, BFS, Best-First)"
  ],
};

const monteCarloMethodsContent: TopicContent = {
  id: "monte-carlo-methods",
  title: "Monte Carlo Methods",
  description: "Computational algorithms that rely on repeated random sampling to obtain numerical results.",
  overview: `
    <p>Monte Carlo methods are a broad class of computational algorithms that use repeated random sampling to obtain numerical results. 
    The main idea is to use randomness to solve problems that might be deterministic in principle.</p>
    <p>These methods are particularly useful for optimization, numerical integration, and generating draws from probability distributions.</p>
  `,
  characteristics: [
    {
      title: "Random Sampling",
      description: "Uses repeated random sampling to compute results.",
    },
    {
      title: "Probabilistic Approach",
      description: "Results are probabilistic approximations.",
    },
    {
      title: "Convergence",
      description: "Accuracy improves with number of samples.",
    },
    {
      title: "Parallelizable",
      description: "Naturally suited for parallel computation.",
    },
  ],
  implementations: {
    cpp: `// Monte Carlo estimation of Pi
double estimatePi(int numPoints) {
    random_device rd;
    mt19937 gen(rd());
    uniform_real_distribution<> dis(0, 1);
    
    int insideCircle = 0;
    for(int i = 0; i < numPoints; i++) {
        double x = dis(gen);
        double y = dis(gen);
        if(x*x + y*y <= 1) insideCircle++;
    }
    return 4.0 * insideCircle / numPoints;
}`,
    java: `// Monte Carlo integration
class MonteCarloIntegration {
    public static double integrate(Function<Double, Double> f, 
                                 double a, double b, int n) {
        Random rand = new Random();
        double sum = 0;
        for(int i = 0; i < n; i++) {
            double x = a + (b-a) * rand.nextDouble();
            sum += f.apply(x);
        }
        return (b-a) * sum / n;
    }
}`,
    python: `# Monte Carlo simulation for stock price
def monte_carlo_stock_price(S0, mu, sigma, T, N, M):
    dt = T/N
    paths = np.zeros((M, N+1))
    paths[:, 0] = S0
    
    for t in range(1, N+1):
        z = np.random.standard_normal(M)
        paths[:, t] = paths[:, t-1] * np.exp((mu - 0.5 * sigma**2) * dt + 
                                            sigma * np.sqrt(dt) * z)
    return paths`
  },
  complexity: {
    time: {
      "Simulation": "O(n) where n is number of samples",
      "Convergence": "O(1/√n) error rate",
    },
    space: "O(1) to O(n) depending on implementation",
  },
  applications: [
    "Financial risk assessment",
    "Physics simulations",
    "Numerical integration",
    "Optimization problems",
    "Machine learning",
  ],
  keyPoints: [
    "Useful for high-dimensional problems",
    "Results improve with more samples",
    "Highly parallelizable",
    "Good for approximating intractable problems",
    "Wide range of applications across fields",
  ],
};

const geneticAlgorithmsContent: TopicContent = {
  id: "genetic-algorithms",
  title: "Genetic Algorithms",
  description: "Search heuristics that mimic the process of natural selection to solve optimization problems.",
  overview: `
    <p>Genetic Algorithms (GAs) are evolutionary algorithms inspired by natural selection. They work by evolving a population 
    of candidate solutions towards better solutions through processes like selection, crossover, and mutation.</p>
    <p>GAs are particularly useful for optimization problems where traditional methods may be ineffective.</p>
  `,
  characteristics: [
    {
      title: "Population-based",
      description: "Maintains a population of potential solutions.",
    },
    {
      title: "Evolution",
      description: "Solutions evolve through genetic operators.",
    },
    {
      title: "Selection",
      description: "Better solutions have higher chance of survival.",
    },
    {
      title: "Adaptation",
      description: "Population adapts to fitness landscape.",
    },
  ],
  implementations: {
    cpp: `class GeneticAlgorithm {
    vector<string> population;
    int populationSize;
    double mutationRate;
    
public:
    GeneticAlgorithm(int size, double rate) 
        : populationSize(size), mutationRate(rate) {
        initializePopulation();
    }
    
    void evolve() {
        vector<string> newPopulation;
        for(int i = 0; i < populationSize; i++) {
            string parent1 = selection();
            string parent2 = selection();
            string child = crossover(parent1, parent2);
            mutate(child);
            newPopulation.push_back(child);
        }
        population = newPopulation;
    }
    
private:
    void mutate(string& individual) {
        for(char& gene : individual) {
            if(((double) rand() / RAND_MAX) < mutationRate) {
                gene = randomGene();
            }
        }
    }
};`,
    java: `public class GeneticAlgorithm {
    private List<String> population;
    private final int populationSize;
    private final double mutationRate;
    
    public GeneticAlgorithm(int size, double rate) {
        populationSize = size;
        mutationRate = rate;
        initializePopulation();
    }
    
    public void evolve() {
        List<String> newPopulation = new ArrayList<>();
        for(int i = 0; i < populationSize; i++) {
            String parent1 = selection();
            String parent2 = selection();
            String child = crossover(parent1, parent2);
            mutate(child);
            newPopulation.add(child);
        }
        population = newPopulation;
    }
    
    private void mutate(String individual) {
        // Implementation of mutation
    }
}`,
    python: `class GeneticAlgorithm:
    def __init__(self, population_size, mutation_rate):
        self.population_size = population_size
        self.mutation_rate = mutation_rate
        self.population = self.initialize_population()
    
    def evolve(self):
        new_population = []
        for _ in range(self.population_size):
            parent1 = self.selection()
            parent2 = self.selection()
            child = self.crossover(parent1, parent2)
            self.mutate(child)
            new_population.append(child)
        self.population = new_population
    
    def mutate(self, individual):
        return [gene if random.random() > self.mutation_rate 
                else random.choice(self.genes)
                for gene in individual]`
  },
  complexity: {
    time: {
      "Generation": "O(population_size)",
      "Evolution": "O(generations * population_size)",
    },
    space: "O(population_size)",
  },
  applications: [
    "Function optimization",
    "Circuit design",
    "Schedule optimization",
    "Machine learning",
    "Route planning",
  ],
  keyPoints: [
    "Effective for complex optimization problems",
    "No guarantee of finding global optimum",
    "Performance depends on parameter tuning",
    "Highly parallelizable",
    "Good for large search spaces",
  ],
};

const parallelAlgorithmsContent: TopicContent = {
  id: "parallel-algorithms",
  title: "Parallel Algorithms",
  description: "Algorithms designed to be executed simultaneously on multiple processors.",
  overview: `
    <p>Parallel algorithms are designed to solve computational problems by dividing them into smaller subproblems 
    that can be processed concurrently on multiple processors or cores.</p>
    <p>They aim to reduce execution time by utilizing multiple processing units simultaneously.</p>
  `,
  characteristics: [
    {
      title: "Concurrency",
      description: "Multiple operations executed simultaneously.",
    },
    {
      title: "Scalability",
      description: "Performance scales with number of processors.",
    },
    {
      title: "Communication",
      description: "Requires coordination between processors.",
    },
    {
      title: "Load Balancing",
      description: "Work must be distributed evenly.",
    },
  ],
  implementations: {
    cpp: `// Parallel merge sort using OpenMP
void parallelMergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        #pragma omp parallel sections
        {
            #pragma omp section
            {
                parallelMergeSort(arr, left, mid);
            }
            #pragma omp section
            {
                parallelMergeSort(arr, mid + 1, right);
            }
        }
        merge(arr, left, mid, right);
    }
}`,
    java: `// Parallel array sum using Fork/Join framework
class ParallelSum extends RecursiveTask<Long> {
    private final long[] array;
    private final int start;
    private final int end;
    private static final int THRESHOLD = 1000;
    
    ParallelSum(long[] array, int start, int end) {
        this.array = array;
        this.start = start;
        this.end = end;
    }
    
    @Override
    protected Long compute() {
        if (end - start <= THRESHOLD) {
            long sum = 0;
            for (int i = start; i < end; i++)
                sum += array[i];
            return sum;
        }
        
        int mid = (start + end) >>> 1;
        ParallelSum left = new ParallelSum(array, start, mid);
        ParallelSum right = new ParallelSum(array, mid, end);
        right.fork();
        return left.compute() + right.join();
    }
}`,
    python: `# Parallel processing using multiprocessing
from multiprocessing import Pool

def parallel_map(func, data, num_processes=4):
    with Pool(processes=num_processes) as pool:
        return pool.map(func, data)

def process_chunk(chunk):
    return [x * x for x in chunk]

# Example usage
if __name__ == '__main__':
    data = list(range(1000000))
    result = parallel_map(process_chunk, 
                        [data[i::4] for i in range(4)])`
  },
  complexity: {
    time: {
      "Ideal": "O(sequential_time / num_processors)",
      "Practical": "O(sequential_time / num_processors + communication_overhead)",
    },
    space: "O(n) across all processors",
  },
  applications: [
    "Scientific computing",
    "Big data processing",
    "Image processing",
    "Simulation",
    "Machine learning",
  ],
  keyPoints: [
    "Can significantly reduce execution time",
    "Requires careful handling of synchronization",
    "Communication overhead can limit speedup",
    "Not all algorithms can be effectively parallelized",
    "Important for modern computing architectures",
  ],
};

const stringMatchingContent: TopicContent = {
  id: "string-matching",
  title: "Advanced String Matching",
  description: "Sophisticated algorithms for efficient text searching and pattern recognition.",
  overview: `
    <p>Advanced string matching algorithms provide efficient ways to find patterns within text. 
    The most notable algorithms include KMP (Knuth-Morris-Pratt), Rabin-Karp, and Boyer-Moore, 
    each with its own advantages for specific use cases.</p>
    <p>These algorithms improve upon naive string matching by using preprocessing and pattern analysis 
    to reduce unnecessary comparisons.</p>
  `,
  characteristics: [
    {
      title: "Pattern Preprocessing",
      description: "Analyzes pattern to optimize search process.",
    },
    {
      title: "Efficient Skip Mechanisms",
      description: "Skips unnecessary comparisons based on pattern properties.",
    },
    {
      title: "Multiple Algorithms",
      description: "Different approaches for different scenarios.",
    },
    {
      title: "Linear Time Complexity",
      description: "Most advanced algorithms achieve O(n+m) complexity.",
    },
  ],
  implementations: {
    cpp: `// KMP Algorithm Implementation
vector<int> computeLPS(string pattern) {
    int m = pattern.length();
    vector<int> lps(m, 0);
    int len = 0;
    int i = 1;
    
    while (i < m) {
        if (pattern[i] == pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len != 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

vector<int> KMPSearch(string text, string pattern) {
    vector<int> matches;
    vector<int> lps = computeLPS(pattern);
    int i = 0, j = 0;
    
    while (i < text.length()) {
        if (pattern[j] == text[i]) {
            i++;
            j++;
        }
        if (j == pattern.length()) {
            matches.push_back(i - j);
            j = lps[j - 1];
        } else if (i < text.length() && pattern[j] != text[i]) {
            if (j != 0)
                j = lps[j - 1];
            else
                i++;
        }
    }
    return matches;
}`,
    java: `// Rabin-Karp Algorithm Implementation
class RabinKarp {
    private final int prime = 101;
    private final int d = 256;
    
    public List<Integer> search(String text, String pattern) {
        List<Integer> matches = new ArrayList<>();
        int m = pattern.length();
        int n = text.length();
        int p = 0;    // hash value for pattern
        int t = 0;    // hash value for text
        int h = 1;
        
        // Calculate h = pow(d, M-1) % q
        for (int i = 0; i < m-1; i++)
            h = (h * d) % prime;
            
        // Calculate initial hash values
        for (int i = 0; i < m; i++) {
            p = (d * p + pattern.charAt(i)) % prime;
            t = (d * t + text.charAt(i)) % prime;
        }
        
        // Find pattern matches
        for (int i = 0; i <= n - m; i++) {
            if (p == t) {
                boolean match = true;
                for (int j = 0; j < m; j++) {
                    if (text.charAt(i + j) != pattern.charAt(j)) {
                        match = false;
                        break;
                    }
                }
                if (match)
                    matches.add(i);
            }
            
            if (i < n - m) {
                t = (d * (t - text.charAt(i) * h) + text.charAt(i + m)) % prime;
                if (t < 0)
                    t += prime;
            }
        }
        return matches;
    }
}`,
    python: `# Boyer-Moore Algorithm Implementation
def build_bad_match_table(pattern):
    bad_match = {}
    length = len(pattern)
    for i in range(length - 1):
        bad_match[pattern[i]] = length - 1 - i
    return bad_match

def boyer_moore_search(text, pattern):
    matches = []
    bad_match = build_bad_match_table(pattern)
    
    shift = 0
    pattern_length = len(pattern)
    text_length = len(text)
    
    while shift <= text_length - pattern_length:
        mismatch = False
        for i in range(pattern_length - 1, -1, -1):
            if pattern[i] != text[shift + i]:
                mismatch = True
                break
        
        if not mismatch:
            matches.append(shift)
            shift += 1
        else:
            if text[shift + i] in bad_match:
                shift += bad_match[text[shift + i]]
            else:
                shift += pattern_length
    
    return matches`
  },
  complexity: {
    time: {
      "KMP": "O(n + m)",
      "Rabin-Karp": "O(n + m)",
      "Boyer-Moore": "O(nm) worst case, O(n/m) best case",
    },
    space: "O(m) for pattern preprocessing",
  },
  applications: [
    "Text editors and word processors",
    "DNA sequence analysis",
    "Plagiarism detection",
    "Network security (pattern matching in packets)",
    "Search engines",
  ],
  keyPoints: [
    "Different algorithms suit different scenarios",
    "Pattern preprocessing improves efficiency",
    "Linear time complexity in most cases",
    "Important in bioinformatics and text processing",
    "Foundation for more complex string algorithms",
  ],
};

const compressionAlgorithmsContent: TopicContent = {
  id: "compression-algorithms",
  title: "Compression Algorithms",
  description: "Techniques for reducing data size while preserving information.",
  overview: `
    <p>Compression algorithms reduce the size of data by encoding information using fewer bits than the original representation. 
    These algorithms can be either lossless (preserving exact original data) or lossy (approximating original data with acceptable loss).</p>
    <p>Common techniques include Huffman coding, Run-length encoding, and LZ77/LZ78 variants.</p>
  `,
  characteristics: [
    {
      title: "Data Reduction",
      description: "Reduces storage space and transmission bandwidth requirements.",
    },
    {
      title: "Lossless vs Lossy",
      description: "Trade-off between compression ratio and data preservation.",
    },
    {
      title: "Encoding/Decoding",
      description: "Requires both compression and decompression algorithms.",
    },
    {
      title: "Pattern Recognition",
      description: "Identifies and exploits patterns in data.",
    },
  ],
  implementations: {
    cpp: `// Huffman Coding Implementation
struct Node {
    char data;
    unsigned freq;
    Node *left, *right;
    Node(char data, unsigned freq) : data(data), freq(freq), left(nullptr), right(nullptr) {}
};

struct compare {
    bool operator()(Node* l, Node* r) {
        return l->freq > r->freq;
    }
};

class HuffmanCoding {
    void encode(Node* root, string str, unordered_map<char, string>& huffmanCode) {
        if (root == nullptr) return;
        if (!root->left && !root->right) {
            huffmanCode[root->data] = str;
        }
        encode(root->left, str + "0", huffmanCode);
        encode(root->right, str + "1", huffmanCode);
    }
    
public:
    string compress(string text) {
        unordered_map<char, unsigned> freq;
        for (char c : text) freq[c]++;
        
        priority_queue<Node*, vector<Node*>, compare> pq;
        for (auto pair : freq) {
            pq.push(new Node(pair.first, pair.second));
        }
        
        while (pq.size() != 1) {
            Node *left = pq.top(); pq.pop();
            Node *right = pq.top(); pq.pop();
            Node *top = new Node('$', left->freq + right->freq);
            top->left = left;
            top->right = right;
            pq.push(top);
        }
        
        unordered_map<char, string> huffmanCode;
        encode(pq.top(), "", huffmanCode);
        
        string compressed = "";
        for (char c : text) {
            compressed += huffmanCode[c];
        }
        return compressed;
    }
};`,
    java: `// Run-length Encoding Implementation
class RunLengthEncoding {
    public static String encode(String text) {
        if (text == null || text.isEmpty()) return "";
        
        StringBuilder compressed = new StringBuilder();
        char current = text.charAt(0);
        int count = 1;
        
        for (int i = 1; i < text.length(); i++) {
            if (text.charAt(i) == current) {
                count++;
            } else {
                compressed.append(count).append(current);
                current = text.charAt(i);
                count = 1;
            }
        }
        compressed.append(count).append(current);
        return compressed.toString();
    }
    
    public static String decode(String compressed) {
        StringBuilder text = new StringBuilder();
        for (int i = 0; i < compressed.length(); i += 2) {
            int count = Character.getNumericValue(compressed.charAt(i));
            char c = compressed.charAt(i + 1);
            for (int j = 0; j < count; j++) {
                text.append(c);
            }
        }
        return text.toString();
    }
}`,
    python: `# LZ77 Implementation
class LZ77:
    def __init__(self, window_size=4096, lookahead_size=16):
        self.window_size = window_size
        self.lookahead_size = lookahead_size
    
    def find_longest_match(self, data, current_pos):
        end_pos = min(current_pos + self.lookahead_size, len(data))
        if current_pos >= end_pos:
            return 0, 0
        
        longest_match = 0
        best_offset = 0
        
        # Search in the window
        search_start = max(0, current_pos - self.window_size)
        for i in range(search_start, current_pos):
            match_length = 0
            while (current_pos + match_length < end_pos and 
                   data[i + match_length] == data[current_pos + match_length]):
                match_length += 1
            
            if match_length > longest_match:
                longest_match = match_length
                best_offset = current_pos - i
        
        return best_offset, longest_match
    
    def compress(self, data):
        compressed = []
        current_pos = 0
        
        while current_pos < len(data):
            offset, length = self.find_longest_match(data, current_pos)
            if length == 0:
                compressed.append((0, 0, data[current_pos]))
                current_pos += 1
            else:
                compressed.append((offset, length, data[current_pos + length]))
                current_pos += length + 1
        
        return compressed`
  },
  complexity: {
    time: {
      "Huffman": "O(n log n)",
      "Run-length": "O(n)",
      "LZ77": "O(n × window_size)",
    },
    space: "Varies by algorithm and implementation",
  },
  applications: [
    "File compression",
    "Image and video compression",
    "Network data transmission",
    "Database storage optimization",
    "Backup systems",
  ],
  keyPoints: [
    "Balance between compression ratio and speed",
    "Different algorithms suit different data types",
    "Lossless compression preserves exact data",
    "Lossy compression trades accuracy for size",
    "Critical for efficient data storage and transmission",
  ],
};

const machineLearningAlgorithmsContent: TopicContent = {
  id: "machine-learning-algorithms",
  title: "Basic Machine Learning Algorithms",
  description: "Foundational algorithms for pattern recognition and predictive modeling.",
  overview: `
    <p>Basic machine learning algorithms form the foundation of artificial intelligence and data science. 
    These algorithms learn patterns from data to make predictions or decisions without being explicitly programmed.</p>
    <p>Key categories include supervised learning (classification, regression) and unsupervised learning (clustering, dimensionality reduction).</p>
  `,
  characteristics: [
    {
      title: "Data-Driven",
      description: "Learns from examples rather than explicit programming.",
    },
    {
      title: "Generalization",
      description: "Ability to handle new, unseen data.",
    },
    {
      title: "Iterative Learning",
      description: "Improves performance through multiple iterations.",
    },
    {
      title: "Parameter Tuning",
      description: "Requires optimization of model parameters.",
    },
  ],
  implementations: {
    cpp: `// K-Nearest Neighbors Implementation
class KNN {
    vector<vector<double>> X_train;
    vector<int> y_train;
    int k;
    
public:
    KNN(int neighbors) : k(neighbors) {}
    
    void fit(const vector<vector<double>>& X, const vector<int>& y) {
        X_train = X;
        y_train = y;
    }
    
    int predict(const vector<double>& x) {
        vector<pair<double, int>> distances;
        
        // Calculate distances
        for(size_t i = 0; i < X_train.size(); i++) {
            double dist = 0;
            for(size_t j = 0; j < x.size(); j++) {
                dist += pow(X_train[i][j] - x[j], 2);
            }
            distances.push_back({sqrt(dist), y_train[i]});
        }
        
        // Sort by distance
        sort(distances.begin(), distances.end());
        
        // Find most common class among k neighbors
        map<int, int> class_counts;
        for(int i = 0; i < k; i++) {
            class_counts[distances[i].second]++;
        }
        
        int max_count = 0;
        int predicted_class = -1;
        for(const auto& pair : class_counts) {
            if(pair.second > max_count) {
                max_count = pair.second;
                predicted_class = pair.first;
            }
        }
        
        return predicted_class;
    }
};`,
    java: `// Linear Regression Implementation
class LinearRegression {
    private double[] coefficients;
    private double intercept;
    
    public void fit(double[][] X, double[] y, double learningRate, int epochs) {
        int n = X.length;
        int features = X[0].length;
        coefficients = new double[features];
        intercept = 0;
        
        for(int epoch = 0; epoch < epochs; epoch++) {
            double[] predictions = predict(X);
            
            // Update intercept
            double interceptGrad = 0;
            for(int i = 0; i < n; i++) {
                interceptGrad += (predictions[i] - y[i]);
            }
            intercept -= (learningRate * interceptGrad) / n;
            
            // Update coefficients
            for(int j = 0; j < features; j++) {
                double grad = 0;
                for(int i = 0; i < n; i++) {
                    grad += (predictions[i] - y[i]) * X[i][j];
                }
                coefficients[j] -= (learningRate * grad) / n;
            }
        }
    }
    
    public double[] predict(double[][] X) {
        double[] predictions = new double[X.length];
        for(int i = 0; i < X.length; i++) {
            predictions[i] = intercept;
            for(int j = 0; j < X[i].length; j++) {
                predictions[i] += coefficients[j] * X[i][j];
            }
        }
        return predictions;
    }
}`,
    python: `# K-Means Clustering Implementation

class KMeans:
    def __init__(self, n_clusters=8, max_iters=300):
        self.n_clusters = n_clusters
        self.max_iters = max_iters
        
    def fit(self, X):
        # Initialize centroids randomly
        n_samples, n_features = X.shape
        idx = np.random.permutation(n_samples)[:self.n_clusters]
        self.centroids = X[idx]
        
        for _ in range(self.max_iters):
            # Assign points to nearest centroid
            distances = np.sqrt(((X - self.centroids[:, np.newaxis])**2).sum(axis=2))
            labels = np.argmin(distances, axis=0)
            
            # Update centroids
            new_centroids = np.array([X[labels == k].mean(axis=0) 
                                    for k in range(self.n_clusters)])
            
            # Check for convergence
            if np.all(new_centroids == self.centroids):
                break
                
            self.centroids = new_centroids
        
        return labels
    
    def predict(self, X):
        distances = np.sqrt(((X - self.centroids[:, np.newaxis])**2).sum(axis=2))
        return np.argmin(distances, axis=0)`
  },
  complexity: {
    time: {
      "KNN": "O(n × d) for prediction",
      "Linear Regression": "O(n × d × epochs)",
      "K-Means": "O(n × k × d × iterations)",
    },
    space: "Varies by algorithm and dataset size",
  },
  applications: [
    "Pattern recognition",
    "Predictive analytics",
    "Image classification",
    "Recommendation systems",
    "Anomaly detection",
  ],
  keyPoints: [
    "Requires quality training data",
    "Model selection depends on problem type",
    "Need to handle overfitting/underfitting",
    "Important to validate model performance",
    "Consider computational resources required",
  ],
};


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

  if (type === "data-structures" && topicId === "doubly-linked-lists") {
    return doublyLinkedListContent
  }

  if (type === "data-structures" && topicId === "stacks") {
    return stackContent
  }

  if (type === "data-structures" && topicId === "queues") {
    return queueContent
  }

  if (type === "data-structures" && topicId === "priority-queues") {
    return priorityQueueContent
  }

  if (type === "data-structures" && topicId === "binary-search-trees") {
    return binarySearchTreeContent
  }

  if (type === "data-structures" && topicId === "avl-trees") {
    return avlTreeContent
  }

  if (type === "data-structures" && topicId === "red-black-trees") {
    return redBlackTreeContent
  }

  if (type === "data-structures" && topicId === "graphs") {
    return graphsContent
  }

  if (type === "data-structures" && topicId === "hash-tables") {
    return hashTablesContent
  }

  if (type === "data-structures" && topicId === "heaps") {
    return heapsContent
  }

  if (type === "sorting" && topicId === "bubble-sort") {
    return bubbleSortContent
  }

  if (type === "sorting" && topicId === "insertion-sort") {
    return insertionSortContent
  }

  if (type === "sorting" && topicId === "selection-sort") {
    return selectionSortContent
  }

  if (type === "sorting" && topicId === "merge-sort") {
    return mergeSortContent
  }

  if (type === "sorting" && topicId === "quick-sort") {
    return quickSortContent
  }

  if (type === "sorting" && topicId === "heap-sort") {
    return heapSortContent
  }

  if (type === "sorting" && topicId === "radix-sort") {
    return radixSortContent
  }

  if (type === "sorting" && topicId === "counting-sort") {
    return countingSortContent
  }

  if (type === "sorting" && topicId === "shell-sort") {
    return shellSortContent
  }

  if (type === "searching" && topicId === "linear-search") {
    return linearSearchContent
  }

  if (type === "searching" && topicId === "binary-search") {
    return binarySearchContent
  }

  if (type === "searching" && topicId === "interpolation-search") {
    return interpolationSearchContent
  }

  if (type === "searching" && topicId === "depth-first-search") {
    return depthFirstSearchContent
  }

  if (type === "searching" && topicId === "breadth-first-search") {
    return breadthFirstSearchContent
  }

  if (type === "searching" && topicId === "jump-search") {
    return jumpSearchContent
  }

  if (type === "graph-algorithms" && topicId === "dijkstras-algorithm") {
    return dijkstrasContent
  }

  if (type === "graph-algorithms" && topicId === "bellman-ford") {
    return bellmanFordContent
  }

  if (type === "graph-algorithms" && topicId === "kruskal-algorithm") {
    return kruskalContent
  }

  if (type === "graph-algorithms" && topicId === "prim-algorithm") {
    return primContent
  }

  if (type === "graph-algorithms" && topicId === "topological-sort") {
    return topologicalSortContent
  }

  if (type === "dynamic-programming" && topicId === "fibonacci-dp") {
    return fibonacciDPContent
  }

  if (type === "dynamic-programming" && topicId === "knapsack-problem") {
    return knapsackContent
  }

  if (type === "dynamic-programming" && topicId === "longest-common-subsequence") {
    return lcsContent
  }

  if (type === "dynamic-programming" && topicId === "matrix-chain-multiplication") {
    return matrixChainContent
  }

  if (type === "advanced-topics" && topicId === "greedy-algorithms") {
    return greedyAlgorithmsContent
  }

  if (type === "advanced-topics" && topicId === "backtracking") {
    return backtrackingContent
  }

  if (type === "advanced-topics" && topicId === "divide-and-conquer") {
    return divideAndConquerContent
  }

  if (type === "advanced-topics" && topicId === "randomized-algorithms") {
    return randomizedAlgorithmsContent
  }

  if (type === "advanced-topics" && topicId === "approximation-algorithms") {
    return approximationAlgorithmsContent
  }

  if (type === "advanced-topics" && topicId === "branch-and-bound") {
    return branchBoundContent
  }

  if (type === "advanced-topics" && topicId === "monte-carlo-methods") {
    return monteCarloMethodsContent
  }

  if (type === "advanced-topics" && topicId === "genetic-algorithms") {
    return geneticAlgorithmsContent
  }

  if (type === "advanced-topics" && topicId === "parallel-algorithms") {
    return parallelAlgorithmsContent
  }

  if (type === "advanced-topics" && topicId === "string-matching") {
    return stringMatchingContent
  }

  if (type === "advanced-topics" && topicId === "compression-algorithms") {
    return compressionAlgorithmsContent
  }

  if (type === "advanced-topics" && topicId === "machine-learning-algorithms") {
    return machineLearningAlgorithmsContent
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