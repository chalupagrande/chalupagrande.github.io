import React from 'react'

export function Legal(props) {
  return (
    <>
      <div className="intro">
        <h1 className="title">Legal</h1>
        <p>
          I, Jamie Skinner, here-to-fore refered to as "I", have certain rights
          while [Your Name], here-to-fore refered to as "you" have certain
          rights. These rights are enumerated below.{' '}
        </p>
        <p>Please repeat after me:</p>
        <ul>
          <li>"I will not sit stand or lie down"</li>
          <li>"I will not cover any targets"</li>
          <li>"I will not run, jump or climb"</li>
          <li>"I will hold the laser with both hands"</li>
        </ul>

        <p>Oh wait... those are the rules for laser tag. My bad. Okay.</p>
        <p>
          So, through the use of the store I agree I will not capture any
          information more than is neccessary. All billing information is
          processed via <a href="https://stripe.com/">Stripe</a>, a secure
          billing gateway. The only information I capture is your{' '}
          <strong>shipping address</strong> and <strong>email</strong>.
        </p>
        <p>
          For obvious reasons, if I am going to ship you something I will need
          to capture your shipping address. That said. All personal information
          is automatically deleted once the order has been fulfilled, and no
          further personal records are kept.
        </p>
        <h3>Refunds</h3>
        <p>
          Furthermore, <strong>I offer no refunds</strong>. This site is largely
          just a portfolio site to show off some of my work and capabilities. By
          purchasing from the store, you agreeing to this policy.
        </p>
        <h3>Shipping</h3>
        <p>
          Because of the nature of this store, and the fact that, as I said, I
          don't actually want to have any merchandise,{' '}
          <strong>Shipping could take a long time.</strong> I am literally going
          to go on Amazon.com and order the same thing, and then ship it to you.
          These items on Amazon will undoubtedly be cheaper than if you buy them
          here. The store is all pretty much a joke. But, if you want to pay me
          to order something from Amazon and then ship it to you, you know,
          thats kinda up to you.
        </p>
      </div>
    </>
  )
}
