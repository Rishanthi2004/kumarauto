export interface Category {
  id: string;
  name: string;
  description: string;
  partCount: string;
  image: string;
  featured?: boolean;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  partNumber: string;
  specs: string;
  compatibility: string;
  inStock: boolean;
  warranty: string;
  rating: number;
  image: string;
  badge?: string;
  description: string;
}

export interface Brand {
  name: string;
  origin: string;
  specialty: string;
  logoText: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  vehicle: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  size: 'normal' | 'tall' | 'wide' | 'large';
  tag: string;
}

export const BUSINESS_INFO = {
  name: "KUMAR AUTO SPARES",
  tagline: "Quality Auto Spares For Every Drive",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "sales@kumarautospares.com",
  address: "Plot No. 42, Industrial Area, Phase II, Auto Parts Market, New Delhi - 110020",
  hours: "Mon - Sat: 9:00 AM - 8:30 PM | Sun: 10:00 AM - 4:00 PM",
  gstin: "07AAAAA0000A1Z5 (Demo Verified)",
  established: "2014",
};

export const QUICK_STATS = [
  {
    number: "10+",
    label: "Years Experience",
    subtext: "Delivering unmatched automotive reliability",
  },
  {
    number: "500+",
    label: "Quality Products",
    subtext: "In-stock genuine OE & aftermarket spares",
  },
  {
    number: "50+",
    label: "Trusted Brands",
    subtext: "Direct partnerships with certified makers",
  },
  {
    number: "1000+",
    label: "Happy Customers",
    subtext: "Garages, fleet owners, & individual drivers",
  },
];

export const CATEGORIES: Category[] = [
  {
    id: "engine",
    slug: "engine-parts",
    name: "Engine Parts",
    description: "Pistons, valves, cylinder heads, timing kits, gaskets and turbochargers.",
    partCount: "120+ Parts",
    image: "/images/parts/turbocharger.jpg",
    featured: true,
  },
  {
    id: "brake",
    slug: "brake-parts",
    name: "Brake Parts",
    description: "High-friction ceramic pads, ventilated discs, brake calipers, master cylinders and ABS sensors.",
    partCount: "85+ Parts",
    image: "/images/parts/brake_disc.jpg",
    featured: true,
  },
  {
    id: "clutch",
    slug: "clutch-parts",
    name: "Clutch Parts",
    description: "Heavy-duty pressure plates, clutch friction discs, release bearings and flywheel kits.",
    partCount: "45+ Parts",
    image: "/images/parts/clutch_plate.jpg",
  },
  {
    id: "suspension",
    slug: "suspension-parts",
    name: "Suspension Parts",
    description: "Gas-charged shock absorbers, control arms, ball joints, sway bars and stabilizer links.",
    partCount: "70+ Parts",
    image: "/images/parts/shock_absorber.jpg",
    featured: true,
  },
  {
    id: "electrical",
    slug: "electrical-parts",
    name: "Electrical Parts",
    description: "Alternators, starter motors, ignition coils, spark plugs, sensors and wiring harnesses.",
    partCount: "95+ Parts",
    image: "/images/parts/spark_plugs.jpg",
  },
  {
    id: "filters",
    slug: "filters",
    name: "Filters",
    description: "Micro-fiber engine oil filters, high-flow air filters, cabin pollen filters & fuel filters.",
    partCount: "60+ Parts",
    image: "/images/parts/oil_filter.jpg",
  },
  {
    id: "lighting",
    slug: "lighting",
    name: "Lighting",
    description: "LED & Halogen headlight assemblies, tail lights, fog lamps and dynamic indicator modules.",
    partCount: "50+ Parts",
    image: "/images/parts/headlight.jpg",
  },
  {
    id: "body",
    slug: "body-parts",
    name: "Body & Wheels",
    description: "Forged alloy wheels, bumper covers, side mirrors, fenders, radiator grilles and bonnet panels.",
    partCount: "65+ Parts",
    image: "/images/parts/alloy_wheel.jpg",
  },
  {
    id: "accessories",
    slug: "car-accessories",
    name: "Car Accessories",
    description: "All-weather floor mats, aerodynamic wiper blades, seat covers and styling kits.",
    partCount: "80+ Parts",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lubricants",
    slug: "lubricants",
    name: "Lubricants & Fluids",
    description: "Fully synthetic motor oils (0W-20, 5W-30, 5W-40), gear oils, coolants and brake fluids.",
    partCount: "40+ Parts",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "prod-01",
    name: "Ceramic Performance Brake Pad & Disc Set",
    category: "Brake Parts",
    brand: "Brembo Premium",
    partNumber: "BRK-PAD-8821",
    specs: "Low-dust ceramic compound, cross-drilled rotor, 50,000 km lifespan",
    compatibility: "Universal fit for Sedan / SUV front calipers",
    inStock: true,
    warranty: "12 Months Replacement",
    rating: 4.9,
    image: "/images/parts/brake_disc.jpg",
    badge: "Top Seller",
    description: "Engineered for maximum thermal dissipation and instant bite under severe highway and city braking conditions.",
  },
  {
    id: "prod-02",
    name: "Heavy-Duty Spin-On Synthetic Oil Filter",
    category: "Filters",
    brand: "Mann-Filter Pro",
    partNumber: "FLT-OIL-9410",
    specs: "99.2% dirt separation efficiency, silicone anti-drainback valve",
    compatibility: "Petrol & Diesel turbocharged engines (1.2L - 2.5L)",
    inStock: true,
    warranty: "OEM Standard Warranty",
    rating: 4.8,
    image: "/images/parts/oil_filter.jpg",
    badge: "OE Genuine",
    description: "Premium synthetic filter media designed to protect critical engine bearings from micro-abrasive particle damage.",
  },
  {
    id: "prod-03",
    name: "Billet Compressor Turbocharger Assembly",
    category: "Engine Parts",
    brand: "Garrett Motion",
    partNumber: "ENG-TRB-7050",
    specs: "CNC machined billet impeller, twin-scroll turbine, water-cooled core",
    compatibility: "Common Rail Diesel & Turbocharged GDI engines",
    inStock: true,
    warranty: "24 Months Warranty",
    rating: 5.0,
    image: "/images/parts/turbocharger.jpg",
    badge: "Performance",
    description: "Delivers instantaneous boost response and high thermal efficiency for demanding highway and hauling duties.",
  },
  {
    id: "prod-04",
    name: "Heavy-Duty Clutch Plate & Disc Kit",
    category: "Clutch Parts",
    brand: "Valeo DriveTech",
    partNumber: "CLT-KIT-7740",
    specs: "Copper-woven friction material, dual-spring dampening system",
    compatibility: "Manual transmission 5-Speed / 6-Speed vehicles",
    inStock: true,
    warranty: "18 Months / 30,000 km",
    rating: 4.9,
    image: "/images/parts/clutch_plate.jpg",
    badge: "Heavy Duty",
    description: "Smooth engagement without pedal vibration, designed for high torque transfer in stop-and-go city traffic.",
  },
  {
    id: "prod-05",
    name: "Bi-LED Matrix Projector Headlight Unit",
    category: "Lighting",
    brand: "Hella Lumos",
    partNumber: "LGT-HL-5520",
    specs: "6500K Crystal White, 12,000 Lumens output, IP68 waterproof",
    compatibility: "Direct plug-and-play retrofit for modern compact SUVs",
    inStock: true,
    warranty: "24 Months Warranty",
    rating: 5.0,
    image: "/images/parts/headlight.jpg",
    badge: "Premium LED",
    description: "Superior long-range night illumination with sharp beam cutoff pattern to prevent blinding oncoming drivers.",
  },
  {
    id: "prod-06",
    name: "Adjustable Sport Coilover Shock Absorber",
    category: "Suspension Parts",
    brand: "Monroe Reflex",
    partNumber: "SUS-SHK-4432",
    specs: "High-pressure nitrogen gas, progressive helical spring, gold anodized top mount",
    compatibility: "Universal strut tower fitment for Hatchback & Sedan chassis",
    inStock: true,
    warranty: "2 Years / 40,000 km",
    rating: 4.9,
    image: "/images/parts/shock_absorber.jpg",
    badge: "Best Ride Quality",
    description: "Provides instantaneous damping response across potholes, uneven asphalt, and high-speed highway curves.",
  },
  {
    id: "prod-07",
    name: "Laser Iridium Spark Plug 4-Pack",
    category: "Electrical Parts",
    brand: "NGK Laser Spark",
    partNumber: "ELC-SPK-9022",
    specs: "0.6mm ultra-fine laser welded iridium tip, trivalent metal plating",
    compatibility: "Multi-point EFI & Direct Injection 4-cylinder engines",
    inStock: true,
    warranty: "100,000 km Service Life",
    rating: 4.8,
    image: "/images/parts/spark_plugs.jpg",
    badge: "Performance",
    description: "Maximizes spark energy efficiency, smoother idle rhythm, and reduces cold start unburnt hydrocarbon emissions.",
  },
  {
    id: "prod-08",
    name: "Forged Multi-Spoke Alloy Wheel & Rotor",
    category: "Body & Wheels",
    brand: "HRE Performance",
    partNumber: "WHL-FOR-1985",
    specs: "Satin black & brushed bronze finish, lightweight aerospace aluminum",
    compatibility: "5x114.3 & 5x112 bolt patterns (18\" / 19\" sizes)",
    inStock: true,
    warranty: "Lifetime Structural Warranty",
    rating: 4.9,
    image: "/images/parts/alloy_wheel.jpg",
    badge: "Forged Wheel",
    description: "Ultra-lightweight unsprung mass reduction for sharper steering feedback and premium aesthetic stance.",
  },
  {
    id: "prod-10",
    name: "Aerodynamic Beam Wiper Blade Pair",
    category: "Car Accessories",
    brand: "Bosch Aerotwin",
    partNumber: "ACC-WPR-2419",
    specs: "Graphite-coated natural rubber, aerodynamic wind spoiler profile",
    compatibility: "Universal J-hook & Multi-clip adapters included (24\" + 19\")",
    inStock: true,
    warranty: "6 Months Streak-Free",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
    badge: "All Weather",
    description: "Ensures crystal-clear windshield visibility at highway speeds during heavy monsoon downpours and winter storms.",
  },
  {
    id: "prod-11",
    name: "Complete Timing Belt & Water Pump Kit",
    category: "Engine Parts",
    brand: "Continental ContiTech",
    partNumber: "ENG-TMB-6018",
    specs: "HNBR reinforced timing belt, OE-spec hydraulic tensioner and pulley",
    compatibility: "Diesel DOHC 1.3L - 2.0L CRDi & TDI platforms",
    inStock: true,
    warranty: "60,000 km Warranty",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    badge: "Critical Engine Kit",
    description: "Prevent catastrophic valve-piston collision with synchronized heavy-duty timing belt and cast iron water pump kit.",
  },
  {
    id: "prod-12",
    name: "Full Synthetic Motor Oil 5W-40 (4 Liters)",
    category: "Lubricants & Fluids",
    brand: "Mobil 1 Advanced",
    partNumber: "LUB-SYN-5404",
    specs: "API SP / ILSAC GF-6A, ACEA A3/B4 certified, thermal stability",
    compatibility: "Turbocharged Petrol & Common Rail Diesel engines",
    inStock: true,
    warranty: "100% Genuine Sealed Can",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    badge: "OE Recommended",
    description: "Advanced wear protection film protects camshafts, turbo bearings, and rings under extreme driving stress.",
  },
];

export const VEHICLE_DATABASE = {
  types: ["Passenger Car", "SUV & 4x4", "Commercial Vehicle / Van", "Hatchback", "Luxury Sedan"],
  brands: [
    {
      name: "Toyota",
      models: ["Innova Crysta", "Fortuner", "Urban Cruiser", "Glanza", "Camry Hybrid", "Hilux"],
    },
    {
      name: "Mahindra",
      models: ["Scorpio-N", "Scorpio Classic", "Thar 4x4", "XUV700", "Bolero", "XUV300"],
    },
    {
      name: "Tata Motors",
      models: ["Harrier", "Safari", "Nexon", "Punch", "Tiago", "Altroz"],
    },
    {
      name: "Hyundai",
      models: ["Creta", "Venue", "i20", "Verna", "Tucson", "Alcazar"],
    },
    {
      name: "Maruti Suzuki",
      models: ["Swift", "Baleno", "Brezza", "Ertiga", "Grand Vitara", "Dzire"],
    },
    {
      name: "Honda",
      models: ["City (5th Gen)", "Amaze", "Elevate", "Civic", "WR-V"],
    },
    {
      name: "Volkswagen & Skoda",
      models: ["Taigun", "Virtus", "Polo GT", "Kushaq", "Slavia"],
    },
    {
      name: "BMW & Mercedes",
      models: ["3 Series (G20)", "5 Series", "X1 / X3", "C-Class (W206)", "E-Class"],
    },
  ],
  years: ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2010 - 2014"],
  categories: [
    "Engine Parts",
    "Brake Parts",
    "Clutch Parts",
    "Suspension Parts",
    "Electrical Parts",
    "Filters",
    "Lighting",
    "Body Parts",
    "Car Accessories",
    "Lubricants & Fluids",
  ],
};

export const TRUSTED_BRANDS: Brand[] = [
  { name: "BOSCH", origin: "Germany", specialty: "Braking & Electrical Systems", logoText: "BOSCH" },
  { name: "BREMBO", origin: "Italy", specialty: "High-Performance Braking", logoText: "brembo" },
  { name: "VALEO", origin: "France", specialty: "Clutches & Thermal Systems", logoText: "valeo" },
  { name: "NGK SPARK", origin: "Japan", specialty: "Ignition & Sensor Tech", logoText: "NGK" },
  { name: "DENSO", origin: "Japan", specialty: "Alternators & Spark Plugs", logoText: "DENSO" },
  { name: "MANN-FILTER", origin: "Germany", specialty: "Precision Filtration", logoText: "MANN FILTER" },
  { name: "MONROE", origin: "USA", specialty: "Shocks & Strut Assemblies", logoText: "MONROE" },
  { name: "HELLA", origin: "Germany", specialty: "Automotive Lighting & Electronics", logoText: "HELLA" },
  { name: "CONTINENTAL", origin: "Germany", specialty: "Timing Belts & Drive Kits", logoText: "Continental" },
  { name: "EXIDE", origin: "India/Global", specialty: "Automotive Power Batteries", logoText: "EXIDE" },
  { name: "MOBIL 1", origin: "USA", specialty: "Synthetic Engine Oils", logoText: "Mobil 1" },
  { name: "CASTROL", origin: "UK", specialty: "High-Grade Lubricants", logoText: "Castrol" },
];

export const WHY_CHOOSE_US = [
  {
    title: "100% Genuine Quality",
    description: "Every part is sourced directly from OEM manufacturers and certified tier-1 automotive suppliers.",
    icon: "ShieldCheck",
  },
  {
    title: "Wide Product Range",
    description: "Over 500+ SKU inventory covering Japanese, German, Indian, Korean and American passenger & commercial vehicles.",
    icon: "Layers",
  },
  {
    title: "Trusted Global Brands",
    description: "Authorized supply partners for Bosch, Brembo, Valeo, NGK, Mann Filter, Hella, Continental and more.",
    icon: "Award",
  },
  {
    title: "Competitive Pricing",
    description: "Direct-to-customer wholesale margins with transparent pricing and zero counterfeit risks.",
    icon: "Coins",
  },
  {
    title: "Fast Response & Dispatch",
    description: "Same-day quotes on WhatsApp, express part lookup by chassis/VIN number, and rapid dispatch.",
    icon: "Zap",
  },
  {
    title: "Expert Fitment Support",
    description: "Automotive engineers and parts specialists to verify exact part numbers for your vehicle model and year.",
    icon: "Headphones",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Precision Engine Teardown & Rebuild",
    category: "Engine Components",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80",
    size: "large",
    tag: "Powertrain",
  },
  {
    id: "gal-2",
    title: "Drilled Performance Brake Discs & Calipers",
    category: "Braking Systems",
    image: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=800&q=80",
    size: "normal",
    tag: "Safety",
  },
  {
    id: "gal-3",
    title: "Automotive Suspension & Dampers",
    category: "Chassis & Ride",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    size: "tall",
    tag: "Suspension",
  },
  {
    id: "gal-4",
    title: "Modern Automotive Workshop & Parts Stock",
    category: "Auto Spares Hub",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1000&q=80",
    size: "wide",
    tag: "Facility",
  },
  {
    id: "gal-5",
    title: "High-Output Projector Headlight Assembly",
    category: "Lighting Solutions",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
    size: "normal",
    tag: "Optics",
  },
  {
    id: "gal-6",
    title: "Heavy-Duty Clutch & Transmission Core",
    category: "Drivetrain",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    size: "normal",
    tag: "Transmission",
  },
  {
    id: "gal-7",
    title: "Engine Bay Inspection & Fluid Top-Up",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    size: "wide",
    tag: "Service",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Rajesh Sharma",
    role: "Fleet Maintenance Manager",
    vehicle: "Mahindra Scorpio-N & Bolero Fleet",
    rating: 5,
    comment: "Sourced complete clutch assemblies and heavy-duty brake pads for our 12 commercial vehicles. Perfect fitment, genuine OE quality, and delivered ahead of schedule. Kumar Auto Spares is our trusted parts partner.",
    date: "Verified Customer Review (Placeholder Demo)",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Vikram Malhotra",
    role: "Automotive Enthusiast & Car Owner",
    vehicle: "Toyota Fortuner 4x4",
    rating: 5,
    comment: "Found hard-to-source suspension bushings and genuine Monroe gas shock absorbers here. Their team cross-checked my VIN number in 10 minutes on WhatsApp to ensure exact compatibility. Outstanding service!",
    date: "Verified Customer Review (Placeholder Demo)",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Sunil Verma",
    role: "Independent Garage Owner",
    vehicle: "Verma Car Care Centre",
    rating: 5,
    comment: "We order oil filters, timing belts, and synthetic oils in bulk weekly. Always 100% genuine sealed boxes with clear GST invoices. The pricing gives us great confidence to pass value to our customers.",
    date: "Verified Customer Review (Placeholder Demo)",
    verified: true,
  },
  {
    id: "rev-4",
    name: "Anand Rathi",
    role: "Private Car Owner",
    vehicle: "Hyundai Creta 1.4 Turbo",
    rating: 5,
    comment: "Saved me thousands compared to dealership quotes for replacement projector headlights and Brembo ceramic brake pads. The build quality and packaging were immaculate.",
    date: "Verified Customer Review (Placeholder Demo)",
    verified: true,
  },
];

export const FAQS = [
  {
    q: "How do I make sure the part fits my exact vehicle model and year?",
    a: "You can use our Vehicle Search tool on this page or simply share your vehicle model, manufacturing year, or Chassis / VIN number with our team via WhatsApp or the Quote form. Our automotive specialists will cross-verify OEM part numbers before confirming your order.",
  },
  {
    q: "Are all spare parts genuine and original?",
    a: "Yes, 100%. We only stock genuine OEM parts and certified tier-1 aftermarket replacement brands like Bosch, Brembo, Valeo, NGK, Mann-Filter, and Continental with authentic manufacturer warranty.",
  },
  {
    q: "How fast can you dispatch spare parts?",
    a: "In-stock parts are dispatched within 2–4 business hours. For local deliveries, same-day delivery is available. Nationwide express courier shipping takes 24–72 hours.",
  },
  {
    q: "Do you supply spare parts for commercial vehicles and fleets?",
    a: "Yes! We cater to individual car owners, independent multi-brand workshops, fleet operators, and taxi aggregators with attractive wholesale pricing tiers.",
  },
];
