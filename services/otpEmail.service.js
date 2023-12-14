import nodemailer from "nodemailer";

export async function sendOtpEmail(email, otp) {
  // Replace this with your actual email sending logic using nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "lhsang64.work@gmail.com", // Replace with your email
      pass: "jasphnmgrcrhnzsf", // Replace with your email password
    },
  });

  const mailOptions = {
    from: "lhsang64.work@gmail.com", // Replace with your email
    to: email,
    subject: "[SCH Services for Ads Management] - Password Reset OTP",
    html: `
      <div style="background-color: #f5f5f5; padding: 20px; font-family: Arial, sans-serif;">
        <h2 style="color: #333;">Password Reset OTP</h2>
        <p style="color: #555;">Your OTP for password reset is: <strong>${otp}</strong></p>
        <p style="color: #555;">This OTP will expire in 5 minutes.</p>
        <p style="color: #555;">If you did not request a password reset, please ignore this email.</p>
        <br>
        <p style="color: #555;">Thanks,</p>
        <p style="color: #555;">SCH Services for Ads Management.</p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Message is sent");
    }
  });
}
