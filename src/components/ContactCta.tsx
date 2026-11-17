"use client";

import React, { useState } from "react";
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/autoData";

interface ContactCtaProps {
  onOpenQuote: () => void;
}

export const ContactCta: React.FC<ContactCtaProps> = ({ onOpenQuote }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleModel: "",
    partDescription: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Kumar Auto Spares,%0A%0AI would like to enquire about a spare part:%0A- *Name:* ${formData.name}%0A- *Phone:* ${formData.phone}%0A- *Vehicle Make/Model:* ${formData.vehicleModel}%0A- *Required Part:* ${formData.partDescription}%0A%0APlease let me know price and availability.`;
    
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-10 sm:py-16 bg-brand-charcoal text-white relative overflow-hidden bg-tech-grid-dark border-b border-brand-darkBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-brand-black text-brand-yellow px-2.5 py-0.5 rounded-sm border border-brand-yellow/30 text-[10px] font-display font-black tracking-wider uppercase">
              <Sparkles className="w-3 h-3 text-brand-yellow" />
              DIRECT SPARE PARTS HELPLINE
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-[0.95]">
              LOOKING FOR THE <br />
              <span className="text-brand-yellow drop-shadow-sm">RIGHT AUTO SPARE?</span>
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Tell us what you need and our parts team will help you find the exact part number, check stock, and provide an instant quote.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Kumar%20Auto%20Spares,%20I%20need%20a%20part%20price%20quote`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white font-display font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all shadow flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="bg-brand-yellow hover:bg-brand-yellowHover text-brand-black font-display font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all shadow-sm flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="bg-brand-black hover:bg-brand-charcoalLight text-white font-display font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all border border-brand-yellow/40 flex items-center gap-1.5"
              >
                <span>Get Detailed Quote</span>
              </button>
            </div>

            {/* Details */}
            <div className="pt-4 space-y-3 border-t border-brand-darkBorder text-xs text-gray-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display uppercase text-[11px] tracking-wider">Address:</strong>
                  <span className="text-[11px]">{BUSINESS_INFO.address}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start space-x-2">
                  <Clock className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-display uppercase text-[11px] tracking-wider">Hours:</strong>
                    <span className="text-[11px]">{BUSINESS_INFO.hours}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Mail className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-display uppercase text-[11px] tracking-wider">Email:</strong>
                    <span className="text-[11px]">{BUSINESS_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Fast Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-brand-black p-4 sm:p-6 rounded border border-brand-yellow shadow-xl relative">
              <div className="mb-4">
                <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-wide text-white">
                  FAST SPARE PART ENQUIRY
                </h3>
                <p className="text-[11px] text-gray-400">
                  Fill in your requirements below for instant response on WhatsApp & Email.
                </p>
              </div>

              {submitted ? (
                <div className="bg-brand-charcoal p-4 rounded text-center space-y-2 border border-green-500/40">
                  <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto" />
                  <h4 className="font-display font-black text-base uppercase text-white">
                    ENQUIRY TRANSMITTED
                  </h4>
                  <p className="text-xs text-gray-300">
                    Your request was formatted for our WhatsApp parts desk.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-brand-yellow text-brand-black text-[11px] font-bold uppercase px-3 py-1.5 rounded"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-0.5">
                      <label className="text-[10px] font-display font-bold uppercase text-brand-yellow tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-brand-charcoal text-white text-xs px-3 py-2 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none"
                      />
                    </div>

                    <div className="space-y-0.5">
                      <label className="text-[10px] font-display font-bold uppercase text-brand-yellow tracking-wider">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-brand-charcoal text-white text-xs px-3 py-2 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <label className="text-[10px] font-display font-bold uppercase text-brand-yellow tracking-wider">
                      Vehicle Make, Model & Year *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2022 Toyota Innova Crysta"
                      value={formData.vehicleModel}
                      onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                      className="w-full bg-brand-charcoal text-white text-xs px-3 py-2 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none"
                    />
                  </div>

                  <div className="space-y-0.5">
                    <label className="text-[10px] font-display font-bold uppercase text-brand-yellow tracking-wider">
                      Required Spare Part(s) *
                    </label>
                    <textarea
                      rows={2}
                      required
                      placeholder="e.g. Front ceramic brake pads, oil filter (or Chassis #)"
                      value={formData.partDescription}
                      onChange={(e) => setFormData({ ...formData, partDescription: e.target.value })}
                      className="w-full bg-brand-charcoal text-white text-xs px-3 py-2 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-yellow hover:bg-brand-yellowHover text-brand-black font-display font-black text-xs uppercase tracking-wider py-2.5 rounded-sm transition-all shadow flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit & Open WhatsApp Quote</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
