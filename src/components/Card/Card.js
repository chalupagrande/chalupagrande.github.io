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
  const cart = store?.cart || []
  const isInCart = cart.find((e) => e.sku === props.sku) || false
  const isOutOfStock = props.quantity === 0

  return (
    <div className="card">
      <Carousel images={props.images} />
      <div className="card__footer">
        <h5 className="card__title">{props.name}</h5>
        <p className="card__description">{props.description}</p>
        <p className="card__price">
          Price: <strong>${(props.amount / 100).toFixed(2)}</strong>
        </p>
        <div className="card__footer__action">
          <button
            className={`btn btn-primary ${(isInCart || isOutOfStock) && 'btn-disabled'}`}
            onClick={handleClick}
            disabled={(isInCart || isOutOfStock)}
          >
            Add To Cart
          </button>
          {isInCart && <span className="card-action--added">Added</span>}
          {isOutOfStock && <span className="card-action--oos">Out of Stock</span>}
        </div>
      </div>
    </div>
  )
}
