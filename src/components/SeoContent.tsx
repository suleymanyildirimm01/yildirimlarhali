const serviceTerms = [
  "cami halısı modelleri",
  "cami halısı fiyat",
  "cami halısı döşeme",
  "otel halısı",
  "kurs halısı",
  "medrese halısı",
  "mescit halısı",
  "camii halısı",
  "cami halıları",
];

const cityTerms = [
  "Sivas cami halısı",
  "Ankara cami halısı",
  "İstanbul cami halısı",
  "Samsun cami halısı",
  "Ordu cami halısı",
  "Van cami halısı",
  "Trabzon cami halısı",
  "Sinop cami halısı",
  "Tokat cami halısı",
  "Yozgat cami halısı",
  "Konya cami halısı",
  "Mersin cami halısı",
  "Sivas halı",
  "Ankara halı",
];

export default function SeoContent() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-3 font-work-sans text-sm font-semibold uppercase tracking-widest text-[#19ada7]">
              Türkiye Geneline Cami Halısı Uygulaması
            </p>
            <h2 className="mb-5 font-serif-display text-3xl text-[#282e52] md:text-4xl">
              Cami Halısı, Otel Halısı, Kurs ve Medrese Halısı Çözümleri
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
              <p>
                Yıldırımlar Halı; cami halısı, cami halıları ve camii halısı
                arayan kurumlar için model seçimi, fiyat teklifi ve profesyonel
                döşeme hizmeti sunar. Mescit halısı, otel halısı, kurs halısı ve
                medrese halısı projelerinde zeminin kullanım yoğunluğuna uygun
                ürün gruplarıyla çalışır.
              </p>
              <p>
                Sivas merkezli ekibimiz; Sivas cami halısı, Ankara cami halısı,
                İstanbul cami halısı, Samsun cami halısı, Ordu cami halısı, Van
                cami halısı, Trabzon cami halısı, Sinop cami halısı, Tokat cami
                halısı, Yozgat cami halısı, Konya cami halısı ve Mersin cami
                halısı taleplerinde ana sayfamız üzerinden hızlı iletişim ve
                proje desteği sağlar.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3 className="mb-4 font-work-sans text-sm font-semibold uppercase tracking-widest text-[#282e52]">
                Aranan Hizmetler
              </h3>
              <ul className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
                {serviceTerms.map((term) => (
                  <li key={term} className="border-l-2 border-[#19ada7] pl-3">
                    {term}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-work-sans text-sm font-semibold uppercase tracking-widest text-[#282e52]">
                Hizmet Bölgeleri
              </h3>
              <ul className="grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
                {cityTerms.map((term) => (
                  <li key={term} className="border-l-2 border-[#282e52]/20 pl-3">
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
