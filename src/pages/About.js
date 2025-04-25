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
            Thanks for visiting my site! I'm glad you're here. So a little bit about me:
          </p>
          <p>
            I am a relentlessly curious, creative, problem-solver, award-winning designer, and engineer with over 10 years of experience in a wide range of disciplines. My work ranges from: designing for accessibility standards on enterprise software, to database design for a fintech app, to managing and building computer vision prototypes at an emerging golf startup. I've built my career around being a true generalist. I'm flexible enough to fit into numerous roles but specialized enough to research, design, build and scale just about any form of software product.
          </p>
          <p>
            That said, first and foremost I'm a collaborator. I've had the pleasure of learning from and working with a wide range of talented designers, engineers and founders at multinational corporations like IBM as well as market-maker startups like Tradeblock. It is amongst these small creative teams that I feel most energized and effective.
          </p>
          <p>
            My skill set is about as wide as my experience. While I'm probably most seasoned professionally as a fullstack engineer, I come from an art and design background, graduating from Kalamazoo College with a Studio Art Major. However, more recently I've led my clients' engineering teams as a project manager and product owner, getting buy-in from key stakeholders, consulting designers, writing engineering tickets and managing scrum rituals.
          </p>

          <p>So now that you know what I do, let me tell you why I do it. I am a designer because I want to solve problems. I want to be a person that shapes the world around them. A person that is able to understand a problem and build an elegant solution.</p>

          <p>Cuz whats more satisfying than that?! Seeing something you built actually be useful and bring joy to others &mdash; thats the gift.</p>

          <p>So what do you say? Let's make something cool!</p>
        </div>
      </div>

      <hr />
      <p className="small">Here are a couple links you can use to get to know me</p>
      <ul>
        <li>
          <a href="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/docs/jamie-skinner-resume-2025.pdf">Curriculum Vitae</a>
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
