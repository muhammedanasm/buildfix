import type { Metadata } from "next";
import { Poppins, Tenor_Sans } from "next/font/google"
import "./globals.css";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
import Navbar from "@/components/layout/Navbar";
import Preloader from "@/components/layout/Preloader";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Tenor Sans: 
const tenor = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tenor",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BUILD FIX CONTRACTING COMPANY",
  description: "Built To Perform, Fixed to Last",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} ${tenor.variable} font-sans bg-black text-white antialiased`}>

        <Preloader />
        <SmoothScrolling>
          <Navbar />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}