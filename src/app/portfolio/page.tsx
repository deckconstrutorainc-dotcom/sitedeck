import type { Metadata } from "next";
import CardObra from "@/components/CardObra";
import CtaContato from "@/components/CtaContato";
import { obras } from "@/lib/obras";

export const metadata: Metadata = {
  title: "Portfólio de Obras | Deck Construtora e Incorporadora",
  description: "Conheça as obras públicas e privadas realizadas pela Deck Construtora e Incorporadora.",
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="bg-deck-navy-dark py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-deck-slate">
            Portfólio
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
            Obras que refletem nosso compromisso com a qualidade
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {obras.map((obra) => (
            <CardObra key={obra.slug} obra={obra} />
          ))}
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
