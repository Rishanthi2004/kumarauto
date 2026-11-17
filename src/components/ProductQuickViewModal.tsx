"use client";

import React from "react";
import Image from "next/image";
import { X, ShieldCheck, Check, ArrowRight, Tag, Wrench } from "lucide-react";
import { Product } from "@/data/autoData";

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (productName: string) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onEnquire,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-brand-charcoal border-2 border-brand-yellow rounded-md shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-brand-black/80 text-white hover:text-brand-yellow p-1.5 rounded-full transition-colors border border-brand-darkBorder"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative min-h-[260px] md:min-h-[380px] bg-brand-black">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-brand-yellow text-brand-black font-display font-black text-xs uppercase tracking-wider px-2.5 py-1 rounded shadow-lg">
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-4 left-4 bg-brand-black/90 text-green-400 text-xs font-bold px-2.5 py-1 rounded border border-green-500/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              In Stock & Ready for Dispatch
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Brand Header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-brand-yellow font-bold uppercase tracking-widest">
                  {product.category}
                </span>
                <span className="text-xs font-mono text-gray-400 bg-brand-black px-2 py-0.5 rounded border border-brand-darkBorder">
                  PN: {product.partNumber}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white leading-tight">
                {product.name}
              </h3>

              <div className="text-xs font-semibold text-brand-yellow uppercase tracking-wider">
                Brand: {product.brand}
              </div>

              {/* Description */}
              <p className="text-xs text-gray-300 leading-relaxed">
                {product.description}
              </p>

              {/* Specs Breakdown */}
              <div className="p-3.5 bg-brand-black/80 rounded border border-brand-darkBorder space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <Wrench className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 font-semibold block text-[10px] uppercase">Technical Specs:</span>
                    <span className="text-white">{product.specs}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1 border-t border-brand-darkBorder">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 font-semibold block text-[10px] uppercase">Compatibility / Fitment:</span>
                    <span className="text-gray-200">{product.compatibility}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onEnquire(product.name);
                }}
                className="flex-1 bg-brand-yellow hover:bg-brand-yellowHover text-brand-black font-display font-black text-sm uppercase tracking-wider py-3 rounded-sm shadow-yellow-glow flex items-center justify-center gap-2"
              >
                <span>Enquire Price Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="px-4 py-3 bg-brand-charcoalLight hover:bg-brand-charcoal text-gray-300 text-xs font-bold uppercase rounded-sm border border-brand-darkBorder"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
