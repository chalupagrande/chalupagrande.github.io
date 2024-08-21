import React from 'react'
import { Panel } from '../Panel'

function MusicPanel(props) {
  const pos = {
    x: 80,
    y: 80,
  }
  return (
    <Panel
      key={props.index}
      title={'Rick Roll'}
      size={{ width: 500, height: 500 }}
      padding={false}
      resizable={false}
      defaultPosition={pos}
    >
      <video autoPlay loop>
        <source
          src="https://sudo-portfolio-space.sfo2.digitaloceanspaces.com/video/astley.mp4"
          type="video/mp4"
        ></source>
      </video>
    </Panel>
  )
}

export default MusicPanel