require("dotenv").config();
const nodemailer = require("nodemailer");
var express = require("express"); // call express
var app = express(); // define our app using express

// this will let us get the data from a POST
app.use(express.json());

var port = process.env.PORT || 3000;

var router = express.Router();

router.get("/", function (req, res) {
  res.send("Welcome to Qikmail");
});
// router.post("/sendemail", function (req, res) {
//   let mailOptions = req.body;
//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASSWORD,
//     },
//   });

//   transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       res.json({
//         message: "Internal server error. Try again after sometime",
//         status: false,
//       });

//       console.log(err);
//     } else {
//       res.json({ message: "Mail sent !", status: true });
//     }
//   });
// });

app.use("/", router);

app.listen(port);

// let mailOptions = {
//   from: "qikbazar.rajesh@gmail.com",
//   to: "sakthimallicyr@gmail.com",
//   subject: "Testing",
//   text: "Hello Welcome",
// };
