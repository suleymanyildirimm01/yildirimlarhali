"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "https://ext.same-assets.com/2090353856/1690927267.jpeg",
  },
  {
    id: 2,
    image: "https://ext.same-assets.com/2090353856/3857559105.jpeg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-slider relative h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://ext.same-assets.com/2090353856/3535294449.jpeg"
          alt="Cami arka planı"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left Content */}
          <div className="z-10 animate-slide-left">
            {/* Decorative Element */}
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://ext.same-assets.com/2090353856/1000731587.svg"
                alt="Süsleme"
                className="w-10 h-10 opacity-50"
              />
            </div>

            <p className="text-[#282e52] italic font-serif-display text-xl md:text-2xl mb-2">
              &quot;Her Zeminde Zarafet&quot;
            </p>

            <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-[#282e52] mb-6">
              Yıldırımlar Cami Otel Kurs Medrese Halıları
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              <strong className="text-[#282e52]">Yıldırımlar Cami Otel Kurs Medrese Halıları&apos;nın</strong> ürünleri, özenle seçilmiş
              yüksek kaliteli malzemelerden üretilmekte olup, uzun ömürlü kullanım sağlamaktadır.
            </p>

            <Link
              href="/urunler"
              className="inline-flex items-center gap-2 bg-[#282e52] text-white px-8 py-4 rounded font-work-sans font-semibold hover:bg-[#1e2240] transition-colors group"
            >
              Detaylı İncele
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

          {/* Right Content - Carpet Images */}
          <div className="hidden lg:flex justify-end items-center gap-4 animate-slide-right">
            <div className="relative w-[180px] h-[320px] rounded-lg overflow-hidden shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://ext.same-assets.com/2090353856/1690927267.jpeg"
                alt="Cami Halısı"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-[200px] h-[380px] rounded-lg overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://ext.same-assets.com/2090353856/3857559105.jpeg"
                alt="Cami Halısı"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-[160px] h-[280px] rounded-lg overflow-hidden shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://ext.same-assets.com/2090353856/2169138317.jpeg"
                alt="Cami Halısı"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#282e52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#282e52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 slider-dots z-20">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-[#282e52] scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
