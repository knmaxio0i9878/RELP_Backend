const mailer = require('nodemailer')
const { create } = require('../models/AmenitiesModel')

const sendingMail = async(to,subject,text) =>{
   
    const transporter = mailer.createTransport({
        service:'gmail',
        auth:{
            user:"pmakwana1908@gmail.com",
            pass:'ygpiwimazhbdotty'
        }
    })
}
module.exports={sendingMail}