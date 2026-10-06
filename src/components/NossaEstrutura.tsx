import Image from "next/image";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const DESTAQUES = [
  "Mais de 30 anos de experiência",
  "Sede própria",
  "Estrutura administrativa e operacional",
  "Energia solar",
];

export default function NossaEstrutura() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal>
        <Eyebrow>Nossa Estrutura</Eyebrow>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-stretch">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:h-full lg:aspect-auto">
            <Image
              src="/images/sede/fachada-full.webp"
              alt="Fachada da sede da Deck Construtora e Incorporadora"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="flex h-full flex-col justify-center">
            <h2 className="display text-3xl text-deck-ink sm:text-4xl">
              Estrutura para construir grandes projetos.
            </h2>
            <p className="mt-5 leading-relaxed text-deck-ink/70">
              A Deck Construtora conta com sede própria e estrutura física,
              administrativa e operacional preparada para apoiar o
              planejamento, a gestão e a execução de obras com eficiência,
              organização e suporte técnico.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
              {DESTAQUES.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 text-sm text-deck-ink/80"
                >
                  <span className="mt-[0.4rem] h-1.5 w-1.5 flex-none rounded-full bg-deck-accent-strong" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* MOSAICO: vista aérea, interior, pátio */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Reveal delay={0.08}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/sede/aerea-medium.webp"
              alt="Vista aérea da sede da Deck Construtora"
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/sede/recepcao-medium.webp"
              alt="Recepção da sede da Deck Construtora"
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/sede/patio-medium.webp"
              alt="Pátio coberto da sede da Deck Construtora"
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* ENERGIA SOLAR */}
      <div className="mt-6 grid gap-4 overflow-hidden rounded-2xl bg-deck-bone-soft lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[16/10] w-full overflow-hidden lg:h-full lg:aspect-auto">
            <Image
              src="/images/sede/solar-medium.webp"
              alt="Painéis solares instalados na cobertura da sede da Deck Construtora"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex h-full flex-col justify-center p-8 sm:p-10">
            <span className="eyebrow text-deck-navy">
              Eficiência e responsabilidade
            </span>
            <p className="mt-4 leading-relaxed text-deck-ink/70">
              A sede da Deck conta com sistema de geração de energia solar,
              reforçando o compromisso da empresa com eficiência e
              responsabilidade operacional.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
