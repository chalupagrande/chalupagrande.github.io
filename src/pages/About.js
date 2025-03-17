import React from 'react'
import Emoji from '../components/Emoji'
import { Link } from '@reach/router'

export function About(props) {
  return (
    <>
      <div className="intro">
        <h1 className="title">About Jamie</h1>
      </div>

      <div className="blurb">
        <img className="blurb__image" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/me-amys.png" alt="Jamie" />
        <div className="blurb__text">
          <h4>oh Hi!</h4>
          <p>
            So you're probably like -- "who is this dude?" And then you clicked on the <strong>"About"</strong> section, and here you are! Now you're reading this! Isn't that crazy that I knew that? I'm really intuitive.
          </p>
          <p>Well... since you were wondering, let me tell you a little bit about myself.</p>
          <p><strong>I am a creative solvem probler.</strong> That's what I really love. And I'm good at it too.</p>
          <h5>Background</h5>
          <p>
            I started as a painter, graduating college with a Studio Art degree. Making a living right out of college as a fine artist was a bit more difficult than Basquiat made it seem. So painting turned into design. I started working with a couple of small clients designing their brand guidelines and websites. Through this journey, I quickly fell in love with the web and its idiosyncrasies. So I taught myself the basics of web development.
          </p>
          <p>
            I wanted to go deeper though. Computer science was so fascinating to me! So I attended a “coding bootcamp” called MakerSquare (I think they have been acquired since?) where I truly became a Software Engineer. It was one of the most fascinating and intense learning experiences of my life.
          </p>
          <p>
            After the camp, I got my job at IBM as a Front End Engineer. It was here that I returned to my roots as a designer and attended their 3 month intensive design camp where we learned how to execute design and design strategy at scale. From there we were deployed into our teams. Consisting of a lead designer, a design researcher, a visual designer, a user experience designer and a front end engineer (me). It was in this highly skilled team that we led the design strategy for a number of IBM products.
          </p>
          <p>
            Essentially our process was to ideate, design, build, test with users and repeat.
          </p>
        </div>
      </div>

      <hr />
      <p className="small">Here are a couple links you can use to get to know me</p>
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
      </ul>
      <hr />
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
