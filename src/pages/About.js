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
        <p>Here is a picture of me.</p>
        <div id="portrait" className="portrait">
          <img
            className="cmyk cmyk-c"
            src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/c.png"
            alt=""
          />
          <img
            className="cmyk cmyk-m"
            src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/m.png"
            alt=""
          />
          <img
            className="cmyk cmyk-y"
            src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/y.png"
            alt=""
          />
          <img
            className="cmyk cmyk-k"
            src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/k.png"
            alt=""
          />
        </div>
        <h6>Try hovering over/clicking it -- you: "oooooo"</h6>
        <div className="blurb__text">
          <h4>oh Hi!</h4>
          <p>
            So you're probably like -- "who is this dude?" And then you clicked on the <strong>"About"</strong> section, and here you are! Now you're reading this! Isn't that crazy that I knew that? I'm really intuitive.
          </p>
          <p>Well... since you were wondering, let me tell you a little bit about myself.</p>
          <p><strong>I am a creative solvem probler.</strong> That's what I really love. And I'm good at it too.</p>
          <h5>Background</h5>
          <p>
            I'm a skater punk at heart, and I just want to build cool stuff. When I was 16, the thing I wanted to build was a skatepark. <a target="_blank" rel="noreferrer" href="https://www.spaskateparks.com/projects/new-braunfels-texas-jaws-skatepark/">So, I raised $500,000 for an all concrete, free-to-the-public, world class skatepark in my hometown of New Braunfels TX.</a> Tony Hawk (ever heard of him) gave me $25,000 towards this initiative &mdash; the highest award his foundation gives.
          </p>
          <p>
            In college I really just wanted to make art. So I made art. Got my major in it too. For my senior thesis I put together a city wide tour of installations and paintings that explored memetics and the power of replication.
          </p>
          <p>
            Everybody asks, how did you go from getting your degree in Studio Art to being a Software Engineer? And I always say the same thing: Painting became Design. Design became Web Design. Web Design became Web Development. Web Development became Software Engineering. It's the same process really, just different tools. Figure out what you want to say, figure out the best way to say it, try a few things, and re-evaluate.
          </p>
          <p>
            After some schooling, I started working at IBM Design, which really codified this notion for me. There I worked with a number of diverse creative teams and built some really cool software. Even won awards for it. But, there was one thing that IBM wasn't so good at &mdash; figuring out what to say.
          </p>
          <p>So here I am. Out in the world now &mdash; helping people figure out what they want to say. So… </p>
          <p><strong>What do you wanna say?</strong></p>
          <p>I for one wanna say: <strong>the web doesn't need to be a boring place.</strong> Let's make it fun again!</p>
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
          className="img xs"
          src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/adesign.jpg"
          alt="a'design award"
        />
      </blockquote>
      <blockquote>
        <p>Computex d&amp;i Specialty Award - 2018</p>
        <img
          className="img xs"
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
