import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, agentName, description, systemPrompt, endpoint } = body;

    if (!name || !email || !agentName || !description) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    if (!supabase) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 });
    }

    const { error } = await supabase.from("agentaudit_scans").insert({
      name,
      email,
      agent_name: agentName,
      description,
      system_prompt: systemPrompt || null,
      endpoint: endpoint || null,
      status: "pending",
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("API error:", e);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
