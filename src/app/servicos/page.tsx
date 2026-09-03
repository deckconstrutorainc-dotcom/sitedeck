import Image from "next/image";
import type { Metadata } from "next";
import CtaContato from "@/components/CtaContato";
import HeroInterno from "@/components/HeroInterno";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Serviços | Deck Construtora e Incorporadora",
  description:
    "Soluções completas em engenharia e construção civil: edificações públicas e privadas, reformas, gestão de obras e manutenção predial.",
};

// Conteúdo placeholder — os documentos institucionais fornecidos não
// detalhavam os serviços por categoria. Ajustar junto com o cliente.
const SERVICOS = [
  {
    titulo: "Edificações Públicas",
    texto:
      "Execução de obras para órgãos públicos, com atendimento a exigências normativas, cronogramas de licitação e fiscalização técnica rigorosa.",
  },
  {
    titulo: "Edificações Privadas",
    texto:
      "Construção de empreendimentos comerciais, residenciais e industriais, da fundação ao acabamento.",
  },
  {
    titulo: "Reformas e Ampliações",
    texto:
      "Intervenções em edificações existentes com planejamento que minimiza impactos na operação do cliente.",
  },
  {
    titulo: "Gestão e Fiscalização de Obras",
    texto:
      "Acompanhamento técnico de cronograma, custos e qualidade, com gestão de dados e relatórios de evolução.",
  },
  {
    titulo: "Incorporação Imobiliária",
    texto:
      "Desenvolvimento de empreendimentos imobiliários, unindo viabilidade técnica e visão de mercado.",
  },
  {
    titulo: "Manutenção Predial",
    texto:
      "Serviços corretivos e preventivos, incluindo pintura, impermeabilização e recuperação estrutural.",
  },
];

const PERGUNTAS = [
  {
    titulo: "A Deck atende obras públicas e privadas?",
    texto:
      "Sim. Atuamos tanto em edificações públicas — escolas, equipamentos institucionais e obras licitadas — quanto em empreendimentos privados residenciais, comerciais e industriais.",
  },
  {
    titulo: "Em que regiões a empresa atua?",
    texto:
      "Nossa sede fica em Vitória, no Espírito Santo, e atendemos obras em todo o estado. Consulte-nos para projetos em outras regiões.",
  },
  {
    titulo: "A Deck executa apenas obras novas?",
    texto:
      "Não. Além de obras novas, executamos reformas, ampliações, retrofit e serviços de manutenção predial em edificações existentes.",
  },
  {
    titulo: "Como solicitar um orçamento?",
    texto:
      "Entre em contato pelo telefone (27) 3291-4003, pelo e-mail deck@deckconstrutora.com.br ou pelo formulário da página de contato. Nossa equipe técnica avaliará o escopo do seu projeto.",
  },
];

export default function ServicosPage() {
  return (
    <div className="bg-deck-bone">
      <HeroInterno
        eyebrow="O que fazemos"
        titulo="Soluções completas em engenharia e construção civil"
        descricao="Da fundação ao acabamento, atuamos em cada etapa da obra com planejamento técnico, tecnologia e gestão inteligente."
        imagem="/images/obras/cat-bombeiros/foto-03-full.webp"
      />

      {/* GRID DE SERVIÇOS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>Nossas capacidades</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display mt-8 max-w-2xl text-4xl text-deck-ink sm:text-5xl">
            Como a Deck entrega cada projeto
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((s, i) => (
            <Reveal key={s.titulo} delay={(i % 3) * 0.08}>
              <div
                className={`h-full rounded-xl p-8 transition-transform duration-500 hover:-translate-y-1 ${
                  i === 2
                    ? "bg-deck-accent text-deck-ink"
                    : "bg-deck-bone-soft text-deck-ink"
                }`}
              >
                <span className={`eyebrow ${i === 2 ? "text-deck-ink/45" : "text-deck-ink/30"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{s.titulo}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    i === 2 ? "text-deck-ink/70" : "text-deck-ink/60"
                  }`}
                >
                  {s.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS COM IMAGEM */}
      <section className="bg-deck-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/obras/cat-bombeiros/foto-04-medium.webp"
                  alt="Equipe técnica da Deck em obra"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <Eyebrow tom="claro">Nosso diferencial</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="display mt-8 text-4xl sm:text-5xl">
                  Planejamento estratégico e gestão de dados em cada etapa
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-7 leading-relaxed text-white/60">
                  Na Deck Construtora, cada projeto é guiado por planejamento
                  estratégico, gestão de dados e acompanhamento técnico
                  rigoroso, garantindo previsibilidade, eficiência e excelência
                  em todas as entregas.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow text-deck-navy">Dúvidas frequentes</span>
            <h2 className="display mt-6 text-4xl text-deck-ink sm:text-5xl">
              Perguntas comuns
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <Accordion itens={PERGUNTAS} aberturaInicial={0} />
          </div>
        </Reveal>
      </section>

      <CtaContato />
    </div>
  );
}
