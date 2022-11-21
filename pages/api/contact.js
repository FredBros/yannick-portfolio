export default function async (req, res) {


  require("dotenv").config();

  const PASSWORD = process.env.NODEMAILER_PASSWORD;
  const NODEMAILER_DESTINATION = process.env.NODEMAILER_DESTINATION;
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "fred.brossard.do.not.reply@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "fred.brossard.do.not.reply@gmail.com",
    to: NODEMAILER_DESTINATION,
    subject: `Message depuis ton Portfolio de ${req.body.name}`,
    text: req.body.message,
    html: `<div>Bonjour,</div>
  <p>Tu as reçu un message depuis ton Portfolio.</p> 
    <p>message de : ${req.body.email}</p>
   <div>${req.body.message}</div>
   <br/>
   <p>Bonne journée ❤</p>`,
  };


  try{
    transporter.sendMail(mailData)
    return res.status(200).json({success : true})
  }
  catch(err){
    console.log(err)
    return res.status(400).json({message : err.message})
  }
}
