import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Gmail's SMTP server
  port: 465, // Secure SMTP over SSL
  secure: true,
  auth: {
    user: "fai3001091@gmail.com", // Your email
    pass: "jnjveahttocfqion", // Your email password
  },
});

const sendReminderEmail = (to, medicineName) => {
  const mailOptions = {
    from: "fai3001091@gmail.com",
    to: to,
    subject: "Medicine Reminder",
    text: `This is a reminder to take your medicine: ${medicineName}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export default sendReminderEmail;
