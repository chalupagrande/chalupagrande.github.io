import React from 'react'
import { Panel } from '../Panel'
import { random } from '../../../utils/math'

function MusicPanel(props) {
  const pos = {
    x: 82,
    y: 407
  }
  return (
    <Panel
      key={props.index}
      title={'Tunez'}
      size={{ width: 560, height: 350 }}
      padding={false}
      resizable={false}
      defaultPosition={pos}
    >
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Rd9w-SYiLN4?si=bv4oPh4v2hKnkRQY&autoplay=true&controls=0&modestbranding=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Panel>
  )
}


export default MusicPanel