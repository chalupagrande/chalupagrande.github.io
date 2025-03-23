import React, { useState, useContext, useRef, useEffect } from 'react'
import Draggable from 'react-draggable'
import { Resizable } from 'react-resizable'
import { StoreContext } from '../../store'
import './Panel.css'

export function Panel(props) {
  const panelRef = useRef(null)
  const {
    updaters: { togglePanel, focusPanel, updateHasResized, updateHasDragged },
    store: { panelFocused, hasDragged, hasResized },
  } = useContext(StoreContext)


  const { defaultPosition, title, children, background, padding, size: defaultSize } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const [position, setPosition] = useState({ x: defaultPosition.x, y: defaultPosition.y })
  let [size, setSize] = useState(defaultSize || { width: 200, height: 200 })

  let bgColor = typeof background === 'boolean' ? '#ffffff' : background
  let pd = typeof padding === 'boolean' && !!padding ? '0.25rem' : padding

  function handleResize(e, { element, size, handle }) {
    setSize({ width: size.width, height: size.height })
    updateHasResized(true)
  }

  function handleClose() {
    // When closing a panel, navigate to the root URL if it's a RouterPanel
    if (props.isRouterPanel && typeof window !== 'undefined') {
      // Use history API to update URL without full page reload
      window.history.pushState({}, '', '/')
    }
    togglePanel(title, false)
  }

  function handleFocus() {
    focusPanel(title)
  }

  function onDragStop(e) {
    updateHasDragged(true)
  }

  function onControlledDrag(e, curpos) {
    const { x, y } = curpos;
    setPosition({ x, y });
  };

  function handleExpand() {
    if (isExpanded) {
      setSize(defaultSize)
      setPosition(defaultPosition)
    } else {
      setSize({ width: window.innerWidth, height: window.innerHeight - 30 })
      setPosition({ x: 0, y: 30 })
    }
    setIsExpanded(!isExpanded)
    handleFocus()
  }

  useEffect(() => {
    setSize(defaultSize)
  }, [defaultSize])


  if (props.resizable) {
    return (
      <div className={`${panelFocused === title.toLowerCase() ? 'panel--focused' : ''}`}>
        <Draggable
          handle=".panel__header__drag-area"
          nodeRef={panelRef}
          position={position}
          onDrag={onControlledDrag}
          onStart={handleFocus}
          onStop={onDragStop}
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
                <div className="panel__header__controls">
                  <div className="panel__controls--close" onClick={handleClose}>
                    X
                  </div>
                  <div className="panel__controls--expand" onClick={handleExpand}>
                    {"[]"}
                  </div>

                </div>
                <div className="panel__header__drag-area" onClick={handleFocus}>
                  <div className="panel__header__title">{title}</div>
                  <PanelHeaderSpacer />
                </div>

              </header>
              <div className="panel__content panel__content--resizeable" style={{ padding: pd }}>
                {children}
              </div>
              {!hasResized && <div className="panel__helper--resize" onClick={handleFocus}>
                use this to resize ────┐
              </div>}
              {!hasDragged && <div className="panel__helper--drag" onClick={handleFocus}>
                ┌──── click here to focus & drag
              </div>}
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
          position={position}
          onDrag={onControlledDrag}
          onStart={handleFocus}
          onStop={onDragStop}
          {...size}
        >
          <div
            className="panel"
            style={{ ...props.size, background: bgColor }}
            ref={panelRef}
          >
            <header className="panel__header">
              <div className="panel__header__controls">
                <div className="panel__controls--close" onClick={handleClose}>
                  X
                </div>

              </div>
              <div className="panel__header__drag-area" onClick={handleFocus}>
                <div className="panel__header__title">{title}</div>
                <PanelHeaderSpacer />
              </div>

            </header>
            <div className="panel__content" style={{ padding: pd }}>
              {children}
            </div>
            {!hasDragged && <div className="panel__helper--drag" onClick={handleFocus}>
              ┌──── click here to focus or drag
            </div>}
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
