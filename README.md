# Inovus

Website profil kelas PTI-B angkatan 2025, Universitas Negeri Malang.
Dibangun dengan Astro untuk memperkenalkan anggota dan menyimpan momen kelas.

## Status

Project masih menggunakan halaman starter Astro. Konteks untuk coding agent sudah
siap; global CSS dan halaman website adalah tahap berikutnya.

Rencana navigasi: **Beranda, Tentang, Anggota, Galeri**, masing-masing pada halaman
terpisah. Foto anggota dan galeri memakai placeholder terlebih dahulu. Tidak ada
artikel/blog dalam lingkup awal.

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
- [Panduan AGENTS.md dari OpenAI](https://developers.openai.com/es-419/docs/agent-configuration/agents-md)
- [Referensi komunitas WRI](https://wridev.id/en/)
