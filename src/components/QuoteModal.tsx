"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Wrench, ShieldCheck, Sparkles } from "lucide-react";
import { BUSINESS_INFO, VEHICLE_DATABASE } from "@/data/autoData";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillProduct?: string;
  prefillVehicle?: {
    vehicleType?: string;
    brand?: string;
    model?: string;
    year?: string;
    category?: string;
  };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefillProduct = "",
  prefillVehicle,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "Passenger Car",
    brand: "Toyota",
    model: "Innova Crysta",
    year: "2024",
    partName: "",
    partNumber: "",
    urgency: "Standard (1-2 days)",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillProduct) {
      setFormData((prev) => ({ ...prev, partName: prefillProduct }));
    }
    if (prefillVehicle) {
      setFormData((prev) => ({
        ...prev,
        vehicleType: prefillVehicle.vehicleType || prev.vehicleType,
        brand: prefillVehicle.brand || prev.brand,
        model: prefillVehicle.model || prev.model,
        year: prefillVehicle.year || prev.year,
      }));
    }
  }, [prefillProduct, prefillVehicle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*KUMAR AUTO SPARES - QUOTE REQUEST*%0A%0A*Customer:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || "N/A"}%0A*Vehicle:* ${formData.year} ${formData.brand} ${formData.model} (${formData.vehicleType})%0A*Requested Part:* ${formData.partName}%0A*Part / VIN Number:* ${formData.partNumber || "To be verified"}%0A*Urgency:* ${formData.urgency}%0A*Notes:* ${formData.notes || "None"}%0A%0APlease quote best price & availability.`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-brand-charcoal border-2 border-brand-yellow rounded-md shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-brand-black p-5 border-b border-brand-darkBorder flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-brand-yellow text-brand-black flex items-center justify-center rounded-sm font-black clip-badge">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-black text-xl uppercase tracking-wider text-white">
                REQUEST A SPARE PART QUOTE
              </h3>
              <p className="text-xs text-brand-yellow">
                Fast price quote & availability check by parts specialist
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1.5 rounded-full hover:bg-brand-charcoal transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto" />
              <h4 className="font-display font-black text-2xl uppercase text-white">
                QUOTE REQUEST TRANSMITTED!
              </h4>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Thank you! Your quote request has been forwarded directly to our sales desk. Our parts specialist will connect with you with pricing and shipping estimates shortly.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-brand-yellow text-brand-black font-display font-black text-sm uppercase tracking-wider px-6 py-2.5 rounded-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Customer Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-display font-bold uppercase text-brand-yellow tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-brand-black text-white text-xs px-3.5 py-2.5 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-display font-bold uppercase text-brand-yellow tracking-wider">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-brand-black text-white text-xs px-3.5 py-2.5 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none"
                  />
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-3 bg-brand-black/60 rounded border border-brand-darkBorder space-y-3">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                  VEHICLE FITMENT SPECIFICATION
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-gray-300">
                      Brand / Make
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Toyota, Mahindra"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full bg-brand-charcoal text-white text-xs px-3 py-2 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-gray-300">
                      Model
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Fortuner, Scorpio"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full bg-brand-charcoal text-white text-xs px-3 py-2 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-gray-300">
                      Model Year
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2022"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full bg-brand-charcoal text-white text-xs px-3 py-2 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Part Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-display font-bold uppercase text-brand-yellow tracking-wider">
                    Part Name / Assembly *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Front Brake Pad Set"
                    value={formData.partName}
                    onChange={(e) => setFormData({ ...formData, partName: e.target.value })}
                    className="w-full bg-brand-black text-white text-xs px-3.5 py-2.5 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-display font-bold uppercase text-brand-yellow tracking-wider">
                    Part Number / VIN (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 04465-0K280 or Chassis #"
                    value={formData.partNumber}
                    onChange={(e) => setFormData({ ...formData, partNumber: e.target.value })}
                    className="w-full bg-brand-black text-white text-xs px-3.5 py-2.5 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-display font-bold uppercase text-brand-yellow tracking-wider">
                  Special Notes / Quantity
                </label>
                <textarea
                  rows={2}
                  placeholder="Need 2 sets + express courier delivery to Pune..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-brand-black text-white text-xs px-3.5 py-2 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none resize-none"
                />
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center text-[11px] text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-brand-yellow mr-1.5 shrink-0" />
                  <span>Verified OEM Guarantee</span>
                </div>

                <button
                  type="submit"
                  className="bg-brand-yellow hover:bg-brand-yellowHover text-brand-black font-display font-black text-sm uppercase tracking-wider px-6 py-3 rounded-sm shadow-yellow-glow flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quote Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
