import { prisma } from "../lib/prisma";
import { generateOtp, getExpiryDate } from "../utils/otp";
import { sendOtpEmail } from "../lib/mailer";
import jwt from "jsonwebtoken";

const OTP_TTL_MINUTES = Number(process.env.OTP_TTL_MINUTES || 10);
const JWT_SECRET = process.env.JWT_SECRET || "secret";

/**
 * Step 1: Request OTP (user enters email)
 */
export async function requestOtp(email: string) {
  try {
    // Check if user exists, else create new
    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      user = await prisma.user.create({ data: { email } });
    }

    // Generate OTP and expiry time
    const code = generateOtp(6);
    const expiresAt = getExpiryDate(OTP_TTL_MINUTES);

    // Save OTP in DB
    await prisma.otp.create({
      data: { code, userId: user.id, expiresAt },
    });

    // Try sending OTP mail
    try {
      await sendOtpEmail(email, code);
      console.log("✅ OTP mail sent successfully to", email);
    } catch (err: any) {
      console.error("❌ Mail sending failed:", err.message);
      throw new Error("Mail sending failed. Please try again later.");
    }

    return { ok: true, message: "OTP sent successfully!" };
  } catch (err: any) {
    console.error("🔥 Error in requestOtp:", err.message);
    throw new Error(err.message || "Failed to request OTP");
  }
}

/**
 * Step 2: Verify OTP (user enters OTP)
 */
export async function verifyOtp(email: string, code: string) {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("User not found");

    // Validate OTP
    const otp = await prisma.otp.findFirst({
      where: {
        userId: user.id,
        code,
        used: false,
        expiresAt: { gte: new Date() },
      },
    });

    if (!otp) throw new Error("Invalid or expired OTP");

    // Mark OTP as used
    await prisma.otp.update({
      where: { id: otp.id },
      data: { used: true },
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return { token, user };
  } catch (err: any) {
    console.error("🔥 Error in verifyOtp:", err.message);
    throw new Error(err.message || "OTP verification failed");
  }
}
