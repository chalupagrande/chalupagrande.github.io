require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { verifyCaptcha } = require('./middleware')
const { transporter, emailTemplate } = require('./mailer')
const path = require('path')

const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json())
const buildPath = path.resolve('./build')

const frontEndRoutes = ['/', '/about', '/faq', '/contact', '/work', '/work/*']
frontEndRoutes.forEach((r) => {
  app.use(r, express.static(buildPath))
})

app.post('/api/email', verifyCaptcha, async (req, res) => {
  const { message, email, name, subject } = req.body
  try {
    let result = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: `NEW MESSAGE: ${name}`,
      html: emailTemplate(name, subject, email, message),
    })

    res.status(200).send({ message: 'Message Sent', data: result })
  } catch (err) {
    console.log('ERROR', err)
    res.status(500).send({ message: 'Error sending message', err })
  }
})

app.listen(port)
console.log(`listening on ${port}`)
