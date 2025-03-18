import React from 'react'
import { Panel } from '../Panel'
import { Home } from '../../../pages/Home'
import { random } from '../../../utils/math'

function HomePanel(props) {
  const pos = {
    x: 30,
    y: 10,
  }
  return (
    <Panel
      key={props.index}
      title={'Home'}
      size={{ width: 320, height: 500 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <Home />
    </Panel>
  )
}

export default HomePanel
