import React from 'react'
import { Panel } from '../Panel'
import { About } from '../../../pages/About'

function AboutPanel(props) {
  const pos = {
    x: 43,
    y: 56,
  }
  return (
    <Panel
      key={props.index}
      title={'About'}
      size={{ width: 300, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <About />
    </Panel>
  )
}

export default AboutPanel
