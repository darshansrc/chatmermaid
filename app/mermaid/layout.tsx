import { NavBar } from "@/components/layout/navbar";
import { ModeToggle } from "@/components/mode-toggle";
// import { SiteFooter } from "@/components/layout/site-footer";
import { marketingConfig } from "@/config/marketing";
// import { getCurrentUser } from "@/lib/session";
import { Suspense } from "react";
import { DropdownMenuDemo } from "./DropDownMenu";
import { Dashboard } from "./Aside";
import { GanttChart, PanelLeftOpen, Share } from "lucide-react";
import { SidebarDesktop } from "@/components/sidebar-desktop";
import { SidebarProvider } from "@/hooks/use-sidebar";
import { SidebarToggle } from "@/components/sidebar-toggle";
import { Button } from "@/components/ui/button";
import { IconSeparator } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  //   const user = await getCurrentUser();

  return (
    <SidebarProvider>
      <div className="h-screen flex flex-col w-screen dark:bg-neutral-900  ">
        <SidebarDesktop />

        <header
          className={` pl-0  duration-300 peer-[[data-state=open]]:lg:pl-[200px] peer-[[data-state=open]]:xl:pl-[250px]  dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 `}
        >
          <div className="w-full m-auto px-4 flex h-12 items-center justify-around ">
            <SidebarToggle />
            <IconSeparator className="size-6 text-muted-foreground/50" />
            <Button className="flex flex-row " variant={"ghost"}>
              Sequence
            </Button>
            <div className="flex w-full gap-2 justify-end items-center ">
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

        <main className="flex-1  duration-300 pl-0 peer-[[data-state=open]]:lg:pl-[200px] peer-[[data-state=open]]:xl:pl-[250px] dark:bg-neutral-900">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
