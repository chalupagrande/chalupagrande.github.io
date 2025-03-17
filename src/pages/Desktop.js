import React, { useContext } from 'react'
import { StoreContext } from '../store'
import Clock from '../components/Clock/Clock'


export function Desktop(props) {
  const {
    store: { showNormalNavigation },
    updaters: { togglePanel, clearPanels },
  } = useContext(StoreContext)

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__section">
          <img className="toolbar__icon" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/chalupa-bw.png" width="30" />
          <div>Chalupa.os</div>
        </div>

        <Clock />
      </div>
      <div className="desktop">


        {/* <div className="icon" onClick={() => togglePanel('Home', true)}>
        <img className="icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/world.png" width="50" />
        <div className="icon__text">Home</div>
      </div> */}
        <div className="icon" onClick={() => togglePanel('About', true)}>
          <img className="icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/folder_closed.png" width="50" />
          <div className="icon__text">About</div>
        </div>
        <div className="icon" onClick={() => togglePanel('Work', true)}>
          <img className="icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/workspace.png" width="50" />
          <div className="icon__text">Work</div>
        </div>
        <div className="icon" onClick={() => togglePanel('FAQ', true)}>
          <img className="icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/sticky_note.png" width="50" />
          <div className="icon__text">FAQ</div>
        </div>
        <div className="icon" onClick={() => togglePanel('Contact', true)}>
          <img className="icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/phone.png" width="50" />
          <div className="icon__text">Contact</div>
        </div>
        <div className="icon" onClick={() => togglePanel('Snake', true)}>
          <img className="icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/games.png" width="50" />
          <div className="icon__text">Games</div>
        </div>
        <div className="icon" onClick={() => togglePanel('Music', true)}>
          <img className="icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/music.png" width="50" />
          <div className="icon__text">Music</div>
        </div>
        <div className="icon" onClick={() => togglePanel('Shop', true)}>
          <img className="icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/paint.png" width="50" />
          <div className="icon__text">Shop</div>
        </div>
        <div className="icon" onClick={() => togglePanel('Junk', true)}>
          <img className="icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/recycle_bin_full.png" width="50" />
          <div className="icon__text">Junk</div>
        </div>
      </div>
    </>
  )
}
