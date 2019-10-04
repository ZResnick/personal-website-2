const nodemailer = require('nodemailer');

module.exports = {
  emailConfirmation: function(email, cartId, totalPrice, products) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'graceshredder.fsa@gmail.com',
        pass: 'arielsangels',
      },
    });
    const mailOptions = {
      from: String(email),
      to: 'zachary.l.resnick@gmail.com',
      subject: `Personal Website Email from: ${String(email)}`,
      html: `<h2 style="color:green;text-align:center;">Grace-Shredder!</h2>
      <h5 style="text-align:center;">Thank you for shopping with us.</h5>
      <p>Your order number is <span style="font-weight:bold">HEY</span> and you purchased:</p>
      <ul>
        <li>Total.............. $sOMEWTHING</li>
      </ul>
      <h6 style="text-align:center;">Continue shopping at <a href="https://grace-shredder-1906.herokuapp.com/">www.Grace-Shredder-1906.com</a></h6>`,
    };
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  },
};

//user 1 should only be able to see user 1's cart
