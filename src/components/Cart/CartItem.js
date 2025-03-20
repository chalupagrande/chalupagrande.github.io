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
      <img className="remove" onClick={remove} src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/red-trash-can-icon.svg" alt="Remove" />
      <img src={props.images[0]} alt={props.name} />
      {props.name} -- ${(props.amount / 100).toFixed(2)}
    </li>
  )
}
