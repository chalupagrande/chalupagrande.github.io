import React from 'react'
import './Carousel.css'

function Carousel({ images }) {
  const [picIndex, setIndex] = React.useState(0)
  return (
    <div className="carousel__wrapper">
      {images.map((image, index) => (
        <img className={`carousel__image ${picIndex === index ? "carousel__image--active" : ""}`} key={index} src={image} alt="carousel" />
      ))}
      {images.length > 1 && <div className="carousel__controls">
        <button onClick={() => setIndex(picIndex - 1)} disabled={picIndex === 0}>&lt;</button>
        <button onClick={() => setIndex(picIndex + 1)} disabled={picIndex === images.length - 1}>&gt;</button>
      </div>}
    </div>
  )
}

export default Carousel