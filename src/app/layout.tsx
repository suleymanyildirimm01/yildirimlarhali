import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Yıldırımlar Cami Otel Kurs Medrese Halıları",
    description: "Yıldırımlar Cami Otel Kurs Medrese Halıları - Kaliteli ürün ve şık tasarımlarıyla öne çıkan bir halı mağazası olarak sektörde kendine sağlam bir yer edinmiştir.",
  icons: {
    icon: "https://i.hizliresim.com/1956w92.png",
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
