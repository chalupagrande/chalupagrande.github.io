import React from 'react'
import { Link } from '@reach/router'

export function Work(props) {
  return (
    <>
      <div className="intro">
        <h1 className="title">Work</h1>
      </div>
      <ul>
        <li>
          <Link to="/work/love-letters">Love Letters</Link>
        </li>
        <li>
          <Link to="/work/bam">Bluemix Availability Monitoring</Link>
        </li>
        <li>
          <Link to="/work/icam">IBM Cloud Application Monitoring</Link>
        </li>
        <li>
          <Link to="/work/ibm-cloud-pak">IBM Cloud Pak</Link>
        </li>
        <li>
          <Link to="/work/sparts">Smart Patient Academy</Link>
        </li>
        <li>
          <Link to="/work/redhat-marketplace">Redhat Marketplace</Link>
        </li>
        <li>
          <Link to="/work/underground">Underground Blueprint</Link>
        </li>
      </ul>

      <h2 className="subtitle">Personal Projects</h2>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=GtpZDYSYy5s">
            An Augmented Reality Portrait - Documentary
          </a>
        </li>
        <li>
          <a href="https://chalupagrande.github.io/sandbox/">
            Some Random Experiments
          </a>
        </li>
        <li>
          <a href="https://nnrps.herokuapp.com/">
            Neural Net - Rock Paper Scissors
          </a>
        </li>
      </ul>

      <h2 className="subtitle">Works In Progress</h2>
      <ul>
        <li>The Place is Right! - automated geocached telephone game show</li>
        <li>AR Graffiti - augmented reality street art sticker series</li>
        <li>
          Leaderboard - Noncooperative Behavior and Escalation Social Experiment
        </li>
      </ul>

      <p>Social Links</p>
      <ul>
        <li>
          <a href="https://github.com/chalupagrande">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/chalupagrande/">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.instagram.com/thesuperuser/">Instagram</a>
        </li>
        <li>
          <a href="https://codepen.io/chalupagrande">CodePen</a>
        </li>
        <li>
          <a href="https://codesandbox.io/u/chalupagrande">CodeSandbox</a>
        </li>
      </ul>
    </>
  )
}
