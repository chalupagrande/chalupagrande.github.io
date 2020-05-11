import React, { useContext } from 'react'
import { StoreContext } from '../../store'
import { CartItem } from './CartItem'
import './Cart.css'

export function Cart() {
  const {
    store: { cart },
    updaters: { clearCart },
  } = useContext(StoreContext)

  const items = cart.map((e) => <CartItem key={e.sku} {...e} />)
  const total = cart.reduce((a, e) => a + e.amount, 0)

  return (
    <div className="cart">
      <h3>Cart</h3>
      <ol>{items}</ol>
      <h4>Total: {(total / 100).toFixed(2)}</h4>
    </div>
  )
}
