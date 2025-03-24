const path = require('path')
require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
})
const express = require('express')
const bodyParser = require('body-parser')
const { verifyCaptcha } = require('./middleware')
const {
  transporter,
  emailTemplate,
  purchaseEmailTemplate,
} = require('./mailer')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const products = require('./products')

const cors = require('cors')
const Stripe = require('stripe')
const whitelist = require('./whitelist')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST, {
  apiVersion: '2020-03-02; custom_checkout_beta=v1',
})

const app = express()
const port = process.env.PORT || 4000

// setup cors
const isProduction = process.env.NODE_ENV === 'production'
const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

if (isProduction) {
  corsOptions.origin = function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

/**
 * MIDDLEWARES
 */
app.use(cors(corsOptions))
app.use(bodyParser.json())

/**
 * ENABLE ROUTES
 */
const buildPath = path.resolve('./build')
const frontEndRoutes = [
  '/',
  '/about',
  '/faq',
  '/contact',
  '/work',
  '/work/*',
  '/shop/*',
  '/east',
  '/shop',
  '/shop/checkout',
  '/short',
  '/rhonda',
  "/legal",
  "/junk",
  "/music"
]
frontEndRoutes.forEach((r) => {
  app.use(r, express.static(buildPath))
})

/**
 * API
 */

app.post('/api/email', verifyCaptcha, async (req, res) => {
  const { message, email, name, subject } = req.body
  try {
    let result = await transporter.send({
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: `NEW MESSAGE: ${name}`,
      html: emailTemplate(name, subject, email, message)
    })
    res.status(200).send({ message: 'Message Sent', data: result })
  } catch (err) {
    console.log('ERROR', err)
    res.status(500).send({ message: 'Error sending message', err })
  }
})

// app.post('/api/shop/create-checkout-session', async (req, res) => {
//   console.log("CREATING CHECKOUT SESSION")
//   const session = await stripe.checkout.sessions.create({
//     mode: 'payment',
//     ui_mode: 'custom',
//     return_url: 'https://chalupagrande.com/shop/success',
//     line_items: [
//       {
//         price: "price_1R4mYFEQG2PxITMFOkcYvk5J",
//         quantity: 1,
//       },
//     ],
//   });

//   res.json({ checkoutSessionClientSecret: session.client_secret });
// });


// app.get('/api/shop/client-secret', async (req, res) => {
//   res.json({ clientSecret: process.env.STRIPE_SECRET_KEY_TEST });
// })

app.get('/api/shop/products', async (req, res) => {
  res.json({ products });
});


app.listen(port)
console.log(`listening on ${port}`)
