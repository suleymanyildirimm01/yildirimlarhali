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
};

export const logoUrl = `${siteConfig.url}${siteConfig.logoPath}`;

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
}: PageMetadataInput): Metadata {
  const canonicalPath = path === "/" ? "" : path;
  const canonicalUrl = `${siteConfig.url}${canonicalPath}`;
  const fullTitle = `${title} | ${siteConfig.shortName}`;

  return {
    title,
    description,
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
