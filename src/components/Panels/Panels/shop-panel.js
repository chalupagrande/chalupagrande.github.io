import React from 'react'
import { Shop } from '../../../pages/shop/Shop'
import { Checkout } from '../../../pages/shop/Checkout'
import { Success } from '../../../pages/shop/Success'
import { Cancel } from '../../../pages/shop/Cancel'
import { Router } from '@reach/router'
import { Panel } from '../Panel'



// We still need a default export for compatibility with your existing system
export default function ShopPanel(props) {

  return (
    <Panel
      title={'Shop'}
      size={{ width: 320, height: 500 }}
      resizable={true}
      defaultPosition={{ x: 20, y: 38 }}
      padding={true}
    >

      <div>
        <Router basepath="/shop" primary={false}>
          <Shop path="/" default />
          <Checkout path="/checkout" />
          <Success path="/success" />
          <Cancel path="/cancel" />
        </Router>
      </div>
    </Panel>
  )
}
