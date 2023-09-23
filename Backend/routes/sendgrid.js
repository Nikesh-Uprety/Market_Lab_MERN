const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("SG.cG_Q6rymSxeMS8VYlpQApQ.sj_Y686rUbVNVo7Ebjy3c8lco3gwowa-MkAqUk6O78w")
console.log()
const msg = {
    to: 'upretynikesh123@gmail.com', // Change to your recipient
    from: 'marketlab.100@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })