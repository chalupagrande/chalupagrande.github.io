import React from 'react'

export const nestedPanelInitialState = {
  panelsMap: {},
  defaultPanel: ''
}

export const NestedPanelContext = React.createContext(nestedPanelInitialState)

export const NestedPanelProvider = ({ children }) => {
  const [panelsMap, setPanelsMap] = React.useState({})
  const [defaultPanel, setDefaultPanel] = React.useState('')

  return (
    <NestedPanelContext.Provider value={{ panelsMap, setPanelsMap, defaultPanel, setDefaultPanel }}>
      {children}
    </NestedPanelContext.Provider>
  )
}

export const useNestedPanel = () => React.useContext(NestedPanelContext)

function NestedPanel({ panelsMap, defaultPanel }) {
  return (
    <div>
      <h1>Nested Panel</h1>
    </div>
  )
}