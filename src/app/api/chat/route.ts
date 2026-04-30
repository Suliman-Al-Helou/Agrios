// src/app/api/chat/route.ts
import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
    }

    const groq = new Groq({ apiKey });

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "You are Agrios AI, a friendly and professional agricultural expert for 'Agrios', the world's largest organic farm. Answer concisely and professionally.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 500,
    });

    const text = completion.choices[0]?.message?.content || "No response";
    return NextResponse.json({ text });

  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch response";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}