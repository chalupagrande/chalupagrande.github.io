import React from 'react'

export function Bam(props) {
  return (
    <>
      <div className="intro">
        <h1 className="title">BAM</h1>
        <h2 className="subtitle">Bluemix Availability Monitoring</h2>
      </div>

      <h3 className="highlight">
        My team and I won two international design awards for this!
      </h3>
      <div>
        <div className="item">
          <h3>Challenge</h3>
          <p>
            How might we help developers embrace monitoring and problem-solving
            into their process?
          </p>
        </div>
        <div className="item">
          <h3>Outcome</h3>
          <p>
            An award-winning experience that fosters proactive monitoring in the
            early development stages
          </p>
        </div>
        <div className="item">
          <h3>Role</h3>
          <p>User experience designer and front-end developer</p>
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
          src="https://sudo-portfolio-space.sfo2.digitaloceanspaces.com/video/BAM-guide-video.mp4"
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
