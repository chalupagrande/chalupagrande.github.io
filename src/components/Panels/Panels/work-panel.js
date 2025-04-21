import React from 'react'
import { Panel } from '../Panel'
import { Work } from '../../../pages/work/Work'

function WorkPanel(props) {
  const pos = {
    x: 51,
    y: 93
  }
  return (
    <Panel
      key={props.index}
      title={'Work'}
      size={{ width: 315, height: 520 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Work />
    </Panel>
  )
}

export default WorkPanel
