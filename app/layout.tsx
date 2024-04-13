import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    default: "ChatMermaid",
    template: `%s - Mermaid.js AI Chatbot`,
  },
  description:
    "The Visual Way to Diagram | ChatMermaid is the easiest way to create professional diagrams using mermaid.js. No more struggling with complex syntax. Let the AI do the work.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "rgb(23 23 23)" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AppRouterCacheProvider>
            <main>
              {children} <Analytics /> <SpeedInsights />
            </main>
            <Toaster />
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
