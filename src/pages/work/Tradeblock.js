import React from 'react'

export function Tradeblock(props) {
  return (
    <>
      <div className="intro">
        <h1 className="title">Tradeblock</h1>
        <h2 className="subtitle">Sneaker Trading Platform</h2>
      </div>

      <h3 className="highlight">
        My team and I won two international design awards for this!
      </h3>
      <div>
        <div className="item">
          <h3>Challenge</h3>
          <p>How might we build a trusted market for the trade of sneakers</p>
          <h4>Context</h4>
          <p>
            Sneaker heads are a passionate, discerning and loyal group of collectors with a tremendous amount of market influence. So much so that they have developed entire markets of bartering and trade for their most coveted pocessions -- their shoes. These markets are largely ad-hoc, existing at popups, conventions or through social media messages. However, with no dedicated platform, this leaves the buyers and sellers at a high risk for fraud. Our goal, was to design and build a platform where sneaker heads could do their bartering and trading in a controlled and trusted manner, mitigating the risk for fake shoes and bogus wire transfers.
          </p>
        </div>
        <div className="item">
          <h3>Outcome</h3>
          <p>
            <a href="https://tradeblock.us">Tradeblock.us</a> - an app for sneaker heads - by sneaker heads.
          </p>
          <p>
            Platforms exist for the purchase of used shoes - where collectors can send their shoes to be validated by a 3rd party and then sold on their behalf. However this is not the way that these collectors work. They are typically going shoe for shoe. My Union LA x Air Jordan 4 Retro 'Guava Ice' (size 10) for your Air Jordan 4 Retro 'Purple Metallic' (size 10.5). This skips the middle step, and provides a lot more potential upside for the collectors.
          </p>
        </div>
        <div className="item">
          <h3>Role</h3>
          <p>Senior/Lead Fullstack Software Engineer (engineer #4)</p>
        </div>
      </div>
      <h3>Overview</h3>
      <p>
        Developers enjoy coding. Testing and monitoring their apps is tedious
        and boring and often left too late in the lifecycle. Further, existing
        IBM monitoring tools had a steep learning curve and focused on
        data-dumping and letting users figure things out.
      </p>
      <p>
        Focusing on synthetic monitoring, the simulation of end-users going
        through an interface, we built a cloud service that allowed users to
        test their apps, web pages and APIs from different geolocations with no
        setup.
      </p>
      <p>
        Throughout the research process it became clear that users wanted a
        quick overview of existing problems while pointing them in the right
        direction. Our goal was to answer the question: is there anything wrong
        and what do I need to do about it? Hence, we established a clear
        hierarchy to provide crucial data at first glance and more information
        at the users request.
      </p>
      <p>
        Our design was a hierarchical concept, inspired by TV’s
        picture-in-picture concept (if you’re old enough) allowed users to
        compare the performance across metrics while maintaining focus on
        primary data. Below, a view of all application tests and downtime
        metrics.
      </p>
      <a href="https://idesignawards.com/winners/zoom.php?eid=9-16286-18">
        IDA Award
      </a>
      <h3>Demo Video</h3>
      <video width="600" height="400" controls>
        <source
          src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/video/BAM-guide-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <p>
        There is a lot more to talk about here, but I'll get to that later.{' '}
      </p>
    </>
  )
}
