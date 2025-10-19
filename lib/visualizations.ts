import type { Visualization } from "./types"

// Sample visualization for array operations
const arrayVisualization: Visualization = {
  totalSteps: 5,
  drawStep: (ctx, step, width, height) => {
    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Set up dimensions
    const cellSize = 60
    const startX = (width - 5 * cellSize) / 2
    const startY = height / 2 - cellSize / 2

    // Draw array cells
    for (let i = 0; i < 5; i++) {
      // Cell background
      ctx.fillStyle = step === i ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)

      // Cell border
      ctx.strokeStyle = "#9333ea"
      ctx.lineWidth = 2
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)

      // Cell value
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(String(i + 1), startX + i * cellSize + cellSize / 2, startY + cellSize / 2)

      // Index label
      ctx.fillStyle = "#6b7280"
      ctx.font = "16px Arial"
      ctx.fillText(String(i), startX + i * cellSize + cellSize / 2, startY + cellSize + 20)
    }

    // Draw current operation
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Accessing array elements", width / 2, startY - 40)

    // Draw arrow pointing to current element
    if (step < 5) {
      ctx.beginPath()
      ctx.moveTo(startX + step * cellSize + cellSize / 2, startY - 15)
      ctx.lineTo(startX + step * cellSize + cellSize / 2 - 10, startY - 25)
      ctx.lineTo(startX + step * cellSize + cellSize / 2 + 10, startY - 25)
      ctx.closePath()
      ctx.fillStyle = "#9333ea"
      ctx.fill()
    }
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0:
        return "Accessing the first element (index 0) of the array. This operation takes O(1) time."
      case 1:
        return "Accessing the second element (index 1) of the array. Array elements are stored in contiguous memory locations."
      case 2:
        return "Accessing the third element (index 2) of the array. We can directly jump to this location using the index."
      case 3:
        return "Accessing the fourth element (index 3) of the array. Random access is a key advantage of arrays."
      case 4:
        return "Accessing the fifth element (index 4) of the array. Notice how each access takes the same amount of time regardless of position."
      default:
        return ""
    }
  },
}

// Sample visualization for linked list operations
const linkedListVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 60
    const startX = width / 4
    const startY = height / 2
    
    for (let i = 0; i < 4; i++) {
      // Node circle
      ctx.beginPath()
      ctx.fillStyle = step === i ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(startX + i * nodeSize * 2, startY, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()

      // Value
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(i + 1), startX + i * nodeSize * 2, startY)

      // Arrow to next node
      if (i < 3) {
        ctx.beginPath()
        ctx.moveTo(startX + i * nodeSize * 2 + nodeSize/2, startY)
        ctx.lineTo(startX + (i + 1) * nodeSize * 2 - nodeSize/2, startY)
        ctx.strokeStyle = "#9333ea"
        ctx.stroke()
        
        // Arrow head
        ctx.beginPath()
        ctx.moveTo(startX + (i + 1) * nodeSize * 2 - nodeSize/2, startY)
        ctx.lineTo(startX + (i + 1) * nodeSize * 2 - nodeSize/2 - 10, startY - 5)
        ctx.lineTo(startX + (i + 1) * nodeSize * 2 - nodeSize/2 - 10, startY + 5)
        ctx.fillStyle = "#9333ea"
        ctx.fill()
      }
    }

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Traversing linked list", width/2, startY - 80)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0:
        return "Starting at the head node. Access time is O(1)."
      case 1:
        return "Moving to next node. We must traverse through previous nodes."
      case 2:
        return "Continuing traversal. Access time increases linearly with position."
      case 3:
        return "Reaching the last node. Total traversal time is O(n)."
      default:
        return ""
    }
  }
}

// Sample visualization for doubly linked list operations
const doublyLinkedListVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 60
    const startX = width / 4
    const startY = height / 2
    
    for (let i = 0; i < 4; i++) {
      ctx.beginPath()
      ctx.fillStyle = step === i ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(startX + i * nodeSize * 2, startY, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()

      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(i + 1), startX + i * nodeSize * 2, startY)

      if (i < 3) {
        // Forward arrows
        ctx.beginPath()
        ctx.moveTo(startX + i * nodeSize * 2 + nodeSize/2, startY - 10)
        ctx.lineTo(startX + (i + 1) * nodeSize * 2 - nodeSize/2, startY - 10)
        ctx.strokeStyle = "#9333ea"
        ctx.stroke()
        
        // Backward arrows
        ctx.beginPath()
        ctx.moveTo(startX + (i + 1) * nodeSize * 2 - nodeSize/2, startY + 10)
        ctx.lineTo(startX + i * nodeSize * 2 + nodeSize/2, startY + 10)
        ctx.strokeStyle = "#9333ea"
        ctx.stroke()
      }
    }

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Doubly Linked List Operations", width/2, startY - 80)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Accessing head node. Can move forward or backward."
      case 1: return "Moving to next/previous node. Both directions available."
      case 2: return "Traversing in either direction takes O(n) time."
      case 3: return "Reached end node. Can traverse back using previous links."
      default: return ""
    }
  }
}

// Sample visualization for stack operations
const stackVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 2 - cellSize / 2
    const startY = height - height / 4

    // Draw stack elements from bottom to top
    for (let i = 0; i < 4 - step; i++) {
      ctx.fillStyle = i === (3 - step) ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX, startY - i * cellSize, cellSize, cellSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX, startY - i * cellSize, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(4 - i), startX + cellSize/2, startY - i * cellSize + cellSize/2)
    }

    // Labels
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Stack Operations (Pop)", width/2, startY - 4 * cellSize - 20)
    ctx.fillText("Top", startX - 40, startY - (3 - step) * cellSize + cellSize/2)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Initial stack state with all elements."
      case 1: return "Pop operation: removing top element."
      case 2: return "Stack after second pop operation."
      case 3: return "Stack after multiple pop operations."
      default: return ""
    }
  }
}

// Sample visualization for queue operations
const queueVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 2 - cellSize / 2

    // Draw queue container
    ctx.strokeStyle = "#9333ea"
    ctx.strokeRect(startX, startY, cellSize * 4, cellSize)

    // Draw elements
    for (let i = 0; i < 4 - step; i++) {
      ctx.fillStyle = i === 0 ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(i + 1), startX + i * cellSize + cellSize/2, startY + cellSize/2)
    }

    // Labels
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Queue Operations (Dequeue)", width/2, startY - 40)
    ctx.fillText("Front", startX, startY + cellSize + 30)
    ctx.fillText("Rear", startX + (3 - step) * cellSize, startY + cellSize + 30)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Initial queue state with all elements."
      case 1: return "Dequeue operation: removing front element."
      case 2: return "Elements shift forward after dequeue."
      case 3: return "Queue after multiple dequeue operations."
      default: return ""
    }
  }
}

// Sample visualization for priority queue (max heap) operations
const priorityQueueVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 50
    const startX = width / 2
    const startY = height / 4
    const levels = 2

    // Helper to draw a node
    const drawNode = (x: number, y: number, value: number, isHighlighted: boolean) => {
      ctx.beginPath()
      ctx.fillStyle = isHighlighted ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(x, y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), x, y + 5)
    }

    // Draw edges first
    ctx.strokeStyle = "#9333ea"
    if (step < 4) {
      // Left edges
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(startX - nodeSize * 1.5, startY + nodeSize * 2)
      ctx.stroke()
      
      // Right edges
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(startX + nodeSize * 1.5, startY + nodeSize * 2)
      ctx.stroke()
    }

    // Draw nodes based on step
    const values = step === 0 ? [8,5,6] :
                  step === 1 ? [6,5,4] :
                  step === 2 ? [5,3,4] :
                  [3,2,1]

    if (values.length > 0) {
      drawNode(startX, startY, values[0], step < 4)
      drawNode(startX - nodeSize * 1.5, startY + nodeSize * 2, values[1], false)
      drawNode(startX + nodeSize * 1.5, startY + nodeSize * 2, values[2], false)
    }

    // Title
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Priority Queue (Max Heap) Operations", width/2, startY - 60)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Initial max heap state."
      case 1: return "After removing max element (8)."
      case 2: return "Heap after second removal (6)."
      case 3: return "Final state after multiple removals."
      default: return ""
    }
  }
}

// Sample visualization for binary tree operations
const binaryTreeVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 50
    const startX = width / 2
    const startY = height / 4

    const drawNode = (x: number, y: number, value: number, isHighlighted: boolean) => {
      ctx.beginPath()
      ctx.fillStyle = isHighlighted ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(x, y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), x, y + 5)
    }

    // Draw edges
    ctx.strokeStyle = "#9333ea"
    const edges = [
      [startX, startY, startX - nodeSize * 1.5, startY + nodeSize * 2],
      [startX, startY, startX + nodeSize * 1.5, startY + nodeSize * 2],
      [startX - nodeSize * 1.5, startY + nodeSize * 2, startX - nodeSize * 2.5, startY + nodeSize * 4],
      [startX - nodeSize * 1.5, startY + nodeSize * 2, startX - nodeSize * 0.5, startY + nodeSize * 4]
    ]

    edges.forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    })

    // Draw nodes with traversal highlight
    const nodes = [
      [startX, startY, 1],
      [startX - nodeSize * 1.5, startY + nodeSize * 2, 2],
      [startX + nodeSize * 1.5, startY + nodeSize * 2, 3],
      [startX - nodeSize * 2.5, startY + nodeSize * 4, 4],
      [startX - nodeSize * 0.5, startY + nodeSize * 4, 5]
    ]

    nodes.forEach(([x, y, value], index) => {
      drawNode(x, y, value, index === step)
    })

    // Title
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Binary Tree Traversal", width/2, startY - 60)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Starting at root node (pre-order traversal)."
      case 1: return "Visiting left child (depth-first search)."
      case 2: return "Moving to right subtree."
      case 3: return "Traversing leaf nodes."
      default: return ""
    }
  }
}

// Sample visualization for binary search tree operations
const binarySearchTreeVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 50
    const startX = width / 2
    const startY = height / 4

    // Helper to draw a node
    const drawNode = (x: number, y: number, value: number, isHighlighted: boolean) => {
      ctx.beginPath()
      ctx.fillStyle = isHighlighted ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(x, y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), x, y + 5)
    }

    // Draw edges
    ctx.strokeStyle = "#9333ea"
    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.lineTo(startX - nodeSize * 1.5, startY + nodeSize * 2)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.lineTo(startX + nodeSize * 1.5, startY + nodeSize * 2)
    ctx.stroke()

    // Draw nodes with search path highlight
    drawNode(startX, startY, 5, step === 0)
    drawNode(startX - nodeSize * 1.5, startY + nodeSize * 2, 3, step === 1)
    drawNode(startX + nodeSize * 1.5, startY + nodeSize * 2, 7, step === 2 || step === 3)

    // Title
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Binary Search Tree Search Operation", width/2, startY - 60)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Starting search at root node (5)."
      case 1: return "Search value < 5, moving to left subtree."
      case 2: return "Search value > 5, moving to right subtree."
      case 3: return "Found target value in right subtree."
      default: return ""
    }
  }
}

// Sample visualization for AVL Tree operations
const avlTreeVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 50
    const startX = width / 2
    const startY = height / 4

    const drawNode = (x: number, y: number, value: number, balance: number, isHighlighted: boolean) => {
      ctx.beginPath()
      ctx.fillStyle = isHighlighted ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(x, y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), x, y)
      ctx.font = "14px Arial"
      ctx.fillText(`(${balance})`, x, y + 20)
    }

    // Draw balanced tree structure based on step
    if (step < 4) {
      // Draw edges
      ctx.strokeStyle = "#9333ea"
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(startX - nodeSize * 1.5, startY + nodeSize * 2)
      ctx.lineTo(startX + nodeSize * 1.5, startY + nodeSize * 2)
      ctx.stroke()

      // Draw nodes with balance factors
      drawNode(startX, startY, 4, 0, step === 0)
      drawNode(startX - nodeSize * 1.5, startY + nodeSize * 2, 2, step === 1 ? 1 : 0, step === 1)
      drawNode(startX + nodeSize * 1.5, startY + nodeSize * 2, 6, 0, step === 2 || step === 3)
    }

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("AVL Tree Balancing", width/2, startY - 60)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Initial balanced AVL tree state."
      case 1: return "Detecting imbalance after insertion."
      case 2: return "Performing rotation to restore balance."
      case 3: return "Tree is balanced again."
      default: return ""
    }
  }
}

// Sample visualization for Red-Black Tree operations
const redBlackTreeVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 50
    const startX = width / 2
    const startY = height / 4

    const drawNode = (x: number, y: number, value: number, isRed: boolean, isHighlighted: boolean) => {
      ctx.beginPath()
      ctx.fillStyle = isRed ? "#ef4444" : "#000000"
      ctx.arc(x, y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = isHighlighted ? "#d8b4fe" : "#9333ea"
      ctx.lineWidth = isHighlighted ? 3 : 1
      ctx.stroke()
      
      ctx.fillStyle = "#ffffff"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), x, y + 5)
    }

    // Draw edges and nodes with red-black coloring
    if (step < 4) {
      ctx.strokeStyle = "#9333ea"
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(startX - nodeSize * 1.5, startY + nodeSize * 2)
      ctx.lineTo(startX + nodeSize * 1.5, startY + nodeSize * 2)
      ctx.stroke()

      drawNode(startX, startY, 5, false, step === 0)
      drawNode(startX - nodeSize * 1.5, startY + nodeSize * 2, 3, step < 2, step === 1)
      drawNode(startX + nodeSize * 1.5, startY + nodeSize * 2, 7, step < 3, step === 2 || step === 3)
    }

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Red-Black Tree Operations", width/2, startY - 60)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Root is always black."
      case 1: return "Red nodes must have black parent."
      case 2: return "Performing color adjustment."
      case 3: return "Tree satisfies red-black properties."
      default: return ""
    }
  }
}

// Sample visualization for Graph operations
const graphVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 40
    const positions = [
      [width/2, height/4],
      [width/3, height/2],
      [2*width/3, height/2],
      [width/2, 3*height/4]
    ]

    // Draw edges
    ctx.strokeStyle = "#9333ea"
    ctx.beginPath()
    positions.forEach((pos, i) => {
      positions.forEach((pos2, j) => {
        if (i < j) {
          ctx.moveTo(pos[0], pos[1])
          ctx.lineTo(pos2[0], pos2[1])
        }
      })
    })
    ctx.stroke()

    // Draw nodes
    positions.forEach((pos, i) => {
      ctx.beginPath()
      ctx.fillStyle = i === step ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(pos[0], pos[1], nodeSize, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(i + 1), pos[0], pos[1] + 5)
    })

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Graph Traversal", width/2, height/8)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Starting graph traversal from node 1."
      case 1: return "Visiting connected nodes (BFS/DFS)."
      case 2: return "Exploring remaining vertices."
      case 3: return "Completing graph traversal."
      default: return ""
    }
  }
}

// Sample visualization for hash table operations
const hashTableVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const bucketSize = 60
    const startX = width / 4
    const startY = height / 4
    const buckets = 5

    // Draw hash table buckets
    for (let i = 0; i < buckets; i++) {
      ctx.fillStyle = i === step ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX, startY + i * bucketSize, bucketSize * 2, bucketSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX, startY + i * bucketSize, bucketSize * 2, bucketSize)
      
      // Add bucket index
      ctx.fillStyle = "#6b7280"
      ctx.font = "16px Arial"
      ctx.textAlign = "right"
      ctx.fillText(`${i}:`, startX - 10, startY + i * bucketSize + bucketSize/2 + 5)

      // Add sample key-value pairs
      if (i === 0) ctx.fillText("key1 → 10", startX + bucketSize, startY + i * bucketSize + bucketSize/2 + 5)
      if (i === 2) ctx.fillText("key2 → 20", startX + bucketSize, startY + i * bucketSize + bucketSize/2 + 5)
      if (i === 4) ctx.fillText("key3 → 30", startX + bucketSize, startY + i * bucketSize + bucketSize/2 + 5)
    }

    // Draw hash function
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Hash Table Operations", width/2, startY - 40)
    ctx.fillText("hash(key) → index", width/2, startY - 20)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Hash function maps key to bucket 0."
      case 1: return "Checking bucket for collision."
      case 2: return "Inserting new key-value pair."
      case 3: return "O(1) average case access time."
      default: return ""
    }
  }
}

// Sample visualization for heap operations
const heapVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 50
    const startX = width / 2
    const startY = height / 4

    // Helper function to draw heap nodes
    const drawNode = (x: number, y: number, value: number, isHighlighted: boolean) => {
      ctx.beginPath()
      ctx.fillStyle = isHighlighted ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(x, y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), x, y + 5)
    }

    // Draw heap edges
    ctx.strokeStyle = "#9333ea"
    const edges = [
      [startX, startY, startX - nodeSize * 1.5, startY + nodeSize * 2],
      [startX, startY, startX + nodeSize * 1.5, startY + nodeSize * 2]
    ]

    edges.forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    })

    // Draw nodes with values changing during heapify
    const values = step === 0 ? [3,7,5] :
                  step === 1 ? [7,3,5] :
                  step === 2 ? [7,3,5] :
                  [7,5,3]

    drawNode(startX, startY, values[0], step < 4)
    drawNode(startX - nodeSize * 1.5, startY + nodeSize * 2, values[1], false)
    drawNode(startX + nodeSize * 1.5, startY + nodeSize * 2, values[2], false)

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Heap Operations (Heapify)", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Initial heap state before heapify."
      case 1: return "Compare parent with children."
      case 2: return "Swap with larger child if necessary."
      case 3: return "Heap property restored."
      default: return ""
    }
  }
}

// Sample visualization for bubble sort
const bubbleSortVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 2 - cellSize / 2
    
    // Different array states during bubble sort
    const arrays = [
      [5, 3, 8, 4, 2],
      [3, 5, 4, 2, 8],
      [3, 4, 2, 5, 8],
      [3, 2, 4, 5, 8]
    ]
    
    const currentArray = arrays[Math.min(step, arrays.length - 1)]
    
    // Draw array elements
    currentArray.forEach((value, i) => {
      // Highlight cells being compared
      const isComparing = step < arrays.length && (i === step || i === step + 1)
      
      ctx.fillStyle = isComparing ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), startX + i * cellSize + cellSize/2, startY + cellSize/2)
    })
    
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Bubble Sort", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Compare adjacent elements and swap if they are in wrong order"
      case 1: return "Larger elements 'bubble up' to the end of array"
      case 2: return "Continue comparing and swapping pairs"
      case 3: return "Array is sorted when no more swaps are needed"
      default: return ""
    }
  }
}

// Sample visualization for insertion sort
const insertionSortVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 2 - cellSize / 2
    
    // Different array states during insertion sort
    const arrays = [
      [5, 3, 8, 4, 2],
      [3, 5, 8, 4, 2],
      [3, 5, 4, 8, 2],
      [2, 3, 4, 5, 8]
    ]
    
    const currentArray = arrays[Math.min(step, arrays.length - 1)]
    
    // Draw array elements
    currentArray.forEach((value, i) => {
      // Highlight current element being inserted
      const isInserting = i === step + 1
      
      ctx.fillStyle = isInserting ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), startX + i * cellSize + cellSize/2, startY + cellSize/2)
    })
    
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Insertion Sort", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Start with first element as sorted portion"
      case 1: return "Take next element and insert into sorted portion"
      case 2: return "Continue inserting elements into correct position"
      case 3: return "Array is sorted when all elements are inserted"
      default: return ""
    }
  }
}

// Sample visualization for selection sort
const selectionSortVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 2 - cellSize / 2
    
    // Different array states during selection sort
    const arrays = [
      [5, 3, 8, 4, 2],
      [2, 3, 8, 4, 5],
      [2, 3, 4, 8, 5],
      [2, 3, 4, 5, 8]
    ]
    
    const currentArray = arrays[Math.min(step, arrays.length - 1)]
    
    // Draw array elements
    currentArray.forEach((value, i) => {
      // Highlight minimum element and sorted portion
      const isMinimum = i === step
      const isSorted = i < step
      
      ctx.fillStyle = isMinimum ? "#d8b4fe" : isSorted ? "#f3e8ff" : "#fff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), startX + i * cellSize + cellSize/2, startY + cellSize/2)
    })
    
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Selection Sort", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Find minimum element in unsorted portion"
      case 1: return "Swap minimum with first unsorted element"
      case 2: return "Repeat with remaining unsorted portion"
      case 3: return "Array is sorted when all elements are processed"
      default: return ""
    }
  }
}

// Sample visualization for merge sort
const mergeSortVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 3
    
    // Different stages of merge sort
    const arrays: Array<[number[] | number[][], string]> = [
      [[5, 3, 8, 4], "Initial array"],
      [[[5, 3], [8, 4]], "Divide into subarrays"],
      [[[3, 5], [4, 8]], "Sort subarrays"],
      [[3, 4, 5, 8], "Merge sorted subarrays"]
    ]
    
    const [currentArray, label] = arrays[Math.min(step, arrays.length - 1)]
    
    // Draw current state
    if (Array.isArray(currentArray[0])) {
      // Draw split arrays
      (currentArray as number[][]).forEach((subArray: number[], i: number) => {
        subArray.forEach((value: number, j: number) => {
          ctx.fillStyle = "#f3e8ff"
          ctx.fillRect(startX + (j + i * subArray.length) * cellSize, startY, cellSize, cellSize)
          ctx.strokeStyle = "#9333ea"
          ctx.strokeRect(startX + (j + i * subArray.length) * cellSize, startY, cellSize, cellSize)
          ctx.fillStyle = "#4b5563"
          ctx.font = "20px Arial"
          ctx.textAlign = "center"
          ctx.fillText(String(value), startX + (j + i * subArray.length) * cellSize + cellSize/2, startY + cellSize/2)
        })
      })
    } else {
      // Draw single array
      (currentArray as number[]).forEach((value: number, i: number) => {
        ctx.fillStyle = "#f3e8ff"
        ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
        ctx.strokeStyle = "#9333ea"
        ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
        ctx.fillStyle = "#4b5563"
        ctx.font = "20px Arial"
        ctx.textAlign = "center"
        ctx.fillText(String(value), startX + i * cellSize + cellSize/2, startY + cellSize/2)
      })
    }
    
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Merge Sort", width/2, startY - 60)
    ctx.fillText(String(label), width/2, startY - 30)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Start with unsorted array"
      case 1: return "Divide array into smaller subarrays"
      case 2: return "Sort subarrays recursively"
      case 3: return "Merge sorted subarrays to get final sorted array"
      default: return ""
    }
  }
}

// Sample visualization for quick sort
const quickSortVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 2 - cellSize / 2
    
    // Different stages of quick sort
    const arrays = [
      [5, 3, 8, 4, 2],
      [3, 2, 4, 8, 5],
      [2, 3, 4, 8, 5],
      [2, 3, 4, 5, 8]
    ]
    
    const pivotIndices = [4, 2, 1, -1]
    const currentArray = arrays[Math.min(step, arrays.length - 1)]
    const pivotIndex = pivotIndices[Math.min(step, pivotIndices.length - 1)]
    
    // Draw array elements
    currentArray.forEach((value, i) => {
      const isPivot = i === pivotIndex
      ctx.fillStyle = isPivot ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), startX + i * cellSize + cellSize/2, startY + cellSize/2)
    })
    
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Quick Sort", width/2, startY - 40)
    if (pivotIndex >= 0) {
      ctx.fillText(`Pivot: ${currentArray[pivotIndex]}`, width/2, startY - 20)
    }
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Select a pivot element"
      case 1: return "Partition array around pivot"
      case 2: return "Recursively sort subarrays"
      case 3: return "Array is sorted when all partitions are processed"
      default: return ""
    }
  }
}

// Sample visualization for heap sort
const heapSortVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 50
    const startX = width / 2
    const startY = height / 4
    
    // Different stages of heap sort
    const heapStates = [
      [8, 5, 3, 1, 4],
      [8, 5, 3, 1, 4],
      [5, 4, 3, 1],
      [1, 3, 4, 5, 8]
    ]
    
    const currentHeap = heapStates[Math.min(step, heapStates.length - 1)]
    
    // Draw heap as binary tree
    const drawHeapNode = (value: number, level: number, position: number, isHighlighted: boolean) => {
      const x = startX + position * nodeSize * Math.pow(2, 2 - level)
      const y = startY + level * nodeSize * 1.5
      
      ctx.beginPath()
      ctx.fillStyle = isHighlighted ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(x, y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), x, y + 5)
      
      return [x, y]
    }
    
    // Draw edges and nodes
    for (let i = 0; i < currentHeap.length; i++) {
      const level = Math.floor(Math.log2(i + 1))
      const position = i - Math.pow(2, level) + 1
      const [x, y] = drawHeapNode(currentHeap[i], level, position, i === 0 && step < 3)
      
      // Draw edges to children
      if (2 * i + 1 < currentHeap.length) {
        const leftLevel = Math.floor(Math.log2(2 * i + 2))
        const leftPos = (2 * i + 1) - Math.pow(2, leftLevel) + 1
        const leftX = startX + leftPos * nodeSize * Math.pow(2, 2 - leftLevel)
        const leftY = startY + leftLevel * nodeSize * 1.5
        
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(leftX, leftY)
        ctx.strokeStyle = "#9333ea"
        ctx.stroke()
      }
      
      if (2 * i + 2 < currentHeap.length) {
        const rightLevel = Math.floor(Math.log2(2 * i + 3))
        const rightPos = (2 * i + 2) - Math.pow(2, rightLevel) + 1
        const rightX = startX + rightPos * nodeSize * Math.pow(2, 2 - rightLevel)
        const rightY = startY + rightLevel * nodeSize * 1.5
        
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(rightX, rightY)
        ctx.strokeStyle = "#9333ea"
        ctx.stroke()
      }
    }
    
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Heap Sort", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Build max heap from array"
      case 1: return "Remove maximum element (root)"
      case 2: return "Rebuild heap after removal"
      case 3: return "Array is sorted after processing all elements"
      default: return ""
    }
  }
}

// Sample visualization for radix sort
const radixSortVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 3
    
    // Different stages of radix sort
    const stages = [
      { numbers: [170, 45, 75, 90, 802], digit: 1 },
      { numbers: [170, 90, 802, 45, 75], digit: 10 },
      { numbers: [802, 45, 170, 75, 90], digit: 100 },
      { numbers: [45, 75, 90, 170, 802], digit: "final" }
    ]
    
    const currentStage = stages[Math.min(step, stages.length - 1)]
    
    // Draw array elements
    currentStage.numbers.forEach((value, i) => {
      ctx.fillStyle = "#f3e8ff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), startX + i * cellSize + cellSize/2, startY + cellSize/2)
      
      // Highlight current digit
      if (currentStage.digit !== "final" && typeof currentStage.digit === "number") {
        const digitValue = Math.floor((value / currentStage.digit) % 10)
        ctx.fillStyle = "#d8b4fe"
        ctx.fillText(String(digitValue), startX + i * cellSize + cellSize/2, startY + cellSize + 20)
      }
    })
    
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Radix Sort", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Sort by least significant digit (ones place)"
      case 1: return "Sort by tens place digit"
      case 2: return "Sort by hundreds place digit"
      case 3: return "Array is sorted after processing all digits"
      default: return ""
    }
  }
}

// Sample visualization for counting sort
const countingSortVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 4
    
    // Different stages of counting sort
    const stages = [
      { input: [4, 2, 2, 8, 3, 3, 1], counts: [] },
      { input: [4, 2, 2, 8, 3, 3, 1], counts: [0, 1, 2, 2, 1, 0, 0, 0, 1] },
      { input: [4, 2, 2, 8, 3, 3, 1], counts: [1, 3, 5, 6, 6, 6, 6, 7] },
      { input: [1, 2, 2, 3, 3, 4, 8], counts: [] }
    ]
    
    const currentStage = stages[Math.min(step, stages.length - 1)]
    
    // Draw input array
    currentStage.input.forEach((value, i) => {
      ctx.fillStyle = "#f3e8ff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), startX + i * cellSize + cellSize/2, startY + cellSize/2)
    })
    
    // Draw count array if present
    if (currentStage.counts.length > 0) {
      currentStage.counts.forEach((count, i) => {
        ctx.fillStyle = "#d8b4fe"
        ctx.fillRect(startX + i * cellSize, startY + cellSize * 2, cellSize, cellSize)
        ctx.strokeStyle = "#9333ea"
        ctx.strokeRect(startX + i * cellSize, startY + cellSize * 2, cellSize, cellSize)
        
        ctx.fillStyle = "#4b5563"
        ctx.font = "16px Arial"
        ctx.fillText(String(count), startX + i * cellSize + cellSize/2, startY + cellSize * 2.5)
        ctx.fillText(`(${i})`, startX + i * cellSize + cellSize/2, startY + cellSize * 3 + 10)
      })
    }
    
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Counting Sort", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Initial array with elements to be sorted"
      case 1: return "Count frequency of each element"
      case 2: return "Calculate cumulative counts"
      case 3: return "Place elements in sorted order"
      default: return ""
    }
  }
}

// Sample visualization for shell sort
const shellSortVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 3
    
    // Different stages of shell sort with different gaps
    const stages = [
      { array: [9, 8, 3, 7, 5, 6, 4, 1], gap: 4 },
      { array: [4, 1, 3, 7, 9, 8, 5, 6], gap: 2 },
      { array: [3, 1, 4, 6, 5, 7, 9, 8], gap: 1 },
      { array: [1, 3, 4, 5, 6, 7, 8, 9], gap: "done" }
    ]
    
    const currentStage = stages[Math.min(step, stages.length - 1)]
    
    // Draw array elements
    currentStage.array.forEach((value, i) => {
      // Highlight elements being compared based on current gap
      const isCompared = currentStage.gap !== "done" && typeof currentStage.gap === "number" &&
        (i % currentStage.gap === 0 || i % currentStage.gap === step % currentStage.gap)
      
      ctx.fillStyle = isCompared ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), startX + i * cellSize + cellSize/2, startY + cellSize/2)
    })
    
    // Draw gap size
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Shell Sort", width/2, startY - 40)
    if (currentStage.gap !== "done") {
      ctx.fillText(`Gap Size: ${currentStage.gap}`, width/2, startY - 20)
    }
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Start with large gap size (n/2)"
      case 1: return "Reduce gap size and sort subarrays"
      case 2: return "Continue with smaller gaps"
      case 3: return "Final pass with gap=1 (insertion sort)"
      default: return ""
    }
  }
}

// Sample visualization for linear search
const linearSearchVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 2 - cellSize / 2
    const array = [4, 2, 7, 1, 9]
    const target = 7

    // Draw array elements
    array.forEach((value, i) => {
      ctx.fillStyle = i === step ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), startX + i * cellSize + cellSize/2, startY + cellSize/2)
    })

    // Draw target value
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText(`Searching for: ${target}`, width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Compare first element with target"
      case 1: return "Not found, move to next element"
      case 2: return "Found target element!"
      case 3: return "Would continue until end if not found"
      default: return ""
    }
  }
}

// Sample visualization for binary search
const binarySearchVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 2 - cellSize / 2
    const array = [1, 3, 5, 7, 9]
    const target = 7

    // Calculate mid points for each step
    const midPoints = [2, 3, 3, 3]
    const currentMid = midPoints[step]

    array.forEach((value, i) => {
      const isMid = i === currentMid
      const isActive = step < 3 && 
        ((step === 0) || 
         (step === 1 && i >= currentMid) || 
         (step === 2 && i === currentMid))

      ctx.fillStyle = isMid ? "#d8b4fe" : isActive ? "#f3e8ff" : "#ffffff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), startX + i * cellSize + cellSize/2, startY + cellSize/2)
    })

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText(`Searching for: ${target}`, width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Start at middle element"
      case 1: return "Target is larger, search upper half"
      case 2: return "Found target element!"
      case 3: return "Binary search complete"
      default: return ""
    }
  }
}

// Sample visualization for interpolation search
const interpolationSearchVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 2 - cellSize / 2
    const array = [2, 4, 6, 8, 10]
    const target = 8

    // Calculate probe positions for each step
    const probePositions = [3, 3, 3, 3]
    const currentProbe = probePositions[step]

    array.forEach((value, i) => {
      const isProbe = i === currentProbe
      const isActive = step < 3

      ctx.fillStyle = isProbe ? "#d8b4fe" : isActive ? "#f3e8ff" : "#ffffff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), startX + i * cellSize + cellSize/2, startY + cellSize/2)
    })

    // Draw interpolation formula
    if (step === 0) {
      ctx.fillStyle = "#4b5563"
      ctx.font = "14px Arial"
      ctx.textAlign = "center"
      ctx.fillText("pos = low + ((target-arr[low])*(high-low))/(arr[high]-arr[low])", 
        width/2, startY - 20)
    }

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText(`Searching for: ${target}`, width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Calculate probe position using interpolation formula"
      case 1: return "Compare probe value with target"
      case 2: return "Found target element!"
      case 3: return "Interpolation search complete"
      default: return ""
    }
  }
}

// Sample visualization for depth-first search
const depthFirstSearchVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 40
    const startX = width / 2
    const startY = height / 4

    // Draw edges first
    ctx.strokeStyle = "#9333ea"
    const edges = [
      [startX, startY, startX - 100, startY + 80],
      [startX, startY, startX + 100, startY + 80],
      [startX - 100, startY + 80, startX - 150, startY + 160],
      [startX - 100, startY + 80, startX - 50, startY + 160],
      [startX + 100, startY + 80, startX + 50, startY + 160],
      [startX + 100, startY + 80, startX + 150, startY + 160]
    ]

    edges.forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    })

    // Draw nodes with DFS order highlighting
    const nodes = [
      { x: startX, y: startY, value: "1", visitOrder: 0 },
      { x: startX - 100, y: startY + 80, value: "2", visitOrder: 1 },
      { x: startX + 100, y: startY + 80, value: "3", visitOrder: 3 },
      { x: startX - 150, y: startY + 160, value: "4", visitOrder: 2 },
      { x: startX - 50, y: startY + 160, value: "5", visitOrder: 2 },
      { x: startX + 50, y: startY + 160, value: "6", visitOrder: 4 },
      { x: startX + 150, y: startY + 160, value: "7", visitOrder: 4 }
    ]

    nodes.forEach(node => {
      ctx.beginPath()
      ctx.fillStyle = node.visitOrder === step ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(node.x, node.y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.fillText(node.value, node.x, node.y + 5)
    })

    ctx.font = "18px Arial"
    ctx.fillText("Depth-First Search", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Start at root node and go deep"
      case 1: return "Visit left subtree first"
      case 2: return "Backtrack when reaching leaf nodes"
      case 3: return "Process remaining nodes in depth-first order"
      default: return ""
    }
  }
}

// Sample visualization for breadth-first search
const breadthFirstSearchVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 40
    const startX = width / 2
    const startY = height / 4

    // Draw edges
    ctx.strokeStyle = "#9333ea"
    const edges = [
      [startX, startY, startX - 100, startY + 80],
      [startX, startY, startX + 100, startY + 80],
      [startX - 100, startY + 80, startX - 150, startY + 160],
      [startX - 100, startY + 80, startX - 50, startY + 160],
      [startX + 100, startY + 80, startX + 50, startY + 160],
      [startX + 100, startY + 80, startX + 150, startY + 160]
    ]

    edges.forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    })

    // Draw nodes with BFS level-order highlighting
    const nodes = [
      { x: startX, y: startY, value: "1", level: 0 },
      { x: startX - 100, y: startY + 80, value: "2", level: 1 },
      { x: startX + 100, y: startY + 80, value: "3", level: 1 },
      { x: startX - 150, y: startY + 160, value: "4", level: 2 },
      { x: startX - 50, y: startY + 160, value: "5", level: 2 },
      { x: startX + 50, y: startY + 160, value: "6", level: 2 },
      { x: startX + 150, y: startY + 160, value: "7", level: 2 }
    ]

    nodes.forEach(node => {
      ctx.beginPath()
      ctx.fillStyle = node.level === step ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(node.x, node.y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.fillText(node.value, node.x, node.y + 5)
    })

    ctx.font = "18px Arial"
    ctx.fillText("Breadth-First Search", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Start at root node (level 0)"
      case 1: return "Visit all nodes at current level"
      case 2: return "Move to next level"
      case 3: return "Process all levels in order"
      default: return ""
    }
  }
}

// Sample visualization for jump search
const jumpSearchVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 2 - cellSize / 2
    const array = [2, 4, 6, 8, 10, 12, 14, 16]
    const jumpSize = 2
    const target = 12

    array.forEach((value, i) => {
      const isJumpPoint = i % jumpSize === 0
      const isHighlighted = step === Math.floor(i/jumpSize)
      
      ctx.fillStyle = isHighlighted && isJumpPoint ? "#d8b4fe" : 
                     isJumpPoint ? "#f3e8ff" : "#ffffff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), startX + i * cellSize + cellSize/2, startY + cellSize/2)
    })

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText(`Jump Search (step size: ${jumpSize})`, width/2, startY - 40)
    ctx.fillText(`Target: ${target}`, width/2, startY - 20)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Jump ahead by sqrt(n) steps"
      case 1: return "Continue jumping until element > target"
      case 2: return "Linear search in found block"
      case 3: return "Found target element"
      default: return ""
    }
  }
}

// Sample visualization for Dijkstra's Algorithm
const dijkstrasAlgorithmVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 40
    const startX = width / 2
    const startY = height / 4

    // Draw edges with weights
    const edges = [
      { from: [startX, startY], to: [startX - 100, startY + 80], weight: 4 },
      { from: [startX, startY], to: [startX + 100, startY + 80], weight: 2 },
      { from: [startX - 100, startY + 80], to: [startX + 100, startY + 80], weight: 3 },
      { from: [startX - 100, startY + 80], to: [startX, startY + 160], weight: 1 },
      { from: [startX + 100, startY + 80], to: [startX, startY + 160], weight: 5 }
    ]

    edges.forEach(edge => {
      ctx.beginPath()
      ctx.strokeStyle = step > 0 ? "#9333ea" : "#d1d5db"
      ctx.moveTo(edge.from[0], edge.from[1])
      ctx.lineTo(edge.to[0], edge.to[1])
      ctx.stroke()
      
      // Draw weight
      const midX = (edge.from[0] + edge.to[0]) / 2
      const midY = (edge.from[1] + edge.to[1]) / 2
      ctx.fillStyle = "#4b5563"
      ctx.fillText(String(edge.weight), midX, midY)
    })

    // Draw nodes with distances
    const nodes = [
      { x: startX, y: startY, value: "0", dist: 0 },
      { x: startX - 100, y: startY + 80, value: "∞", dist: 4 },
      { x: startX + 100, y: startY + 80, value: "∞", dist: 2 },
      { x: startX, y: startY + 160, value: "∞", dist: 5 }
    ]

    nodes.forEach((node, i) => {
      ctx.beginPath()
      ctx.fillStyle = i === step ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(node.x, node.y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.fillText(step >= i ? String(node.dist) : node.value, node.x, node.y + 5)
    })

    ctx.font = "18px Arial"
    ctx.fillText("Dijkstra's Algorithm", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Start from source node (distance = 0)"
      case 1: return "Update distances to neighboring nodes"
      case 2: return "Select node with minimum distance"
      case 3: return "Repeat until all nodes are processed"
      default: return ""
    }
  }
}

// Sample visualization for Bellman-Ford Algorithm
const bellmanFordVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 40
    const startX = width / 2
    const startY = height / 4

    // Draw edges with weights (including negative)
    const edges = [
      { from: [startX, startY], to: [startX - 100, startY + 80], weight: 4 },
      { from: [startX, startY], to: [startX + 100, startY + 80], weight: -2 },
      { from: [startX - 100, startY + 80], to: [startX + 100, startY + 80], weight: 3 },
      { from: [startX - 100, startY + 80], to: [startX, startY + 160], weight: -1 },
      { from: [startX + 100, startY + 80], to: [startX, startY + 160], weight: 5 }
    ]

    edges.forEach(edge => {
      ctx.beginPath()
      ctx.strokeStyle = step > 0 ? "#9333ea" : "#d1d5db"
      ctx.moveTo(edge.from[0], edge.from[1])
      ctx.lineTo(edge.to[0], edge.to[1])
      ctx.stroke()
      
      const midX = (edge.from[0] + edge.to[0]) / 2
      const midY = (edge.from[1] + edge.to[1]) / 2
      ctx.fillStyle = edge.weight < 0 ? "#ef4444" : "#4b5563"
      ctx.fillText(String(edge.weight), midX, midY)
    })

    // Draw nodes with distances
    const nodes = [
      { x: startX, y: startY, value: "0", dist: 0 },
      { x: startX - 100, y: startY + 80, value: "∞", dist: 4 },
      { x: startX + 100, y: startY + 80, value: "∞", dist: -2 },
      { x: startX, y: startY + 160, value: "∞", dist: 3 }
    ]

    nodes.forEach((node, i) => {
      ctx.beginPath()
      ctx.fillStyle = i === step ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(node.x, node.y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.fillText(step >= i ? String(node.dist) : node.value, node.x, node.y + 5)
    })

    ctx.font = "18px Arial"
    ctx.fillText("Bellman-Ford Algorithm", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Initialize distances (source = 0, others = ∞)"
      case 1: return "Relax all edges, handling negative weights"
      case 2: return "Repeat relaxation |V|-1 times"
      case 3: return "Check for negative cycles in final pass"
      default: return ""
    }
  }
}

// Sample visualization for Kruskal's Algorithm
const kruskalAlgorithmVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 40
    const startX = width / 2
    const startY = height / 4

    // Draw edges with weights
    const edges = [
      { from: [startX, startY], to: [startX - 100, startY + 80], weight: 4, selected: step > 0 },
      { from: [startX, startY], to: [startX + 100, startY + 80], weight: 2, selected: step > 1 },
      { from: [startX - 100, startY + 80], to: [startX + 100, startY + 80], weight: 3, selected: step > 2 },
      { from: [startX - 100, startY + 80], to: [startX, startY + 160], weight: 1, selected: step > 3 },
      { from: [startX + 100, startY + 80], to: [startX, startY + 160], weight: 5, selected: false }
    ]

    edges.forEach(edge => {
      ctx.beginPath()
      ctx.strokeStyle = edge.selected ? "#9333ea" : "#d1d5db"
      ctx.lineWidth = edge.selected ? 3 : 1
      ctx.moveTo(edge.from[0], edge.from[1])
      ctx.lineTo(edge.to[0], edge.to[1])
      ctx.stroke()
      ctx.lineWidth = 1
      
      const midX = (edge.from[0] + edge.to[0]) / 2
      const midY = (edge.from[1] + edge.to[1]) / 2
      ctx.fillStyle = "#4b5563"
      ctx.fillText(String(edge.weight), midX, midY)
    })

    // Draw nodes
    const nodes = [
      { x: startX, y: startY },
      { x: startX - 100, y: startY + 80 },
      { x: startX + 100, y: startY + 80 },
      { x: startX, y: startY + 160 }
    ]

    nodes.forEach((node, i) => {
      ctx.beginPath()
      ctx.fillStyle = "#f3e8ff"
      ctx.arc(node.x, node.y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(i + 1), node.x, node.y + 5)
    })

    ctx.font = "18px Arial"
    ctx.fillText("Kruskal's Algorithm", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Sort edges by weight in ascending order"
      case 1: return "Add edge if it doesn't create a cycle"
      case 2: return "Continue adding minimum weight edges"
      case 3: return "Complete when all nodes are connected"
      default: return ""
    }
  }
}

// Sample visualization for Prim's Algorithm
const primAlgorithmVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 40
    const startX = width / 2
    const startY = height / 4

    // Draw edges with weights
    const edges = [
      { from: [startX, startY], to: [startX - 100, startY + 80], weight: 4, selected: step > 0 },
      { from: [startX, startY], to: [startX + 100, startY + 80], weight: 2, selected: step > 1 },
      { from: [startX - 100, startY + 80], to: [startX + 100, startY + 80], weight: 1, selected: step > 2 },
      { from: [startX - 100, startY + 80], to: [startX, startY + 160], weight: 3, selected: step > 3 },
      { from: [startX + 100, startY + 80], to: [startX, startY + 160], weight: 5, selected: false }
    ]

    edges.forEach(edge => {
      ctx.beginPath()
      ctx.strokeStyle = edge.selected ? "#9333ea" : "#d1d5db"
      ctx.lineWidth = edge.selected ? 3 : 1
      ctx.moveTo(edge.from[0], edge.from[1])
      ctx.lineTo(edge.to[0], edge.to[1])
      ctx.stroke()
      ctx.lineWidth = 1
      
      const midX = (edge.from[0] + edge.to[0]) / 2
      const midY = (edge.from[1] + edge.to[1]) / 2
      ctx.fillStyle = "#4b5563"
      ctx.fillText(String(edge.weight), midX, midY)
    })

    // Draw nodes with visited status
    const nodes = [
      { x: startX, y: startY, visited: step > 0 },
      { x: startX - 100, y: startY + 80, visited: step > 1 },
      { x: startX + 100, y: startY + 80, visited: step > 2 },
      { x: startX, y: startY + 160, visited: step > 3 }
    ]

    nodes.forEach((node, i) => {
      ctx.beginPath()
      ctx.fillStyle = node.visited ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(node.x, node.y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(i + 1), node.x, node.y + 5)
    })

    ctx.font = "18px Arial"
    ctx.fillText("Prim's Algorithm", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Start from any vertex in the graph"
      case 1: return "Add minimum weight edge to unvisited vertex"
      case 2: return "Update minimum edge weights to remaining vertices"
      case 3: return "Complete when all vertices are included"
      default: return ""
    }
  }
}

// Sample visualization for Kruskal's Algorithm
const kruskalVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 40
    const startX = width / 2
    const startY = height / 4

    // Draw edges with weights in order of selection
    const edges = [
      { from: [startX - 100, startY + 80], to: [startX + 100, startY + 80], weight: 1, selected: step > 0 },
      { from: [startX, startY], to: [startX + 100, startY + 80], weight: 2, selected: step > 1 },
      { from: [startX - 100, startY + 80], to: [startX, startY + 160], weight: 3, selected: step > 2 },
      { from: [startX, startY], to: [startX - 100, startY + 80], weight: 4, selected: false },
      { from: [startX + 100, startY + 80], to: [startX, startY + 160], weight: 5, selected: false }
    ]

    // Draw all edges first (unselected)
    edges.forEach(edge => {
      ctx.beginPath()
      ctx.strokeStyle = edge.selected ? "#9333ea" : "#d1d5db"
      ctx.lineWidth = edge.selected ? 3 : 1
      ctx.moveTo(edge.from[0], edge.from[1])
      ctx.lineTo(edge.to[0], edge.to[1])
      ctx.stroke()
      ctx.lineWidth = 1
      
      const midX = (edge.from[0] + edge.to[0]) / 2
      const midY = (edge.from[1] + edge.to[1]) / 2
      ctx.fillStyle = "#4b5563"
      ctx.fillText(String(edge.weight), midX, midY)
    })

    // Draw nodes
    const nodes = [
      { x: startX, y: startY },
      { x: startX - 100, y: startY + 80 },
      { x: startX + 100, y: startY + 80 },
      { x: startX, y: startY + 160 }
    ]

    nodes.forEach((node, i) => {
      ctx.beginPath()
      ctx.fillStyle = "#f3e8ff"
      ctx.arc(node.x, node.y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(i + 1), node.x, node.y + 5)
    })

    ctx.font = "18px Arial"
    ctx.fillText("Kruskal's Algorithm (MST)", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Select edge with minimum weight (1)"
      case 1: return "Add next minimum edge that doesn't form cycle (2)"
      case 2: return "Continue adding edges that maintain acyclic property (3)"
      case 3: return "MST is complete when n-1 edges are added"
      default: return ""
    }
  }
}

// Sample visualization for Topological Sort
const topologicalSortVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 40
    const startX = width / 3
    const startY = height / 4

    // Draw directed edges
    const edges = [
      { from: [startX, startY], to: [startX + 100, startY + 80], order: 0 },
      { from: [startX, startY], to: [startX - 50, startY + 80], order: 0 },
      { from: [startX + 100, startY + 80], to: [startX + 50, startY + 160], order: 2 },
      { from: [startX - 50, startY + 80], to: [startX + 50, startY + 160], order: 1 }
    ]

    edges.forEach(edge => {
      ctx.beginPath()
      ctx.strokeStyle = edge.order <= step ? "#9333ea" : "#d1d5db"
      ctx.moveTo(edge.from[0], edge.from[1])
      ctx.lineTo(edge.to[0], edge.to[1])
      ctx.stroke()

      // Draw arrow heads
      const angle = Math.atan2(edge.to[1] - edge.from[1], edge.to[0] - edge.from[0])
      ctx.beginPath()
      ctx.moveTo(edge.to[0], edge.to[1])
      ctx.lineTo(edge.to[0] - 10 * Math.cos(angle - Math.PI/6), edge.to[1] - 10 * Math.sin(angle - Math.PI/6))
      ctx.lineTo(edge.to[0] - 10 * Math.cos(angle + Math.PI/6), edge.to[1] - 10 * Math.sin(angle + Math.PI/6))
      ctx.closePath()
      ctx.fillStyle = edge.order <= step ? "#9333ea" : "#d1d5db"
      ctx.fill()
    })

    // Draw nodes with ordering
    const nodes = [
      { x: startX, y: startY, value: "1", order: 0 },
      { x: startX - 50, y: startY + 80, value: "2", order: 1 },
      { x: startX + 100, y: startY + 80, value: "3", order: 2 },
      { x: startX + 50, y: startY + 160, value: "4", order: 3 }
    ]

    nodes.forEach(node => {
      ctx.beginPath()
      ctx.fillStyle = node.order === step ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(node.x, node.y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.fillText(node.value, node.x, node.y + 5)

      if (node.order <= step) {
        ctx.fillStyle = "#9333ea"
        ctx.fillText(`(${node.order + 1})`, node.x + nodeSize, node.y - nodeSize/2)
      }
    })

    ctx.font = "18px Arial"
    ctx.fillText("Topological Sort", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Start with nodes that have no incoming edges"
      case 1: return "Remove edges from visited nodes"
      case 2: return "Visit nodes with no remaining incoming edges"
      case 3: return "Continue until all nodes are ordered"
      default: return ""
    }
  }
}

// Sample visualization for Fibonacci with Dynamic Programming
const fibonacciDPVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)

    const cellSize = 60
    const startX = width / 4
    const startY = height / 3
    const memoValues = [1, 1, 2, 3, 5, 8]

    // Draw memoization table
    for (let i = 0; i < 6; i++) {
      ctx.fillStyle = i === step ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)

      // Index labels
      ctx.fillStyle = "#6b7280"
      ctx.font = "14px Arial"
      ctx.textAlign = "center"
      ctx.fillText(`n=${i}`, startX + i * cellSize + cellSize/2, startY - 10)

      // Values
      if (i <= step) {
        ctx.fillStyle = "#4b5563"
        ctx.font = "20px Arial"
        ctx.fillText(String(memoValues[i]), startX + i * cellSize + cellSize/2, startY + cellSize/2)
      }
    }

    // Draw formula
    if (step > 0) {
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.fillText("F(n) = F(n-1) + F(n-2)", width/2, startY + cellSize * 2)
    }

    ctx.font = "18px Arial"
    ctx.fillText("Fibonacci with Dynamic Programming", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Initialize base cases F(0)=1 and F(1)=1"
      case 1: return "Calculate F(2) using memoized values"
      case 2: return "Build up sequence using previous results"
      case 3: return "Continue until target number is reached"
      default: return ""
    }
  }
}

// Sample visualization for 0/1 Knapsack Problem
const knapsackProblemVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)

    const cellSize = 50
    const startX = width / 4
    const startY = height / 4
    const items = [
      { weight: 2, value: 3 },
      { weight: 3, value: 4 },
      { weight: 4, value: 5 }
    ]

    // Draw DP table
    const capacity = 5
    for (let i = 0; i <= items.length; i++) {
      for (let w = 0; w <= capacity; w++) {
        const isHighlighted = step === Math.floor((i * capacity + w) / capacity)
        ctx.fillStyle = isHighlighted ? "#d8b4fe" : "#f3e8ff"
        ctx.fillRect(startX + w * cellSize, startY + i * cellSize, cellSize, cellSize)
        ctx.strokeStyle = "#9333ea"
        ctx.strokeRect(startX + w * cellSize, startY + i * cellSize, cellSize, cellSize)
      }
    }

    // Draw items being considered
    if (step > 0) {
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      items.slice(0, step).forEach((item, idx) => {
        ctx.fillText(`Item ${idx+1}: (W:${item.weight}, V:${item.value})`, startX, startY - 20 * (items.length - idx))
      })
    }

    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("0/1 Knapsack Problem", width/2, startY - 60)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Initialize DP table with base cases"
      case 1: return "Consider including/excluding first item"
      case 2: return "Update table based on optimal subproblems"
      case 3: return "Final cell contains maximum possible value"
      default: return ""
    }
  }
}

// Sample visualization for Longest Common Subsequence
const longestCommonSubsequenceVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)

    const cellSize = 50
    const startX = width / 4
    const startY = height / 4
    const str1 = "ABCD"
    const str2 = "ACBD"

    // Draw DP table
    for (let i = 0; i <= str1.length; i++) {
      for (let j = 0; j <= str2.length; j++) {
        const isHighlighted = step === Math.floor((i * str2.length + j) / str2.length)
        ctx.fillStyle = isHighlighted ? "#d8b4fe" : "#f3e8ff"
        ctx.fillRect(startX + j * cellSize, startY + i * cellSize, cellSize, cellSize)
        ctx.strokeStyle = "#9333ea"
        ctx.strokeRect(startX + j * cellSize, startY + i * cellSize, cellSize, cellSize)
      }
    }

    // Draw strings
    ctx.fillStyle = "#4b5563"
    ctx.font = "16px Arial"
    ctx.textAlign = "center"
    for (let i = 0; i < str1.length; i++) {
      ctx.fillText(str1[i], startX - 20, startY + (i + 1) * cellSize + cellSize/2)
    }
    for (let j = 0; j < str2.length; j++) {
      ctx.fillText(str2[j], startX + j * cellSize + cellSize/2, startY - 20)
    }

    ctx.font = "18px Arial"
    ctx.fillText("Longest Common Subsequence", width/2, startY - 60)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Initialize empty DP table"
      case 1: return "Compare characters and fill table"
      case 2: return "Use previous results for optimal solution"
      case 3: return "Trace back to find the subsequence"
      default: return ""
    }
  }
}

// Sample visualization for Matrix Chain Multiplication
const matrixChainMultiplicationVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)

    const cellSize = 50
    const startX = width / 4
    const startY = height / 4
    const matrices = ["A", "B", "C", "D"]
    const dimensions = [10, 30, 5, 60, 10]

    // Draw triangular DP table
    for (let i = 0; i < matrices.length; i++) {
      for (let j = i; j < matrices.length; j++) {
        const isHighlighted = step === i && j <= step + i
        ctx.fillStyle = isHighlighted ? "#d8b4fe" : "#f3e8ff"
        ctx.fillRect(startX + j * cellSize, startY + i * cellSize, cellSize, cellSize)
        ctx.strokeStyle = "#9333ea"
        ctx.strokeRect(startX + j * cellSize, startY + i * cellSize, cellSize, cellSize)
      }
    }

    // Draw matrix labels and dimensions
    ctx.fillStyle = "#4b5563"
    ctx.font = "16px Arial"
    ctx.textAlign = "center"
    matrices.forEach((matrix, i) => {
      if (i <= step) {
        ctx.fillText(`${matrix}(${dimensions[i]}×${dimensions[i+1]})`, 
          startX + i * cellSize, startY - 20)
      }
    })

    // Draw current multiplication being considered
    if (step > 0) {
      ctx.fillText(`Considering multiplications of length ${step+1}`, 
        width/2, startY + matrices.length * cellSize + 30)
    }

    ctx.font = "18px Arial"
    ctx.fillText("Matrix Chain Multiplication", width/2, startY - 60)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Initialize table with single matrix costs"
      case 1: return "Calculate costs for pairs of matrices"
      case 2: return "Find optimal splits for longer chains"
      case 3: return "Complete table with minimum multiplication costs"
      default: return ""
    }
  }
}

// Sample visualization for greedy algorithms
const greedyAlgorithmVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const itemSize = 50
    const startX = width / 4
    const startY = height / 3
    
    // Items with values and weights
    const items = [
      { value: 60, weight: 10 },
      { value: 40, weight: 40 },
      { value: 100, weight: 20 },
      { value: 120, weight: 30 }
    ].sort((a, b) => (b.value / b.weight) - (a.value / a.weight))

    // Draw items with their value/weight ratio
    items.forEach((item, i) => {
      const isSelected = i <= step
      ctx.fillStyle = isSelected ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX + i * (itemSize + 20), startY, itemSize, itemSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * (itemSize + 20), startY, itemSize, itemSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "14px Arial"
      ctx.textAlign = "center"
      ctx.fillText(`V:${item.value}`, startX + i * (itemSize + 20) + itemSize/2, startY + 20)
      ctx.fillText(`W:${item.weight}`, startX + i * (itemSize + 20) + itemSize/2, startY + 40)
    })

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Greedy Algorithm: Fractional Knapsack", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Sort items by value/weight ratio"
      case 1: return "Select item with highest ratio first"
      case 2: return "Continue selecting next best items"
      case 3: return "Take fractional part of last item if needed"
      default: return ""
    }
  }
}

// Sample visualization for backtracking
const backtrackingVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 50
    const startX = width / 3
    const startY = height / 4
    
    // Draw 4x4 chessboard for N-Queens problem
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        ctx.fillStyle = (i + j) % 2 === 0 ? "#f3e8ff" : "#d8b4fe"
        ctx.fillRect(startX + j * cellSize, startY + i * cellSize, cellSize, cellSize)
        ctx.strokeStyle = "#9333ea"
        ctx.strokeRect(startX + j * cellSize, startY + i * cellSize, cellSize, cellSize)
      }
    }

    // Draw queens based on current step
    const queenPositions = [
      [0, 1],
      [1, 3],
      [2, 0],
      [3, 2]
    ]

    for (let i = 0; i <= step && i < queenPositions.length; i++) {
      const [row, col] = queenPositions[i]
      ctx.fillStyle = "#4b5563"
      ctx.font = "24px Arial"
      ctx.textAlign = "center"
      ctx.fillText("♛", startX + col * cellSize + cellSize/2, startY + row * cellSize + cellSize/2 + 8)
    }

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Backtracking: N-Queens Problem", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Place first queen in valid position"
      case 1: return "Try positions for next queen"
      case 2: return "Backtrack if no valid position found"
      case 3: return "Continue until all queens are placed"
      default: return ""
    }
  }
}

// Sample visualization for divide and conquer
const divideAndConquerVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const barWidth = 40
    const startX = width / 4
    const startY = height - height / 4
    const array = [7, 2, 9, 4, 5, 6, 3, 8]

    // Draw different stages of merge sort as an example
    const stages = [
      [[7, 2, 9, 4], [5, 6, 3, 8]],
      [[7, 2], [9, 4], [5, 6], [3, 8]],
      [[2, 7], [4, 9], [5, 6], [3, 8]],
      [2, 3, 4, 5, 6, 7, 8, 9]
    ]

    const currentStage = stages[step];
    
    // Draw arrays or subarrays
    if (Array.isArray(currentStage[0])) {
      // Multiple subarrays
      (currentStage as number[][]).forEach((subarray: number[], i: number) => {
        subarray.forEach((value, j) => {
          const x = startX + (j + i * subarray.length) * barWidth
          const height = value * 20
          ctx.fillStyle = "#d8b4fe"
          ctx.fillRect(x, startY - height, barWidth - 2, height)
          ctx.strokeStyle = "#9333ea"
          ctx.strokeRect(x, startY - height, barWidth - 2, height)
          
          ctx.fillStyle = "#4b5563"
          ctx.font = "16px Arial"
          ctx.textAlign = "center"
          ctx.fillText(String(value), x + barWidth/2, startY + 20)
        })
      })
    } else {
      // Single sorted array
      (currentStage as number[]).forEach((value: number, i: number) => {
        const x = startX + i * barWidth
        const height = value * 20
        ctx.fillStyle = "#d8b4fe"
        ctx.fillRect(x, startY - height, barWidth - 2, height)
        ctx.strokeStyle = "#9333ea"
        ctx.strokeRect(x, startY - height, barWidth - 2, height)
        
        ctx.fillStyle = "#4b5563"
        ctx.font = "16px Arial"
        ctx.textAlign = "center"
        ctx.fillText(String(value), x + barWidth/2, startY + 20)
      })
    }

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Divide and Conquer: Merge Sort", width/2, height/4)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Divide array into two halves"
      case 1: return "Recursively divide subarrays"
      case 2: return "Sort and merge smaller subarrays"
      case 3: return "Final merged and sorted array"
      default: return ""
    }
  }
}

// Sample visualization for randomized algorithms (Quick Select example)
const randomizedAlgorithmVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 60
    const startX = width / 4
    const startY = height / 2 - cellSize / 2
    const array = [7, 2, 9, 4, 1, 5, 6, 3]

    // Different states of quickselect algorithm
    const states = [
      { arr: [7, 2, 9, 4, 1, 5, 6, 3], pivot: 5, highlighted: [4] },
      { arr: [2, 1, 3, 4, 7, 5, 6, 9], pivot: 4, highlighted: [3] },
      { arr: [2, 1, 3, 4, 7, 5, 6, 9], pivot: 3, highlighted: [2] },
      { arr: [1, 2, 3, 4, 7, 5, 6, 9], pivot: -1, highlighted: [3] }
    ]

    const currentState = states[step]
    
    // Draw array elements
    currentState.arr.forEach((value, i) => {
      const isPivot = i === currentState.pivot
      const isHighlighted = currentState.highlighted.includes(i)
      
      ctx.fillStyle = isPivot ? "#d8b4fe" : isHighlighted ? "#f3e8ff" : "#ffffff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "20px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(value), startX + i * cellSize + cellSize/2, startY + cellSize/2)
    })

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Randomized Quick Select", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Randomly select pivot element"
      case 1: return "Partition array around pivot"
      case 2: return "Recursively search in relevant partition"
      case 3: return "Found kth smallest element"
      default: return ""
    }
  }
}

// Sample visualization for approximation algorithms (Vertex Cover example)
const approximationAlgorithmVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 40
    const startX = width / 2
    const startY = height / 4

    // Draw graph edges
    const edges = [
      { from: [startX - 100, startY], to: [startX + 100, startY] },
      { from: [startX - 100, startY], to: [startX - 50, startY + 100] },
      { from: [startX + 100, startY], to: [startX + 50, startY + 100] },
      { from: [startX - 50, startY + 100], to: [startX + 50, startY + 100] }
    ]

    edges.forEach(edge => {
      ctx.beginPath()
      ctx.strokeStyle = step > 0 ? "#9333ea" : "#d1d5db"
      ctx.moveTo(edge.from[0], edge.from[1])
      ctx.lineTo(edge.to[0], edge.to[1])
      ctx.stroke()
    })

    // Draw nodes with approximation solution
    const nodes = [
      { x: startX - 100, y: startY, selected: step > 1 },
      { x: startX + 100, y: startY, selected: step > 2 },
      { x: startX - 50, y: startY + 100, selected: false },
      { x: startX + 50, y: startY + 100, selected: step > 3 }
    ]

    nodes.forEach((node, i) => {
      ctx.beginPath()
      ctx.fillStyle = node.selected ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(node.x, node.y, nodeSize/2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.fillText(String(i + 1), node.x, node.y + 5)
    })

    ctx.font = "18px Arial"
    ctx.fillText("Vertex Cover Approximation", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Initial graph with vertices and edges"
      case 1: return "Select edge and both its endpoints"
      case 2: return "Add vertices to cover"
      case 3: return "2-approximation solution found"
      default: return ""
    }
  }
}

// Sample visualization for branch and bound (0/1 Knapsack example)
const branchAndBoundVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const nodeSize = 40
    const startX = width / 2
    const startY = height / 6

    // Draw decision tree
    const levels = [
      [{ x: startX, y: startY, value: "Root" }],
      [
        { x: startX - 100, y: startY + 80, value: "Include" },
        { x: startX + 100, y: startY + 80, value: "Exclude" }
      ],
      [
        { x: startX - 150, y: startY + 160, value: "Bound" },
        { x: startX - 50, y: startY + 160, value: "Continue" },
        { x: startX + 50, y: startY + 160, value: "Continue" },
        { x: startX + 150, y: startY + 160, value: "Bound" }
      ]
    ]

    // Draw edges of tree
    ctx.strokeStyle = "#9333ea"
    if (step > 0) {
      // Level 1 edges
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(startX - 100, startY + 80)
      ctx.lineTo(startX + 100, startY + 80)
      ctx.stroke()

      if (step > 1) {
        // Level 2 edges
        ctx.beginPath()
        ctx.moveTo(startX - 100, startY + 80)
        ctx.lineTo(startX - 150, startY + 160)
        ctx.lineTo(startX - 50, startY + 160)
        ctx.moveTo(startX + 100, startY + 80)
        ctx.lineTo(startX + 50, startY + 160)
        ctx.lineTo(startX + 150, startY + 160)
        ctx.stroke()
      }
    }

    // Draw nodes
    levels.forEach((level, levelIdx) => {
      if (levelIdx <= step) {
        level.forEach(node => {
          ctx.beginPath()
          ctx.fillStyle = node.value === "Bound" ? "#fee2e2" : "#f3e8ff"
          ctx.arc(node.x, node.y, nodeSize/2, 0, 2 * Math.PI)
          ctx.fill()
          ctx.strokeStyle = "#9333ea"
          ctx.stroke()
          
          ctx.fillStyle = "#4b5563"
          ctx.font = "14px Arial"
          ctx.textAlign = "center"
          ctx.fillText(node.value, node.x, node.y + 5)
        })
      }
    })

    // Current best solution
    if (step > 2) {
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.fillText("Best Solution: 142", width/2, height - 40)
    }

    ctx.font = "18px Arial"
    ctx.fillText("Branch and Bound: 0/1 Knapsack", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Start at root node with no items selected"
      case 1: return "Branch into include/exclude decisions"
      case 2: return "Bound branches that can't improve solution"
      case 3: return "Continue with promising branches only"
      default: return ""
    }
  }
}

// Sample visualization for Monte Carlo Methods
const monteCarloMethodsVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 4
    
    // Draw circle (target area)
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.strokeStyle = "#9333ea"
    ctx.stroke()
    
    // Draw square (total sampling area)
    ctx.strokeRect(centerX - radius, centerY - radius, radius * 2, radius * 2)

    // Generate random points based on step
    const pointsPerStep = 20
    const points = []
    for (let i = 0; i < pointsPerStep * (step + 1); i++) {
      const x = centerX - radius + Math.random() * radius * 2
      const y = centerY - radius + Math.random() * radius * 2
      const insideCircle = Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2) <= radius * radius
      points.push({ x, y, inside: insideCircle })
    }
    
    // Draw points
    points.forEach(point => {
      ctx.beginPath()
      ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI)
      ctx.fillStyle = point.inside ? "#d8b4fe" : "#f3e8ff"
      ctx.fill()
    })

    // Show current pi approximation
    const insideCount = points.filter(p => p.inside).length
    const piApprox = (4 * insideCount / points.length).toFixed(4)
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText(`Monte Carlo Pi Approximation: ${piApprox}`, width/2, height/6)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Generate initial random points"
      case 1: return "Calculate ratio of points inside circle"
      case 2: return "Add more points to improve accuracy"
      case 3: return "Final approximation of π"
      default: return ""
    }
  }
}

// Sample visualization for Genetic Algorithms
const geneticAlgorithmsVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const individualWidth = 120
    const individualHeight = 30
    const startX = width / 4
    const startY = height / 4

    // Simulate generations
    const generations = [
      ["1010", "1100", "0011", "1001"],
      ["1010", "1110", "1011", "1100"],
      ["1110", "1110", "1111", "1110"],
      ["1111", "1111", "1111", "1111"]
    ]

    // Draw current generation
    const currentGen = generations[step]
    currentGen.forEach((individual, i) => {
      // Fitness is number of 1s
      const fitness = (individual.match(/1/g) || []).length
      
      ctx.fillStyle = fitness === 4 ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX, startY + i * (individualHeight + 10), individualWidth, individualHeight)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX, startY + i * (individualHeight + 10), individualWidth, individualHeight)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.fillText(individual, startX + individualWidth/2, startY + i * (individualHeight + 10) + 20)
    })

    // Draw generation number and operations
    const operations = ["Initial Population", "Selection", "Crossover", "Mutation"]
    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText(`Generation ${step + 1}: ${operations[step]}`, width/2, height/6)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Create initial random population"
      case 1: return "Select fittest individuals"
      case 2: return "Perform crossover between pairs"
      case 3: return "Apply mutation to maintain diversity"
      default: return ""
    }
  }
}

// Sample visualization for Parallel Algorithms
const parallelAlgorithmsVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const processorWidth = 80
    const processorHeight = 120
    const startX = width / 4
    const startY = height / 3
    const processors = 4

    // Draw processors
    for (let i = 0; i < processors; i++) {
      ctx.fillStyle = i <= step ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX + i * (processorWidth + 20), startY, processorWidth, processorHeight)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * (processorWidth + 20), startY, processorWidth, processorHeight)
      
      // Draw processor label
      ctx.fillStyle = "#4b5563"
      ctx.font = "14px Arial"
      ctx.textAlign = "center"
      ctx.fillText(`P${i+1}`, startX + i * (processorWidth + 20) + processorWidth/2, startY + 20)
      
      // Draw task progress
      if (i <= step) {
        ctx.fillStyle = "#9333ea"
        ctx.fillRect(
          startX + i * (processorWidth + 20) + 10,
          startY + 40,
          processorWidth - 20,
          (processorHeight - 60) * ((step + 1) / 4)
        )
      }
    }

    // Draw communication lines between processors
    if (step > 1) {
      ctx.beginPath()
      ctx.strokeStyle = "#9333ea"
      for (let i = 0; i < processors - 1; i++) {
        ctx.moveTo(startX + (i + 1) * (processorWidth + 20) - 10, startY + processorHeight/2)
        ctx.lineTo(startX + (i + 1) * (processorWidth + 20) - 10 + 20, startY + processorHeight/2)
      }
      ctx.stroke()
    }

    ctx.fillStyle = "#4b5563"
    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Parallel Processing", width/2, startY - 40)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Distribute tasks across processors"
      case 1: return "Begin parallel execution"
      case 2: return "Processors communicate results"
      case 3: return "Combine results for final solution"
      default: return ""
    }
  }
}

// Sample visualization for String Matching
const stringMatchingVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const cellSize = 40
    const startX = width / 4
    const startY = height / 3
    
    const text = "ABABCABAB"
    const pattern = "ABAB"
    
    // Draw text string cells
    text.split('').forEach((char, i) => {
      const isMatching = step > 0 && 
        (step === 1 && i < pattern.length || 
         step === 2 && i >= 3 && i < 7 ||
         step === 3 && i >= 5 && i < 9)
      
      ctx.fillStyle = isMatching ? "#d8b4fe" : "#f3e8ff"
      ctx.fillRect(startX + i * cellSize, startY, cellSize, cellSize)
      ctx.strokeStyle = "#9333ea"
      ctx.strokeRect(startX + i * cellSize, startY, cellSize, cellSize)
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "center"
      ctx.fillText(char, startX + i * cellSize + cellSize/2, startY + cellSize/2 + 5)
    })

    // Draw pattern string
    if (step > 0) {
      const patternX = step === 1 ? startX :
                      step === 2 ? startX + cellSize * 3 :
                      startX + cellSize * 5
      
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "left"
      ctx.fillText("Pattern:", startX, startY - 20)
      
      pattern.split('').forEach((char, i) => {
        ctx.fillStyle = "#fce7f3"
        ctx.fillRect(patternX + i * cellSize, startY - 60, cellSize, cellSize)
        ctx.strokeStyle = "#9333ea"
        ctx.strokeRect(patternX + i * cellSize, startY - 60, cellSize, cellSize)
        
        ctx.fillStyle = "#4b5563"
        ctx.textAlign = "center"
        ctx.fillText(char, patternX + i * cellSize + cellSize/2, startY - 60 + cellSize/2 + 5)
      })
    }

    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("KMP String Matching", width/2, startY - 100)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Text to search through"
      case 1: return "Compare pattern with text starting position"
      case 2: return "Skip positions using KMP preprocessing"
      case 3: return "Found pattern match at position 5"
      default: return ""
    }
  }
}

// Sample visualization for Compression Algorithms
const compressionAlgorithmsVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const startX = width / 4
    const startY = height / 3
    const blockWidth = 40
    const blockHeight = 40

    // Sample data representation
    const originalData = "AABBBCCCC"
    const compressedData = "A2B3C4"
    
    // Draw original data blocks
    if (step >= 0) {
      ctx.fillStyle = "#4b5563"
      ctx.font = "16px Arial"
      ctx.textAlign = "left"
      ctx.fillText("Original:", startX, startY - 10)

      originalData.split('').forEach((char, i) => {
        ctx.fillStyle = "#f3e8ff"
        ctx.fillRect(startX + i * blockWidth, startY, blockWidth, blockHeight)
        ctx.strokeStyle = "#9333ea"
        ctx.strokeRect(startX + i * blockWidth, startY, blockWidth, blockHeight)
        
        ctx.fillStyle = "#4b5563"
        ctx.textAlign = "center"
        ctx.fillText(char, startX + i * blockWidth + blockWidth/2, startY + blockHeight/2 + 5)
      })
    }

    // Draw compression process
    if (step >= 1) {
      const y = startY + blockHeight + 40
      ctx.fillStyle = "#4b5563"
      ctx.textAlign = "left"
      ctx.fillText("Compressed:", startX, y - 10)

      compressedData.split('').forEach((char, i) => {
        ctx.fillStyle = /\d/.test(char) ? "#d8b4fe" : "#f3e8ff"
        ctx.fillRect(startX + i * blockWidth, y, blockWidth, blockHeight)
        ctx.strokeStyle = "#9333ea"
        ctx.strokeRect(startX + i * blockWidth, y, blockWidth, blockHeight)
        
        ctx.fillStyle = "#4b5563"
        ctx.textAlign = "center"
        ctx.fillText(char, startX + i * blockWidth + blockWidth/2, y + blockHeight/2 + 5)
      })

      // Show compression ratio
      if (step >= 2) {
        const ratio = ((compressedData.length / originalData.length) * 100).toFixed(1)
        ctx.fillStyle = "#4b5563"
        ctx.textAlign = "center"
        ctx.fillText(`Compression Ratio: ${ratio}%`, width/2, y + blockHeight + 40)
      }
    }

    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Run-Length Encoding Compression", width/2, startY - 60)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Original uncompressed data"
      case 1: return "Count consecutive characters"
      case 2: return "Replace with character counts"
      case 3: return "Final compressed representation"
      default: return ""
    }
  }
}

// Sample visualization for Machine Learning Algorithms
const machineLearningAlgorithmsVisualization: Visualization = {
  totalSteps: 4,
  drawStep: (ctx, step, width, height) => {
    ctx.clearRect(0, 0, width, height)
    
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 4

    // Draw scatter plot points
    const points = [
      { x: -0.5, y: 0.8, class: 0 },
      { x: -0.2, y: 0.6, class: 0 },
      { x: -0.3, y: 0.5, class: 0 },
      { x: 0.5, y: -0.5, class: 1 },
      { x: 0.8, y: -0.3, class: 1 },
      { x: 0.6, y: -0.4, class: 1 }
    ]

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#9333ea"
    ctx.moveTo(centerX - radius, centerY)
    ctx.lineTo(centerX + radius, centerY)
    ctx.moveTo(centerX, centerY - radius)
    ctx.lineTo(centerX, centerY + radius)
    ctx.stroke()

    // Draw points
    points.forEach(point => {
      const x = centerX + point.x * radius
      const y = centerY - point.y * radius
      
      ctx.beginPath()
      ctx.fillStyle = point.class === 0 ? "#d8b4fe" : "#f3e8ff"
      ctx.arc(x, y, 6, 0, 2 * Math.PI)
      ctx.fill()
      ctx.strokeStyle = "#9333ea"
      ctx.stroke()
    })

    // Draw decision boundary based on step
    if (step > 0) {
      ctx.beginPath()
      ctx.strokeStyle = "#9333ea"
      ctx.setLineDash([5, 5])
      
      if (step === 1) {
        // Vertical line
        ctx.moveTo(centerX, centerY - radius)
        ctx.lineTo(centerX, centerY + radius)
      } else if (step === 2) {
        // Diagonal line
        ctx.moveTo(centerX - radius, centerY + radius)
        ctx.lineTo(centerX + radius, centerY - radius)
      } else {
        // Curved boundary
        ctx.beginPath()
        ctx.moveTo(centerX - radius, centerY)
        ctx.quadraticCurveTo(centerX, centerY + radius/2, centerX + radius, centerY)
      }
      ctx.stroke()
      ctx.setLineDash([])
    }

    ctx.font = "18px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Binary Classification", width/2, height/6)
  },
  getStepDescription: (step) => {
    switch (step) {
      case 0: return "Training data points in feature space"
      case 1: return "Initial decision boundary"
      case 2: return "Adjusting boundary based on data"
      case 3: return "Final classification boundary"
      default: return ""
    }
  }
}


// Function to get visualization for a topic
export function getVisualization(topicId: string): Visualization | null {
  // For now, we only have visualization for arrays
  if (topicId === "arrays") {
    return arrayVisualization
  }
  if (topicId === "linked-lists") {
    return linkedListVisualization
  }
  if (topicId === "doubly-linked-lists") {
    return doublyLinkedListVisualization
  }
  if (topicId === "stacks") {
    return stackVisualization
  }
  if (topicId === "queues") {
    return queueVisualization
  }
  if (topicId === "priority-queues") {
    return priorityQueueVisualization
  }
  if (topicId === "trees") {
    return binaryTreeVisualization
  }
  if (topicId === "binary-search-trees") {
    return binarySearchTreeVisualization
  }
  if (topicId === "avl-trees") {
    return avlTreeVisualization
  }
  if (topicId === "red-black-trees") {
    return redBlackTreeVisualization
  }
  if (topicId === "graphs") {
    return graphVisualization
  }
  if (topicId === "hash-tables") {
    return hashTableVisualization
  }
  if (topicId === "heaps") {
    return heapVisualization
  }
  if (topicId === "bubble-sort") {
    return bubbleSortVisualization
  }
  if (topicId === "insertion-sort") {
    return insertionSortVisualization
  }
  if (topicId === "selection-sort") {
    return selectionSortVisualization
  }
  if (topicId === "merge-sort") {
    return mergeSortVisualization
  }
  if (topicId === "quick-sort") {
    return quickSortVisualization
  }
  if (topicId === "heap-sort") {
    return heapSortVisualization
  }
  if (topicId === "radix-sort") {
    return radixSortVisualization
  }
  if (topicId === "counting-sort") {
    return countingSortVisualization
  }
  if (topicId === "shell-sort") {
    return shellSortVisualization
  }
  if (topicId === "linear-search") {
    return linearSearchVisualization
  }
  if (topicId === "binary-search") {
    return binarySearchVisualization
  }
  if (topicId === "interpolation-search") {
    return interpolationSearchVisualization
  }
  if (topicId === "depth-first-search") {
    return depthFirstSearchVisualization
  }
  if (topicId === "breadth-first-search") {
    return breadthFirstSearchVisualization
  }
  if (topicId === "jump-search") {
    return jumpSearchVisualization
  }
  if (topicId === "dijkstras-algorithm") {
    return dijkstrasAlgorithmVisualization
  }
  if (topicId === "bellman-ford") {
    return bellmanFordVisualization
  }
  if (topicId === "kruskal-algorithm") {
    return kruskalVisualization
  }
  if (topicId === "prim-algorithm") {
    return primAlgorithmVisualization
  }
  if (topicId === "fibonacci-dp") {
    return fibonacciDPVisualization
  }
  if (topicId === "knapsack-problem") {
    return knapsackProblemVisualization
  }
  if (topicId === "longest-common-subsequence") {
    return longestCommonSubsequenceVisualization
  }
  if (topicId === "matrix-chain-multiplication") {
    return matrixChainMultiplicationVisualization
  }
  if (topicId === "greedy-algorithms") {
    return greedyAlgorithmVisualization
  }
  if (topicId === "backtracking") {
    return backtrackingVisualization
  }
  if (topicId === "divide-and-conquer") {
    return divideAndConquerVisualization
  }
  if (topicId === "randomized-algorithms") {
    return randomizedAlgorithmVisualization
  }
  if (topicId === "approximation-algorithms") {
    return approximationAlgorithmVisualization
  }
  if (topicId === "branch-and-bound") {
    return branchAndBoundVisualization
  }
  if (topicId === "monte-carlo-methods") {
    return monteCarloMethodsVisualization
  }
  if (topicId === "genetic-algorithms") {
    return geneticAlgorithmsVisualization
  }
  if (topicId === "parallel-algorithms") {
    return parallelAlgorithmsVisualization
  }
  if (topicId === "string-matching") {
    return stringMatchingVisualization
  }
  if (topicId === "compression-algorithms") {
    return compressionAlgorithmsVisualization
  }
  if (topicId === "machine-learning-algorithms") {
    return machineLearningAlgorithmsVisualization
  }


  // In a real application, you would have visualizations for all topics
  return null
}

