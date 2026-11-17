"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Maximize2, X } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/autoData";

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterTags = ["All", "Powertrain", "Safety", "Suspension", "Facility", "Optics", "Transmission"];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === "All") return true;
    return item.tag.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id="gallery" className="py-10 sm:py-16 bg-brand-cream border-b border-brand-border bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 bg-brand-yellow/20 border border-brand-yellow/60 px-2.5 py-0.5 rounded-sm">
              <Camera className="w-3 h-3 text-brand-black" />
              <span className="font-display font-bold uppercase tracking-wider text-[11px] text-brand-black">
                AUTOMOTIVE GALLERY
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-brand-black tracking-tight leading-[0.95]">
              PRECISION IN <span className="text-brand-yellow drop-shadow-sm">EVERY DETAIL</span>
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm max-w-xl">
              Take a closer look at our components, workshop operations, and brake assembly precision.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm whitespace-nowrap transition-colors border ${
                  activeFilter === tag
                    ? "bg-brand-black text-brand-yellow border-brand-black"
                    : "bg-white text-gray-700 border-brand-border hover:border-brand-yellow"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Gallery Grid - Refined Compact Height */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filteredItems.map((item, idx) => {
            const isWide = item.size === "wide" || idx === 0;
            const isTall = item.size === "tall";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group relative overflow-hidden rounded border border-brand-darkBorder bg-brand-charcoal cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 ${
                  isWide ? "col-span-2 sm:col-span-2 lg:col-span-2 min-h-[200px] sm:min-h-[230px]" : "min-h-[190px] sm:min-h-[210px]"
                } ${isTall ? "row-span-2 min-h-[300px]" : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />

                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="bg-brand-black/90 text-brand-yellow font-mono text-[9px] font-bold px-2 py-0.5 rounded-sm border border-brand-yellow/40 uppercase">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5 w-6 h-6 bg-brand-yellow text-brand-black rounded-sm clip-badge flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Maximize2 className="w-3 h-3 font-bold" />
                </div>

                <div className="absolute bottom-0 inset-x-0 p-3 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-yellow block">
                    {item.category}
                  </span>
                  <h4 className="font-display font-black text-sm sm:text-base text-white uppercase tracking-wide group-hover:text-brand-yellow transition-colors leading-tight line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-brand-charcoal border border-brand-yellow rounded overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-20 bg-brand-black text-white p-1.5 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full aspect-[16/10]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 bg-brand-black text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-brand-yellow font-bold uppercase tracking-widest block">
                  {selectedImage.category} • {selectedImage.tag}
                </span>
                <h3 className="font-display font-black text-lg uppercase tracking-wide text-white">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
