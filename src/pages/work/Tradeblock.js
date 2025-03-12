import React from 'react'

export function Tradeblock(props) {
  return (
    <>
      <div className="intro">
        <h1 className="title">Tradeblock</h1>
        <h2 className="subtitle">Sneaker Trading Platform</h2>
      </div>
      <div>
        <div className="item">
          <h3>Challenge</h3>
          <p>How might we build a trusted market for the trade of sneakers</p>
          <h4>Context</h4>
          <p>
            Sneaker heads are a passionate, discerning and loyal group of collectors with a tremendous amount of market influence. So much so that they have developed entire markets of bartering and trade for their most coveted possession -- their shoes. These markets are largely ad-hoc, existing at popups, conventions or through social media messages.
          </p>

          <p>
            Platforms exist to buy and sell used shoes - where collectors can send their shoes to be validated by a 3rd party and then sold on their behalf. However this is not the way that these collectors work. They are typically going shoe for shoe. This skips the middle step, and provides a lot more potential upside for the collectors.
          </p>

          <p>
            Our goal was to design and build a platform where sneaker heads could do their bartering and trading in a controlled and trusted manner, mitigating the risk for fake shoes and bogus wire transfers.
          </p>
        </div>
        <div className="item">

          <h3>Outcome</h3>
          <p>
            <a href="https://tradeblock.us">Tradeblock.us</a> - an app for sneaker heads - by sneaker heads.
          </p>
          <img className="img small" src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/tradeblock-dashboard.jpg" alt="Tradeblock Sneaker Trading Platform" width="200" />

        </div>
        <div className="item">
          <h3>My Contribution - Part 1</h3>
          <h3>Role</h3>
          <h4>Senior/Lead Fullstack Software Engineer (engineer hire #2)</h4>
          <p>
            I worked at tradeblock first as a contractor. They had spun up a working v1 where users were able to send trade offers to each other. My Union LA x Air Jordan 4 Retro 'Guava Ice' (size 10) for your Air Jordan 4 Retro 'Purple Metallic' (size 10.5). Once accepted by both sides the shoes would be shipped to a Tradeblock warehouse in Houston, where our shoe experts would validate if the shoes were authentic. Then, if everything went smoothly, the shoes would then be shipped to their respective new owners.
          </p>
          <p>
            But that is just the happy path. As you can imagine, there are a lot of nuances to this process. What happens if the shoes are fake? What happens if 1 side does not send their shoes? What happens if the shoes are not in the condition they were reported to be in? All of these cases have a different branching path in the application. <strong>My task was to design and build a comprehensive admin portal for employees of Tradeblock to track all of these trades through their lifecycle.</strong> And given the company's growth and the sheer number of incoming support tickets, they needed it fast.
          </p>
        </div>
        <div className="item">
          <h3>Outcome</h3>
          <p>
            A comprehensive admin portal for monitoring and maintaining every aspect of the platform.
          </p>
          <p>
            I want to highlight here that I was not given designs, user stories, or really any direction of any kind on how to solve these problems. I was simply given some of the problems, and asked to solve them. All of the designs, the information hierarchy, user experience and user flows, were my own conception, under a tight deadline.
          </p>
          <p>
            The admin portal would logically display all of the important information that was happening throughout the trade lifecycle. The shoes involved, their condition, shipping information, approval status, and their location in the warehouse. The entire shoe catalog was searchable,  and all aspects of the trade lifecycle could be updated based on the employee's permission level.
          </p>

          <p>
            I used NextJS to spin up a rapid prototype that interfaced with our existing GraphQL backend (which lived on a service called 8Base) and AntD as my component library.
          </p>
          <h3>Technologies</h3>
          <ul>
            <li>Typescript</li>
            <li>NextJS</li>
            <li>GraphQL</li>
            <li>AntD</li>
          </ul>
        </div>
      </div>
    </>
  )
}
