import React from 'react'
import { Panel } from '../Panel'
import { FAQ } from '../../../pages/FAQ'
import { random } from '../../../utils/math'

function FAQPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'FAQ'}
      size={{ width: 500, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <FAQ />
    </Panel>
  )
}

export default FAQPanel
