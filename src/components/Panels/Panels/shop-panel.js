import React from 'react'
import { Shop } from '../../../pages/shop/Shop'
import { Checkout } from '../../../pages/shop/Checkout'
import { Success } from '../../../pages/shop/Success'
import { Cancel } from '../../../pages/shop/Cancel'

// Define the routes for the Shop panel
export const routes = [
  ({ path, ...props }) => <Shop path="/" {...props} />,
  ({ path, ...props }) => <Checkout path="checkout" {...props} />,
  ({ path, ...props }) => <Success path="success" {...props} />,
  ({ path, ...props }) => <Cancel path="cancel" {...props} />
]

// Define panel properties
export const defaultPosition = { x: 20, y: 38 }
export const size = { width: 340, height: 662 }
export const resizable = true
export const padding = "0.5rem"

// We still need a default export for compatibility with your existing system
export default function ShopPanel(props) {
  return null // This won't be used when routes are defined
}
