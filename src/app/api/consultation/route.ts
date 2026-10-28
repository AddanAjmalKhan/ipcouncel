import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

type ConsultationPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  matter?: unknown;
  message?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ConsultationPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const matter = typeof body.matter === "string" ? body.matter.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Full name and email are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars.");
    return NextResponse.json(
      { error: "Server is not configured correctly. Please try again later." },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
  });

  const { error: dbError } = await supabase.from("consultations").insert({
    full_name: name,
    email,
    phone: phone || null,
    legal_matter: matter || null,
    message: message || null,
  });

  if (dbError) {
    console.error("Supabase insert failed:", dbError.message);
    return NextResponse.json(
      { error: "We couldn't save your request. Please try again." },
      { status: 500 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.CONSULTATION_NOTIFICATION_EMAIL;

  if (resendApiKey && notificationEmail) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: "IP Counsel Group Website <onboarding@resend.dev>",
        to: notificationEmail,
        replyTo: email,
        subject: `New consultation request — ${name}`,
        text: [
          `Full Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "(not provided)"}`,
          `Legal Matter: ${matter || "(not provided)"}`,
          "",
          "Description:",
          message || "(not provided)",
        ].join("\n"),
      });
    } catch (emailError) {
      // The submission is already saved in Supabase, so we don't fail the
      // request just because the notification email couldn't be sent.
      console.error("Resend email failed:", emailError);
    }
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
