import Image from "next/image";
import type { Metadata } from "next";
import CtaContato from "@/components/CtaContato";
import HeroInterno from "@/components/HeroInterno";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Soluções completas em engenharia e construção civil: edificações públicas e privadas, reformas, gestão de obras e manutenção predial.",
};

// Conteúdo placeholder — os documentos institucionais fornecidos não
// detalhavam os serviços por categoria. Ajustar junto com o cliente.
const SERVICOS = [
  {
    numero: "01",
    titulo: "Edificações públicas",
    texto: "Execução de obras para órgãos públicos, com atendimento a exigências normativas e fiscalização técnica rigorosa.",
  },
  {
    numero: "02",
    titulo: "Edificações privadas",
    texto: "Construção de empreendimentos comerciais, residenciais e industriais, da fundação ao acabamento.",
  },
  {
    numero: "03",
    titulo: "Reformas e ampliações",
    texto: "Intervenções em edificações existentes com planejamento que minimiza impactos na operação do cliente.",
  },
  {
    numero: "04",
    titulo: "Gestão e fiscalização de obras",
    texto: "Acompanhamento técnico de cronograma, custos e qualidade, com gestão de dados e relatórios de evolução.",
  },
  {
    numero: "05",
    titulo: "Incorporação imobiliária",
    texto: "Desenvolvimento de empreendimentos imobiliários, unindo viabilidade técnica e visão de mercado.",
  },
  {
    numero: "06",
    titulo: "Manutenção predial",
    texto: "Serviços corretivos e preventivos, incluindo pintura, impermeabilização e recuperação estrutural.",
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
      "Entre em contato pelo telefone (27) 3291-4003, pelo e-mail deck@deckconstrutora.com.br ou pelo formulário da página de contato.",
  },
];

export default function ServicosPage() {
  return (
    <div className="bg-deck-bone">
      <HeroInterno
        eyebrow="Serviços"
        titulo="Soluções completas em engenharia e construção civil"
        descricao="Da fundação ao acabamento, atuamos em cada etapa da obra com planejamento técnico, tecnologia e gestão inteligente."
        imagem="/images/obras/cat-bombeiros/foto-03-full.webp"
      />

      {/* LISTA DE SERVIÇOS */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:py-36">
        <SectionLabel numero="01">Capacidades</SectionLabel>
        <h2 className="display mt-10 max-w-2xl text-4xl text-deck-ink sm:text-5xl">
          Como a Deck entrega cada projeto.
        </h2>

        <ul className="mt-16">
          {SERVICOS.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 0.04}>
              <li className="grid grid-cols-1 gap-2 border-t border-deck-line py-8 last:border-b sm:grid-cols-[80px_1fr_1.4fr] sm:items-baseline sm:gap-8">
                <span className="eyebrow text-deck-grey">{s.numero}</span>
                <h3 className="display text-2xl text-deck-ink sm:text-3xl">{s.titulo}</h3>
                <p className="max-w-md text-deck-grey">{s.texto}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* DIFERENCIAL */}
      <section className="border-t border-deck-line bg-deck-ink py-24 text-white lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
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
              <SectionLabel numero="02" tom="claro">Diferencial</SectionLabel>
              <Reveal delay={0.1}>
                <h2 className="display mt-8 text-4xl sm:text-5xl">
                  Planejamento estratégico e gestão de dados em cada etapa.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-7 max-w-md leading-relaxed text-white/55">
                  Na Deck Construtora, cada projeto é guiado por planejamento
                  estratégico, gestão de dados e acompanhamento técnico
                  rigoroso, garantindo previsibilidade, eficiência e
                  excelência em todas as entregas.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8 lg:py-36">
        <SectionLabel numero="03">Dúvidas frequentes</SectionLabel>
        <h2 className="display mt-8 text-4xl text-deck-ink sm:text-5xl">
          Perguntas comuns.
        </h2>
        <div className="mt-14">
          <Accordion itens={PERGUNTAS} aberturaInicial={0} />
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
