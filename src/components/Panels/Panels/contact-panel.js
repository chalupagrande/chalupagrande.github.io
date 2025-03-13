import React from 'react'
import { Panel } from '../Panel'
import { Contact } from '../../../pages/Contact'

function ContactPanel(props) {
  const pos = {
    x: 35,
    y: 90,
  }
  return (
    <Panel
      key={props.index}
      title={'Contact'}
      size={{ width: 500, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Contact />
    </Panel>
  )
}

export default ContactPanel
