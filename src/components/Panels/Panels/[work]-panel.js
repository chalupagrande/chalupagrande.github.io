import React from 'react'
import { Panel } from '../Panel'

function WorkPanel({ content: Content, title, ...props }) {
  const pos = {
    x: 30,
    y: 10,
  }
  return (
    <Panel
      key={props.index}
      title={`Work-${title}`}
      size={{ width: 500, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Content />
    </Panel>
  )
}

export default WorkPanel
