import type { ImageMetadata } from "astro";

const photos = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/members/*.jpg",
  { eager: true },
);

const photo = (file: string) =>
  photos[`../assets/members/${file}.jpg`]?.default;

export interface Member {
  number: number;
  nickname: string;
  name: string;
  /** Format YYYY-MM-DD */
  birthDate?: string;
  /** Tanpa "@" */
  instagram?: string;
  role?: string;
  photo?: ImageMetadata;
}

export const members: Member[] = [
  { number: 1, nickname: "Faizal", name: "Faizal Maulana Syifa", birthDate: "2006-05-28", instagram: "s444lll___", photo: photo("faizal") },
  { number: 2, nickname: "Rozy", name: "Faiz Fahrur Rozy", birthDate: "2006-08-21", instagram: "faiezz.css" },
  { number: 3, nickname: "Feli", name: "Falihatus Sa'adah Azizah Rahmah", birthDate: "2006-03-05", instagram: "feelll_05", role: "Sekretaris", photo: photo("falihatus") },
  { number: 4, nickname: "Ardi", name: "Fan Ardiyansyah", birthDate: "2007-09-05", instagram: "f.ardi00", photo: photo("fan") },
  { number: 5, nickname: "Andien", name: "Fandina Amira Kartika Dewi", birthDate: "2007-04-09", instagram: "mirrartika", photo: photo("fandina") },
  { number: 6, nickname: "Farel", name: "Farel Sang Putra Perdhana", birthDate: "2007-05-23", instagram: "farelsang_putra", photo: photo("farel") },
  { number: 7, nickname: "Farhan", name: "Farhan Yuval Susanto", birthDate: "2006-05-11", instagram: "farhanyuval", photo: photo("farhna") },
  { number: 8, nickname: "Zaya", name: "Fatimatuzzahrah", birthDate: "2007-03-11", instagram: "fatimatuzzahrahaq_", role: "Wakil Ketua", photo: photo("zaya") },
  { number: 9, nickname: "Eka", name: "Faujiah Eka Nuraini", birthDate: "2007-06-18", instagram: "flvdyo", photo: photo("eka") },
  { number: 10, nickname: "Yayan", name: "Ferly Rudian Saputra", birthDate: "2007-04-30", instagram: "iiiaannaaiii", photo: photo("ferly") },
  { number: 11, nickname: "Fina", name: "Fina Najma Fadhila", birthDate: "2005-07-10", instagram: "fina.jma", photo: photo("fina") },
  { number: 12, nickname: "Firyal", name: "Firyal Adilah Ra'fah", birthDate: "2005-12-09", instagram: "yfrzldlhh", photo: photo("firyal") },
  { number: 13, nickname: "Vian", name: "Flavian Alberta Widyadhana", birthDate: "2007-11-06", instagram: "albert_wddn" },
  { number: 14, nickname: "Gigih", name: "Gigih Suryo Tri Prakoso", birthDate: "2006-04-08", instagram: "gigihsuryo_", photo: photo("gigih") },
  { number: 15, nickname: "Gio", name: "Giovanni Asrorur Shafa", birthDate: "2008-03-01", instagram: "giovnnias", photo: photo("gio") },
  { number: 16, nickname: "Dila", name: "Gusti Fadila Khoirun Nisa", birthDate: "2007-03-23", instagram: "dhillakhrn", role: "Bendahara", photo: photo("dila") },
  { number: 17, nickname: "Ibi", name: "Habibi Raihan Nugraha", birthDate: "2007-05-30", instagram: "ibirhn", photo: photo("habibi") },
  { number: 18, nickname: "Hafidz", name: "Hafidz Achmad Prasetya", birthDate: "2006-09-13", instagram: "fdzxprsty_", photo: photo("hapid") },
  { number: 19, nickname: "Indria", name: "Indria Rahma Aulia", birthDate: "2007-01-29", instagram: "indria__a", photo: photo("indria") },
  { number: 20, nickname: "Izaz", name: "Izaz Saputra", birthDate: "2006-11-13", instagram: "izazsaja_", photo: photo("izaz") },
  { number: 21, nickname: "Kemal", name: "Kemal Yusuf Sugiar", birthDate: "2007-04-16", instagram: "kvmalysf", photo: photo("kemal") },
  { number: 22, nickname: "Keysa", name: "Keysa Lena Misdona", birthDate: "2007-01-25", instagram: "keysalenaa", photo: photo("keysa") },
  { number: 23, nickname: "Malva", name: "Malva Lidya Az Zahra", birthDate: "2006-08-27", instagram: "malvalydy_a", photo: photo("malva") },
  { number: 24, nickname: "Ifa", name: "Ma'rifatu Leyla Nabila", birthDate: "2006-08-14", instagram: "im_lilula", photo: photo("ifa") },
  { number: 25, nickname: "Faza", name: "M. Faza Musyaffa Al Azizi", birthDate: "2006-06-10", instagram: "faza.m.a19_", photo: photo("faza") },
  { number: 26, nickname: "Alvin", name: "Moch Alvin Ardiansyah", birthDate: "2006-10-26", instagram: "alvnardnsh" },
  { number: 27, nickname: "Amin", name: "Mochamad Amin Royandi", birthDate: "2005-04-04", instagram: "r.royandii", photo: photo("amin") },
  { number: 28, nickname: "Rasha", name: "Mochamad Rasha Dwi Saputra", instagram: "m_rshaaa", role: "Ketua Kelas", photo: photo("rasha") },
  { number: 29, nickname: "Jhendy", name: "Mochammad Jhendy Al Fajary", birthDate: "2007-01-26", instagram: "onlyjenreall", photo: photo("jhendy") },
  { number: 30, nickname: "Rezi", name: "Mochammad Maftuh Rezei", birthDate: "2006-12-12", instagram: "mochammadmaftuhrezei", photo: photo("kokoh") },
  { number: 31, nickname: "Thoriq", name: "Moch Thoriqul Firdaus", birthDate: "2007-02-21", instagram: "moch.thoriqul", photo: photo("thoriq") },
  { number: 32, nickname: "Candy", name: "Mohammad Nugroho Candy Pratama", birthDate: "2007-02-04", instagram: "cndprtm_", photo: photo("cendy") },
  { number: 33, nickname: "Haqi", name: "Moh. Dhiyaulhaq Ulumuddin", instagram: "haqikuy", photo: photo("haqi") },
  { number: 34, nickname: "Alip", name: "Moh. Fikri Halif Al Gufran", birthDate: "2007-06-03", instagram: "fikrihalif_" },
  { number: 35, nickname: "Al", name: "Muhammad Al Hafizh", birthDate: "2007-03-30", instagram: "fizzaja._", photo: photo("al") },
  { number: 36, nickname: "Dhimas", name: "Muhammad Dhimas Ekasapta", birthDate: "2007-12-09", instagram: "maazzekaaa", photo: photo("dhimas") },
  { number: 37, nickname: "Daus", name: "Muhammad Firdaus", birthDate: "2007-07-20", instagram: "mhmmd_dauzz" },
  { number: 38, nickname: "Jeje", name: "Muhammad Jihad Al-Hakim Batubara", birthDate: "2007-06-13", instagram: "mjihadalhakimbtbr", photo: photo("jeje") },
  { number: 39, nickname: "Rafie", name: "Muhammad Rafie Rahmatullah", birthDate: "2007-01-14", instagram: "muhrafiee", photo: photo("rafi") },
  { number: 40, nickname: "Sultan", name: "Muhammad Sultan Zulfikar", birthDate: "2006-08-04", instagram: "only_fikar", photo: photo("sulton") },
];

const birthDateFormat = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const formatBirthDate = (date: string) =>
  birthDateFormat.format(new Date(`${date}T00:00:00Z`));
