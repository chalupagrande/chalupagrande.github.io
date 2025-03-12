import React from 'react'
import { Panel } from '../Panel'
import { Shop } from '../../../pages/shop/Shop'

function ShopPanel(props) {
  const pos = {
    x: 30,
    y: 50,
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
