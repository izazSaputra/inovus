// Memotong foto anggota (seluruh badan) menjadi dua versi kecil:
//   faces/      persegi, kepala dan bahu, untuk dinding wajah di Home
//   portraits/  4:5, setengah badan, untuk kartu di halaman anggota
//
// Jalankan ulang setiap kali foto di src/assets/members/ berubah:
//   npm run crop:members
//
// Posisi kepala tiap foto ada di src/data/memberHeads.json
// (pecahan 0–1 dari lebar dan tinggi foto).

import { mkdir, readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const sourceDir = "src/assets/members";
const heads = JSON.parse(await readFile("src/data/memberHeads.json", "utf8"));

const versions = [
  // Lebar jendela potong dalam pecahan lebar foto, rasio, geser ke bawah kepala.
  { dir: "faces", window: 1 / 5.5, ratio: 1, shiftY: 0.015, width: 480 },
  { dir: "portraits", window: 1 / 4, ratio: 4 / 5, shiftY: 0.055, width: 800 },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

for (const version of versions) {
  await mkdir(join(sourceDir, version.dir), { recursive: true });
}

const files = (await readdir(sourceDir)).filter((file) => file.endsWith(".jpg"));

for (const file of files) {
  const name = file.replace(".jpg", "");
  const head = heads[name];

  if (!head) {
    console.warn(`! ${file}: belum ada posisi kepala di memberHeads.json, dilewati`);
    continue;
  }

  const image = sharp(join(sourceDir, file));
  const { width: photoWidth, height: photoHeight } = await image.metadata();

  for (const version of versions) {
    const cropWidth = Math.round(photoWidth * version.window);
    const cropHeight = Math.round(cropWidth / version.ratio);
    const centerX = head[0] * photoWidth;
    const centerY = (head[1] + version.shiftY) * photoHeight;

    const left = Math.round(clamp(centerX - cropWidth / 2, 0, photoWidth - cropWidth));
    const top = Math.round(clamp(centerY - cropHeight / 2, 0, photoHeight - cropHeight));

    await sharp(join(sourceDir, file))
      .extract({ left, top, width: cropWidth, height: cropHeight })
      .resize({ width: version.width })
      .jpeg({ quality: 86, mozjpeg: true })
      .toFile(join(sourceDir, version.dir, file));
  }

  console.log(`✓ ${file}`);
}
