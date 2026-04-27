import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCatalog from "@/components/ProductCatalog";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Ürün Gruplarımız | Yıldırımlar Cami Otel Kurs Medrese Halıları",
  description:
    "Yıldırımlar ürün gruplarını tek sayfada inceleyin ve tüm ürün görsellerine ulaşın.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative isolate overflow-hidden bg-[#282e52] text-white">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/2090353856/3535294449.jpeg"
            alt="Yıldırımlar Ürün Grupları"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#282e52]/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <p className="font-work-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
            Yıldırımlar
          </p>
          <h1 className="mt-4 max-w-3xl font-serif-display text-4xl md:text-5xl lg:text-6xl">
            Ürün Gruplarımız
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
            Tüm desen,model ve renklerimizi ürünlerimizi buradan inceleyebilirsiniz.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            
            <Link
              href="/catalog/yildirimlar-urun-katalogu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-white/20 px-6 py-3 font-work-sans font-semibold text-white transition hover:bg-white/10"
            >
              E-Katalog
            </Link>
          </div>
        </div>
      </section>

      <ProductCatalog />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
