import React from 'react'
import { Panel } from '../Panel'
import { Inbanx } from '../../../pages/work/Inbanx'
import { random } from '../../../utils/math'

function ICPPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'Inbanx'}
      size={{ width: 320, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Inbanx />
    </Panel>
  )
}

export default ICPPanel
