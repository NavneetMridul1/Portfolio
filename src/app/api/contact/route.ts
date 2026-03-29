import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { isRateLimited } from "@/lib/rate-limit";

const CONTACT_ERROR_MESSAGE =
  "Currently, sending messages is not working. Sorry for the inconvenience. Kindly contact via navneetkumarmridul@gmail.com.";

export async function POST(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() ?? "unknown";

  // Keep abuse control lightweight and edge-friendly.
  if (isRateLimited(ip, { windowMs: 60_000, maxRequests: 5 })) {
    return NextResponse.json(
      { ok: false, error: CONTACT_ERROR_MESSAGE },
      { status: 429 },
    );
  }

  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: CONTACT_ERROR_MESSAGE },
      { status: 400 },
    );
  }

  if (parsed.data.company) {
    // Honeypot trap for bots that auto-fill hidden fields.
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail =
    process.env.CONTACT_TO_EMAIL ?? "navneetkumarmridul@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error: CONTACT_ERROR_MESSAGE,
      },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: parsed.data.email,
      subject: `Portfolio inquiry from ${parsed.data.name} ${parsed.data.email}`,
      text: `Recruiter Email: ${parsed.data.email}\n\nName: ${parsed.data.name}\n\nMessage:\n${parsed.data.message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: CONTACT_ERROR_MESSAGE,
      },
      { status: 500 },
    );
  }
}
