"use client";

import Link from "next/link";

export default function About() {
  return (
    <section id="hakkimizda" className="bg-[#f3f3f3] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in">
            <p className="mb-2 font-work-sans text-sm uppercase tracking-widest text-gray-500">
              Yıldırımlar Cami Otel Kurs Medrese Halıları
            </p>

            <h2 className="mb-8 font-serif-display text-4xl text-[#282e52] md:text-5xl">
              Hakkımızda
            </h2>

            <div className="space-y-6 leading-relaxed text-gray-700">
              <p>
                <strong className="text-[#282e52]">
                  Yıldırımlar Cami Otel Kurs Medrese Halıları
                </strong>{" "}
                kaliteli ürün anlayışı, özenli uygulama ve mekanın ihtiyacına
                uygun tasarımlarıyla sektörde güvenilir bir yer edinmiştir.
                Yılların verdiği tecrübe ile ibadethaneler, oteller, kurslar ve
                farklı kullanım alanları için özel zemin çözümleri sunuyoruz.
              </p>

              <p>
                Kullandığımız malzemelerde uzun ömür, dayanıklılık ve estetik
                görünümü birlikte düşünüyoruz. Renk, desen ve doku seçenekleriyle
                mekanın kimliğine uygun çözümler hazırlıyor, sürecin her
                aşamasında memnuniyeti ön planda tutuyoruz.
              </p>

              <p>
                Amacımız sadece ürün sunmak değil; mekanın atmosferini
                tamamlayan, düzenli ve kaliteli bir zemin deneyimi oluşturmaktır.
                Bu anlayışla her projeye aynı ciddiyet ve özenle yaklaşıyoruz.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/hakkimizda"
                className="inline-flex items-center rounded bg-[#282e52] px-6 py-3 font-work-sans text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#1f2442]"
              >
                Detaylı Bilgi
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center rounded border border-[#282e52]/15 px-6 py-3 font-work-sans text-sm font-semibold uppercase tracking-wide text-[#282e52] transition hover:border-[#19ada7] hover:text-[#19ada7]"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>

          <div className="relative animate-slide-right">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://i.hizliresim.com/fbtmmuv.png"
                alt="Yıldırımlar Hakkımızda"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="absolute -right-4 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-lg md:right-8">
              <span className="text-sm font-medium text-gray-700">
                Projeniz için buradayız
              </span>
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-lg border-4 border-[#19ada7]" />
            <div className="absolute -right-4 -top-4 -z-10 h-20 w-20 rounded-full bg-[#282e52]/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
