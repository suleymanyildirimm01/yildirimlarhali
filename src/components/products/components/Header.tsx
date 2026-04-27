"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-teal text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-6 text-sm">
          <a
            href="mailto:iletisim@yildirimlarhali.com"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            iletisim@yildirimlarhali.com
          </a>
          <a
            href="tel:+905054315101"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            +90 505 431 51 01 / +90 537 741 06 20 / +0346 223 63 89
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center">
              <svg className="w-10 h-10 text-primary-teal" viewBox="0 0 50 50" fill="currentColor">
                <g>
                  <circle cx="25" cy="25" r="3" />
                  <path d="M25 8L25 17M25 33L25 42M8 25L17 25M33 25L42 25" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M25 5L27 10L25 8L23 10L25 5Z" fill="currentColor"/>
                  <path d="M25 45L27 40L25 42L23 40L25 45Z" fill="currentColor"/>
                  <path d="M5 25L10 23L8 25L10 27L5 25Z" fill="currentColor"/>
                  <path d="M45 25L40 23L42 25L40 27L45 25Z" fill="currentColor"/>
                  <path d="M14 14L18 20M32 30L36 36M14 36L18 30M32 20L36 14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </g>
              </svg>
              <div className="flex items-baseline ml-2">
                <span className="text-2xl font-bold text-primary-teal tracking-wide font-work-sans">YILDIRIMLAR</span>
                <span className="text-sm text-primary-teal ml-1 leading-none border-l border-primary-teal pl-1">
                  cami<br/>halıları
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-teal transition-colors font-medium"
            >
              Anasayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="text-gray-700 hover:text-primary-teal transition-colors font-medium"
            >
              Hakkımızda
            </Link>
            <Link
              href="#urun-gruplarimiz"
              className="text-primary-teal font-semibold transition-colors"
            >
              Ürün Gruplarımız
            </Link>
            <Link
              href="#iletisim"
              className="text-gray-700 hover:text-primary-teal transition-colors font-medium"
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
              className="bg-primary-teal text-white px-6 py-3 rounded font-semibold hover:bg-primary-teal-dark transition-colors"
            >
              E-KATALOG
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-teal transition-colors font-medium"
              >
                Anasayfa
              </Link>
              <Link
                href="/hakkimizda"
                className="text-gray-700 hover:text-primary-teal transition-colors font-medium"
              >
                Hakkımızda
              </Link>
              <Link
                href="#urun-gruplarimiz"
                className="text-primary-teal font-semibold transition-colors"
              >
                Ürün Gruplarımız
              </Link>
              <Link
                href="#iletisim"
                className="text-gray-700 hover:text-primary-teal transition-colors font-medium"
              >
                İletişim
              </Link>
              <div className="flex flex-col gap-2 mt-2">
                <Link
                  href="/catalog/yildirimlar-urun-katalogu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-teal text-white px-6 py-3 rounded font-semibold hover:bg-primary-teal-dark transition-colors text-center"
                >
                  E-KATALOG
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
