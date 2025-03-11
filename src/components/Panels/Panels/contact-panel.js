import React from 'react'
import { Panel } from '../Panel'
import { Contact } from '../../../pages/Contact'

function ContactPanel(props) {
  const pos = {
    x: 10,
    y: 10,
  }
  return (
    <Panel
      key={props.index}
      title={'Contact'}
      size={{ width: 300, height: 300 }}
      resizable={true}
      defaultPosition={pos}
    >
      <Contact />
    </Panel>
  )
}

export default ContactPanel
