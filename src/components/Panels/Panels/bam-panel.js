import React from 'react'
import { Panel } from '../Panel'
import { Bam } from '../../../pages/work/Bam'
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
      size={{ width: 320, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Bam />
    </Panel>
  )
}

export default BAMPanel
