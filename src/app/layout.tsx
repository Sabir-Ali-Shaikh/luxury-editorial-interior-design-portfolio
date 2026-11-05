import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
import { Navbar } from "@/components/layout/Navbar";
const editorial = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-editorial", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-body", display: "swap" });
export const metadata: Metadata = {
  title: "ATELIER | Luxury Interior Design & Bespoke Spaces",
  description: "Explore ATELIER, a luxury interior design portfolio celebrating timeless interiors, architectural elegance, refined materials, and personal expression.",
  openGraph: {
    title: "ATELIER | Luxury Interior Design & Bespoke Spaces",
    description: "Explore ATELIER, a luxury interior design portfolio celebrating timeless interiors, architectural elegance, refined materials, and personal expression.",
    siteName: "ATELIER",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATELIER | Luxury Interior Design & Bespoke Spaces",
    description: "Explore ATELIER, a luxury interior design portfolio celebrating timeless interiors, architectural elegance, refined materials, and personal expression.",
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={editorial.variable + " " + body.variable}>
        <a className="skip-link" href="#main">Skip to content</a>
        <AppProviders>
          <Navbar />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
