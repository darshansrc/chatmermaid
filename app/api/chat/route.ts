import { saveMessage } from "@/actions/actions";
import Anthropic from "@anthropic-ai/sdk";
import { AnthropicStream, StreamingTextResponse } from "ai";
import { nanoid } from "nanoid";

// Create an Anthropic API client (that's edge friendly)
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  try {
    // Extract the `prompt` from the body of the request
    const { messages, diagramId, prompt } = await req.json();

    console.log(diagramId);

    // Ask Claude for a streaming chat completion given the prompt
    const response = await anthropic.messages.create({
      messages,
      model: process.env.ANTHROPIC_MODEL_ID || "",
      stream: true,
      max_tokens: 300,
    });

    // Convert the response into a friendly text-stream
    const stream = AnthropicStream(response, {
      onStart: async () => {
        // This callback is called when the stream starts
        // You can use this to save the prompt to your database
        await saveMessage(prompt, "user", diagramId);
      },
      onCompletion: async (completion: string) => {
        // This callback is called when the completion is ready
        // You can use this to save the final completion to your database
        await saveMessage(completion, "assistant", diagramId);
      },
    });

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (err) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
