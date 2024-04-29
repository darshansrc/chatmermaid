import { UseChatHelpers } from "ai/react";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "./external-link";
import { IconArrowRight } from "@/components/ui/icons";
import { ArrowRight } from "lucide-react";
import useTemplateModal from "@/store/template-modal-store";
import { TemplateModal } from "./template-modal";

const exampleMessages = [
  {
    image: "/mermaid.png",
    heading: "Flowchart",
    message: `What is a "serverless function"?`,
  },
  {
    image: "/mermaid.png",
    heading: "Sequence Diagram",
    message: "Summarize the following article for a 2nd grader: \n",
  },
  {
    image: "/mermaid.png",
    heading: "Mindmap",
    message: `Draft an email to my boss about the following: \n`,
  },
  {
    image: "/mermaid.png",
    heading: "ER Diagram",
    message: `Draft an email to my boss about the following: \n`,
  },
];

export function EmptyScreen() {
  const { isTemplateModalOpen, setIsTemplateModalOpen } = useTemplateModal();
  return (
    <>
      <div className="mx-auto max-w-2xl px-4">
        <div className="flex flex-col gap-2 rounded-lg border bg-background dark:bg-[rgb(16,16,16)] p-8">
          <h1 className="text-lg font-semibold">
            Welcome to Next.js AI Chatbot!
          </h1>
          <p className="leading-normal text-muted-foreground">
            This is an open source AI chatbot app template built with{" "}
            <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>, the{" "}
            <ExternalLink href="https://sdk.vercel.ai">
              Vercel AI SDK
            </ExternalLink>
            , and{" "}
            <ExternalLink href="https://vercel.com/storage/kv">
              Vercel KV
            </ExternalLink>
            .
          </p>
          <p className="leading-normal text-muted-foreground">
            It uses{" "}
            <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
              React Server Components
            </ExternalLink>{" "}
            to combine text with generative UI as output of the LLM. The UI
            state is synced through the SDK so the model is aware of your
            interactions as they happen.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex mx-auto sm:max-w-2xl sm:px-4 flex-row justify-between items-center">
          <div className="text-sm font-semibold">Templates</div>
          <Button
            onClick={() => setIsTemplateModalOpen(true)}
            variant={"link"}
            className="flex flex-row items-center gap-1 px-0 text-sm text-muted-foreground dark:text-muted-foreground"
          >
            All templates <ArrowRight className="size-3" />{" "}
          </Button>
        </div>
        <div className="mx-auto sm:max-w-2xl sm:px-4">
          <div className="mb-4  grid grid-cols-2 gap-2 px-4 sm:px-0">
            {exampleMessages.map((example, index) => (
              <div
                key={example.heading}
                className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-[rgb(16,16,16)] dark:hover:bg-zinc-900 ${
                  index > 1 && "hidden md:block"
                }`}
              >
                <div className="text-sm font-semibold">{example.heading}</div>
                <div className="text-sm text-zinc-600">{example.message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TemplateModal />
    </>
  );
}
