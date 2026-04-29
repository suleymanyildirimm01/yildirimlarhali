"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-[#282e52] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img
              src="https://i.hizliresim.com/r5upzg3.png"
              alt="Yıldırımlar Cami Otel Kurs Medrese Halıları"
              className="mb-0 h-25 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-gray-300">
              Kaliteli ürün ve şık tasarımlarıyla öne çıkan bir halı mağazası
              olarak sektörde kendine sağlam bir yer edinmiştir.
            </p>
          </div>

          <div>
            <h3 className="mb-6 font-work-sans text-lg font-semibold">
              Hızlı Menü
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-[#19ada7]"
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-gray-300 transition-colors hover:text-[#19ada7]"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/urunler"
                  className="text-gray-300 transition-colors hover:text-[#19ada7]"
                >
                  Ürün Gruplarımız
                </Link>
              </li>
              <li>
                <Link
                  href="/cami-halisi"
                  className="text-gray-300 transition-colors hover:text-[#19ada7]"
                >
                  Cami Halısı
                </Link>
              </li>
              <li>
                <Link
                  href="/referanslarimiz"
                  className="text-gray-300 transition-colors hover:text-[#19ada7]"
                >
                  Referanslarımız
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-gray-300 transition-colors hover:text-[#19ada7]"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog/yildirimlar-urun-katalogu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors hover:text-[#19ada7]"
                >
                  E-Katalog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-work-sans text-lg font-semibold">
              Bize Ulaşın
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="text-sm text-gray-400">Telefon:</p>
                <a
                  href="tel:+905054315101"
                  className="font-medium text-white transition-colors hover:text-[#19ada7]"
                >
                  +90 505 431 51 01 / +90 537 741 06 20 / +0346 223 63 89
                </a>
              </li>
              <li>
                <p className="text-sm text-gray-400">E-Mail:</p>
                <a
                  href="mailto:iletisim@yildirimlarhali.com"
                  className="font-medium text-white transition-colors hover:text-[#19ada7]"
                >
                  iletisim@yildirimlarhali.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-work-sans text-lg font-semibold">
              Sosyal Medya
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/yildirimhalisivas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#19ada7]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/yildirimhalisivas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#19ada7]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <p className="text-sm text-gray-400">
            Telif Hakkı © 2026 Yıldırımlar Cami Otel Kurs Medrese Halıları
          </p>
        </div>
      </div>
    </footer>
  );
}
