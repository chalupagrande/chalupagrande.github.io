import React from 'react'
import { Panel } from '../Panel'
import { random } from '../../../utils/math'
import { mobileCheck } from '../../../utils/userAgent'

function WordPanel(props) {
  const { togglePanel } = props
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }

  const isMobile = mobileCheck()
  return (
    <Panel
      key={props.index}
      title={'Games'}
      size={{ width: 200, height: 200 }}
      resizable={true}
      background={true}
      padding={true}
      defaultPosition={pos}
    >
      <>
        <p className="super-small">
          <span className="bold">Window Manager</span>
          <br />
          Click the things below to discover windows
        </p>
        <ul>
          <li className="panel-name" onClick={() => togglePanel('dots', true)}>
            Dots
          </li>
          <li className="panel-name" onClick={() => togglePanel('life', true)}>
            Game of Life
          </li>
          <li className="panel-name" onClick={() => togglePanel('music', true)}>
            Music
          </li>
          {!isMobile && (
            <li
              className="panel-name"
              onClick={() => togglePanel('snake', true)}
            >
              Snake
            </li>
          )}
        </ul>
      </>
    </Panel>
  )
}

export default WordPanel
