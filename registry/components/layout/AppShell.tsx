"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { useSidebar } from "@/hooks/useSidebar";
import { ThemeProvider } from "../providers/ThemeProvider";
import { SessionProvider } from "../providers/SessionProvider";
import { Toaster } from "@/components/ui/sonner";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { isCollapsed, toggleSidebar } = useSidebar();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>
        <div className={`grid min-h-screen w-full transition-all duration-300 ${isCollapsed
          ? "md:grid-cols-[64px_1fr]"
          : "md:grid-cols-[256px_1fr] lg:grid-cols-[288px_1fr]"
          }`}>
          <Sidebar isCollapsed={isCollapsed} />
          <div className="flex flex-col">
            <Header isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
            <main className="flex flex-1 flex-col gap-4 p-4 pt-24 md:pt-4 lg:gap-6 lg:p-6">
              {children}
            </main>
          </div>
          <MobileNav />
        </div>
        <Toaster />
      </SessionProvider>
    </ThemeProvider>
  );
}
