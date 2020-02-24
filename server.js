require('dotenv').config()
const express = require('express')
const path = require('path')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')


const app = express()
const port = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use(express.static('./'))

/**
 * MAIL THINGS
 */

const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: process.env.GOOGLE_ACCOUNT,
    clientId: process.env.GOOGLE_EMAIL_CLIENT_ID,
    clientSecret: process.env.GOOGLE_EMAIL_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_EMAIL_REFRESH_TOKEN,
    accessToken: process.env.GOOGLE_EMAIL_ACCESS_TOKEN
  }
}

const emailDefaults = {
  from: process.env.EMAIL_USERNAME, // in my case, my email user is different than account name
  subject: 'TEST EMAIL MESSAGE'
}

const transporter = nodemailer.createTransport(smtpConfig, emailDefaults)


app.post('/api/email', async (req, res) => {
  const {message, email, name, subject} = req.body
  try {
    let result = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: `NEW MESSAGE: ${name}`,
      html: emailTemplate(name, subject, email, message)
    })

    res.status(200).send({message: 'Message Sent', data: result})
  } catch (err) {
    console.log('ERROR', err)
    res.status(500).send({message: 'Error sending message', err})
  }
})


function emailTemplate(name, subject, email, message) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <body>

    <h1>Name: ${name}</h1>


    <h1>Email: ${email}</h1>

    <h1>Subject: ${subject}</h1>

    <h1>Message</h1>
    <p>${message}</p>

    </body>
    </html>
    `
}




app.listen(port)
console.log(`listening on ${port}`)