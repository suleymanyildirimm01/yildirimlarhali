"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#282e52] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-6 text-sm">
          <a
            href="mailto:iletisim@yildirimlarhali.com"
            className="flex items-center gap-2 hover:text-[#19ada7] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            iletisim@yildirimlarhali.com
          </a>
          <a
            href="tel:+905054315101"
            className="flex items-center gap-2 hover:text-[#19ada7] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +90 505 431 51 01 / +90 537 741 06 20 / +0346 223 63 89
          </a>
        </div>
      </div>

      {/* Main Header */}
      <nav className="bg-white shadow-md py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://i.hizliresim.com/toskx63.png"
              alt="Yıldırımlar Cami Otel Kurs Medrese Halıları"
              className="h-auto w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-[#282e52] font-work-sans font-medium hover:text-[#19ada7] transition-colors uppercase tracking-wide text-sm"
            >
              Anasayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="text-[#282e52] font-work-sans font-medium hover:text-[#19ada7] transition-colors uppercase tracking-wide text-sm"
            >
              Hakkımızda
            </Link>
            <Link
              href="#urunler"
              className="text-[#282e52] font-work-sans font-medium hover:text-[#19ada7] transition-colors uppercase tracking-wide text-sm"
            >
              Ürün Gruplarımız
            </Link>
            <Link
              href="#iletisim"
              className="text-[#282e52] font-work-sans font-medium hover:text-[#19ada7] transition-colors uppercase tracking-wide text-sm"
            >
              İletişim
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/catalog/yildirimlar-urun-katalogu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#19ada7] text-white px-6 py-3 rounded font-work-sans font-semibold text-sm uppercase hover:bg-[#158b86] transition-colors"
            >
              E-Katalog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#282e52] p-2"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-[#282e52] font-work-sans font-medium hover:text-[#19ada7] transition-colors uppercase tracking-wide text-sm px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Anasayfa
              </Link>
              <Link
                href="/hakkimizda"
                className="text-[#282e52] font-work-sans font-medium hover:text-[#19ada7] transition-colors uppercase tracking-wide text-sm px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="#urunler"
                className="text-[#282e52] font-work-sans font-medium hover:text-[#19ada7] transition-colors uppercase tracking-wide text-sm px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Ürün Gruplarımız
              </Link>
              <Link
                href="#iletisim"
                className="text-[#282e52] font-work-sans font-medium hover:text-[#19ada7] transition-colors uppercase tracking-wide text-sm px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <div className="flex flex-col gap-2 px-4 mt-2">
                <Link
                  href="/catalog/yildirimlar-urun-katalogu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#19ada7] text-white px-6 py-3 rounded font-work-sans font-semibold text-sm uppercase text-center hover:bg-[#158b86] transition-colors"
                >
                  E-Katalog
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
