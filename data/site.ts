export const releases = [
  {
    year: "2026",
    title: "Workout",
    note: "DCR MILDA × sneakout.",
    href: "https://open.spotify.com/artist/5AS0k6J1K3MrVUtKKahv64",
  },
  {
    year: "2026",
    title: "Bad",
    note: "DCR MILDA, Jesse Lucas, DR MAD",
    href: "https://open.spotify.com/artist/5AS0k6J1K3MrVUtKKahv64",
  },
  {
    year: "2025",
    title: "Coming to Life",
    note: "Debut EP · 7 tracks",
    href: "https://music.apple.com/us/artist/dcr-milda/1761169899",
  },
  {
    year: "2025",
    title: "Places",
    note: "Single · 4:38",
    href: "https://open.spotify.com/artist/5AS0k6J1K3MrVUtKKahv64",
  },
] as const;

type TourDate = {
  date: string;
  city: string;
  venue: string;
  country: string;
  href?: string;
};

export const tourDates: readonly TourDate[] = [
  { date: "28 AUG", city: "Hong Kong", venue: "Upper Hong Kong", country: "HK", href: "https://mandosapp.com/event-details/cmsmrok9v09o001mhcz3vqkuh" },
  { date: "29 AUG", city: "Yangon", venue: "The Gawli Show", country: "MM", href: "https://gawliworldwide.com/" },
  { date: "02 SEP", city: "Saigon", venue: "BAM", country: "VN" },
  { date: "04 SEP", city: "Saigon", venue: "Salon", country: "VN" },
  { date: "15 SEP", city: "Kuala Lumpur", venue: "KYO", country: "MY" },
  { date: "17 SEP", city: "Jakarta", venue: "IZZY", country: "ID" },
  { date: "19 SEP", city: "Prague", venue: "More Sauce Day / Radost", country: "CZ" },
  { date: "01 OCT", city: "Shenzhen", venue: "To be announced", country: "CN" },
  { date: "09 OCT", city: "Danang", venue: "Kala Kala", country: "VN" },
  { date: "10 OCT", city: "Seoul", venue: "To be announced", country: "KR" },
  { date: "17 OCT", city: "Vientiane", venue: "Baron Vientiane", country: "LA" },
  { date: "23—24 OCT", city: "Dubai", venue: "To be announced", country: "AE" },
  { date: "30 OCT", city: "Bangkok", venue: "Savoy", country: "TH" },
  { date: "31 OCT", city: "Bangkok", venue: "Burning City", country: "TH" },
] as const;

export const gallery = [
  { src: "/images/dcr-portrait-film.jpg", alt: "DCR MILDA smiling in a studio portrait", code: "PRG—01" },
  { src: "/images/dcr-prague.jpg", alt: "DCR MILDA photographed in a Prague shop", code: "PRG—02" },
  { src: "/images/dcr-live-green.jpg", alt: "DCR MILDA moving behind the decks during a live set", code: "LIVE—03" },
  { src: "/images/dcr-leather.jpg", alt: "DCR MILDA in a black leather editorial look", code: "STU—04" },
  { src: "/images/dcr-backstage.jpg", alt: "DCR MILDA backstage during an international tour", code: "ROAD—05" },
  { src: "/images/dcr-night.jpg", alt: "DCR MILDA performing at night", code: "LIVE—06" },
] as const;

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/dcrmilda/" },
  { label: "TikTok", href: "https://www.tiktok.com/@dcrmilda?lang=en" },
  { label: "Facebook", href: "https://www.facebook.com/milda.dcr" },
  { label: "SoundCloud", href: "https://soundcloud.com/dcr-milda" },
  { label: "Linktree", href: "https://linktr.ee/dcrmilda" },
] as const;
