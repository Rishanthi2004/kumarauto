import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kumar Auto Spares | Quality Auto Spares For Every Drive",
  description:
    "Leading supplier of genuine OEM and high-performance automobile spare parts, engine components, brake assemblies, suspension parts, filters, and automotive accessories.",
  keywords: [
    "Auto Spares",
    "Automobile Spare Parts",
    "Car Parts Delhi",
    "Brake Pads",
    "Engine Components",
    "Bosch Spares",
    "Brembo Brakes",
    "Car Accessories",
    "Kumar Auto Spares",
  ],
  authors: [{ name: "Kumar Auto Spares" }],
  openGraph: {
    title: "Kumar Auto Spares | Premium Automobile Spare Parts",
    description:
      "Reliable automobile spare parts, components, and accessories for cars, commercial vehicles, and everyday automotive needs.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable} scroll-smooth`}>
      <body className="bg-brand-cream text-brand-black min-h-screen flex flex-col selection:bg-brand-yellow selection:text-brand-black font-sans">
        {children}
      </body>
    </html>
  );
}
