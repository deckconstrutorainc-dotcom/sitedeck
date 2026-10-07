import Image from "next/image";
import Link from "next/link";
import GaleriaFotos from "@/components/GaleriaFotos";
import CtaContato from "@/components/CtaContato";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import { obras, getObraFotos } from "@/lib/obras";

type Foto = { src: string; alt: string };

export type Secao = {
  eyebrow: string;
  titulo: string;
  fotos: Foto[];
  /** destaque: 1 grande + 2 empilhadas · grade2/grade3: colunas iguais · panorama: 1 foto larga em fundo escuro */
  layout: "destaque" | "grade2" | "grade3" | "panorama";
  fundo?: "padrao" | "suave";
  retrato?: boolean;
};

export type CaseObraProps = {
  slug: string;
  titulo: string;
  capaAlt: string;
  descricao: string;
  ficha: { label: string; valor: string }[];
  numeros: { valor: string; label: string }[];
  secoes: Secao[];
  intervencoes: string[];
};

function FotoCase({
  slug,
  foto,
  className,
}: {
  slug: string;
  foto: Foto;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className ?? ""}`}>
      <Image
        src={`/images/obras/${slug}/${foto.src}-medium.webp`}
        alt={foto.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

function SecaoFotos({ slug, secao }: { slug: string; secao: Secao }) {
  const aspecto = secao.retrato ? "aspect-[3/4]" : "aspect-[4/3]";

  if (secao.layout === "panorama") {
    const foto = secao.fotos[0];
    return (
      <section className="bg-deck-ink py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow tom="claro">{secao.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-8 max-w-2xl text-3xl text-white sm:text-4xl">
              {secao.titulo}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <Image
                src={`/images/obras/${slug}/${foto.src}-full.webp`}
                alt={foto.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  const conteudo = (
    <>
      <Reveal>
        <Eyebrow>{secao.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="display mt-8 max-w-2xl text-3xl text-deck-ink sm:text-4xl">
          {secao.titulo}
        </h2>
      </Reveal>

      {secao.layout === "destaque" ? (
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <FotoCase
              slug={slug}
              foto={secao.fotos[0]}
              className="aspect-[4/3] lg:h-full lg:aspect-auto"
            />
          </Reveal>
          <div className="grid gap-4">
            {secao.fotos.slice(1).map((f, i) => (
              <Reveal key={f.src} delay={0.08 + i * 0.06}>
                <FotoCase slug={slug} foto={f} className="aspect-[4/3]" />
              </Reveal>
            ))}
          </div>
        </div>
      ) : (
        <div
          className={`mt-12 grid gap-4 ${
            secao.layout === "grade3" ? "sm:grid-cols-3" : "sm:grid-cols-2"
          }`}
        >
          {secao.fotos.map((f, i) => (
            <Reveal key={f.src} delay={(i % 3) * 0.06}>
              <FotoCase slug={slug} foto={f} className={aspecto} />
            </Reveal>
          ))}
        </div>
      )}
    </>
  );

  if (secao.fundo === "suave") {
    return (
      <section className="bg-deck-bone-soft py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">{conteudo}</div>
      </section>
    );
  }
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">{conteudo}</section>
  );
}

export default function CaseObra({
  slug,
  titulo,
  capaAlt,
  descricao,
  ficha,
  numeros,
  secoes,
  intervencoes,
}: CaseObraProps) {
  const fotos = getObraFotos(slug);
  const outras = obras.filter((o) => o.slug !== slug).slice(0, 3);

  return (
    <div className="bg-deck-bone">
      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-deck-ink">
        <Image
          src={`/images/obras/${slug}/capa-full.webp`}
          alt={capaAlt}
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
              {titulo}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl leading-relaxed text-white/70">
              {descricao}
            </p>
          </Reveal>
        </div>
      </section>

      {/* FICHA DO PROJETO + NÚMEROS */}
      <section className="border-b border-deck-navy/10 bg-deck-bone-soft">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <Reveal>
            <Eyebrow>Ficha do projeto</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ficha.map((f, i) => (
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

          <Reveal>
            <div className="mt-14">
              <Eyebrow>Números da obra</Eyebrow>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {numeros.map((n, i) => (
              <Reveal key={n.label} delay={(i % 4) * 0.06}>
                <div className="border-l-2 border-deck-accent-strong pl-4">
                  <p className="display whitespace-nowrap text-[1.7rem] text-deck-navy sm:text-4xl">
                    {n.valor}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-deck-ink/60">
                    {n.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {secoes.map((s) => (
        <SecaoFotos key={s.eyebrow} slug={slug} secao={s} />
      ))}

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
            {intervencoes.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="flex h-full items-start gap-3 rounded-xl bg-deck-ink-soft p-6">
                  <span className="mt-[0.4rem] h-1.5 w-1.5 flex-none rounded-full bg-deck-accent" />
                  <p className="text-sm leading-relaxed text-white/80">{item}</p>
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
            <GaleriaFotos slug={slug} fotos={fotos} titulo={titulo} />
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
