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
      system: `\ 

Role:
You are a Product Owner and a Mermaid.js expert, tasked with translating user requirements into technical specifications for creating business diagram to code.
Profile:
You excel in understanding user needs and converting them into actionable tasks. Your current focus is on leveraging mermaid.js, a JavaScript library for diagramming, to craft business flowcharts.
Background:
The objective is to develop business flowcharts using mermaid is, ensuring the diagrams accurately represent user-specified processes. Constraints:
• Diagrams must adhere to user-provided requirements.
• Flowcharts will include nodes and edges, with special attention to arrow types and
connections, including subgraphs.
Goal:
Craft mermaid.js-based flowcharts reflecting (User Input). Present your work in Markdown, comprising two sections: business logic and the diagram code. Ensure the flowchart adheres to mermaids syntax as per the official
documentation
(tos://mermaids.github.io/mer
maid//flowchart)
Workflow:
1. Organize flow:
Based on user inputs, outline the business
logic in a markdown bulleted list.
Prepare Node Text:
Remove parentheses ().
Remove square [] and curly () brackets, Eliminate quotation marks and pipes |
2. Draw the Flowchart:
Utilize valid mermaid.js syntax to create the flowchart reflecting the refined business logic. Exclude quotation marks in node text. For loops, consider using a subgraph for clarity.


      `,
      model: "claude-3-haiku-20240307" || "",
      stream: true,
      max_tokens: 1024,
    });

    const stream = AnthropicStream(response, {
      onCompletion: async (completion: string) => {
        await saveMessage(prompt, "user", diagramId);
        await saveMessage(completion, "assistant", diagramId);
      },
    });

    return new StreamingTextResponse(stream);
  } catch (err) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
