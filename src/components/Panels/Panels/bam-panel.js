import React from 'react'
import { Panel } from '../Panel'
import { BAM } from '../../../pages/work/BAM'
import { random } from '../../../utils/math'

function BAMPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'BAM'}
      size={{ width: 500, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <BAM />
    </Panel>
  )
}

export default BAMPanel
