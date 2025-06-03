import type { Metadata } from "next";
import "./globals.css";
import { appFont } from "@/config/fonts";
import { TopMenu } from "@/components";
import { Footer } from "@/components/ui/footer/Footer";

export const metadata: Metadata = {
  title: "Coinser AQP",
  description: "Topografía - Geodesia - Batimetría - Fotogrametría y Minería",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${appFont.className} antialiased`}
      >
        <TopMenu />
        
        <main>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
