// Next.js otomatis merender file ini ketika notFound() dipanggil di dalam
// app/(public)/track/[awb]/page.tsx. Lebih spesifik daripada not-found.tsx
// global, jadi pesannya bisa disesuaikan konteks pelacakan resi.
import { RetryTrackingForm } from "@/components/shipments/retry-tracking-form";

export default function TrackingNotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-4 p-10 text-center">
      <h1 className="text-xl font-semibold">Resi tidak ditemukan</h1>
      <p className="text-sm text-foreground/60">
        Periksa kembali nomor resi yang kamu masukkan, atau coba nomor resi lain
        di bawah ini.
      </p>
      <RetryTrackingForm />
    </section>
  );
}
