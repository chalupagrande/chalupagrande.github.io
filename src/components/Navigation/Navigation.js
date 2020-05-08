import React from 'react'
import { Link } from '@reach/router'

export default function Nav(props) {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/faq">FAQs</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
      </ul>
    </nav>
  )
}
