import React from 'react'
import { Panel } from '../Panel'
import { FAQ } from '../../../pages/FAQ'
import { random } from '../../../utils/math'

function FAQPanel(props) {
  const pos = {
    x: 15,
    y: 125
  }
  return (
    <Panel
      key={props.index}
      title={'FAQ'}
      size={{ width: 320, height: 518 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <FAQ />
    </Panel>
  )
}

export default FAQPanel
