import React from 'react'
import ls from 'local-storage'
import { CartItem } from '../../components/Cart'

export function Success(props) {
  const stored = ls.get('checkout-session')
  if (!stored) return <Oops />
  const items = stored.cart.map((e) => <CartItem key={e.sku} {...e} />)
  ls.clear()
  return (
    <>
      <div className="intro">
        <h1 className="title">Success!</h1>
      </div>
      <p>
        Thank you for your purchase! You will receive an confirmation email. If
        your items require shipping, that may take a while. I still have to
        order them and have them ship them to my house, and then, when I get a
        chance, I will ship them to you. So you know... patience is a virtue.
        But HOT DAMN WASN'T THAT REAL CHECKOUT EXPERIENCE FUN!
      </p>
      <p>
        By the way, this is a generic page, refreshing will eliminate your
        items. Look out for that email for confirmation.
      </p>
      <p>Here is what you ordered.</p>
      <ol>{items}</ol>
    </>
  )
}

function Oops() {
  return (
    <>
      <h1>Oops</h1>
      <p>It looks like you haven't ordered anything yet.</p>
    </>
  )
}
