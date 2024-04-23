const axios = require('axios')

/**
 * Verifies the vaptcha sent from the client. This ensures the route is
 * not accessed by BOTS
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function verifyCaptcha(req, res, next) {
  const { recaptcha } = req.body
  try {
    axios({
      method: 'post',
      url: `https://www.google.com/recaptcha/api/siteverify`,
      Headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        secret: process.env.CAPTCHA_SECRET_KEY,
        response: recaptcha,
        remoteip: req.connection.remoteAddress,
      },
    })
      .then(({ status, data }) => {
        console.log(data, status)
        if (status === 200 && data.success) next()
        else {
          console.log('recaptcha VALUE: ', data)
          res.status(403).send({ message: 'invalid captcha', data })
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: 'error checking recpatcha', error: err })
      })
  } catch (err) {
    res.status(403).send({ message: 'invalid captcha: no captcha present' })
  }
}

module.exports = {
  verifyCaptcha,
}
