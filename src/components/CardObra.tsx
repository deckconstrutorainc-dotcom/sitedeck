import Image from "next/image";
import Link from "next/link";
import type { Obra } from "@/lib/obras";

export default function CardObra({ obra }: { obra: Obra }) {
  return (
    <Link
      href={`/portfolio/${obra.slug}`}
      className="group block overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-deck-mist">
        <Image
          src={`/images/obras/${obra.slug}/foto-01-medium.webp`}
          alt={obra.titulo}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-deck-navy">
          {obra.categoria}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-deck-graphite">
          {obra.titulo}
        </h3>
        <p className="mt-1 text-sm text-deck-graphite/70">
          {obra.local} · {obra.ano}
        </p>
      </div>
    </Link>
  );
}
