"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Wrench, 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronRight
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/autoData";

interface NavbarProps {
  onOpenQuote: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Categories", href: "#categories" },
    { label: "Vehicle Search", href: "#vehicle-search" },
    { label: "Brands", href: "#brands" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? "bg-brand-black/95 backdrop-blur-md shadow-lg border-b border-brand-yellow/30 py-2" 
          : "bg-brand-black border-b border-brand-darkBorder py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo - Compact Single Line */}
        <Link href="#hero" className="flex items-center gap-2 group shrink-0">
          <div className="w-7 h-7 bg-brand-yellow flex items-center justify-center font-black text-brand-black text-xs clip-badge group-hover:scale-105 transition-transform shadow-sm">
            <Wrench className="w-3.5 h-3.5 text-brand-black transform -rotate-12 group-hover:rotate-0 transition-transform" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-lg sm:text-xl font-black tracking-wider text-white uppercase leading-none">
              KUMAR <span className="text-brand-yellow">AUTO</span>
            </span>
            <span className="hidden xl:inline text-[9px] tracking-widest text-gray-400 font-semibold uppercase">
              • SPARES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Compact One-Line List */}
        <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-gray-300 hover:text-brand-yellow px-2.5 py-1 rounded hover:bg-brand-charcoal transition-all uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Quick Actions - Compact Single Line */}
        <div className="hidden sm:flex items-center space-x-2 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1 text-[11px] font-bold text-gray-300 hover:text-brand-yellow px-2 py-1 rounded transition-colors"
            title="Call Support"
          >
            <Phone className="w-3 h-3 text-brand-yellow" />
            <span className="hidden md:inline">{BUSINESS_INFO.phone}</span>
          </a>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Kumar%20Auto%20Spares,%20I%20am%20looking%20for%20a%20spare%20part`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-bold text-green-400 bg-green-950/40 hover:bg-green-900/60 border border-green-700/40 px-2.5 py-1 rounded transition-all"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-3 h-3 fill-green-400 text-green-950" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenQuote()}
            className="bg-brand-yellow hover:bg-brand-yellowHover text-brand-black font-display font-black text-xs tracking-wider uppercase px-3.5 py-1.5 rounded transition-all shadow-sm hover:shadow-yellow-glow flex items-center gap-1"
          >
            <span>Get Quote</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="flex items-center space-x-1.5 lg:hidden">
          <button
            onClick={() => onOpenQuote()}
            className="bg-brand-yellow text-brand-black text-[11px] font-display font-black px-2.5 py-1 rounded sm:hidden"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-brand-yellow p-1.5 rounded bg-brand-charcoal focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-charcoal border-t border-brand-darkBorder mt-2 px-4 py-4 space-y-3 animate-in slide-in-from-top duration-150">
          <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-brand-darkBorder">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-gray-200 hover:text-brand-yellow p-1.5 hover:bg-brand-black rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="flex-1 flex items-center justify-center gap-1.5 bg-brand-charcoalLight text-brand-yellow font-bold text-xs py-2 rounded border border-brand-darkBorder"
            >
              <Phone className="w-3 h-3" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-green-950/60 text-green-400 font-bold text-xs py-2 rounded border border-green-800"
            >
              <MessageSquare className="w-3 h-3 fill-green-400 text-green-950" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full bg-brand-yellow text-brand-black font-display font-black text-xs py-2 uppercase tracking-wider text-center rounded shadow"
          >
            Request Spare Part Quote
          </button>
        </div>
      )}
    </header>
  );
};
