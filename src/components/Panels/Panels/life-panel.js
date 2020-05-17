import React from 'react'
import { Panel } from '../Panel'
import { random } from '../../../utils/math'
import GameOfLife from '../../../assets/sketches/GameOfLife'

function DotsPanel(props) {
  const pos = {
    x: random(0, window.innerWidth - 200),
    y: random(0, window.innerHeight - 100),
  }
  return (
    <Panel
      key={props.index}
      title={'Life'}
      size={{ width: 500, height: 500 }}
      padding={false}
      resizable={false}
      defaultPosition={pos}
    >
      <GameOfLife />
    </Panel>
  )
}

export default DotsPanel
