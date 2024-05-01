import React from 'react'
import { Panel } from '../Panel'
import { random } from '../../../utils/math'
import { mobileCheck } from '../../../utils/userAgent'

function WordPanel(props) {
  const { togglePanel } = props
  const pos = {
    x: window.innerWidth - 250,
    y: 250,
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
          <li className="panel-name" onClick={() => togglePanel('music', true)}>
            Music
          </li>
          <li className="panel-name" onClick={() => {
            alert("Redirecting to Leaderboard.etc.cr")
            window.location.href = 'https://leaderboard.etc.cr'
          }}>
            Leaderboard
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
