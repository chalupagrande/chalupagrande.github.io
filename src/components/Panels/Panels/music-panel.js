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
      <video autoPlay loop width="500" height="500">
        <source
          src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/video/astley.mp4"
          type="video/mp4"
        ></source>
      </video>
    </Panel>
  )
}

export default MusicPanel