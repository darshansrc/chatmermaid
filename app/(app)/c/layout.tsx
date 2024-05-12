import { SidebarDesktop } from "@/components/sidebar/sidebar-desktop";
import { SidebarProvider } from "@/hooks/use-sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  //   const user = await getCurrentUser();

  return (
    <SidebarProvider>
      <div className="h-screen max-h-screen overflow-hidden flex flex-col w-screen dark:bg-neutral-900  ">
        <SidebarDesktop />

        <main className="flex-1 max-h-screen overflow-hidden duration-300 pl-0 peer-[[data-state=open]]:lg:pl-[200px] peer-[[data-state=open]]:xl:pl-[220px] dark:bg-neutral-900">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
