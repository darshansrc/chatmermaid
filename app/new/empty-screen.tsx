import { UseChatHelpers } from "ai/react";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "./external-link";
import { IconArrowRight } from "@/components/ui/icons";
import { ArrowRight } from "lucide-react";
import useTemplateModal from "@/store/template-modal-store";
import { TemplateModal } from "./template-modal";
import MermaidPreviewMD from "@/components/shared/mermaid";

const exampleMessages = [
  {
    type: "flowchart",
    heading: "Flowchart",
    message: "Explore Flowchart templates",
  },
  {
    type: "sequence",
    heading: "Sequence Diagram",
    message: "Explore Sequence Diagram templates",
  },
  {
    type: "mindmap",
    heading: "Mindmap",
    message: "Explore Mindmap templates",
  },
  {
    type: "erd",
    heading: "ER Diagram",
    message: "Explore ER Diagram templates",
  },
];

export function EmptyScreen() {
  const {
    diagramType,
    setDiagramType,
    isTemplateModalOpen,
    setIsTemplateModalOpen,
  } = useTemplateModal();
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 mt-8">
        <div className="flex flex-col gap-2 rounded-lg border bg-background dark:bg-[rgb(16,16,16)] p-8">
          <h1 className="text-lg font-semibold">Welcome to ChatMermaid! 🧜🏻‍♀️ </h1>
          <p className="leading-normal text-muted-foreground">
            ChatMermaid is a AI diagramming tool that allows you to create
            diagrams with your team in real-time.{" "}
          </p>
          <p className="leading-normal text-muted-foreground">
            Start by asking AI or explore our templates to get started quickly.{" "}
          </p>
        </div>
      </div>
      <div className="mt-6 mb-16 ">
        <div className="flex mx-auto sm:max-w-2xl sm:px-4 px-8 flex-row justify-between items-center">
          <div className="text-sm font-semibold">Start with a template</div>
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
                onClick={() => {
                  setDiagramType(example.type);
                  setIsTemplateModalOpen(true);
                }}
                className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-[rgb(16,16,16)] dark:hover:bg-neutral-900`}
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
