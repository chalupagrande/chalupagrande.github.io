import React from 'react'
import { Panel } from '../Panel'
import { mobileCheck } from '../../../utils/userAgent'

function JunkPanel(props) {
  const pos = {
    x: 130,
    y: 430
  }

  const isMobile = mobileCheck()
  return (
    <Panel
      key={props.index}
      title={'Junk'}
      size={{ width: 330, height: 400 }}
      resizable={true}
      background={true}
      padding={true}
      defaultPosition={pos}
    >
      <>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://chalupagrande.github.io/trollscripts/views/phonenumbers.html"
            >
              Phone Number Madness
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=vgjkYxa8W0E"
            >
              Priority Mail Sticker Animation
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://chalupagrande.github.io/sandbox/views/skull.html"
            >
              3D Skull (ThreeJS)
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://chalupagrande.github.io/sandbox/views/labryinth.html"
            >
              Mutating Labyrinth (using SVG stroke)
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://chalupagrande.github.io/sandbox/views/colors.html"
            >
              CSS Blendmodes demo
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://chalupagrande.github.io/sandbox/views/tiles.html"
            >
              Animating Tiles (GSAP)
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://chalupagrande.github.io/sandbox/views/portrait.html"
            >
              Self Portrait with Tile Animation
            </a>
          </li>
        </ul>
      </>
    </Panel>
  )
}

export default JunkPanel
