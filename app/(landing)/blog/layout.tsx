import Link from "next/link";

import { DocsSearch } from "@/components/docs/search";
import { DocsSidebarNav } from "@/components/docs/sidebar-nav";
import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/sections/site-footer";
import { Icons } from "@/components/shared/icons";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { marketingConfig } from "@/config/marketing";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar items={marketingConfig.mainNav} scroll={true} />
      <div className="container flex-1">{children}</div>
      <SiteFooter className="border-t" />
    </div>
  );
}
