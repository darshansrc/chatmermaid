import { NavBar } from "@/components/layout/navbar";
import { ModeToggle } from "@/components/mode-toggle";
// import { SiteFooter } from "@/components/layout/site-footer";
import { marketingConfig } from "@/config/marketing";
// import { getCurrentUser } from "@/lib/session";
import { Suspense } from "react";
import { DropdownMenuDemo } from "./DropDownMenu";
import { Dashboard } from "./Aside";
import { PanelLeftOpen } from "lucide-react";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  //   const user = await getCurrentUser();

  return (
    <div className="h-screen flex flex-col w-screen dark:bg-[rgb(24,24,24)]  ">
      <header
        className={`flex   justify-center dark:bg-[rgb(24,24,24)] border-b border-gray-200 dark:border-gray-800 `}
      >
        <div className="container flex h-12 items-center justify-between py-2">
          <PanelLeftOpen />
          <div className="flex w-full justify-end items-center space-x-3">
            <ModeToggle />
            <DropdownMenuDemo />
          </div>
        </div>
      </header>

      <main className="flex-1  dark:bg-[rgb(24,24,24)]">{children}</main>
    </div>
  );
}
