"use client";

import Link from "next/link";

export default function Catalog() {
  return (
    <section id="katalog" className="py-16 md:py-24 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif-display text-3xl md:text-4xl text-[#282e52] mb-4">
            Ürünlerimizi Daha Detaylı İncelemek için{" "}
            <Link
              href="/catalog/yildirimlar-urun-katalogu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#19ada7] hover:underline"
            >
              E-Katalog&apos;umuzu İnceleyin!
            </Link>
          </h2>

          <div className="mx-auto mt-8 w-full max-w-4xl overflow-hidden rounded-lg bg-black shadow-2xl">
            <video
              src="/videos/dokuma-tezgahimiz.mp4"
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/catalog/yildirimlar-urun-katalogu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <div className="relative w-full max-w-[400px] rounded-lg overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.hizliresim.com/fbtmmuv.png"
                alt="E-Katalog"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#282e52]/80 to-transparent flex items-end justify-center pb-8">
                <span className="text-white font-work-sans font-bold text-xl">
                  E-KATALOG
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
