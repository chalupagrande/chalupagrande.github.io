import React from 'react'
import { Panel } from '../Panel'
import { Legal } from '../../../pages/Legal'
import { random } from '../../../utils/math'

function LegalPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'Legal'}
      size={{ width: 320, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Legal />
    </Panel>
  )
}

export default LegalPanel
