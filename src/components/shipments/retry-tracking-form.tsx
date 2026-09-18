"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function RetryTrackingForm() {
  const router = useRouter();
  const [awb, setAwb] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = awb.trim();
    if (trimmed.length === 0) return;
    router.push(`/track/${encodeURIComponent(trimmed)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
      <input
        value={awb}
        onChange={(e) => setAwb(e.target.value)}
        placeholder="Contoh: NC-2026-000481"
        aria-label="Nomor resi"
        className="flex-1 rounded-md border border-border bg-surface px-3 py-2 text-sm"
      />
      <Button type="submit">Lacak</Button>
    </form>
  );
}
