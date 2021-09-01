// Chunk 1
//require('dotenv').config();
const express = require("express");
const path = require("path");
const sendMail = require("./mail");
const { log } = console;
const app = express();
const port = process.env.PORT || 5000; //post that host
//const port = 5000;
const cors = require("cors");
const { Route } = require("react-router-dom");
//const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Data parsing (from the form to the backend)
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

if (process.env.NODE_ENV !== "production") require("dotenv").config();

app.use(cors()); //allows cross origin request

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build"))); //allows us to serve a certain file inside a path

  app.get("*", function (req, res) {
    //
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// Start server
app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

// email, subject, text (receiving data from the client)
app.post("/email", (req, res) => {
  const {
    customerName,
    phoneNumber,
    subject,
    email,
    address,
    comments,
    natureOfServices,
    homeDetails,
    extraServices,
    date,
    costs,
    pickup,
    delivery,
    serviceIntervals,
    requiredServices,
    payment,
  } = req.body;

  var emailBody = "";
  var html = "";
  if (subject === "Indoor Services") {
    if (natureOfServices.includes("General Cleaning")) {
      emailBody =
        "<div><p>Good Sir/Madam</p>" +
        "<p>Would like to request for services with the below details: </p>" +
        "<p>Nature of service : " +
        natureOfServices +
        "</p>" +
        "<p>Details : " +
        extraServices +
        "</p>" +
        "<p>Service Intervals: " +
        serviceIntervals +
        "</p>" +
        "<p>Date : " +
        date +
        "</p>" +
        "<p>Physical Address : " +
        address +
        "</p>" +
        "<p>Comments : " +
        comments +
        "</p>" +
        "<p>Agreed cost payable after services : " +
        costs +
        "</p>" +
        "<p>Yours faithfully</p>" +
        "<p> " +
        customerName +
        "</p>" +
        "<p> " +
        phoneNumber +
        "</p></div>";

      html =
        emailBody +
        "<h2>Standard Services Offered</h2>" +
        "<h3>Kitchen</h3>" +
        "<ul>" +
        "<li>Empting trash cans/bins.</li>" +
        "<li>Clean counter tops, sinks, and cupboards.</li>" +
        "<li>Clean stove & microwave & fridge.</li>" +
        "<li>Clean tables and chairs.</li>" +
        "<li>Washing dishes.</li>" +
        "<li>Cleaning floors & walls & windows.</li>" +
        "</ul>" +
        "<h3>Living Area</h3>" +
        "<ul>" +
        "<li>Dusting electronic gadgets.</li>" +
        "<li>Cleaning wall electrical switches.</li>" +
        "<li>Dusting furniture & wall frames.</li>" +
        "<li>Vacuum & mop floors surfaces.</li>" +
        "<li>Clean interior windows.</li>" +
        "<li>Dusting sofas.</li>" +
        "</ul>" +
        "<h3>Bathroom</h3>" +
        "<ul>" +
        "<li>Clean counters & cabinets.</li>" +
        "<li>Wiping & shining mirrors.</li>" +
        "<li>Clean & disinfect toilet seats.</li>" +
        "<li>Clean & disinfect shower & bathtub.</li>" +
        "<li>Clean interior windows & sills.</li>" +
        "<li>Mopping floors & empty bins.</li>" +
        "</ul>" +
        "<h3>Bedroom</h3>" +
        "<ul>" +
        "<li>Vacuum carpets or mop floors.</li>" +
        "<li>Make beds.</li>" +
        "<li>Fold clothes.</li>" +
        "<li>Dusting furniture.</li>" +
        "<li>Clean interior windows.</li>" +
        "<li>Arrange wardrope on request.</li>" +
        "</ul>";
    } else {
      html =
        "<div><p>Good Sir/Madam</p>" +
        "<p>Would like to request for services with the below details: </p>" +
        "<p>Nature of service : " +
        natureOfServices +
        "</p>" +
        "<p>Details : " +
        extraServices +
        "</p>" +
        "<p>Service Intervals: " +
        serviceIntervals +
        "</p>" +
        "<p>Date : " +
        date +
        "</p>" +
        "<p>Physical Address : " +
        address +
        "</p>" +
        "<p>Comments : " +
        comments +
        "</p>" +
        "<p>Agreed cost payable after services : " +
        costs +
        "</p>" +
        "<p>Yours faithfully</p>" +
        "<p> " +
        customerName +
        "</p>" +
        "<p> " +
        phoneNumber +
        "</p></div>";
    }
  } else if (subject === "Pool Services" || subject === "Outdoor Services") {
    emailBody =
      "Good Sir/Madam" +
      "\n\n" +
      "Would like to request for services with the below details: " +
      "\n\n\t" +
      "Nature of service : " +
      natureOfServices +
      "\n\t" +
      "Pool Dimensions : " +
      extraServices +
      "\n\t" +
      "Service Intervals : " +
      serviceIntervals +
      "\n\t" +
      "Date : " +
      date +
      "\n\t" +
      "Physical Address : " +
      address +
      "\n\t" +
      "Comments : " +
      comments +
      "\n\t" +
      "Agreed cost payable after services : " +
      costs +
      "\n\t" +
      "Payment Plan : " +
      payment +
      "\n\n" +
      "Yours faithfully" +
      "\n\n" +
      customerName +
      "\n" +
      phoneNumber;
  } else {
    emailBody =
      "Good Sir/Madam" +
      "\n\n" +
      "Would like to inquire on the below details: " +
      "\n\n\t" +
      "Nature of Inquiry : " +
      subject +
      "\n\t" +
      "Comments : " +
      comments +
      "\n\n" +
      "Yours faithfully" +
      "\n\n" +
      customerName +
      "\n" +
      phoneNumber;
  }

  console.log(emailBody);
  //console.log(email);

  sendMail(email, subject, emailBody, html, function (err, data) {
    if (err) {
      log("ERROR: ", err);
      return res.status(500).json({ message: err.message || "Internal Error" });
    }
    log("Email sent!!!");
    return res.json({ message: "Email sent!!!!!" });
  });
});

// Render home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Error page
app.get("/error", (req, res) => {
  res.sendFile(path.join(__dirname, "EmailResponse", "error.html"));
});

// Email sent page
app.get("/email/sent", (req, res) => {
  res.sendFile(path.join(__dirname, "EmailResponse", "emailMessage.html"));
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "zar",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
