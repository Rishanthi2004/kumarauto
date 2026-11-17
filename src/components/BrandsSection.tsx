import React from "react";
import { Shield, Sparkles } from "lucide-react";
import { TRUSTED_BRANDS } from "@/data/autoData";

export const BrandsSection: React.FC = () => {
  return (
    <section id="brands" className="py-10 sm:py-14 bg-brand-cream border-b border-brand-border bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 bg-brand-yellow/20 border border-brand-yellow/60 px-2.5 py-0.5 rounded-sm">
            <Shield className="w-3 h-3 text-brand-black" />
            <span className="font-display font-bold uppercase tracking-wider text-[11px] text-brand-black">
              TIER-1 OEM & AFTERMARKET
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-brand-black tracking-tight leading-[0.95]">
            TRUSTED AUTOMOTIVE <span className="text-brand-yellow drop-shadow-sm">BRANDS</span>
          </h2>

          <p className="text-gray-600 text-xs">
            We partner with certified global manufacturers and authorized component suppliers.
          </p>
        </div>

        {/* Brands Logo Grid - Compact Scale */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {TRUSTED_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-white p-3.5 rounded border border-brand-border hover:border-brand-yellow hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
            >
              <div className="font-display font-black text-base sm:text-lg text-brand-black tracking-tight uppercase group-hover:text-brand-yellowDark transition-colors">
                {brand.logoText}
              </div>

              <span className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider mt-1 line-clamp-1">
                {brand.specialty}
              </span>

              <span className="text-[8px] font-mono font-medium text-gray-400 bg-brand-cream px-1.5 py-0.2 rounded mt-1.5 border border-gray-200">
                {brand.origin}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
