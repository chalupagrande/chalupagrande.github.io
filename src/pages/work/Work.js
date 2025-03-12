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
          <Link to="/work/tradeblock">
            Tradeblock.us
          </Link>
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
        <li>
          <Link to="/work/sharegro">ShareGro</Link>
        </li>
        {/* <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://fixfake.com"
          >
            FixFake
          </a>
        </li> */}
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/video/astley.mp4"
          >
            Secret government contract I can't talk about
          </a>{' '}
          (seriously)
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://johntrainum.com"
          >
            JohnTrainum.com (producer)
          </a>
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://leaderboard.etc.cr"
          >
            Leaderboard
          </a>{' '}
          - Noncooperative Behavior and Escalation Social Experiment
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/video/processing-kinect-demo.m4v"
          >
            Live 3D Pointcloud
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=GtpZDYSYy5s"
          >
            An Augmented Reality Portrait - Documentary
          </a>
        </li>
        <li>
          <Link to="/work/love-letters">Love Letters</Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chalupagrande.github.io/trollscripts/views/phonenumbers.html"
          >
            Phone Number Madness
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nnrps.herokuapp.com/"
          >
            Neural Net - Rock Paper Scissors
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=vgjkYxa8W0E"
          >
            Priority Mail Sticker Animation
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chalupagrande.github.io/sandbox/views/skull.html"
          >
            3D Skull (ThreeJS)
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chalupagrande.github.io/sandbox/views/labryinth.html"
          >
            Mutating Labyrinth (using SVG stroke)
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chalupagrande.github.io/sandbox/views/colors.html"
          >
            CSS Blendmodes demo
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chalupagrande.github.io/sandbox/views/tiles.html"
          >
            Animating Tiles (GSAP)
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chalupagrande.github.io/sandbox/views/portrait.html"
          >
            Self Portrait with Tile Animation
          </a>
        </li>
      </ul>
      <p>Social Links</p>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/chalupagrande"
          >
            Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/chalupagrande/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/sr.chalupagrande/"
          >
            Instagram
          </a>
        </li>
      </ul>
    </>
  )
}
