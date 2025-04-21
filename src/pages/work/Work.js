import React, { useContext } from 'react'
import { StoreContext } from '../../store'

export function Work(props) {
  const {
    updaters: { togglePanel },
  } = useContext(StoreContext)
  return (
    <>
      <div className="intro">
        <h1 className="title">Work</h1>
      </div>
      <ul>
        <li className="panel-name" onClick={() => togglePanel('Inbanx', true)}>
          Inbanx
        </li>
        <li className="panel-name" onClick={() => togglePanel('ReelGolf', true)}>
          ReelGolf
        </li>
        <li className="panel-name" onClick={() => togglePanel('Tradeblock', true)}>
          Tradeblock.us
        </li>
        <li className="panel-name" onClick={() => togglePanel('BAM', true)}>
          Bluemix Availability Monitoring
        </li>
        <li className="panel-name" onClick={() => togglePanel('icam', true)}>
          IBM Cloud Application Monitoring
        </li>
        <li className="panel-name" onClick={() => togglePanel('icp', true)}>
          IBM Cloud Pak
        </li>
        <li className="panel-name" onClick={() => togglePanel('redhat', true)}>
          Redhat Marketplace
        </li>

      </ul>
    </>
  )
}
