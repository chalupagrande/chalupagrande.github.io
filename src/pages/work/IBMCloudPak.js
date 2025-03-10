import React from 'react'

export function IBMCloudPak(props) {
  return (
    <>
      <h1>IBM Cloud Pak</h1>
      <div>
        <div className="item">
          <h3>Challenge</h3>
          <p>
            How might we accelerate a developers interest in adopting a private
            cloud platform?
          </p>
        </div>
        <div className="item">
          <h3>Outcome</h3>
          <p>
            A guided experience, delivered in 3 months, that empowered
            developers to use data models to enrich their apps
          </p>
        </div>
        <div className="item">
          <h3>Role</h3>
          <p>User experience designer, system architecture and developer</p>
        </div>
      </div>
      <img
        className="img stretch"
        src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/cp-whiteboard.png"
        alt="whiteboard"
      />

      <p>
        After multiple explorations and testing sessions we settled on letting
        users build their own journey, based on their expertise and goals.
        Providing different learning modules with clear expectations we
        empowered users to integrate data and enrich their apps, no install
        required.
      </p>
      <p>
        We focused on a fictional "unicorn" persona. Our persona would know
        everything, front to back, about migrating from a monolithic on-premise
        infrastructure, to a distributed, data drive cloud experience. By
        focusing on this mythical persona, we were able to identify the 5 main
        areas of expertise this person would have, or in the case of a real
        developer, would want done for them in an easy to learn and efficient
        way. Those 5 steps were: <strong>Modernize </strong>,
        <strong>Collect</strong>, <strong>Organize</strong>,{' '}
        <strong>Analyze &amp; Build</strong> and{' '}
        <strong>Integrate &amp; Deploy</strong>.
      </p>

      <p>
        After identifying these 5 areas, we were able to provide contextual
        information and mock data for a user to walk through the entire end to
        end experience of bringing their large enterprise app into the modern
        world.
      </p>
      <h4>Demo Video</h4>
      <iframe
        title="IBM Cloud Pak Video"
        width="600"
        height="400"
        src="https://www.youtube.com/embed/MP6t1d6ZxUw"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  )
}
