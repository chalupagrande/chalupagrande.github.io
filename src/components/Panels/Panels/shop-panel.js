import React from 'react'
import { Panel } from '../Panel'
import { Shop } from '../../../pages/shop/Shop'
import { random } from '../../../utils/math'

function ShopPanel(props) {
  const pos = {
    x: 20,
    y: 38
  }
  return (
    <Panel
      key={props.index}
      title={'Shop'}
      size={{ width: 340, height: 662 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Shop />
    </Panel>
  )
}

export default ShopPanel
