import React from 'react'
import Sketch from 'react-p5'

export function Dots({ width, height }) {
  const numCircles = 20
  const w = width || 300,
    h = height || 300
  const maxDist = 100
  const circleRadius = 10
  const strokeWidth = 3
  const color = false
  let movers = []

  class Mover {
    constructor(p5, { pos, id }) {
      this.p5 = p5
      this.color = color
        ? p5.color(p5.random(255), p5.random(255), p5.random(255))
        : 'black'
      this.id = id
      this.pos = pos
      this.el = p5.ellipse(pos.x, pos.y, circleRadius, circleRadius)
      this.connections = []
      this.dir = p5.createVector(p5.random(-1, 1), p5.random(-1, 1))
    }

    checkBounds() {
      if (this.pos.x > w || this.pos.x < 0) this.dir.x *= -1
      if (this.pos.y > h || this.pos.y < 0) this.dir.y *= -1
    }

    reflect() {
      this.dir.x *= -1
      this.dir.y *= -1
    }

    draw() {
      this.p5.fill(this.color)
      this.p5.noStroke()
      this.el = this.p5.ellipse(
        this.pos.x,
        this.pos.y,
        circleRadius,
        circleRadius
      )
    }
  }
  function setup(p5, canvasParentRef) {
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    p5.createCanvas(w, h).parent(canvasParentRef)
    movers = [...Array(numCircles)].map((e, i) => {
      let pos = p5.createVector(p5.random(w), p5.random(h))
      return new Mover(p5, { pos, id: i })
    })
  }

  function draw(p5) {
    p5.background(255)
    movers.forEach((c) => {
      // move
      c.checkBounds()
      c.pos = c.pos.add(c.dir)
      movers.forEach((c2) => {
        // skip if already visited
        // get variables
        let { x, y } = c.pos
        let { x: x2, y: y2 } = c2.pos
        let dist = c.pos.dist(c2.pos)

        // check distance
        if (dist < maxDist && c.id !== c2.id) {
          // add connections
          c.connections[c2.id] = true

          // draw line
          p5.push()
          p5.strokeWeight(strokeWidth * (1 - dist / maxDist))
          p5.stroke('black')
          p5.line(x, y, x2, y2)
          p5.pop()
        } else {
          // remove connection
          c.connections[c2.id] = false
        }
      })
    })
    movers.forEach((c) => c.draw())
  }

  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  )
}

export default Dots
