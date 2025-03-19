import React from 'react'
import { Panel } from '../Panel'
import Dots from '../../../assets/sketches/Dots'
import { random } from '../../../utils/math'

function PointCloudPanel(props) {
  const randX = random(90, 250)
  const randY = random(50, 500)
  const pos = {
    x: randX,
    y: randY
  }
  return (
    <Panel
      key={props.index}
      title={'Point Cloud'}
      size={{ width: 614, height: 443 }}
      resizable={false}
      defaultPosition={pos}
      padding={false}
    >
      <video width="612" height="412" autoPlay controls>
        <source src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/video/lazy_sunday_pointcloud_4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Panel>
  )
}

export default PointCloudPanel
