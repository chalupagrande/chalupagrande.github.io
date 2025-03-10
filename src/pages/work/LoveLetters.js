import React from 'react'

export function LoveLetters(props) {
  return (
    <>
      <h1>Love Letters</h1>
      <div>
        <div className="item">
          <h3>Challenge</h3>
          <p>
            The Covid-19 Pandemic and the isolation felt by the global lock-down
          </p>
        </div>
        <div className="item">
          <h3>Outcome</h3>
          <p>
            Reframing. Separation = Love. A site with the intention to reframe
            the feeling of isolation as a act of love.
          </p>
        </div>
        <div className="item">
          <h3>Role</h3>
          <p>
            Full Stack Developer &amp; Designer, and... all the rest of the
            things.
          </p>
        </div>
      </div>
      <h4>Screenshot:</h4>
      <img
        className="img medium"
        src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/love-letters.png"
        alt="love letters screenshot"
      />
      <h3>Overview</h3>
      <p>
        During any challenging situation, I find it helpful to reframe the
        problem to see if there is a way I can help, simply by re-examining the
        situation. The global lock-down presented a unique situation where
        almost everyone on the planet was experiencing some fraction of what
        they were used to, only being able to leave isolation for essential
        functions, for fear of crippling the public health systems in place.
        This lead to parks, monuments, museums, roads, bars and anywhere else
        where groups of people might gather, emptying by a significant factor.
      </p>
      <p>
        For many, this emptiness reflected the loneliness they themselves felt.
        However, we (<a href="https://upandadam.co">Adam Lehman</a> and myself)
        sought to reframe this situation. The idea is that people all over the
        world are practicing social distancing, and by doing so they are writing
        "love letters" to everyone else, especially our essential workers. By
        not going to bars or parks and staying home, we are showing our
        community that we care, and that is something we should feel proud of.
      </p>
      <p>
        The site took the form of a map populated by markers that, when clicked,
        would show images of otherwise popular destinations in that area. These
        powerful images would be accompanied by audio recordings taken at that
        spot. The effect being a world wide collaborative collage of the "love
        letters" we were writing to each other.{' '}
      </p>
      <h3>Addendum</h3>
      <p>
        Additionally, since I built this site for non-technical users, I also
        deployed a custom CMS that would allow them to upload images and audio,
        as well as customize pages and posts.
      </p>
      <p>Technology used:</p>
      <ul>
        <li>KeystoneJS - CMS</li>
        <li>React</li>
        <li>React Router</li>
        <li>Mapbox - Custom Mapping</li>
        <li>React GL - Mapping</li>
        <li>Node/Express Server</li>
        <li>Digital Ocean Droplet</li>
      </ul>
    </>
  )
}
