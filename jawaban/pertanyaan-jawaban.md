# Pertanyaan & Jawaban — NusaCargo Control Tower

## 1. Tambahkan satu status baru dan catat berapa berkas yang wajib diperbarui akibat perubahan itu

**Status baru:** `"dibatalkan"`, ditambahkan ke `SHIPMENT_STATUS` di `src/types/shipment.ts`.

**Jumlah berkas yang wajib diperbarui: 2**

1. `src/components/ui/status-badge.tsx` — tambah key `dibatalkan` di `STYLES: Record<ShipmentStatus, string>`
2. `src/components/shipments/status-distribution-chart.tsx` — tambah key `dibatalkan` di dua tempat: `LABELS` dan `BAR_FILL` (sama-sama `Record<ShipmentStatus, string>`)

**Tidak perlu diubah:** `src/lib/schemas/shipment.ts`, karena `z.enum(SHIPMENT_STATUS)` mengambil langsung dari sumber yang sama, sehingga status baru otomatis ikut tervalidasi tanpa disentuh manual.

**Pola umum:** menambah satu status baru berdampak ke setiap file yang memetakan `ShipmentStatus` ke sesuatu yang lain (warna, label, dsb.) — bukan ke file yang hanya memvalidasi atau meneruskan tipe itu apa adanya. TypeScript strict mode (`Record<ShipmentStatus, ...>`) akan menandai error di editor kalau ada key yang terlewat.

---

## 2. Periksa kontras warna teks pada kedua mode dan catat rasio yang diperoleh

Rasio dihitung dari token warna OKLCH di `globals.css`, dikonversi ke luminansi relatif WCAG.

| Pasangan warna | Mode terang | Mode gelap | Status |
|---|---|---|---|
| `foreground` vs `background` | 16.79:1 | 16.93:1 | Lolos AAA |
| `foreground` vs `surface` | 15.87:1 | 15.06:1 | Lolos AAA |
| `foreground` vs `muted` | 14.52:1 | 12.45:1 | Lolos AAA |
| teks `danger` vs `background` | 5.21:1 | 6.39:1 | Lolos AA, di bawah AAA |
| teks putih di atas tombol `brand` | 5.11:1 | **2.35:1** | AA / **Gagal** |

Ambang WCAG: AA = 4.5:1 (teks normal), AAA = 7:1.

**Temuan:** hampir semua kombinasi lolos dengan sangat baik, kecuali tombol `Button` varian `default` (`bg-brand text-white`) di mode gelap — kontrasnya cuma 2.35:1, di bawah ambang minimum. Ini terjadi karena `--brand` dibuat lebih terang di `.dark` (lightness 0.52 → 0.72) supaya menonjol dari background gelap, tapi itu membuatnya terlalu dekat dengan warna teks putih di atasnya.

**Rekomendasi:** di mode gelap, teks tombol `default` sebaiknya memakai warna gelap (mendekati `foreground` mode gelap), bukan putih, karena latar tombolnya sudah terang.
