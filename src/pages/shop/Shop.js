import React, { useContext } from 'react'
import Card from '../../components/Card'
import { Cart } from '../../components/Cart'
import Products from '../../assets/products.json'
import '../../styles/shop.css'
import { StoreContext } from '../../store'
import { Link } from '@reach/router'

export function Shop() {
  const { products } = Products
  const {
    store: { cart },
  } = useContext(StoreContext)
  const shopItems = products.map((e) => <Card key={e.sku} {...e} />)

  return (
    <>
      <div className="intro">
        <h1 className="title">Shop</h1>
        <p>Buy cool Jamie Skinner merchandise for you and your family!</p>
      </div>
      <h1 className="center">The store is being updated! </h1>
      <h3 className="center">Please check back later.</h3>
      <p>Updated: (as of 4/25/24)</p>
      {/* <div className="shop-items">{shopItems}</div>
      {!!cart.length && (
        <>
          <Cart />
          <Link to="/shop/checkout">
            <button className="btn btn-primary">Checkout</button>
          </Link>
        </>
      )} */}
    </>
  )
}
