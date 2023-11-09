const nodemailer = require("nodemailer");
require("dotenv").config();

const transport = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

module.exports = async (req, res) => {
  const { name, email, message } = req.body;


  const mailOptions = {
    from: process.env.USER,
    to: process.env.USER,
    subject: "Enviaram uma mensagem de contato",
    html: `<h1>Uma nova mensagem para vc</h1>
           <p>O contato ${name}, do email ${email} enviou ${message}</p>`,
    text: `texto alternativo: ${message}`,
  };

  try {
    await transport.sendMail(mailOptions);
    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    res.status(500).json({message:'Não foi possivel processar a mensagem'})
  }
};

