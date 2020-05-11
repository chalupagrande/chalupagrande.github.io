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

function purchaseEmailTemplate({ clientInfo, session }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <body>

    <h4>Hello ${clientInfo.name}</h4>
    <p>Thank you for your purchase! Here is your order information from chalupagrande.com</p>
    <p>Order ID: <strong>${clientInfo.clientId}</strong> for <strong>${
    clientInfo.email
  }</strong></p>
    <h4>Items</h4>
      ${getItemsHTML(session.display_items)}
    <h4>Shipping Address:</h4>
    <p>
      ${clientInfo.address1}<br/>
      ${clientInfo.address2}<br>
      ${clientInfo.city}<br/>
      ${clientInfo.state}<br/>
      ${clientInfo.zip}
    </p>

    </body>
    </html>
    `
}

function getItemsHTML(items) {
  let result = `<ul>`
  items.forEach(
    (e) =>
      (result += `<li style="padding: 0 5px; display: flex; align-items: center; max-height:50px;">
      <img style="max-width: 50px; height: auto; padding-right: 10px;" src=${
        e.custom.images[0]
      } alt=${e.custom.name}>
      ${e.custom.name} -- $${(e.amount / 100).toFixed(2)}</li>`)
  )
  result += `</ul>`
  return result
}

const transporter = nodemailer.createTransport(smtpConfig, emailDefaults)

module.exports = { transporter, emailTemplate, purchaseEmailTemplate }
