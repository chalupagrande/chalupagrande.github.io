import React from 'react'

export function Home(props) {
  return (
    <>
      <div className="intro">
        <h1 className="title">Hi!</h1>
        <h2 className="subtitle">I'm Jamie.</h2>
      </div>
      <p>Here is a picture of me.</p>
      <div id="portrait" className="portrait">
        <img
          className="cmyk cmyk-c"
          src="/images/c.png"
          alt=""
        />
        <img
          className="cmyk cmyk-m"
          src="/images/m.png"
          alt=""
        />
        <img
          className="cmyk cmyk-y"
          src="/images/y.png"
          alt=""
        />
        <img
          className="cmyk cmyk-k"
          src="/images/k.png"
          alt=""
        />
      </div>
      <h6>Try hovering over/clicking it -- you: "oooooo"</h6>
      <p>
        Alright, here is the deal: &nbsp;
        <strong>
          I am an award-winning, full stack software developer, designer and
          artist based in Austin, Texas.
        </strong>
      </p>
      <p>You might be thinking...</p>
      <blockquote>
        Wow! That's really cool. Why does your website look like you made it in
        1997?
      </blockquote>

      <p>
        Well, it's a vibe... PLUS, simple sites are responsive, accessible and
        extremely performant by default!
      </p>

      <p>
        Anyway, the less time I spend convincing you that I am actually good at
        my job, the more time I can spend on <strong>your cool project!</strong>{' '}
        Got an idea for an app, website, weird installation, street art mural or
        skatepark? Shoot it my way and let's get this thing started!
      </p>
    </>
  )
}
