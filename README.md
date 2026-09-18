<p align="center">
  <img src="docs/assets/hi-lol.png" alt="Meme Will it work? dengan komentar hi lol." width="225" />
</p>

# Inovus

Website profil kelas PTI-B angkatan 2025, Universitas Negeri Malang.
Dibangun dengan Astro sebagai tempat kenalan sama anak-anak kelas, melihat
kebersamaan, dan menyimpan cerita lewat foto. Satu tempat buat perjalanan kuliah
kita, dari awal masuk sampai jadi kenangan.

## Tentang website

Inovus dirancang sebagai website dengan beberapa halaman:

| Halaman | Isi yang direncanakan |
| --- | --- |
| **Beranda** | Perkenalan singkat Inovus dan cuplikan kehidupan kelas. |
| **Tentang** | Identitas PTI-B, cerita kelas, dan struktur pengurus. |
| **Anggota** | Kartu anggota, nama panggilan, dan sosial media opsional. |
| **Galeri** | Album foto kegiatan dan momen kebersamaan. |

Fokusnya profil kelas dan album kenangan digital, tanpa artikel atau blog.
Foto anggota dan galeri menggunakan placeholder sampai aset asli tersedia.

## Identitas visual

Tema terang dengan putih sebagai dasar, biru sebagai warna utama, dan oren
sebagai aksen. Palet yang disepakati untuk implementasi:

| Warna | Hex | Peran |
| --- | --- | --- |
| Warm white | `#FAFAF8` | Background utama. |
| White | `#FFFFFF` | Navbar, kartu, dan panel. |
| Persian Blue | `#0C35C6` | Tombol utama dan identitas brand. |
| Blazing Flame | `#FC480E` | Aksen dan detail dekoratif. |
| Alabaster Grey | `#E0E0E0` | Pembatas dan placeholder. |
| Onyx | `#151515` | Judul dan teks utama. |
| Text grey | `#626262` | Teks pendukung. |

## Status

Project masih menggunakan halaman starter Astro. Konteks untuk coding agent sudah
siap; global CSS dan halaman website adalah tahap berikutnya.

Halaman dan palet di atas masih berupa rencana, belum tampilan yang sudah jadi.

## Menjalankan project

Gunakan Node.js `>=22.12.0` dan Bun. Dependency mengikuti `package.json` dan `bun.lock`.

```sh
bun install
bun run dev --background
```

Port default adalah `4321`. Ikuti URL dari CLI jika port tersebut sudah dipakai.

| Command | Kegunaan |
| --- | --- |
| `bun run astro dev status` | Melihat status background server. |
| `bun run astro dev logs` | Membaca log server. |
| `bun run astro dev stop` | Menghentikan background server. |
| `bun run build` | Membuat production build di `dist/`. |
| `bun run preview` | Meninjau hasil build secara lokal. |

Belum ada script lint, test, atau type-check terpisah.

## Panduan pengembangan dengan AI

- [AGENTS.md](AGENTS.md): aturan kerja agent, struktur repo, command, verifikasi.
- [CLAUDE.md](CLAUDE.md): mengarahkan Claude ke aturan bersama.
- [Project brief](docs/project-brief.md): identitas, navigasi, palet, placeholder, tahap pengerjaan.

Perbarui brief ketika keputusan produk berubah agar sesi berikutnya memiliki
konteks yang sama. Setup berupa dokumentasi untuk coding agent dan tidak
membutuhkan API key atau dependency AI.

## Referensi

- [Dokumentasi Astro](https://docs.astro.build)
- [Referensi komunitas WRI](https://wridev.id/en/)
