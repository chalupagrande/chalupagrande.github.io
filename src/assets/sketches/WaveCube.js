import React from 'react'
import Sketch from 'react-p5'

export function WaveCube() {
  let width = 300
  let height = 300
  let boxWidth = 15
  let boxHeight = 300
  let spacing = 3
  let angle = 0
  let maxD

  function setup(p5, canvasParentRef) {
    p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef);
    maxD = p5.dist(0, 0, 200, 200)
  }

  function draw(p5) {
    if (angle >= 8 * Math.PI) angle = 0
    p5.background(100)
    p5.rotateX(p5.QUARTER_PI)
    p5.rotateY(p5.QUARTER_PI)
    p5.ortho(-width, width, height, -height, 0, 1500)
    p5.directionalLight(255, 255, 255, 1, -1, 0)
    p5.rectMode(p5.CENTER)

    for (let z = 0; z < width; z += boxWidth + spacing) {
      for (let x = 0; x < width; x += boxWidth + spacing) {
        p5.push()
        let d = p5.dist(x, z, width / 2, height / 2,)
        let offset = p5.map(d, 0, maxD, -p5.PI, p5.PI)
        let a = angle + offset
        let h = p5.map(p5.sin(a), -1, 1, 10, boxHeight)
        p5.normalMaterial(255)
        p5.translate(x - width / 2, 0, z - height / 2)
        p5.box(boxWidth, h, boxWidth)
        p5.pop()
      }
    }
    angle -= 0.01
  }

  return (
    <Sketch
      setup={setup}
      draw={draw}
    />
  )

}