import { getShipments } from "@/lib/shipments";
import { SHIPMENT_STATUS, type ShipmentStatus } from "@/types/shipment";
import { StatusDistributionChart } from "@/components/shipments/status-distribution-chart";
import { MetricCards } from "@/components/shipments/metric-cards";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Analitik · NusaCargo",
};

export default async function AnalyticsPage() {
  const shipments = await getShipments();

  const counts = SHIPMENT_STATUS.reduce<Record<ShipmentStatus, number>>(
    (acc, status) => {
      acc[status] = shipments.filter((s) => s.status === status).length;
      return acc;
    },
    {} as Record<ShipmentStatus, number>,
  );

  const delayed = shipments.filter((s) => (s.delayedMinutes ?? 0) > 0);

  return (
    <section className="space-y-6">
      <h1 className="text-xl font-semibold">Analitik</h1>

      <MetricCards shipments={shipments} />

      <Card>
        <CardHeader>
          <CardTitle>Distribusi status pengiriman</CardTitle>
        </CardHeader>
        <CardContent>
          <StatusDistributionChart counts={counts} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pengiriman tertunda ({delayed.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {delayed.length === 0 ? (
            <p className="text-sm text-foreground/60">
              Tidak ada pengiriman yang tertunda saat ini.
            </p>
          ) : (
            <ul className="space-y-2 text-sm">
              {delayed.map((s) => (
                <li key={s.awb} className="flex justify-between">
                  <span className="font-mono text-xs">{s.awb}</span>
                  <span className="text-danger">{s.delayedMinutes} menit</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
