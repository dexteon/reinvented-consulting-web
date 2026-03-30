import { NextRequest, NextResponse } from "next/server";
import { upsertContact } from "@/lib/ghl";
import { webinarRegistrationSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = webinarRegistrationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input", issues: parsed.error.issues }, { status: 400 });
    }

    const { firstName, email, phone, challenge } = parsed.data;

    const contactId = await upsertContact({
      firstName,
      email,
      phone,
      tags: ["webinar_registered"],
      customField: challenge ? { credit_challenge: challenge } : undefined,
    });

    if (!contactId) {
      return NextResponse.json({ error: "Failed to create contact" }, { status: 502 });
    }

    return NextResponse.json({ success: true, contactId });
  } catch (err) {
    console.error("GHL contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
