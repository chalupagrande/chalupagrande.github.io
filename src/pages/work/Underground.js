import React from 'react'

export function Underground(props) {
  return (
    <>
      <h1>Underground Blueprint</h1>
      <div>
        <div className="item">
          <h3>Challenge</h3>
          <p>
            New requirements for contractors around the nation state that
            contractors must be able to provide detailed records of the
            artifacts they burry underground as a part of their developments.
            These new laws present an opportunity to overhaul the way
            contractors tag, id and record their underground assets.
          </p>
        </div>
        <div className="item">
          <h3>Outcome</h3>
          <p>
            A robust administrative dashboard, with an accompanying mobile app
            that allows users to plan and update projects, both in the field and
            from their desk. The system is also capable of generating reports in
            Google’s own proprietary mapping format for easy sharing. The
            primary benefit of this system is an administrative user can
            pre-plan any given project and invite team members to fill in the
            required fields as the admin sees fit. This eliminated ambiguity for
            the contractors in the field and provides a record of all assets
            buried underground.
          </p>
        </div>
        <div className="item">
          <h3>Role</h3>
          <p>User experience designer and Full Stack Developer</p>
        </div>
      </div>
      <h3>Demo Video</h3>
      <video width="600" height="400" controls>
        <source
          src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/video/ugbp.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h3>Technologies</h3>
      <ul>
        <li>Next.js, React</li>
        <li>React Redux</li>
        <li>Leaflet - Mapping</li>
        <li>Node/Express</li>
        <li>MongoDB &amp; Mongoose</li>
        <li>Custom Authentication Service</li>
        <li>NodeMailer</li>
        <li>Ant Design System</li>
        <li>S3 Bucket - Image Storage</li>
        <li>Digital Ocean Droplet for Deployment</li>
      </ul>
    </>
  )
}
