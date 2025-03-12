import React, { useContext } from 'react'
import { StoreContext } from '../store'


export function Desktop(props) {
  const {
    store: { showNormalNavigation },
    updaters: { togglePanel, clearPanels },
  } = useContext(StoreContext)

  return (
    <>
      <div onClick={() => togglePanel('Home', true)}>
        Home
      </div>
      <div onClick={() => togglePanel('About', true)}>
        About
      </div>
      <div onClick={() => togglePanel('Work', true)}>
        Work
      </div>
      <div onClick={() => togglePanel('FAQ', true)}>
        FAQ
      </div>
      <div onClick={() => togglePanel('Contact', true)}>
        Contact
      </div>
      <div onClick={() => togglePanel('Snake', true)}>
        Snake
      </div>
      <div onClick={() => togglePanel('Music', true)}>
        Music
      </div>
      <div onClick={() => togglePanel('Shop', true)}>
        Shop
      </div>
    </>
  )
}
