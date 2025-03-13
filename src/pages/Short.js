import React, { useState, useRef } from 'react'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'

export function Short(props) {
  let recaptchaRef = useRef(null)
  const [state, setState] = useState({
    vanity: '',
    destination: '',
    force: false,
    recaptcha: '',
    submitted: false
  })

  function verifyRecaptcha(e) {
    setState({ ...state, recaptcha: e })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const { vanity, destination, force, recaptcha } = state
    try {
      const response = await axios({
        method: 'post',
        url: '/api/url-shortener',
        data: { vanity, destination, force, recaptcha },
      })

      alert(response.message)
    } catch (err) {
      console.log(err)
      alert('Oops! There was an error shortening your URL')
    }
  }

  function handleChange(e) {
    let id = e.target.id
    let newState = { ...state }
    newState[id] = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setState(newState)
  }

  return (
    <>
      <div className="intro">
        <h1 className="title">URL Shortener</h1>
      </div>

      <p>Shorten your URLs here!</p>
      <form className="row form" onSubmit={handleSubmit}>
        <div className="row item">
          <label htmlFor="vanity">Vanity:</label>
          <input id="vanity" type="text" name="vanity" onChange={handleChange} placeholder="example" value={state.vanity} />
        </div>
        <div className="row item">
          <label htmlFor="destination">URL:</label>
          <input id="destination" type="text" name="destination" onChange={handleChange} placeholder="https://example.com" value={state.destination} />
        </div>
        <div className="row item">
          <label htmlFor="force">Force:</label>
          <input type="checkbox" id="force" name="force" onChange={handleChange} checked={state.force} />
        </div>
        <ReCAPTCHA
          className="recaptcha"
          ref={recaptchaRef}
          sitekey="6Lf8z9sUAAAAAPsdlc7r1ULgGTKNPHf37cv-r3Gl"
          onChange={verifyRecaptcha}
        />
        <button className="btn btn-primary" type="submit">Shorten</button>
      </form>
    </>
  )
}
