import type { Metadata } from "next";

export const siteConfig = {
  name: "Yıldırımlar Cami Otel Kurs Medrese Halıları",
  shortName: "Yıldırımlar Halı",
  url: "https://www.yildirimlarhali.com",
  locale: "tr_TR",
  language: "tr-TR",
  logoPath: "/logo-google.png",
  logoWidth: 410,
  logoHeight: 378,
  phone: "+90 505 431 51 01",
  email: "iletisim@yildirimlarhali.com",
  address: {
    streetAddress: "Pulur Mah. 12. Sok. No:4",
    addressLocality: "Sivas",
    addressRegion: "Sivas",
    addressCountry: "TR",
  },
  geo: {
    latitude: 39.7433372,
    longitude: 37.0232877,
  },
  serviceAreas: [
    "Sivas",
    "Ankara",
    "İstanbul",
    "Samsun",
    "Ordu",
    "Van",
    "Trabzon",
    "Sinop",
    "Tokat",
    "Yozgat",
    "Konya",
    "Mersin",
    "Türkiye",
    "Yurt dışı",
  ],
};

export const logoUrl = `${siteConfig.url}${siteConfig.logoPath}`;

export const seoKeywords = [
  "cami halısı",
  "otel halısı",
  "kurs halısı",
  "medrese halısı",
  "mescit halısı",
  "sivas cami halısı",
  "ankara cami halısı",
  "sivas halı",
  "ankara halı",
  "istanbul cami halısı",
  "samsun cami halısı",
  "cami halısı modelleri",
  "cami halısı fiyat",
  "cami halısı döşeme",
  "ordu cami halısı",
  "van cami halısı",
  "trabzon cami halısı",
  "sinop cami halısı",
  "tokat cami halısı",
  "yozgat cami halısı",
  "konya cami halısı",
  "mersin cami halısı",
  "cami halıları",
  "camii halısı",
];

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords,
}: PageMetadataInput): Metadata {
  const canonicalPath = path === "/" ? "" : path;
  const canonicalUrl = `${siteConfig.url}${canonicalPath}`;
  const fullTitle = `${title} | ${siteConfig.shortName}`;

  return {
    title: path === "/" ? fullTitle : title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: logoUrl,
          width: siteConfig.logoWidth,
          height: siteConfig.logoHeight,
          alt: `${siteConfig.name} logosu`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [logoUrl],
    },
  };
}
