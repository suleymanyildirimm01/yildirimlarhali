import { createPageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Catalog from "@/components/Catalog";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = createPageMetadata({
  title: "Cami Halısı, Otel Kurs ve Medrese Halıları",
  description:
    "Cami halısı modelleri, otel, kurs ve medrese projeleri için kaliteli halı, ürün grupları ve profesyonel zemin çözümleri.",
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
