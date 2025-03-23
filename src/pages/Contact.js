import React, { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import '../styles/contact.css'

export function Contact() {
  let recaptchaRef = useRef(null)
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    recaptcha: '',
    submitted: false,
  }

  let [state, setState] = useState(initialState)

  function handleChange(e) {
    let id = e.target.id
    let newState = { ...state }
    newState[id] = e.target.value
    setState(newState)
  }

  function verifyRecaptcha(e) {
    setState({ ...state, recaptcha: e })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await axios({
        method: 'post',
        url: '/api/email',
        data: state,
      })
      alert('Message Sent')
      setState({ submitted: true })
    } catch (err) {
      alert('Oops! There was an error sending your message')
      setState({ ...initialState, submitted: false })
      console.log('Error', err)
    }
  }

  return (
    <>
      <div className="intro">
        <h1 className="title">Contact</h1>
      </div>
      <p>Shoot me a message!</p>
      <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Inigo Montoya"
          onChange={handleChange}
          value={state.name}
          disabled={state.submitted}
        />
        <label htmlFor="email">Your Email:</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          placeholder="imontoya@brutesquad.com"
          onChange={handleChange}
          value={state.email}
          disabled={state.submitted}
        />
        <label htmlFor="subject">Subject:</label>
        <input
          id="subject"
          type="subject"
          name="_replyto"
          placeholder="You killed my father."
          onChange={handleChange}
          value={state.subject}
          disabled={state.submitted}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Prepare to die."
          onChange={handleChange}
          value={state.message}
          disabled={state.submitted}
        ></textarea>
        <ReCAPTCHA
          className="recaptcha"
          ref={recaptchaRef}
          sitekey="6Lf8z9sUAAAAAPsdlc7r1ULgGTKNPHf37cv-r3Gl"
          onChange={verifyRecaptcha}
        />

        <button
          className="btn btn-primary"
          type="submit"
          disabled={state.submitted && !state.ready}
        >
          SEND
        </button>
      </form>
    </>
  )
}
