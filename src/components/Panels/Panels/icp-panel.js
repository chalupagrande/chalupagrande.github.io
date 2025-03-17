import React from 'react'
import { Panel } from '../Panel'
import { IBMCloudPak } from '../../../pages/work/IBMCloudPak'
import { random } from '../../../utils/math'

function ICPPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'IBM Cloud Pak'}
      size={{ width: 500, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <IBMCloudPak />
    </Panel>
  )
}

export default ICPPanel
