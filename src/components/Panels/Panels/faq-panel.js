import React from 'react'
import { Panel } from '../Panel'
import { FAQ } from '../../../pages/FAQ'

function FAQPanel(props) {
  const pos = {
    x: 30,
    y: 10,
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
