import React from 'react'
import Sketch from 'react-p5'
import { random } from '../../utils/math'

export default function SnakeGame(props) {
  let game,
    canvasSize = 400,
    w = 10,
    h = 10,
    gameSize = 10,
    gameSpeed = 4,
    scl = canvasSize / gameSize

  function setup(p5, canvasParentRef) {
    p5.createCanvas(canvasSize, canvasSize).parent(canvasParentRef)
    p5.keyPressed = (e) => {
      e.preventDefault()
      let snake = game.snake
      if (p5.keyCode === p5.LEFT_ARROW) {
        snake.setHeading(-1, 0)
      } else if (p5.keyCode === p5.RIGHT_ARROW) {
        snake.setHeading(1, 0)
      } else if (p5.keyCode === p5.UP_ARROW) {
        snake.setHeading(0, -1)
      } else if (p5.keyCode === p5.DOWN_ARROW) {
        snake.setHeading(0, 1)
      }
    }
    game = new Game(p5, gameSize, gameSize)
  }

  function draw(p5) {
    gameSpeed && p5.frameRate(gameSpeed)
    let { inputs, raw } = game.snake.look(game)

    let status = game.step()

    if (status === -1) {
      game = new Game(p5, gameSize, gameSize)
      // game.addSnake(generation.next())
    } else if (status === 1) {
      // game.snake.strengthen()
    }

    drawBoxes(p5)
  }

  function drawBoxes(p5) {
    p5.background(100)
    let snakePos = game.snake.positions
    let applePos = game.baitLocation
    p5.noStroke()
    p5.fill(0)
    snakePos.forEach((pos) => {
      p5.rect(pos.x * scl, pos.y * scl, scl, scl)
    })

    p5.fill(255, 0, 0)
    p5.rect(applePos.x * scl, applePos.y * scl, scl, scl)
  }

  return <Sketch setup={setup} draw={draw} />
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
    if (this.shouldGrow) debugger
    let next = this.headPos.add(this.heading)
    this.headPos = next
    if (!this.shouldGrow) this.positions.pop()
    this.shouldGrow = false
    this.positions = [next, ...this.positions]
    return { positions: this.positions, heading: this.heading }
  }

  grow(pos) {
    this.shouldGrow = true
  }

  look(game) {
    const { gameSize } = this.opts
    // look forward
    const { w, h } = game.opts
    let raw = {}
    for (let xDir = -1; xDir <= 1; xDir++) {
      for (let yDir = -1; yDir <= 1; yDir++) {
        if (xDir === 0 && yDir === 0) continue
        // init result variables
        raw[`V${xDir}.${yDir}`] = null
        raw[`D${xDir}.${yDir}`] = 0
        let dir = this.p5.createVector(xDir, yDir)
        let last = this.headPos
        let i = 8
        while (i) {
          let scanner = dir.add(last)
          // out of bounds
          if (
            scanner.x >= w ||
            scanner.x < 0 ||
            scanner.y >= h ||
            scanner.y < 0
          ) {
            raw[`V${xDir}.${yDir}`] = -1
            raw[`D${xDir}.${yDir}`] += 1
            break
          } else {
            let val = game.get(scanner)
            raw[`V${xDir}.${yDir}`] = val
            raw[`D${xDir}.${yDir}`] += 1
            last = scanner
            if (val === 1 || val === -1) break
          }
          i--
        }
      }
    }
    // result === human decipherable object
    // ensure inputs are in the same
    let inputs = [
      raw['D0.1'] / gameSize,
      raw['V0.1'],
      raw['D0.-1'] / gameSize,
      raw['V0.-1'],
      raw['D1.0'] / gameSize,
      raw['V1.0'],
      raw['D1.1'] / gameSize,
      raw['V1.1'],
      raw['D1.-1'] / gameSize,
      raw['V1.-1'],
      raw['D-1.0'] / gameSize,
      raw['V-1.0'],
      raw['D-1.1'] / gameSize,
      raw['V-1.1'],
      raw['D-1.-1'] / gameSize,
      raw['V-1.-1'],
    ]
    return { inputs, raw }
  }
}

class Game {
  constructor(p5, w, h) {
    this.p5 = p5
    this.opts = { w, h, gameSize: w }
    this.board = []
    this.baitLocation = null

    // init board
    for (let row = 0; row < w; row++) {
      let col = [...Array(h)].map(() => 0)
      this.board.push(col)
    }
    this.newBait()
    this.snake = new Snake(p5, this.opts)
  }

  set(pos, val) {
    this.board[pos.x][pos.y] = val
  }

  get(pos) {
    return this.board[pos.x][pos.y]
  }

  addSnake(snake) {
    this.snake = snake
    snake.positions.forEach((pos) => this.set(pos, -1))
  }

  newBait() {
    let curVal = -1,
      pos
    while (curVal === -1 || curVal === 1) {
      let x = Math.floor(random(this.opts.w))
      let y = Math.floor(random(this.opts.h))
      pos = this.p5.createVector(x, y)
      curVal = this.get(pos)
    }
    this.baitLocation = pos
    this.set(pos, 1)
  }

  step() {
    let prevSnakePos = [...this.snake.positions]
    let { positions } = this.snake.move()
    let status = this.updateBoard(prevSnakePos, positions, this.baitLocation)
    if (status === 1) {
      this.snake.grow()
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
    for (let c = 0; c < curPos.length; c++) {
      let cur = curPos[c]
      let rest = [...curPos]
      rest.splice(c, 1)
      // runs into itself
      for (let o = 0; o < rest.length; o++) {
        let other = rest[o]
        if (cur.equals(other)) {
          return -1
        }
      }
      // out of bounds
      if (
        cur.x >= this.opts.w ||
        cur.x < 0 ||
        cur.y >= this.opts.h ||
        cur.y < 0
      )
        return -1
      // finds bait
      if (cur.equals(bait)) return 1
      return 0
    }
  }
}
