import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GaleriaFotos from "@/components/GaleriaFotos";
import CtaContato from "@/components/CtaContato";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import { obras, getObraFotos } from "@/lib/obras";

const SLUG = "obra-judith";

export const metadata: Metadata = {
  title: "Obra Judith | Portfólio Deck Construtora",
  description:
    "Reforma e ampliação da EEEF Judith Leão Castello Ribeiro, em Vitória - ES: quadra poliesportiva coberta, vestiários, castelo d'água, instalações elétricas e urbanização completa, executados pela Deck Construtora.",
};

const FICHA = [
  { label: "Cliente", valor: "Secretaria de Estado da Educação (SEDU-ES)" },
  { label: "Localização", valor: "Vitória, Espírito Santo" },
  { label: "Tipo de obra", valor: "Reforma e ampliação de edificação escolar" },
  { label: "Status", valor: "Concluída" },
] as const;

const INTERVENCOES = [
  "Reforma e ampliação do bloco escolar",
  "Construção e cobertura metálica da quadra poliesportiva",
  "Construção de vestiário",
  "Construção de castelo d'água e sistema de recalque",
  "Instalações elétricas, SPDA e cabeamento estruturado",
  "Sistema de climatização",
  "Urbanização, paisagismo e acessibilidade das áreas externas",
] as const;

function Foto({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className ?? ""}`}>
      <Image
        src={`/images/obras/${SLUG}/${src}-medium.webp`}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

export default function ObraJudithPage() {
  const fotos = getObraFotos(SLUG);
  const outras = obras.filter((o) => o.slug !== SLUG).slice(0, 3);

  return (
    <div className="bg-deck-bone">
      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-deck-ink">
        <Image
          src={`/images/obras/${SLUG}/capa-full.webp`}
          alt="Quadra poliesportiva coberta da EEEF Judith Leão Castello Ribeiro"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deck-ink via-deck-ink/70 to-deck-ink/30" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-8">
          <Reveal>
            <Link
              prefetch={false}
              href="/portfolio"
              className="eyebrow inline-flex items-center gap-2 text-white/60 transition-colors hover:text-deck-accent"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H6M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Portfólio
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow mt-8 block text-deck-accent">
              Obras realizadas
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="display mt-5 max-w-3xl text-4xl text-white sm:text-5xl lg:text-6xl">
              Obra Judith
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl leading-relaxed text-white/70">
              Projeto executado pela Deck Construtora, reunindo diferentes
              ambientes e soluções construtivas em uma intervenção voltada à
              funcionalidade, qualidade e melhoria da infraestrutura
              existente.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FICHA DO PROJETO */}
      <section className="border-b border-deck-navy/10 bg-deck-bone-soft">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <Reveal>
            <Eyebrow>Ficha do projeto</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FICHA.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.06}>
                <div>
                  <span className="eyebrow text-deck-ink/35">{f.label}</span>
                  <p className="mt-3 text-lg font-medium text-deck-ink">
                    {f.valor}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUADRA E COBERTURA */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>Quadra e cobertura</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display mt-8 max-w-2xl text-3xl text-deck-ink sm:text-4xl">
            Ginásio poliesportivo coberto, do zero à entrega
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <Foto
              src="quadra-estrutura"
              alt="Estrutura metálica de cobertura da quadra poliesportiva"
              className="aspect-[4/3] lg:h-full lg:aspect-auto"
            />
          </Reveal>
          <div className="grid gap-4">
            <Reveal delay={0.08}>
              <Foto
                src="quadra-arquibancada"
                alt="Quadra poliesportiva com arquibancada e traves oficiais"
                className="aspect-[4/3]"
              />
            </Reveal>
            <Reveal delay={0.14}>
              <Foto
                src="quadra-lateral"
                alt="Alambrado e cobertura metálica da quadra poliesportiva"
                className="aspect-[4/3]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMPLANTAÇÃO GERAL */}
      <section className="bg-deck-ink py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow tom="claro">Implantação geral</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-8 max-w-2xl text-3xl text-white sm:text-4xl">
              Reforma e ampliação integradas ao conjunto escolar
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <Image
                src={`/images/obras/${SLUG}/implantacao-aerea-full.webp`}
                alt="Vista aérea da implantação do bloco escolar e da quadra coberta"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ÁREAS EXTERNAS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>Áreas externas</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display mt-8 max-w-2xl text-3xl text-deck-ink sm:text-4xl">
            Urbanização, paisagismo e acessibilidade
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <Foto
              src="fachada-grafite"
              alt="Fachada externa com paisagismo e acesso da unidade escolar"
              className="aspect-[4/3]"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <Foto
              src="fachada-gradil"
              alt="Fachada lateral com gradil metálico novo e jardim"
              className="aspect-[4/3]"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <Foto
              src="area-convivio"
              alt="Área de convívio externa com bancos de concreto e paisagismo"
              className="aspect-[4/3]"
            />
          </Reveal>
          <Reveal delay={0.18}>
            <Foto
              src="area-bancos"
              alt="Mobiliário urbano externo em concreto e piso intertravado"
              className="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </section>

      {/* AMBIENTES INTERNOS */}
      <section className="bg-deck-bone-soft py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow>Ambientes internos</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-8 max-w-2xl text-3xl text-deck-ink sm:text-4xl">
              Salas e áreas de uso coletivo reformadas
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <Foto
                src="sala-aula"
                alt="Sala de aula reformada com climatização e acabamentos novos"
                className="aspect-[4/3] lg:h-full lg:aspect-auto"
              />
            </Reveal>
            <div className="grid gap-4">
              <Reveal delay={0.08}>
                <Foto
                  src="refeitorio"
                  alt="Refeitório coberto com estrutura metálica e guichês de atendimento"
                  className="aspect-[4/3]"
                />
              </Reveal>
              <Reveal delay={0.14}>
                <Foto
                  src="sala-apoio"
                  alt="Sala de apoio com climatização e acabamentos novos"
                  className="aspect-[4/3]"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CIRCULAÇÃO E INFRAESTRUTURA */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>Circulação e infraestrutura técnica</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display mt-8 max-w-2xl text-3xl text-deck-ink sm:text-4xl">
            Conexão entre ambientes e suporte operacional
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <Reveal>
            <Foto
              src="corredor-interno"
              alt="Corredor interno com acabamento padronizado e sinalização de segurança"
              className="aspect-[3/4]"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <Foto
              src="acesso-blocos"
              alt="Acesso entre o bloco escolar e a quadra poliesportiva"
              className="aspect-[3/4]"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <Foto
              src="corredor-externo"
              alt="Corredor externo coberto com bancos de concreto"
              className="aspect-[3/4]"
            />
          </Reveal>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Reveal>
            <Foto
              src="castelo-dagua"
              alt="Castelo d'água construído, com escada de marinheiro e guarda-corpo"
              className="aspect-[3/4]"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <Foto
              src="quadro-eletrico"
              alt="Quadros de distribuição elétrica e eletrocalhas instalados"
              className="aspect-[3/4]"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <Foto
              src="subestacao"
              alt="Subestação de energia elétrica protegida por gradil"
              className="aspect-[3/4]"
            />
          </Reveal>
        </div>
      </section>

      {/* PRINCIPAIS INTERVENÇÕES */}
      <section className="bg-deck-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow tom="claro">Principais intervenções</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-8 max-w-2xl text-3xl sm:text-4xl">
              Escopo executado pela Deck
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INTERVENCOES.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="flex h-full items-start gap-3 rounded-xl bg-deck-ink-soft p-6">
                  <span className="mt-[0.4rem] h-1.5 w-1.5 flex-none rounded-full bg-deck-accent" />
                  <p className="text-sm leading-relaxed text-white/80">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA COMPLETA */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>{`Galeria · ${fotos.length} fotos`}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <GaleriaFotos slug={SLUG} fotos={fotos} titulo="Obra Judith" />
          </div>
        </Reveal>
      </section>

      {/* CONVERSÃO COMERCIAL */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="rounded-2xl bg-deck-bone-soft px-6 py-20 text-center sm:px-12">
            <span className="eyebrow text-deck-navy">
              Engenharia que transforma projetos em resultados
            </span>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-deck-ink/60">
              A Deck Construtora reúne experiência técnica, planejamento e
              capacidade operacional para execução de obras de diferentes
              portes e complexidades.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                prefetch={false}
                href="/portfolio"
                className="group flex items-center overflow-hidden rounded-md"
              >
                <span className="eyebrow bg-deck-navy px-6 py-4 text-white transition-colors group-hover:bg-deck-navy-dark">
                  Conheça outras obras
                </span>
                <span className="flex h-[3.25rem] w-12 items-center justify-center bg-deck-accent text-deck-ink transition-colors group-hover:bg-deck-accent-strong">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <Link
                prefetch={false}
                href="/contato"
                className="eyebrow rounded-md border border-deck-ink/15 px-6 py-4 text-deck-ink transition-colors hover:bg-deck-ink/5"
              >
                Fale com nossa equipe
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* OUTRAS OBRAS */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <Reveal>
          <Eyebrow>Outras obras</Eyebrow>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {outras.map((o, i) => (
            <Reveal key={o.slug} delay={i * 0.08}>
              <Link
                prefetch={false}
                href={`/portfolio/${o.slug}`}
                className="group block overflow-hidden rounded-xl bg-deck-ink"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`/images/obras/${o.slug}/${o.capa}-medium.webp`}
                    alt={o.titulo}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deck-ink/90 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-semibold text-white">{o.titulo}</h3>
                    <p className="mt-1 text-xs text-white/50">
                      {o.local} · {o.ano}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
