import { Quicksand } from "next/font/google";

export const appFont = Quicksand({
  subsets: ["latin"],
  variable: "--font-app",
  display: "swap",  
  weight: ["300", "400", "500", "600", "700"]
});


