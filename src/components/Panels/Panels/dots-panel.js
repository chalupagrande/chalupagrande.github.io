import React from 'react'
import { Panel } from '../Panel'
import { random } from '../../../utils/math'
import Dots from '../../../assets/sketches/Dots'

function DotsPanel(props) {
  const pos = {
    x: 10,
    y: 10,
  }
  return (
    <Panel
      key={props.index}
      title={'Dots'}
      size={{ width: 300, height: 300 }}
      resizable={false}
      defaultPosition={pos}
    >
      <Dots width={300} height={270} />
    </Panel>
  )
}

export default DotsPanel
