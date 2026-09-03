import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroSplash from "@/components/IntroSplash";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deck Construtora e Incorporadora",
  description:
    "Deck Construtora e Incorporadora — mais de 30 anos de experiência em engenharia e construção civil em Vitória, ES. Obras públicas e privadas com qualidade, tecnologia e sustentabilidade.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-deck-bone text-[var(--foreground)]">
        <IntroSplash />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
