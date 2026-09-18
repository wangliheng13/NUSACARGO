/**
 * Menghitung selisih menit antara ETA (etaISO) dan waktu sekarang.
 *
 * Hasil positif  -> ETA masih di masa depan (belum tiba).
 * Hasil negatif  -> ETA sudah lewat (harusnya sudah tiba).
 * Hasil 0        -> tepat waktu sekarang (jarang terjadi persis).
 *
 * `now` dibuat jadi parameter (bukan langsung new Date() di dalam fungsi)
 * supaya fungsi ini gampang diuji: waktu "sekarang" bisa disuntikkan
 * di unit test tanpa perlu mocking.
 */
export function getMinutesUntilEta(
  etaISO: string,
  now: Date = new Date(),
): number {
  const eta = new Date(etaISO);
  const diffMs = eta.getTime() - now.getTime();
  return Math.round(diffMs / 60_000);
}
