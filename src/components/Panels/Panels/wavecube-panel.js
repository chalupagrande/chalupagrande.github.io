import React from 'react'
import { Panel } from '../Panel'
import { random } from '../../../utils/math'
import { WaveCube } from '../../../assets/sketches/WaveCube'

function WaveCubePanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'Wave Cube'}
      size={{ width: 300, height: 330 }}
      resizable={false}
      defaultPosition={pos}
    >
      <WaveCube />
    </Panel>
  )
}

export default WaveCubePanel
