import React from "react";

import { AuthButtons } from "@/components/auth-buttons";
import { Logo } from "@/components/logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <header className="w-full z-20 sticky top-0 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="w-full max-w-5xl mx-auto flex items-center justify-between px-6 py-2">
          <Logo />

          <nav className="flex gap-4 text-base">
            <AuthButtons />
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">{children}</main>

      <footer className="w-full border-t border-border py-6 text-center text-sm text-muted-foreground bg-background/80 backdrop-blur-md z-20">
        &copy; {new Date().getFullYear()} NovaPersona. All rights reserved.
      </footer>
    </React.Fragment>
  );
}
