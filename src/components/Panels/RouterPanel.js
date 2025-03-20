import React, { useEffect } from 'react'
import { Router, useLocation } from '@reach/router'
import { Panel } from './Panel'
import { NotFound } from '../../pages'

export function RouterPanel(props) {
  const { routes, title, defaultPosition, size, resizable, background, padding } = props
  
  // Create a component to track location changes
  const LocationTracker = () => {
    const location = useLocation()
    
    useEffect(() => {
      // This effect runs when the location changes within the router
      console.log('Router location changed:', location)
    }, [location])
    
    return null
  }
  
  return (
    <Panel
      title={title}
      defaultPosition={defaultPosition}
      size={size}
      resizable={resizable}
      background={background}
      padding={padding}
      isRouterPanel={true}
    >
      <Router basepath={`/${title.toLowerCase()}`}>
        <LocationTracker path="/*" />
        {routes.map((RouteComponent, index) => {
          return (
            <RouteComponent.Component key={index} path={RouteComponent.path || "/"} />
          )
        })}
        <NotFound default />
      </Router>
    </Panel>
  )
}
