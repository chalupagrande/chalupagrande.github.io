import React from 'react'
// import { loadStripe } from '@stripe/stripe-js'
import { mobileCheck } from './utils/userAgent'
import ls from 'local-storage'

const isMobile = mobileCheck()
const lastLoadedPanels = ls.get('panels')
const desiredPanels = !lastLoadedPanels || Array.isArray(lastLoadedPanels) && lastLoadedPanels.length === 0 ? ['about'] : lastLoadedPanels
const panelFocused = ls.get('panelFocused') || desiredPanels[0]
// const isMobile = true
const initialState = {
  cart: [],
  // stripePromise: loadStripe('pk_test_tZ1UTEHPHFd9dsZzi03UyKNB'),
  isDesktopMode: true,
  panels: desiredPanels,
  panelFocused: panelFocused,
  hasResized: false,
  hasDragged: false
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
          const desiredPanels = [...store.panels, panelName]
          ls.set('panels', desiredPanels)
          this.setState({ ...store, panels: desiredPanels, panelFocused: panelName })
        } else {
          // remove it from panels array
          let desiredPanels = [...store.panels]
          desiredPanels.splice(store.panels.indexOf(panelName), 1)
          ls.set('panels', desiredPanels)
          
          // Update focused panel
          const newFocusedPanel = desiredPanels[0] || ''
          ls.set('panelFocused', newFocusedPanel)
          
          // Update URL to reflect the newly focused panel or root
          if (typeof window !== 'undefined') {
            if (newFocusedPanel) {
              window.history.pushState({}, '', '/')
            } else {
              window.history.pushState({}, '', '/')
            }
          }
          
          this.setState({
            ...store,
            panels: desiredPanels,
            panelFocused: newFocusedPanel
          })
        }
      },
      focusPanel: (name) => {
        const store = this.state
        const panelName = name.toLowerCase()
        ls.set('panelFocused', panelName)
        this.setState({ ...store, panelFocused: panelName })
      },
      clearPanels: () => {
        const store = this.state
        this.setState({
          ...store,
          panels: [],
        })
      },
      updateHasResized: (val) => {
        const store = this.state
        this.setState({ ...store, hasResized: val })
      },
      updateHasDragged: (val) => {
        const store = this.state
        this.setState({ ...store, hasDragged: val })
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
