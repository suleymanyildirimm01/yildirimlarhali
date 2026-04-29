import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import { logoUrl, siteConfig } from "@/lib/seo";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
        contentUrl: logoUrl,
        width: siteConfig.logoWidth,
        height: siteConfig.logoHeight,
      },
      image: logoUrl,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      areaServed: ["TR", "Yurt dışı"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: siteConfig.language,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Cami Halısı, Otel Kurs ve Medrese Halıları`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "Yıldırımlar Cami Otel Kurs Medrese Halıları; cami halısı, otel, kurs ve medrese projeleri için kaliteli halı ve zemin çözümleri sunar.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: siteConfig.logoPath,
    apple: siteConfig.logoPath,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Cami Halısı, Otel Kurs ve Medrese Halıları`,
    description:
      "Cami halısı, otel, kurs ve medrese alanları için kaliteli halı, ürün grupları ve projeye uygun zemin çözümleri.",
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
    title: `${siteConfig.name} | Cami Halısı, Otel Kurs ve Medrese Halıları`,
    description:
      "Cami halısı, otel, kurs ve medrese alanları için kaliteli halı ve zemin çözümleri.",
    images: [logoUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google764ef25bc45b1736.html",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
