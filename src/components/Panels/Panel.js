import React, { useState, useContext, useRef, useEffect } from 'react'
import Draggable from 'react-draggable'
import { Resizable } from 'react-resizable'
import { StoreContext } from '../../store'
import './Panel.css'

export function Panel(props) {
  const panelRef = useRef(null)
  const {
    updaters: { togglePanel, focusPanel },
    store: { panelFocused },
  } = useContext(StoreContext)
  const { defaultPosition, title, children, background, padding, size: defaultSize } = props
  let [size, setSize] = useState(defaultSize || { width: 200, height: 200 })

  let bgColor = typeof background === 'boolean' ? '#ffffff' : background
  let pd = typeof padding === 'boolean' && !!padding ? '0.25rem' : padding

  function handleResize(e, { element, size, handle }) {
    setSize({ width: size.width, height: size.height })
  }

  function handleClose() {
    togglePanel(title, false)
  }

  function onStop(e, a) {
    console.log(a.x, a.y)
  }

  function handleFocus() {
    focusPanel(title)
  }

  useEffect(() => {
    setSize(defaultSize)
  }, [defaultSize])


  if (props.resizable) {
    return (
      <div className={`${panelFocused === title.toLowerCase() ? 'panel--focused' : ''}`}>
        <Draggable
          handle=".panel__header__drag-area"
          defaultPosition={defaultPosition}
          nodeRef={panelRef}
          onStop={onStop}
        >
          <Resizable
            resizeHandles={['se']}
            onResize={handleResize}
            handle={<span className="panel__resize-handle" />}
            {...size}
          >
            <div
              className="panel"
              style={{ ...size, background: bgColor }}
              ref={panelRef}
            >

              <header className="panel__header">
                <div className="panel__header__drag-area" onClick={handleFocus}>
                  <div className="panel__header__title">{title}</div>
                  <PanelHeaderSpacer />
                </div>
                <div className="panel__header__controls">
                  <div className="panel__controls__close" onClick={handleClose}>
                    <span>X</span>
                  </div>
                </div>
              </header>
              <div className="panel__content" style={{ padding: pd }}>
                {children}
              </div>
              <div className="panel__footer" onClick={handleFocus} />
            </div>
          </Resizable>
        </Draggable>
      </div >
    )
  } else {
    return (
      <div className={`${panelFocused === title.toLowerCase() ? 'panel--focused' : ''}`}>
        <Draggable
          nodeRef={panelRef}
          handle=".panel__header__drag-area"
          defaultPosition={defaultPosition}
          onStop={onStop}
          {...size}
        >
          <div
            className="panel"
            style={{ ...props.size, background: bgColor }}
            ref={panelRef}
          >
            <header className="panel__header">
              <div className="panel__header__drag-area" onClick={handleFocus}>
                <div className="panel__header__title">{title}</div>
                <PanelHeaderSpacer />
              </div>
              <div className="panel__header__controls">
                <div className="panel__controls__close" onClick={handleClose}>
                  <span>X</span>
                </div>
              </div>
            </header>
            <div className="panel__content" style={{ padding: pd }}>
              {children}
            </div>
            <div className="panel__footer" onClick={handleFocus} />
          </div>
        </Draggable>
      </div >
    )
  }
}

Panel.defaultProps = {
  background: '#ffffff',
  padding: true,
}

function PanelHeaderSpacer(props) {
  let lines = [...Array(props.numLines || 5)].map((e, i) => <li key={i} />)
  return <ul className="panel__header__spacer">{lines}</ul>
}
