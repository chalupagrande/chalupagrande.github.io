import React from 'react'
import { Panel } from '../Panel'
import { Work } from '../../../pages/work/Work'

function WorkPanel(props) {
  const pos = {
    x: 30,
    y: 10,
  }
  return (
    <Panel
      key={props.index}
      title={'Work'}
      size={{ width: 500, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Work />
    </Panel>
  )
}

export default WorkPanel
