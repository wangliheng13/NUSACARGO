import { getShipments } from "@/lib/shipments";
import { StatusBadge } from "@/components/ui/status-badge";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export const metadata = {
  title: "Pengiriman · NusaCargo",
};

export default async function ShipmentsPage() {
  const shipments = await getShipments();

  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold">Pengiriman</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No. resi</TableHead>
            <TableHead>Rute</TableHead>
            <TableHead>Klien</TableHead>
            <TableHead>Berat</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shipments.map((shipment) => (
            <TableRow key={shipment.awb}>
              <TableCell className="font-mono text-xs">
                {shipment.awb}
              </TableCell>
              <TableCell>
                {shipment.origin} → {shipment.destination}
              </TableCell>
              <TableCell>{shipment.client.name}</TableCell>
              <TableCell>{shipment.weightKg} kg</TableCell>
              <TableCell>
                <StatusBadge status={shipment.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
