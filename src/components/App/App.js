import React from 'react'
import { Router } from '@reach/router'
import * as Page from '../../pages'
import Navigation from '../Navigation'
import { PanelManager } from '../Panels'
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
      <Provider>
        <CheckoutProvider stripe={stripe} options={{ fetchClientSecret }}>
          {/* <Navigation /> */}
          <PanelManager />
          <Router>
            <Page.Desktop path="/" />

            <Page.NotFound default />
          </Router>
        </CheckoutProvider>
      </Provider>
    </div>
  )
}

export default App
