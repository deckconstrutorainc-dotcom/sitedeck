import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GaleriaFotos from "@/components/GaleriaFotos";
import CtaContato from "@/components/CtaContato";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import { obras, getObraBySlug, getObraFotos, temVideo } from "@/lib/obras";

export function generateStaticParams() {
  return obras.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const obra = getObraBySlug(slug);
  if (!obra) return {};
  return {
    title: `${obra.titulo} | Portfólio Deck Construtora`,
    description: obra.resumo,
  };
}

export default async function ObraPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const obra = getObraBySlug(slug);
  if (!obra) notFound();

  const fotos = getObraFotos(slug);
  const videos = temVideo(slug) ? [`/videos/${slug}-01.mp4`, `/videos/${slug}-02.mp4`] : [];
  const outras = obras.filter((o) => o.slug !== slug).slice(0, 3);

  return (
    <div className="bg-deck-bone">
      {/* HERO DA OBRA */}
      <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-deck-ink">
        <Image
          src={`/images/obras/${slug}/${obra.capa}-full.webp`}
          alt={obra.titulo}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deck-ink via-deck-ink/70 to-deck-ink/30" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-8">
          <Reveal>
            <Link
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
              {obra.categoria}
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="display mt-5 max-w-3xl text-4xl text-white sm:text-5xl lg:text-6xl">
              {obra.titulo}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* FICHA TÉCNICA */}
      <section className="border-b border-deck-navy/10 bg-deck-bone-soft">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-3 sm:px-8">
          {[
            { label: "Localização", valor: obra.local },
            { label: "Ano", valor: obra.ano },
            { label: "Categoria", valor: obra.categoria },
          ].map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08}>
              <div>
                <span className="eyebrow text-deck-ink/35">{f.label}</span>
                <p className="mt-3 text-xl font-medium text-deck-ink">{f.valor}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <Eyebrow>Sobre a obra</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display text-2xl leading-snug text-deck-ink sm:text-3xl">
              {obra.resumo}
            </p>
          </Reveal>
        </div>
      </section>

      {/* VÍDEOS */}
      {videos.length > 0 && (
        <section className="bg-deck-ink py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <Eyebrow tom="claro">Vídeos da obra</Eyebrow>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {videos.map((src, i) => (
                <Reveal key={src} delay={i * 0.08}>
                  <video
                    src={src}
                    controls
                    playsInline
                    className="w-full rounded-xl bg-black"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GALERIA */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>{`Galeria · ${fotos.length} fotos`}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <GaleriaFotos slug={slug} fotos={fotos} titulo={obra.titulo} />
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
