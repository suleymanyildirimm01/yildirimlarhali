import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const strengths = [
  {
    title: "Kaliteli Üretim",
    description:
      "Dayanıklı malzeme ve uzun ömürlü kullanım odağı ile mekanlara güvenli çözümler sunuyoruz.",
  },
  {
    title: "Özel Tasarım",
    description:
      "Cami, otel, kurs ve medrese gibi farklı alanlar için ihtiyaca uygun desen ve renk seçenekleri hazırlıyoruz.",
  },
  {
    title: "Güvenilir Hizmet",
    description:
      "İlk görüşmeden uygulama sonrasına kadar süreci düzenli takip ediyor, iletişimi güçlü tutuyoruz.",
  },
];

const highlights = [
  "Cami, Otel, Kurs ve Medrese halıları",
  "Projeye uygun renk ve desen seçenekleri",
  "Sipariş öncesi destek ve süreç takibi",
];

export const metadata: Metadata = {
  title: "Hakkımızda | Yıldırımlar Cami Otel Kurs Medrese Halıları",
  description:
    "Yıldırımlar'in kalite anlayışını, hizmet yaklaşımını ve mekanlarınıza özel zemin çözümlerini inceleyin.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative isolate overflow-hidden bg-[#282e52] text-white">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/2090353856/3535294449.jpeg"
            alt="Yıldırımlar Hakkımızda"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#282e52]/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <p className="font-work-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
            Yıldırımlar
          </p>
          <h1 className="mt-4 max-w-3xl font-serif-display text-4xl md:text-5xl lg:text-6xl">
            Hakkımızda
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/80 md:text-lg">
            Kaliteli ürün, özenli uygulama ve güven veren hizmet anlayışımızla
            farklı mekanlara uzun ömürlü zemin çözümleri sunuyoruz.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/urunler"
              className="inline-flex items-center rounded bg-white px-6 py-3 font-work-sans font-semibold text-[#282e52] transition hover:bg-gray-100"
            >
              Ürün Gruplarımız
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center rounded border border-white/20 px-6 py-3 font-work-sans font-semibold text-white transition hover:bg-white/10"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
                Biz Kimiz?
              </p>
              <h2 className="mt-3 font-serif-display text-3xl text-[#282e52] md:text-4xl">
                Mekanın ihtiyacına uygun çözümler üretiyoruz
              </h2>

              <div className="mt-6 space-y-6 text-base leading-7 text-gray-600">
                <p>
                  Yıldırımlar Cami Otel Kurs Medrese Halıları, yılların verdiği
                  tecrübemizi özenli işçilik ve doğru ürün seçimiyle bir araya
                  getirip bir anlayışla hizmet veriyoruz. Her mekanı kendi kullanım
                  amacına göre değerlendirip, buna uygun zemin çözümleri sunuyoruz.
                </p>
                <p>
                  Bizim için kalite sadece ürünün kendisiyle sınırlı değil.
                  Uygulama düzeni, renk uyumu, mekanın atmosferi ve süreç boyunca
                  kurulan iletişim de aynı derecede önemli. Bu yüzden her
                  projeye aynı özenle yaklaşıyoruz.
                </p>
                <p>
                  Geniş ürün yelpazemiz sayesinde hem klasik hem modern
                  beklentilere cevap verebilen seçenekler sunuyor, mekanın
                  karakterini tamamlayan sonuç elde etmeye odaklanıyoruz.
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-700 md:text-base"
                  >
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#19ada7]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <img
                src="https://i.hizliresim.com/fbtmmuv.png"
                  alt="Yıldırımlar mağazası"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7fb] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
              Neden Biz?
            </p>
            <h2 className="mt-3 font-serif-display text-3xl text-[#282e52] md:text-4xl">
              Çalışma anlayışımız
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {strengths.map((item) => (
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
              <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
                Birlikte Çalışalım
              </p>
              <h2 className="mt-3 font-serif-display text-3xl md:text-4xl">
                Projenize uygun ürün ve uygulama için bize ulaşın
              </h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                İhtiyacınıza uygun ürün seçeneklerini birlikte değerlendirelim ve
                sizi doğru çözüme hızla yönlendirelim.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
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
                İletişim Sayfası
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
