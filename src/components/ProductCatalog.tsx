"use client";

import { useMemo, useState } from "react";

import { products, type Product } from "@/data/products";

export default function ProductCatalog() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return products;
    }

    return products.filter((product) =>
      product.name.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
                Ürün Koleksiyonu
              </p>
              <h2 className="mt-3 font-serif-display text-3xl md:text-4xl text-[#282e52]">
                Tüm ürün gruplarımızı tek sayfada inceleyin.
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Model kodu ya da renk adına göre arama yapabilir, kartlara
                tıklayarak görselleri büyütebilirsiniz.
              </p>
            </div>

            <div className="w-full md:max-w-sm">
              <label className="block text-sm font-work-sans font-semibold text-[#282e52]">
                Ürün Ara
              </label>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Kod veya renk yazın"
                className="mt-2 w-full rounded border border-gray-200 px-4 py-3 text-sm text-[#282e52] shadow-sm outline-none transition focus:border-[#19ada7] focus:ring-2 focus:ring-[#19ada7]/20"
              />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 border-y border-gray-100 py-4 text-sm text-gray-500">
            <span>{filteredProducts.length} ürün gösteriliyor</span>
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="font-work-sans font-semibold text-[#282e52] transition hover:text-[#19ada7]"
              >
                Aramayı Temizle
              </button>
            ) : null}
          </div>

          {filteredProducts.length ? (
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredProducts.map((product) => (
                <button
                  type="button"
                  key={product.id}
                  onClick={() => setActiveProduct(product)}
                  className="product-card overflow-hidden rounded-lg border border-gray-100 bg-white text-left shadow-sm transition hover:shadow-xl"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="px-3 py-4">
                    <p className="font-work-sans text-sm font-semibold tracking-wide text-[#282e52]">
                      {product.name}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center">
              <p className="font-work-sans text-lg font-semibold text-[#282e52]">
                Aradığınız kritere uygun ürün bulunamadı.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Farklı bir kod ya da renk deneyebilirsiniz.
              </p>
            </div>
          )}
        </div>
      </section>

      {activeProduct ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveProduct(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#282e52] shadow-lg transition hover:bg-gray-100"
              aria-label="Kapat"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <div className="grid bg-white md:grid-cols-[minmax(0,1fr)_280px]">
              <div className="bg-gray-100">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="h-full max-h-[75vh] w-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center border-t border-gray-100 px-6 py-8 md:border-l md:border-t-0">
                <p className="text-sm font-work-sans font-semibold uppercase tracking-[0.18em] text-[#19ada7]">
                  Ürün Detayı
                </p>
                <h3 className="mt-3 font-serif-display text-3xl text-[#282e52]">
                  {activeProduct.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Ürünün görselini daha yakından incelemek için açılan önizleme
                  alanını kullanıyorsunuz.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
