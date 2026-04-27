import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Ürün Gruplarımız – Yıldırımlar Cami Otel Kurs Medrese Halıları",
  description: "Yıldırımlar Cami Otel Kurs Medrese Halıları - Türkiye'nin en kaliteli halı mağazası. Geniş ürün yelpazemizi keşfedin.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
