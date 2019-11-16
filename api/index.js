const express = require('express')
const nodemailer = require('nodemailer')

const app = express()
app.use(express.json())

app.post('/form-submission', (req, res) => {
  console.log('request received')
  console.log(req.body.name)
  console.log(req.body.phone)

  const sendMail = (msg) => {
    const formType = 'callback'
    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      auth: {
        user: ***REMOVED***
        pass: '***REMOVED***'
      }
    })

    let subject = ''
    formType === 'callback'
      ? (subject = 'Новый запрос на обратный звонок')
      : (subject = 'Новая заявка на регистрацию')

    const mailOptions = {
      from: ***REMOVED***
      to: ***REMOVED***,
      subject,
      text: JSON.stringify(msg)
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }
      console.log('Message sent: %s', info.messageId)
    })
  }

  // sendMail(req.body)
  res.status(200).json({ message: 'OH YEAH' })
})

module.exports = {
  path: '/api',
  handler: app
}
