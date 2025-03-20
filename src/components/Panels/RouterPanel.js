import React from 'react'
import { Router } from '@reach/router'
import { Panel } from './Panel'
import { NotFound } from '../../pages'

export function RouterPanel(props) {
  const { routes, title, defaultPosition, size, resizable, background, padding } = props
  console.log(routes.map(e => e.path))
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
        {routes.map((RouteComponent, index) => {
          console.log(typeof RouteComponent)
          return (
            <RouteComponent.Component key={index} path={RouteComponent.path || "/"} />
          )
        })}
        <NotFound default />
      </Router>
    </Panel>
  )
}