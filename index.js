require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express"); // call express
const app = express(); // define our app using express

// this will let us get the data from a POST
app.use(express.json());

const port = 9000;

app.get("/", function (req, res) {
  res.send("Welcome to Qikmail");
});

app.post("/sendemail", function (req, res) {
  let mailOptions = req.body;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        message: "Internal server error. Try again after sometime",
        status: false,
      });

      console.log(err);
    } else {
      res.json({ message: "Mail sent !", status: true });
    }
  });
});

app.listen(port);

// let mailOptions = {
//   from: "qikbazar.rajesh@gmail.com",
//   to: "sakthimallicyr@gmail.com",
//   subject: "Testing",
//   text: "Hello Welcome",
// };
