import React from 'react'
import Sketch from 'react-p5'

export default function GameOfLife(props) {
  let cols = 50
  let rows = 50
  let unitSize = 10
  let grid
  let next
  let percentOn = 0.08

  function board(p5, rows, cols, empty) {
    let arr = [...Array(cols).keys()]
    let a = arr.map(() =>
      [...Array(rows).keys()].map(() => {
        if (empty) return 0
        else {
          return p5.random() < percentOn ? 1 : 0
        }
      })
    )
    return a
  }

  function handleClick(p5) {
    if (p5.mouseIsPressed) {
      let row = p5.floor(p5.mouseX / unitSize)
      let col = p5.floor(p5.mouseY / unitSize)
      if (row > 0 && col > 0 && row < rows && col < cols) grid[row][col] = 1
    }
  }

  function process() {
    for (let row = 0; row < cols; row++) {
      for (let col = 0; col < rows; col++) {
        let val = grid[row][col]
        let sum = getNeighbors(grid, row, col)
        if (val == 0 && sum == 3) {
          next[row][col] = 1
        } else if (val == 1 && (sum < 2 || sum > 3)) {
          next[row][col] = 0
        } else {
          next[row][col] = val
        }
      }
    }
  }

  // x and y refer to grid index in this case
  function getNeighbors(grid, x, y) {
    let sum = 0
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let xLoc = x + i
        let yLoc = y + j
        if (!grid[xLoc]) xLoc = xLoc < 0 ? cols - 1 : 0
        if (!grid[yLoc]) yLoc = yLoc < 0 ? rows - 1 : 0
        sum += grid[xLoc][yLoc]
      }
    }
    sum -= grid[x][y]
    return sum
  }

  function setup(p5, canvasParentRef) {
    p5.createCanvas(cols * unitSize, rows * unitSize).parent(canvasParentRef)
    grid = board(p5, rows, cols)
    next = board(p5, rows, cols, true)
  }

  function render(p5) {
    for (let row = 0; row < cols; row++) {
      for (let col = 0; col < rows; col++) {
        let x = row * unitSize
        let y = col * unitSize
        if (grid[row][col] === 1) {
          p5.fill(255)
          p5.stroke(0)
          p5.rect(x, y, unitSize, unitSize)
        }
      }
    }
  }

  function draw(p5) {
    p5.frameRate(10)
    p5.background(0)
    handleClick(p5)
    render(p5)
    process()
    grid = next
  }

  return <Sketch setup={setup} draw={draw} />
}
