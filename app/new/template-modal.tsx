"use client";
import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  // DrawerDescription,
  // DrawerHeader,
  // DrawerTitle,
  // DrawerTrigger,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import useTemplateModal from "@/store/template-modal-store";
import MermaidPreviewMD from "@/components/shared/mermaid";
import { createNewDiagramWithContent } from "@/actions/actions";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const diagramList = {
  flowchart: "Flowchart",
  sequence: "Sequence Diagram",
  mindmap: "Mindmap",
  erd: "ER Diagram",
  c4: "C4 Diagram",
  state: "State Diagram",
  gantt: "Gantt Chart",
  class: "Class Diagram",
  timeline: "Timeline",
  block: "Block Diagram",
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
    content: "A flowchart going from the top to the bottom.",
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
  {
    diagramType: "c4",
    heading: "Web Service Sequence",
    content: "A C4 diagram",
    code: `\ C4Context
      title System Context diagram for Internet Banking System
      Enterprise_Boundary(b0, "BankBoundary0") {
        Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
        Person(customerB, "Banking Customer B")
        Person_Ext(customerC, "Banking Customer C", "desc")

        Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

        System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

        Enterprise_Boundary(b1, "BankBoundary") {

          SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

          System_Boundary(b2, "BankBoundary2") {
            System(SystemA, "Banking System A")
            System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts. next line.")
          }

          System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
          SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")

          Boundary(b3, "BankBoundary3", "boundary") {
            SystemQueue(SystemF, "Banking System F Queue", "A system of the bank.")
            SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")
          }
        }
      }

      BiRel(customerA, SystemAA, "Uses")
      BiRel(SystemAA, SystemE, "Uses")
      Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
      Rel(SystemC, customerA, "Sends e-mails to")

      UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")
      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
      UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")

      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
`,
  },
  {
    diagramType: "state",
    heading: "Web Service Sequence",
    content: "A basic state diagram",
    code: `\ stateDiagram
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
`,
  },
  {
    diagramType: "gantt",
    heading: "Web Service Sequence",
    content: "A regular gantt chart with a task dependent on another task",
    code: `\ gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
`,
  },
  {
    diagramType: "gantt",
    heading: "Web Service Sequence",
    content: "A gantt chart with milestone",
    code: `\ gantt
    dateFormat HH:mm
    axisFormat %H:%M
    Initial milestone : milestone, m1, 17:49, 2m
    Task A : 10m
    Task B : 5m
    Final milestone : milestone, m2, 18:08, 4m
`,
  },
  {
    diagramType: "class",
    heading: "Web Service Sequence",
    content: "A class sequence diagram with inheritance",
    code: `\ classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
      +String beakColor
      +swim()
      +quack()
    }
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    class Zebra{
      +bool is_wild
      +run()
    }
`,
  },
  {
    diagramType: "timeline",
    heading: "Web Service Sequence",
    content: "A gantt chart with milestone",
    code: `\ timeline
    title Timeline of Industrial Revolution
    section 17th-20th century
        Industry 1.0 : Machinery, Water power, Steam <br>power
        Industry 2.0 : Electricity, Internal combustion engine, Mass production
        Industry 3.0 : Electronics, Computers, Automation
    section 21st century
        Industry 4.0 : Internet, Robotics, Internet of Things
        Industry 5.0 : Artificial intelligence, Big data,3D printing
`,
  },
  {
    diagramType: "block",
    heading: "Web Service Sequence",
    content: "A sample block diagram",
    code: `\ block-beta
columns 1
  db(("DB"))
  blockArrowId6<["&nbsp;&nbsp;&nbsp;"]>(down)
  block:ID
    A
    B["A wide one in the middle"]
    C
  end
  space
  D
  ID --> D
  C --> D
  style B fill:#969,stroke:#333,stroke-width:4px

`,
  },
  {
    diagramType: "block",
    heading: "Web Service Sequence",
    content: "A simple block diagram with arrow down",
    code: `\ block-beta
      columns 1
      A["Start"]
      down<[" "]>(down)
      C("Stop")
`,
  },
  {
    diagramType: "block",
    heading: "Web Service Sequence",
    content: "A simple block diagram with column widths set",
    code: `\block-beta
      columns 5
      A B C:3
      D:3 E:2
`,
  },
];

export function TemplateModal() {
  const {
    diagramType,
    setDiagramType,
    isTemplateModalOpen,
    setIsTemplateModalOpen,
  } = useTemplateModal();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const router = useRouter();

  if (isDesktop) {
    return (
      <Dialog open={isTemplateModalOpen} onOpenChange={setIsTemplateModalOpen}>
        <DialogContent className="w-full max-w-5xl dark:bg-neutral-900">
          <DialogHeader>
            <DialogTitle className="text-md pb-2">
              Diagram Templates
            </DialogTitle>
            <Tabs defaultValue={diagramType} onValueChange={setDiagramType}>
              <TabsList className="w-full  dark:bg-[rgb(16,16,16)]">
                {Object.entries(diagramList).map(([value, label]) => (
                  <TabsTrigger
                    key={value}
                    className="data-[state=active]:dark:bg-neutral-50 data-[state=active]:dark:text-neutral-900 text-[12px]"
                    value={value}
                  >
                    {label}
                  </TabsTrigger>
                ))}
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
                              className="dark:bg-[rgb(16,16,16)] relative pb-16 shadow-none"
                            >
                              <CardHeader className="text-sm font-medium">
                                {card.content}
                              </CardHeader>

                              <CardContent>
                                {card?.code && (
                                  <div className="aspect-square    rounded ">
                                    <MermaidPreviewMD chart={card.code} />
                                  </div>
                                )}
                                <Button
                                  variant={"outline"}
                                  onClick={async () => {
                                    const id =
                                      await createNewDiagramWithContent(
                                        card.code,
                                        card.diagramType
                                      );
                                    router.push(`/c/${id}`);
                                  }}
                                  className="w-[90%] absolute bottom-2 mx-[5%]  left-0 dark:bg-[rgb(16,16,16)] my-2"
                                >
                                  Use this Diagram
                                </Button>
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
      <DrawerHeader className="text-left">
        <DrawerTitle> Diagram templates</DrawerTitle>
      </DrawerHeader>
      <DrawerContent className="h-[600px]">
        <div className="text-left pt-6 pb-32 px-4">
          <Select value={diagramType} onValueChange={setDiagramType}>
            <SelectTrigger className="border-none dark:border-none dark:bg-[rgb(16,16,16)] outline-none dark:outline-none">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectGroup>
              <SelectContent className="dark:bg-[rgb(16,16,16)]">
                <SelectLabel>Diagram Type</SelectLabel>
                {Object.entries(diagramList).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectGroup>
          </Select>

          <div className="max-h-[60vh] overflow-y-scroll">
            {Object.entries(diagramList).map(([value, label]) => (
              <div className="overflow-scroll" key={value}>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 p-4 ">
                  {cardContent
                    .filter((card) => card.diagramType === value)
                    .map((card, index) => (
                      <Card
                        key={index}
                        className="dark:bg-[rgb(16,16,16)] relative pb-16 shadow-none"
                      >
                        <CardHeader className="text-sm font-medium">
                          {card.content}
                        </CardHeader>

                        <CardContent>
                          {card?.code && (
                            <div className="aspect-square    rounded ">
                              <MermaidPreviewMD chart={card.code} />
                            </div>
                          )}
                          <Button
                            variant={"outline"}
                            onClick={async () => {
                              const id = await createNewDiagramWithContent(
                                card.code,
                                card.diagramType
                              );
                              router.push(`/c/${id}`);
                            }}
                            className="w-[90%] absolute bottom-2 mx-[5%]  left-0 dark:bg-[rgb(16,16,16)] my-2"
                          >
                            Use this Diagram
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
