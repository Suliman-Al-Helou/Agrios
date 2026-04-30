import { Caveat } from "next/font/google";

// Single Caveat instance shared across all components
// Prevents loading the font multiple times
export const caveat = Caveat({
  subsets: ["latin"],
  display: "swap", // <- جرب هادي
  variable: "--font-caveat",
});