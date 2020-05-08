const nodemailer = require('nodemailer')

/**
 * MAIL THINGS
 */

const emailDefaults = {
  from: process.env.EMAIL_USERNAME, // in my case, my email user is different than account name
  subject: 'TEST EMAIL MESSAGE',
}

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
    accessToken: process.env.GOOGLE_EMAIL_ACCESS_TOKEN,
  },
}

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

const transporter = nodemailer.createTransport(smtpConfig, emailDefaults)

module.exports = { transporter, emailTemplate }
