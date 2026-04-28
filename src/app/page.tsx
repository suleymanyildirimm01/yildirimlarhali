import { createPageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Catalog from "@/components/Catalog";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = createPageMetadata({
  title: "Cami, Otel, Kurs ve Medrese Halıları",
  description:
    "Yıldırımlar Halı; cami, otel, kurs ve medrese projeleri için kaliteli halı, ürün grupları ve profesyonel zemin çözümleri sunar.",
  path: "/",
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Catalog />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
