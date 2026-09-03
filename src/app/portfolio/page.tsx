import type { Metadata } from "next";
import CardObra from "@/components/CardObra";
import CtaContato from "@/components/CtaContato";
import HeroInterno from "@/components/HeroInterno";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import { obras } from "@/lib/obras";

export const metadata: Metadata = {
  title: "Portfólio de Obras | Deck Construtora e Incorporadora",
  description:
    "Conheça as obras públicas e privadas realizadas pela Deck Construtora e Incorporadora no Espírito Santo.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-deck-bone">
      <HeroInterno
        eyebrow="Portfólio"
        titulo="Obras que refletem nosso compromisso com a qualidade"
        descricao="Edificações institucionais, escolares, residenciais e comerciais entregues em todo o Espírito Santo."
        imagem="/images/obras/estadio-kleber-andrade/foto-08-full.webp"
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>{`${obras.length} obras realizadas`}</Eyebrow>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {obras.map((obra, i) => (
            <Reveal key={obra.slug} delay={(i % 2) * 0.08}>
              <CardObra obra={obra} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
