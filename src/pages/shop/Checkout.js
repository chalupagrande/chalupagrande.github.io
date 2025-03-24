import React, { useState, useContext, useRef, useEffect } from 'react'
import { Link } from '@reach/router'
import { Cart } from '../../components/Cart'
import ReCAPTCHA from 'react-google-recaptcha'
// import { useCheckout } from '@stripe/react-stripe-js'
import { StoreContext } from '../../store'
// import { loadStripe } from '@stripe/stripe-js';
import { CheckoutProvider } from '@stripe/react-stripe-js'

// const stripe = loadStripe("pk_test_tZ1UTEHPHFd9dsZzi03UyKNB", {
//   betas: ['custom_checkout_beta_6'],
// });

// function fetchClientSecret() {
//   return fetch('/api/shop/create-checkout-session', { method: 'GET' })
//     .then((response) => response.json())
//     .then((json) => json.checkoutSessionClientSecret)
// }

// export function CheckoutWrapper(props) {
//   return (
//     <CheckoutProvider stripe={stripe} options={{ fetchClientSecret }}>
//       <CheckoutDetails />
//     </CheckoutProvider>
//   )
// }

export function Checkout(props) {
  let recaptchaRef = useRef(null)

  const [state, setState] = useState({
    agreement: false,
    recaptcha: false,
    email: ''
  })

  const {
    store: { cart },
    updaters: { clearCart, togglePanel },
  } = useContext(StoreContext)

  // const checkout = useCheckout()

  const checkout = false

  function handleChangeEmail(e) {
    setState({ ...state, email: e.target.value })
  }

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

  useEffect(() => {
    console.log("Checkout page loaded.")
  })

  return (
    <>
      <div className="intro">
        <h1 className="title">Checkout</h1>
        <Link to="/">← Back to Shop</Link>
      </div>
      <Cart />

      {/* {checkout && <pre>
        {JSON.stringify(checkout.lineItems, null, 2)}
        Currency: {checkout.currency}
        Total: {checkout.total.total.amount}
      </pre>} */}

      <p>Please fill out the following information</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__item">
          <label htmlFor='email'>Email:</label>
          <input
            id="email"
            type="email"
            required
            onChange={handleChangeEmail}
          />
        </div>
        <div className="form__item">
          <label className="checkbox">
            <input
              id="agreement"
              type="checkbox"
              required
              checked={state.agreement}
              onChange={handleCheckAgreement}
            />
            <span className="small">
              I have read and agree provisions in:{' '}
              <a onClick={() => togglePanel("Legal", true)}>Legal</a>
            </span>
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


