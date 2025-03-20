import React from 'react'
import { Router } from '@reach/router'
import { Shop } from './Shop'
import { Checkout } from './Checkout'
import { Success } from './Success'
import { Cancel } from './Cancel'

export function ShopRouter() {
  return (
    <Router>
      <Shop path="/" />
      <Checkout path="checkout" />
      <Success path="success" />
      <Cancel path="cancel" />
    </Router>
  )
}
