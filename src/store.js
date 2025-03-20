import React from 'react'
// import { loadStripe } from '@stripe/stripe-js'
import { mobileCheck } from './utils/userAgent'
import ls from 'local-storage'
import { useNavigate } from '@reach/router'

const isMobile = mobileCheck()
const lastLoadedPanels = ls.get('panels')
const desiredPanels = !lastLoadedPanels || Array.isArray(lastLoadedPanels) && lastLoadedPanels.length === 0 ? ['about'] : lastLoadedPanels
const panelFocused = ls.get('panelFocused') || desiredPanels[0]

const initialState = {
  cart: [],
  isDesktopMode: true,
  panels: desiredPanels,
  panelFocused: panelFocused,
  hasResized: false,
  hasDragged: false
}

export const StoreContext = React.createContext(initialState)

export function Provider(props) {
  const [state, setState] = React.useState(initialState)
  const navigate = useNavigate()

  const updaters = {
    addToCart: (item) => {
      const store = state
      setState({ ...store, cart: [...store.cart, item] })
    },
    removeItem: (item) => {
      const store = state
      let cartDupe = [...store.cart]
      cartDupe = cartDupe.filter((el) => el.sku !== item.sku)
      setState({ ...store, cart: cartDupe })
    },
    clearCart: () => {
      const store = state
      setState({ ...store, cart: [] })
    },
    togglePanel: (name, open) => {
      const store = state
      const panelName = name.toLowerCase()

      if (open) {
        // check if it exists then add it
        if (store.panels.indexOf(panelName) >= 0) return
        const desiredPanels = [...store.panels, panelName]
        ls.set('panels', desiredPanels)
        setState({ ...store, panels: desiredPanels, panelFocused: panelName })
        navigate(`/${panelName}`)
      } else {
        // remove it from panels array
        let desiredPanels = [...store.panels]
        desiredPanels.splice(store.panels.indexOf(panelName), 1)
        ls.set('panels', desiredPanels)

        // Update focused panel
        const newFocusedPanel = desiredPanels[0] || ''
        ls.set('panelFocused', newFocusedPanel)

        // Update URL to reflect the newly focused panel or root
        if (newFocusedPanel) {
          navigate(`/${newFocusedPanel}`)
        } else {
          navigate('/')
        }

        setState({
          ...store,
          panels: desiredPanels,
          panelFocused: newFocusedPanel
        })
      }
    },
    focusPanel: (name) => {
      const store = state
      const panelName = name.toLowerCase()
      ls.set('panelFocused', panelName)
      navigate(`/${panelName}`)
      setState({ ...store, panelFocused: panelName })
    },
    clearPanels: () => {
      const store = state
      setState({
        ...store,
        panels: [],
      })
    },
    updateHasResized: (val) => {
      const store = state
      setState({ ...store, hasResized: val })
    },
    updateHasDragged: (val) => {
      const store = state
      setState({ ...store, hasDragged: val })
    },
  }

  return (
    <StoreContext.Provider
      value={{ store: state, updaters: updaters }}
    >
      {props.children}
    </StoreContext.Provider>
  )
}
