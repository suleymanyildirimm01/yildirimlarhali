import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { referenceProjects } from "@/data/references";

const referenceAreas = [
  {
    title: "Cami ve Mescit Projeleri",
    description:
      "İbadethanelerin atmosferine uygun desen, renk ve uygulama detaylarıyla uzun ömürlü çözümler sunuyoruz.",
    points: [
      "Saf düzenine uygun planlama",
      "Mekana uygun renk seçenekleri",
      "Keşif ve uygulama desteği",
    ],
  },
  {
    title: "Otel ve Konaklama Alanları",
    description:
      "Lobi, koridor, oda ve ortak alanlarda hem dayanıklı hem de estetik zemin uygulamaları hazırlıyoruz.",
    points: [
      "Yoğun kullanım alanlarına uygun yapı",
      "Mekana özel doku ve renk seçimi",
      "Kurumsal görünüme uygun çözümler",
    ],
  },
  {
    title: "Kurs ve Medrese Alanları",
    description:
      "Eğitim ve toplu kullanım alanları için konforlu, düzenli ve kolay kullanılabilen temizliği kolay zemin çözümleri üretiyoruz.",
    points: [
      "Fonksiyonel ve sade tasarımlar",
      "Uzun süreli kullanım",
      "Düzenli proje planlaması",
    ],
  },
  {
    title: "Kurumsal ve Ticari Alanlar",
    description:
      "Ofis, showroom, mağaza ve farklı ticari alanlarda projeye uygun uygulama seçenekleri sunuyoruz.",
    points: [
      "Modüler ve özel kesim seçenekleri",
      "Yoğun trafik için dayanıklılık",
      "Mekan kimliğine uygun ürünler",
    ],
  },
];

const workflow = [
  {
    title: "Keşif ve İhtiyaç Analizi",
    description:
      "Projenin kullanım yoğunluğunu, mekan yapısını ve beklentilerini sizlerle birlikte değerlendiriyoruz.",
    },
  {
    title: "Doğru Ürün Seçimi",
    description:
      "Renk, desen, doku ve kullanım amacına göre en uygun ürün grubunu belirliyoruz.",
  },
  {
    title: "Uygulama ve Teslim Süreci",
    description:
      "Planlı zamanında teslim, düzenli uygulama ve sonuç odaklı takip ile süreci sorunsuz ilerletiyoruz.",
  },
];

export const metadata: Metadata = {
  title: "Referanslarımız | Yıldırımlar Cami Otel Kurs Medrese Halıları",
  description:
    "Yıldırımlar'ın hizmet verdiği proje alanlarını ve referans yaklaşımını inceleyin.",
};

export default function ReferencesPage() {
  const referenceCategoryCount = new Set(
    referenceProjects.map((project) => project.category),
  ).size;
  const referenceCityCount = new Set(
    referenceProjects.map((project) => project.city),
  ).size;
  const showcaseReferences = referenceProjects.filter((project) =>
    [
      "istanbul-karo-projesi",
      "sivas-pasabey-otel",
      "sivas-cu-saglik-bilimleri-dekanligi",
      "ankara-milli-genclik-koridor",
    ].includes(project.slug),
  );

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative isolate overflow-hidden bg-[#282e52] text-white">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/2090353856/3535294449.jpeg"
            alt="Yıldırımlar Referanslarımız"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#282e52]/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <p className="font-work-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
            Yıldırımlar
          </p>
          <h1 className="mt-4 max-w-3xl font-serif-display text-4xl md:text-5xl lg:text-6xl">
            Referanslarımız
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/80 md:text-lg">
            Cami, otel, kurs, medrese ve farklı alanlarda ihtiyaca uygun
            zemin çözümleriyle projelere değer katıyoruz.
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
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
                Referanslarımız
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-[#282e52]/8 bg-[#f8f9fc] p-6">
                <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.16em] text-[#19ada7]">
                  Proje Görüntüsü
                </p>
                <p className="mt-3 font-serif-display text-4xl text-[#282e52]">
                  {referenceProjects.length}
                </p>
              </div>
              <div className="rounded-lg border border-[#282e52]/8 bg-[#f8f9fc] p-6">
                <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.16em] text-[#19ada7]">
                  Uygulama Türü
                </p>
                <p className="mt-3 font-serif-display text-4xl text-[#282e52]">
                  {referenceCategoryCount}
                </p>
              </div>
              <div className="rounded-lg border border-[#282e52]/8 bg-[#f8f9fc] p-6">
                <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.16em] text-[#19ada7]">
                  Şehir
                </p>
                <p className="mt-3 font-serif-display text-4xl text-[#282e52]">
                  {referenceCityCount}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {referenceProjects.map((project) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-lg border border-[#282e52]/8 bg-white shadow-sm"
              >
                <div className="bg-[#f5f7fb] p-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/5] w-full object-contain object-top"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex rounded-full bg-[#19ada7]/10 px-3 py-1 text-xs font-work-sans font-semibold uppercase tracking-[0.16em] text-[#19ada7]">
                      {project.category}
                    </span>
                    <span className="text-xs font-work-sans font-semibold uppercase tracking-[0.16em] text-gray-400">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="mt-4 font-work-sans text-xl font-semibold text-[#282e52]">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fc] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
              Referans Alanları
            </p>
            <h2 className="mt-3 font-serif-display text-3xl text-[#282e52] md:text-4xl">
              Hizmet verdiğimiz proje tipleri
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Farklı kullanım senaryolarına uygun ürün, desen ve uygulama
              seçenekleriyle pek çok alanda çözüm üretmeye devam ediyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {referenceAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-lg border border-[#282e52]/8 bg-[#f8f9fc] p-8"
              >
                <h3 className="font-work-sans text-2xl font-semibold text-[#282e52]">
                  {area.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {area.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {area.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-gray-700 md:text-base"
                    >
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#19ada7]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7fb] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div>
              <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
                Proje Yaklaşımı
              </p>
              <h2 className="mt-3 font-serif-display text-3xl text-[#282e52] md:text-4xl">
                Her referansta aynı özenle ilerliyoruz
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Referans anlayışımız sadece teslim edilen ürünle sınırlı değil;
                proje boyunca doğru yönlendirme, zamanında uygulama ve sürecin
                düzenli takibi de bizim için aynı derecede önemli.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {workflow.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-100"
                  >
                    <h3 className="font-work-sans text-lg font-semibold text-[#282e52]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {showcaseReferences.map((project, index) => (
                <div
                  key={project.slug}
                  className={`overflow-hidden rounded-lg shadow-lg ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full bg-white object-contain ${
                      index === 0 ? "h-[280px]" : "h-[220px]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#282e52] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
                Referans Talebi
              </p>
              <h2 className="mt-3 font-serif-display text-3xl md:text-4xl">
                Projenize uygun referans ve koleksiyonları birlikte değerlendirelim
              </h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                İhtiyacınıza uygun uygulama alanlarını, ürün gruplarını ve proje
                yaklaşımımızı sizinle doğrudan paylaşabiliriz.
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
