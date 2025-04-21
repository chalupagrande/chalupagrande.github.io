import React from 'react'
import Sketch from 'react-p5'

export function Terrain({ width, height, paused }) {
  // options
  let canvasHeight = height
  let canvasWidth = width
  // size of terrain grid
  let w = 2000
  let h = 3000
  // size of each individual triangle cell
  let scl = 75
  // height of mountains
  let minHeight = -500
  let maxHeight = 500
  let roadHeight = -200
  let cameraRotation = Math.PI / 2.5
  let roadWidth = 0
  // flying speed
  let speed = 0.01
  // 'turbulence' of mountains
  let inc = 0.07

  // constants
  let terrain = []
  let start = 0
  let rows, cols

  function setup(p5, canvasParentRef) {
    p5.createCanvas(canvasWidth, canvasHeight, p5.WEBGL).parent(canvasParentRef);
    rows = p5.floor(w / scl)
    cols = p5.floor(h / scl)

    //create 2d array 
    for (let y = 0; y < rows; y++) {
      terrain[y] = []
      for (let x = 0; x < cols; x++) {
        terrain[y][x] = 0
      }
    }
  }

  function draw(p5) {
    p5.frameRate(30)
    // p5.orbitControl()

    // populate terrain array w/ initial values
    let yoff = 0
    for (let y = 0; y < rows; y++) {
      // start x seed at incrementing value (for flying effect)
      let xoff = start
      for (let x = 0; x < cols; x++) {
        // if you want a road in the middle...
        if (y > rows / 2 - roadWidth && y < rows / 2 + roadWidth) {
          terrain[y][x] = roadHeight
          // otherwise give the give the mountain a height based on 
          // seed offset
        } else {
          terrain[y][x] = p5.map(p5.noise(xoff, yoff), 0, 1, minHeight, maxHeight)
        }
        xoff += inc
      }
      yoff += inc
    }

    // redraw & orient camera
    p5.background(0)
    p5.rotateX(cameraRotation);
    p5.translate(-w / 2, -h, -100);
    // draw terrain
    p5.fill(121, 208, 237, 0);
    p5.stroke(121, 208, 237);
    for (var y = 0; y < cols - 1; y++) {
      p5.beginShape(p5.TRIANGLE_STRIP);
      for (var x = 0; x < rows; x++) {
        // x and y values stay the same
        // z value changes based on noise value
        p5.vertex(x * scl, y * scl, terrain[x][y]);
        p5.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      }
      p5.endShape();
    }
    start -= speed
  }

  return <Sketch setup={setup} draw={draw} />
}