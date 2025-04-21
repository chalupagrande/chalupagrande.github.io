import React from 'react'
import { Panel } from '../Panel'
import { IBMCloudApplicationMonitoring } from '../../../pages/work/IBMCloudApplicationMonitoring'
import { random } from '../../../utils/math'

function ICAMPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'ICAM'}
      size={{ width: 320, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <IBMCloudApplicationMonitoring />
    </Panel>
  )
}

export default ICAMPanel
