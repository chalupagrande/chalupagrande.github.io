import React from 'react'
import { Panel } from '../Panel'
import { random } from '../../../utils/math'

function IntroPanel(props) {
  const pos = {
    x: window.innerWidth - 200,
    y: 100,
  }
  return (
    <Panel
      key={props.index}
      title={'Intro'}
      size={{ width: 200, height: 100 }}
      defaultPosition={pos}
    >
      <p>Intro Panel</p>
    </Panel>
  )
}

export default IntroPanel
