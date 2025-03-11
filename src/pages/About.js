import React from 'react'
import Emoji from '../components/Emoji'
import { Link } from '@reach/router'

export function About(props) {
  return (
    <>
      <div className="intro">
        <h1 className="title">About Jamie</h1>
      </div>

      <p></p>
      <p>Here are a couple links you can use to get to know me</p>
      <ul>
        <li>
          <a href="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/docs/resume2025.pdf">Curriculum Vitae</a>
        </li>
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
        ). Check out my <Link to="/work">Work section</Link> to see those projects.
      </p>
      <h2 className="subtitle">Testimonials &amp; Accolades</h2>
      <blockquote>
        <p>Golden A'Design Award and Competition - 2018</p>
        <img
          className="img small"
          src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/adesign.jpg"
          alt="a'design award"
        />
      </blockquote>
      <blockquote>
        <p>Computex d&amp;i Specialty Award - 2018</p>
        <img
          className="img small"
          src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/computex.jpg"
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
