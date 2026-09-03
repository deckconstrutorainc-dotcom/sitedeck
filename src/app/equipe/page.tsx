import type { Metadata } from "next";
import CtaContato from "@/components/CtaContato";
import HeroInterno from "@/components/HeroInterno";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Equipe",
  description: "Conheça a equipe técnica e a diretoria da Deck Construtora e Incorporadora.",
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
        eyebrow="Equipe"
        titulo="As pessoas por trás de cada obra"
        descricao="Valorizamos talento, crescimento profissional e trabalho em equipe em todas as etapas dos nossos projetos."
        imagem="/images/obras/cat-bombeiros/foto-02-full.webp"
      />

      {/* CULTURA */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:py-36">
        <SectionLabel numero="01">Cultura</SectionLabel>
        <ul className="mt-16">
          {CULTURA.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 0.06}>
              <li className="grid grid-cols-1 gap-2 border-t border-deck-line py-8 last:border-b sm:grid-cols-[1fr_1.4fr] sm:items-baseline sm:gap-8">
                <h3 className="display text-2xl text-deck-ink sm:text-3xl">{c.titulo}</h3>
                <p className="max-w-md text-deck-grey">{c.texto}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* DIRETORIA */}
      <section className="border-t border-deck-line bg-deck-ink py-24 text-white lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <SectionLabel numero="02" tom="claro">Diretoria e coordenação</SectionLabel>
          <ul className="mt-16 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {EQUIPE.map((pessoa, i) => {
              const definido = pessoa.nome !== "A definir";
              return (
                <Reveal key={pessoa.cargo} delay={i * 0.06}>
                  <li className="border-t border-white/10 pt-6">
                    <h3 className={definido ? "text-lg font-medium" : "text-lg font-medium text-white/35"}>
                      {definido ? pessoa.nome : "A definir"}
                    </h3>
                    <p className="mt-1 text-sm text-white/45">{pessoa.cargo}</p>
                    {pessoa.contato && (
                      <p className="mt-4 text-sm text-white/70">{pessoa.contato}</p>
                    )}
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
