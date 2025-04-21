import React from 'react'
import FilesPage from '../../../pages/Files'
import { Panel } from '../Panel'

function FilePanel(props) {
  const pos = {
    x: 33,
    y: 66,
  }

  return (
    <Panel
      key={props.index}
      title={'Files'}
      size={{ width: 305, height: 518 }}
      resizable={true}
      defaultPosition={pos}
      padding={"0.5rem"}
    >
      <FilesPage />
    </Panel >
  )
}

export default FilePanel
