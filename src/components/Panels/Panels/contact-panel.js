import React from 'react'
import { Panel } from '../Panel'
import { Contact } from '../../../pages/Contact'
import { random } from '../../../utils/math'

function ContactPanel(props) {
  const pos = {
    x: 40,
    y: 163
  }
  return (
    <Panel
      key={props.index}
      title={'Contact'}
      size={{ width: 320, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Contact />
    </Panel>
  )
}

export default ContactPanel
