import React, { useContext } from 'react'
import { Link } from '@reach/router'
import { StoreContext } from '../../store'

export default function Nav() {
  const {
    store: { panels, showNormalNavigation },
    updaters: { togglePanel, clearPanels },
  } = useContext(StoreContext)

  const showingPanels = panels.length > 0

  function showPanelList() {
    togglePanel('manager', true)
  }

  function clear() {
    clearPanels()
  }

  if (!showNormalNavigation) return <></>

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/faq">FAQs</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <div onClick={showingPanels ? clear : showPanelList}>
            {showingPanels ? 'Clear Windows' : 'Show Windows'}
          </div>
        </li>
      </ul>
    </nav>
  )
}
