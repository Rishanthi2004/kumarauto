import React from "react";
import { 
  ShieldCheck, 
  Layers, 
  Award, 
  Coins, 
  Zap, 
  Headphones,
  CheckCircle2
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/autoData";

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-4 h-4 text-brand-black" />,
    Layers: <Layers className="w-4 h-4 text-brand-black" />,
    Award: <Award className="w-4 h-4 text-brand-black" />,
    Coins: <Coins className="w-4 h-4 text-brand-black" />,
    Zap: <Zap className="w-4 h-4 text-brand-black" />,
    Headphones: <Headphones className="w-4 h-4 text-brand-black" />,
  };

  return (
    <section className="py-10 sm:py-16 bg-brand-black text-white border-b border-brand-darkBorder bg-tech-grid-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-brand-charcoal text-brand-yellow px-2.5 py-0.5 rounded-sm border border-brand-yellow/30 text-[11px] font-display font-black tracking-wider uppercase">
              <CheckCircle2 className="w-3 h-3 text-brand-yellow" />
              THE KUMAR AUTO ADVANTAGE
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-[0.95]">
              WHY CHOOSE <span className="text-brand-yellow drop-shadow-sm">KUMAR AUTO</span>
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
              We eliminate guesswork in automotive spares with verified part numbers, transparent pricing, and fast support.
            </p>
          </div>

          <div className="hidden md:block">
            <div className="text-right">
              <div className="font-display font-black text-xl text-brand-yellow">10+ YEARS</div>
              <div className="text-[10px] uppercase text-gray-400 tracking-wider">Unbroken Automotive Trust</div>
            </div>
          </div>
        </div>

        {/* 6 Feature Blocks Grid - Refined Compact Scale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className="p-4 sm:p-5 bg-brand-charcoal/80 border border-brand-darkBorder hover:border-brand-yellow/70 transition-all duration-300 rounded relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="absolute top-4 right-4 font-mono text-[10px] font-bold text-gray-600 group-hover:text-brand-yellow transition-colors">
                0{index + 1}
              </div>

              <div className="w-8 h-8 bg-brand-yellow rounded-sm clip-badge flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
                {iconMap[item.icon] || <ShieldCheck className="w-4 h-4 text-brand-black" />}
              </div>

              <h3 className="font-display font-black text-base uppercase tracking-wide text-white mb-1 group-hover:text-brand-yellow transition-colors">
                {item.title}
              </h3>

              <p className="text-[11px] text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
