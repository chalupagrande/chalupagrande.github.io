import React, { useContext } from 'react'
import { Link } from '@reach/router'
import { StoreContext } from '../../store'

export function Work(props) {
  const {
    updaters: { togglePanel },
  } = useContext(StoreContext)
  return (
    <>
      <div className="intro">
        <h1 className="title">Work</h1>
      </div>
      <p>I collaborate.<br /> I research.<br /> I design.<br /> I build.<br /> I lead.</p>
      <ul>
        <li>
          <a onClick={() => togglePanel('Inbanx', true)}>
            Inbanx
          </a>
        </li>
        <li>
          <a onClick={() => togglePanel('ReelGolf', true)}>
            ReelGolf
          </a>
        </li>
        <li>
          <a onClick={() => togglePanel('Tradeblock', true)}>
            Tradeblock.us
          </a>
        </li>
        {/* <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etcetera.cr"
          >
            Etcetera
          </a>
        </li> */}
        {/* <li>
          <Link to="/work/sharegro">ShareGro</Link>
        </li> */}
        {/* <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://fixfake.com"
          >
            FixFake
          </a>
        </li> */}
        {/* <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/video/astley.mp4"
          >
            Secret government contract I can't talk about
          </a>{' '}
          (seriously)
        </li> */}
        {/* <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://johntrainum.com"
          >
            JohnTrainum.com (producer)
          </a>
        </li> */}

        <li>
          <a onClick={() => togglePanel('BAM', true)}>
            Bluemix Availability Monitoring
          </a>
        </li>
        <li>
          <a onClick={() => togglePanel('icam', true)}>
            IBM Cloud Application Monitoring
          </a>
        </li>
        <li>
          <a onClick={() => togglePanel('icp', true)}>IBM Cloud Pak</a>
        </li>
        {/* <li>
          <a onClick={() => togglePanel('spa', true)}>Smart Patient Academy</a>
        </li> */}
        <li>
          <a onClick={() => togglePanel('redhat', true)}>Redhat Marketplace</a>
        </li>
        {/* <li>
          <Link to="/work/underground">Underground Blueprint</Link>
        </li> */}
      </ul>

      {/* <h2 className="subtitle">Personal Projects</h2>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://leaderboard.etc.cr"
          >
            Leaderboard
          </a>{' '}
          - Noncooperative Behavior and Escalation Social Experiment
        </li>
      </ul> */}
    </>
  )
}
