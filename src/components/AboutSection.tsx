"use client";

import React from "react";
import Image from "next/image";
import { 
  CheckCircle2, 
  ArrowRight, 
  FileCheck2, 
  Phone,
  Wrench
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/autoData";

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  const highlights = [
    {
      title: "OE & Certified Aftermarket",
      desc: "Direct sourcing from ISO-certified tier-1 suppliers.",
    },
    {
      title: "Chassis & VIN Precision Lookup",
      desc: "100% fitment guarantee backed by OEM catalog verification.",
    },
    {
      title: "Wholesale & Retail Ready",
      desc: "Special pricing for workshops, fleets, and retail drivers.",
    },
    {
      title: "Rapid Dispatch Network",
      desc: "Local same-day delivery in Delhi NCR & express courier.",
    },
  ];

  return (
    <section id="about" className="relative bg-brand-cream py-10 sm:py-16 border-b border-brand-border bg-tech-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Multi-Part Visual Staging */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none min-h-[300px] sm:min-h-[340px] flex items-center justify-center">
              
              {/* Yellow Backdrop Box */}
              <div className="absolute inset-4 bg-brand-yellow rounded clip-diagonal transform -rotate-2 shadow opacity-90" />

              {/* 1. Main Part: Clutch Pressure Plate & Disc */}
              <div className="relative z-20 w-52 sm:w-64 aspect-square rounded-full p-1.5 bg-white/95 border-2 border-brand-black shadow-xl group hover:scale-105 transition-transform duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-brand-cream">
                  <Image
                    src="/images/parts/clutch_plate.jpg"
                    alt="Heavy-Duty Clutch Plate and Disc Assembly"
                    fill
                    className="object-contain p-1 transform group-hover:rotate-12 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 bg-brand-black text-white px-2.5 py-0.5 rounded-sm border border-brand-yellow shadow text-[10px] font-mono font-bold whitespace-nowrap flex items-center gap-1">
                  <Wrench className="w-3 h-3 text-brand-yellow" />
                  <span>Heavy-Duty Copper-Woven Clutch Kit</span>
                </div>
              </div>

              {/* 2. Top-Right Part: Synthetic Oil Filter Cutaway */}
              <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 z-30 w-28 sm:w-36 aspect-square bg-white rounded border border-brand-black shadow-lg p-1.5 group hover:scale-110 transition-transform duration-300">
                <div className="relative w-full h-full bg-brand-cream rounded overflow-hidden">
                  <Image
                    src="/images/parts/oil_filter.jpg"
                    alt="Synthetic Engine Oil Filter"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute -bottom-1.5 right-1 bg-brand-yellow text-brand-black px-1.5 py-0.2 font-display font-bold text-[8px] uppercase rounded shadow">
                  Synthetic Media
                </div>
              </div>

              {/* 3. Bottom-Left Part: Shock Absorber */}
              <div className="absolute -bottom-3 sm:-bottom-4 -left-1 sm:-left-2 z-30 w-24 sm:w-32 h-36 bg-brand-black rounded border border-brand-yellow shadow-lg p-1 group hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full rounded overflow-hidden bg-brand-charcoal">
                  <Image
                    src="/images/parts/shock_absorber.jpg"
                    alt="Gas Charged Coilover Suspension"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-1 left-1 bg-brand-yellow text-brand-black text-[7px] font-mono font-bold px-1 py-0.2 rounded">
                  Monroe Reflex
                </div>
              </div>

              {/* Est. Badge */}
              <div className="absolute top-1 left-1 z-30 bg-brand-black/90 text-white px-2 py-0.5 rounded-sm border-l-2 border-brand-yellow text-[9px] font-mono font-bold flex items-center gap-1">
                <FileCheck2 className="w-3 h-3 text-brand-yellow" />
                EST. {BUSINESS_INFO.established}
              </div>

            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="inline-flex items-center gap-1.5 bg-brand-yellow/20 border border-brand-yellow/50 px-2.5 py-0.5 rounded-sm">
              <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />
              <span className="font-display font-bold uppercase tracking-wider text-[11px] text-brand-black">
                ABOUT AUTO SPARES
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-brand-black tracking-tight leading-[0.95]">
              THE RIGHT PART.<br />
              <span className="text-brand-yellow drop-shadow-sm">THE RIGHT FIT.</span><br />
              THE RIGHT CHOICE.
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              At <strong className="text-brand-black font-semibold">Kumar Auto Spares</strong>, we understand that every vehicle on the road requires precision and reliability. Since {BUSINESS_INFO.established}, we have been a trusted partner for car owners, independent garages, and commercial fleet managers seeking genuine automobile spare parts and components.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {highlights.map((item) => (
                <div key={item.title} className="p-2.5 bg-white border border-brand-border rounded-sm shadow-sm hover:border-brand-yellow transition-colors">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-xs uppercase text-brand-black tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-600 mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenQuote}
                className="bg-brand-black hover:bg-brand-charcoal text-white font-display font-black text-sm uppercase tracking-wider px-6 py-2.5 rounded-sm transition-all duration-200 shadow-sm flex items-center gap-2 group border-l-4 border-brand-yellow"
              >
                <span>Request Spare Part Quote</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-black hover:text-brand-yellowHover py-2.5 px-3.5 border border-brand-border bg-white rounded-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-yellow" />
                <span>Call Specialist</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
