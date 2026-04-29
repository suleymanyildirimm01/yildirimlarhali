import { createPageMetadata, seoKeywords } from "@/lib/seo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Catalog from "@/components/Catalog";
import SeoContent from "@/components/SeoContent";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = createPageMetadata({
  title: "Cami Halısı, Cami Halıları, Otel Kurs Medrese Halısı",
  description:
    "Cami halısı modelleri, fiyat ve döşeme hizmeti; otel, kurs, medrese ve mescit halısı çözümleri. Sivas'tan Türkiye geneline uygulama.",
  path: "/",
  keywords: seoKeywords,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Catalog />
      <SeoContent />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
