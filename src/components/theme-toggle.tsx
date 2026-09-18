"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

export function ThemeToggle() {
  // null di render pertama: server tidak tahu preferensi localStorage
  // pengguna, jadi kalau langsung tebak "light"/"dark" bisa beda dari
  // hasil client -> hydration mismatch. Isi nilainya di useEffect saja.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  }

  return (
    <Button
      variant="outline"
      onClick={toggle}
      aria-label="Ganti mode gelap/terang"
    >
      {theme === null ? "Mode" : theme === "dark" ? "🌙 Gelap" : "☀️ Terang"}
    </Button>
  );
}
