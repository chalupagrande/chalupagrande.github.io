import React from 'react'
import { Panel } from '../Panel'
import { Contact } from '../../../pages/Contact'
import { random } from '../../../utils/math'

function ContactPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
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
