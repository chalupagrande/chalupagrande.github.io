import React from 'react'
import { Panel } from '../Panel'
import { Shop } from '../../../pages/shop/Shop'
import { random } from '../../../utils/math'

function ShopPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'Shop'}
      size={{ width: 500, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Shop />
    </Panel>
  )
}

export default ShopPanel
