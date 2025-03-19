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


        {/* <div className="desktop__icon" onClick={() => togglePanel('Home', true)}>
        <img className="desktop__icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/world.png"/>
        <div className="desktop__icon__text">Home</div>
      </div> */}
        <div className="desktop__icon__bank">
          <div className="desktop__icon" onClick={() => togglePanel('About', true)}>
            <img className="desktop__icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/this_computer.png" />
            <div className="desktop__icon__text">About</div>
          </div>
          <div className="desktop__icon" onClick={() => togglePanel('Work', true)}>
            <img className="desktop__icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/workspace.png" />
            <div className="desktop__icon__text">Work</div>
          </div>
          <div className="desktop__icon" onClick={() => togglePanel('FAQ', true)}>
            <img className="desktop__icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/sticky_note.png" />
            <div className="desktop__icon__text">FAQ</div>
          </div>
          <div className="desktop__icon" onClick={() => togglePanel('Files', true)}>
            <img className="desktop__icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/folder_closed.png" />
            <div className="desktop__icon__text">Files</div>
          </div>
          <div className="desktop__icon" onClick={() => togglePanel('Contact', true)}>
            <img className="desktop__icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/phone.png" />
            <div className="desktop__icon__text">Contact</div>
          </div>
          <div className="desktop__icon" onClick={() => togglePanel('Snake', true)}>
            <img className="desktop__icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/games.png" />
            <div className="desktop__icon__text">Games</div>
          </div>
          <div className="desktop__icon" onClick={() => togglePanel('Music', true)}>
            <img className="desktop__icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/music.png" />
            <div className="desktop__icon__text">Music</div>
          </div>
          <div className="desktop__icon" onClick={() => togglePanel('Shop', true)}>
            <img className="desktop__icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/paint.png" />
            <div className="desktop__icon__text">Shop</div>
          </div>
          <div className="desktop__icon" onClick={() => togglePanel('Junk', true)}>
            <img className="desktop__icon__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/recycle_bin_full.png" />
            <div className="desktop__icon__text">Junk</div>
          </div>

        </div>
      </div>
    </>
  )
}
