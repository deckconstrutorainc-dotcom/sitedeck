import Image from "next/image";
import Link from "next/link";
import type { Obra } from "@/lib/obras";

export default function CardObra({ obra }: { obra: Obra }) {
  return (
    <Link
      href={`/portfolio/${obra.slug}`}
      className="group relative block overflow-hidden rounded-xl bg-deck-ink"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={`/images/obras/${obra.slug}/${obra.capa}-medium.webp`}
          alt={obra.titulo}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deck-ink via-deck-ink/35 to-transparent" />

        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="eyebrow rounded bg-deck-ink/70 px-2.5 py-1.5 text-white/85 backdrop-blur-sm">
            {obra.categoria}
          </span>
        </div>
      </div>

      <div className="relative -mt-20 p-6 sm:p-7">
        <h3 className="text-2xl font-semibold text-white">{obra.titulo}</h3>
        <p className="mt-2 text-sm text-white/55">
          {obra.local} · {obra.ano}
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
          {obra.resumo}
        </p>
        <span className="eyebrow mt-6 inline-flex items-center gap-2 text-deck-accent transition-all group-hover:gap-3">
          Ver obra
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
