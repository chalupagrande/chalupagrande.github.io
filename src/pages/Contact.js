import React, { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import '../styles/contact.css'

export function Contact(props) {
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
    console.log('VERIFYING')
    setState({ ...state, recaptcha: e })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      console.log(state)
      let r = await axios({
        method: 'post',
        url: '/api/email',
        data: state,
      })
      alert('Message Sent')
      setState({ ...initialState, submitted: true })
    } catch (err) {
      alert('Oops! There was an error sending your message')
      console.log('Error', err)
      setState({ ...initialState, submitted: false })
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
          placeholder="Jeff Bezos"
          onChange={handleChange}
          value={state.name}
        />
        <label htmlFor="email">Your Email:</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          placeholder="jeff@amazon.com"
          onChange={handleChange}
          value={state.email}
        />
        <label htmlFor="subject">Subject:</label>
        <input
          id="subject"
          type="subject"
          name="_replyto"
          placeholder="Help!"
          onChange={handleChange}
          value={state.subject}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Please Jamie! We need you"
          onChange={handleChange}
          value={state.message}
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
