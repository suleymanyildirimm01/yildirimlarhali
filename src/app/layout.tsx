import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const siteUrl = "https://www.yildirimlarhali.com";
const logoUrl = `${siteUrl}/logo-google.png`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Yıldırımlar Cami Otel Kurs Medrese Halıları",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: logoUrl,
    contentUrl: logoUrl,
    width: 410,
    height: 378,
  },
  image: logoUrl,
  telephone: "+90 505 431 51 01",
  email: "iletisim@yildirimlarhali.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pulur Mah. 12. Sok. No:4",
    addressLocality: "Sivas",
    addressRegion: "Sivas",
    addressCountry: "TR",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yıldırımlar Cami Otel Kurs Medrese Halıları",
    description: "Yıldırımlar Cami Otel Kurs Medrese Halıları - Kaliteli ürün ve şık tasarımlarıyla öne çıkan bir halı mağazası olarak sektörde kendine sağlam bir yer edinmiştir.",
  icons: {
    icon: "/logo-google.png",
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
