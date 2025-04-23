import React from 'react'
import { Panel } from '../Panel'
import { Dots } from '../../../assets/sketches/Dots'
import { random } from '../../../utils/math'

function DotsPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'Dots'}
      size={{ width: 300, height: 300 }}
      resizable={false}
      defaultPosition={pos}
    >
      <Dots width={300} height={270} />
    </Panel>
  )
}

export default DotsPanel
