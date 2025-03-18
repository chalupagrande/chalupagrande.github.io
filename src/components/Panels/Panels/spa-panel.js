import React from 'react'
import { Panel } from '../Panel'
import { Sparts } from '../../../pages/work/Sparts'
import { random } from '../../../utils/math'

function SPAPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'SPARTS'}
      size={{ width: 320, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Sparts />
    </Panel>
  )
}

export default SPAPanel
