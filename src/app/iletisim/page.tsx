import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "İletişim",
  description:
    "Yıldırımlar Halı ile telefon, e-posta ve WhatsApp üzerinden iletişime geçin; Sivas adresimize ulaşım ve teklif bilgilerini inceleyin.",
  path: "/iletisim",
});

const quickActions = [
  {
    title: "Telefon",
    value: "+90 505 431 51 01 / +90 537 741 06 20 / +0346 223 63 89",
    href: "tel:+905054315101",
    description: "Ürün, sipariş ve bilgi talepleriniz için doğrudan arayabilirsiniz.",
  },
  {
    title: "E-posta",
    value: "iletisim@yildirimlarhali.com",
    href: "mailto:iletisim@yildirimlarhali.com?subject=Bilgi%20Talebi",
    description: "Detaylı talep ve döküman paylaşımı için e-posta gönderebilirsiniz.",
  },
  {
    title: "WhatsApp",
    value: "Hemen yazın",
    href: "https://wa.me/905377410620",
    description: "Hızlı cevap almak için WhatsApp hattımızı kullanabilirsiniz.",
  },
];

const addressLine = "Pulur Mah.12.Sok. No:4 Sivas/Merkez";
const mapLat = 39.7433372;
const mapLon = 37.0232877;
const osmBbox = encodeURIComponent(
  `${mapLon - 0.006},${mapLat - 0.004},${mapLon + 0.006},${mapLat + 0.004}`,
);
const mapsEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${osmBbox}&layer=mapnik&marker=${mapLat}%2C${mapLon}`;
const mapsDirectionsUrl = `https://maps.app.goo.gl/m92kWMTzrD6ZZ1449`;



export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Script
        id="google-ads-contact-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-18124998793/vgfHCOud8qMcEImR1sJD'
            });
          `,
        }}
      />
      <Header />

      <section className="relative isolate overflow-hidden bg-[#282e52] text-white">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/2090353856/3535294449.jpeg"
            alt="İletişim"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#282e52]/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <p className="font-work-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
            Yıldırımlar
          </p>
          <h1 className="mt-4 max-w-3xl font-serif-display text-4xl md:text-5xl lg:text-6xl">
            İletişim
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
            Bize telefon, e-posta veya WhatsApp üzerinden kolayca ulaşabilirsiniz.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="tel:+905054315101"
              className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 font-work-sans font-semibold text-[#282e52] transition hover:bg-gray-100"
            >
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905377410620"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-white/20 px-6 py-3 font-work-sans font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp ile yaz
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
              Konum
            </p>
            <h2 className="mt-3 font-serif-display text-3xl md:text-4xl text-[#282e52]">
              Adres
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Ofis ve mağazamızın konumunu harita üzerinden görebilir, tek
              tıkla yol tarifi alabilirsiniz.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <iframe
                title="Yıldırımlar konum haritası"
                src={mapsEmbedUrl}
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
        

            <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
                Adres
              </p>
              <h3 className="mt-3 font-serif-display text-3xl text-[#282e52]">
                Bizi ziyaret edin
              </h3>
              <p className="mt-5 text-base leading-7 text-gray-700">
                {addressLine}
              </p>

              <div className="mt-8 space-y-4 border-t border-gray-100 pt-6">
                <div>
                  <p className="text-sm font-semibold text-[#282e52]">Telefon</p>
                  <a
                    href="tel:+905054315101"
                    className="mt-1 inline-flex text-sm text-gray-600 transition hover:text-[#19ada7]"
                  >
                    +90 505 431 51 01 / +90 537 741 06 20 / +0346 223 63 89
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#282e52]">E-posta</p>
                  <a
                    href="mailto:iletisim@yildirimlarhali.com"
                    className="mt-1 inline-flex text-sm text-gray-600 transition hover:text-[#19ada7]"
                  >
                    iletisim@yildirimlarhali.com
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded bg-[#282e52] px-5 py-3 text-sm font-work-sans font-semibold text-white transition hover:bg-[#1f2442]"
                >
                  Yol tarifi al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
