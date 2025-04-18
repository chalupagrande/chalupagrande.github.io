import React from 'react'
import { Panel } from '../Panel'
import { MusicPlayer } from '../../MusicPlayer'
import { Terrain } from '../../../assets/sketches/Terrain'

function MusicPanel(props) {
  const pos = {
    x: 82,
    y: 407
  }
  return (
    <Panel
      key={props.index}
      title={'Tunez'}
      size={{ width: 560, height: 350 }}
      padding={false}
      resizable={false}
      defaultPosition={pos}
    >
      <MusicPlayer />
      <div className="visualizer">
        <Terrain width={560} height={350} />
      </div>
    </Panel>
  )
}


export default MusicPanel