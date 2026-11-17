"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Layers } from "lucide-react";
import { CATEGORIES } from "@/data/autoData";

interface ProductCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-10 sm:py-16 bg-brand-cream border-b border-brand-border bg-tech-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-brand-yellow/20 border border-brand-yellow/60 px-2.5 py-0.5 rounded-sm">
              <Layers className="w-3 h-3 text-brand-black" />
              <span className="font-display font-bold uppercase tracking-wider text-[11px] text-brand-black">
                COMPONENT CATALOG
              </span>
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-brand-black tracking-tight leading-[0.95]">
              EVERYTHING YOUR <span className="text-brand-yellow drop-shadow-sm">VEHICLE NEEDS</span>
            </h2>
            
            <p className="text-gray-600 text-xs sm:text-sm max-w-xl">
              Precision-matched OEM & tier-1 replacement parts across all major automotive assemblies.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 bg-white/90 border border-brand-border p-2 rounded shadow-sm">
            <div className="relative w-9 h-9 bg-brand-cream rounded overflow-hidden border border-brand-border shrink-0">
              <Image
                src="/images/parts/turbocharger.jpg"
                alt="Engine Component"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-[11px] pr-1">
              <div className="font-display font-bold uppercase text-brand-black">
                10 SPECIALIZED GROUPS
              </div>
              <div className="text-gray-500 text-[10px]">
                500+ Active SKUs In-Stock
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid - Refined Compact Height */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
          {CATEGORIES.map((cat, idx) => {
            let colSpan = "lg:col-span-4";
            if (idx === 0) colSpan = "col-span-2 lg:col-span-8";
            if (idx === 1) colSpan = "lg:col-span-4";
            if (idx === 2) colSpan = "lg:col-span-4";
            if (idx === 3) colSpan = "col-span-2 lg:col-span-8";
            if (idx === 4) colSpan = "lg:col-span-4";
            if (idx === 5) colSpan = "lg:col-span-4";
            if (idx === 6) colSpan = "lg:col-span-4";
            if (idx === 7) colSpan = "lg:col-span-4";
            if (idx === 8) colSpan = "lg:col-span-4";
            if (idx === 9) colSpan = "lg:col-span-4";

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.name)}
                className={`group relative cursor-pointer overflow-hidden rounded bg-brand-charcoal border border-brand-darkBorder hover:border-brand-yellow transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-end min-h-[190px] sm:min-h-[210px] ${colSpan}`}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-90"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />

                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                  <span className="bg-brand-black/85 backdrop-blur-sm text-brand-yellow font-mono text-[10px] font-bold px-2 py-0.5 rounded-sm border border-brand-yellow/30">
                    {cat.partCount}
                  </span>
                  
                  <div className="w-6 h-6 bg-brand-yellow text-brand-black flex items-center justify-center rounded-sm clip-badge transform group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5 font-bold" />
                  </div>
                </div>

                <div className="relative p-3.5 sm:p-4 z-10">
                  <div className="w-6 h-0.5 bg-brand-yellow mb-1.5 transform origin-left group-hover:w-12 transition-all duration-300" />
                  
                  <h3 className="font-display text-lg sm:text-xl font-black uppercase text-white tracking-wide group-hover:text-brand-yellow transition-colors leading-tight">
                    {cat.name}
                  </h3>
                  
                  <p className="text-[11px] text-gray-300 line-clamp-1 mt-0.5 font-normal">
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
