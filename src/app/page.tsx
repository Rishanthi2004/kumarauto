"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStats } from "@/components/TrustStats";
import { AboutSection } from "@/components/AboutSection";
import { ProductCategories } from "@/components/ProductCategories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { VehicleSearch } from "@/components/VehicleSearch";
import { BrandsSection } from "@/components/BrandsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { VisualBanner } from "@/components/VisualBanner";
import { GallerySection } from "@/components/GallerySection";
import { CustomerReviews } from "@/components/CustomerReviews";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import { ProductQuickViewModal } from "@/components/ProductQuickViewModal";
import { Product } from "@/data/autoData";

export default function HomePage() {
  // Modal & Interactive States
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePrefillProduct, setQuotePrefillProduct] = useState<string>("");
  const [quotePrefillVehicle, setQuotePrefillVehicle] = useState<any>(undefined);
  
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("All");

  const handleOpenQuote = (productName?: string) => {
    setQuotePrefillProduct(productName || "");
    setIsQuoteModalOpen(true);
  };

  const handleCategorySelect = (categoryName: string) => {
    setActiveCategoryFilter(categoryName);
    // Smooth scroll to products section
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleVehicleSearchSubmit = (criteria: {
    vehicleType: string;
    brand: string;
    model: string;
    year: string;
    category: string;
  }) => {
    setQuotePrefillVehicle(criteria);
    if (criteria.category && criteria.category !== "All Categories") {
      setActiveCategoryFilter(criteria.category);
    }
    // Open Quote Modal with pre-filled vehicle search parameters for an instant custom quote lookup
    setQuotePrefillProduct(`${criteria.category !== "All Categories" ? criteria.category : "Full Spares Check"} for ${criteria.year} ${criteria.brand} ${criteria.model}`);
    setIsQuoteModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-brand-cream overflow-x-hidden">
      {/* 1. NAVBAR */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* 2. HERO SECTION */}
      <Hero onOpenQuote={() => handleOpenQuote()} />

      {/* 3. TRUST / QUICK STATS */}
      <TrustStats />

      {/* 4. ABOUT / INTRODUCTION */}
      <AboutSection onOpenQuote={() => handleOpenQuote()} />

      {/* 5. PRODUCT CATEGORIES */}
      <ProductCategories onSelectCategory={handleCategorySelect} />

      {/* 6. FEATURED PRODUCTS */}
      <FeaturedProducts
        onOpenQuote={(productName) => handleOpenQuote(productName)}
        onQuickView={(product) => setQuickViewProduct(product)}
        activeCategoryFilter={activeCategoryFilter}
        setActiveCategoryFilter={setActiveCategoryFilter}
      />

      {/* 7. VEHICLE SEARCH SECTION */}
      <VehicleSearch onSearchSubmit={handleVehicleSearchSubmit} />

      {/* 8. BRANDS SECTION */}
      <BrandsSection />

      {/* 9. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 10. AUTOMOTIVE VISUAL BANNER */}
      <VisualBanner onOpenQuote={() => handleOpenQuote()} />

      {/* 11. GALLERY */}
      <GallerySection />

      {/* 12. CUSTOMER REVIEWS */}
      <CustomerReviews />

      {/* 13. CONTACT / ENQUIRY CTA */}
      <ContactCta onOpenQuote={() => handleOpenQuote()} />

      {/* 14. FOOTER */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        prefillProduct={quotePrefillProduct}
        prefillVehicle={quotePrefillVehicle}
      />

      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onEnquire={(name) => {
          setQuickViewProduct(null);
          handleOpenQuote(name);
        }}
      />
    </main>
  );
}
