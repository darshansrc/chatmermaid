import { NavBar } from "@/components/layout/navbar";
import { ModeToggle } from "@/components/mode-toggle";
// import { SiteFooter } from "@/components/layout/site-footer";
import { marketingConfig } from "@/config/marketing";
// import { getCurrentUser } from "@/lib/session";
import { Suspense, useEffect } from "react";
import { DropdownMenuDemo } from "./DropDownMenu";
import { Dashboard } from "./Aside";
import { GanttChart, PanelLeftOpen, Share } from "lucide-react";
import { SidebarDesktop } from "@/components/sidebar-desktop";
import { SidebarProvider } from "@/hooks/use-sidebar";
import { SidebarToggle } from "@/components/sidebar-toggle";
import { Button } from "@/components/ui/button";
import { IconSeparator } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  //   const user = await getCurrentUser();

  return (
    <SidebarProvider>
      <div className="h-screen flex flex-col w-screen dark:bg-neutral-900  ">
        <SidebarDesktop />

        <main className="flex-1  duration-300 pl-0 peer-[[data-state=open]]:lg:pl-[200px] peer-[[data-state=open]]:xl:pl-[250px] dark:bg-neutral-900">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
