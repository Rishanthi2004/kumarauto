"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Settings2, 
  Zap, 
  PhoneCall, 
  Disc,
  Wrench,
  Layers
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/autoData";

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  // Spring transition physics with soft bounce
  const springTransition = (delay: number, duration: number = 1.1) => ({
    type: "spring" as const,
    damping: 15,
    stiffness: 75,
    mass: 0.9,
    delay,
    duration,
  });

  return (
    <section id="hero" className="relative bg-brand-cream overflow-hidden border-b border-brand-border bg-tech-grid py-8 sm:py-12 lg:py-14">
      {/* Industrial Hazard Accent Corner Top-Right */}
      <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden pointer-events-none z-10 hidden lg:block">
        <div className="hazard-stripes w-40 h-4 transform rotate-45 translate-x-10 translate-y-4 opacity-90 shadow-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading, Info, and Ambient Settled Spark Plug */}
          <div className="lg:col-span-6 space-y-4 relative z-20">
            
            {/* Top Label Tag */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2.5"
            >
              <div className="inline-flex items-center gap-1.5 bg-brand-yellow/25 border border-brand-yellow/70 px-2.5 py-0.5 rounded-sm shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-ping" />
                <span className="font-display font-black uppercase tracking-wider text-[11px] text-brand-black">
                  AUTOMOBILE SPARE PARTS
                </span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 bg-white/90 border border-brand-border px-2 py-0.5 rounded shadow-sm text-[10px] font-mono font-bold text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>OEM Certified Inventory</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-brand-black tracking-tight leading-[0.95]"
            >
              QUALITY <span className="text-brand-yellow drop-shadow-sm">AUTO SPARES</span><br />
              FOR EVERY DRIVE
            </motion.h1>

            {/* Supporting Description */}
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs sm:text-sm text-gray-700 font-normal leading-relaxed max-w-lg"
            >
              Reliable automobile spare parts, precision components, and performance accessories for cars, commercial vehicles, and everyday automotive needs.
            </motion.p>

            {/* Quick Specs Pills */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-1.5 pt-0.5"
            >
              <span className="inline-flex items-center text-[11px] font-semibold bg-white border border-brand-border px-2.5 py-1 rounded-sm shadow-sm text-gray-800">
                <ShieldCheck className="w-3 h-3 text-brand-yellow mr-1" />
                100% Genuine OE Grade
              </span>
              <span className="inline-flex items-center text-[11px] font-semibold bg-white border border-brand-border px-2.5 py-1 rounded-sm shadow-sm text-gray-800">
                <Settings2 className="w-3 h-3 text-brand-yellow mr-1" />
                Instant Part Match by VIN
              </span>
              <span className="inline-flex items-center text-[11px] font-semibold bg-white border border-brand-border px-2.5 py-1 rounded-sm shadow-sm text-gray-800">
                <Zap className="w-3 h-3 text-brand-yellow mr-1" />
                Same-Day Dispatch
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1.5"
            >
              <a
                href="#products"
                className="bg-brand-black hover:bg-brand-charcoal text-white font-display font-black text-sm uppercase tracking-wider px-6 py-2.5 rounded-sm transition-all duration-200 shadow-industrial flex items-center justify-center gap-2 group border-l-4 border-brand-yellow"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenQuote}
                className="bg-brand-yellow hover:bg-brand-yellowHover text-brand-black font-display font-black text-sm uppercase tracking-wider px-6 py-2.5 rounded-sm transition-all duration-200 shadow-sm hover:shadow-yellow-glow flex items-center justify-center gap-2"
              >
                <span>Get a Quote</span>
                <Sparkles className="w-4 h-4 text-brand-black" />
              </button>
            </motion.div>

            {/* Helpline & WhatsApp Desk */}
            <div className="pt-1 flex flex-wrap items-center gap-3 text-[11px] text-gray-600">
              <span className="font-semibold text-gray-900 flex items-center">
                <PhoneCall className="w-3 h-3 text-brand-black mr-1" />
                Helpline:
              </span>
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-brand-black hover:text-brand-yellow transition-colors">
                {BUSINESS_INFO.phone}
              </a>
              <span className="text-gray-300">|</span>
              <span className="text-green-700 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                WhatsApp Parts Desk 24/7
              </span>
            </div>

            {/* PART 7: Falling Spark Plug Set (Desktop Left Accent) */}
            <motion.div
              initial={{ y: -500, rotate: -35, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              transition={springTransition(0.75)}
              whileHover={{ scale: 1.03, y: -2 }}
              className="hidden xl:flex items-center gap-3 bg-white/95 border border-brand-border p-2 rounded-md shadow-sm max-w-xs mt-3 cursor-pointer"
            >
              <div className="relative w-10 h-10 rounded bg-brand-cream overflow-hidden border border-brand-border shrink-0">
                <Image
                  src="/images/parts/spark_plugs.jpg"
                  alt="Iridium Spark Plugs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-[11px]">
                <span className="font-display font-bold uppercase text-brand-black block leading-tight">
                  NGK Laser Iridium Spark
                </span>
                <span className="text-[10px] text-gray-500">
                  Precision ignition core
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Dynamic Falling Spare Parts Showcase Canvas */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-none mx-auto min-h-[340px] sm:min-h-[380px] lg:min-h-[410px] flex items-center justify-center">
              
              {/* Backing Yellow Geometric Blocks */}
              <motion.div 
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.95 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute inset-3 sm:inset-4 bg-brand-yellow rounded clip-diagonal transform rotate-1 shadow-lg pointer-events-none" 
              />
              <div className="absolute inset-6 sm:inset-8 bg-brand-black clip-diagonal-rev transform -rotate-1 opacity-15 rounded pointer-events-none" />

              {/* PART 1: Brembo Cross-Drilled Brake Disc & Red Caliper (Center Focal) */}
              <motion.div
                initial={{ y: -700, rotate: -45, scale: 0.7, opacity: 0 }}
                animate={{ y: 0, rotate: 0, scale: 1, opacity: 1 }}
                transition={springTransition(0.2, 1.2)}
                whileHover={{ scale: 1.05, rotate: 6 }}
                className="relative z-20 w-52 sm:w-64 lg:w-72 aspect-square rounded-full p-1.5 bg-white/95 border-2 border-brand-black shadow-xl cursor-pointer group"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-brand-cream">
                  <Image
                    src="/images/parts/brake_disc.jpg"
                    alt="Drilled Brake Disc and Caliper"
                    fill
                    priority
                    className="object-contain p-1 transform group-hover:rotate-12 transition-transform duration-700"
                  />
                </div>

                <div className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 bg-brand-black text-white px-2.5 py-0.5 rounded-sm border border-brand-yellow shadow text-[10px] font-mono font-bold whitespace-nowrap flex items-center gap-1.5">
                  <Disc className="w-3 h-3 text-brand-yellow" />
                  <span>Ø380mm Drilled Rotor & Caliper</span>
                </div>
              </motion.div>

              {/* PART 2: Garrett Billet Turbocharger (Falls & Settles Top Right) */}
              <motion.div
                initial={{ y: -800, rotate: 60, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                transition={springTransition(0.45)}
                whileHover={{ scale: 1.1, y: -4 }}
                className="absolute -top-3 sm:-top-5 -right-1 sm:-right-2 z-30 w-28 sm:w-36 aspect-square bg-white rounded border border-brand-black shadow-xl p-1.5 cursor-pointer group"
              >
                <div className="relative w-full h-full bg-brand-cream rounded overflow-hidden">
                  <Image
                    src="/images/parts/turbocharger.jpg"
                    alt="Turbocharger Compressor Engine Part"
                    fill
                    className="object-contain p-0.5 group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="absolute -bottom-1.5 right-1 bg-brand-yellow text-brand-black px-1.5 py-0.2 font-display font-bold text-[8px] uppercase rounded shadow border border-brand-black">
                  Turbo Core
                </div>
              </motion.div>

              {/* PART 3: Bi-LED Projector Headlight Unit (Falls & Settles Bottom Left) */}
              <motion.div
                initial={{ y: -850, rotate: -50, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                transition={springTransition(0.65)}
                whileHover={{ scale: 1.08, y: -3 }}
                className="absolute -bottom-4 sm:-bottom-5 -left-1 sm:-left-3 z-30 w-32 sm:w-40 aspect-[4/3] bg-brand-black text-white rounded border border-brand-yellow shadow-xl p-1.5 cursor-pointer group"
              >
                <div className="relative w-full h-full rounded overflow-hidden bg-brand-charcoal">
                  <Image
                    src="/images/parts/headlight.jpg"
                    alt="Bi-LED Headlight Assembly"
                    fill
                    className="object-contain p-0.5 group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="absolute top-1 left-1 bg-brand-black/90 text-brand-yellow px-1.5 py-0.2 font-mono font-bold text-[8px] uppercase rounded border border-brand-yellow/50">
                  Bi-LED 12k LM
                </div>
              </motion.div>

              {/* PART 4: Monroe Sport Coilover Shock Absorber (Falls & Settles Right Edge) */}
              <motion.div
                initial={{ y: -900, rotate: 40, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                transition={springTransition(0.85)}
                whileHover={{ scale: 1.12, y: -4 }}
                className="hidden sm:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20 w-20 sm:w-24 h-36 bg-white/95 rounded border border-brand-border shadow-lg p-1 cursor-pointer"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/parts/shock_absorber.jpg"
                    alt="Sport Coilover Shock Absorber"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-1 inset-x-1 text-center bg-brand-black/90 text-brand-yellow text-[7px] font-mono font-bold py-0.2 rounded">
                  Gas Coilovers
                </div>
              </motion.div>

              {/* PART 5: Clutch Pressure Plate (Falls & Settles Top Left of Cluster) */}
              <motion.div
                initial={{ y: -750, rotate: -60, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                transition={springTransition(0.35)}
                whileHover={{ scale: 1.1, rotate: -6 }}
                className="hidden md:block absolute -top-4 -left-6 z-20 w-24 aspect-square bg-white rounded-full border border-brand-black shadow-lg p-1 cursor-pointer"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-brand-cream">
                  <Image
                    src="/images/parts/clutch_plate.jpg"
                    alt="Clutch Pressure Plate"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <div className="absolute -bottom-1 inset-x-0 text-center bg-brand-yellow text-brand-black text-[7px] font-mono font-bold py-0.2 rounded">
                  Clutch Kit
                </div>
              </motion.div>

              {/* PART 6: Synthetic Oil Filter (Falls & Settles Bottom Right) */}
              <motion.div
                initial={{ y: -920, rotate: 45, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                transition={springTransition(1.05)}
                whileHover={{ scale: 1.1, y: -3 }}
                className="hidden md:block absolute -bottom-3 right-8 z-20 w-20 aspect-square bg-white rounded border border-brand-black shadow-lg p-1 cursor-pointer"
              >
                <div className="relative w-full h-full bg-brand-cream rounded overflow-hidden">
                  <Image
                    src="/images/parts/oil_filter.jpg"
                    alt="Synthetic Oil Filter"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-1 right-0 bg-brand-black text-brand-yellow text-[6px] font-mono font-bold px-1 rounded">
                  Filter Media
                </div>
              </motion.div>

              {/* Floating Top Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-3 left-3 bg-brand-black text-brand-yellow font-display font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 border border-brand-yellow shadow-md flex items-center gap-1.5 z-30"
              >
                <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full animate-pulse" />
                500+ IN-STOCK SPARES
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
