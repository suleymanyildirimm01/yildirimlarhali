"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { products as allProducts } from "@/data/products";

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const replacementPvcVinlyProduct = allProducts.find((product) => product.id === "77");
  const replacementNaturalWoodProduct = allProducts.find((product) => product.id === "63");
  const previewProducts = [...allProducts]
    .slice(-10)
    .reverse()
    .map((product) => {
      if (product.id === "157" && replacementPvcVinlyProduct) {
        return replacementPvcVinlyProduct;
      }

      if (product.id === "156" && replacementNaturalWoodProduct) {
        return replacementNaturalWoodProduct;
      }

      return product;
    });
  const itemsPerPage = 5;
  const totalPages = Math.ceil(previewProducts.length / itemsPerPage);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setCurrentPage((prev) => Math.max(0, prev - 1));
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
      }
    }
  };

  return (
    <section id="urunler" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif-display text-4xl md:text-5xl text-[#282e52] mb-4">
            ÜRÜN GRUPLARIMIZ
          </h2>
          <p className="text-gray-600 font-work-sans text-lg">
            <strong>Kaliteli Ve Dürüst Hizmeti Kendimize İlke Edindik.</strong>
          </p>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10 border border-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#282e52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10 border border-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#282e52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>

          {/* Products Grid */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {previewProducts.map((product) => (
              <Link
                key={product.id}
                href="/urunler"
                className="product-card flex-shrink-0 w-[200px] md:w-[220px] bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif-display text-lg text-[#282e52]">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              type="button"
              key={`page-${index + 1}`}
              onClick={() => {
                setCurrentPage(index);
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: index * 300 * itemsPerPage,
                    behavior: "smooth",
                  });
                }
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentPage === index ? "bg-[#282e52] scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 bg-[#282e52] text-white px-8 py-4 rounded font-work-sans font-semibold hover:bg-[#1e2240] transition-colors group"
          >
            TÜM ÜRÜNLERİ GÖR
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
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
