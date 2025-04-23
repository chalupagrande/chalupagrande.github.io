import React from 'react'
import Sketch from 'react-p5'
import { random } from '../../utils/math'

export const SnakeGame = React.memo(function SnakeGame(props) {
  const canvasSize = props.boardSize || 400
  // game set later
  let boardSize = props.tileSize || 10
  let game = null
  let snake = null
  let scl = canvasSize / boardSize
  let fps = 5
  let score = 1

  function setup(p5, canvasParentRef) {
    p5.createCanvas(canvasSize, canvasSize).parent(canvasParentRef)
    p5.keyPressed = (e) => {
      e.preventDefault()
      const fuckery = score >= 21 ? -1 : 1
      if (p5.keyCode === p5.LEFT_ARROW) {
        snake.setHeading(-1 * fuckery, 0)
      } else if (p5.keyCode === p5.RIGHT_ARROW) {
        snake.setHeading(1 * fuckery, 0)
      } else if (p5.keyCode === p5.UP_ARROW) {
        snake.setHeading(0, -1 * fuckery)
      } else if (p5.keyCode === p5.DOWN_ARROW) {
        snake.setHeading(0, 1 * fuckery)
      }
    }
    game = new Game(p5, boardSize, boardSize)
  }

  function draw(p5) {
    fps && p5.frameRate(fps)
    let status = game.step()
    if (status === -1) {
      game = new Game(p5, boardSize, boardSize)
      score = 1
    } else if (status === 1) {
      score += 1
    }

    drawBoxes(p5)
  }

  // does the drawing
  function drawBoxes(p5) {
    p5.background(100)
    let snakePos = snake.positions
    let applePos = game.baitLocation

    p5.noStroke()
    snakePos.forEach((pos, i) => {
      p5.fill('black')
      p5.rect(pos.x * scl, pos.y * scl, scl, scl)
    })

    p5.fill(255, 0, 0)
    p5.rect(applePos.x * scl, applePos.y * scl, scl, scl)
    p5.fill(255)
    p5.textSize(20)
    p5.textAlign(p5.CENTER)
    p5.text(score, applePos.x * scl + scl / 2, applePos.y * scl + scl * 0.66)
  }

  class Game {
    constructor(p5, boardWidth, boardHeight) {
      this.p5 = p5
      this.opts = { boardWidth, boardHeight }
      this.board = []
      this.baitLocation = null

      // init board
      for (let row = 0; row < boardWidth; row++) {
        let col = [...Array(boardHeight)].map(() => 0)
        this.board.push(col)
      }
      snake = new Snake(p5, this.opts)
      this.addSnake(snake)
      this.newBait()
    }

    set(pos, val) {
      this.board[pos.x][pos.y] = val
    }

    get(pos) {
      return this.board[pos.x][pos.y]
    }

    addSnake(snake) {
      snake.positions.forEach((pos) => this.set(pos, -1))
    }

    newBait() {
      let curVal = -1
      let pos
      while (curVal === -1 || curVal === 1) {
        let x = Math.floor(random(this.opts.boardWidth))
        let y = Math.floor(random(this.opts.boardHeight))
        pos = this.p5.createVector(x, y)
        curVal = this.get(pos)
      }
      this.baitLocation = pos
      this.set(pos, 1)
    }

    step() {
      let { oldPositions, newPositions } = snake.move()

      let status = this.updateBoard(
        oldPositions,
        newPositions,
        this.baitLocation
      )
      if (status === 1) {
        snake.grow()
        this.newBait()
      }
      return status
    }

    updateBoard(prevPos, curPos, bait) {
      try {
        prevPos.forEach((pre) => this.set(pre, 0))
        curPos.forEach((cur) => this.set(cur, -1))
      } catch {
        return -1
      }
      let positionsCopy = [...curPos]
      for (let i = 0; i < positionsCopy.length; i++) {
        let curPiece = positionsCopy[i]
        positionsCopy.splice(i, 1)
        let rest = positionsCopy
        // runs into itself

        for (let o = 0; o < rest.length; o++) {
          let other = rest[o]

          if (curPiece.equals(other)) {
            return -1
          }
        }
        // out of bounds
        if (
          curPiece.x >= this.opts.boardWidth ||
          curPiece.x < 0 ||
          curPiece.y >= this.opts.boardHeight ||
          curPiece.y < 0
        )
          return -1
        // finds bait
        if (curPiece.equals(bait)) {
          return 1
        }
        return 0
      }
    }
  }

  class Snake {
    constructor(p5, opts) {
      this.p5 = p5
      this.opts = opts
      let initialPos = p5.createVector(0, 0)
      this.headPos = initialPos
      this.positions = [initialPos]

      this.heading = p5.createVector(1, 0)
      this.length = this.positions.length
      this.shouldGrow = false
    }

    setHeading(x, y) {
      let newHeading = this.p5.createVector(x, y)
      let combined = this.heading.add(newHeading)
      // cant go backwards
      if (combined.x === 0 && combined.y === 0) return
      this.heading = newHeading
      return this.heading
    }

    move() {
      let oldPositions = this.positions.map((p) => p.copy())
      let newPositions = []
      for (let i = 0; i < this.positions.length; i++) {
        let curPos = this.positions[i].copy()
        if (i === 0) {
          newPositions.push(curPos.add(this.heading))
          if (this.shouldGrow) {
            newPositions.push(...this.positions)
            break
          }
        } else {
          newPositions.push(this.positions[i - 1])
        }
      }
      this.shouldGrow = false
      this.headPos = newPositions[0]
      this.positions = newPositions
      return {
        newPositions,
        oldPositions,
      }
    }

    grow() {
      this.shouldGrow = true
    }
  }

  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  )
})
