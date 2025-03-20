import React from 'react'
import { Router } from '@reach/router'
import * as Page from '../../pages'
import { Provider } from '../../store'
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutProvider } from '@stripe/react-stripe-js'
const stripe = loadStripe("pk_test_tZ1UTEHPHFd9dsZzi03UyKNB", {
  betas: ['custom_checkout_beta_6'],
});


function App() {
  function fetchClientSecret() {
    return fetch('http://localhost:4000/api/shop/create-checkout-session', { method: 'POST' })
      .then((response) => response.json())
      .then((json) => json.checkoutSessionClientSecret)
  }


  return (
    <div id="wrapper">

      <CheckoutProvider stripe={stripe} options={{ fetchClientSecret }}>
        <Router>
          <Provider path="/" default>
            <Page.Desktop path="/" default />
          </Provider>
        </Router>
      </CheckoutProvider>
    </div >
  )
}

export default App
