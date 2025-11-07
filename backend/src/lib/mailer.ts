import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true for port 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendOtpEmail(to: string, code: string) {
  await transporter.sendMail({
    from: `"Aroma App" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your Aroma OTP Code",
    text: `Your OTP code is ${code}. It will expire in 10 minutes.`,
  });
}
