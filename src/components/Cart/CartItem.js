import React, { useContext } from 'react'
import { StoreContext } from '../../store'

export function CartItem(props) {
  const {
    updaters: { removeItem },
  } = useContext(StoreContext)
  function remove() {
    removeItem({ ...props })
  }

  return (
    <li className="cart-item">
      <p className="remove" onClick={remove}>
        remove
      </p>
      <img src={props.images[0]} alt={props.name} />
      {props.name} -- ${(props.amount / 100).toFixed(2)}
    </li>
  )
}
