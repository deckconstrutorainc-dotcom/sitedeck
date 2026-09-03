import type { Metadata } from "next";
import ContatoForm from "@/components/ContatoForm";

export const metadata: Metadata = {
  title: "Contato | Deck Construtora e Incorporadora",
  description: "Entre em contato com a Deck Construtora e Incorporadora em Vitória, ES.",
};

export default function ContatoPage() {
  return (
    <div>
      <section className="bg-deck-navy-dark py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-deck-slate">
            Fale conosco
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
            Vamos conversar sobre o seu projeto
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-deck-graphite">Informações de contato</h2>
            <ul className="mt-6 space-y-4 text-deck-graphite/80">
              <li>
                <strong className="block text-deck-graphite">Endereço</strong>
                Rua Capitão Domingos, 80 - Sala 514
                <br />
                Santa Lúcia, Vitória - ES, CEP 29056-915
              </li>
              <li>
                <strong className="block text-deck-graphite">Telefone / WhatsApp</strong>
                <a href="tel:+552732914003" className="hover:text-deck-navy">
                  (27) 3291-4003
                </a>
              </li>
              <li>
                <strong className="block text-deck-graphite">E-mail</strong>
                <a href="mailto:deck@deckconstrutora.com.br" className="hover:text-deck-navy">
                  deck@deckconstrutora.com.br
                </a>
              </li>
              <li>
                <strong className="block text-deck-graphite">Diretor Comercial</strong>
                Altamiro Feitosa — (27) 8134-5555
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-black/5">
              <iframe
                title="Localização Deck Construtora"
                src="https://www.google.com/maps?q=Rua+Capit%C3%A3o+Domingos,+80,+Santa+L%C3%BAcia,+Vit%C3%B3ria+-+ES,+29056-915&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          <ContatoForm />
        </div>
      </section>
    </div>
  );
}
