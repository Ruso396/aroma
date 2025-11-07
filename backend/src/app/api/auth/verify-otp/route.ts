// app/api/auth/verify-otp/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyOtp } from '../../../../services/authService';

export async function POST(req: NextRequest) {
  try {
    const { email, code } = await req.json();
    if (!email || !code) return NextResponse.json({ error: 'Email and code required' }, { status: 400 });

    const { token, user } = await verifyOtp(email.toLowerCase(), String(code));
    return NextResponse.json({ token, user });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || 'Invalid OTP' }, { status: 401 });
  }
}
