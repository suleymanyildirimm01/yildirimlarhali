"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <div
        className="product-card bg-white rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-lg border border-gray-100"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary-teal border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          {/* biome-ignore lint/a11y/useAltText: alt is provided */}
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className={`w-full h-full object-cover hover:scale-105 transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>
        <div className="p-3 text-center">
          <h3 className="text-sm font-semibold text-gray-700 font-work-sans tracking-wide">
            {product.name}
          </h3>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* biome-ignore lint/a11y/useAltText: alt is provided */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="p-4 text-center bg-white border-t">
              <h3 className="text-lg font-semibold text-gray-800 font-work-sans">
                {product.name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
