import React from 'react'
import { Router } from '@reach/router'
import * as Page from '../../pages'
import Navigation from '../Navigation'
import { Provider } from '../../store'

function App() {
  return (
    <div id="wrapper">
      <Provider>
        <Navigation />
        <Router>
          <Page.Home path="/" />
          <Page.About path="/about" />
          <Page.FAQ path="/faq" />
          <Page.Shop path="/shop" />
          <Page.Checkout path="/shop/checkout" />
          <Page.Success path="/shop/success" />
          <Page.Cancel path="/shop/canceled" />
          <Page.Contact path="/contact" />
          <Page.Legal path="/legal" />
          <Page.Work path="/work" />
          <Page.Bam path="/work/bam" />
          <Page.LoveLetters path="/work/love-letters" />
          <Page.IBMCloudApplicationMonitoring path="/work/icam" />
          <Page.IBMCloudPak path="/work/ibm-cloud-pak" />
          <Page.RedhatMarketplace path="/work/redhat-marketplace" />
          <Page.Sparts path="/work/sparts" />
          <Page.Underground path="/work/underground" />
          <Page.NotFound default />
        </Router>
      </Provider>
    </div>
  )
}

export default App
