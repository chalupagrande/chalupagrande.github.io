import React from 'react'
import { Panel } from '../Panel'
import { Work } from '../../../pages/work/Work'
import { random } from '../../../utils/math'

function WorkPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'Work'}
      size={{ width: 315, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Work />
    </Panel>
  )
}

export default WorkPanel
