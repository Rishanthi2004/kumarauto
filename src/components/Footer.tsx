import React from "react";
import { 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  ArrowUp,
  MessageSquare
} from "lucide-react";
import { BUSINESS_INFO, CATEGORIES } from "@/data/autoData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-gray-400 border-t-2 border-brand-yellow pt-10 pb-8 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-8 border-b border-brand-darkBorder">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-brand-yellow flex items-center justify-center font-black text-brand-black text-xs clip-badge shadow-sm">
                <Wrench className="w-3.5 h-3.5 text-brand-black transform -rotate-12" />
              </div>
              <span className="font-display text-lg font-black tracking-wider text-white uppercase leading-none">
                KUMAR <span className="text-brand-yellow">AUTO</span>
              </span>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Your premier destination for genuine automobile spare parts, precision engine components, braking systems, and performance accessories.
            </p>

            <div className="flex items-center gap-1.5 text-[11px] text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" />
              <span>100% Guaranteed OEM Quality & Standards</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="font-display font-bold text-xs uppercase text-white tracking-wider border-l-2 border-brand-yellow pl-1.5">
              Quick Links
            </h4>
            <ul className="space-y-1 text-[11px]">
              {[
                { name: "Home", href: "#hero" },
                { name: "About", href: "#about" },
                { name: "Products", href: "#products" },
                { name: "Categories", href: "#categories" },
                { name: "Vehicle Search", href: "#vehicle-search" },
                { name: "Brands", href: "#brands" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-brand-yellow transition-colors flex items-center gap-1">
                    <ChevronRight className="w-2.5 h-2.5 text-brand-yellow" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Parts Categories */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-display font-bold text-xs uppercase text-white tracking-wider border-l-2 border-brand-yellow pl-1.5">
              Categories
            </h4>
            <ul className="grid grid-cols-2 gap-1 text-[11px]">
              {CATEGORIES.slice(0, 8).map((cat) => (
                <li key={cat.id}>
                  <a href="#products" className="hover:text-brand-yellow transition-colors flex items-center gap-1">
                    <span className="w-1 h-1 bg-brand-yellow rounded-full" />
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3 space-y-2 text-[11px]">
            <h4 className="font-display font-bold text-xs uppercase text-white tracking-wider border-l-2 border-brand-yellow pl-1.5">
              Contact Desk
            </h4>
            <div className="space-y-1.5 text-gray-300">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-brand-yellow text-white font-semibold">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-white font-semibold">
                  {BUSINESS_INFO.whatsapp} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-brand-yellow">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-[10px]">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>GSTIN: {BUSINESS_INFO.gstin}</span>
            <a href="#hero" className="hover:text-brand-yellow flex items-center gap-0.5">
              <span>Top</span>
              <ArrowUp className="w-3 h-3 text-brand-yellow" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
