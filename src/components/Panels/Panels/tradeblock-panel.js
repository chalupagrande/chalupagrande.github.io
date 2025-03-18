import React from 'react'
import { Panel } from '../Panel'
import { Tradeblock } from '../../../pages/work/Tradeblock'
import { random } from '../../../utils/math'

function TradeblockPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'Tradeblock'}
      size={{ width: 320, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Tradeblock />
    </Panel>
  )
}

export default TradeblockPanel
