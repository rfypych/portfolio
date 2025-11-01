# Portfolio Website with GSAP Animations (Next.js)

## Ringkasan

> Catatan: Proyek ini dibuat untuk tujuan pembelajaran/portofolio. Mohon tidak menyalin tanpa izin.

Repo ini berisi kode sumber website portofolio modern yang dibangun dengan Next.js 14 (App Router), GSAP untuk animasi halus, dan Tailwind CSS untuk styling. Proyek memprioritaskan UX yang lembut, transisi halaman yang rapi, dan struktur komponen yang mudah dikembangkan.

## Demo

- Live: (tambahkan URL deploy Vercel di sini)
- Lokal: http://localhost:3000 (lihat cara menjalankan di bawah)

## Fitur Utama

- Animasi GSAP menyeluruh (hover, marquee, dan transisi halaman overlay yang menutup sebelum navigasi dan membuka setelah halaman tujuan siap).
- Next.js 14 App Router dengan struktur modular dan performa tinggi.
- Tailwind CSS (utility-first) + konfigurasi font (DM Sans + font lokal).
- Manajemen state menu dengan Redux Toolkit (auto-close navbar saat transisi).
- Komponen UI reusable dan tersegmentasi (hero, about, contact, work, dsb.).
- Optimasi gambar dengan next/image, aset SVG & ikon yang terorganisir.
- Responsif dan mudah dikustomisasi.

## Teknologi

- Next.js 14, React 18, TypeScript 5
- GSAP 3 (CustomEase, animasi overlay transisi halaman)
- Tailwind CSS 3, PostCSS, Autoprefixer
- Redux Toolkit 2 + React Redux 9
- Swiper 11, Lottie (opsional pada beberapa komponen)
- Lainnya: clsx/tailwind-merge, lucide-react, split-type, dll.

## Struktur Proyek (ringkas)

```
.
├─ app/
│  ├─ layout.tsx              # Root layout & font, global providers
│  ├─ globals.css             # Global styles
│  └─ work/                   # Halaman portofolio proyek
├─ components/
│  ├─ header.tsx              # Header + tombol menu
│  ├─ headerNavigation.tsx    # Overlay menu navigasi (Redux)
│  ├─ heroSection/            # Hero
│  ├─ aboutSection/           # About + marquee
│  ├─ contactSection/         # Contact + background logo animasi
│  └─ ui/
│     └─ GsapPageTransition.tsx # Overlay transisi halaman (GSAP)
├─ data/                      # Link & data statis (social, dsb.)
├─ lib/                       # Utilitas (helper)
├─ public/
│  ├─ img/projects/           # Gambar proyek (1.png, 2.png, ...)
│  └─ svg_logo/               # Logo-logo SVG untuk background
├─ redux/
│  └─ states/menuSlice.ts     # isMenuOpen + color
├─ tailwind.config.ts         # Konfigurasi Tailwind
├─ next.config.js             # Konfigurasi Next.js
├─ package.json               # Script & dependensi
└─ tsconfig.json              # Konfigurasi TypeScript
```

## Menjalankan Secara Lokal

Prasyarat:

- Node.js 18+ (disarankan LTS)
- Yarn atau npm

Langkah:

```bash
# 1) Instal dependensi
yarn install

# 2) Jalankan development server
yarn dev
# Buka http://localhost:3000

# 3) Build untuk production
yarn build

# 4) Menjalankan build production
yarn start

# Opsional: cek lint
yarn lint
```

## Kustomisasi Cepat

- Tautan & Kontak: edit `data/data.ts` (email, Telegram, GitHub, Instagram, dsb.).
- Proyek pada halaman Work: edit `app/work/page.tsx` (`projectsData`) dan taruh gambar di `public/img/projects/` dengan format `1.png`, `2.png`, dst.
- Logo background Contact: tambah/hapus SVG di `public/svg_logo/`, lalu sesuaikan daftar di `components/contactSection/bgImagesContainer.tsx`.
- Transisi Halaman (GSAP): ubah durasi/ease di `components/ui/GsapPageTransition.tsx`.
- Font & tema: DM Sans & font lokal di `app/layout.tsx`; variabel CSS warna diatur melalui animasi pada beberapa komponen (mis. About/CTA).

## Deployment (Vercel direkomendasikan)

- Push repo ke GitHub, impor ke Vercel, framework: Next.js (auto-detect).
- Build command: `next build`
- Output: `.next`
- Variabel lingkungan (jika diperlukan) dapat ditambahkan via Project Settings di Vercel.

## Skrip (package.json)

- `yarn dev` — menjalankan server pengembangan
- `yarn build` — build production
- `yarn start` — menjalankan hasil build
- `yarn lint` — menjalankan linter

## Lisensi

Proyek ini ditujukan untuk pembelajaran/portofolio pribadi. Mohon tidak menyalin ulang secara penuh tanpa izin penulis.

## Kredit

Dikembangkan dengan Next.js, GSAP, dan Tailwind CSS. Terima kasih untuk seluruh pustaka open-source yang digunakan.
