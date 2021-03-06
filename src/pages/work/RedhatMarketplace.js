import React from 'react'

export function RedhatMarketplace(props) {
  return (
    <>
      <h1>Redhat Marketplace</h1>

      <h3 className="highlight">A strategic imperative for IBM</h3>
      <div>
        <div className="item">
          <h3>Challenge</h3>
          <p>
            IBM needs a competitive software marketplace to take advantage of
            the RedHat acquisition.
          </p>
        </div>
        <div className="item">
          <h3>Outcome</h3>
          <p>
            A modern software marketplace targeting customers already using
            RedHats ecosystem. The software would be tested and enterprise ready
            for deployment.
          </p>
        </div>
        <div className="item">
          <h3>Role</h3>
          <p>User experience designer and front-end developer</p>
        </div>
      </div>
      <h3>Overview</h3>
      <p>
        With IBM's acquisition of Redhat, there was tremendous pressure to
        design and implement a competitive modern software marketplace for
        Redhat's Enterprise Linux (or RHEL). RHEL had become the defacto
        enterprise linux distro because it was well supported and had a thriving
        community. With growing competition from AWS Marketplace and Bitnami,
        the model for software distribution had changed. Developers and DevOps
        engineers wanted a way to download the software directly into their
        software stack using Docker containers (or in the case of RHEL --
        operators). This makes things like prototyping software integrations
        faster and more reliable. With the merger with Redhat, IBM had a
        strategic position to capitalize of ubiquity of RHEL in the enterprise
        software space.
      </p>
      <p>
        My role was to design prototypes and micro-interactions. It is immensely
        important to develop a sense of trust with any user, especially when
        they are poised to buy really expensive software on behalf of their
        entire company. Simple things like micro-interactions and animations
        have the ability to elevate a product's design, and instill this sense
        of trust, that we, as the seller of these products, cares about quality.
      </p>

      <h3>
        <a href="https://catalog.redhat.com/">Live Product Here</a>
      </h3>
    </>
  )
}
