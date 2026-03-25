import { handleChat } from "../../../lib/chatService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const result = await handleChat(body.message);

    return Response.json(result);
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Request failed" },
      { status: 400 }
    );
  }
}
