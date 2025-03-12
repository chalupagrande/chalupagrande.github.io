import React from 'react'
// import { loadStripe } from '@stripe/stripe-js'
import { mobileCheck } from './utils/userAgent'


const initialState = {
  cart: [],
  // stripePromise: loadStripe('pk_test_tZ1UTEHPHFd9dsZzi03UyKNB'),
  showNormalNavigation: true,
  panels: ['manager'],
  panelFocused: "manager"
}
export const StoreContext = React.createContext(initialState)
export class Provider extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState

    this.updaters = {
      addToCart: (item) => {
        const store = this.state
        this.setState({ ...store, cart: [...store.cart, item] })
      },
      removeItem: (item) => {
        const store = this.state
        let cartDupe = [...store.cart]
        cartDupe = cartDupe.filter((el) => el.sku !== item.sku)
        this.setState({ ...store, cart: cartDupe })
      },
      clearCart: () => {
        const store = this.state
        this.setState({ ...store, cart: [] })
      },
      togglePanel: (name, open) => {
        const store = this.state
        const panelName = name.toLowerCase()
        if (open) {
          // check if it exists then add it
          if (store.panels.indexOf(panelName) >= 0) return
          this.setState({ ...store, panels: [...store.panels, panelName] })
        } else {
          // remove it from panels array
          let temp = [...store.panels]
          temp.splice(store.panels.indexOf(panelName), 1)
          this.setState({
            ...store,
            panels: temp,
          })
        }
      },
      focusPanel: (name) => {
        const store = this.state
        const panelName = name.toLowerCase()
        console.log("focusing", panelName)
        this.setState({ ...store, panelFocused: panelName })
      },
      clearPanels: () => {
        const store = this.state
        this.setState({
          ...store,
          panels: [],
        })
      },
    }
  }

  render() {
    return (
      <StoreContext.Provider
        value={{ store: this.state, updaters: this.updaters }}
      >
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}
