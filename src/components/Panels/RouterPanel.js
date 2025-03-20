import React from 'react'
import { Router } from '@reach/router'
import { Panel } from './Panel'

export function RouterPanel(props) {
  const { routes, ...panelProps } = props

  return (
    <Panel {...panelProps}>
      <Router basepath={`/${panelProps.title.toLowerCase()}`}>
        {routes.map((RouteComponent, index) => (
          <RouteComponent key={index} path={RouteComponent.path || "/"} />
        ))}
      </Router>
    </Panel>
  )
}import React from 'react'
import { Router } from '@reach/router'
import { Panel } from './Panel'

export function RouterPanel(props) {
  const { routes, title, defaultPosition, size, resizable, background, padding } = props
  
  return (
    <Panel 
      title={title}
      defaultPosition={defaultPosition}
      size={size}
      resizable={resizable}
      background={background}
      padding={padding}
    >
      <Router basepath={`/${title.toLowerCase()}`}>
        {routes.map((RouteComponent, index) => (
          <RouteComponent key={index} path={RouteComponent.path || "/"} />
        ))}
      </Router>
    </Panel>
  )
}
