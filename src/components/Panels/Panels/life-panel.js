import React from 'react'
import { Panel } from '../Panel'
import { random } from '../../../utils/math'
import { GameOfLife } from '../../../assets/sketches/GameOfLife'

function LifePanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'Life'}
      size={{ width: 502, height: 531 }}
      padding={false}
      resizable={false}
      defaultPosition={pos}
    >
      <GameOfLife />
    </Panel>
  )
}

export default LifePanel
