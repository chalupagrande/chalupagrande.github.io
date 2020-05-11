import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

export const initialState = {
  cart: [],
  stripePromise: loadStripe('pk_test_tZ1UTEHPHFd9dsZzi03UyKNB'),
}

export const StoreContext = React.createContext(initialState)
export const Provider = (props) => {
  const [store, setStore] = useState(initialState)

  const updaters = {
    addToCart: (item) => {
      setStore({ ...store, cart: [...store.cart, item] })
    },
    removeItem: (item) => {
      let cartDupe = [...store.cart]
      cartDupe = cartDupe.filter((el) => el.sku !== item.sku)
      setStore({ ...store, cart: cartDupe })
    },
    clearCart: () => {
      setStore({ ...store, cart: [] })
    },
  }

  return (
    <StoreContext.Provider value={{ store, updaters }}>
      {props.children}
    </StoreContext.Provider>
  )
}
