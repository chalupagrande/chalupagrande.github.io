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
