import type { Metadata } from "next";
import CardObra from "@/components/CardObra";
import CtaContato from "@/components/CtaContato";
import HeroInterno from "@/components/HeroInterno";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { obras } from "@/lib/obras";

export const metadata: Metadata = {
  title: "Portfólio de Obras",
  description:
    "Conheça as obras públicas e privadas realizadas pela Deck Construtora e Incorporadora no Espírito Santo.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-deck-bone">
      <HeroInterno
        eyebrow="Obras"
        titulo="Obras que refletem nosso compromisso com a qualidade"
        descricao="Edificações institucionais, escolares, residenciais e comerciais entregues em todo o Espírito Santo."
        imagem="/images/obras/parque-tecnologico/foto-05-full.webp"
      />

      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:py-36">
        <SectionLabel numero="01">{`${obras.length} obras realizadas`}</SectionLabel>

        <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2">
          {obras.map((obra, i) => (
            <Reveal key={obra.slug} delay={(i % 2) * 0.06}>
              <CardObra obra={obra} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
