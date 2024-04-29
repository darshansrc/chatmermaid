"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuthModal from "@/store/auth-modal-store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useTemplateModal from "@/store/template-modal-store";
import MermaidPreviewMD from "@/components/shared/mermaid";

const diagramList = {
  flowchart: "Flowchart",
  sequence: "Sequence Diagram",
  mindmap: "Mindmap",
  erd: "ER Diagram",
  c4: "C4 Diagram",
  state: "State Diagram",
  gantt: "Gantt Chart",
  class: "Class Diagram",
  usecase: "Use Case Diagram",
  activity: "Activity Diagram",
  block: "Block Diagram",
  network: "Git Graph",
};

const cardContent = [
  {
    diagramType: "flowchart",
    heading: "Basic Flowchart",
    content: "A simple flowchart example to get you started.",
    code: `\ flowchart LR
    A[Start] --Some text--> B(Continue)
    B --> C{Evaluate}
    C -- One --> D[Option 1]
    C -- Two --> E[Option 2]
    C -- Three --> F[fa:fa-car Option 3]`,
  },
  {
    diagramType: "flowchart",
    heading: "Complex Flowchart",
    content: "A more advanced flowchart with conditional flows and loops.",
    code: `\ flowchart TB
    A[Start] --Some text--> B(Continue)
    B --> C{Evaluate}
    C -- One --> D[Option 1]
    C -- Two --> E[Option 2]
    C -- Three --> F[fa:fa-car Option 3]`,
  },
  {
    diagramType: "flowchart",
    heading: "Complex Flowchart",
    content: "A flowchart with efficient but perhaps not so readable syntax",
    code: `\ flowchart
    A --> B & C & D --> E & F --> G`,
  },
  {
    diagramType: "flowchart",
    heading: "Complex Flowchart",
    content: "A flowchart with subgraphs",
    code: `\ flowchart LR
  subgraph TOP
    direction TB
    subgraph B1
        direction RL
        i1 -->f1
    end
    subgraph B2
        direction BT
        i2 -->f2
    end
  end
  A --> TOP --> B
  B1 --> B2`,
  },
  {
    diagramType: "flowchart",
    heading: "Complex Flowchart",
    content: "A flowchart with classes and styles",
    code: `\ flowchart LR
    A:::someclass --> B
    id1(Start)-->id2(Stop)
    style id1 fill:#f9f,stroke:#333,stroke-width:4px
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    classDef someclass fill:#f96`,
  },

  {
    diagramType: "flowchart",
    heading: "Complex Flowchart",
    content: "A flowchart with cross and circle arrow types",
    code: `\ flowchart LR
    A --o B
    B --x C

`,
  },
  {
    diagramType: "flowchart",
    heading: "Complex Flowchart",
    content: "A flowchart with multi-directional arrows",
    code: `\ flowchart LR
    A o--o B
    B <--> C
    C x--x D

`,
  },
  {
    diagramType: "flowchart",
    heading: "Complex Flowchart",
    content: "A flowchart with different types of arrows",
    code: `\ flowchart
a---a1
a----a2
a-----a3
b-->b1
b--->b2
b---->b3
c===c1
c====c2
c=====c3
d==>d1
d===>d2
d====>d3
e-.-e1
e-..-e2
e-...-e3
f-.->f1
f-..->f2
f-...->f3


`,
  },
  {
    diagramType: "sequence",
    heading: "Web Service Sequence",
    content: "A basic sequence diagram with participants and activations",
    code: `\ sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!`,
  },
  {
    diagramType: "sequence",
    heading: "Web Service Sequence",
    content: "A sequence diagram with actor symbols instead of boxes",
    code: `\ sequenceDiagram
    actor Alice
    actor Bob
    Alice->>Bob: Hi Bob
    Bob->>Alice: Hi Alice`,
  },
  {
    diagramType: "sequence",
    heading: "Web Service Sequence",
    content: "A sequence diagram with grouped actors",
    code: `\  sequenceDiagram
    box Purple Alice & John
    participant A
    participant J
    end
    box Another Group
    participant B
    participant C
    end
    A->>J: Hello John, how are you?
    J->>A: Great!
    A->>B: Hello Bob, how is Charly ?
    B->>C: Hello Charly, how are you?`,
  },
  {
    diagramType: "sequence",
    heading: "Web Service Sequence",
    content: "A sequence diagram with different message types",
    code: `\  sequenceDiagram
    actor Alice
    actor Bob

    Alice->Bob:Solid line without arrow
Alice-->Bob:Dotted line without arrow
Alice->>Bob:Solid line with arrowhead
Alice-->>Bob:Dotted line with arrowhead
Alice-xBob:Solid line with a cross at the end
Alice--xBob:Dotted line with a cross at the end.
Alice-)Bob:Solid line with an open arrow at the end (async)
Alice--)Bob:Dotted line with a open arrow at the end (async)`,
  },
  {
    diagramType: "sequence",
    heading: "Web Service Sequence",
    content: "A sequence diagram with a note",
    code: `\  sequenceDiagram
    Alice->John: Hello John, how are you?
    Note over Alice,John: A typical interaction<br/>But now in two lines Alice ohn`,
  },
  {
    diagramType: "sequence",
    heading: "Web Service Sequence",
    content: "A sequence diagram with auto-numbering",
    code: `\  sequenceDiagram
    autonumber
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
`,
  },
  {
    diagramType: "sequence",
    heading: "Web Service Sequence",
    content: "A sequence diagram with a loop, alt, and opt statements",
    code: `\ sequenceDiagram
    Alice->John: Hello John, how are you?
    loop Every minute
    John-->Alice: Great!
    end
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
`,
  },
  {
    diagramType: "sequence",
    heading: "Web Service Sequence",
    content:
      "A sequence diagram with regions highlighted using the background color",
    code: `\ sequenceDiagram
    participant Alice
    participant John

    rect rgb(191, 223, 255)
    note right of Alice: Alice calls John.
    Alice->>+John: Hello John, how are you?
    rect rgb(200, 150, 255)
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    end
    John-->>-Alice: I feel great!
    end
    Alice ->>+ John: Did you want to go to the game tonight?
    John -->>- Alice: Yeah! See you there.

`,
  },
  {
    diagramType: "mindmap",
    heading: "Web Service Sequence",
    content: "A Mindmap",
    code: `\ mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularization
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaida
`,
  },
  {
    diagramType: "erd",
    heading: "Web Service Sequence",
    content: "An entity relationship diagram",
    code: `\ erDiagram
    CUSTOMER }|..|{ DELIVERY-ADDRESS : has
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER ||--o{ INVOICE : "liable for"
    DELIVERY-ADDRESS ||--o{ ORDER : receives
    INVOICE ||--|{ ORDER : covers
    ORDER ||--|{ ORDER-ITEM : includes
    PRODUCT-CATEGORY ||--|{ PRODUCT : contains
    PRODUCT ||--o{ ORDER-ITEM : "ordered in"
`,
  },
  {
    diagramType: "erd",
    heading: "Web Service Sequence",
    content: "An entity relationship diagram with types",
    code: `\ erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    PRODUCT }|--o{ LINE-ITEM : "contains"
    CUSTOMER {
        CustomerID int PK
        FirstName varchar
        LastName varchar
        Email varchar
        Phone varchar
    }
    ORDER {
        OrderID int PK
        OrderDate date
        ShipDate date
        CustomerID int FK
    }
    LINE-ITEM {
        LineItemID int PK
        Quantity int
        UnitPrice decimal
        OrderID int FK
        ProductID int FK
    }
    PRODUCT {
        ProductID int PK
        ProductName varchar
        Description varchar
        UnitPrice decimal
    }

`,
  },
];

export function TemplateModal() {
  const { isTemplateModalOpen, setIsTemplateModalOpen } = useTemplateModal();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={isTemplateModalOpen} onOpenChange={setIsTemplateModalOpen}>
        <DialogContent className="w-full max-w-5xl">
          <DialogHeader>
            <DialogTitle className="text-md pb-2">
              Diagram Templates
            </DialogTitle>
            <Tabs defaultValue="flowchart">
              <TabsList className="w-full overflow-x-scroll p-1 h-16 dark:bg-[rgb(16,16,16)]">
                <div className="overflow-x-scroll">
                  {Object.entries(diagramList).map(([value, label]) => (
                    <TabsTrigger
                      key={value}
                      className="data-[state=active]:dark:bg-purple-700 text-[12px]"
                      value={value}
                    >
                      {label}
                    </TabsTrigger>
                  ))}
                </div>
              </TabsList>
              <div className="max-h-[60vh] overflow-y-scroll">
                {Object.entries(diagramList).map(([value, label]) => (
                  <TabsContent key={value} value={value}>
                    <div className="overflow-scroll">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
                        {cardContent
                          .filter((card) => card.diagramType === value)
                          .map((card, index) => (
                            <Card
                              key={index}
                              className="dark:bg-[rgb(16,16,16)]"
                            >
                              <CardHeader>
                                <CardTitle>{card.heading}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                {card?.code && (
                                  <div className="aspect-square w-full max-h-28  rounded ">
                                    <MermaidPreviewMD chart={card.code} />
                                  </div>
                                )}
                                <CardDescription>
                                  {card.content}
                                </CardDescription>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isTemplateModalOpen} onOpenChange={setIsTemplateModalOpen}>
      <DrawerContent className="h-[450px]">
        <div className="text-left pt-6 pb-32 px-4"></div>
      </DrawerContent>
    </Drawer>
  );
}
