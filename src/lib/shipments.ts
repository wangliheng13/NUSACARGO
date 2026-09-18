import "server-only";
import { shipmentListSchema } from "@/lib/schemas/shipment";
import type { Shipment } from "@/types/shipment";

// Next.js server components butuh URL absolut untuk fetch ke API route-nya
// sendiri. Set NEXT_PUBLIC_APP_URL di .env.local saat deploy; default ke
// localhost untuk development.
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export async function getShipments(): Promise<Shipment[]> {
  const res = await fetch(`${BASE_URL}/api/shipments`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Gagal mengambil data pengiriman (status ${res.status})`);
  }

  const raw: unknown = await res.json();
  return shipmentListSchema.parse(raw);
}

export async function getShipment(awb: string): Promise<Shipment | null> {
  const shipments = await getShipments();
  return shipments.find((s) => s.awb === awb) ?? null;
}
