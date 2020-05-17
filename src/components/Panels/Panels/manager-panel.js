import React from 'react'
import { Panel } from '../Panel'
import { random } from '../../../utils/math'
import { mobileCheck } from '../../../utils/userAgent'

function WordPanel(props) {
  const { togglePanel } = props
  const pos = {
    x: random(0, window.innerWidth - 200),
    y: random(0, window.innerHeight - 100),
  }

  const isMobile = mobileCheck()
  return (
    <Panel
      key={props.index}
      title={'Manager'}
      size={{ width: 200, height: 100 }}
      resizable={true}
      background={true}
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
