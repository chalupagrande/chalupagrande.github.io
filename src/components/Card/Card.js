import React from 'react'
import './Card.css'

export default function Card(props) {
  function handleClick() {
    alert(
      `Okay. Full disclosure, this doesn't work yet. That said, it WILL work soon. So check back soon for super DOPE MERCH!!`
    )
  }
  return (
    <div className="card">
      <div className="card_header">
        <img src={props.image} alt={props.title} />
        <h4>{props.name}</h4>
      </div>
      <div className="card_footer">
        <p>
          Price: <strong>${(props.price / 100).toFixed(2)}</strong>
        </p>
        <button className="btn btn-primary" onClick={handleClick}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}
