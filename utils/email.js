const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1/ create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seeyouagain14012000@gmail.com',
      pass: 'ryjzyjdwnsuceorp',
    },
  });
  // 2/ define the email options
  const mailOptions = {
    from: 'tung.nguyen@stud.fils.upb.ro',
    to: 'seeyouagain14012000@gmail.com',
    subject: 'Subject',
    text: options.message,
  };
  // 3/ send the email
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendEmail;
