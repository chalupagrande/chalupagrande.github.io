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
            <Page.Home path="/home" />
            <Page.About path="/about" />
            <Page.FAQ path="/faq" />
            <Page.Shop path="/shop" />
            <Page.Short path="/short" />
            <Page.Checkout path="/shop/checkout" />
            <Page.Success path="/shop/success" />
            <Page.Cancel path="/shop/canceled" />
            <Page.Contact path="/contact" />
            <Page.Legal path="/legal" />
            <Page.Work path="/work" />
            <Page.Bam path="/work/bam" />
            <Page.ShareGro path="/work/sharegro" />
            <Page.Tradeblock path="/work/tradeblock" />
            <Page.LoveLetters path="/work/love-letters" />
            <Page.IBMCloudApplicationMonitoring path="/work/icam" />
            <Page.IBMCloudPak path="/work/ibm-cloud-pak" />
            <Page.RedhatMarketplace path="/work/redhat-marketplace" />
            <Page.Sparts path="/work/sparts" />
            <Page.Underground path="/work/underground" />
            <Page.ReelGolf path="/work/reelgolf" />
            <Page.Rhonda path="/rhonda" />

            <Page.NotFound default />
          </Router>
        </CheckoutProvider>
      </Provider>
    </div>
  )
}

export default App
