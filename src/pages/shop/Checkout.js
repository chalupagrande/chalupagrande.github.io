import React, { useState, useContext, useRef } from 'react'
import { Link } from '@reach/router'
import { Cart } from '../../components/Cart'
import ReCAPTCHA from 'react-google-recaptcha'
import { useCheckout } from '@stripe/react-stripe-js'
import { StoreContext } from '../../store'

export function Checkout(props) {
  let recaptchaRef = useRef(null)
  const {
    store: { cart },
    updaters: { clearCart, togglePanel },
  } = useContext(StoreContext)

  const checkout = useCheckout()

  const [state, setState] = useState({
    agreement: false,
    recaptcha: false,
  })

  function handleSubmit(e) {
    e.preventDefault()
    alert("This integration is still under construction. Thank you for your interest and check back later. If you'd like to make a purchase you can email me through the contact form.")
  }

  function verifyRecaptcha(e) {
    setState({ ...state, recaptcha: e })
  }

  function handleCheckAgreement(e) {
    setState({ ...state, agreement: e.target.checked })
  }

  return (
    <>
      <div className="intro">
        <h1 className="title">Checkout</h1>
        <Link to="/shop">← Back to Shop</Link>
      </div>
      <Cart />

      <pre>
        {JSON.stringify(checkout.lineItems, null, 2)}
        Currency: {checkout.currency}
        Total: {checkout.total.total.amount}
      </pre>

      <h3>Shipping Address.</h3>
      <form onSubmit={handleSubmit}>
        <div className="form__item">
          <label className="checkbox">
            <input
              id="agreement"
              type="checkbox"
              required
              checked={state.agreement}
              onChange={handleCheckAgreement}
            />
            I have read and agree to the things in:{' '}
            <a onClick={() => togglePanel("Legal", true)}>Legal</a>
          </label>
        </div>
        <ReCAPTCHA
          className="recaptcha"
          ref={recaptchaRef}
          sitekey="6Lf8z9sUAAAAAPsdlc7r1ULgGTKNPHf37cv-r3Gl"
          onChange={verifyRecaptcha}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={cart.length === 0}
        >
          Proceed to checkout
        </button>
      </form>
    </>
  )
}
