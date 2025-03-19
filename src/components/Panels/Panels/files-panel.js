import React from 'react'
import { Panel } from '../Panel'
import { About } from '../../../pages/About'

function AboutPanel(props) {
  const { togglePanel } = props
  const pos = {
    x: 33,
    y: 66,
  }
  return (
    <Panel
      key={props.index}
      title={'Files'}
      size={{ width: 305, height: 518 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <h5>Video</h5>
      <ul>
        <li className="panel-name" onClick={() => togglePanel('pointcloud', true)}>
          lazy_sunday_pointcloud-2022.mp4
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=GtpZDYSYy5s"
          >
            ARt_augmented_reality_mural_documentary-2019.mp4
          </a>
        </li>
      </ul>
      <h5>Scripts</h5>
      <ul>
        <li className="panel-name" onClick={() => togglePanel('dots', true)}>
          Dots.js
        </li>
        <li className="panel-name" onClick={() => togglePanel('life', true)}>
          Game of Life.js
        </li>
        <li className="panel-name" onClick={() => togglePanel('life', true)}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/other/ransomware.zip"
          >
            ransomware.zip
          </a>
        </li>
      </ul>
    </Panel >
  )
}

export default AboutPanel
