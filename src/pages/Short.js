import React from 'react'
import axios from 'axios'

export function Short(props) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const vanity = e.target.vanity.value
    const destination = e.target.url.value
    const force = e.target.force.checked


    console.log(vanity, destination, force)
    try {
      const response = await axios({
        method: 'post',
        url: '/api/url-short',
        data: { vanity, destination, force },
      })
      console.log(response)

      alert(response.message)
    } catch (err) {
      console.log(err)
      alert('Oops! There was an error shortening your URL')
    }
  }

  return (
    <>
      <div className="intro">
        <h1 className="title">Shortener</h1>
      </div>

      <p>Shorten your URLs here!</p>
      <form className="col form" onSubmit={handleSubmit}>
        <div className="col item">
          <label htmlFor="url">Vanity:</label>
          <input id="vanity" type="text" name="vanity" placeholder="example" />
        </div>
        <div className="col item">
          <label htmlFor="url">URL:</label>
          <input id="url" type="text" name="url" placeholder="https://example.com" />
        </div>
        <div className="col item">
          <label htmlFor="force">Force:</label>
          <input type="checkbox" id="force" name="force" />
        </div>
        <button type="submit">Shorten</button>
      </form>
    </>
  )
}
