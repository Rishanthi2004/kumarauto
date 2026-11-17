import React from "react";
import { Award, Package, ShieldCheck, Users } from "lucide-react";
import { QUICK_STATS } from "@/data/autoData";

export const TrustStats: React.FC = () => {
  const statIcons = [
    <Award key="award" className="w-4 h-4 text-brand-black" />,
    <Package key="package" className="w-4 h-4 text-brand-black" />,
    <ShieldCheck key="shield" className="w-4 h-4 text-brand-black" />,
    <Users key="users" className="w-4 h-4 text-brand-black" />,
  ];

  return (
    <section className="bg-brand-charcoal text-white border-y border-brand-darkBorder relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="relative p-3 sm:p-4 bg-brand-charcoalLight/70 border border-brand-darkBorder hover:border-brand-yellow/60 transition-all duration-300 rounded-sm group overflow-hidden"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="w-7 h-7 bg-brand-yellow flex items-center justify-center rounded-sm clip-badge group-hover:scale-105 transition-transform shadow-sm">
                  {statIcons[idx]}
                </div>
                <div className="text-[9px] font-mono text-gray-400 bg-brand-black/60 px-1.5 py-0.2 border border-white/5 rounded">
                  0{idx + 1}
                </div>
              </div>

              <div className="font-display text-2xl sm:text-3xl font-black text-brand-yellow tracking-tight leading-none mb-0.5">
                {stat.number}
              </div>

              <div className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                {stat.label}
              </div>

              <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
