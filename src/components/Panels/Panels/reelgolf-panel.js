import React from 'react'
import { Panel } from '../Panel'
import { ReelGolf } from '../../../pages/work/ReelGolf'
import { random } from '../../../utils/math'

function ReelGolfPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'ReelGolf'}
      size={{ width: 320, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <ReelGolf />
    </Panel>
  )
}

export default ReelGolfPanel
