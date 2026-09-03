import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webapp-hazel-omega.vercel.app"),
  title: {
    default: "Deck Construtora e Incorporadora",
    template: "%s | Deck Construtora e Incorporadora",
  },
  description:
    "Deck Construtora e Incorporadora — mais de 30 anos de experiência em engenharia e construção civil em Vitória, ES. Obras públicas e privadas com precisão técnica e gestão inteligente.",
  openGraph: {
    title: "Deck Construtora e Incorporadora",
    description:
      "Mais de 30 anos de experiência em engenharia e construção civil no Espírito Santo.",
    locale: "pt_BR",
    type: "website",
    images: ["/images/marca/capa-hero-lg.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-deck-bone text-[var(--foreground)]">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-deck-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
