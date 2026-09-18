import type { ReactNode } from "react";
import { NavLinks } from "@/components/dashboard/nav-links";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[240px_1fr]">
      <aside className="border-r border-border bg-surface p-4">
        <p className="mb-6 text-sm font-semibold">NusaCargo Control Tower</p>
        <NavLinks />
      </aside>
      <div className="flex flex-col">
        <header className="flex items-center justify-end border-b border-border p-4">
          <ThemeToggle />
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
