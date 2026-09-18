export const SHIPMENT_STATUS = [
  "dijemput",
  "transit",
  "di-pelabuhan",
  "dikirim",
  "selesai",
  "tertunda",
  "dibatalkan",
] as const;

export type ShipmentStatus = (typeof SHIPMENT_STATUS)[number];

export interface Vehicle {
  id: string;
  plateNumber: string;
  type: "motor" | "van" | "truk" | "kontainer";
  capacityKg: number;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  licenseNumber: string;
}

export interface Shipment {
  awb: string; // nomor resi, contoh: NC-2026-000481
  origin: string;
  destination: string;
  status: ShipmentStatus;
  weightKg: number;
  etaISO: string;
  delayedMinutes?: number;
  client: { id: string; name: string };
  // Opsional: pengiriman yang belum dijemput (status "dijemput") biasanya
  // belum punya kendaraan/sopir yang ditugaskan, jadi relasinya opsional,
  // bukan wajib.
  vehicle?: Vehicle;
  driver?: Driver;
}

export type ShipmentSummary = Pick<Shipment, "awb" | "status" | "etaISO">;
