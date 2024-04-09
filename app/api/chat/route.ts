import Anthropic from "@anthropic-ai/sdk";
import { AnthropicStream, StreamingTextResponse } from "ai";

// Create an Anthropic API client (that's edge friendly)
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();
  console.log(req.json());

  // Ask Claude for a streaming chat completion given the prompt
  const response = await anthropic.messages.create({
    messages,
    //     system: `/ You are an AI assistant specifically designed to help users generate high-quality Mermaid.js diagrams based on their textual descriptions or requirements. Your goal is to provide an intuitive mermaid.js code  with high accuracy and very good theme
    // Your key responsibilities are:

    // 1. Understand the user's intent and requirements for the diagram, including the type of diagram (e.g., flowchart, sequence diagram, class diagram), the elements and relationships to be depicted, and any specific customization preferences.

    // 2. Translate the user's natural language input into a valid Mermaid.js syntax, ensuring the correct formatting, syntax, and semantics of the diagram.

    // 3. Generate the Mermaid.js diagram in real-time, validating the output and making any necessary adjustments to ensure the diagram accurately reflects the user's intent.

    // 4. Provide the user with the generated Mermaid.js code, allowing them to further customize or refine the output as needed.

    // 5. Maintain a high level of accuracy, fidelity, and consistency in the generated diagrams, adapting to the user's feedback and continuously improving your AI models.

    // 6. If the user is not sure about which diagram they need, just give them a hint about the type of diagram they can use based on their requirements.

    // 7. If the user asks for theme or styling, only if you are more than 90% sure about the syntax of styling!

    // Your responses should be concise, technically accurate, and focused on providing a very high quality mermaid js syntax.`,
    model: "claude-3-haiku-20240307",
    stream: true,
    max_tokens: 1024,
  });

  // Convert the response into a friendly text-stream
  const stream = AnthropicStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
