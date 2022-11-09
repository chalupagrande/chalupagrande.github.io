import React from 'react'

export function ShareGro(props) {
  return (
    <>
      <h1>ShareGro</h1>
      <div>
        <div className="item">
          <h3>Challenge</h3>
          <p>How might we make investing easier and less risky.</p>
        </div>
        <div className="item">
          <h3>Outcome</h3>
          <p>
            An app that spreads the inherit risk of investing by sharing a
            portion of each portfolio across its community.
          </p>
        </div>
        <div className="item">
          <h3>Role</h3>
          <p>Lead Fullstack Engineer, Database Schema Designer</p>
        </div>
      </div>

      <img
        className="img small"
        src="https://sudo-portfolio-space.sfo2.digitaloceanspaces.com/images/sharegro.png"
        alt="whiteboard"
      />
      <div>
        <p>
          I was brought into ShareGro to enable its API to talk with the
          Brokerage Platform (Interactive Brokers (would not recommend as their
          API is trash)). This would power the core trading functionality that
          users would interact with to grow their portfolio. However, after
          unforeseen legal issue, the founders of the company decided to switch
          to a new, yet-to-be-determined, brokerage platform.
        </p>
        <p>
          In the meantime, I built a{' '}
          <a href="https://github.com/chalupagrande/backtester">
            stock trading algorithm backtester
          </a>{' '}
          to test investment strategies. So that was pretty cool. After that, I
          re-designed and re-architected their data model and graphql layer.
          However, this endeavor was not finished as they decided to outsource
          development to avoid taxes.
        </p>
        <p>
          There is a lot more to talk about here but I'm, still under NDA. So I
          guess there isn't much more to talk about.{' '}
        </p>

        <a href="https://www.sharegro.com/">ShareGro</a>
      </div>
    </>
  )
}
