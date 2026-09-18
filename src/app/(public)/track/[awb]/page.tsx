import { notFound } from "next/navigation";
import { getShipment } from "@/lib/shipments";
import { StatusBadge } from "@/components/ui/status-badge";

type Props = { params: Promise<{ awb: string }> };

export async function generateMetadata({ params }: Props) {
  const { awb } = await params;
  return {
    title: `Lacak ${awb} · NusaCargo`,
    description: `Status terkini pengiriman ${awb} pada jaringan NusaCargo.`,
  };
}

export default async function TrackPage({ params }: Props) {
  const { awb } = await params;
  const shipment = await getShipment(awb);

  if (!shipment) notFound();

  const eta = new Date(shipment.etaISO).toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <section aria-labelledby="judul" className="mx-auto max-w-xl space-y-6 p-6">
      <header className="space-y-1">
        <p className="text-sm text-muted-foreground">Nomor resi</p>
        <h1 id="judul" className="text-2xl font-semibold">
          {shipment.awb}
        </h1>
      </header>

      <div className="flex items-center justify-between rounded-lg border border-border bg-surface p-4">
        <div>
          <p className="text-sm text-muted-foreground">Rute</p>
          <p className="font-medium">
            {shipment.origin} → {shipment.destination}
          </p>
        </div>
        <StatusBadge status={shipment.status} />
      </div>

      <dl className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-muted-foreground">Berat</dt>
          <dd className="font-medium">{shipment.weightKg} kg</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Estimasi tiba</dt>
          <dd className="font-medium">{eta}</dd>
        </div>
        {shipment.delayedMinutes != null && (
          <div className="col-span-2">
            <dt className="text-danger">Keterlambatan</dt>
            <dd className="font-medium text-danger">
              {shipment.delayedMinutes} menit
            </dd>
          </div>
        )}
        <div className="col-span-2">
          <dt className="text-muted-foreground">Klien</dt>
          <dd className="font-medium">{shipment.client.name}</dd>
        </div>
      </dl>
    </section>
  );
}
