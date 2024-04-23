import React from 'react'
import Emoji from '../components/Emoji'

export function About(props) {
  return (
    <>
      <div className="intro">
        <h1 className="title">About Jamie</h1>
      </div>
      <p>Here are a couple links you can use to get to know me</p>
      <ul>
        <li>
          <a href="https://github.com/chalupagrande">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/chalupagrande/">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.instagram.com/sr.chalupagrande/">Instagram</a>
        </li>
        <li>
          <a href="https://codepen.io/chalupagrande">CodePen</a>
        </li>
        <li>
          <a href="https://codesandbox.io/u/chalupagrande">CodeSandbox</a>
        </li>
        <li>
          <a href="https://giphy.com/channel/chalupagrande">Giphy</a>
        </li>
      </ul>
      <p>
        I know this site looks simple, and is completely unstyled, and yes. it
        is simple and completely unstyled. But don't let that fool you, I am a
        full stack developer and I pride myself on being able to build just
        about anything I set my mind to. I have worked on many projects and with
        many technologies that would make this site look like a petting zoo.
        (I'm not sure why I went with that analogy but... <Emoji symbol="🤷" />
        ). Here are just a few:
      </p>
      <h4>Technologies</h4>
      <div className="row">
        <ul className="item">
          <li>Javascript es2015 (Babel)</li>
          <li>D3 (interactive graphs &amp; maps)</li>
          <li>ThreeJS &amp; WebGl (3D animations in the browser)</li>
          <li>Stripe (payment platform)</li>
          <li>React &amp; Vue (front end frameworks)</li>
          <li>AFrame (VR/AR in the browser)</li>
          <li>Wordpress &amp; Strapi (CMS)</li>
        </ul>
        <ul className="item">
          <li>Google Maps, Leaflet and Mapbox (Mapping Software)</li>
          <li>React Native (native iOS and Andriod apps)</li>
          <li>MongoDB, Neo4j, Redis, PostgreSQL (database)</li>
          <li>Kubernetes &amp; Docker (DEVOPS container-orchestration)</li>
          <li>Tensorflow 2</li>
          <li>AWS, Digital Ocean &amp; Heroku (deployment)</li>
          <li>Travis CI (continuous integration)</li>
        </ul>
        <ul className="item">
          <li>Sketch &amp; Adobe Suite (design)</li>
          <li>Git &amp; Bitbucket (version control)</li>
          <li>Node &amp; Express (server)</li>
          <li>Passport, OAuth2.0 &amp; Firebase (authentication)</li>
          <li>AntD and Carbon Components (component library)</li>
          <li>Yarn and NPM (package managers)</li>
          <li>NextJS (server side rendering)</li>
        </ul>
      </div>
      <h2 className="subtitle">Testimonials &amp; Accolades</h2>
      <blockquote>
        <p>Golden A'Design Award and Competition - 2018</p>
        <img
          className="img small"
          src="https://sudo-portfolio-space.sfo2.cdn.digitaloceanspaces.com/images/bam/adesign.jpg"
          alt="a'design award"
        />
      </blockquote>
      <blockquote>
        <p>Computex d&amp;i Specialty Award - 2018</p>
        <img
          className="img small"
          src="https://sudo-portfolio-space.sfo2.cdn.digitaloceanspaces.com/images/bam/computex.jpg"
          alt="computex award"
        />
      </blockquote>
      <blockquote>
        <a href="https://en.wikipedia.org/wiki/You_%28Time_Person_of_the_Year%29">
          2006 Time Magazine's Person of the Year
        </a>
      </blockquote>
      <blockquote>
        New Braunfels - Continental Long Distance Hometown Hero Award
      </blockquote>
      <blockquote>
        New Braunfels - Skinner Legacy Award (named after me)
      </blockquote>
      <blockquote>New Braunfels - Unsung Hero Award</blockquote>
      <blockquote>
        <p className="quote">"He's my favorite child."</p>
        <div className="author">Mom</div>
      </blockquote>
    </>
  )
}
