import React from 'react'
import { Panel } from '../Panel'
import { About } from '../../../pages/About'

function AboutPanel(props) {
  const pos = {
    x: 33,
    y: 66,
  }
  return (
    <Panel
      key={props.index}
      title={'About'}
      size={{ width: 305, height: 518 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <About />
    </Panel>
  )
}

export default AboutPanel
