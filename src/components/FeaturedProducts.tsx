"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Wrench, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Filter, 
  Eye, 
  Sparkles,
  Tag
} from "lucide-react";
import { FEATURED_PRODUCTS, Product } from "@/data/autoData";

interface FeaturedProductsProps {
  onOpenQuote: (productName: string) => void;
  onQuickView: (product: Product) => void;
  activeCategoryFilter?: string;
  setActiveCategoryFilter?: (cat: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onOpenQuote,
  onQuickView,
  activeCategoryFilter = "All",
  setActiveCategoryFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const currentCategory = activeCategoryFilter !== "All" ? activeCategoryFilter : selectedCategory;

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (setActiveCategoryFilter) {
      setActiveCategoryFilter(cat);
    }
  };

  const categoriesList = [
    "All",
    "Brake Parts",
    "Engine Parts",
    "Filters",
    "Clutch Parts",
    "Lighting",
    "Suspension Parts",
    "Electrical Parts",
    "Body & Wheels",
  ];

  const filteredProducts = FEATURED_PRODUCTS.filter((prod) => {
    const matchesCategory =
      currentCategory === "All" ||
      prod.category.toLowerCase().includes(currentCategory.toLowerCase()) ||
      currentCategory.toLowerCase().includes(prod.category.toLowerCase());

    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.partNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.specs.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-10 sm:py-16 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-brand-yellow/20 border border-brand-yellow/60 px-2.5 py-0.5 rounded-sm mb-2">
              <Tag className="w-3 h-3 text-brand-black" />
              <span className="font-display font-bold uppercase tracking-wider text-[11px] text-brand-black">
                GENUINE REPLACEMENT INVENTORY
              </span>
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-brand-black tracking-tight leading-[0.95]">
              POPULAR <span className="text-brand-yellow drop-shadow-sm">AUTO SPARES</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-xl">
              Engineered to exact OEM specifications. Explore fast-moving brake discs, filters, ignition, and drivetrain essentials.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search part name or #..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-brand-cream border border-brand-border rounded-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
            />
            <Search className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {categoriesList.map((cat) => {
            const isSelected = currentCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm whitespace-nowrap transition-all duration-200 shrink-0 border ${
                  isSelected
                    ? "bg-brand-black text-brand-yellow border-brand-black shadow-sm"
                    : "bg-brand-cream text-gray-700 border-brand-border hover:border-brand-yellow"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid - Refined Compact Scale */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-brand-cream border border-dashed border-brand-border rounded">
            <Wrench className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="font-display font-bold text-base uppercase text-brand-black">
              No parts matched your filter
            </p>
            <p className="text-xs text-gray-500 mt-0.5 mb-3">
              Try changing the search keyword or browse all product categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                if (setActiveCategoryFilter) setActiveCategoryFilter("All");
              }}
              className="bg-brand-yellow text-brand-black text-[11px] font-bold uppercase px-3 py-1.5 rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="group bg-white rounded border border-brand-border hover:border-brand-yellow/80 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative w-full h-40 bg-brand-cream overflow-hidden border-b border-brand-border p-2">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge */}
                    {prod.badge && (
                      <span className="absolute top-2 left-2 bg-brand-yellow text-brand-black font-display font-black text-[10px] uppercase tracking-wider px-1.5 py-0.2 rounded-sm shadow z-10">
                        {prod.badge}
                      </span>
                    )}

                    {/* In Stock Indicator */}
                    <span className="absolute top-2 right-2 bg-brand-black/90 backdrop-blur-sm text-green-400 text-[9px] font-bold px-1.5 py-0.2 rounded-sm border border-green-500/30 flex items-center gap-1 z-10">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      In Stock
                    </span>

                    {/* Quick View Hover Button */}
                    <button
                      onClick={() => onQuickView(prod)}
                      className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-[2px] z-10"
                    >
                      <Eye className="w-3.5 h-3.5 text-brand-yellow" />
                      <span>Quick View Specs</span>
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-3.5 space-y-1.5">
                    {/* Brand & Part Number Row */}
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-brand-yellowDark uppercase tracking-wider">
                        {prod.brand}
                      </span>
                      <span className="font-mono text-gray-500 bg-gray-100 px-1 py-0.2 rounded text-[10px] border border-gray-200">
                        {prod.partNumber}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 
                      onClick={() => onQuickView(prod)}
                      className="font-display font-black text-base uppercase text-brand-black tracking-wide group-hover:text-brand-yellowDark transition-colors line-clamp-1 cursor-pointer leading-snug"
                    >
                      {prod.name}
                    </h3>

                    {/* Short Spec */}
                    <p className="text-[11px] text-gray-600 line-clamp-2 leading-tight">
                      {prod.specs}
                    </p>

                    {/* Warranty Tag */}
                    <div className="pt-0.5 flex items-center text-[10px] text-gray-500">
                      <ShieldCheck className="w-3 h-3 text-brand-yellow mr-1 shrink-0" />
                      <span>{prod.warranty}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-3 pt-0 grid grid-cols-2 gap-1.5 border-t border-gray-100 mt-1.5">
                  <button
                    onClick={() => onQuickView(prod)}
                    className="w-full text-center py-1.5 text-[11px] font-bold uppercase tracking-wider bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-sm transition-colors"
                  >
                    View Specs
                  </button>

                  <button
                    onClick={() => onOpenQuote(prod.name)}
                    className="w-full text-center py-1.5 text-[11px] font-bold uppercase tracking-wider bg-brand-yellow hover:bg-brand-yellowHover text-brand-black rounded-sm transition-colors shadow-sm font-display font-black flex items-center justify-center gap-1"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Fast Catalog CTA */}
        <div className="mt-8 bg-brand-cream border border-brand-border p-4 rounded flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 bg-brand-black text-brand-yellow flex items-center justify-center rounded-sm clip-badge shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-display font-black text-sm uppercase text-brand-black">
                CANNOT FIND YOUR SPECIFIC PART NUMBER?
              </p>
              <p className="text-[11px] text-gray-600">
                We have over 10,000+ OEM part references in our distributor catalog. Share your chassis / VIN number.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenQuote("Custom Part Lookup")}
            className="bg-brand-black text-brand-yellow hover:bg-brand-charcoal font-display font-black text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-sm whitespace-nowrap border-l-4 border-brand-yellow shrink-0 transition-colors"
          >
            Custom Part Enquiry
          </button>
        </div>

      </div>
    </section>
  );
};
