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

// Function to get visualization for a topic
export function getVisualization(topicId: string): Visualization | null {
  // For now, we only have visualization for arrays
  if (topicId === "arrays") {
    return arrayVisualization
  }

  // In a real application, you would have visualizations for all topics
  return null
}

