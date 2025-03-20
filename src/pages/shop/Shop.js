import React, { useContext } from 'react'
import { Link } from '@reach/router'
import Card from '../../components/Card'
import { Cart } from '../../components/Cart'
import Products from '../../assets/products.json'
import '../../styles/shop.css'
import { StoreContext } from '../../store'

export function Shop() {
  const { products } = Products
  const {
    store: { cart }
  } = useContext(StoreContext)
  const shopItems = products.map((e) => <Card key={e.sku} {...e} />)

  return (
    <>
      <div className="intro">
        <h1 className="title">Shop</h1>
        <p>Buy cool Jamie Skinner merchandise for you and your family!</p>
      </div>
      <div className="shop-items">{shopItems}</div>
      {!!cart.length && (
        <>
          <Cart />
          <Link to="checkout">
            <button className="btn btn-primary">Checkout</button>
          </Link>
          <Link to="cancel">
            <button className="btn btn-primary">Cancel</button>
          </Link>
        </>
      )}
    </>
  )
}
