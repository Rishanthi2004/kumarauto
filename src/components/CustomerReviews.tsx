import React from "react";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import { REVIEWS } from "@/data/autoData";

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 bg-brand-yellow/20 border border-brand-yellow/60 px-2.5 py-0.5 rounded-sm">
            <MessageSquareQuote className="w-3 h-3 text-brand-black" />
            <span className="font-display font-bold uppercase tracking-wider text-[11px] text-brand-black">
              TESTIMONIALS & FEEDBACK
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-brand-black tracking-tight leading-[0.95]">
            WHAT OUR <span className="text-brand-yellow drop-shadow-sm">CUSTOMERS SAY</span>
          </h2>

          <p className="text-gray-600 text-xs">
            Trusted by independent workshops, commercial fleet owners, and private car drivers.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-brand-cream p-4 rounded border border-brand-border hover:border-brand-yellow hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-0.5 mb-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>

                <p className="text-[11px] text-gray-700 leading-relaxed italic mb-3">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-2.5 border-t border-brand-border/60">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-black text-xs uppercase text-brand-black tracking-wide">
                      {rev.name}
                    </h4>
                    <p className="text-[10px] text-gray-500">
                      {rev.role}
                    </p>
                  </div>
                  <span className="bg-brand-yellow/20 text-brand-black text-[9px] font-bold px-1.5 py-0.2 rounded border border-brand-yellow/40">
                    {rev.vehicle}
                  </span>
                </div>

                <div className="mt-1 flex items-center text-[9px] text-green-700 font-semibold">
                  <CheckCircle2 className="w-2.5 h-2.5 mr-1" />
                  <span>Verified Customer</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
