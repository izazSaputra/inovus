import type { ImageMetadata } from "astro";

export interface MomentPhoto {
  src: ImageMetadata;
  alt: string;
}

export interface Moment {
  title: string;
  date?: string;
  description?: string;
  photos: MomentPhoto[];
}

export const moments: Moment[] = [];

const monthFormat = new Intl.DateTimeFormat("id-ID", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const formatMomentDate = (date: string) =>
  monthFormat.format(new Date(`${date}-01T00:00:00Z`));
