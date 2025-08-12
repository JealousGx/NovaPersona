import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "NovaPersona",
  description: "AI-powered personal branding assistant.",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen bg-background text-foreground">
        {children}

        <Toaster richColors />
      </body>
    </html>
  );
}
