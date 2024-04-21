import { saveMessage } from "@/actions/actions";
import Anthropic from "@anthropic-ai/sdk";
import { AnthropicStream, StreamingTextResponse } from "ai";

import AnthropicBedrock from "@anthropic-ai/bedrock-sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

// export const runtime = "edge";

const client = new AnthropicBedrock({
  // Authenticate by either providing the keys below or use the default AWS credential providers, such as
  // using ~/.aws/credentials or the "AWS_SECRET_ACCESS_KEY" and "AWS_ACCESS_KEY_ID" environment variables.
  awsAccessKey: process.env.AWS_ACCESS_KEY_ID || "",
  awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY || "",

  // awsRegion changes the aws region to which the request is made. By default, we read AWS_REGION,
  // and if that's not present, we default to us-east-1. Note that we do not read ~/.aws/config for the region.
  awsRegion: process.env.AWS_REGION || "ap-southeast-2",
});

export async function POST(req: Request) {
  try {
    const { messages, diagramId, prompt } = await req.json();

    const message = await client.messages.create({
      model: "anthropic.claude-3-haiku-20240307-v1:0",
      max_tokens: 1024,
      messages,
      system:
        "You are an expert in mermaid.js and tasked with translating user requirements into technical specifications for creating business diagrams to code. Your current focus is on leveraging mermaid.js, a JavaScript library for diagramming, to craft business diagrams. The objective is to develop business diagrams using mermaid.js, ensuring the diagrams accurately represent user-specified processes. Constraints: Diagrams must adhere to user-provided requirements.  Ensure the flowchart adheres to mermaids syntax as per the official documentation (https://mermaid-js.github.io/mermaid/#flowchart).",
      stream: true,
    });

    const stream = AnthropicStream(message, {
      onCompletion: async (completion: string) => {
        await saveMessage(prompt, "user", diagramId);
        await saveMessage(completion, "assistant", diagramId);
      },
    });

    return new StreamingTextResponse(stream);
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}
