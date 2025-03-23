import React from 'react'

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
        <p className="small">Try hovering over/clicking it -- you: "oooooo"</p>
        <div className="location">
          <img
            src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/icons/location-icon.png"
            alt="austin texas"
            width="25"
            height="25"
          />
          <p>Austin, Texas</p>
        </div>
        <div className="blurb__text">
          <p><strong>Hey!</strong></p>
          <p>
            Thanks for visiting my site! I'm glad you're here. If you will, allow me a little bit of shameless self promotion:
          </p>
          <p>
            I am a relentlessly curious creative problem solver and award winning designer with over 10 years of experience in a wide range of disciplines. I've built my career around being a true generalist, able to use the many tools in my toolbelt to research, design, build and scale just about any form of software product.
          </p>
          <p>
            Working with many cross disciplinary teams of different sizes, I've had the pleasure of learning from and working with a wide range of talented designers, engineers and founders. Alongside these extremely talented teams, I've been able to move the needle on everything from multinational enterprise software to fintech startups.
          </p>
          <p>
            My skill set is about as wide as my experience. While I'm probably most seasoned professionally as a fullstack engineer, I come from an art and design background, graduating from Kalamazoo College with a Studio Art Major. Furthermore, more recently I've led my clients' engineering teams as a project manager and a product owner, getting buy-in from key stakeholders, consulting designers, writing engineering tickets and managing scrum rituals.
          </p>
          <p>
            Honestly, for me — it's all the same skill set. Whether you're confronted with a blank canvas or struck by a hairbrained startup idea — figure out what you're really trying to say and then figure out the best way to say it. Research, design, build, test, iterate.
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
