import type { Metadata } from "next";
import ContatoForm from "@/components/ContatoForm";
import HeroInterno from "@/components/HeroInterno";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a Deck Construtora e Incorporadora em Vitória, ES. Telefone (27) 3291-4003.",
};

export default function ContatoPage() {
  return (
    <div className="bg-deck-bone">
      <HeroInterno
        eyebrow="Contato"
        titulo="Vamos conversar sobre o seu projeto"
        descricao="Nossa equipe técnica está pronta para avaliar o escopo da sua obra e apresentar a melhor solução."
        imagem="/images/obras/parque-tecnologico/foto-04-full.webp"
      />

      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionLabel numero="—">Informações de contato</SectionLabel>

            <div className="mt-10 space-y-8">
              {[
                {
                  label: "Endereço",
                  conteudo: (
                    <>
                      Rua Capitão Domingos, 80 — Sala 514
                      <br />
                      Santa Lúcia, Vitória - ES
                      <br />
                      CEP 29056-915
                    </>
                  ),
                },
                {
                  label: "Telefone / WhatsApp",
                  conteudo: (
                    <a href="tel:+552732914003" className="hover:text-deck-ink">
                      (27) 3291-4003
                    </a>
                  ),
                },
                {
                  label: "E-mail",
                  conteudo: (
                    <a
                      href="mailto:deck@deckconstrutora.com.br"
                      className="hover:text-deck-ink"
                    >
                      deck@deckconstrutora.com.br
                    </a>
                  ),
                },
                {
                  label: "Diretor Comercial",
                  conteudo: <>Altamiro Feitosa — (27) 8134-5555</>,
                },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 0.05}>
                  <div className="border-t border-deck-line pt-5">
                    <span className="eyebrow text-deck-grey">{item.label}</span>
                    <p className="mt-3 text-lg leading-relaxed text-deck-ink">
                      {item.conteudo}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-12 overflow-hidden rounded-sm grayscale">
                <iframe
                  title="Localização da Deck Construtora"
                  src="https://www.google.com/maps?q=Rua+Capit%C3%A3o+Domingos,+80,+Santa+L%C3%BAcia,+Vit%C3%B3ria+-+ES,+29056-915&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContatoForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
