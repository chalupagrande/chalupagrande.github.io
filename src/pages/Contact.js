import React, { useState, useRef } from 'react'
import Recaptcha from 'react-recaptcha'
import axios from 'axios'
import { reset } from 'nodemon'

export function Contact(props) {
  let recaptchaRef = useRef(null)
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    recpatcha: '',
    submitted: false,
  }
  let [state, setState] = useState(initialState)

  function handleChange(e) {
    let id = e.target.id
    let newState = { ...state }
    newState[id] = e.target.value
    setState(newState)
  }

  function verifyCallback(e) {
    setState({ recaptcha: e })
  }

  function reset(isSubmitted) {
    setState({ ...initialState, submitted: isSubmitted })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    reset(true)
    try {
      console.log(state)
      let r = await axios({
        method: 'post',
        url: '/api/email',
      })
      alert('Message Sent')
    } catch (err) {
      alert('Oops! There was an error sending your message')
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
          placeholder="Jeff Bezos"
          onChange={handleChange}
        />
        <label htmlFor="email">Your Email:</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          placeholder="jeff@amazon.com"
          onChange={handleChange}
        />
        <label htmlFor="subject">Subject:</label>
        <input
          id="subject"
          type="subject"
          name="_replyto"
          placeholder="Help!"
          onChange={handleChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Please Jamie! We need you"
          onChange={handleChange}
        ></textarea>
        <Recaptcha
          className="recaptcha"
          ref={recaptchaRef}
          sitekey="6Lf8z9sUAAAAAPsdlc7r1ULgGTKNPHf37cv-r3Gl"
          verifyCallback={verifyCallback}
        />
        <button type="submit" disabled={state.submitted}>
          SEND
        </button>
      </form>
    </>
  )
}
