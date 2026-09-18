import type { Shipment } from "@/types/shipment";

/**
 * Data tiruan. Di dunia nyata ini akan datang dari database;
 * di sini kita pura-pura jadi "backend" lewat app/shipments/route.ts
 * supaya alur fetch-nya tetap realistis (client -> API -> data layer).
 */
export const mockShipments: Shipment[] = [
  {
    awb: "NC-2026-000481",
    origin: "Jakarta",
    destination: "Surabaya",
    status: "transit",
    weightKg: 12.5,
    etaISO: "2026-09-19T14:30:00+07:00",
    client: { id: "c-01", name: "PT Sinar Abadi" },
  },
  {
    awb: "NC-2026-000482",
    origin: "Bandung",
    destination: "Medan",
    status: "tertunda",
    weightKg: 8,
    etaISO: "2026-09-20T09:00:00+07:00",
    delayedMinutes: 90,
    client: { id: "c-02", name: "Toko Makmur Jaya" },
  },
  {
    awb: "NC-2026-000483",
    origin: "Semarang",
    destination: "Makassar",
    status: "di-pelabuhan",
    weightKg: 34.2,
    etaISO: "2026-09-22T18:00:00+07:00",
    client: { id: "c-03", name: "CV Nusantara Logistik" },
  },
  {
    awb: "NC-2026-000484",
    origin: "Yogyakarta",
    destination: "Denpasar",
    status: "dikirim",
    weightKg: 3.1,
    etaISO: "2026-09-18T11:00:00+07:00",
    client: { id: "c-04", name: "Bu Sari Kuliner" },
  },
  {
    awb: "NC-2026-000485",
    origin: "Jakarta",
    destination: "Balikpapan",
    status: "selesai",
    weightKg: 15.8,
    etaISO: "2026-09-16T08:00:00+07:00",
    client: { id: "c-05", name: "PT Sinar Abadi" },
  },
  {
    awb: "NC-2026-000486",
    origin: "Surabaya",
    destination: "Palembang",
    status: "dijemput",
    weightKg: 20,
    etaISO: "2026-09-23T13:00:00+07:00",
    client: { id: "c-06", name: "Toko Makmur Jaya" },
  },
];
