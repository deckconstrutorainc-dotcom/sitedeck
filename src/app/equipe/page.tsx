import type { Metadata } from "next";
import CtaContato from "@/components/CtaContato";
import HeroInterno from "@/components/HeroInterno";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Equipe | Deck Construtora e Incorporadora",
  description:
    "Conheça a equipe técnica e a diretoria da Deck Construtora e Incorporadora.",
};

// Apenas o Diretor Comercial constava nos materiais fornecidos pelo cliente.
// Os demais cargos são placeholder — substituir por nomes e fotos reais.
const EQUIPE = [
  { nome: "Altamiro Feitosa", cargo: "Diretor Comercial", contato: "(27) 8134-5555" },
  { nome: "A definir", cargo: "Diretor de Engenharia", contato: "" },
  { nome: "A definir", cargo: "Coordenador de Obras", contato: "" },
  { nome: "A definir", cargo: "Coordenador Administrativo", contato: "" },
];

const CULTURA = [
  {
    titulo: "Valorização das pessoas",
    texto: "Reconhecemos talento, incentivamos o crescimento profissional e promovemos diversidade e trabalho em equipe.",
  },
  {
    titulo: "Segurança em primeiro lugar",
    texto: "Garantimos ambientes de trabalho seguros e em conformidade com as normas técnicas em todas as frentes de obra.",
  },
  {
    titulo: "Engajamento técnico",
    texto: "Nossa equipe une competência técnica e inovação para entregar previsibilidade em cada etapa do projeto.",
  },
];

export default function EquipePage() {
  return (
    <div className="bg-deck-bone">
      <HeroInterno
        eyebrow="Nosso time"
        titulo="As pessoas por trás de cada obra"
        descricao="Valorizamos talento, crescimento profissional e trabalho em equipe em todas as etapas dos nossos projetos."
        imagem="/images/obras/benicio-goncalves/foto-02-full.webp"
      />

      {/* CULTURA */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>Nossa cultura</Eyebrow>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {CULTURA.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 0.08}>
              <div
                className={`h-full rounded-xl p-8 ${
                  i === 1
                    ? "bg-deck-accent text-deck-ink"
                    : "bg-deck-bone-soft text-deck-ink"
                }`}
              >
                <h3 className="text-xl font-semibold">{c.titulo}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    i === 1 ? "text-deck-ink/70" : "text-deck-ink/60"
                  }`}
                >
                  {c.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DIRETORIA */}
      <section className="bg-deck-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow tom="claro">Diretoria e coordenação</Eyebrow>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EQUIPE.map((pessoa, i) => {
              const definido = pessoa.nome !== "A definir";
              return (
                <Reveal key={pessoa.cargo} delay={i * 0.08}>
                  <div className="h-full rounded-xl border border-white/10 bg-deck-ink-soft p-7">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full text-xl font-semibold ${
                        definido
                          ? "bg-deck-accent text-deck-ink"
                          : "bg-white/5 text-white/25"
                      }`}
                    >
                      {definido ? pessoa.nome.charAt(0) : "—"}
                    </div>
                    <h3 className="mt-6 text-lg font-semibold">
                      {definido ? pessoa.nome : "A definir"}
                    </h3>
                    <p className="mt-1 text-sm text-white/45">{pessoa.cargo}</p>
                    {pessoa.contato && (
                      <p className="mt-4 text-sm text-deck-accent">{pessoa.contato}</p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
