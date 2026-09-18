import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Shipment } from "@/types/shipment";

type Props = { shipments: Shipment[] };

export function MetricCards({ shipments }: Props) {
  const total = shipments.length;
  const delayed = shipments.filter((s) => (s.delayedMinutes ?? 0) > 0).length;
  const onTime =
    total === 0 ? 0 : Math.round(((total - delayed) / total) * 100);

  const metrics = [
    { label: "Total pengiriman", value: String(total) },
    { label: "Ketepatan waktu", value: `${onTime}%` },
    { label: "Jumlah tertunda", value: String(delayed) },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {metrics.map((m) => (
        <Card key={m.label}>
          <CardHeader>
            <CardTitle>{m.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{m.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
