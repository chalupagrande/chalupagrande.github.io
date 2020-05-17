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
        // call the panel function with props
        modules.forEach((m, i) => {
          panelModules[names[i]] = {
            name: names[i],
            component: m.default({ index: names[i], togglePanel, panels }),
          }
        })
        // set panelList
        filterAndSet()
      })
      // if there were not promises already loaded set the panelList
      if (!promises) filterAndSet()
      console.log(panelModules)
    } else {
      setPanelList([])
    }
  }, [panels, togglePanel])

  useEffect(() => {
    getModules()
  }, [panels, getModules])

  return <div>{panelList}</div>
}
