import React, { useContext, useEffect, useState } from 'react'
import { Link } from '@reach/router'
import Card from '../../components/Card'
import { Cart } from '../../components/Cart'
import '../../styles/shop.css'
import { StoreContext } from '../../store'
import axios from 'axios'

export function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const {
    store: { cart }
  } = useContext(StoreContext)
  const shopItems = products.map((e) => <Card key={e.sku} {...e} />)

  useEffect(() => {
    async function getProducts() {
      setLoading(true)
      const { data: { products: toSetProducts } } = await axios.get('/api/shop/products')
      setProducts(toSetProducts)
      setLoading(false)
    }
    getProducts()
  }, [false])

  return (
    <>
      <div className="intro">
        <h1 className="title">Shop</h1>
        <p>Buy cool Jamie Skinner merchandise for you and your family!</p>
      </div>
      {loading ? <div>loading...</div> : <div className="shop-items">{shopItems}</div>}
      {!!cart?.length && !loading && (
        <>
          <Cart />
          <Link to="checkout">
            <button className="btn btn-primary">Checkout</button>
          </Link>
        </>
      )}
    </>
  )
}
