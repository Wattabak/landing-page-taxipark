const fs = require('fs')
const express = require('express')
const nodemailer = require('nodemailer')
const fileupload = require('express-fileupload')

const app = express()

app.use(express.json())
app.use(fileupload())

app.post('/form-submission', (req, res) => {
  console.log('request received')
  console.log(req.body)

  const sendMail = (formdata) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      secure: false,
      auth: {
        user: 'agoner1@yandex.ru',
        pass: 'reP2qv)!OZWS2wlkqvs5?'
      }
    })

    const name = formdata.name
    const phone = formdata.phone

    const mailOptions = {
      from: 'Влад Табаков <agoner1@yandex.ru>',
      to: 'vl.tab.kov@gmail.com',
      subject: 'Новый запрос на обратный звонок',
      text: `Имя - ${name}, Телефон - ${phone}`,
      html: `
      <ul>
      <li>Имя:  ${name}</li>
      <li>Телефон:  ${phone}</li>
      </ul>`,
      attachments: []
    }

    if (formdata.formType === 'registration') {
      const email = formdata.email
      const loadedPhotos = formdata.loadedPhotos
      mailOptions.subject = 'Новая заявка на регистрацию'
      mailOptions.text = `Имя - ${name}, Телефон - ${phone}, email - ${email}`
      mailOptions.html = `
      <ul>
      <li>Имя:  ${name}</li>
      <li>Телефон:  ${phone}</li>
      <li>email:  ${email}</li>
      </ul>`
      console.log(mailOptions)
      for (const photo in loadedPhotos) {
        if (photo) {
          console.log(photo)
          mailOptions.attachments.push({
            filename: photo.filename,
            content: fs.createReadStream(photo.filename)
          })
        }
      }
      console.log(mailOptions)
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(425)
        return console.log(error)
      } else {
        console.log('Message sent: %s', info.messageId)
        res.status(200).json({ message: 'OH YEAH' })
      }
    })
  }

  sendMail(req.body)
})

module.exports = {
  path: '/api',
  handler: app
}
