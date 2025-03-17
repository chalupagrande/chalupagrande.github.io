import React from 'react'
import { Panel } from '../Panel'
import { random } from '../../../utils/math'

function IntroPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'Intro'}
      size={{ width: 200, height: 100 }}
      defaultPosition={pos}
    >
      <p>Intro Panel</p>
    </Panel>
  )
}

export default IntroPanel
