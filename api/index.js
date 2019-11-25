// const fs = require('fs')
// const querystring = require('querystring')
const express = require('express')
const nodemailer = require('nodemailer')
const fileupload = require('express-fileupload')

const app = express()

const secrets = {
  user: 'agoner1@yandex.ru',
  pass: 'reP2qv)!OZWS2wlkqvs5?'
}

// app.use(express.json())
// app.use(fileupload())

app.post('/form-submission', (req, res) => {
  console.log('request received')
  console.log(req.body)
  const sendMail = (formdata) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      secure: false,
      auth: {
        user: secrets.user,
        pass: secrets.pass
      }
      // sendmail: true,
      // newline: 'unix',
      // path: '/usr/sbin/sendmail'
    })
    console.log(formdata)
    const name = formdata.name
    const phone = formdata.phone
    if (!name || !phone) {
      return res.json(400, { error: { message: 'Нет данных' } })
    }

    const mailOptions = {
      from: 'Первый Таксопарк <agoner1@yandex.ru>',
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
      console.log(loadedPhotos)
      mailOptions.subject = 'Новая заявка на регистрацию'
      mailOptions.text = `Имя - ${name}, Телефон - ${phone}, email - ${email}`
      mailOptions.html = `
      <ul>
      <li>Имя:  ${name}</li>
      <li>Телефон:  ${phone}</li>
      <li>email:  ${email}</li>
      </ul>`
      for (const photo of loadedPhotos) {
        if (photo) {
          mailOptions.attachments.push({
            filename: photo.filename,
            content: Buffer.from(photo.content.split(',')[1], 'base64')
          })
        }
      }
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(425)
        return console.log(error)
      } else {
        console.log('Message sent: %s', info.messageId)
        res.status(200).json({ message: 'Сообщение отправлено' })
      }
    })
  }

  sendMail(req.body)
  return res
})

module.exports = {
  path: '/api',
  handler: app
}
