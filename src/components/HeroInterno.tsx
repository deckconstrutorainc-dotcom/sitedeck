import Image from "next/image";
import Reveal from "./Reveal";

export default function HeroInterno({
  eyebrow,
  titulo,
  descricao,
  imagem,
}: {
  eyebrow: string;
  titulo: string;
  descricao?: string;
  imagem: string;
}) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-deck-ink">
      <Image src={imagem} alt="" fill priority aria-hidden className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-deck-ink via-deck-ink/75 to-deck-ink/35" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-36 sm:px-8">
        <Reveal>
          <span className="eyebrow text-white/60">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display mt-6 max-w-3xl text-4xl text-white sm:text-5xl lg:text-[3.5rem]">
            {titulo}
          </h1>
        </Reveal>
        {descricao && (
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              {descricao}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
