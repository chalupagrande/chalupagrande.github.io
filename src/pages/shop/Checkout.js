import React, { useState, useContext, useRef } from 'react'
import { Cart } from '../../components/Cart'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import states from '../../assets/states.json'
import { Link } from '@reach/router'
import ls from 'local-storage'
import { StoreContext } from '../../store'

export function Checkout(props) {
  let recaptchaRef = useRef(null)
  const {
    store: { cart, stripePromise },
    updaters: { clearCart },
  } = useContext(StoreContext)

  const requiresShipping = cart.reduce(
    (a, el) => a || el.requiresShipping,
    false
  )

  const initialState = {
    clientInfo: {
      name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      email: '',
      clientId: '_' + Math.random().toString(36).substr(2, 9),
    },
    agreement: false,
    recaptcha: '',
  }

  let [state, setState] = useState(initialState)

  function handleChange(e) {
    let stateDupe = { ...state }
    let id = e.target.id
    if (id === 'agreement') stateDupe.agreement = e.target.checked
    else stateDupe.clientInfo[id] = e.target.value
    setState(stateDupe)
  }

  function verifyRecaptcha(e) {
    setState({ ...state, recaptcha: e })
  }

  async function checkout(e) {
    e.preventDefault()
    try {
      // clear sku because Stripe doesnt like extra parameters
      const line_items = cart.map((el) => {
        delete el.sku
        delete el.requiresShipping
        return el
      })

      // set cart in localstorage
      ls.set('checkout-session', { cart, ...state })

      // fetch session id from server and stripe
      const r = await axios({
        method: 'post',
        url: '/api/payment',
        data: { cart: line_items, ...state },
      })

      console.log('RESPONSE', r)
      let { session } = r.data.data

      ls.set('checkout-session', {
        cart,
        clientInfo: state,
        sessionId: session.id,
      })

      //redirect to checkout page with stripe
      const stripe = await stripePromise
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      })

      clearCart()
    } catch (err) {
      alert('OOPS! There was an error during checkout. Sorry. Try again later.')
      recaptchaRef.current.reset()
      console.log('Checkout ERROR', err)
    }
  }

  const s = state
  const stateOptions = Object.entries(states).map(([abr, name]) => (
    <option key={abr} value={name}>
      {abr}-{name}
    </option>
  ))
  return (
    <>
      <div className="intro">
        <h1 className="title">Checkout</h1>
      </div>
      <Cart />
      {requiresShipping && (
        <p>
          NOTE: Items will only ship in the United States. Also shipping could
          take a while because I'm literally going to order it from Amazon and
          then ship it to you. So, you know... that could take a while. But
          isn't this entire WORKING SHOP EXPERIENCE COOL AS HELL?!{' '}
        </p>
      )}
      <h3>Shipping Address.</h3>
      <form className="form" onSubmit={checkout}>
        {requiresShipping ? (
          <>
            <div className="form__item">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                required
                onChange={handleChange}
                value={s.name}
              />
            </div>
            <div className="form__item">
              <label htmlFor="address1">Address:</label>
              <input
                id="address1"
                type="text"
                required
                onChange={handleChange}
                value={s.address1}
              />
              <input
                id="address2"
                type="text"
                onChange={handleChange}
                value={s.address2}
              />
            </div>
            <div className="form__item">
              <label htmlFor="city">City:</label>
              <input
                id="city"
                type="text"
                required
                onChange={handleChange}
                value={s.city}
              />
            </div>
            <div className="form__item">
              <label htmlFor="state">State:</label>
              <select
                name="state"
                id="state"
                required
                onChange={handleChange}
                value={s.state}
              >
                {stateOptions}
              </select>
            </div>
            <div className="form__item">
              <label htmlFor="zip">Zipcode:</label>
              <input
                id="zip"
                type="text"
                required
                onChange={handleChange}
                value={s.zip}
              />
            </div>
            <hr />
          </>
        ) : (
          <p>
            <strong>NOTE:</strong> Looks like your items do not require
            shipping. Fill in your email below and "proceed to checkout" to fill
            in your billing information.
          </p>
        )}
        <div className="form__item">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            required
            onChange={handleChange}
            value={s.email}
          />
        </div>
        <div className="form__item">
          <label className="checkbox">
            <input
              id="agreement"
              type="checkbox"
              required
              checked={state.agreement}
              onChange={handleChange}
            />
            I have read and agree to the things in:{' '}
            <Link to="/legal">Legal</Link>
          </label>
        </div>
        <ReCAPTCHA
          className="recaptcha"
          ref={recaptchaRef}
          sitekey="6Lf8z9sUAAAAAPsdlc7r1ULgGTKNPHf37cv-r3Gl"
          onChange={verifyRecaptcha}
        />
        <button
          htmltype="submit"
          className="btn btn-primary"
          disabled={cart.length === 0}
        >
          Proceed to checkout
        </button>
      </form>
    </>
  )
}
