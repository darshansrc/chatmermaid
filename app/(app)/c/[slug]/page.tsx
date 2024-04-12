"use client";
import React, { useEffect, useState, useCallback } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizeable";
import CodeEditor from "../CodeEditor";
import FlowDiagram from "../FlowDiagram";
import {
  getDiagram,
  updateDiagram,
  changeDiagramName,
} from "@/actions/actions";
import { ModeToggle } from "@/components/mode-toggle";
import { SidebarToggle } from "@/components/sidebar/sidebar-toggle";
import { Button } from "@/components/ui/button";
import { IconSeparator } from "@/components/ui/icons";
import {
  BotMessageSquare,
  CodeXml,
  LayoutDashboard,
  LayoutPanelLeft,
  Pencil,
  Share,
} from "lucide-react";
import { DropdownMenuDemo } from "../DropDownMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import ChatBox from "../ChatBox";
import useChatStore from "@/store/chat-store";
import useDiagramStore from "@/store/diagram-store";
import { useSidebar } from "@/hooks/use-sidebar";

const Page: React.FC = ({ params }: { params: { slug: string } }) => {
  const [code, setCode] = useState<string>("");
  const [diagramName, setDiagramName] = useState<string>("");
  const [editedName, setEditedName] = useState<string>("");
  const [diagram, setDiagram] = useState<any>(null);
  const [diagramId, setDiagramId] = useState<string>("");
  const [diagramTheme, setDiagramTheme] = useState<string>("default");
  const { fetchChat } = useChatStore();
  const { diagrams } = useDiagramStore();
  const [toggleTabs, setToggleTabs] = useState(false);

  const { toggleSidebar, isSidebarOpen } = useSidebar();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetchChat(params.slug);
        const data = await getDiagram(params.slug);
        if (data) {
          setCode(data.code);
          setDiagramName(data.diagram_name);
          setDiagramId(data.id);
          setDiagramTheme(data.diagram_theme);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [params.slug, fetchChat]);

  const onChange = useCallback(
    (val: string) => {
      setCode(val);

      const saveDiagram = async (val: string) => {
        try {
          await updateDiagram(params.slug, val);
        } catch (error) {
          console.error(error);
        }
      };

      saveDiagram(val);
    },
    [params?.slug]
  );

  const handleNameChange = async () => {
    const data = await changeDiagramName(diagramId, editedName);
    if (data) {
      toast.success("Diagram name changed successfully");
    } else {
      toast.error("Failed to change diagram name");
    }
  };

  const handleCloseSidebar = () => {
    if (isSidebarOpen) toggleSidebar();
  };

  return (
    <>
      <Tabs defaultValue="chat">
        <header
          className={` pl-0 max-h-screen overflow-hidden  duration-300 peer-[[data-state=open]]:lg:pl-[200px] peer-[[data-state=open]]:xl:pl-[220px]  dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 `}
        >
          <div className="w-full m-auto px-4 flex h-12 items-center justify-stretch ">
            <div className=" w-full px-4 flex h-12 items-center  ">
              <SidebarToggle />
              <IconSeparator className="size-6 text-muted-foreground/50" />
              <Popover open={isPopoverOpen}>
                <PopoverTrigger
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                >
                  <p className="text-sm   flex flex-row gap-1 items-center font-medium truncate">
                    {diagramName}
                    <Pencil className="size-3 dark:text-neutral-600" />
                  </p>
                </PopoverTrigger>
                <PopoverContent className="dark:bg-neutral-800 flex flex-col gap-2 flex-end justify-end">
                  <Input
                    value={editedName}
                    onChange={(e) => {
                      setEditedName(e.target.value);
                    }}
                  ></Input>

                  <Button
                    onClick={() => {
                      handleNameChange();
                      setIsPopoverOpen(false);
                    }}
                    aria-label="Close"
                  >
                    Save Changes
                  </Button>
                </PopoverContent>
              </Popover>
            </div>

            <div className="w-full flex  justify-center">
              <TabsList className="p-1 m-1">
                <TabsTrigger
                  className="data-[state=active]:dark:bg-neutral-900 flex text-[12px]  flex-row gap-1 items-center"
                  value="editor"
                >
                  <CodeXml className="size-3" />
                  <p className="text-[12px] ">Editor</p>
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:dark:bg-neutral-900 text-[12px] flex flex-row gap-1 items-center"
                  value="chat"
                  onClick={() => setToggleTabs(!toggleTabs)}
                >
                  <BotMessageSquare className="size-3" />
                  <p className="text-[12px]">Chat</p>
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:dark:bg-neutral-900 flex text-[12px]  flex-row gap-1 items-center"
                  value="both"
                  onClick={handleCloseSidebar}
                >
                  <LayoutPanelLeft className="size-3" />
                  <p className="text-[12px] ">Both</p>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex w-full gap-2  items-center ">
              <Button
                variant="outline"
                size="sm"
                className="ml-auto gap-1.5 text-sm"
              >
                <Share className="size-3.5" />
                Share
              </Button>
              <ModeToggle />
              <DropdownMenuDemo />
            </div>
          </div>
        </header>

        <div className="h-[calc(100vh-48px)]">
          <ResizablePanelGroup
            direction={window.innerWidth < 768 ? "vertical" : "horizontal"}
          >
            <ResizablePanel>
              <TabsContent className="h-full overflow-hidden" value="editor">
                <CodeEditor code={code} onChange={onChange} />
              </TabsContent>
              <TabsContent className="h-full overflow-hidden" value="chat">
                <ChatBox
                  diagramId={diagramId}
                  code={code}
                  onChange={onChange}
                />
              </TabsContent>
              <TabsContent className="h-full overflow-hidden" value="both">
                <ChatBox
                  diagramId={diagramId}
                  code={code}
                  onChange={onChange}
                />
              </TabsContent>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
              <TabsContent className="h-full overflow-hidden" value={"chat"}>
                <FlowDiagram
                  code={code}
                  diagramTheme={diagramTheme}
                  diagramId={diagramId}
                />
              </TabsContent>
              <TabsContent className="h-full overflow-hidden" value={"editor"}>
                <FlowDiagram
                  code={code}
                  diagramTheme={diagramTheme}
                  diagramId={diagramId}
                />
              </TabsContent>
              <TabsContent className="h-full overflow-hidden" value="both">
                <ResizablePanelGroup direction={"horizontal"}>
                  <ResizablePanel>
                    <CodeEditor code={code} onChange={onChange} />
                  </ResizablePanel>
                  <ResizableHandle withHandle />

                  <ResizablePanel>
                    <FlowDiagram
                      code={code}
                      diagramTheme={diagramTheme}
                      diagramId={diagramId}
                    />
                  </ResizablePanel>
                </ResizablePanelGroup>
              </TabsContent>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </Tabs>
    </>
  );
};

export default Page;
