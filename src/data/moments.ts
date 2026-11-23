import type { ImageMetadata } from "astro";

export interface MomentPhoto {
  src: ImageMetadata;
  alt: string;
}

export interface Moment {
  title: string;
  /** Format YYYY-MM */
  date?: string;
  description?: string;
  photos: MomentPhoto[];
}

/**
 * Daftar momen untuk halaman galeri, urut dari yang paling lama.
 *
 * Cara menambah momen:
 * 1. Taruh fotonya di src/assets/galery/<nama-momen>/
 * 2. Import fotonya di atas file ini, misalnya:
 *      import makrab1 from "../assets/galery/makrab/1.jpg";
 * 3. Tambahkan objek baru ke array di bawah:
 *      {
 *        title: "Makrab",
 *        date: "2025-10",
 *        description: "Satu kalimat tentang momennya.",
 *        photos: [{ src: makrab1, alt: "Deskripsi isi foto" }],
 *      },
 *
 * Selama array ini kosong, halaman galeri menampilkan contoh tata letak.
 */
export const moments: Moment[] = [];

const monthFormat = new Intl.DateTimeFormat("id-ID", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const formatMomentDate = (date: string) =>
  monthFormat.format(new Date(`${date}-01T00:00:00Z`));
