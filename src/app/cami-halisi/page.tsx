import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Cami Halısı",
  description:
    "Cami halısı modelleri, renk ve desen seçenekleri, keşif ve uygulama desteğiyle ibadethanelere özel zemin çözümleri.",
  path: "/cami-halisi",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cami Halısı",
  serviceType: "Cami halısı ve ibadethane zemin uygulamaları",
  provider: {
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
  },
  areaServed: ["TR", "Yurt dışı"],
  url: `${siteConfig.url}/cami-halisi`,
  description:
    "Cami, mescit ve ibadethaneler için saf düzenine uygun, dayanıklı ve projeye özel cami halısı çözümleri.",
};

const features = [
  "Saf düzenine uygun desen planlaması",
  "Yoğun kullanıma dayanıklı ürün seçenekleri",
  "Mekana uygun renk, bordür ve desen seçimi",
  "Keşif, ölçülendirme ve uygulama desteği",
];

const considerations = [
  {
    title: "Kullanım Yoğunluğu",
    description:
      "Caminin günlük kullanım yoğunluğu, ürün yapısı ve dayanıklılık beklentisini belirler.",
  },
  {
    title: "Renk ve Desen Uyumu",
    description:
      "Duvar, mihrap, aydınlatma ve genel atmosferle uyumlu cami halısı seçimi yapılır.",
  },
  {
    title: "Saf Düzeni",
    description:
      "İbadet alanında düzenli görünüm için saf çizgileri ve bordür detayları projeye göre planlanır.",
  },
];

export default function MosqueCarpetPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative isolate overflow-hidden bg-[#282e52] text-white">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/2090353856/3535294449.jpeg"
            alt="Cami halısı uygulaması"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#282e52]/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <p className="font-work-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
            Yıldırımlar Halı
          </p>
          <h1 className="mt-4 max-w-3xl font-serif-display text-4xl md:text-5xl lg:text-6xl">
            Cami Halısı
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/80 md:text-lg">
            Cami, mescit ve ibadethaneler için saf düzenine uygun, uzun ömürlü
            ve mekana yakışan cami halısı çözümleri sunuyoruz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/urunler"
              className="inline-flex items-center rounded bg-white px-6 py-3 font-work-sans font-semibold text-[#282e52] transition hover:bg-gray-100"
            >
              Ürünleri İncele
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center rounded border border-white/20 px-6 py-3 font-work-sans font-semibold text-white transition hover:bg-white/10"
            >
              Teklif Al
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <p className="font-work-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
                İbadethanelere Özel
              </p>
              <h2 className="mt-3 font-serif-display text-3xl text-[#282e52] md:text-4xl">
                Mekana uygun cami halısı seçimi
              </h2>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Cami halısı seçiminde yalnızca desen ve renk değil; kullanım
                yoğunluğu, temizlik kolaylığı, saf düzeni ve mekanın genel
                mimarisi birlikte değerlendirilmelidir. Yıldırımlar Halı olarak
                her projeyi kendi ölçüsü, kullanım amacı ve atmosferiyle ele
                alıyoruz.
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Ürün gruplarımız arasından cami, mescit, kurs ve medrese
                alanlarına uygun renk ve desen seçenekleri sunuyor, ihtiyaç
                halinde keşif ve uygulama sürecinde destek sağlıyoruz.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded border border-gray-100 bg-[#f8fafc] px-4 py-3 text-sm text-gray-700"
                  >
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#19ada7]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://ext.same-assets.com/2090353856/1690927267.jpeg"
                alt="Desenli cami halısı modeli"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7fb] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="font-work-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
              Doğru Seçim
            </p>
            <h2 className="mt-3 font-serif-display text-3xl text-[#282e52] md:text-4xl">
              Cami halısı alırken dikkat edilmesi gerekenler
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {considerations.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#282e52]/8 bg-white p-8 shadow-sm"
              >
                <h3 className="font-work-sans text-xl font-semibold text-[#282e52]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#282e52] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-work-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
                Projeniz İçin
              </p>
              <h2 className="mt-3 font-serif-display text-3xl md:text-4xl">
                Cami halısı seçeneklerini birlikte değerlendirelim
              </h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                Ölçü, renk, desen ve uygulama ihtiyacınıza göre doğru ürünü
                belirlemek için bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <Link
              href="/iletisim"
              className="inline-flex w-fit items-center rounded bg-white px-6 py-3 font-work-sans font-semibold text-[#282e52] transition hover:bg-gray-100"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
