import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "@/components/ui/sonner";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ChatMermaid",
  description:
    "The Visual Way to Diagram | ChatMermaid is the easiest way to create professional diagrams using mermaid.js. No more struggling with complex syntax. Let the AI do the work.",
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
            <main>{children}</main> <Toaster />
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
