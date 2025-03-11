import React from 'react'
import { Panel } from '../Panel'
import { About } from '../../../pages/About'

function AboutPanel(props) {
  const pos = {
    x: 10,
    y: 10,
  }
  return (
    <Panel
      key={props.index}
      title={'About'}
      size={{ width: 300, height: 500 }}
      resizable={true}
      defaultPosition={pos}
    >
      <About />
    </Panel>
  )
}

export default AboutPanel
