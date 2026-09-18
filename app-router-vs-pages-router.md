# Perbedaan App Router dan Pages Router di Next.js

## 1. Struktur Folder & Routing

**Pages Router** (folder `pages/`):
- Setiap file = satu route otomatis
- `pages/about.js` → `/about`
- `pages/blog/[slug].js` → `/blog/:slug`

**App Router** (folder `app/`):
- Routing berbasis folder, bukan file
- Setiap route butuh file `page.js` di dalam foldernya
- `app/about/page.js` → `/about`
- `app/blog/[slug]/page.js` → `/blog/:slug`

## 2. Rendering Komponen

| | Pages Router | App Router |
|---|---|---|
| Default | Client Component | **Server Component** |
| Client Component | Otomatis | Harus tulis `"use client"` |

Ini perubahan paling besar — di App Router, komponen dirender di server secara default, sehingga JS yang dikirim ke browser lebih sedikit dan performa lebih baik.

## 3. Data Fetching

**Pages Router:**
```js
export async function getServerSideProps() { ... }
export async function getStaticProps() { ... }
```

**App Router:**
```js
// Langsung pakai async/await di Server Component
async function Page() {
  const data = await fetch('...')
  return <div>{data}</div>
}
```
Fungsi khusus seperti `getServerSideProps`/`getStaticProps` sudah tidak dipakai lagi.

## 4. Layout

**Pages Router:** Perlu custom `_app.js` dan `_document.js`, layout manual pakai wrapper komponen.

**App Router:** Ada file `layout.js` bawaan yang nested — layout otomatis dipertahankan (tidak re-render) saat navigasi antar halaman di dalamnya.

## 5. Fitur Tambahan di App Router
- `loading.js` → loading state otomatis (Suspense)
- `error.js` → error boundary otomatis
- `not-found.js` → halaman 404 custom per route
- Route groups `(namaGroup)` untuk organisasi tanpa memengaruhi URL
- Parallel routes & intercepting routes

## 6. Kapan Pakai yang Mana?
- **Proyek baru** → disarankan pakai **App Router** (ini arah pengembangan Next.js ke depan, lebih banyak fitur baru difokuskan di sini)
- **Proyek lama/existing** → Pages Router masih didukung penuh, tidak wajib migrasi kecuali butuh fitur App Router
- Keduanya **bisa dipakai bersamaan** dalam satu proyek (migrasi bertahap)
