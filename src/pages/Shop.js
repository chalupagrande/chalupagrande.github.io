import React from 'react'
import Card from '../components/Card'
import Products from '../assets/products.json'
import '../styles/shop.css'

export function Shop() {
  const { products } = Products
  const shopItems = products.map((e) => <Card key={e.title} {...e} />)
  return (
    <>
      <div className="intro">
        <h1 className="title">Shop</h1>
        <p>Buy cool Jamie Skinner merchandise for you and your family!</p>
      </div>
      <div className="shop-items">{shopItems}</div>
    </>
  )
}
