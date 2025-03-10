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

      <h1>FAQ</h1>
      <h4>Why chalupagrande?</h4>
      <p>
        It is a running joke with my dad. Just about everytime I talk to him he
        has a different nickname for me. The one I like the most is Chalupa
        Grande.
      </p>
      <h4>Something is broken. Why don't you fix it (updated 6/17/21)</h4>
      <p>
        I think we can both tell that this website is largely a joke. I don't
        want to spend more time on it than is absolutely necessary. It was also
        originally built like 3 years ago, and then refactored to be less
        annoyingly minimalist 2 years ago... and you know what i dont need to
        explain myself. I'll get to it eventually.
      </p>
      <h4>
        Why does this site look so dumb if you're so good at all this stuff?
      </h4>
      <p>
        Why spend more time on self promotion than necessary? Plus. I can spend
        more time on your project! And also other more fun things.
      </p>

      <h4>What web technologies are you familiar with?</h4>
      <p>
        javascript, html5, css3, babel, webpack, gulp, react, redux, carbon
        components, vue, nextjs, git, mongoDB, neo4j,cypher, stripe, twilio,
        apollo, grapql, tensorflowjs, lerna, node, express, mongoose, eslint,
        prettier, jest, threejs, passport, antd design system, scss, yarn,
        docker, kubernetes, d3, p5 <br /> and ... idk.... probably some others
        too.{' '}
      </p>

      <h4>Are you available to work on my project?</h4>
      <p>
        Dunno! Shoot me an email using the{' '}
        <a href="https://etcetera.cr">contact</a> form and I'll get back to you
        as soon as I can!
      </p>

      <h4>What sort of art do you do?</h4>
      <p>
        Mostly mural arts. But I am in the process of combining my propensity
        for technology with my love of visual arts. More to come! If you want to
        see an Augmented Reality Project I did, watch{' '}
        <a href="https://www.youtube.com/watch?v=GtpZDYSYy5s">
          this short documentary about it
        </a>
        . It's goofy.
      </p>

      <h4>What the hell is a chalupa?</h4>
      <p>
        Okay, so this one is kinda annoying. if you{' '}
        <a href="https://lmgtfy.com/?q=chalupa+images">
          Google Image search Chalupa
        </a>
        , you get a bunch of images that look like fried tacos... but here is
        the thing. Growing up I always order Chalupas (from legit Tex-Mex
        restraunts in South Central Texas) and I would receive a FLAT looking
        taco. Basically, a hard shell with a bunch of meat and veggies on it.
        Anyway, they're delicious and now I'm hungry and going to go make lunch.
        This website is over-the-top enough anyway.
      </p>
      <h4>What is your favorite Gif</h4>
      <p>
        <img src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/dance.gif" />
      </p>

    </>
  )
}
