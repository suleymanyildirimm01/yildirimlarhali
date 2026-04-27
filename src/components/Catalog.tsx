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
      </div>
    </section>
  );
}
