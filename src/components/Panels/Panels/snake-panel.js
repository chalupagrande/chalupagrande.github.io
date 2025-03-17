import React from 'react'
import { Panel } from '../Panel'
import { random } from '../../../utils/math'
import SnakeGame2 from '../../../assets/sketches/SnakeGame2'

function SnakePanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'Snake'}
      size={{ width: 400, height: 430 }}
      resizable={false}
      padding={false}
      defaultPosition={pos}
    >
      <SnakeGame2 />
    </Panel>
  )
}

export default SnakePanel
