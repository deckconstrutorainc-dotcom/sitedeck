import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GaleriaFotos from "@/components/GaleriaFotos";
import CtaContato from "@/components/CtaContato";
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

  return (
    <div>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-deck-navy-dark text-white">
        <div className="absolute inset-0">
          <Image
            src={`/images/obras/${slug}/${fotos[0]}-full.webp`}
            alt={obra.titulo}
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deck-navy-dark via-deck-navy-dark/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Link href="/portfolio" className="text-sm text-white/70 hover:text-white">
            ← Voltar ao portfólio
          </Link>
          <span className="mt-4 block text-sm font-semibold uppercase tracking-widest text-deck-slate">
            {obra.categoria}
          </span>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{obra.titulo}</h1>
          <p className="mt-2 text-white/80">
            {obra.local} · {obra.ano}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="max-w-2xl text-lg leading-relaxed text-deck-graphite/80">
          {obra.resumo}
        </p>
      </section>

      {videos.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <h2 className="text-xl font-semibold text-deck-graphite">Vídeos da obra</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {videos.map((src) => (
              <video
                key={src}
                src={src}
                controls
                playsInline
                className="w-full rounded-2xl bg-black"
              />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <h2 className="text-xl font-semibold text-deck-graphite">Galeria</h2>
        <div className="mt-6">
          <GaleriaFotos slug={slug} fotos={fotos} titulo={obra.titulo} />
        </div>
      </section>

      <CtaContato />
    </div>
  );
}
