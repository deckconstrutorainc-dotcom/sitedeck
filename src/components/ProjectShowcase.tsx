import Image from "next/image";
import Link from "next/link";
import type { Obra } from "@/lib/obras";
import Reveal from "./Reveal";

export default function ProjectShowcase({
  obra,
  layout,
}: {
  obra: Obra;
  layout: "imagem-esquerda" | "imagem-direita" | "full";
}) {
  const info = (
    <div className="flex flex-col justify-center">
      <span className="eyebrow text-deck-grey">{obra.categoria}</span>
      <h3 className="display mt-4 text-3xl text-deck-ink sm:text-4xl">
        {obra.titulo}
      </h3>
      <p className="mt-2 text-sm text-deck-grey">
        {obra.local} · {obra.ano}
      </p>
      <p className="mt-6 max-w-md text-base leading-relaxed text-deck-grey">
        {obra.resumo}
      </p>
      <Link
        href={`/portfolio/${obra.slug}`}
        className="eyebrow mt-8 inline-flex w-fit items-center gap-2 border-b border-deck-ink/25 pb-1 text-deck-ink transition-all hover:gap-3 hover:border-deck-ink"
      >
        Ver projeto
        <span aria-hidden>→</span>
      </Link>
    </div>
  );

  const foto = (
    <Link
      href={`/portfolio/${obra.slug}`}
      className="group relative block aspect-[16/10] overflow-hidden rounded-sm"
    >
      <Image
        src={`/images/obras/${obra.slug}/${obra.capa}-full.webp`}
        alt={obra.titulo}
        fill
        sizes="(min-width: 1024px) 65vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </Link>
  );

  if (layout === "full") {
    return (
      <Reveal>
        <div>
          {foto}
          <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_1.3fr]">{info}</div>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <div
        className={`grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-14 ${
          layout === "imagem-direita" ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {foto}
        {info}
      </div>
    </Reveal>
  );
}
