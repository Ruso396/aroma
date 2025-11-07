import { NextResponse } from "next/server";
import { requestOtp } from "../../../../services/authService";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    const result = await requestOtp(email.toLowerCase());
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}
