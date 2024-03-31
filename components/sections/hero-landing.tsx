import Link from "next/link";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { ModeToggle } from "../mode-toggle";

export async function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        {/* Want animations? Check here: https://github.com/mickasmt/next-saas-stripe-starter/blob/76eb9f2b70b29c7a734ff0e5b047796ed2dac28d/app/(marketing)/page.tsx */}
        <Link
          href="https://twitter.com/miickasmt/status/1719892161095745801"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "px-4"
          )}
          target="_blank"
        >
          <span className="mr-3">🎉</span> Introducing support for GPT-4
        </Link>

        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          The Visual Way to {""}
          <span className="text-gradient_indigo-purple font-extrabold">
            Diagram
          </span>
        </h1>

        <p
          className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          ChatMermaid simplifies diagram creation with text. Integrated with
          mermaid.js, it enables quick generation of flowcharts, sequence
          diagrams, Gantt charts, and more.
        </p>

        <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            href="/pricing"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            <span>Start </span>
            <Icons.arrowRight className="size-4" />
          </Link>
          <Link
            href="/"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
              }),
              "px-5"
            )}
          >
            <Icons.gitHub className="mr-2 size-4" />
            <p>
              <span className="hidden sm:inline-block">Sign up</span>
            </p>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </section>
  );
}
