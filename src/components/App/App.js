import React from 'react'
import { Router } from '@reach/router'
import * as Page from '../../pages'
import { Provider } from '../../store'

function App() {
  return (
    <div id="wrapper">
      <Router>
        <Provider path="/" default>
          <Page.Desktop path="/" default />
        </Provider>
      </Router>
    </div >
  )
}

export default App
