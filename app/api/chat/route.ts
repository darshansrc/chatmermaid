import { saveMessage } from "@/actions/actions";
import Anthropic from "@anthropic-ai/sdk";
import { AnthropicStream, StreamingTextResponse } from "ai";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages, diagramId, prompt } = await req.json();

    const response = await anthropic.messages.create({
      messages,
      model: "claude-3-haiku-20240307" || "",
      stream: true,
      max_tokens: 1024,
    });

    const stream = AnthropicStream(response, {
      onStart: async () => {
        await saveMessage(prompt, "user", diagramId);
      },
      onCompletion: async (completion: string) => {
        await saveMessage(completion, "assistant", diagramId);
      },
    });

    return new StreamingTextResponse(stream);
  } catch (err) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
