import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Metric from "@/components/Metric";
import CtaContato from "@/components/CtaContato";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExpertiseList from "@/components/ExpertiseList";
import Trajetoria from "@/components/Trajetoria";
import { obras } from "@/lib/obras";

const PILARES = [
  {
    numero: "01",
    titulo: "Excelência técnica",
    texto: "Planejamento, controle e execução rigorosa em cada etapa do projeto.",
  },
  {
    numero: "02",
    titulo: "Engenharia aplicada",
    texto: "Tecnologia e soluções construtivas orientadas à eficiência.",
  },
  {
    numero: "03",
    titulo: "Segurança",
    texto: "Processos alinhados às normas técnicas e às melhores práticas do setor.",
  },
  {
    numero: "04",
    titulo: "Responsabilidade",
    texto: "Qualidade, sustentabilidade e compromisso em cada entrega.",
  },
];

const EXPERTISE = [
  {
    numero: "01",
    titulo: "Edificações",
    texto: "Obras públicas e privadas, da estrutura ao acabamento.",
    imagem: "/images/obras/parque-tecnologico/foto-05-medium.webp",
  },
  {
    numero: "02",
    titulo: "Equipamentos públicos",
    texto: "Escolas, ginásios e edificações institucionais entregues em todo o Espírito Santo.",
    imagem: "/images/obras/cie/foto-13-medium.webp",
  },
  {
    numero: "03",
    titulo: "Reformas e adequações",
    texto: "Intervenções técnicas em edificações existentes, com planejamento que preserva a operação do cliente.",
    imagem: "/images/obras/estadio-kleber-andrade/foto-08-medium.webp",
  },
  {
    numero: "04",
    titulo: "Empreendimentos residenciais",
    texto: "Incorporação e construção de condomínios multifamiliares.",
    imagem: "/images/obras/cond-vista-do-mar/foto-02-medium.webp",
  },
];

const destaque = obras.slice(0, 3);

export default function Home() {
  return (
    <div className="bg-deck-bone">
      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-end overflow-hidden bg-deck-ink">
        <Image
          src="/images/obras/estadio-kleber-andrade/foto-16-full.webp"
          alt="Estrutura de cobertura do Estádio Kleber Andrade, obra executada pela Deck Construtora"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deck-ink via-deck-ink/65 to-deck-ink/25" />

        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 pt-40 sm:px-8">
          <Reveal>
            <span className="eyebrow text-white/60">
              Deck Construtora · Espírito Santo
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="display mt-6 max-w-3xl text-[2.5rem] text-white sm:text-6xl lg:text-[4.5rem]">
              Engenharia que transforma.
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/70">
              Construímos com precisão. Entregamos com confiança. Mais de 30
              anos de experiência em obras públicas e privadas no Espírito
              Santo.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-11 flex flex-wrap items-center gap-8">
              <Link
                href="/portfolio"
                className="eyebrow rounded-sm bg-white px-7 py-4 text-deck-ink transition-colors hover:bg-white/90"
              >
                Conheça nossas obras
              </Link>
              <Link
                href="/contato"
                className="eyebrow inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
              >
                Fale com nossa equipe
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <p className="eyebrow mt-14 text-white/40">
              +30 anos de experiência
            </p>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex">
          <span className="eyebrow">Role para explorar</span>
          <span className="h-10 w-px bg-white/30" />
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="border-b border-deck-line py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
            <Metric valor={30} sufixo="+" label="Anos de experiência" />
            <Metric valor={obras.length} label="Obras entregues" />
            <Metric valor={5} label="Segmentos atendidos" />
            <Metric valor={1} sufixo="º" label="Estado — Espírito Santo" />
          </div>
        </div>
      </section>

      {/* 01 / EMPRESA */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:py-36">
        <SectionLabel numero="01">Empresa</SectionLabel>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 className="display max-w-xl text-4xl text-deck-ink sm:text-5xl">
              Mais de três décadas transformando projetos em obras de
              referência.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-lg leading-relaxed text-deck-grey">
              A Deck Construtora e Incorporadora atua no mercado da
              construção civil oferecendo soluções completas em engenharia e
              edificações públicas e privadas, unindo experiência técnica e
              gestão inteligente em cada etapa.
            </p>
            <Link
              href="/sobre"
              className="eyebrow mt-8 inline-flex items-center gap-2 border-b border-deck-ink/25 pb-1 text-deck-ink transition-all hover:gap-3 hover:border-deck-ink"
            >
              Conheça nossa história
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 02 / PORTFÓLIO */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:py-36">
        <SectionLabel numero="02">Portfólio</SectionLabel>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display max-w-xl text-4xl text-deck-ink sm:text-5xl">
            Obras que representam nossa capacidade.
          </h2>
          <Link
            href="/portfolio"
            className="eyebrow inline-flex items-center gap-2 text-deck-ink transition-all hover:gap-3"
          >
            Ver todas as obras
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-20 space-y-24 lg:space-y-32">
          <ProjectShowcase obra={destaque[0]} layout="imagem-esquerda" />
          <ProjectShowcase obra={destaque[1]} layout="imagem-direita" />
          <ProjectShowcase obra={destaque[2]} layout="full" />
        </div>
      </section>

      {/* 03 / EXPERTISE */}
      <section className="bg-deck-bone-soft py-24 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <SectionLabel numero="03">Expertise</SectionLabel>
          <h2 className="display mt-10 max-w-2xl text-4xl text-deck-ink sm:text-5xl">
            Engenharia aplicada a diferentes desafios.
          </h2>

          <div className="mt-16">
            <ExpertiseList itens={EXPERTISE} />
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-deck-ink py-24 text-white lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
          <SectionLabel numero="04" tom="claro">Pilares</SectionLabel>
          <h2 className="display mt-10 max-w-2xl text-4xl sm:text-5xl">
            O que guia cada obra que entregamos.
          </h2>

          <ul className="mt-16">
            {PILARES.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 0.06}>
                <li className="grid grid-cols-1 gap-2 border-t border-white/10 py-8 last:border-b sm:grid-cols-[80px_1fr_1.2fr] sm:items-baseline sm:gap-8">
                  <span className="eyebrow text-white/35">{p.numero}</span>
                  <h3 className="display text-2xl sm:text-3xl">{p.titulo}</h3>
                  <p className="max-w-md text-white/55">{p.texto}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Trajetoria />

      <CtaContato />
    </div>
  );
}
