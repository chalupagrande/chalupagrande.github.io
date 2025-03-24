import React, { useContext } from 'react'
import { StoreContext } from '../store'

export function FAQ(props) {
  const {
    updaters: { togglePanel },
  } = useContext(StoreContext)
  return (
    <>
      <div className="intro">
        <h1 className="title">FAQs</h1>
      </div>

      <h4>Why chalupagrande?</h4>
      <p>
        It is a running joke with my dad. Just about everytime I talk to him he
        has a different nickname for me. The one I like the most is Chalupa
        Grande.
      </p>

      <h4>Something is broken. Why don't you fix it</h4>
      <p>
        I originally built like 6 years ago, and then refactored to be less
        annoyingly minimalist 4 years ago... and you know what i don't need to
        explain myself. I'll get to it eventually.
      </p>

      <h4>What technologies are you familiar with?</h4>
      <p>
        ah geez... too many to list. I mostly write in Typescript, but im not too bad at Python. Here are some technologies you might be interested in: React, NextJS, React Native, GraphQL, Figma, Miro, Jira, Photoshop, Illustrator, Docker, BullMQ, Redis, Postgres, MongoDB, Stripe, d3, ThreeJS... I can keep going.
      </p>

      <h4>Are you available to work on my project?</h4>
      <p>
        Dunno! Shoot me an email using the{' '}
        <a onClick={() => togglePanel("Contact", true)}>contact</a> form and I'll get back to you
        as soon as I can!
      </p>

      <h4>What sort of art do you do?</h4>
      <p>
        Mostly mural arts. Or rather big pieces with spray paint. But I am in the process of combining my propensity for technology with my love of visual arts. More to come! If you want to see an Augmented Reality Project I did, watch{' '}
        <a href="https://www.youtube.com/watch?v=GtpZDYSYy5s">
          this short documentary about it
        </a>
        . It's goofy and kinda makes no sense.
      </p>

      <h4>What the hell is a chalupa?</h4>
      <p>
        It's like a fried taco I guess.
      </p>

      <h4>What the hell is a chalupa grande?</h4>
      <p>
        It's a big fried taco.
      </p>

      <h4>What is your hidden talent?</h4>
      <p>
        I've memorized over 100 digits of pi.
      </p>

      <h4>What is your favorite gif?</h4>
      <img src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/images/dance.gif" />
    </>
  )
}
