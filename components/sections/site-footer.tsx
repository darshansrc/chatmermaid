import * as React from "react";
import Link from "next/link";

import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";

import { Icons } from "../shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t-[0.5px] ", className)}>
      <div className="border-t py-2">
        <div className="container flex items-center justify-between">
          <p className="text-left flex flex-row gap-4 text-sm text-muted-foreground">
            <span className="text-muted-foreground text-sm">
              &copy; 2024 Chat Mermaid. All rights reserved.
            </span>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Privacy policy
            </Link>
            {"  "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Terms and Conditions
            </Link>
          </p>

          <div className="flex items-center gap-3">
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
