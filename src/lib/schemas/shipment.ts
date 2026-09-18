import { z } from "zod";
import { SHIPMENT_STATUS } from "@/types/shipment";

export const shipmentSchema = z.object({
  awb: z.string(),
  origin: z.string(),
  destination: z.string(),
  status: z.enum(SHIPMENT_STATUS),
  weightKg: z.number().positive(),
  etaISO: z.string(),
  delayedMinutes: z.number().optional(),
  client: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

export const shipmentListSchema = z.array(shipmentSchema);
