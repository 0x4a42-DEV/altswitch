import { NextRequest, NextResponse } from "next/server";
import { addSubscriber } from "@/lib/subscribers";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = typeof body.email === "string" ? body.email : "";
    const source = typeof body.source === "string" ? body.source : undefined;
    const toolSlug =
      typeof body.toolSlug === "string" ? body.toolSlug : undefined;

    const result = await addSubscriber(email, { source, toolSlug });
    if (!result.ok) {
      return NextResponse.json(
        { error: result.error || "Failed" },
        { status: 400 }
      );
    }
    return NextResponse.json({
      ok: true,
      duplicate: Boolean(result.duplicate),
    });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
