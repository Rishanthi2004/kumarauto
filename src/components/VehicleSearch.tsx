"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Car, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Check
} from "lucide-react";
import { VEHICLE_DATABASE } from "@/data/autoData";

interface VehicleSearchProps {
  onSearchSubmit: (criteria: {
    vehicleType: string;
    brand: string;
    model: string;
    year: string;
    category: string;
  }) => void;
}

export const VehicleSearch: React.FC<VehicleSearchProps> = ({ onSearchSubmit }) => {
  const [vehicleType, setVehicleType] = useState<string>("Passenger Car");
  const [brand, setBrand] = useState<string>("Toyota");
  const [model, setModel] = useState<string>("Innova Crysta");
  const [year, setYear] = useState<string>("2024");
  const [category, setCategory] = useState<string>("All Categories");
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  const handleBrandChange = (newBrand: string) => {
    setBrand(newBrand);
    const selectedBrandData = VEHICLE_DATABASE.brands.find((b) => b.name === newBrand);
    if (selectedBrandData && selectedBrandData.models.length > 0) {
      setModel(selectedBrandData.models[0]);
    } else {
      setModel("All Models");
    }
  };

  const currentBrandModels =
    VEHICLE_DATABASE.brands.find((b) => b.name === brand)?.models || [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchFeedback(`Looking up compatible spares for ${year} ${brand} ${model} (${category})...`);
    onSearchSubmit({
      vehicleType,
      brand,
      model,
      year,
      category,
    });
  };

  return (
    <section id="vehicle-search" className="relative py-10 sm:py-14 bg-brand-yellow text-brand-black bg-tech-grid-yellow border-y-2 border-brand-black overflow-hidden shadow-lg">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-brand-black text-brand-yellow px-2.5 py-0.5 rounded-sm text-[11px] font-display font-black tracking-wider uppercase shadow">
            <Car className="w-3 h-3 text-brand-yellow" />
            FITMENT COMPATIBILITY ENGINE
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-brand-black tracking-tight leading-[0.95]">
            FIND THE RIGHT PART FOR YOUR VEHICLE
          </h2>

          <p className="text-brand-black/90 text-xs sm:text-sm font-medium max-w-lg mx-auto">
            Select your make, model, and year to instantly isolate guaranteed matching OEM spare parts.
          </p>
        </div>

        {/* Search Panel Card - Compact & Sleek */}
        <form
          onSubmit={handleSearch}
          className="bg-brand-black p-4 sm:p-6 rounded border border-brand-black shadow-xl space-y-4 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            
            {/* 1. Vehicle Type */}
            <div className="space-y-1">
              <label className="block text-[10px] font-display font-bold uppercase tracking-wider text-brand-yellow">
                1. Vehicle Type
              </label>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full bg-brand-charcoal text-white text-xs px-2.5 py-2 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none cursor-pointer"
              >
                {VEHICLE_DATABASE.types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Brand */}
            <div className="space-y-1">
              <label className="block text-[10px] font-display font-bold uppercase tracking-wider text-brand-yellow">
                2. Brand / Make
              </label>
              <select
                value={brand}
                onChange={(e) => handleBrandChange(e.target.value)}
                className="w-full bg-brand-charcoal text-white text-xs px-2.5 py-2 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none cursor-pointer"
              >
                {VEHICLE_DATABASE.brands.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Model */}
            <div className="space-y-1">
              <label className="block text-[10px] font-display font-bold uppercase tracking-wider text-brand-yellow">
                3. Vehicle Model
              </label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full bg-brand-charcoal text-white text-xs px-2.5 py-2 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none cursor-pointer"
              >
                {currentBrandModels.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Year */}
            <div className="space-y-1">
              <label className="block text-[10px] font-display font-bold uppercase tracking-wider text-brand-yellow">
                4. Model Year
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full bg-brand-charcoal text-white text-xs px-2.5 py-2 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none cursor-pointer"
              >
                {VEHICLE_DATABASE.years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            {/* 5. Part Category */}
            <div className="space-y-1">
              <label className="block text-[10px] font-display font-bold uppercase tracking-wider text-brand-yellow">
                5. Spare Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-brand-charcoal text-white text-xs px-2.5 py-2 rounded-sm border border-brand-darkBorder focus:border-brand-yellow focus:outline-none cursor-pointer"
              >
                <option value="All Categories">All Categories</option>
                {VEHICLE_DATABASE.categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Submit Action Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-brand-darkBorder">
            <div className="flex items-center space-x-1.5 text-[11px] text-gray-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
              <span>
                Selected: <strong className="text-white">{brand} {model} ({year})</strong> — OEM fitment guarantee
              </span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellowHover text-brand-black font-display font-black text-xs uppercase tracking-wider px-6 py-2.5 rounded-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-1.5 group"
            >
              <Search className="w-3.5 h-3.5 text-brand-black" />
              <span>Find Spare Parts</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        {/* Feedback Notification */}
        {searchFeedback && (
          <div className="mt-3 p-2 bg-brand-black text-brand-yellow border border-brand-yellow/60 text-[11px] font-semibold rounded text-center max-w-md mx-auto flex items-center justify-center gap-1.5">
            <Check className="w-3.5 h-3.5" />
            <span>{searchFeedback}</span>
          </div>
        )}

      </div>
    </section>
  );
};
