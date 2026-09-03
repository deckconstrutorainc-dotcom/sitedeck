import Image from "next/image";
import Link from "next/link";
import CardObra from "@/components/CardObra";
import CtaContato from "@/components/CtaContato";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import Contador from "@/components/Contador";
import Trajetoria from "@/components/Trajetoria";
import { obras } from "@/lib/obras";

const PILARES = [
  {
    titulo: "Excelência",
    texto: "Superamos padrões de qualidade e eficiência em todas as etapas do projeto.",
  },
  {
    titulo: "Inovação",
    texto: "Tecnologias construtivas, metodologias BIM e processos digitais aplicados à obra.",
  },
  {
    titulo: "Segurança",
    texto: "Ambientes de trabalho seguros e conformes às normas técnicas vigentes.",
  },
  {
    titulo: "Sustentabilidade",
    texto: "Práticas ESG, redução de impactos e otimização de recursos naturais.",
  },
];

const CAPACIDADES = [
  "Construção de edificações públicas e privadas",
  "Reformas, ampliações e retrofit",
  "Gestão e fiscalização de obras",
  "Manutenção predial, pintura e impermeabilização",
];

const destaque = obras.slice(0, 4);

export default function Home() {
  return (
    <div className="bg-deck-bone">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="relative z-10">
            <Reveal>
              <span className="eyebrow text-deck-navy">
                Engenharia e construção civil · Vitória, ES
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display mt-6 max-w-xl text-[2.5rem] text-deck-ink sm:text-6xl lg:text-6xl">
                Construímos com precisão técnica e mais de{" "}
                <span className="text-deck-accent-strong">30 anos</span> de experiência
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-deck-ink/60">
                A Deck Construtora e Incorporadora entrega obras públicas e
                privadas de alto desempenho, unindo gestão inteligente,
                tecnologia e compromisso com a qualidade em cada etapa.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link
                  href="/portfolio"
                  className="group flex items-center overflow-hidden rounded-md"
                >
                  <span className="eyebrow bg-deck-navy px-6 py-4 text-white transition-colors group-hover:bg-deck-navy-dark">
                    Ver portfólio de obras
                  </span>
                  <span className="flex h-[3.25rem] w-12 items-center justify-center bg-deck-accent text-deck-ink transition-colors group-hover:bg-deck-accent-strong">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/contato"
                  className="eyebrow rounded-md border border-deck-ink/15 px-6 py-4 text-deck-ink transition-colors hover:bg-deck-ink/5"
                >
                  Fale com a equipe
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
              <div className="absolute inset-x-6 inset-y-10 -z-10 rounded-full bg-deck-bone-soft blur-2xl" />
              <Image
                src="/images/marca/capa-hero-lg.webp"
                alt="Empreendimento residencial entregue pela Deck Construtora"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ESTATÍSTICAS */}
      <section className="border-b border-deck-navy/10 bg-deck-bone-soft">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-16 sm:px-8 lg:grid-cols-4">
          {[
            { valor: 30, sufixo: "+", label: "anos de mercado" },
            { valor: obras.length, sufixo: "", label: "obras no portfólio" },
            { valor: 100, sufixo: "%", label: "foco em prazo e qualidade" },
            { valor: 5, sufixo: "+", label: "segmentos atendidos" },
          ].map((e, i) => (
            <Reveal key={e.label} delay={i * 0.08}>
              <div>
                <div className="display text-5xl text-deck-navy sm:text-6xl">
                  <Contador valor={e.valor} sufixo={e.sufixo} />
                </div>
                <div className="mt-3 text-sm leading-snug text-deck-ink/60">
                  {e.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* QUEM SOMOS + MOSAICO */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>Quem somos</Eyebrow>
        </Reveal>

        <div className="mt-10 grid gap-16 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <h2 className="display max-w-xl text-4xl text-deck-ink sm:text-5xl">
              Soluções completas em engenharia e edificações
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-deck-ink/70">
              <p className="leading-relaxed">
                A Deck Construtora e Incorporadora LTDA atua há mais de 30 anos
                no mercado da construção civil, oferecendo soluções completas em
                engenharia e edificações públicas e privadas. Combinamos
                experiência, tecnologia e gestão inteligente para entregar obras
                de alto desempenho — desde reformas e ampliações até
                empreendimentos de grande porte.
              </p>
              <ul className="space-y-3 pt-2">
                {CAPACIDADES.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-deck-ink/80">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 flex-none rounded-full bg-deck-accent-strong" />
                    {c}
                  </li>
                ))}
              </ul>
              <Link
                href="/sobre"
                className="eyebrow inline-flex items-center gap-2 pt-4 text-deck-navy hover:gap-3 transition-all"
              >
                Conheça nossa história
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* mosaico de imagens */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            "cie/foto-01",
            "cond-vista-do-mar/foto-02",
            "parque-tecnologico/foto-01",
            "sml/foto-09",
          ].map((img, i) => (
            <Reveal key={img} delay={i * 0.08}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={`/images/obras/${img}-medium.webp`}
                  alt="Obra Deck Construtora"
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PILARES — seção escura */}
      <section className="bg-deck-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow tom="claro">Nossos pilares</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-8 max-w-2xl text-4xl sm:text-5xl">
              O que guia cada obra que entregamos
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILARES.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 0.08}>
                <div
                  className={`h-full rounded-xl p-7 transition-transform duration-500 hover:-translate-y-1 ${
                    i === 1
                      ? "bg-deck-accent text-deck-ink"
                      : "bg-deck-ink-soft text-white"
                  }`}
                >
                  <h3 className="text-xl font-semibold">{p.titulo}</h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      i === 1 ? "text-deck-ink/70" : "text-white/60"
                    }`}
                  >
                    {p.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAJETÓRIA (timeline interativa) */}
      <Trajetoria />

      {/* PORTFÓLIO */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>Portfólio</Eyebrow>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="display max-w-xl text-4xl text-deck-ink sm:text-5xl">
              Obras em destaque
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/portfolio"
              className="eyebrow inline-flex items-center gap-2 text-deck-navy transition-all hover:gap-3"
            >
              Ver todas as obras
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {destaque.map((obra, i) => (
            <Reveal key={obra.slug} delay={i * 0.08}>
              <CardObra obra={obra} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
