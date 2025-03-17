import React, { useContext } from 'react'
import { StoreContext } from '../../store'

export function IBMCloudApplicationMonitoring() {
  const {
    updaters: { togglePanel },
  } = useContext(StoreContext)
  return (
    <>
      <div className="intro">
        <h1 className="title">IBM Cloud Application Monitoring</h1>
      </div>
      <div>
        <div className="item">
          <h3>Challenge</h3>
          <p>
            How might customers transition away from legacy monitoring software?
          </p>
        </div>
        <div className="item">
          <h3>Outcome</h3>
          <p>
            A platform to help meet current customer needs and guide them
            towards future technologies
          </p>
        </div>
        <div className="item">
          <h3>Role</h3>
          <p>
            User experience designer, system architecture and front-end
            developer
          </p>
        </div>
      </div>
      <h3>Our Problem</h3>
      <p>This...</p>
      <img
        className="img"
        width="400"
        src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/legacy.jpg"
        alt="legacy"
      />

      <p>
        IBM's current monitoring solution was criminal. The design was not
        intuitive and would also leave users lost in a series of menus.{' '}
      </p>
      <p>
        We tackled the problem by first understanding all the facets of a
        cloud/on-premise application, and how these variables might affect an
        application's performance.
      </p>
      <h3>Approach</h3>
      <p>
        After we came to an understanding of all the hidden variables we created
        a robust data structure for presenting all of the variables in an
        "glance-able" way. The goal was to give a DevOps professional a
        dashboard where they would be able to diagnose performance issues
        quickly, and perhaps even catch them before they occur. This meant
        giving the entire environments highly "suspect" metrics to the user in a
        concise and consumable data drive graph.
      </p>
      <p>
        This product took a look at infrastructure from the bare metal up.
        Rather than looking at monitoring from an application level, we designed
        a system for understanding the entire scope of your application
        infrastructure in the cloud. These tools, coupled with the insights from{' '}
        <a onClick={() => togglePanel("BAM", true)}>BAM</a>, would give you a robust set of tools
        for application and infrastructure monitoring in a multi-cluster
        Kubernetes environment.
      </p>
      <p>
        The entire application also provided robust tools for fixing and
        alerting the appropriate parties that something has gone wrong.{' '}
      </p>
      <h3>
        A small prototype I built:{' '}
        <a href="http://dep-map.mybluemix.net/">Prototype</a>
      </h3>
      <p className="small">
        * A couple interactions are broken because the project was sunset before
        I had a chance to finish
      </p>
      <h3>Demo Video</h3>
      <iframe
        title="Monitoring Prototype"
        width="600"
        height="400"
        src="https://www.youtube.com/embed/xQJr0iO7SIs"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  )
}
