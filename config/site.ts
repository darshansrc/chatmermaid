import { SidebarNavItem, SiteConfig } from "@/types/index";
// import { env } from "@/env.mjs";

// const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "ChatMermaid",
  description:
    "Get your project off to an explosive start with SaaS Starter! Harness the power of Next.js 14, Prisma, Planetscale, Auth.js v5, Resend, React Email, Shadcn/ui and Stripe to build your next big thing.",
  url: "https://saas-starter.com",
  ogImage: ` /og.jpg`,
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/mickasmt/next-saas-stripe-starter",
  },
  mailSupport: "support@saas-starter.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Partners", href: "#" },
      { title: "Jobs", href: "#" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];
