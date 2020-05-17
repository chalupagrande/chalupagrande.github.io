import React from 'react'
import { Panel } from '../Panel'
import { random } from '../../../utils/math'
import SnakeGame2 from '../../../assets/sketches/SnakeGame2'

function SnakePanel(props) {
  const pos = {
    x: random(0, window.innerWidth - 200),
    y: random(0, window.innerHeight - 100),
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
