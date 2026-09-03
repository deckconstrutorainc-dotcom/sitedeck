import type { Metadata } from "next";
import CtaContato from "@/components/CtaContato";

export const metadata: Metadata = {
  title: "Equipe | Deck Construtora e Incorporadora",
  description: "Conheça a equipe da Deck Construtora e Incorporadora.",
};

// Apenas o Diretor Comercial constava nos materiais fornecidos pelo cliente.
// Os demais cargos são placeholder — substituir por nomes e fotos reais da equipe.
const EQUIPE = [
  { nome: "Altamiro Feitosa", cargo: "Diretor Comercial", contato: "(27) 8134-5555" },
  { nome: "A definir", cargo: "Diretor de Engenharia", contato: "" },
  { nome: "A definir", cargo: "Coordenador de Obras", contato: "" },
  { nome: "A definir", cargo: "Coordenador Administrativo", contato: "" },
];

export default function EquipePage() {
  return (
    <div>
      <section className="bg-deck-navy-dark py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-deck-slate">
            Nosso time
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
            As pessoas por trás de cada obra
          </h1>
          <p className="mt-6 max-w-xl text-white/80">
            Valorizamos talento, crescimento profissional e trabalho em
            equipe em todas as etapas dos nossos projetos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {EQUIPE.map((pessoa) => (
            <div key={pessoa.cargo} className="text-center">
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-deck-mist text-3xl font-bold text-deck-slate">
                {pessoa.nome === "A definir" ? "?" : pessoa.nome.charAt(0)}
              </div>
              <h3 className="mt-4 font-semibold text-deck-graphite">{pessoa.nome}</h3>
              <p className="text-sm text-deck-graphite/60">{pessoa.cargo}</p>
              {pessoa.contato && (
                <p className="mt-1 text-sm text-deck-navy">{pessoa.contato}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
