import type { ShipmentStatus } from "@/types/shipment";

type Props = { counts: Record<ShipmentStatus, number> };

const LABELS: Record<ShipmentStatus, string> = {
  dijemput: "Dijemput",
  transit: "Transit",
  "di-pelabuhan": "Di pelabuhan",
  dikirim: "Dikirim",
  selesai: "Selesai",
  tertunda: "Tertunda",
  dibatalkan: "Dibatalkan", // <- tambahkan baris ini
};

// Warna disamakan dengan keluarga warna badge di status-badge.tsx supaya
// visualnya konsisten di seluruh dasbor.
const BAR_FILL: Record<ShipmentStatus, string> = {
  dijemput: "fill-slate-400",
  transit: "fill-sky-500",
  "di-pelabuhan": "fill-indigo-500",
  dikirim: "fill-amber-500",
  selesai: "fill-emerald-500",
  tertunda: "fill-rose-500",
  dibatalkan: "fill-neutral-400", // <- tambahkan baris ini
};

export function StatusDistributionChart({ counts }: Props) {
  const entries = Object.entries(counts) as [ShipmentStatus, number][];
  const max = Math.max(1, ...entries.map(([, n]) => n));
  const barWidth = 48;
  const gap = 24;
  const chartHeight = 160;
  const width = entries.length * (barWidth + gap);

  return (
    <svg
      viewBox={`0 0 ${width} ${chartHeight + 40}`}
      className="w-full"
      role="img"
      aria-label="Distribusi status pengiriman"
    >
      {entries.map(([status, count], i) => {
        const barHeight = (count / max) * chartHeight;
        const x = i * (barWidth + gap);
        const y = chartHeight - barHeight;
        return (
          <g key={status}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              rx={4}
              className={BAR_FILL[status]}
            />
            <text
              x={x + barWidth / 2}
              y={y - 6}
              textAnchor="middle"
              className="fill-foreground text-[11px] font-medium"
            >
              {count}
            </text>
            <text
              x={x + barWidth / 2}
              y={chartHeight + 18}
              textAnchor="middle"
              className="fill-foreground/60 text-[10px]"
            >
              {LABELS[status]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
