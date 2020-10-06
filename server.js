
// Chunk 1
//require('dotenv').config();
const express = require('express');
const path = require('path');
const sendMail = require('./mail');
const { log } = console;
const app = express();
const port = process.env.PORT || 5000; //post that host
//const port = 5000;
const cors = require('cors');
const { Route } = require('react-router-dom');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Data parsing (from the form to the backend)
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


if (process.env.NODE_ENV !== 'production') require('dotenv').config();

app.use(cors()); //allows cross origin request

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build'))); //allows us to serve a certain file inside a path

  app.get('*', function(req, res) { //
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Start server
app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

// email, subject, text (receiving data from the client)
app.post('/email', (req, res) => {
    const { customerName,phoneNumber,subject, email, address, comments,natureOfServices,homeDetails, extraServices, date, costs,pickup,delivery,serviceIntervals,requiredServices,payment} = req.body;
    
    var emailBody = "";
    if(subject === "Outdoors Cleaning Services" || subject === "Indoors Cleaning Services") {

        emailBody = "Good Sir/Madam" + '\n\n' + "Would like to request for services with the below details: " + '\n\n\t' + "Nature of service : " + natureOfServices + '\n\t' + "Details : " + homeDetails + '\n\t' +  "Required Service : " + requiredServices   + '\n\t' + "Service Intervals: " + serviceIntervals  + '\n\t' + "Extra Services : " + extraServices  + 
       '\n\t' + "Date : " + date + '\n\t' + "Physical Address : " + address + '\n\t' + "Comments : " + comments + '\n\t' + "Agreed cost payable after services : " + costs + '\n\n' + "Yours faithfully" +  '\n\n' + customerName + '\n' + phoneNumber

   }

   else if(subject === "Pool Services") {

    emailBody = "Good Sir/Madam" + '\n\n' + "Would like to request for services with the below details: " + '\n\n\t' + "Nature of service : " + natureOfServices + '\n\t' + "Pool Dimensions : " + extraServices  + 
   '\n\t' + "Service Intervals : " + serviceIntervals  + '\n\t'+ "Date : " + date + '\n\t' + "Physical Address : " + address + '\n\t' + "Comments : " + comments + '\n\t' + "Agreed cost payable after services : " + costs + '\n\t' + "Payment Plan : " + payment + '\n\n' + "Yours faithfully" +  '\n\n' + customerName + '\n' + phoneNumber

}

   else if(subject === "Laundry" || subject === "Bedding" ||subject === "Alterations" || subject === "Dry Cleaning" ||subject === "Carpet or Sofa") {

       emailBody = "Good Sir/Madam" + '\n\n' + "Would like to request for services with the below details: " + '\n\n\t' + "Nature of service : " + subject + '\n\t' + "Pickup Date : " + pickup + '\n\t' + "Delivery Date : " + delivery  + '\n\t' + "Physical Address : " + address + '\n\t' + "Comments : " + comments + '\n\n' + "Yours faithfully" +  '\n\n' + customerName + '\n' + phoneNumber

   }

   else{
       emailBody = "Good Sir/Madam" + '\n\n' + "Would like to inquire on the below details: " + '\n\n\t' + "Nature of Inquiry : " + subject + '\n\t' +  "Comments : " + comments + '\n\n' + "Yours faithfully" +  '\n\n' + customerName + '\n' + phoneNumber

   }

   console.log(emailBody);
   //console.log(email);
 
    sendMail(email,subject,emailBody, function(err, data) {
        if (err) {
            log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        log('Email sent!!!');
        return res.json({ message: 'Email sent!!!!!' });
    });

});


// Render home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Error page
app.get('/error', (req, res) => {
    res.sendFile(path.join(__dirname, 'EmailResponse', 'error.html'));
});

// Email sent page
app.get('/email/sent', (req, res) => {
    res.sendFile(path.join(__dirname, 'EmailResponse', 'emailMessage.html'));
});

app.post('/payment', (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'zar'
    };
  
    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).send({ error: stripeErr });
      } else {
        res.status(200).send({ success: stripeRes });
      }
    });
  });





















