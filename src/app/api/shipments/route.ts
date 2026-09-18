import { NextResponse } from "next/server";
import { mockShipments } from "@/lib/data/mock-shipments";

export async function GET() {
  // Simulasi latensi jaringan seperti backend sungguhan.
  await new Promise((resolve) => setTimeout(resolve, 150));
  return NextResponse.json(mockShipments);
}
