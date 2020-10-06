//all that we need inorder to send our email

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const API_Key = "key-b12b98ed46c3bff858cdd37b8b96c43b"; //process.env.Api_key; //process.env.Api_key;
const Domain = "sandbox013cbb5ed7eb4a08aa6002b2deee2205.mailgun.org"; //process.env.Domain; //process.env.Domain;

const auth = {
    auth: {
        api_key: API_Key, // TODO: Replace with your mailgun API KEY process.env.API_KEY ||   
        domain: Domain // TODO: Replace with your mailgun DOMAIN process.env.DOMAIN || 
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));
const sendMail = ( email,subject,emailBody,cb) => {
   
    const mailOptions = {
        from: email, // Twhere the email is coming from
        //to: 'info@starhomecleaners.co.za', // TODO: the receiver email has to be authorized for the free tier
        to: 'takutapfu@gmail.com', // TODO: the receiver email has to be authorized for the free tier
        subject,
        text: emailBody
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;