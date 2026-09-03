import Image from "next/image";
import Link from "next/link";
import type { Obra } from "@/lib/obras";

export default function CardObra({ obra }: { obra: Obra }) {
  return (
    <Link href={`/portfolio/${obra.slug}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-deck-ink">
        <Image
          src={`/images/obras/${obra.slug}/${obra.capa}-medium.webp`}
          alt={obra.titulo}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-deck-line pb-6">
        <div>
          <span className="eyebrow text-deck-grey">{obra.categoria}</span>
          <h3 className="display mt-2 text-2xl text-deck-ink">{obra.titulo}</h3>
          <p className="mt-1 text-sm text-deck-grey">
            {obra.local} · {obra.ano}
          </p>
        </div>
        <span className="eyebrow flex flex-none items-center gap-2 text-deck-ink transition-all group-hover:gap-3">
          Ver projeto
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
