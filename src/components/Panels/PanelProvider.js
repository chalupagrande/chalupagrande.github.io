import React, { useState, useEffect, useCallback, useContext } from 'react'
import { StoreContext } from '../../store'

/**
 *
 * @param {*} props
 */


const PanelLibrary = {
  about: React.lazy(() => import('./Panels/about-panel')),
  bam: React.lazy(() => import('./Panels/bam-panel')),
  checkout: React.lazy(() => import('./Panels/checkout-panel')),
  contact: React.lazy(() => import('./Panels/contact-panel')),
  dots: React.lazy(() => import('./Panels/dots-panel')),
  faq: React.lazy(() => import('./Panels/faq-panel')),
  files: React.lazy(() => import('./Panels/files-panel')),
  home: React.lazy(() => import('./Panels/home-panel')),
  icam: React.lazy(() => import('./Panels/icam-panel')),
  icp: React.lazy(() => import('./Panels/icp-panel')),
  inbanx: React.lazy(() => import('./Panels/inbanx-panel')),
  intro: React.lazy(() => import('./Panels/intro-panel')),
  junk: React.lazy(() => import('./Panels/junk-panel')),
  legal: React.lazy(() => import('./Panels/legal-panel')),
  life: React.lazy(() => import('./Panels/life-panel')),
  music: React.lazy(() => import('./Panels/music-panel')),
  pointcloud: React.lazy(() => import('./Panels/pointcloud-panel')),
  redhat: React.lazy(() => import('./Panels/redhat-panel')),
  reelgolf: React.lazy(() => import('./Panels/reelgolf-panel')),
  shop: React.lazy(() => import('./Panels/shop-panel')),
  snake: React.lazy(() => import('./Panels/snake-panel')),
  tradeblock: React.lazy(() => import('./Panels/tradeblock-panel')),
  wavecube: React.lazy(() => import('./Panels/wavecube-panel')),
  work: React.lazy(() => import('./Panels/work-panel')),
}

export function PanelProvider() {
  const {
    store: { panels },
    updaters: { togglePanel },
  } = useContext(StoreContext)
  const [components, setComponents] = useState([])

  useEffect(() => {
    const newComponents = panels.map((panelName) => {
      const PanelComponent = PanelLibrary[panelName]
      if (PanelComponent) {
        return <PanelComponent key={panelName} togglePanel={togglePanel} panels={panels} />
      }
      return null
    })
    setComponents(newComponents)
  }, [panels])

  return <div className="panel__provider">{components}</div>
}
