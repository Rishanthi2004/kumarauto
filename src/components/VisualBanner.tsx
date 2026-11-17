"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Wrench, Sparkles } from "lucide-react";

interface VisualBannerProps {
  onOpenQuote: () => void;
}

export const VisualBanner: React.FC<VisualBannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative bg-brand-yellow text-brand-black overflow-hidden border-y-2 border-brand-black py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Side: Headline & CTAs */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-brand-black text-brand-yellow px-2.5 py-0.5 rounded-sm text-[10px] font-display font-black tracking-wider uppercase shadow">
              <Wrench className="w-3 h-3 text-brand-yellow" />
              PEAK PERFORMANCE & LONGEVITY
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-brand-black tracking-tight leading-[0.92]">
              KEEP YOUR VEHICLE <br />
              RUNNING AT ITS BEST.
            </h2>

            <p className="text-brand-black/90 text-xs sm:text-sm font-medium max-w-lg">
              From routine 10,000 km periodic service filters to full engine overhauls, high-flow turbochargers, forged alloy wheels, and heavy-duty braking assemblies — we supply precision components that protect your investment.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#products"
                className="bg-brand-black hover:bg-brand-charcoal text-white font-display font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-2.5 rounded-sm transition-all duration-200 shadow-md flex items-center gap-2 group"
              >
                <span>Explore Spare Parts</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenQuote}
                className="bg-white hover:bg-gray-100 text-brand-black font-display font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all duration-200 shadow-sm border border-brand-black flex items-center gap-1.5"
              >
                <span>Request Part Lookup</span>
                <Sparkles className="w-4 h-4 text-brand-yellowDark" />
              </button>
            </div>
          </div>

          {/* Right Side: Compact Staging Display */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-sm lg:max-w-none mx-auto min-h-[220px] sm:min-h-[260px] flex items-center justify-center">
              
              <div className="absolute inset-2 bg-brand-black rounded clip-diagonal shadow opacity-90" />

              {/* 1. Main Part: Forged Alloy Wheel */}
              <div className="relative z-20 w-44 sm:w-52 aspect-square rounded-full p-1 bg-white border-2 border-brand-black shadow-xl group hover:scale-105 transition-transform duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-brand-cream">
                  <Image
                    src="/images/parts/alloy_wheel.jpg"
                    alt="Forged Alloy Wheel and Rotor"
                    fill
                    className="object-contain p-1 transform group-hover:rotate-12 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-brand-yellow text-brand-black px-2 py-0.2 rounded-sm border border-brand-black text-[9px] font-mono font-bold uppercase whitespace-nowrap shadow">
                  Forged Lightweight Alloy
                </div>
              </div>

              {/* 2. Garrett Turbocharger */}
              <div className="absolute -top-2 -right-1 z-30 w-24 sm:w-32 aspect-square bg-white rounded border border-brand-black shadow-lg p-1 group hover:scale-110 transition-transform duration-300">
                <div className="relative w-full h-full bg-brand-cream rounded overflow-hidden">
                  <Image
                    src="/images/parts/turbocharger.jpg"
                    alt="Turbocharger Compressor"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* 3. Bi-LED Headlight */}
              <div className="absolute -bottom-2 -left-1 z-30 w-28 sm:w-36 aspect-[4/3] bg-brand-black rounded border border-white shadow-lg p-1 group hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full rounded overflow-hidden bg-brand-charcoal">
                  <Image
                    src="/images/parts/headlight.jpg"
                    alt="LED Headlight Assembly"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
