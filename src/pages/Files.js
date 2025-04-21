import React, { useContext } from 'react'
import { StoreContext } from "../store"

export default function FilesPage() {
  const {
    updaters: { togglePanel },
  } = useContext(StoreContext)
  return (
    <>
      <h5>Video</h5>
      <ul>
        <li className="panel-name" onClick={function () { togglePanel('pointcloud', true) }}>
          lazy_sunday_pointcloud-2022.mp4
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=GtpZDYSYy5s"
          >
            ARt_augmented_reality_mural_documentary-2019.mp4
          </a>
        </li>
      </ul>
      <h5>Scripts</h5>
      <ul>
        <li className="panel-name" onClick={function () { togglePanel('dots', true) }}>
          Dots.js
        </li>
        <li className="panel-name" onClick={function () { togglePanel('life', true) }}>
          Game of Life.js
        </li>
        <li className="panel-name">
          <a
            rel="noopener noreferrer"
            href="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/other/ransomware.zip"
          >
            ransomware.zip
          </a>
        </li>
      </ul>
    </>
  )
}