const mailer = require('nodemailer')

const sendingmail = async  (to,subject,text) => {

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user:'bhushandoshi75@gmail.com',
            pass: 'tpch apnt onyb brbb'
        }
    })
    
    const mailOptions = {
        from : 'bhushandoshi75@gmail.com',
        to : to,
        subject : subject ,
        text : text
    }

    const mailers = await transporter.sendMail(mailOptions)
    console.log("mailers ... ", mailers)
    return mailers
}
module.exports={
    sendingmail
}