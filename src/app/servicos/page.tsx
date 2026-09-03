import type { Metadata } from "next";
import CtaContato from "@/components/CtaContato";

export const metadata: Metadata = {
  title: "Serviços | Deck Construtora e Incorporadora",
  description: "Conheça os serviços de engenharia e construção civil da Deck Construtora e Incorporadora.",
};

// Conteúdo placeholder — os documentos institucionais fornecidos não detalhavam
// os serviços por categoria. Ajustar textos e itens junto com o cliente.
const SERVICOS = [
  {
    titulo: "Construção Residencial",
    texto:
      "Execução de empreendimentos residenciais, do planejamento à entrega, com foco em qualidade construtiva e cumprimento de prazos.",
  },
  {
    titulo: "Construção Comercial e Institucional",
    texto:
      "Obras para clientes públicos e privados, incluindo edificações institucionais, escolas e equipamentos públicos.",
  },
  {
    titulo: "Reformas e Ampliações",
    texto:
      "Intervenções construtivas em edificações existentes, com planejamento que minimiza impactos na operação do cliente.",
  },
  {
    titulo: "Gestão e Fiscalização de Obras",
    texto:
      "Acompanhamento técnico rigoroso de cronograma, custos e qualidade em todas as etapas da obra.",
  },
  {
    titulo: "Incorporação Imobiliária",
    texto:
      "Desenvolvimento de empreendimentos imobiliários, unindo viabilidade técnica e visão de mercado.",
  },
  {
    titulo: "Manutenção Predial",
    texto:
      "Serviços de manutenção corretiva e preventiva, incluindo pintura, impermeabilização e instalações.",
  },
];

export default function ServicosPage() {
  return (
    <div>
      <section className="bg-deck-navy-dark py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-deck-slate">
            O que fazemos
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
            Soluções completas em engenharia e construção civil
          </h1>
          <p className="mt-6 max-w-xl text-white/80">
            Da fundação ao acabamento, atuamos em cada etapa da obra com
            planejamento técnico e gestão inteligente.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {SERVICOS.map((s) => (
            <div key={s.titulo} className="rounded-2xl border border-black/5 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-deck-navy">{s.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-deck-graphite/70">
                {s.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
