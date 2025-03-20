import React, { useState, useEffect, useCallback, useContext } from 'react'
import { StoreContext } from '../../store'

/**
 *
 * @param {*} props
 */
let panelModules = {}

export function PanelManager() {
  const {
    store: { panels },
    updaters: { togglePanel },
  } = useContext(StoreContext)
  let [panelList, setPanelList] = useState([])

  function filterAndSet() {
    let list = Object.values(panelModules)
      .filter((e) => panels.indexOf(e.name) >= 0)
      .map((e) => e.component)
    setPanelList(list)
  }

  // Then modify the getModules function to handle router panels
  const getModules = useCallback(async () => {
    if (panels.length > 0) {
      let promises = []
      let names = []

      panels.forEach((pname) => {
        if (!panelModules[pname]) {
          let prom = import(`./Panels/${pname}-panel`)
          promises.push(prom)
          names.push(pname)
        }
      })

      Promise.all(promises).then((modules) => {
        modules.forEach((m, i) => {
          // Check if the panel has routes defined
          if (m.routes) {
            panelModules[names[i]] = {
              name: names[i],
              component: (
                <RouterPanel
                  key={names[i]}
                  title={names[i].charAt(0).toUpperCase() + names[i].slice(1)}
                  defaultPosition={m.defaultPosition || { x: 50 + i * 30, y: 50 + i * 30 }}
                  size={m.size}
                  resizable={m.resizable !== false}
                  routes={m.routes}
                />
              )
            }
          } else {
            // Regular panel without routing
            panelModules[names[i]] = {
              name: names[i],
              component: m.default({ index: names[i], togglePanel, panels }),
            }
          }
        })
        filterAndSet()
      })
      if (!promises.length) filterAndSet()
    } else {
      setPanelList([])
    }
  }, [panels, togglePanel])

  useEffect(() => {
    getModules()
  }, [panels, getModules])

  return <div>{panelList}</div>
}
