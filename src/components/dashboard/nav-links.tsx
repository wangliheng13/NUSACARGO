"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/shipments", label: "Pengiriman" },
  { href: "/analytics", label: "Analitik" },
  { href: "/settings", label: "Pengaturan" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {NAV.map((item) => {
        // startsWith supaya sub-halaman (mis. /shipments/NC-...) ikut
        // menandai menu "Pengiriman" sebagai aktif, bukan cuma exact match.
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-md px-3 py-2 text-sm hover:bg-muted",
              isActive
                ? "bg-muted font-medium text-brand"
                : "text-foreground/80",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
