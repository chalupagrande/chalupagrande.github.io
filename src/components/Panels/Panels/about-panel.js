import React from 'react'
import { Panel } from '../Panel'
import { About } from '../../../pages/About'

function AboutPanel(props) {
  const pos = {
    x: 25,
    y: 75,
  }
  return (
    <Panel
      key={props.index}
      title={'About'}
      size={{ width: 315, height: 518 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <About />
    </Panel>
  )
}

export default AboutPanel
