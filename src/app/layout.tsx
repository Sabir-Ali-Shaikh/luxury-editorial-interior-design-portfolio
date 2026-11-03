import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
const editorial = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-editorial", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-body", display: "swap" });
export const metadata: Metadata = {
  title: "ATELIER — Interior Design Studio",
  description: "Luxury interior portfolio and bespoke residential design studio.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={editorial.variable + " " + body.variable}><a className="skip-link" href="#main">Skip to content</a><AppProviders>{children}</AppProviders></body></html>;
}
