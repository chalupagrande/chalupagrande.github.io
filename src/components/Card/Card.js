import React, { useContext } from 'react'
import { StoreContext } from '../../store'
import Carousel from '../Coursel'
import './Card.css'

export default function Card(props) {
  const {
    store,
    updaters: { addToCart },
  } = useContext(StoreContext)

  function handleClick() {
    addToCart(props)
  }

  const isInCart = store.cart.find((e) => e.sku === props.sku) || false

  return (
    <div className="card">
      <Carousel images={props.images} />
      <div className="card__footer">
        <h4>{props.name}</h4>
        <p>
          Price: <strong>${(props.amount / 100).toFixed(2)}</strong>
        </p>
        <div className="card__footer__action">
          <button
            className={`btn btn-primary ${isInCart && 'btn-disabled'}`}
            onClick={handleClick}
            disabled={isInCart}
          >
            Add To Cart
          </button>
          {isInCart && <span className="card-action--added">Added</span>}
        </div>
      </div>
    </div>
  )
}
